// src/api/stocks.ts
import type {
  Stock, StockQuery, PaginatedResponse,
  SetInitialStockPayload, UpdateMinStockPayload, AdjustStockPayload, ID
} from "../types/stock";
import { getAuthToken } from "../api/client";

/**
 * Base URL dari .env
 * Contoh: VITE_API_URL="http://localhost:8000/api/v1"
 * SOP: dinormalisasi, selalu Authorization: Bearer <token>
 */
const RAW = (import.meta.env as any).VITE_API_URL ?? (import.meta.env as any).VITE_API_BASE_URL;
if (!RAW) throw new Error("VITE_API_URL / VITE_API_BASE_URL belum diset.");
const BASE = RAW.replace(/\/+$/, ''); // no trailing slash

function authHeaders() {
  const token = getAuthToken();
  if (!token) throw new Error("Auth token tidak ditemukan.");
  return {
    "Authorization": `Bearer ${token}`,
  };
}

function jsonHeaders() {
  return { "Content-Type": "application/json", ...authHeaders() };
}

function toQuery(q?: Record<string, unknown>) {
  if (!q) return "";
  const params = new URLSearchParams();
  Object.entries(q).forEach(([k, v]) => {
    if (v === undefined || v === null || v === "") return;
    if (typeof v === "boolean") params.append(k, v ? "1" : "0");
    else params.append(k, String(v));
  });
  return params.toString() ? `?${params.toString()}` : "";
}

/* =========================================================
 * Existing endpoints (tetap)
 * =======================================================*/
export async function listStocks(
  query?: StockQuery,
  init?: { signal?: AbortSignal }
): Promise<PaginatedResponse<Stock>> {
  const url = `${BASE}/stocks${toQuery(query)}`;
  const res = await fetch(url, {
    headers: authHeaders(),
    signal: init?.signal,
  });
  if (!res.ok) throw new Error(`Gagal memuat stok: ${res.status}`);
  return res.json();
}

export async function getStock(id: ID, init?: { signal?: AbortSignal }): Promise<{ data: Stock }> {
  const res = await fetch(`${BASE}/stocks/${id}`, { headers: authHeaders(), signal: init?.signal });
  if (!res.ok) throw new Error(`Gagal memuat stok #${id}: ${res.status}`);
  return res.json();
}

/** Set stok awal (upsert unik: gudang_id + product_variant_id) */
export async function setInitialStock(payload: SetInitialStockPayload): Promise<{ message: string; data: Stock }> {
  const body = JSON.stringify({
    gudang_id: Number(payload.gudang_id),
    product_variant_id: Number(payload.product_variant_id),
    qty: Number(payload.qty),
    ...(payload.min_stok != null ? { min_stok: Number(payload.min_stok) } : {})
  });
  const res = await fetch(`${BASE}/stocks`, { method: "POST", headers: jsonHeaders(), body });
  const json = await res.json();
  if (!res.ok) throw new Error(json?.message || "Gagal set stok awal.");
  return json;
}

