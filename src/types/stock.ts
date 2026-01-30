// src/types/stock.ts
export type ID = number;

export interface PaginatedMeta {
  current_page: number;
  per_page: number;
  total: number;
  last_page: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  current_page: number;
  per_page: number;
  total: number;
  last_page: number;
  next_page_url?: string | null;
  prev_page_url?: string | null;
}

export interface CabangLite { id: ID; nama: string }
export interface GudangLite { id: ID; nama: string }
export interface VariantLite {
  id: ID;
  sku: string;
  nama_produk: string;
  size?: string | null;
  type?: string | null;
  tester?: string | null;
}

export interface Stock {
  id: ID;
  cabang_id: ID;
  gudang_id: ID;
  product_variant_id: ID;
  qty: number;
  min_stok: number;
  is_low_stock: boolean;
  gudang?: GudangLite;
  cabang?: CabangLite;
  variant?: VariantLite;
  created_at?: string;
  updated_at?: string;
}

export type StockQuery = Partial<{
  cabang_id: ID;
  gudang_id: ID;
  product_variant_id: ID;
  low: boolean;
  page: number;
  per_page: number;
}>;

export interface SetInitialStockPayload {
  gudang_id: ID;
  product_variant_id: ID;
  qty: number;
  min_stok?: number;
}

export interface UpdateMinStockPayload {
  min_stok: number;
}

export interface AdjustStockPayload {
  type: 'in' | 'out'; // penyesuaian manual
  amount: number;
  note?: string;
}

export type ROPRow = {
  gudang_id: number;
  variant_id: number;
  sku: string;
  name: string;
  qty_on_hand: number;
  reorder_point: number;
};

export type ReceiveLotPayload = {
  cabang_id: number;
  gudang_id: number;
  product_variant_id: number;
  qty: number;
  lot_no?: string | null;
  received_at?: string | null;
  expires_at?: string | null;
  unit_cost?: number | null;
  note?: string | null;
  ref_type?: string | null;
  ref_id?: string | null;
};

export type StockLot = {
  id: number;
  cabang_id: number;
  gudang_id: number;
  product_variant_id: number;
  lot_no?: string | null;
  received_at?: string | null;
  expires_at?: string | null;
  qty_received: number;
  qty_remaining: number;
  unit_cost?: number | null;
  created_at?: string;
  updated_at?: string;
};