/** Ubah threshold min_stok */
export async function updateMinStock(id: ID, payload: UpdateMinStockPayload): Promise<{ message: string; data: Stock }> {
  const res = await fetch(`${BASE}/stocks/${id}`, {
    method: "PATCH",
    headers: jsonHeaders(),
    body: JSON.stringify({ min_stok: Number(payload.min_stok) })
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json?.message || "Gagal update min_stok.");
  return json;
}

/** Penyesuaian manual stok (opsional untuk admin gudang) */
export async function adjustStock(id: ID, payload: AdjustStockPayload): Promise<{ message: string; data: Stock }> {
  const res = await fetch(`${BASE}/stocks/${id}/adjust`, {
    method: "POST",
    headers: jsonHeaders(),
    body: JSON.stringify({
      type: payload.type,
      amount: Number(payload.amount),
      ...(payload.note ? { note: payload.note } : {})
    })
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json?.message || "Gagal adjust stok.");
  return json;
}

export async function deleteStock(id: ID): Promise<{ message: string }> {
  const res = await fetch(`${BASE}/stocks/${id}`, { method: "DELETE", headers: authHeaders() });
  const json = await res.json();
  if (!res.ok) throw new Error(json?.message || `Gagal hapus stok #${id}.`);
  return json;
}

/* =========================================================
 * Tambahan untuk FIFO/Lot & ROP
 * =======================================================*/

/** Type lot/layer stok (sinkron dengan backend) */
export type StockLot = {
  id: number;
  cabang_id: number;
  gudang_id: number;
  product_variant_id: number;
  lot_no?: string | null;
  received_at?: string | null; // ISO timestamp
  expires_at?: string | null;  // YYYY-MM-DD
  qty_received: number;
  qty_remaining: number;
  unit_cost?: number | null;
  created_at?: string;
  updated_at?: string;
};

/** Payload penerimaan lot baru (IN) */
export type ReceiveStockLotPayload = {
  cabang_id: number | string;
  gudang_id: number | string;
  product_variant_id: number | string;
  qty: number | string;
  lot_no?: string | null;
  received_at?: string | null; // ISO (optional)
  expires_at?: string | null;  // YYYY-MM-DD (optional)
  unit_cost?: number | string | null;
  note?: string | null;
  ref_type?: string | null;
  ref_id?: string | null;
};

/** POST /stock-lots — penerimaan stok per-lot (IN) */
export async function receiveStockLot(payload: ReceiveStockLotPayload): Promise<{ data: StockLot }> {
  const body = JSON.stringify({
    cabang_id: Number(payload.cabang_id),
    gudang_id: Number(payload.gudang_id),
    product_variant_id: Number(payload.product_variant_id),
    qty: Number(payload.qty),
    lot_no: payload.lot_no ?? null,
    received_at: payload.received_at ?? null,
    expires_at: payload.expires_at ?? null,
    unit_cost: payload.unit_cost != null ? Number(payload.unit_cost) : null,
    note: payload.note ?? null,
    ref_type: payload.ref_type ?? null,
    ref_id: payload.ref_id ?? null,
  });
  const res = await fetch(`${BASE}/stock-lots`, {
    method: "POST",
    headers: { ...jsonHeaders(), Accept: "application/json" },
    body
  });
  const text = await res.text();
  let json: any = null;
  try { json = text ? JSON.parse(text) : null; } catch { /* biarkan null */ }
  if (!res.ok) {
    const msg = (json && typeof json === "object" && json.message) ? json.message : (text || `HTTP ${res.status}`);
    throw new Error(String(msg));
  }
  return (json ?? { data: null });
}

/** Baris stok untuk daftar ROP */
export type RopRow = {
  id: number;
  gudang_id: number;
  product_variant_id: number;
  qty: number;
  min_stok: number | null;
  safety_stock?: number | null;
  lead_time_days?: number | null;
  reorder_point?: number | null;
  reorder_point_eff?: number | null;
  is_below_rop: boolean;
  variant?: { id: number; sku?: string; nama?: string };
  gudang?: { id: number; nama?: string };
  cabang?: { id: number; nama?: string };
};

/** GET /stocks/rop — daftar item yang berada di bawah/equal ROP */
export async function getRopList(params?: { gudang_id?: number | string; product_variant_id?: number | string }): Promise<RopRow[]> {
  const url = `${BASE}/stocks/rop${toQuery({
    gudang_id: params?.gudang_id != null ? Number(params?.gudang_id) : undefined,
    product_variant_id: params?.product_variant_id != null ? Number(params?.product_variant_id) : undefined,
  })}`;
  const res = await fetch(url, { headers: authHeaders() });
  const json = await res.json();
  if (!res.ok) throw new Error(json?.message || "Gagal memuat data ROP.");
  // API mengembalikan { data: [...] }
  return (json?.data ?? []) as RopRow[];
}

/**
 * PATCH /stocks/:id — update konfigurasi ROP (opsional).
 * Catatan: pastikan backend PATCH /stocks menerima field berikut.
 */
export async function updateRopConfig(
  id: ID,
  payload: Partial<{ safety_stock: number | string; lead_time_days: number | string; reorder_point: number | string }>
): Promise<{ message: string; data: Stock }> {
  const body: Record<string, number> = {};
  if (payload.safety_stock != null) body.safety_stock = Number(payload.safety_stock);
  if (payload.lead_time_days != null) body.lead_time_days = Number(payload.lead_time_days);
  if (payload.reorder_point != null) body.reorder_point = Number(payload.reorder_point);

  const res = await fetch(`${BASE}/stocks/${id}`, { method: "PATCH", headers: jsonHeaders(), body: JSON.stringify(body) });
  const json = await res.json();
  if (!res.ok) throw new Error(json?.message || "Gagal update konfigurasi ROP.");
  return json;
}
