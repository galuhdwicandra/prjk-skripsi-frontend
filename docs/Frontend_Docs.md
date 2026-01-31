# Dokumentasi Frontend (FULL Source)

_Dihasilkan otomatis: 2026-02-01 02:59:31_  
**Root:** `/home/galuhdwicandra/workspace/clone_prime/frontend`


## Daftar Isi

- [API (src/api)](#api-srcapi)
  - [src/api/_files.ts](#file-srcapifilests)
  - [src/api/accounting.ts](#file-srcapiaccountingts)
  - [src/api/auth.ts](#file-srcapiauthts)
  - [src/api/branches.ts](#file-srcapibranchests)
  - [src/api/cash.ts](#file-srcapicashts)
  - [src/api/categories.ts](#file-srcapicategoriests)
  - [src/api/client.ts](#file-srcapiclientts)
  - [src/api/customers.ts](#file-srcapicustomersts)
  - [src/api/dashboard.ts](#file-srcapidashboardts)
  - [src/api/deliveries.ts](#file-srcapideliveriests)
  - [src/api/fees.ts](#file-srcapifeests)
  - [src/api/pos.ts](#file-srcapiposts)
  - [src/api/products.ts](#file-srcapiproductsts)
  - [src/api/settings.ts](#file-srcapisettingsts)
  - [src/api/stocks.ts](#file-srcapistocksts)
  - [src/api/users.ts](#file-srcapiusersts)
  - [src/api/warehouses.ts](#file-srcapiwarehousests)

- [Types (src/types)](#types-srctypes)
  - [src/types/accounting.ts](#file-srctypesaccountingts)
  - [src/types/auth.ts](#file-srctypesauthts)
  - [src/types/branch.ts](#file-srctypesbranchts)
  - [src/types/cash.ts](#file-srctypescashts)
  - [src/types/category.ts](#file-srctypescategoryts)
  - [src/types/customers.ts](#file-srctypescustomersts)
  - [src/types/dashboard.ts](#file-srctypesdashboardts)
  - [src/types/delivery.ts](#file-srctypesdeliveryts)
  - [src/types/fees.ts](#file-srctypesfeests)
  - [src/types/http.ts](#file-srctypeshttpts)
  - [src/types/pos.ts](#file-srctypesposts)
  - [src/types/product.ts](#file-srctypesproductts)
  - [src/types/settings.ts](#file-srctypessettingsts)
  - [src/types/stock.ts](#file-srctypesstockts)
  - [src/types/user.ts](#file-srctypesuserts)
  - [src/types/warehouse.ts](#file-srctypeswarehousets)

- [Components (src/components)](#components-srccomponents)
  - [src/components/accounting/AccountTable.tsx](#file-srccomponentsaccountingaccounttabletsx)
  - [src/components/accounting/JournalEditor.tsx](#file-srccomponentsaccountingjournaleditortsx)
  - [src/components/auth/LoginForm.tsx](#file-srccomponentsauthloginformtsx)
  - [src/components/cabangs/BranchFilters.tsx](#file-srccomponentscabangsbranchfilterstsx)
  - [src/components/cabangs/BranchFormDialog.tsx](#file-srccomponentscabangsbranchformdialogtsx)
  - [src/components/cabangs/BranchTable.tsx](#file-srccomponentscabangsbranchtabletsx)
  - [src/components/cash/AuditTrail.tsx](#file-srccomponentscashaudittrailtsx)
  - [src/components/cash/CashDashboard.tsx](#file-srccomponentscashcashdashboardtsx)
  - [src/components/cash/CashHoldersTable.tsx](#file-srccomponentscashcashholderstabletsx)
  - [src/components/cash/SubmitCashDialog.tsx](#file-srccomponentscashsubmitcashdialogtsx)
  - [src/components/category/CategoryFilters.tsx](#file-srccomponentscategorycategoryfilterstsx)
  - [src/components/category/CategoryFormDialog.tsx](#file-srccomponentscategorycategoryformdialogtsx)
  - [src/components/category/CategoryTable.tsx](#file-srccomponentscategorycategorytabletsx)
  - [src/components/customers/CustomerSelect.tsx](#file-srccomponentscustomerscustomerselecttsx)
  - [src/components/customers/CustomerStageBadge.tsx](#file-srccomponentscustomerscustomerstagebadgetsx)
  - [src/components/customers/CustomerTable.tsx](#file-srccomponentscustomerscustomertabletsx)
  - [src/components/customers/CustomerTimeline.tsx](#file-srccomponentscustomerscustomertimelinetsx)
  - [src/components/dashboard/KPIStatCards.tsx](#file-srccomponentsdashboardkpistatcardstsx)
  - [src/components/dashboard/LowStockList.tsx](#file-srccomponentsdashboardlowstocklisttsx)
  - [src/components/dashboard/QuickActions.tsx](#file-srccomponentsdashboardquickactionstsx)
  - [src/components/dashboard/ReorderPointList.tsx](#file-srccomponentsdashboardreorderpointlisttsx)
  - [src/components/dashboard/Sales7DaysChart.tsx](#file-srccomponentsdashboardsales7dayscharttsx)
  - [src/components/dashboard/TopProductsList.tsx](#file-srccomponentsdashboardtopproductslisttsx)
  - [src/components/delivery/AssignCourierSelect.tsx](#file-srccomponentsdeliveryassigncourierselecttsx)
  - [src/components/delivery/DamageClaimDialog.tsx](#file-srccomponentsdeliverydamageclaimdialogtsx)
  - [src/components/delivery/DeliveryStatusStepper.tsx](#file-srccomponentsdeliverydeliverystatussteppertsx)
  - [src/components/delivery/DeliveryTabs.tsx](#file-srccomponentsdeliverydeliverytabstsx)
  - [src/components/delivery/WaybillPreview.tsx](#file-srccomponentsdeliverywaybillpreviewtsx)
  - [src/components/fees/FeeDetailDialog.tsx](#file-srccomponentsfeesfeedetaildialogtsx)
  - [src/components/fees/FeeTable.tsx](#file-srccomponentsfeesfeetabletsx)
  - [src/components/fees/PeriodFilter.tsx](#file-srccomponentsfeesperiodfiltertsx)
  - [src/components/inventory/ReceiveLotForm.tsx](#file-srccomponentsinventoryreceivelotformtsx)
  - [src/components/layout/ProtectedLayout.tsx](#file-srccomponentslayoutprotectedlayouttsx)
  - [src/components/nav/Sidebar.tsx](#file-srccomponentsnavsidebartsx)
  - [src/components/nav/Topbar.tsx](#file-srccomponentsnavtopbartsx)
  - [src/components/pos/CartPanel.tsx](#file-srccomponentsposcartpaneltsx)
  - [src/components/pos/CheckoutDialog.tsx](#file-srccomponentsposcheckoutdialogtsx)
  - [src/components/pos/ProductGrid.tsx](#file-srccomponentsposproductgridtsx)
  - [src/components/pos/ProductSearch.tsx](#file-srccomponentsposproductsearchtsx)
  - [src/components/pos/ReceiptPreview.tsx](#file-srccomponentsposreceiptpreviewtsx)
  - [src/components/products/ImageDropzone.tsx](#file-srccomponentsproductsimagedropzonetsx)
  - [src/components/products/PriceInput.tsx](#file-srccomponentsproductspriceinputtsx)
  - [src/components/products/ProductFilters.tsx](#file-srccomponentsproductsproductfilterstsx)
  - [src/components/products/ProductFormDialog.tsx](#file-srccomponentsproductsproductformdialogtsx)
  - [src/components/products/ProductTable.tsx](#file-srccomponentsproductsproducttabletsx)
  - [src/components/products/VariantManager.tsx](#file-srccomponentsproductsvariantmanagertsx)
  - [src/components/routing/RequireAuth.tsx](#file-srccomponentsroutingrequireauthtsx)
  - [src/components/routing/RequireRole.tsx](#file-srccomponentsroutingrequireroletsx)
  - [src/components/settings/BackupRestorePanel.tsx](#file-srccomponentssettingsbackuprestorepaneltsx)
  - [src/components/settings/PreferenceToggles.tsx](#file-srccomponentssettingspreferencetogglestsx)
  - [src/components/settings/SettingsForm.tsx](#file-srccomponentssettingssettingsformtsx)
  - [src/components/stock/CabangSelect.tsx](#file-srccomponentsstockcabangselecttsx)
  - [src/components/stock/GudangSelect.tsx](#file-srccomponentsstockgudangselecttsx)
  - [src/components/stock/LowStockIndicator.tsx](#file-srccomponentsstocklowstockindicatortsx)
  - [src/components/stock/SetInitialStockDialog.tsx](#file-srccomponentsstocksetinitialstockdialogtsx)
  - [src/components/stock/StockTable.tsx](#file-srccomponentsstockstocktabletsx)
  - [src/components/stock/VariantPicker.tsx](#file-srccomponentsstockvariantpickertsx)
  - [src/components/users/RoleBadge.tsx](#file-srccomponentsusersrolebadgetsx)
  - [src/components/users/UserFilters.tsx](#file-srccomponentsusersuserfilterstsx)
  - [src/components/users/UserFormDialog.tsx](#file-srccomponentsusersuserformdialogtsx)
  - [src/components/users/UserTable.tsx](#file-srccomponentsusersusertabletsx)
  - [src/components/warehouses/WarehouseFilters.tsx](#file-srccomponentswarehouseswarehousefilterstsx)
  - [src/components/warehouses/WarehouseFormDialog.tsx](#file-srccomponentswarehouseswarehouseformdialogtsx)
  - [src/components/warehouses/WarehouseTable.tsx](#file-srccomponentswarehouseswarehousetabletsx)

- [Pages (src/pages)](#pages-srcpages)
  - [src/pages/accounting/AccountingAccountsIndex.tsx](#file-srcpagesaccountingaccountingaccountsindextsx)
  - [src/pages/accounting/AccountingJournalsIndex.tsx](#file-srcpagesaccountingaccountingjournalsindextsx)
  - [src/pages/accounting/AccountingReports.tsx](#file-srcpagesaccountingaccountingreportstsx)
  - [src/pages/auth/Login.tsx](#file-srcpagesauthlogintsx)
  - [src/pages/cash/CashHistory.tsx](#file-srcpagescashcashhistorytsx)
  - [src/pages/cash/CashIndex.tsx](#file-srcpagescashcashindextsx)
  - [src/pages/categories/CategoryIndex.tsx](#file-srcpagescategoriescategoryindextsx)
  - [src/pages/customers/CustomerDetail.tsx](#file-srcpagescustomerscustomerdetailtsx)
  - [src/pages/customers/CustomersIndex.tsx](#file-srcpagescustomerscustomersindextsx)
  - [src/pages/DashboardHome.tsx](#file-srcpagesdashboardhometsx)
  - [src/pages/delivery/DeliveryDetail.tsx](#file-srcpagesdeliverydeliverydetailtsx)
  - [src/pages/delivery/DeliveryIndex.tsx](#file-srcpagesdeliverydeliveryindextsx)
  - [src/pages/fees/FeeIndex.tsx](#file-srcpagesfeesfeeindextsx)
  - [src/pages/fees/FeeMaster.tsx](#file-srcpagesfeesfeemastertsx)
  - [src/pages/inventory/ReceiveLotPage.tsx](#file-srcpagesinventoryreceivelotpagetsx)
  - [src/pages/master/Cabangs.tsx](#file-srcpagesmastercabangstsx)
  - [src/pages/master/Warehouses.tsx](#file-srcpagesmasterwarehousestsx)
  - [src/pages/pos/Orders.tsx](#file-srcpagesposorderstsx)
  - [src/pages/pos/OrdersIndex.tsx](#file-srcpagesposordersindextsx)
  - [src/pages/products/ProductDetail.tsx](#file-srcpagesproductsproductdetailtsx)
  - [src/pages/products/ProductsPage.tsx](#file-srcpagesproductsproductspagetsx)
  - [src/pages/settings/SettingsIndex.tsx](#file-srcpagessettingssettingsindextsx)
  - [src/pages/stock/StockIndex.tsx](#file-srcpagesstockstockindextsx)
  - [src/pages/users/Index.tsx](#file-srcpagesusersindextsx)

- [Store (src/store)](#store-srcstore)
  - [src/store/auth.ts](#file-srcstoreauthts)
  - [src/store/cart.ts](#file-srcstorecartts)
  - [src/store/useBranches.ts](#file-srcstoreusebranchests)
  - [src/store/useWarehouses.ts](#file-srcstoreusewarehousests)

- [Entry Files](#entry-files)
  - [src/App.tsx](#file-srcapptsx)
  - [src/main.tsx](#file-srcmaintsx)
  - [src/nav-config.ts](#file-srcnav-configts)



## API (src/api)

### src/api/_files.ts

- SHA: `a3fcee732624`  
- Ukuran: 3 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
// src/api/_files.ts
/**
 * Util URL media (gambar/file) yang tahan berbagai kasus:
 * - Jika backend sudah kirim absolute URL (http/https), langsung pakai.
 * - Jika path adalah data: atau blob:, langsung pakai (untuk preview lokal).
 * - Jika path relatif (contoh: "products/a.jpg"), akan dibentuk menjadi
 *   `${BASE}/storage/products/a.jpg`, dengan normalisasi slash yang aman.
 * - Jika path sudah mengandung "storage/...", tidak digandakan (hindari /storage/storage/...).
 * - Jika VITE_FILES_BASE_URL kosong, coba fallback dari VITE_API_BASE_URL (potong "/api" ke belakang).
 */

type Env = {
  VITE_FILES_BASE_URL?: string;
  VITE_API_BASE_URL?: string;
  VITE_API_URL?: string;
};

const ENV = (import.meta.env as unknown as Env) ?? {};

const pickApiBase = (): string | undefined => {
  const raw = ENV.VITE_API_BASE_URL || ENV.VITE_API_URL;
  if (!raw) return undefined;
  // potong segmen '/api...' agar jadi origin + base app
  // contoh: http://localhost:8000/api/v1 -> http://localhost:8000
  try {
    const u = new URL(raw);
    const trimmed = u.pathname.replace(/\/api.*$/i, ""); // hapus mulai '/api'
    u.pathname = trimmed || "/";
    u.search = "";
    u.hash = "";
    return u.toString().replace(/\/+$/, "");
  } catch {
    return undefined;
  }
};

const RAW = ENV.VITE_FILES_BASE_URL || pickApiBase() || "";
const BASE = RAW ? RAW.replace(/\/+$/, "") : "";

/** Helper: cek absolute http(s) URL */
const isHttpUrl = (s: string) => /^https?:\/\//i.test(s);
/** Helper: dukung data: dan blob: (preview lokal/browser) */
const isSpecialUrl = (s: string) => /^(data:|blob:)/i.test(s);

/** Normalisasi path relatif agar tidak dobel 'storage/' dan tanpa leading slash berlebih */
const normalizeRelPath = (p: string): string => {
  let path = String(p).trim();
  // buang leading slash
  path = path.replace(/^\/+/, "");
  // buang leading 'storage/' jika sudah ada (kita akan menambahkan 'storage/' sendiri)
  path = path.replace(/^storage\/+/i, "");
  return path;
};

/**
 * Bangun URL untuk media berbasis path relatif (disk 'public').
 * - Kembalikan `null` jika BASE belum terdefinisi atau path falsy.
 * - Jika `path` sudah absolute/data/blob → return apa adanya.
 */
export function mediaPathToUrl(path?: string | null): string | null {
  if (!path) return null;
  const s = String(path);
  if (isHttpUrl(s) || isSpecialUrl(s)) return s;
  if (!BASE) return null;
  const rel = normalizeRelPath(s);
  return `${BASE}/storage/${rel}`;
}

/**
 * Helper praktis:
 * Terima `imageUrl` (mungkin sudah absolute dari backend) atau `mediaPath` (relatif).
 * Kembalikan URL siap pakai atau `null` jika keduanya tidak valid.
 */
export function ensureImageUrl(
  imageUrl?: string | null,
  mediaPath?: string | null
): string | null {
  // Prioritas: imageUrl absolut lebih dipercaya
  if (imageUrl) {
    if (isHttpUrl(imageUrl) || isSpecialUrl(imageUrl)) return imageUrl;
    // Jika backend kirim 'storage/xxx.jpg' di imageUrl, tetap normalkan
    const rel = normalizeRelPath(imageUrl);
    if (BASE) return `${BASE}/storage/${rel}`;
  }
  return mediaPathToUrl(mediaPath ?? undefined);
}

/**
 * Optional: util untuk debugging env di runtime (tidak dipanggil otomatis).
 * Bisa Anda panggil sekali di bootstrap agar cepat tahu salah env.
 */
export function assertFilesBaseOrWarn(): void {
  if (!BASE) {
    console.warn(
      "[_files] VITE_FILES_BASE_URL tidak di-set dan tidak berhasil fallback dari VITE_API_BASE_URL. Gambar mungkin tidak tampil."
    );
  }
}

```
</details>

### src/api/accounting.ts

- SHA: `3bb4f859a679`  
- Ukuran: 6 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
// src/api/accounting.ts
import { api } from "./client";
import type {
    ID,
    Account,
    AccountCreatePayload,
    AccountUpdatePayload,
    JournalEntry,
    JournalCreatePayload,
    JournalUpdatePayload,
    FiscalPeriod,
    TrialBalanceRow,
    GLRow,
    ProfitLossAgg,
    ReportQuery,
} from "../types/accounting";
import type { Paginated } from "../types/http";
import type { BalanceSheetAgg } from "../types/accounting";

// ========== Accounts ==========
export async function listAccounts(params?: {
    q?: string;
    cabang_id?: ID;
    is_active?: boolean;
    page?: number;
    per_page?: number;
}): Promise<Paginated<Account>> {
    const { data } = await api.get<Paginated<Account>>("/accounting/accounts", {
        params,
    });
    return data;
}

export async function createAccount(payload: AccountCreatePayload) {
    const { data } = await api.post<Account>("/accounting/accounts", payload);
    return data;
}

export async function updateAccount(id: ID, payload: AccountUpdatePayload) {
    const { data } = await api.put<Account>(`/accounting/accounts/${id}`, payload);
    return data;
}

export async function deleteAccount(id: ID) {
    await api.delete(`/accounting/accounts/${id}`);
}

// ========== Journals ==========
export async function listJournals(params?: {
    cabang_id?: ID;
    status?: "DRAFT" | "POSTED";
    date_from?: string;
    date_to?: string;
    page?: number;
    per_page?: number;
    q?: string;
}): Promise<Paginated<JournalEntry>> {
    const resp = await api.get("/accounting/journals", { params });
    const payload = resp.data;

    if (Array.isArray(payload?.data)) {
        return payload as Paginated<JournalEntry>;
    }

    const paginator = payload?.data;
    if (paginator && Array.isArray(paginator.data)) {
        const normalized: Paginated<JournalEntry> = {
            data: paginator.data,
            meta: {
                current_page: paginator.current_page ?? paginator.currentPage ?? 1,
                per_page: paginator.per_page ?? paginator.perPage ?? paginator.per_page ?? 20,
                total: paginator.total ?? 0,
                last_page: paginator.last_page ?? paginator.lastPage ?? 1,
            },
        };
        return normalized;
    }

    return { data: Array.isArray(payload) ? payload : [], meta: { current_page: 1, per_page: 0, total: 0, last_page: 1 } };
}

export async function createJournal(payload: JournalCreatePayload) {
    const { data } = await api.post<JournalEntry>("/accounting/journals", payload);
    return data;
}

export async function updateJournal(id: ID, payload: JournalUpdatePayload) {
    const { data } = await api.put<JournalEntry>(`/accounting/journals/${id}`, payload);
    return data;
}

export async function postJournal(id: ID) {
    const { data } = await api.post<JournalEntry>(`/accounting/journals/${id}/post`, {});
    return data;
}

export async function deleteJournal(id: ID) {
    await api.delete(`/accounting/journals/${id}`);
}

// ========== Periods ==========
export async function listPeriods(params?: { cabang_id?: ID; year?: number }) {
    const { data } = await api.get<FiscalPeriod[]>("/accounting/periods", { params });
    return data;
}

export async function openPeriod(payload: { cabang_id: ID; year: number; month: number }) {
    const { data } = await api.post<FiscalPeriod>("/accounting/periods/open", payload);
    return data;
}

export async function closePeriod(payload: { cabang_id: ID; year: number; month: number }) {
    const { data } = await api.post<FiscalPeriod>("/accounting/periods/close", payload);
    return data;
}

const toNum = (v: unknown) => {
    if (typeof v === 'number') return v;
    if (typeof v === 'string') {
        const n = Number(v);
        return Number.isFinite(n) ? n : 0;
    }
    return 0;
};

// ========== Reports ==========
export async function getTrialBalance(q: ReportQuery) {
    const resp = await api.get("/accounting/reports/trial-balance", { params: q });
    const rows = Array.isArray(resp.data?.data) ? resp.data.data : resp.data;
    // pastikan debit/credit number
    return (rows as TrialBalanceRow[]).map(r => ({
        ...r,
        debit: toNum((r as any).debit),
        credit: toNum((r as any).credit),
    }));
}

export async function getGeneralLedger(q: ReportQuery & { account_id: ID }) {
    const resp = await api.get("/accounting/reports/general-ledger", { params: q });
    const rows = Array.isArray(resp.data?.data) ? resp.data.data : resp.data;
    return (rows as GLRow[]).map(r => ({
        ...r,
        debit: toNum((r as any).debit),
        credit: toNum((r as any).credit),
        balance: toNum((r as any).balance),
    }));
}

export async function getProfitLoss(q: ReportQuery): Promise<ProfitLossAgg> {
    const resp = await api.get("/accounting/reports/profit-loss", { params: q });

    // raw = objek hasil backend, contoh: { Revenue: {debit:"0.00", credit:"123.45"}, Expense: {...} }
    const raw = (resp.data?.data ?? resp.data) as Record<string, { debit: unknown; credit: unknown }>;

    // Bangun object dengan index signature terlebih dulu (legal untuk diindex pakai string)
    const out: Record<string, { debit: number; credit: number }> = {};

    for (const [k, v] of Object.entries(raw)) {
        out[k] = {
            debit: toNum(v?.debit),
            credit: toNum(v?.credit),
        };
    }

    // Kembalikan sebagai ProfitLossAgg (biarkan komponen tetap pakai tipe lamamu)
    return out as unknown as ProfitLossAgg;
}

export async function getBalanceSheet(q: ReportQuery): Promise<BalanceSheetAgg> {
  const resp = await api.get("/accounting/reports/balance-sheet", { params: q });

  // raw = objek hasil backend: { Asset: {debit, credit}, Liability: {...}, Equity: {...} }
  const raw = (resp.data?.data ?? resp.data) as Record<string, { debit: unknown; credit: unknown }>;

  const out: Record<string, { debit: number; credit: number }> = {};
  for (const [k, v] of Object.entries(raw)) {
    out[k] = { debit: toNum(v?.debit), credit: toNum(v?.credit) };
  }
  return out as unknown as BalanceSheetAgg;
}

```
</details>

### src/api/auth.ts

- SHA: `0063238ffc25`  
- Ukuran: 672 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
// src/api/auth.ts
import { api, setAuthToken } from "./client";
import type { LoginPayload, LoginResponse } from "../types/auth";
import type { User } from "../types/user";

export async function login(payload: LoginPayload): Promise<LoginResponse> {
  const { data } = await api.post<LoginResponse>("/auth/login", payload);
  // Backend mengembalikan { token, token_type: "Bearer", user }
  setAuthToken(data.token);
  return data;
}

export async function me(): Promise<User> {
  const { data } = await api.get<{ user: User }>("/auth/me");
  return data.user;
}

export async function logout(): Promise<void> {
  await api.post("/auth/logout");
  setAuthToken(null);
}

```
</details>

### src/api/branches.ts

- SHA: `7adbe25b78fa`  
- Ukuran: 1 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import { api } from "../api/client";
import type {
  BranchListResponse,
  BranchDetailResponse,
  BranchCreatePayload,
  BranchUpdatePayload,
  BranchQuery,
} from "../types/branch";

const base = "/cabangs";

export async function listBranches(query?: BranchQuery): Promise<BranchListResponse> {
  const { data } = await api.get<BranchListResponse>(base, { params: query });
  return data;
}

export async function getBranch(id: number): Promise<BranchDetailResponse> {
  const { data } = await api.get<BranchDetailResponse>(`${base}/${id}`);
  return data;
}

export async function createBranch(payload: BranchCreatePayload): Promise<BranchDetailResponse> {
  const { data } = await api.post<BranchDetailResponse>(base, payload);
  return data;
}

export async function updateBranch(id: number, payload: BranchUpdatePayload): Promise<BranchDetailResponse> {
  const { data } = await api.put<BranchDetailResponse>(`${base}/${id}`, payload);
  return data;
}

export async function deleteBranch(id: number): Promise<void> {
  await api.delete(`${base}/${id}`);
}

```
</details>

### src/api/cash.ts

- SHA: `b460fe26523c`  
- Ukuran: 4 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
// src/api/cash.ts
import { api } from "./client";
import type {
    CashHolder, CashHoldersPaged, CashHolderQuery,
    CashMove, CashMovesPaged, CashMoveQuery,
    SubmitCashPayload, RejectCashPayload, ID
} from "../types/cash";

/** Query-string builder (keeps undefined/null/"" out) */
function toQuery(params: Record<string, unknown>): string {
    const usp = new URLSearchParams();
    Object.entries(params).forEach(([k, v]) => {
        if (v === undefined || v === null || v === "") return;
        usp.set(k, String(v));
    });
    const q = usp.toString();
    return q ? `?${q}` : "";
}

type LaravelPaginator<T> = {
    current_page: number;
    per_page: number;
    total: number;
    last_page: number;
    data: T[];
};

/* -------------------- HOLDERS -------------------- */

export async function listCashHolders(q: CashHolderQuery = {}): Promise<CashHoldersPaged> {
    const { data } = await api.get<LaravelPaginator<{ id: ID; cabang_id: ID; name: string; balance: string; is_active?: boolean }>>(
        `/cash/holders${toQuery(q)}`
    );
    return {
        data: data.data.map((h) => ({
            id: h.id,
            branch_id: h.cabang_id,
            name: h.name,
            balance: Number(h.balance),
            is_active: h.is_active ?? true,
        })),
        meta: {
            current_page: data.current_page,
            per_page: data.per_page,
            total: data.total,
            last_page: data.last_page,
        },
    };
}

export async function getCashHolder(id: ID): Promise<{ data: CashHolder }> {
    const { data } = await api.get<{ id: ID; cabang_id: ID; name: string; balance: string; is_active?: boolean }>(
        `/cash/holders/${id}`
    );
    return {
        data: {
            id: data.id,
            branch_id: data.cabang_id,
            name: data.name,
            balance: Number(data.balance),
            is_active: data.is_active ?? true,
        },
    };
}

/* -------------------- MOVES (submit / approve / reject) -------------------- */

export async function listCashMoves(q: CashMoveQuery = {}): Promise<CashMovesPaged> {
    const { data } = await api.get<LaravelPaginator<{
        id: ID;
        from_holder_id: ID;
        to_holder_id: ID;
        amount: string;
        status: "SUBMITTED" | "APPROVED" | "REJECTED";
        note?: string | null;
        submitted_by: ID;
        approved_by?: ID | null;
        submitted_at?: string; // backend may name timestamps slightly differently; we map defensively
        approved_at?: string | null;
        reject_reason?: string | null;
        moved_at?: string;
        from?: { id: ID; name: string } | null;
        to?: { id: ID; name: string } | null;
    }>>(`/cash/moves${toQuery(q)}`);
    return {
        data: data.data.map((m) => ({
            id: m.id,
            from_holder_id: m.from_holder_id,
            to_holder_id: m.to_holder_id,
            amount: Number(m.amount),
            status: m.status,
            note: m.note ?? null,
            submitted_by: m.submitted_by,
            approved_by: m.approved_by ?? null,
            // prefer explicit fields, fallback to moved_at when needed
            submitted_at: m.submitted_at ?? m.moved_at ?? "",
            approved_at: m.approved_at ?? null,
            reject_reason: m.reject_reason ?? null,
            from_holder: m.from ? { id: m.from.id, name: m.from.name } : undefined,
            to_holder: m.to ? { id: m.to.id, name: m.to.name } : undefined,
        })),
        meta: {
            current_page: data.current_page,
            per_page: data.per_page,
            total: data.total,
            last_page: data.last_page,
        },
    };
}

export async function submitCash(payload: SubmitCashPayload): Promise<{ message: string; data: CashMove }> {
    const { data } = await api.post(`/cash/moves`, payload);
    return { message: "Created", data };
}

export async function approveCashMove(id: ID): Promise<{ message: string; data: CashMove }> {
    const { data } = await api.post(`/cash/moves/${id}/approve`, {});
    return { message: "Approved", data };
}

export async function rejectCashMove(id: ID, payload: RejectCashPayload): Promise<{ message: string; data: CashMove }> {
    const { data } = await api.post(`/cash/moves/${id}/reject`, payload);
    return { message: "Rejected", data };
}

export async function getCashMove(id: ID): Promise<{ data: CashMove }> {
    const { data } = await api.get(`/cash/moves/${id}`);
    return { data };
}
```
</details>

### src/api/categories.ts

- SHA: `d2a5e604751b`  
- Ukuran: 4 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
// src/api/categories.ts
import type {
  Category,
  CategoryCreatePayload,
  CategoryID,
  CategoryQuery,
  CategoryUpdatePayload,
  PaginatedResponse,
  ApiError,
} from "../types/category";
import { getAuthToken } from "../api/client";

/**
 * Ambil base URL dari .env (tanpa slash akhir).
 * Contoh: VITE_API_URL="http://localhost:8000/api/v1"
 */
const ENV = (import.meta).env ?? {};
const RAW = ENV.VITE_API_URL ?? ENV.VITE_API_BASE_URL;
if (!RAW) {
  throw new Error(
    'VITE_API_URL / VITE_API_BASE_URL belum diset. Tambahkan VITE_API_URL="http://localhost:8000/api/v1" di .env frontend lalu restart Vite.'
  );
}
const BASE_URL = String(RAW).replace(/\/+$/, "");

/** Inject Authorization dari storage */
function authHeader(): HeadersInit {
  const t = getAuthToken() ?? "";
  return t ? { Authorization: `Bearer ${t}` } : {};
}

function toQuery(params: Record<string, unknown>): string {
  const usp = new URLSearchParams();
  Object.entries(params).forEach(([k, v]) => {
    if (v === undefined || v === null || v === "") return;
    usp.set(k, String(v));
  });
  const q = usp.toString();
  return q ? `?${q}` : "";
}

async function handle<T>(res: Response): Promise<T> {
  if (res.ok) return (await res.json()) as T;

  let message = res.statusText;
  let errors: Record<string, string[]> | undefined;
  try {
    const body = await res.json();
    message = body?.message ?? message;
    errors = body?.errors;
  } catch {
    /* body bukan JSON */
  }

  const err: ApiError = { status: res.status, message, errors };
  throw err;
}

/** List Kategori: GET /categories?search&is_active&page&per_page&sort */
export async function listCategories(
  query: CategoryQuery = {}
): Promise<PaginatedResponse<Category>> {
  const url =
    `${BASE_URL}/categories` +
    toQuery({
      search: query.search,
      is_active:
        typeof query.is_active === "boolean"
          ? query.is_active
            ? 1
            : 0
          : undefined,
      page: query.page,
      per_page: query.per_page,
      sort: query.sort,
    });

  const res = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      ...authHeader(),
    },
  });

  return handle<PaginatedResponse<Category>>(res);
}

/** Detail: GET /categories/:id */
export async function getCategory(id: CategoryID): Promise<{ data: Category }> {
  const res = await fetch(`${BASE_URL}/categories/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      ...authHeader(),
    },
  });
  return handle<{ data: Category }>(res);
}

/** Create: POST /categories */
export async function createCategory(
  payload: CategoryCreatePayload
): Promise<{ data: Category }> {
  const res = await fetch(`${BASE_URL}/categories`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...authHeader(),
    },
    body: JSON.stringify(payload),
  });
  return handle<{ data: Category }>(res);
}

/** Update: PUT /categories/:id */
export async function updateCategory(
  id: CategoryID,
  payload: CategoryUpdatePayload
): Promise<{ data: Category }> {
  const res = await fetch(`${BASE_URL}/categories/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...authHeader(),
    },
    body: JSON.stringify(payload),
  });
  return handle<{ data: Category }>(res);
}

/** Delete (hard): DELETE /categories/:id */
export async function deleteCategory(
  id: CategoryID
): Promise<{ message: string }> {
  const res = await fetch(`${BASE_URL}/categories/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      ...authHeader(),
    },
  });
  return handle<{ message: string }>(res);
}

```
</details>

### src/api/client.ts

- SHA: `f2f5ed5525c8`  
- Ukuran: 3 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
// src/api/client.ts
import axios from "axios";
import type {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosRequestHeaders,
} from "axios";
import { AxiosHeaders } from "axios";
import type { ApiErrorPayload } from "../types/http";

const TOKEN_KEY = "pp_auth_token";

// --- Strict base resolver (no fallback to :5173) ---
export function getBaseUrl(): string {
  const raw =
    (import.meta.env.VITE_API_BASE_URL as string | undefined) ??
    (import.meta.env.VITE_API_URL as string | undefined) ??
    "";

  const base = raw.replace(/\/+$/, "");
  if (!base) {
    throw new Error(
      "VITE_API_BASE_URL belum diset. Tambahkan ke frontend/.env lalu restart Vite. " +
      'Contoh: VITE_API_BASE_URL="http://localhost:8000/api/v1"'
    );
  }
  if (/^https?:\/\/(localhost|127\.0\.0\.1):5173(\/|$)/i.test(base)) {
    throw new Error(
      "BASE URL salah (mengarah ke :5173). Harusnya http://localhost:8000/api/v1 atau gunakan proxy Vite."
    );
  }
  return base;
}

const BASE = getBaseUrl();

let token: string | null =
  typeof localStorage !== "undefined" ? localStorage.getItem(TOKEN_KEY) : null;

export function setAuthToken(next: string | null): void {
  token = next;
  if (typeof localStorage !== "undefined") {
    if (next) localStorage.setItem(TOKEN_KEY, next);
    else localStorage.removeItem(TOKEN_KEY);
  }
}

export function getAuthToken(): string | null {
  return token;
}

// Axios instance with sane defaults
export const api: AxiosInstance = axios.create({
  baseURL: BASE, // e.g., http://localhost:8000/api/v1
  withCredentials: false,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    // Keep Accept on every request, even unauthenticated ones.
    Accept: "application/json",
  },
});

// --- Helper to set Authorization safely in Axios v1 ---
function setAuthHeader(
  headers: AxiosRequestHeaders | undefined,
  bearer: string
): AxiosRequestHeaders | undefined {
  if (!headers) return headers;
  if (headers instanceof AxiosHeaders) {
    headers.set("Authorization", `Bearer ${bearer}`);
    // Accept is already defaulted above; keep it consistent:
    headers.set("Accept", "application/json");
    return headers;
  }
  (headers as Record<string, string>)["Authorization"] = `Bearer ${bearer}`;
  (headers as Record<string, string>)["Accept"] = "application/json";
  return headers;
}

// Attach Authorization if token exists
api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const t = getAuthToken();
  if (t) {
    config.headers = (config.headers ?? new AxiosHeaders()) as AxiosRequestHeaders;
    setAuthHeader(config.headers, t);
  } else {
    // Ensure Accept remains present even without token
    const h = (config.headers ?? new AxiosHeaders()) as AxiosRequestHeaders;
    if (h instanceof AxiosHeaders) h.set("Accept", "application/json");
    else (h as Record<string, string>)["Accept"] = "application/json";
    config.headers = h;
  }
  return config;
});

// Common error handling
api.interceptors.response.use(
  (res) => res,
  (err: AxiosError<ApiErrorPayload>) => {
    if (err.response?.status === 401) {
      setAuthToken(null);
    }
    return Promise.reject(err);
  }
);

```
</details>

### src/api/customers.ts

- SHA: `3989d1fa109e`  
- Ukuran: 4 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import { api } from './client';
import type {
  Customer,
  CustomerQuery,
  LaravelPaginator,
  CustomerUpsertPayload,
  CustomerDetail,
  CustomerTimelineEvent,
  CustomerStage,
} from '../types/customers';

/** ---------------------------
 *  Backend-specific types (untuk normalisasi READ)
 *  --------------------------- */
type BackendCustomer = Omit<Customer, 'branch_id'> & {
  // backend kirim cabang_id (bisa null)
  cabang_id: number | null;
};

type BackendCustomerDetail = Omit<CustomerDetail, 'customer'> & {
  customer: BackendCustomer;
};

/** ---------------------------
 *  Helpers: normalize & paginator
 *  --------------------------- */
function normalizeCustomer(c: BackendCustomer): Customer {
  const { cabang_id, ...rest } = c;
  // Customer.branch_id bertipe number (non-null) di types kamu.
  // Paksa ke number (fallback 0) agar lolos tipe.
  const branchId: number = typeof cabang_id === 'number' ? cabang_id : 0;
  return { ...(rest as Omit<Customer, 'branch_id'>), branch_id: branchId };
}

function mapPaginator<TIn, TOut>(
  p: LaravelPaginator<TIn>,
  mapper: (x: TIn) => TOut
): LaravelPaginator<TOut> {
  return { ...p, data: p.data.map(mapper) };
}

/** ---------------------------
 *  Helper WRITE (fleksibel branch_id → cabang_id)
 *  - Jika payload punya branch_id, map ke cabang_id.
 *  - Jika tidak, biarkan (berarti payload sudah cabang_id).
 *  --------------------------- */
type MaybeBranch = { branch_id?: number };
type WithCabang<T> = Omit<T, 'branch_id'> & { cabang_id?: number };

function toBackendPayload<T extends object>(payload: T): WithCabang<T> {
  // gunakan 'in' untuk narrowing tanpa any
  if ('branch_id' in (payload as MaybeBranch)) {
    const p = payload as T & Required<MaybeBranch>;
    const { branch_id, ...rest } = p;
    const out: WithCabang<T> = { ...(rest as Omit<T, 'branch_id'>), cabang_id: branch_id };
    return out;
  }
  // payload sudah bentuk backend (punya cabang_id atau tidak membutuhkan field itu)
  return payload as WithCabang<T>;
}

/** ---------------------------
 *  API functions (READ dinormalisasi, WRITE fleksibel)
 *  --------------------------- */
export async function listCustomers(
  params: CustomerQuery
): Promise<LaravelPaginator<Customer>> {
  const { data } = await api.get<LaravelPaginator<BackendCustomer>>('/customers', { params });
  return mapPaginator<BackendCustomer, Customer>(data, normalizeCustomer);
}

export async function getCustomer(id: number): Promise<CustomerDetail> {
  const { data } = await api.get<BackendCustomerDetail>(`/customers/${id}`);
  const normalized: CustomerDetail = {
    ...data,
    customer: normalizeCustomer(data.customer),
  };
  return normalized;
}

export async function getCustomerHistory(id: number): Promise<CustomerTimelineEvent[]> {
  const { data } = await api.get<{ timelines?: CustomerTimelineEvent[] }>(`/customers/${id}/history`);
  return data.timelines ?? [];
}

export async function createCustomer(payload: CustomerUpsertPayload): Promise<Customer> {
  const body = toBackendPayload<CustomerUpsertPayload>(payload);
  const { data } = await api.post<BackendCustomer>(`/customers`, body);
  return normalizeCustomer(data);
}

export async function updateCustomer(
  id: number,
  payload: Partial<CustomerUpsertPayload>
): Promise<Customer> {
  const body = toBackendPayload<Partial<CustomerUpsertPayload>>(payload);
  const { data } = await api.put<BackendCustomer>(`/customers/${id}`, body);
  return normalizeCustomer(data);
}

export async function deleteCustomer(id: number): Promise<void> {
  await api.delete(`/customers/${id}`);
}

export async function changeCustomerStage(
  id: number,
  stage: CustomerStage
): Promise<Customer> {
  const { data } = await api.post<BackendCustomer>(`/customers/${id}/stage`, { stage });
  return normalizeCustomer(data);
}

// alias opsional (kalau masih dipakai di komponen)
export async function setCustomerStage(
  id: number,
  stage: CustomerStage
): Promise<Customer> {
  const { data } = await api.post<BackendCustomer>(`/customers/${id}/stage`, { stage });
  return normalizeCustomer(data);
}

```
</details>

### src/api/dashboard.ts

- SHA: `0f2f4965a39c`  
- Ukuran: 2 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
// src/api/dashboard.ts
import { api } from './client';
import type {
    KPIs,
    Chart7DayPoint,
    TopProduct,
    LowStockRow,
    QuickAction,
    DashboardQuery,
} from '../types/dashboard';

function unwrap<T>(payload: unknown): T {
    const j = payload as Record<string, unknown>;
    if (j && typeof j === 'object' && 'data' in j) {
        return (j.data ?? null) as T;
    }
    return j as unknown as T;
}

/** GET /dashboard/kpis?branch_id=&from=&to= */
export async function getKPIs(q: DashboardQuery): Promise<KPIs> {
    const { data } = await api.get('/dashboard/kpis', {
        params: {
            cabang_id: q.cabang_id ?? undefined,
            from: q.from,
            to: q.to,
        },
    });
    return unwrap<KPIs>(data);
}

/** GET /dashboard/chart7d?branch_id= */
export async function getChart7d(q: DashboardQuery): Promise<Chart7DayPoint[]> {
    const { data } = await api.get('/dashboard/chart7d', {
        params: {
            cabang_id: q.cabang_id ?? undefined,
        },
    });
    return unwrap<Chart7DayPoint[]>(data);
}

/** GET /dashboard/top-products?branch_id=&limit= */
export async function getTopProducts(q: DashboardQuery): Promise<TopProduct[]> {
    const { data } = await api.get('/dashboard/top-products', {
        params: {
            cabang_id: q.cabang_id ?? undefined,
            limit: q.limit ?? 5,
        },
    });
    return unwrap<TopProduct[]>(data);
}

/** GET /dashboard/low-stock?branch_id=&threshold= */
export async function getLowStock(q: DashboardQuery): Promise<LowStockRow[]> {
    const { data } = await api.get('/dashboard/low-stock', {
        params: {
            cabang_id: q.cabang_id ?? undefined,
            threshold: q.threshold,
        },
    });
    return unwrap<LowStockRow[]>(data);
}

/** GET /dashboard/quick-actions?branch_id= */
export async function getQuickActions(q: DashboardQuery): Promise<QuickAction[]> {
    const { data } = await api.get('/dashboard/quick-actions', {
        params: {
            cabang_id: q.cabang_id ?? undefined,
        },
    });
    return unwrap<QuickAction[]>(data);
}

```
</details>

### src/api/deliveries.ts

- SHA: `22cf4beed178`  
- Ukuran: 6 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
// src/api/deliveries.ts
import { api } from "./client";
import type {
    Delivery, DeliveryDetail, DeliveryPaged, DeliveryQuery,
    CreateDeliveryPayload, UpdateStatusPayload, DamageClaimPayload
} from "../types/delivery";
import type { WaybillInfo } from "../types/delivery";
import type { ID } from "../types/pos";

function toQuery(params: Record<string, unknown>): string {
    const usp = new URLSearchParams();
    Object.entries(params).forEach(([k, v]) => {
        if (v === undefined || v === null || v === "") return;
        usp.set(k, String(v));
    });
    const q = usp.toString();
    return q ? `?${q}` : "";
}

/** GET /deliveries */
export async function listDeliveries(q: DeliveryQuery = {}): Promise<DeliveryPaged> {
    const { data } = await api.get<unknown>(`/deliveries${toQuery(q)}`);
    // normalisasi 3 bentuk paginator (kaya modul lain)
    const asAny = data as Record<string, unknown>;
    if (Array.isArray((asAny?.data as unknown[]))) {
        // case: { data: Delivery[], meta: {..} }
        if (asAny.meta && typeof asAny.meta === "object") {
            return { data: asAny.data as Delivery[], meta: asAny.meta as DeliveryPaged["meta"] };
        }
        // case: Laravel classic top-level paginator
        if (typeof asAny.current_page === "number") {
            const meta = {
                current_page: Number(asAny.current_page),
                per_page: Number(asAny.per_page ?? 10),
                total: Number(asAny.total ?? (Array.isArray(asAny.data) ? (asAny.data as unknown[]).length : 0)),
                last_page: Number(asAny.last_page ?? 1),
            };
            return { data: (asAny.data as Delivery[]) ?? [], meta };
        }
    }
    // fallback aman
    return { data: [], meta: { current_page: 1, per_page: 10, total: 0, last_page: 1 } };
}

/** GET /deliveries/:id */
export async function getDelivery(id: ID): Promise<DeliveryDetail> {
    const { data } = await api.get<DeliveryDetail | { data: DeliveryDetail }>(`/deliveries/${id}`);
    return (data as { data?: DeliveryDetail })?.data ?? (data as DeliveryDetail);
}

/** POST /deliveries */
export async function createDelivery(payload: CreateDeliveryPayload): Promise<{ data: DeliveryDetail }> {
    const { data } = await api.post<{ data: DeliveryDetail }>(`/deliveries`, payload);
    return data;
}

/** POST /deliveries/:id/assign */
export async function assignCourier(id: ID, payload: { assigned_to?: number; auto?: boolean }) {
    const { data } = await api.post(`/deliveries/${id}/assign`, payload);
    return data;
}

/** POST /deliveries/:id/status */
export async function updateStatus(id: ID, payload: UpdateStatusPayload): Promise<{ message: string; data: DeliveryDetail }> {
    const { data } = await api.post<{ message: string; data: DeliveryDetail }>(`/deliveries/${id}/status`, payload);
    return data;
}

/** POST /deliveries/:id/damage-claim (multipart: photo) */
export async function damageClaim(id: ID, payload: DamageClaimPayload & { file?: File }): Promise<{ message: string }> {
    const fd = new FormData();
    if (payload.file) fd.append("file", payload.file);
    if (payload.note) fd.append("note", payload.note);
    const { data } = await api.post<{ message: string }>(`/deliveries/${id}/damage-claim`, fd, {
        headers: { "Content-Type": "multipart/form-data" },
    });
    return data;
}

export async function getWaybillInfo(id: number): Promise<WaybillInfo> {
    const { data } = await api.get<WaybillInfo | { data: WaybillInfo }>(`/deliveries/${id}/waybill-info`);
    return (data as { data?: WaybillInfo })?.data ?? (data as WaybillInfo);
}

function buildWaUrl(phoneRaw: string | undefined, text: string): string {
    const phone = (phoneRaw ?? "").replace(/\D+/g, "");
    // normalisasi awalan 0 → +62
    const e164 = phone.startsWith("62") ? phone : (phone.startsWith("0") ? `62${phone.slice(1)}` : phone);
    const encoded = encodeURIComponent(text);
    return `https://wa.me/${e164}?text=${encoded}`;
}

/** GET /deliveries/:id/waybill (HTML) — tampilkan/print */
export async function getWaybillHtml(id: number): Promise<string> {
    const { data } = await api.get<string | { html: string }>(`/deliveries/${id}/note`, {
        headers: { Accept: "text/html,application/json" },
        responseType: "text" as any,
    });
    if (typeof data === "string") return data;
    return (data as { html: string }).html ?? "";
}

export async function sendWaybillWhatsapp(id: number): Promise<{ message: string; wa_url: string }> {
    try {
        const res = await api.post<{ message: string; wa_url?: string; data?: { wa_url?: string; courier_phone?: string; text?: string } }>(
            `/deliveries/${id}/send-wa`,
            {}
        );
        const j = res.data ?? {};
        const wa = j.wa_url ?? j.data?.wa_url;
        if (wa) return { message: j.message ?? "OK", wa_url: wa };

        // backend balikin phone/text minimal → bangun sendiri
        const courierPhone = j.data?.courier_phone ?? "";
        const txt = j.data?.text ?? "Surat jalan tersedia. Silakan cek link/nota di aplikasi.";
        return { message: j.message ?? "OK", wa_url: buildWaUrl(courierPhone, txt) };
    } catch {
        // Fallback TANPA /meta: pakai detail delivery yang sudah ada
        const { data: d } = await api.get<{ data?: DeliveryDetail } | DeliveryDetail>(`/deliveries/${id}`);
        const delivery = (d as { data?: DeliveryDetail })?.data ?? (d as DeliveryDetail);

        // Ambil nomor kurir dari include ringan jika ada; jika tidak ada, tetap kirim pesan generik
        const phone = (delivery as any)?.courier_phone ?? ""; // jika backend mengirimkan field ini
        const code = delivery.order_code ? `#${delivery.order_code}` : `#DLV-${id}`;
        const txt = `Halo, ada Surat Jalan ${code}. Silakan cek detail di aplikasi. Terima kasih.`;
        return { message: "OK", wa_url: buildWaUrl(phone, txt) };
    }
}
```
</details>

### src/api/fees.ts

- SHA: `32753f00ab61`  
- Ukuran: 1 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
// src/api/fees.ts
import { api } from "./client";
import type {
    Fee,
    FeeQuery,
    FeeCreatePayload,
    FeeUpdatePayload,
    PaginatedResponse,
} from "../types/fees";

function cleanParams<T extends Record<string, unknown>>(raw: T): Record<string, string> {
    const out: Record<string, string> = {};
    Object.entries(raw).forEach(([k, v]) => {
        if (v === undefined || v === null || v === "") return;
        out[k] = String(v);
    });
    return out;
}

export async function listFees(query: FeeQuery): Promise<PaginatedResponse<Fee>> {
    const { data } = await api.get<PaginatedResponse<Fee>>("/fees", {
        params: cleanParams(query),
    });
    return data;
}

export async function getFee(id: number): Promise<Fee> {
    const { data } = await api.get<{ data: Fee }>(`/fees/${id}`);
    return data.data;
}

export async function createFee(payload: FeeCreatePayload): Promise<Fee> {
    const { data } = await api.post<{ data: Fee; message: string }>("/fees", payload);
    return data.data;
}

export async function updateFee(id: number, payload: FeeUpdatePayload): Promise<Fee> {
    const { data } = await api.put<{ data: Fee; message: string }>(`/fees/${id}`, payload);
    return data.data;
}

export async function deleteFee(id: number): Promise<void> {
    await api.delete(`/fees/${id}`);
}

```
</details>

### src/api/pos.ts

- SHA: `f9b907be8294`  
- Ukuran: 11 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
// src/api/pos.ts
import type {
  CartItem, CheckoutPayload, Order, QuoteResult, CheckoutPayment, OrdersQuery, OrdersPaged,
  UpdateOrderItemsPayload, ReprintPayload, ResendWaPayload, ID, FeeEntry, FeePaged, FeeQuery,
  CashPosition
} from "../types/pos";
import { getAuthToken } from "./client";

// Base URL normalization (VITE_API_URL like "http://localhost:8000/api/v1")
const RAW = (import.meta.env).VITE_API_URL ?? (import.meta.env).VITE_API_BASE_URL;
if (!RAW) throw new Error("VITE_API_URL / VITE_API_BASE_URL belum diset.");
const BASE = RAW.replace(/\/+$/, ""); // strip trailing slash

function authJsonHeaders(): Record<string, string> {
  const token = getAuthToken();
  if (!token) throw new Error("Token hilang. Login dulu sebelum memanggil POS API.");
  return {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  };
}

// Helper: fail fast on redirects (usually means auth misconfig causing 302 → :5173)
function assertNoRedirect(res: Response): void {
  if (res.redirected) {
    throw new Error(
      `Request ter-redirect ke ${res.url}. Cek token & header Accept: application/json di frontend, serta CORS di backend.`
    );
  }
}

async function json<T>(res: Response): Promise<T> {
  assertNoRedirect(res);
  const text = await res.text();
  if (!res.ok) {
    try {
      const parsed = JSON.parse(text) as unknown;
      const message =
        typeof parsed === "object" && parsed !== null && "message" in parsed
          ? String((parsed as { message: unknown }).message)
          : `HTTP ${res.status}`;
      throw new Error(message);
    } catch {
      throw new Error(text || `HTTP ${res.status}`);
    }
  }
  try {
    return JSON.parse(text) as T;
  } catch {
    throw new Error("Response bukan JSON valid.");
  }
}

export async function quoteCart(items: CartItem[]): Promise<QuoteResult> {
  const res = await fetch(`${BASE}/cart/quote`, {
    method: "POST",
    headers: authJsonHeaders(),
    body: JSON.stringify({ items }),
  });
  return json<QuoteResult>(res);
}

export async function checkout(payload: CheckoutPayload): Promise<Order> {
  // Build payload sesuai backend
  const body = {
    items: payload.items,
    customer: payload.customer,
    customer_id: payload.customer_id ?? null,

    cabang_id: payload.branch_id,
    gudang_id: payload.warehouse_id,
    note: payload.note ?? null,
    cash_position: payload.cash_position ?? null,

    payment: payload.payment,
  };

  const res = await fetch(`${BASE}/checkout`, {
    method: "POST",
    headers: authJsonHeaders(),
    // drop undefined otomatis
    body: JSON.stringify(body),
  });
  return json<Order>(res);
}

export async function addPayment(orderId: number, payment: CheckoutPayment): Promise<Order> {
  const res = await fetch(`${BASE}/orders/${orderId}/payments`, {
    method: "POST",
    headers: authJsonHeaders(),
    body: JSON.stringify({
      method: payment.method,
      amount: payment.amount,
      ref_no: payment.ref_no ?? null,
      payload_json: payment.payload_json ?? undefined,
    }),
  });
  return json<Order>(res);
}

export async function getReceiptHtml(orderId: number): Promise<string> {
  const token = getAuthToken();
  if (!token) throw new Error("Token hilang. Login dulu.");
  const res = await fetch(`${BASE}/orders/${orderId}/print`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "text/html,application/json",
    },
  });
  assertNoRedirect(res);
  if (!res.ok) throw new Error(`Gagal mengambil struk (HTTP ${res.status})`);
  return res.text();
}

// Utility query-string builder
function toQuery(params: Record<string, unknown>): string {
  const usp = new URLSearchParams();
  Object.entries(params).forEach(([k, v]) => {
    if (v === undefined || v === null || v === "") return;
    usp.set(k, String(v));
  });
  const q = usp.toString();
  return q ? `?${q}` : "";
}

type Meta = {
  current_page: number;
  per_page: number;
  total: number;
  last_page: number;
};

type Paginator<T> = Meta & { data: T[] };

function isObjectRecord(x: unknown): x is Record<string, unknown> {
  return typeof x === "object" && x !== null;
}

function isNumber(x: unknown): x is number {
  return typeof x === "number" && Number.isFinite(x);
}

function isMeta(x: unknown): x is Meta {
  if (!isObjectRecord(x)) return false;
  return (
    isNumber(x.current_page) &&
    isNumber(x.per_page) &&
    isNumber(x.total) &&
    isNumber(x.last_page)
  );
}

function isPaginator<T>(x: unknown): x is Paginator<T> {
  if (!isObjectRecord(x)) return false;
  const data = x.data;
  return Array.isArray(data) && isMeta(x);
}

/** GET /orders — daftar pesanan (filter cabang/status, tanggal, search) */
export async function listOrders(q: OrdersQuery = {}): Promise<OrdersPaged> {
  const res = await fetch(`${BASE}/orders${toQuery(q)}`, {
    method: "GET",
    headers: authJsonHeaders(),
  });
  const raw = await json<unknown>(res);

  // A) { data: { current_page, data:[...], per_page, total, last_page } }
  if (isObjectRecord(raw) && "data" in raw) {
    const d = (raw as Record<string, unknown>).data;
    if (isPaginator<Order>(d)) {
      return {
        data: d.data,
        meta: {
          current_page: d.current_page,
          per_page: d.per_page,
          total: d.total,
          last_page: d.last_page,
        },
      };
    }
  }

  // B) { current_page, data:[...], per_page, total, last_page }
  if (isPaginator<Order>(raw)) {
    return {
      data: raw.data,
      meta: {
        current_page: raw.current_page,
        per_page: raw.per_page,
        total: raw.total,
        last_page: raw.last_page,
      },
    };
  }

  // C) { data:[...], meta:{ current_page, per_page, total, last_page } }
  if (isObjectRecord(raw) && "data" in raw && "meta" in raw) {
    const d = (raw as Record<string, unknown>).data;
    const m = (raw as Record<string, unknown>).meta;
    if (Array.isArray(d) && isMeta(m)) {
      return {
        data: d as Order[],
        meta: {
          current_page: m.current_page,
          per_page: m.per_page,
          total: m.total,
          last_page: m.last_page,
        },
      };
    }
  }

  throw new Error("Bentuk respons /orders tidak dikenali (expected paginator).");
}

/** GET /orders/:id — detail order dengan items & payments */
export async function getOrder(id: ID): Promise<Order> {
  const res = await fetch(`${BASE}/orders/${id}`, {
    method: "GET",
    headers: authJsonHeaders(),
  });
  const raw = await json<unknown>(res);

  if (isObjectRecord(raw) && "data" in raw) {
    return (raw as { data: Order }).data;
  }
  return raw as Order;
}

/** PUT /orders/:id/items — edit item/qty/harga (server re-hitungan subtotal/grand_total) */
export async function updateOrderItems(id: ID, payload: UpdateOrderItemsPayload): Promise<Order> {
  const res = await fetch(`${BASE}/orders/${id}/items`, {
    method: "PUT",
    headers: authJsonHeaders(),
    body: JSON.stringify(payload),
  });
  const raw = await json<unknown>(res);

  if (isObjectRecord(raw) && "data" in raw) {
    return (raw as { data: Order }).data;
  }
  return raw as Order;
}

/** POST /orders/:id/reprint — re-print struk (58/80mm) + log audit */
export async function reprintReceipt(id: ID, payload: ReprintPayload): Promise<{ message: string }> {
  const res = await fetch(`${BASE}/orders/${id}/reprint`, {
    method: "POST",
    headers: authJsonHeaders(),
    body: JSON.stringify(payload),
  });
  const j = await json<{ message: string; data: unknown }>(res);
  return { message: j.message };
}

/** POST /orders/:id/resend-wa — kirim ulang ke WhatsApp + log audit */
export async function resendWhatsApp(
  id: ID,
  payload: ResendWaPayload
): Promise<{ message: string; wa_url?: string }> {
  const res = await fetch(`${BASE}/orders/${id}/resend-wa`, {
    method: "POST",
    headers: authJsonHeaders(),
    body: JSON.stringify(payload),
  });

  // BE kadang kirim { message, wa_url } atau { message, data: { wa_url } }
  const j = await json<{ message: string; wa_url?: string; data?: unknown }>(res);

  const wa_url =
    (j as any).wa_url ??
    (isObjectRecord((j as any).data) && typeof (j as any).data.wa_url === "string"
      ? ((j as any).data as Record<string, unknown>).wa_url as string
      : undefined);

  return { message: j.message, wa_url };
}

export async function setOrderCashPosition(orderId: ID, cashPosition: CashPosition): Promise<Order> {
  const res = await fetch(`${BASE}/orders/${orderId}/cash-position`, {
    method: "POST",
    headers: authJsonHeaders(),
    body: JSON.stringify({ cash_position: cashPosition }),
  });
  return json<Order>(res);
}

/** GET /fee-entries — list fees (admin sees all; others see filtered; `mine=1` allowed) */
export async function listFees(q: FeeQuery = {}): Promise<FeePaged> {
  const res = await fetch(
    `${BASE}/fee-entries${toQuery({
      cabang_id: q.cabang_id,
      from: q.from,
      to: q.to,
      pay_status: q.pay_status,
      page: q.page,
      per_page: q.per_page,
    })}`,
    {
      method: "GET",
      headers: authJsonHeaders(),
    }
  );
  // Backends in this project sometimes return { data, meta } or Laravel classic paginator
  const raw = await json<unknown>(res);
  if (typeof raw === "object" && raw !== null) {
    const o = raw as Record<string, unknown>;
    // Case A: { data: FeeEntry[], meta: {...} }
    if (Array.isArray(o.data) && typeof o.meta === "object" && o.meta !== null) {
      const m = o.meta as Record<string, unknown>;
      return {
        data: o.data as FeeEntry[],
        meta: {
          current_page: Number(m.current_page ?? 1),
          per_page: Number(m.per_page ?? 10),
          total: Number(m.total ?? (Array.isArray(o.data) ? o.data.length : 0)),
          last_page: Number(m.last_page ?? 1),
        },
      };
    }
    // Case B: Laravel classic top-level
    if (Array.isArray(o.data) && ('current_page' in o || 'last_page' in o)) {
      return {
        data: o.data as FeeEntry[],
        meta: {
          current_page: Number((o as { current_page?: number }).current_page ?? 1),
          per_page: Number((o as { per_page?: number }).per_page ?? 10),
          total: Number((o as { total?: number }).total ?? ((o.data as unknown[]).length)),
          last_page: Number((o as { last_page?: number }).last_page ?? 1),
        },
      };
    }
  }
  // Fallback safe
  return { data: [], meta: { current_page: 1, per_page: 10, total: 0, last_page: 1 } };
}

/** Shortcut for the current user */
/** Export CSV: GET /fee-entries/export?{filters} → triggers download */
export async function exportFeesCsv(q: FeeQuery = {}): Promise<Blob> {
  const url = `${BASE}/fee-entries/export${toQuery({
    cabang_id: q.cabang_id,
    from: q.from,
    to: q.to,
    pay_status: q.pay_status,
  })}`;
  const res = await fetch(url, { method: "GET", headers: authJsonHeaders() });
  assertNoRedirect(res);
  if (!res.ok) throw new Error(`Gagal export CSV (HTTP ${res.status})`);
  return res.blob();
}
```
</details>

### src/api/products.ts

- SHA: `ce93f1e87ef7`  
- Ukuran: 10 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
// src/api/products.ts
import { api } from "./client";
import type {
  ApiError,
  PaginatedResponse,
  Product,
  ProductCreatePayload,
  ProductQuery,
  ProductUpdatePayload,
  ProductVariant,
  VariantCreatePayload,
  VariantUpdatePayload,
  ProductMedia,
  MediaUploadResult,
} from "../types/product";
import { mediaPathToUrl } from "./_files";

// ---------- Helpers ----------
function toBoolNum(v?: boolean): 0 | 1 | undefined {
  return typeof v === "boolean" ? (v ? 1 : 0) : undefined;
}

type AxiosErr = {
  response?: {
    status?: number;
    headers?: Record<string, string>;
    data?: unknown;
  };
  code?: string;
  name?: string;
  message?: string;
};

function isCancelLike(err: unknown): boolean {
  // fetch AbortController & axios cancel
  if (err instanceof DOMException && err.name === "AbortError") return true;
  if (typeof err === "object" && err !== null) {
    const o = err as { code?: string; name?: string; message?: string };
    if (o.name === "AbortError") return true;
    if (o.code === "ERR_CANCELED") return true;
    if (typeof o.message === "string" && /aborted|canceled/i.test(o.message)) return true;
  }
  return false;
}

function isHtmlPayload(x: unknown): boolean {
  if (typeof x !== "string") return false;
  return /<\s*html\b|<!doctype/i.test(x);
}

function pickMessageFromResponse(raw: unknown): string | undefined {
  // JSON { message, errors } seperti biasa
  if (typeof raw === "object" && raw !== null) {
    const o = raw as Record<string, unknown>;
    const msg = typeof o.message === "string" ? o.message : undefined;
    if (msg && msg.trim()) return msg;
    // errors: { field: [ "msg" ] }
    const errs = o.errors as unknown;
    if (errs && typeof errs === "object") {
      const first = Object.values(errs as Record<string, unknown[]>)[0]?.[0];
      if (typeof first === "string" && first.trim()) return first;
    }
  }
  // HTML (redirect/login)
  if (isHtmlPayload(raw)) return "Server mengembalikan HTML (mungkin redirect/login).";
  // String biasa
  if (typeof raw === "string" && raw.trim()) return raw.slice(0, 200);
  return undefined;
}

const DEV = import.meta.env?.DEV === true;

function logApiError(where: string, ax: AxiosErr) {
  if (!DEV) return;
  const st = ax?.response?.status;
  const data = ax?.response?.data;
  const kind =
    typeof data === "string"
      ? (isHtmlPayload(data) ? "html" : "text")
      : (data && typeof data === "object" ? "json" : typeof data);
  console.groupCollapsed(`[api] ❌ ${where} status=${st ?? "-"} kind=${kind}`);
  console.log("raw error:", ax);
  if (typeof data === "string") {
    console.log("data(text):", data.slice(0, 400));
  } else {
    console.log("data(json):", data);
  }
  console.groupEnd();
}

function onApi<T>(p: Promise<T>): Promise<T> {
  return p.catch((err: unknown) => {
    if (isCancelLike(err)) throw err; // biarkan komponen yang mengabaikan

    const ax = err as AxiosErr;
    const status = ax?.response?.status;
    const data = ax?.response?.data;
    const msgFromData = pickMessageFromResponse(data);
    logApiError("onApi", ax);

    // Pesan default yang lebih informatif berdasar status umum
    let fallback = "Terjadi kesalahan pada server.";
    if (status === 401) fallback = "Tidak terautentikasi (401).";
    else if (status === 403) fallback = "Tidak punya izin (403).";
    else if (status === 419) fallback = "Sesi kedaluwarsa (419).";
    else if (status === 404) fallback = "Tidak ditemukan (404).";

    const apiErr: ApiError = {
      status,
      message: msgFromData ?? fallback,
      errors: (typeof data === "object" && data !== null
        ? (data as { errors?: Record<string, string[]> }).errors
        : undefined),
    };
    throw apiErr;
  });
}

/** Type guard untuk respons berbentuk envelope `{ data: T }` */
function isEnvelope<T>(x: unknown): x is { data: T } {
  return !!x && typeof x === "object" && "data" in x;
}

// =================== PRODUCTS ===================

// GET /products
export function listProducts(
  q: ProductQuery = {},
  init?: { signal?: AbortSignal }
): Promise<PaginatedResponse<Product>> {
  const params = {
    q: q.search,
    category_id: q.category_id,
    is_active: toBoolNum(q.is_active),
    page: q.page,
    per_page: q.per_page,
    sort: q.sort,
    // gudang_id: q.gudang_id,  // sengaja dimatikan
    // cabang_id: q.cabang_id,
  };

  // 🔎 Log URL final  params (dev only)
  if (DEV) {
    const cfg = { url: "/products", method: "get" as const, params };
    // getUri mungkin tidak ada di adapter custom; cek dulu
    const uri =
      typeof (api as unknown as { getUri?: (c: typeof cfg) => string }).getUri === "function"
        ? (api as unknown as { getUri: (c: typeof cfg) => string }).getUri(cfg)
        : `/products?${new URLSearchParams(Object.entries(params).filter(([, v]) => v != null).map(([k, v]) => [k, String(v)])).toString()}`;
    console.groupCollapsed("[api] ▶ GET /products");
    console.log("url:", uri);
    console.log("params:", params);
    // coba tampilkan header default instance bila ada
    const d = (api.defaults ?? {}) as { headers?: Record<string, unknown> };
    if (d.headers && typeof d.headers === "object") {
      const h = d.headers as Record<string, unknown>;
      console.log("default headers.Accept:", h["Accept"]);
      console.log("default headers.Authorization:", h["Authorization"]);
    }
    console.groupEnd();
  }

  return onApi(
    api.get<PaginatedResponse<Product>>("/products", {
      params,
      signal: init?.signal,
    }).then((r) => {
      const paged: PaginatedResponse<Product> = r.data;
      const data = Array.isArray(paged?.data) ? paged.data.map(withImageUrl) : [];
      return { ...paged, data };
    })
  );
}

// GET /products/:id
export function getProduct(id: number): Promise<Product> {
  return onApi(
    api.get<Product | { data: Product }>(`/products/${id}`).then((r) => {
      const raw = isEnvelope<Product>(r.data) ? r.data.data : r.data;
      return withImageUrl(raw);
    })
  );
}

// POST /products
export function createProduct(payload: ProductCreatePayload): Promise<{ data: Product }> {
  return onApi(api.post<{ data: Product }>("/products", payload).then((r) => r.data));
}

// PUT /products/:id
export function updateProduct(id: number, payload: ProductUpdatePayload): Promise<{ data: Product }> {
  return onApi(api.put<{ data: Product }>(`/products/${id}`, payload).then((r) => r.data));
}

// DELETE /products/:id (hard delete)
export function deleteProduct(id: number): Promise<{ message: string }> {
  return onApi(api.delete<{ message: string }>(`/products/${id}`).then((r) => r.data));
}

// =================== VARIANTS ===================
// Konvensi: nested di bawah product
// GET /products/:productId/variants
type ApiVariant = Omit<ProductVariant, "harga"> & { harga: string | number | null };

export async function listVariants(
  productId: number,
  init?: { signal?: AbortSignal }                    // <-- added
): Promise<ProductVariant[]> {
  const res = await api.get<ApiVariant[] | { data: ApiVariant[] }>(
    `/products/${productId}/variants`,
    { signal: init?.signal }                         // <-- added
  );

  const raw = res?.data;
  const list: ApiVariant[] = Array.isArray(raw)
    ? raw
    : raw && Array.isArray((raw as { data: ApiVariant[] }).data)
      ? (raw as { data: ApiVariant[] }).data
      : [];

  return list.map((v): ProductVariant => ({
    ...v,
    harga: Number(v.harga ?? 0),
  }));
}
// POST /products/:productId/variants
export function createVariant(
  productId: number,
  payload: VariantCreatePayload
): Promise<{ data: ProductVariant }> {
  return onApi(api.post<{ data: ProductVariant }>(`/products/${productId}/variants`, payload).then((r) => r.data));
}

// PUT /products/:productId/variants/:variantId
export function updateVariant(
  productId: number,
  variantId: number,
  payload: VariantUpdatePayload
): Promise<{ data: ProductVariant }> {
  return onApi(api.put<{ data: ProductVariant }>(`/products/${productId}/variants/${variantId}`, payload).then((r) => r.data));
}

// DELETE /products/:productId/variants/:variantId
export function deleteVariant(productId: number, variantId: number): Promise<{ message: string }> {
  return onApi(api.delete<{ message: string }>(`/products/${productId}/variants/${variantId}`).then((r) => r.data));
}

// =================== MEDIA ===================
// GET /products/:productId/media
export function listMedia(productId: number): Promise<ProductMedia[]> {
  return onApi(api.get<ProductMedia[]>(`/products/${productId}/media`).then((r) => r.data));
}

// POST /products/:productId/media (multipart/form-data)
// - files[]: FileList atau File[]
// - optional: sort_order (number[]) jika ingin set urutan awal
export function uploadMedia(productId: number, files: File[] | FileList): Promise<MediaUploadResult> {
  const fd = new FormData();
  const arr = Array.from(files as File[]).filter(Boolean);
  if (arr.length === 0) throw { message: "Pilih minimal 1 file gambar." };

  // WAJIB: hanya 'files[]'
  arr.forEach((f) => fd.append("files[]", f));

  // JANGAN set Content-Type manual, biar browser set boundary.
  return onApi(api.post<MediaUploadResult>(`/products/${productId}/media`, fd).then((r) => r.data));
}

// PUT /products/:productId/media/set-primary
export function setPrimaryMedia(productId: number, mediaId: number): Promise<{ message: string }> {
  return onApi(
    api.post<{ message: string }>(`/products/${productId}/media/set-primary`, { media_id: mediaId }).then((r) => r.data)
  );
}

function withImageUrl<T extends Product>(p: T): T {
  if ((p).image_url) return p; // backend already provides it
  const primary = p.media?.find((m) => m.is_primary)?.path;
  const first = p.media?.[0]?.path;
  const url = mediaPathToUrl(primary || first);
  return { ...p, image_url: url };
}

// PUT /products/:productId/media/:mediaId (ubah urutan / flag)
export function updateMedia(
  productId: number,
  mediaId: number,
  payload: Partial<Pick<ProductMedia, "sort_order" | "is_primary">>
): Promise<{ data: ProductMedia }> {
  return onApi(api.put<{ data: ProductMedia }>(`/products/${productId}/media/${mediaId}`, payload).then((r) => r.data));
}

// DELETE /products/:productId/media/:mediaId
export function deleteMedia(productId: number, mediaId: number): Promise<{ message: string }> {
  return onApi(api.delete<{ message: string }>(`/products/${productId}/media/${mediaId}`).then((r) => r.data));
}

```
</details>

### src/api/settings.ts

- SHA: `8e45a2781d07`  
- Ukuran: 2 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import { api } from './client';
import type {
    LaravelPaginator,
    Setting,
    SettingQuery,
    SettingUpsertPayload,
    SettingBulkUpsertPayload,
    SettingExportQuery,
    SettingExportData,
    SettingImportPayload,
    SettingImportResult,
} from '../types/settings';

/** GET /api/v1/settings */
export async function listSettings(params: SettingQuery): Promise<LaravelPaginator<Setting>> {
    const { data } = await api.get<LaravelPaginator<Setting>>('/settings', { params });
    return data;
}

/** POST /api/v1/settings/upsert */
export async function upsertSetting(payload: SettingUpsertPayload): Promise<Setting> {
    const { data } = await api.post<{ data: Setting }>('/settings/upsert', payload);
    return data.data;
}

/** POST /api/v1/settings/bulk-upsert */
export async function bulkUpsertSettings(payload: SettingBulkUpsertPayload): Promise<number> {
    const { data } = await api.post<{ data: { count: number } }>('/settings/bulk-upsert', payload);
    return data.data.count;
}

/** DELETE /api/v1/settings/{id} */
export async function deleteSetting(id: number): Promise<void> {
    await api.delete(`/settings/${id}`);
}

/** GET /api/v1/settings/export */
export async function exportSettings(params: SettingExportQuery): Promise<SettingExportData> {
    const { data } = await api.get<{ data: SettingExportData }>('/settings/export', { params });
    return data.data;
}

/** POST /api/v1/settings/import */
export async function importSettings(payload: SettingImportPayload): Promise<SettingImportResult> {
    const { data } = await api.post<{ data: SettingImportResult; message: string }>('/settings/import', payload);
    return data.data;
}

```
</details>

### src/api/stocks.ts

- SHA: `d5bf9652ebe2`  
- Ukuran: 8 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
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

```
</details>

### src/api/users.ts

- SHA: `715b9c313a91`  
- Ukuran: 4 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
// src/api/users.ts
import { api } from "./client";
import type { Paginated } from "../types/http";
import type { Role, User } from "../types/user";

export interface UsersQuery {
  q?: string;
  role?: Role;
  cabang_id?: number;
  is_active?: boolean;
  per_page?: number;
  page?: number;
}

type Meta = Paginated<unknown>["meta"];

type RawPaginator<T> = {
  data: T[];
  current_page?: number;
  per_page?: number | string;
  total?: number;
  last_page?: number;
} & Record<string, unknown>;

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null;
}
function isNumberLike(v: unknown): v is number | string {
  return typeof v === "number" || typeof v === "string";
}
function asNumber(v: unknown, fallback: number): number {
  if (typeof v === "number") return v;
  if (typeof v === "string") {
    const n = Number(v);
    return Number.isFinite(n) ? n : fallback;
  }
  return fallback;
}

function hasMeta<T>(v: unknown): v is Paginated<T> {
  if (!isRecord(v)) return false;
  const meta = v.meta;
  if (!isRecord(meta)) return false;
  return (
    isNumberLike(meta.current_page) &&
    isNumberLike(meta.per_page) &&
    isNumberLike(meta.total) &&
    isNumberLike(meta.last_page) &&
    Array.isArray((v as { data: unknown }).data)
  );
}

function looksLikeRawPaginator<T>(v: unknown): v is RawPaginator<T> {
  if (!isRecord(v)) return false;
  return Array.isArray(v.data) && (
    "current_page" in v || "per_page" in v || "total" in v || "last_page" in v
  );
}

function normalizeMeta(m: Partial<Meta>): Meta {
  return {
    current_page: asNumber(m.current_page, 1),
    per_page: asNumber(m.per_page, 10),
    total: asNumber(m.total, Array.isArray((m as unknown as { data: unknown[] }).data) ? (m as unknown as { data: unknown[] }).data.length : 0),
    last_page: asNumber(m.last_page, 1),
  };
}

function toPaginated<T>(raw: unknown): Paginated<T> {
  // Case 1: backend sudah { data, meta }
  if (hasMeta<T>(raw)) {
    // pastikan angka dipaksa number (kalau server kirim string)
    return {
      data: raw.data,
      meta: normalizeMeta(raw.meta),
    };
  }

  // Case 2: Laravel paginator klasik (top-level current_page/last_page)
  if (looksLikeRawPaginator<T>(raw)) {
    const r = raw as RawPaginator<T>;
    return {
      data: (Array.isArray(r.data) ? r.data : []) as T[],
      meta: normalizeMeta({
        current_page: asNumber(r.current_page, 1),
        per_page: asNumber(r.per_page, 10),
        total: asNumber(r.total, Array.isArray(r.data) ? r.data.length : 0),
        last_page: asNumber(r.last_page, 1),
      }),
    };
  }

  // Case 3: fallback aman
  return {
    data: [],
    meta: { current_page: 1, per_page: 10, total: 0, last_page: 1 },
  };
}

export interface CreateUserPayload {
  name: string;
  email: string;
  phone?: string | null;
  password: string;
  cabang_id?: number | null;
  role: Role;
  is_active?: boolean;
}

export interface UpdateUserPayload {
  name?: string;
  email?: string;
  phone?: string | null;
  password?: string; // opsional; kalau kosong jangan kirim
  cabang_id?: number | null;
  role?: Role;
  is_active?: boolean;
}

export async function listUsers(q: UsersQuery = {}): Promise<Paginated<User>> {
  const { data } = await api.get<unknown>("/users", { params: q });
  return toPaginated<User>(data);
}

export async function getUser(id: number): Promise<User> {
  const { data } = await api.get<User>(`/users/${id}`);
  return data;
}

export async function createUser(payload: CreateUserPayload): Promise<User> {
  const { data } = await api.post<User>("/users", payload);
  return data;
}

export async function updateUser(id: number, payload: UpdateUserPayload): Promise<User> {
  const { data } = await api.put<User>(`/users/${id}`, payload);
  return data;
}

export async function deleteUser(id: number): Promise<void> {
  await api.delete(`/users/${id}`);
}

```
</details>

### src/api/warehouses.ts

- SHA: `9254699bae7b`  
- Ukuran: 1 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import { api } from "../api/client";
import type {
  WarehouseListResponse,
  WarehouseDetailResponse,
  WarehouseCreatePayload,
  WarehouseUpdatePayload,
  WarehouseQuery,
} from "../types/warehouse";

const base = "/gudangs";

export async function listWarehouses(query?: WarehouseQuery): Promise<WarehouseListResponse> {
  const { data } = await api.get<WarehouseListResponse>(base, { params: query });
  return data;
}

export async function getWarehouse(id: number): Promise<WarehouseDetailResponse> {
  const { data } = await api.get<WarehouseDetailResponse>(`${base}/${id}`);
  return data;
}

export async function createWarehouse(payload: WarehouseCreatePayload): Promise<WarehouseDetailResponse> {
  const { data } = await api.post<WarehouseDetailResponse>(base, payload);
  return data;
}

export async function updateWarehouse(id: number, payload: WarehouseUpdatePayload): Promise<WarehouseDetailResponse> {
  const { data } = await api.put<WarehouseDetailResponse>(`${base}/${id}`, payload);
  return data;
}

export async function deleteWarehouse(id: number): Promise<void> {
  await api.delete(`${base}/${id}`);
}

```
</details>



## Types (src/types)

### src/types/accounting.ts

- SHA: `b7acffb6842e`  
- Ukuran: 3 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
// src/types/accounting.ts
// Keep IDs nominal & explicit
export type ID = number;

export type AccountType =
    | "Asset"
    | "Liability"
    | "Equity"
    | "Revenue"
    | "Expense";

export type NormalBalance = "DEBIT" | "CREDIT";

export type Account = {
    id: ID;
    cabang_id: ID;
    code: string;
    name: string;
    type: AccountType;
    normal_balance: NormalBalance;
    parent_id: ID | null;
    is_active: boolean;
    created_at?: string | null;
    updated_at?: string | null;
};

export type AccountCreatePayload = {
    cabang_id: ID | null;
    code: string;
    name: string;
    type: AccountType;
    normal_balance: NormalBalance;
    parent_id?: ID | null;
    is_active: boolean;
};

export type AccountUpdatePayload = Partial<AccountCreatePayload>;

export type JournalStatus = "DRAFT" | "POSTED";

export type JournalLine = {
    account_id: ID;
    cabang_id: ID;
    debit: number;   // numeric(18,2) — never negative
    credit: number;  // numeric(18,2) — never negative
    ref_type?: string | null;
    ref_id?: ID | null;
};

export type JournalEntry = {
    id: ID;
    cabang_id: ID;
    journal_date: string; // YYYY-MM-DD
    number: string;
    description?: string | null;
    status: JournalStatus;
    period_year: number;  // smallint
    period_month: number; // smallint 1..12
    lines?: (JournalLine & { id?: ID })[];
    created_at?: string | null;
    updated_at?: string | null;
};

export type JournalCreatePayload = {
    cabang_id: ID;
    journal_date: string;
    number: string;
    description?: string | null;
    lines: JournalLine[];
};

export type JournalUpdatePayload = Partial<JournalCreatePayload>;

export type FiscalPeriod = {
    id: ID;
    cabang_id: ID;
    year: number;
    month: number;
    status: "OPEN" | "CLOSED";
    created_at?: string | null;
    updated_at?: string | null;
};

export type PeriodOpenPayload = { cabang_id: ID; year: number; month: number };
export type PeriodClosePayload = PeriodOpenPayload;

export type TrialBalanceRow = {
    id: ID;
    code: string;
    name: string;
    type: AccountType;
    normal_balance: NormalBalance;
    debit: number;
    credit: number;
};

export type GLRow = {
    number: string;
    journal_date: string;
    debit: number;
    credit: number;
    ref_type?: string | null;
    ref_id?: ID | null;
};

export type ProfitLossAgg = {
    Revenue?: { debit: number; credit: number };
    Expense?: { debit: number; credit: number };
};

export type ReportQuery = Partial<{
    cabang_id: ID;
    year: number;
    month: number;
    account_id: ID; // for GL
    page: number;
    per_page: number;
}>;

// generic pagination types already exist in src/types/http.ts
export type { Paginated, PaginatedMeta } from "./http";

export type BalanceSheetAgg = {
  Asset?: { debit: number; credit: number };
  Liability?: { debit: number; credit: number };
  Equity?: { debit: number; credit: number };
};

```
</details>

### src/types/auth.ts

- SHA: `24e0a4e2ca1a`  
- Ukuran: 424 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
// src/types/auth.ts
import type { User } from "./user";

export type Role =
  | "Superadmin"
  | "Admin Cabang"
  | "Kasir"
  | "Sales"
  | "Kurir"
  | "Washerman";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;          // "Bearer" token string
  token_type: "Bearer";   // backend kirim "Bearer"
  user: User;             // profil user aktif
}

```
</details>

### src/types/branch.ts

- SHA: `4f02a01f85e5`  
- Ukuran: 1 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import type { Warehouse } from "./warehouse";

export type Branch = {
  id: number;
  nama: string;
  kota: string;
  alamat: string;
  telepon: string | null;
  jam_operasional: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  gudangs?: Warehouse[];
};

// ikut pola meta di proyekmu (samakan dengan Users)
export type PaginatedMeta = {
  current_page: number;
  per_page: number | string;
  total: number;
  last_page: number;
};

export type BranchListResponse = {
  success: boolean;
  data: Branch[];
  meta: PaginatedMeta;
};

export type BranchDetailResponse = {
  success: boolean;
  data: Branch;
};

export type BranchQuery = {
  q?: string;
  kota?: string;
  is_active?: boolean;
  page?: number;
  per_page?: number | string;
  sort?: string; // "-id" | "id" | "nama" | "kota" | "is_active" | "created_at"
};

export type BranchCreatePayload = {
  nama: string;
  kota: string;
  alamat: string;
  telepon?: string | null;
  jam_operasional?: string | null;
  is_active?: boolean;
};

export type BranchUpdatePayload = Partial<BranchCreatePayload>;

```
</details>

### src/types/cash.ts

- SHA: `014137b8923b`  
- Ukuran: 2 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
// src/types/cash.ts
import type { ID } from "./pos";
export type { ID } from "./pos";
import type { PaginatedMeta } from "./http";

/** Cash holder = “where the cash is” (till, safe, bank) per branch */
export type CashHolderType = "TILL" | "SAFE" | "BANK";
export type CashHolder = {
    id: ID;
    branch_id: ID;
    name: string;
    balance: number;
    is_active: boolean;
    created_at?: string;
    updated_at?: string;
};

export type CashHolderQuery = Partial<{
    q: string;
    branch_id: ID;
    is_active: boolean;
    page: number;
    per_page: number;
    sort?: string;
}>;

export type CashHoldersPaged = { data: CashHolder[]; meta: PaginatedMeta };

export type CashMoveStatus = "SUBMITTED" | "APPROVED" | "REJECTED";

export type CashMove = {
    id: ID;
    from_holder_id: ID;
    to_holder_id: ID;
    amount: number;
    status: CashMoveStatus;
    note?: string | null;
    submitted_by: ID;
    approved_by?: ID | null;
    submitted_at: string;
    approved_at?: string | null;
    reject_reason?: string | null;
    created_at?: string;
    updated_at?: string;

    // embeds (optional from backend)
    from_holder?: { id: ID; name: string };
    to_holder?: { id: ID; name: string };
};

export type CashMoveQuery = Partial<{
    q: string;                  // holder name / note
    holder_id: ID;              // either from/to
    status: CashMoveStatus;
    branch_id: ID;
    date_from: string;          // YYYY-MM-DD
    date_to: string;            // YYYY-MM-DD
    page: number;
    per_page: number;
    sort?: string;
}>;

export type CashMovesPaged = { data: CashMove[]; meta: PaginatedMeta };

export type SubmitCashPayload = {
    from_holder_id: ID;
    to_holder_id: ID;
    amount: number;
    note?: string | null;
    moved_at: string;           // ISO string required by backend
    idempotency_key?: string;
};

export type RejectCashPayload = { reason: string };

```
</details>

### src/types/category.ts

- SHA: `a68c0b6ea217`  
- Ukuran: 1 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
// src/types/category.ts

export type CategoryID = number;

export type SortCategory =
  | "nama"
  | "-nama"
  | "created_at"
  | "-created_at";

export interface Category {
  id: CategoryID;
  nama: string;
  slug: string;
  deskripsi: string | null;
  is_active: boolean;
  created_at?: string | null;
  updated_at?: string | null;
  /** Opsional: jika API menambahkan agregat jumlah produk per kategori */
  products_count?: number;
}

export interface CategoryCreatePayload {
  nama: string;
  deskripsi?: string;
  is_active?: boolean;
  slug?: string;
}

export interface CategoryUpdatePayload {
  nama?: string;
  deskripsi?: string | null;
  is_active?: boolean;
  slug?: string;
}

export interface CategoryQuery {
  page?: number;
  per_page?: number;
  search?: string;
  is_active?: boolean;
  sort?: SortCategory;
}

/** Laravel Paginator (disederhanakan biar aman dipakai lintas modul) */
export interface PaginatedMeta {
  current_page: number;
  per_page: number;
  total: number;
  last_page: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: PaginatedMeta;
}

export interface ApiError {
  status: number;
  message: string;
  errors?: Record<string, string[]>;
}

```
</details>

### src/types/customers.ts

- SHA: `4678fce94e0a`  
- Ukuran: 2 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
export type CustomerStage = 'LEAD' | 'ACTIVE' | 'CHURN';

export interface Customer {
    id: number;
    branch_id: number;
    nama: string;
    phone?: string | null;
    email?: string | null;
    alamat: string | null;
    catatan: string | null;
    stage: CustomerStage; // default 'ACTIVE' ketika auto-created
    last_order_at?: string | null;
    created_at: string;
    updated_at: string;
}

export type ID = number | string;
export interface CustomerQuery {
    q?: string;
    stage?: CustomerStage;
    from?: string; // ISO date
    to?: string;   // ISO date
    page?: number;
    per_page?: number;
    cabang_id?: ID
}

export interface LaravelPaginator<T> {
    current_page: number;
    data: T[];
    first_page_url: string | null;
    from: number | null;
    last_page: number;
    last_page_url: string | null;
    links?: Array<{ url: string | null; label: string; active: boolean }>;
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number | null;
    total: number;
}

export interface CustomerUpsertPayload {
    nama: string;
    phone: string;
    email?: string | null;
    alamat?: string | null;
    catatan?: string | null;
}

export interface CustomerDetail {
    customer: Customer;
    orders: Array<{
        id: number;
        code: string;
        total: number;
        grand_total: string;
        status: string;
        ordered_at: string;
        paid_at?: string | null;
        created_at: string;
    }>;
}

export type CustomerTimelineEventType = 'ORDER' | 'PAYMENT' | 'DELIVERY' | 'NOTE';

export interface CustomerTimelineEvent {
    id: number;
    event_type: CustomerTimelineEventType;
    title?: string | null;
    note?: string | null;
    meta?: Record<string, unknown> | null;
    happened_at: string;
    created_at: string;
}

```
</details>

### src/types/dashboard.ts

- SHA: `ae42b1713573`  
- Ukuran: 1 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
// src/types/dashboard.ts
export type ID = number | string;

export type KPIValidation = {
    paid_amount_sum: number;
    orders_vs_payments_diff: number;
    is_consistent: boolean;
};

export type KPIs = {
    orders_total: number;
    orders_paid: number;
    revenue: number;
    avg_ticket: number;
    paid_rate_pct: number;
    validation: KPIValidation;
};

export type Chart7DayPoint = {
    date: string;   // YYYY-MM-DD
    orders: number;
    revenue: number;
};

export type TopProduct = {
    variant_id: number;
    name: string;
    qty: number;
    revenue: number;
};

export type LowStockRow = {
    gudang_id: number;
    variant_id: number;
    sku: string;
    name: string;
    qty_on_hand: number;
    min_stock: number;
};

export type QuickAction =
    | {
        type: 'LOW_STOCK';
        label: string;
        payload: {
            count: number;
            first_sku: string | null;
        };
    }
    | {
        type: 'PAYMENT_CHECK';
        label: string;
    };

export type DashboardQuery = {
    cabang_id?: ID | null;
    from?: string; // ISO date/time accepted by backend (CommonQuery)
    to?: string;
    limit?: number;
    threshold?: number;
};

```
</details>

### src/types/delivery.ts

- SHA: `9afe637d1479`  
- Ukuran: 3 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
// src/types/delivery.ts
import type { ID } from "./pos";

export type DeliveryType = "PICKUP" | "DELIVERY" | "BOTH";
export type DeliveryStatus =
    | "REQUESTED"
    | "ASSIGNED"
    | "PICKED_UP"
    | "ON_ROUTE"
    | "DELIVERED"
    | "FAILED"
    | "CANCELLED";

export type Delivery = {
    id: ID;
    order_id: ID;
    assigned_to?: ID | null;        // user kurir
    type: DeliveryType;
    status: DeliveryStatus;
    pickup_address?: string | null;
    delivery_address?: string | null;
    pickup_lat?: number | null;
    pickup_lng?: number | null;
    delivery_lat?: number | null;
    delivery_lng?: number | null;
    requested_at: string;           // ISO
    completed_at?: string | null;
    created_at?: string;
    updated_at?: string;

    // include ringan (opsional dari backend)
    order_code?: string;
    courier_name?: string | null;
};

export type DeliveryEvent = {
    id: ID;
    delivery_id: ID;
    status: DeliveryStatus | "DAMAGE"; // DAMAGE = event khusus klaim kerusakan
    note?: string | null;
    photo_url?: string | null;
    occurred_at: string;
    created_at?: string;
    updated_at?: string;
};

export type DeliveryQuery = Partial<{
    page: number;
    per_page: number;
    q: string;              // kode order / nama kurir / alamat
    cabang_id: ID;
    status: DeliveryStatus;
    date_from: string;      // YYYY-MM-DD
    date_to: string;        // YYYY-MM-DD
    mine: 0 | 1;            // hanya milik kurir aktif
    sort: "requested_at" | "-requested_at";
}>;

export type PaginatedMeta = {
    current_page: number;
    per_page: number;
    total: number;
    last_page: number;
};
export type DeliveryPaged = { data: Delivery[]; meta: PaginatedMeta };

export type CreateDeliveryPayload = {
    order_id: ID;
    type: DeliveryType;
    pickup_address?: string | null;
    delivery_address?: string | null;
};

export type AssignCourierPayload = {
    courier_id: ID;
    auto?: boolean; // true = minta backend pilih otomatis (auto-assign)
};

export type UpdateStatusPayload = {
    status: Exclude<DeliveryStatus, "REQUESTED" | "ASSIGNED">; // next statuses
    note?: string | null;
};

export type DamageClaimPayload = {
    note?: string | null;
    // upload foto via multipart
};

export type WaybillInfo = {
  waybill_no: string;         // nomor surat jalan
  delivery_id: number;
  order_code: string;          // kode pesanan/nota
  branch_name: string;
  branch_address?: string | null;
  courier_name: string;
  courier_phone?: string | null;
  customer_name: string;
  customer_phone?: string | null;
  pickup_address?: string | null;
  dropoff_address?: string | null;
  scheduled_at?: string | null; // ISO string
  created_at: string;           // ISO string
  items: Array<{
    name: string;
    variant?: string | null;
    qty: number;
    unit?: string | null;
    note?: string | null;
  }>;
  cod_amount?: number | null;   // jika ada COD
  notes?: string | null;        // catatan internal/khusus
  tracking_url?: string | null; // opsional: link tracking
};

export type DeliveryDetail = Delivery & { events: DeliveryEvent[] };

```
</details>

### src/types/fees.ts

- SHA: `94863e23b407`  
- Ukuran: 1 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
// src/types/fees.ts
export type ID = number;

export type FeeKind = "SALES" | "CASHIER" | "COURIER";
export type FeeCalcType = "PERCENT" | "FIXED";
export type FeeBase = "GRAND_TOTAL" | "DELIVERY";

export type Fee = {
    id: ID;
    cabang_id: ID;
    name: string;
    kind: FeeKind;
    calc_type: FeeCalcType;
    rate: number; // numeric(10,2)
    base: FeeBase;
    is_active: boolean;
    created_at?: string | null;
    updated_at?: string | null;
};

export type FeeCreatePayload = {
    cabang_id: ID;
    name: string;
    kind: FeeKind;
    calc_type: FeeCalcType;
    rate: number;
    base: FeeBase;
    is_active: boolean;
};

export type FeeUpdatePayload = Partial<FeeCreatePayload>;

export type FeeQuery = Partial<{
    page: number;
    per_page: number;
    q: string;
    cabang_id: ID;
    kind: FeeKind;
    base: FeeBase;
    is_active: boolean;
    sort: "name" | "-name" | "created_at" | "-created_at";
}>;

export type PaginatedMeta = {
    current_page: number;
    per_page: number;
    total: number;
    last_page: number;
};

export type PaginatedResponse<T> = {
    data: T[];
    meta: PaginatedMeta;
};

```
</details>

### src/types/http.ts

- SHA: `c017f86b7a02`  
- Ukuran: 366 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
// src/types/http.ts
export interface PaginatedMeta {
  current_page: number;
  per_page: number;
  total: number;
  last_page: number;
}

export interface Paginated<T> {
  data: T[];
  meta: PaginatedMeta;
}

export type ServerValidationErrors = Record<string, string[]>;

export interface ApiErrorPayload {
  message?: string;
  errors?: ServerValidationErrors;
}

```
</details>

### src/types/pos.ts

- SHA: `fe587afbfcc3`  
- Ukuran: 5 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
// POS Prime — POS (F6) types
export type ID = number;

export type PaymentMethod = 'CASH' | 'TRANSFER' | 'QRIS' | 'XENDIT';
export type OrderStatus = 'DRAFT' | 'UNPAID' | 'PAID' | 'VOID' | 'REFUND';
export type CashPosition = 'CUSTOMER' | 'CASHIER' | 'SALES' | 'ADMIN';

export type CartItem = {
  variant_id: ID;
  name?: string;         // snapshot (optional at cart time)
  price_hint?: number;   // allow override suggestion; backend will re-quote
  discount?: number;
  qty: number;
};

export type QuoteLine = {
  variant_id: ID;
  name_snapshot: string;
  price: number;
  discount: number;
  qty: number;
  line_total: number;
};
export type QuoteTotals = {
  subtotal: number;
  discount: number;
  tax: number;
  service_fee: number;
  grand_total: number;
};
export type QuoteResult = {
  items: QuoteLine[];
  totals: QuoteTotals;
};

export type CheckoutCustomer = {
  nama?: string;
  phone?: string;
  alamat?: string | null;
};

export type CheckoutPayment = {
  method: PaymentMethod;
  amount: number;
  ref_no?: string | null;
  payload_json?: {
    holder_id: ID;
    collected_by?: 'CASHIER' | 'SALES' | 'COURIER';
    collected_at?: string; // ISO string
  };
};

export type CheckoutPayload = {
  items: CartItem[];
  customer?: CheckoutCustomer;
  warehouse_id: ID;
  branch_id: ID;
  note?: string | null;
  customer_id?: ID;

  // Optional immediate payment (single tender); for split use addPayment API
  payment?: CheckoutPayment;
  cash_position?: CashPosition;
};

export type OrderItem = QuoteLine & { id: ID; order_id: ID };
export type Payment = {
  id: ID;
  order_id: ID;
  method: PaymentMethod;
  amount: number;
  status: 'PENDING' | 'SUCCESS' | 'FAILED' | 'REFUND';
  ref_no?: string | null;
  paid_at?: string | null;
};

export type Order = {
  id: ID;
  kode: string;
  branch_id: ID;
  warehouse_id: ID;
  cashier_id: ID;
  customer_id?: ID | null;
  customer_name?: string | null;
  customer_phone?: string | null;
  customer_address?: string | null;
  status: OrderStatus;
  subtotal: number;
  discount: number;
  tax: number;
  service_fee: number;
  grand_total: number;
  paid_total: number;
  ordered_at: string;
  items: OrderItem[];
  payments: Payment[];
  cash_position?: CashPosition | null;
};

// ---- Orders listing & edit types (F7) ----
export type OrdersSort = 'ordered_at' | '-ordered_at' | 'kode' | '-kode' | 'grand_total' | '-grand_total';

export type OrdersQuery = Partial<{
  page: number;
  per_page: number;
  q: string;                 // cari kode / phone / nama customer
  cabang_id: ID;             // filter by branch (cabang)
  status: OrderStatus;       // DRAFT | UNPAID | PAID | VOID | REFUND
  date_from: string;         // 'YYYY-MM-DD'
  date_to: string;           // 'YYYY-MM-DD'
  sort: OrdersSort;
  cash_position: CashPosition;
}>;

export type PaginatedMeta = {
  current_page: number;
  per_page: number;
  total: number;
  last_page: number;
};

export type OrdersPaged = { data: Order[]; meta: PaginatedMeta };

// Payload untuk edit item/qty/harga (server akan re-calc totals)
export type UpdateOrderItemsPayload = {
  note?: string | null;      // alasan koreksi (opsional)
  items: Array<{
    id: ID;                   // order_items.id existing
    price: number;
    discount: number;
    qty: number;
  }>;
};

// Aksi khusus
export type ReprintPayload = { format: '58' | '80' };
export type ResendWaPayload = { phone: string; message?: string };

// ======================= FEES (F10) =======================
export type FeePayStatus = 'UNPAID' | 'PAID' | 'PARTIAL';

/** Mirrors table public.fee_entries exactly. */
export type FeeEntry = {
  id: ID;
  fee_id: ID;
  cabang_id: ID;
  period_date: string;             // YYYY-MM-DD
  ref_type: 'ORDER' | 'DELIVERY';
  ref_id: ID;
  owner_user_id: ID | null;        // penerima fee (sales/cashier/courier)
  base_amount: number;             // numeric(18,2)
  fee_amount: number;              // numeric(18,2)
  pay_status: FeePayStatus;        // UNPAID | PAID | PARTIAL
  paid_amount: number;             // numeric(18,2)
  paid_at: string | null;          // ISO timestamp or null
  notes?: string | null;
  created_by?: ID | null;
  updated_by?: ID | null;
  created_at?: string | null;
  updated_at?: string | null;
  // optional expand from backend (if provided by with(['fee'])):
  fee?: { id: ID; kind: 'SALES' | 'CASHIER' | 'COURIER'; name?: string | null } | null;
};

export type FeeQuery = Partial<{
  page: number;
  per_page: number;
  cabang_id: ID;
  from: string;                   // YYYY-MM-DD
  to: string;                     // YYYY-MM-DD
  pay_status: FeePayStatus;       // filter by status
}>;

export type FeePaged = {
  data: FeeEntry[];
  meta: {
    current_page: number;
    per_page: number;
    total: number;
    last_page: number;
  };
};
```
</details>

### src/types/product.ts

- SHA: `cf1b09cf221e`  
- Ukuran: 3 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
// src/types/product.ts

export type ID = number;

export type SortProduct =
    | "nama" | "-nama"
    | "created_at" | "-created_at";

export interface Product {
    id: ID;
    category_id: ID;
    nama: string;
    slug: string;
    deskripsi: string | null;
    is_active: boolean;
    created_at?: string | null;
    updated_at?: string | null;

    // opsional agregat dari backend
    variants_count?: number;
    media_count?: number;
    harga: number;
    // opsi include (jika endpoint detail mengembalikan relasi)
    variants?: ProductVariant[];
    media?: ProductMedia[];

    image_url?: string | null;
}

export interface ProductCreatePayload {
    category_id: ID;
    nama: string;
    slug?: string;          // frontend boleh set via slugify(nama)
    deskripsi?: string | null;
    is_active?: boolean;
}

export interface ProductUpdatePayload {
    category_id?: ID;
    nama?: string;
    slug?: string;
    deskripsi?: string | null;
    is_active?: boolean;
}

export interface ProductQuery {
    page?: number;
    per_page?: number;
    search?: string;
    category_id?: ID;
    is_active?: boolean;
    sort?: SortProduct;
    gudang_id?: ID;   // = warehouseId
    cabang_id?: ID;
}

export interface PaginatedMeta {
    current_page: number;
    per_page: number;
    total: number;
    last_page: number;
}

export interface PaginatedResponse<T> {
    data: T[];
    meta: PaginatedMeta;
}

/* ---------- VARIANTS ---------- */

export interface ProductVariant {
    id: ID;
    product_id: ID;
    size: string | null;     // ex: "Small", "Large"
    type: string | null;     // ex: "Choco", "Matcha"
    tester: string | null;   // ex: "Slice", "Full"
    sku: string;             // unique
    harga: number;           // decimal(14,2) -> number
    is_active: boolean;
    created_at?: string | null;
    updated_at?: string | null;
}

export interface VariantCreatePayload {
    size?: string | null;
    type?: string | null;
    tester?: string | null;
    sku: string;
    harga: number;           // kirim sebagai number; axios akan serialize
    is_active?: boolean;
}

export interface VariantUpdatePayload {
    size?: string | null;
    type?: string | null;
    tester?: string | null;
    sku?: string;
    harga?: number;
    is_active?: boolean;
}

/* ---------- MEDIA ---------- */

export interface ProductMedia {
    id: ID;
    product_id: ID;
    disk: string;            // default 'public'
    path: string;            // ex: 'products/2/xxxx.jpg'
    mime: string | null;
    size_kb: number | null;
    is_primary: boolean;
    sort_order: number;      // smallint
    created_at?: string | null;
    updated_at?: string | null;

    // URL penuh (kalau backend mengembalikan accessor)
    url?: string;
    thumb_url?: string;
}

export interface MediaUploadResult {
    data: ProductMedia[];
}

export interface ApiError {
    status?: number;
    message?: string;
    errors?: Record<string, string[]>;
}

```
</details>

### src/types/settings.ts

- SHA: `583befdc5a60`  
- Ukuran: 2 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
/** Settings — hierarchical config with GLOBAL/BRANCH/USER scopes. */
export type SettingScope = 'GLOBAL' | 'BRANCH' | 'USER';

export interface Setting {
    id: number;
    scope: SettingScope;
    scope_id: number | null;
    key: string;
    /** Backend stores JSON → we keep it as a shaped record */
    value: Record<string, unknown>;
    created_at: string;
    updated_at: string;
}

/** Query params for GET /settings */
export interface SettingQuery {
    scope?: SettingScope | null;
    scope_id?: number | null;
    keys?: string[] | null;
    page?: number;
    per_page?: number;
}

/** Single upsert payload */
export interface SettingUpsertPayload {
    scope: SettingScope;
    scope_id?: number | null;
    key: string;
    value: Record<string, unknown>;
}

/** Bulk upsert payload */
export type SettingBulkUpsertPayloadItem = SettingUpsertPayload;
export interface SettingBulkUpsertPayload {
    items: SettingBulkUpsertPayloadItem[];
}

/** Export request/response */
export interface SettingExportQuery {
    scope?: SettingScope | null;
    scope_id?: number | null;
    keys?: string[] | null;
    /** backend supports json format */
    format?: 'json';
}
export interface SettingExportData {
    items: SettingUpsertPayload[]; // normalized list
}

/** Import payload/response */
export type SettingImportMode = 'replace' | 'merge' | 'skip';
export interface SettingImportPayload {
    items: SettingUpsertPayload[];
    mode?: SettingImportMode;
}
export interface SettingImportResult {
    inserted: number;
    updated: number;
    skipped: number;
}

/** Laravel paginator for settings list */
export interface LaravelPaginator<T> {
    current_page: number;
    data: T[];
    first_page_url: string | null;
    from: number | null;
    last_page: number;
    last_page_url: string | null;
    links: { url: string | null; label: string; page: number | null; active: boolean }[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number | null;
    total: number;
}

```
</details>

### src/types/stock.ts

- SHA: `4324ca645a9d`  
- Ukuran: 2 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
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
```
</details>

### src/types/user.ts

- SHA: `c72eae0583d3`  
- Ukuran: 399 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
// src/types/user.ts
export type Role =
  | "superadmin"
  | "admin_cabang"
  | "gudang"
  | "kasir"
  | "sales"
  | "kurir";

export type ID = number;

export type Nullable<T> = T | null;

export interface User {
  id: ID;
  name: string;
  email: string;
  phone: Nullable<string>;
  cabang_id: Nullable<number>;
  role: Role;
  is_active: boolean;
  created_at?: string;
  updated_at?: string;
}

```
</details>

### src/types/warehouse.ts

- SHA: `30008e882f32`  
- Ukuran: 949 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
export type Warehouse = {
  id: number;
  cabang_id: number;
  nama: string;
  is_default: boolean;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  // include
  cabang?: { id: number; nama: string } | null;
};

export type WarehouseListResponse = {
  success: boolean;
  data: Warehouse[];
  meta: {
    current_page: number;
    per_page: number | string;
    total: number;
    last_page: number;
  };
};

export type WarehouseDetailResponse = {
  success: boolean;
  data: Warehouse;
};

export type WarehouseQuery = {
  q?: string;
  cabang_id?: number;
  is_active?: boolean;
  page?: number;
  per_page?: number | string;
  sort?: string; // "-id" | "id" | "cabang_id" | "nama" | "is_default" | "is_active" | "created_at"
};

export type WarehouseCreatePayload = {
  cabang_id: number;
  nama: string;
  is_default?: boolean;
  is_active?: boolean;
};

export type WarehouseUpdatePayload = Partial<WarehouseCreatePayload>;

```
</details>



## Components (src/components)

### src/components/accounting/AccountTable.tsx

- SHA: `d2fcdaf658e6`  
- Ukuran: 3 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/accounting/AccountTable.tsx
import { useEffect, useState } from "react";
import type { Account } from "../../types/accounting";
import { listAccounts } from "../../api/accounting";
import { useAuth } from "../../store/auth";

type Props = {
  onEdit?: (a: Account) => void;
  onDelete?: (a: Account) => void;
};

export default function AccountTable({ onEdit, onDelete }: Props) {
  const { hasRole } = useAuth();
  const canWrite = hasRole("superadmin", "admin_cabang");

  const [rows, setRows] = useState<Account[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await listAccounts({ per_page: 500 });
        if (!mounted) return;
        setRows(res.data);
      } catch {
        setError("Gagal memuat akun.");
      } finally {
        setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const empty = !loading && rows.length === 0;

  if (loading) return <div className="alert">Loading COA…</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;
  if (empty) return <div className="alert">Belum ada akun.</div>;

  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Kode</th>
            <th>Nama</th>
            <th className="text-center">Tipe</th>
            <th className="text-center">Saldo Normal</th>
            <th className="text-center">Aktif</th>
            <th className="text-right" aria-label="Aksi" />
          </tr>
        </thead>
        <tbody>
          {rows.map((a) => (
            <tr key={a.id}>
              <td>{a.code}</td>
              <td>{a.name}</td>
              <td className="text-center">{a.type}</td>
              <td className="text-center">{a.normal_balance}</td>
              <td className="text-center">{a.is_active ? "Ya" : "Tidak"}</td>
              <td className="text-right">
                <div className="table-actions">
                  <button
                    className="button"
                    onClick={() => onEdit?.(a)}
                    disabled={!canWrite}
                    aria-disabled={!canWrite}
                    title={canWrite ? "Edit akun" : "Hanya-baca"}
                  >
                    Edit
                  </button>
                  <button
                    className="button button-outline"
                    onClick={() => onDelete?.(a)}
                    disabled={!canWrite}
                    aria-disabled={!canWrite}
                    title={canWrite ? "Hapus akun" : "Hanya-baca"}
                  >
                    Hapus
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

```
</details>

### src/components/accounting/JournalEditor.tsx

- SHA: `45c80da947db`  
- Ukuran: 5 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/accounting/JournalEditor.tsx
import { useMemo } from "react";
import type { JournalLine, ID } from "../../types/accounting";

type Props = {
  lines: JournalLine[];
  onChange: (lines: JournalLine[]) => void;
  accounts: { id: ID; code: string; name: string }[];
  readOnly?: boolean;
};

export default function JournalEditor({ lines, onChange, accounts, readOnly = false }: Props) {
  const totals = useMemo(() => {
    const d = lines.reduce((s, l) => s + (Number(l.debit) || 0), 0);
    const c = lines.reduce((s, l) => s + (Number(l.credit) || 0), 0);
    return { d: round2(d), c: round2(c), balanced: round2(d) === round2(c) };
  }, [lines]);

  function setLine(idx: number, patch: Partial<JournalLine>) {
    const next = [...lines];
    next[idx] = { ...next[idx], ...patch };
    onChange(next);
  }

  function addLine() {
    onChange([
      ...lines,
      {
        account_id: 0,
        cabang_id: lines[0]?.cabang_id ?? 0,
        debit: 0,
        credit: 0,
        ref_type: null,
        ref_id: null,
      },
    ]);
  }

  function removeLine(idx: number) {
    const next = [...lines];
    next.splice(idx, 1);
    onChange(next);
  }

  return (
    <div>
      <div style={{ overflowX: "auto" }}>
        <table className="table">
          <thead>
            <tr>
              <th>Akun</th>
              <th style={{ textAlign: "right", width: 160 }}>Debit</th>
              <th style={{ textAlign: "right", width: 160 }}>Kredit</th>
              <th style={{ textAlign: "center", width: 160 }}>Ref</th>
              <th style={{ width: 120 }} />
            </tr>
          </thead>
          <tbody>
            {lines.map((l, i) => (
              <tr key={i}>
                <td>
                  <select
                    className="select"
                    value={l.account_id}
                    onChange={(e) => setLine(i, { account_id: Number(e.target.value) })}
                    disabled={readOnly}
                  >
                    <option value={0} disabled>-- Pilih akun --</option>
                    {accounts.map((a) => (
                      <option key={a.id} value={a.id}>
                        {a.name}
                      </option>
                    ))}
                  </select>
                </td>

                <td style={{ textAlign: "right" }}>
                  <input
                    type="number"
                    className="input"
                    style={{ textAlign: "right", width: 140 }}
                    value={l.debit}
                    onChange={(e) => setLine(i, { debit: toPos(e.target.value), credit: 0 })}
                    disabled={readOnly}
                    min={0}
                    step="0.01"
                  />
                </td>

                <td style={{ textAlign: "right" }}>
                  <input
                    type="number"
                    className="input"
                    style={{ textAlign: "right", width: 140 }}
                    value={l.credit}
                    onChange={(e) => setLine(i, { credit: toPos(e.target.value), debit: 0 })}
                    disabled={readOnly}
                    min={0}
                    step="0.01"
                  />
                </td>

                <td style={{ textAlign: "center", fontSize: 12 }}>
                  {l.ref_type ? (
                    <span className="badge">
                      {l.ref_type}#{l.ref_id}
                    </span>
                  ) : (
                    <span className="text-muted">—</span>
                  )}
                </td>

                <td style={{ textAlign: "right" }}>
                  <button
                    className="button"
                    onClick={() => removeLine(i)}
                    disabled={readOnly}
                    aria-disabled={readOnly}
                    title={readOnly ? "Hanya-baca" : "Hapus baris"}
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}

            <tr>
              <td style={{ textAlign: "right", fontWeight: 600 }}>Subtotal</td>
              <td style={{ textAlign: "right", fontWeight: 600 }}>{formatMoney(totals.d)}</td>
              <td style={{ textAlign: "right", fontWeight: 600 }}>{formatMoney(totals.c)}</td>
              <td colSpan={2} style={{ textAlign: "center" }}>
                {totals.balanced ? (
                  <span className="badge badge-success">Seimbang</span>
                ) : (
                  <span className="badge badge-warning">Tidak seimbang</span>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {!readOnly && (
        <div className="form-actions">
          <button className="button button-primary" onClick={addLine}>
            Tambah Baris
          </button>
        </div>
      )}
    </div>
  );
}

function round2(n: number) {
  return Math.round(n * 100) / 100;
}
function toPos(v: string) {
  const n = Number(v);
  return Number.isFinite(n) && n > 0 ? round2(n) : 0;
}
function formatMoney(n: number) {
  return new Intl.NumberFormat("id-ID", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);
}

```
</details>

### src/components/auth/LoginForm.tsx

- SHA: `cb4c43e1b621`  
- Ukuran: 4 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/auth/LoginForm.tsx
import { useState } from "react";
import { useAuth } from "../../store/auth";

type FormState = {
  email: string;
  password: string;
  showPassword: boolean;
  submitting: boolean;
  error: string | null;
};

export default function LoginForm(): React.ReactElement {
  const { login } = useAuth();
  const [form, setForm] = useState<FormState>({
    email: "",
    password: "",
    showPassword: false,
    submitting: false,
    error: null,
  });

  function onEmailChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const v = e.target.value;
    setForm((s) => ({ ...s, email: v }));
  }
  function onPasswordChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const v = e.target.value;
    setForm((s) => ({ ...s, password: v }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    setForm((s) => ({ ...s, submitting: true, error: null }));
    try {
      await login({ email: form.email.trim(), password: form.password });
    } catch {
      setForm((s) => ({ ...s, error: "Email atau password salah." }));
    } finally {
      setForm((s) => ({ ...s, submitting: false }));
    }
  }

  const hasError = Boolean(form.error);

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto w-full"
      style={{ maxWidth: "26rem" }}
      autoComplete="on"
      noValidate
    >
      {/* Email */}
      <div style={{ marginBottom: "0.9rem" }}>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={onEmailChange}
          className="input w-full"
          style={{ marginTop: "0.35rem" }}
          autoComplete="username"
          inputMode="email"
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
          aria-invalid={hasError ? "true" : "false"}
          placeholder="nama@email.com"
        />
      </div>

      {/* Password + toggle */}
      <div style={{ marginBottom: "0.9rem" }}>
        <label htmlFor="password" className="block text-sm font-medium">
          Password
        </label>

        <div style={{ position: "relative", marginTop: "0.35rem" }}>
          <input
            id="password"
            name="password"
            type={form.showPassword ? "text" : "password"}
            required
            value={form.password}
            onChange={onPasswordChange}
            className="input w-full"
            style={{ paddingRight: "3.4rem" }}
            autoComplete="current-password"
            autoCapitalize="none"
            autoCorrect="off"
            aria-invalid={hasError ? "true" : "false"}
            placeholder="••••••••"
          />

          <button
            type="button"
            onClick={() =>
              setForm((s) => ({ ...s, showPassword: !s.showPassword }))
            }
            className="button button-ghost"
            aria-label={
              form.showPassword ? "Sembunyikan password" : "Tampilkan password"
            }
            style={{
              position: "absolute",
              right: "0.45rem",
              top: "50%",
              transform: "translateY(-50%)",
              padding: "0.28rem 0.55rem",
              fontSize: "0.75rem",
              lineHeight: 1,
              borderRadius: "999px",
            }}
          >
            {form.showPassword ? "Hide" : "Show"}
          </button>
        </div>
      </div>

      {/* Error */}
      {form.error && (
        <div
          className="badge badge-danger"
          style={{
            display: "block",
            marginBottom: "0.9rem",
            padding: "0.6rem 0.75rem",
            borderRadius: "12px",
          }}
        >
          {form.error}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={form.submitting}
        className="button button-primary"
        style={{
          width: "100%",
          borderRadius: "999px",
          padding: "0.75rem 1rem",
          fontWeight: 700,
        }}
      >
        {form.submitting ? "Masuk…" : "Masuk"}
      </button>
    </form>
  );
}

```
</details>

### src/components/cabangs/BranchFilters.tsx

- SHA: `d3556d2eea21`  
- Ukuran: 4 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/cabangs/BranchFilters.tsx
import React, { useMemo } from "react";
import type { BranchQuery } from "../../types/branch";

type Props = {
  value: BranchQuery;
  onChange: (next: BranchQuery) => void;
  onSearch: () => void;
};

export default function BranchFilters({
  value,
  onChange,
  onSearch,
}: Props): React.ReactElement {
  // Default query untuk tombol reset (hanya properti yang dipakai di filter ini)
  const resetValue = useMemo<BranchQuery>(
    () => ({
      ...value,
      q: undefined,
      kota: undefined,
      is_active: undefined,
      page: 1,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSearch();
    }
  };

  return (
    <div
      onKeyDown={onKeyDown}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        gap: "0.9rem",
        alignItems: "end",
      }}
    >
      {/* Cari */}
      <div>
        <label className="label" htmlFor="q">
          Cari
        </label>
        <input
          id="q"
          className="input"
          value={value.q ?? ""}
          onChange={(e) => onChange({ ...value, q: e.target.value, page: 1 })}
          placeholder="Nama / alamat / telepon"
          autoComplete="off"
        />
      </div>

      {/* Kota */}
      <div>
        <label className="label" htmlFor="kota">
          Kota
        </label>
        <input
          id="kota"
          className="input"
          value={value.kota ?? ""}
          onChange={(e) =>
            onChange({
              ...value,
              kota: e.target.value || undefined,
              page: 1,
            })
          }
          placeholder="Contoh: Bandung"
          autoComplete="off"
        />
      </div>

      {/* Action Group */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.65rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.75rem",
          }}
        >
          {/* Toggle aktif */}
          <label
            htmlFor="branch-active"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            <input
              id="branch-active"
              type="checkbox"
              checked={Boolean(value.is_active)}
              onChange={(e) =>
                onChange({
                  ...value,
                  is_active: e.target.checked ? true : undefined,
                  page: 1,
                })
              }
              aria-label="Hanya aktif"
            />
            <span className="text-sm" style={{ opacity: 0.9 }}>
              Hanya aktif
            </span>
          </label>

          {/* Reset (opsional) */}
          <button
            type="button"
            className="button button-ghost"
            onClick={() => {
              onChange(resetValue);
              onSearch();
            }}
            style={{
              padding: "0.4rem 0.6rem",
              borderRadius: 12,
              fontSize: "0.85rem",
            }}
            title="Reset filter"
          >
            Reset
          </button>
        </div>

        <div style={{ display: "flex", gap: "0.5rem" }}>
          <button
            type="button"
            className="button button-primary"
            onClick={onSearch}
            style={{ width: "100%", borderRadius: 12 }}
          >
            Terapkan
          </button>
        </div>
      </div>

      {/* Responsif: 2 kolom di layar sedang, 1 kolom di mobile */}
      <style>
        {`
          @media (max-width: 900px) {
            div[style*="grid-template-columns: repeat(3"] {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            }
          }
          @media (max-width: 640px) {
            div[style*="grid-template-columns: repeat(3"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </div>
  );
}

```
</details>

### src/components/cabangs/BranchFormDialog.tsx

- SHA: `e9e2a1be560d`  
- Ukuran: 14 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/cabangs/BranchFormDialog.tsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import type { Branch, BranchCreatePayload } from "../../types/branch";

type Props = {
  open: boolean;
  initial?: Branch | null;
  onClose: () => void;
  onSubmit: (payload: BranchCreatePayload) => Promise<boolean>;
};

const HARI = [
  { v: "Senin–Jumat", label: "Senin–Jumat" },
  { v: "Senin–Sabtu", label: "Senin–Sabtu" },
  { v: "Senin–Minggu", label: "Senin–Minggu" },
] as const;

function parseJamOperasional(
  input?: string | null
): { hari: string; openAt: string; closeAt: string } | null {
  if (!input) return null;
  // Pola: "Senin–Minggu 08:00-21:00"
  const m = input.match(/^(.+?)\s+(\d{2}:\d{2})-(\d{2}:\d{2})$/);
  if (!m) return null;
  const [, hari, openAt, closeAt] = m;
  return { hari, openAt, closeAt };
}

export default function BranchFormDialog({
  open,
  initial,
  onClose,
  onSubmit,
}: Props): React.ReactElement | null {
  const [form, setForm] = useState<BranchCreatePayload>({
    nama: "",
    kota: "",
    alamat: "",
    telepon: "",
    jam_operasional: "",
    is_active: true,
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // State builder jam operasional
  const [hari, setHari] = useState<string>("Senin–Minggu");
  const [openAt, setOpenAt] = useState<string>("08:00");
  const [closeAt, setCloseAt] = useState<string>("21:00");

  const panelRef = useRef<HTMLDivElement | null>(null);

  // Gabungkan builder -> form.jam_operasional
  useEffect(() => {
    setForm((s) => ({ ...s, jam_operasional: `${hari} ${openAt}-${closeAt}` }));
  }, [hari, openAt, closeAt]);

  // Inisialisasi saat dialog dibuka (create/edit)
  useEffect(() => {
    if (!open) return;

    if (initial) {
      setForm({
        nama: initial.nama,
        kota: initial.kota,
        alamat: initial.alamat,
        telepon: initial.telepon ?? "",
        jam_operasional: initial.jam_operasional ?? "",
        is_active: initial.is_active,
      });

      const parsed = parseJamOperasional(initial.jam_operasional);
      if (parsed) {
        setHari(parsed.hari);
        setOpenAt(parsed.openAt);
        setCloseAt(parsed.closeAt);
      } else {
        setHari("Senin–Minggu");
        setOpenAt("08:00");
        setCloseAt("21:00");
      }
    } else {
      setForm({
        nama: "",
        kota: "",
        alamat: "",
        telepon: "",
        jam_operasional: "Senin–Minggu 08:00-21:00",
        is_active: true,
      });
      setHari("Senin–Minggu");
      setOpenAt("08:00");
      setCloseAt("21:00");
    }

    setError(null);

    // fokuskan ke panel modal agar UX enak (tanpa mengubah logika)
    setTimeout(() => {
      panelRef.current?.focus();
    }, 0);
  }, [open, initial]);

  // Tutup dengan ESC (UX standar)
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !saving) {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, saving, onClose]);

  const valid = useMemo(() => {
    if (!form.nama?.trim()) return false;
    if (!form.kota?.trim()) return false;
    if (!form.alamat?.trim()) return false;
    if (!/^\d{2}:\d{2}$/.test(openAt) || !/^\d{2}:\d{2}$/.test(closeAt)) return false;
    return openAt < closeAt; // string compare works for HH:MM
  }, [form.nama, form.kota, form.alamat, openAt, closeAt]);

  if (!open) return null;

  const submit = async (): Promise<void> => {
    setSaving(true);
    setError(null);
    try {
      if (!valid) {
        setSaving(false);
        setError(
          "Form belum valid. Pastikan nama/kota/alamat terisi dan jam buka < jam tutup."
        );
        return;
      }
      const ok = await onSubmit(form);
      setSaving(false);
      if (ok) onClose();
      else setError("Gagal menyimpan. Cek input.");
    } catch {
      setSaving(false);
      setError("Terjadi kesalahan saat menyimpan.");
    }
  };

  const title = initial ? "Edit Cabang" : "Tambah Cabang";
  const subtitle = initial
    ? "Perbarui informasi cabang. Pastikan jam operasional sesuai."
    : "Tambahkan cabang baru. Isi data dengan lengkap dan benar.";

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        background: "rgba(2, 6, 23, 0.55)",
        backdropFilter: "blur(6px)",
      }}
      aria-modal="true"
      role="dialog"
      aria-label={title}
      onMouseDown={(e) => {
        // Klik backdrop untuk tutup (tanpa ganggu interaksi dalam panel)
        if (e.target === e.currentTarget && !saving) onClose();
      }}
    >
      <div
        ref={panelRef}
        tabIndex={-1}
        className="card"
        style={{
          width: "100%",
          maxWidth: 720,
          borderRadius: 18,
          padding: 0,
          overflow: "hidden",
          outline: "none",
          boxShadow: "0 24px 80px rgba(0,0,0,0.35)",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "1.1rem 1.1rem",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 12,
            borderBottom: "1px solid rgba(0,0,0,0.06)",
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.00))",
          }}
        >
          <div style={{ minWidth: 0 }}>
            <div className="h3" style={{ margin: 0 }}>
              {title}
            </div>
            <div className="text-sm" style={{ marginTop: 6, opacity: 0.75 }}>
              {subtitle}
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
            <button
              className="button button-outline"
              onClick={onClose}
              disabled={saving}
              title="Tutup"
              style={{ borderRadius: 12 }}
            >
              Tutup
            </button>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: "1.1rem" }}>
          {/* Error banner */}
          {error && (
            <div
              className="card"
              style={{
                padding: "0.75rem 0.9rem",
                borderRadius: 14,
                marginBottom: "0.9rem",
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
              }}
            >
              <span className="badge badge-danger">Error</span>
              <div style={{ fontSize: 14, opacity: 0.95, lineHeight: 1.45 }}>
                {error}
              </div>
            </div>
          )}

          {/* Section: Identitas Cabang */}
          <div style={{ marginBottom: "1rem" }}>
            <div style={{ fontWeight: 800, letterSpacing: "-0.01em" }}>
              Informasi Cabang
            </div>
            <div className="text-sm" style={{ marginTop: 4, opacity: 0.72 }}>
              Data dasar untuk identifikasi cabang.
            </div>

            <div
              style={{
                marginTop: "0.85rem",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0.8rem",
              }}
            >
              <div>
                <label className="label">Nama</label>
                <input
                  className="input"
                  placeholder="Contoh: Cabang Utama"
                  value={form.nama}
                  onChange={(e) => setForm({ ...form, nama: e.target.value })}
                />
              </div>

              <div>
                <label className="label">Kota</label>
                <input
                  className="input"
                  placeholder="Contoh: Bandung"
                  value={form.kota}
                  onChange={(e) => setForm({ ...form, kota: e.target.value })}
                />
              </div>

              <div style={{ gridColumn: "1 / -1" }}>
                <label className="label">Alamat</label>
                <input
                  className="input"
                  placeholder="Alamat lengkap cabang"
                  value={form.alamat}
                  onChange={(e) => setForm({ ...form, alamat: e.target.value })}
                />
              </div>

              <div>
                <label className="label">Telepon</label>
                <input
                  className="input"
                  placeholder="Opsional"
                  value={form.telepon ?? ""}
                  onChange={(e) => setForm({ ...form, telepon: e.target.value })}
                />
              </div>

              <div style={{ display: "flex", alignItems: "flex-end" }}>
                <label
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    userSelect: "none",
                    padding: "0.6rem 0.75rem",
                    borderRadius: 14,
                    border: "1px solid rgba(0,0,0,0.08)",
                    background: "rgba(0,0,0,0.02)",
                    width: "100%",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={Boolean(form.is_active)}
                    onChange={(e) =>
                      setForm({ ...form, is_active: e.target.checked })
                    }
                  />
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontWeight: 700, lineHeight: 1.2 }}>Aktif</div>
                    <div className="text-sm" style={{ opacity: 0.7, marginTop: 2 }}>
                      Nonaktifkan jika cabang tidak beroperasi.
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Section Divider */}
          <div style={{ height: 1, background: "rgba(0,0,0,0.06)", margin: "1rem 0" }} />

          {/* Section: Jam Operasional */}
          <div>
            <div style={{ fontWeight: 800, letterSpacing: "-0.01em" }}>Jam Operasional</div>
            <div className="text-sm" style={{ marginTop: 4, opacity: 0.72 }}>
              Nilai akan tersimpan sebagai format tunggal.
            </div>

            <div
              style={{
                marginTop: "0.85rem",
                display: "grid",
                gridTemplateColumns: "1.2fr 1fr 1fr",
                gap: "0.8rem",
              }}
            >
              <div>
                <label className="label">Hari</label>
                <select className="select" value={hari} onChange={(e) => setHari(e.target.value)}>
                  {HARI.map((h) => (
                    <option key={h.v} value={h.v}>
                      {h.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="label">Buka</label>
                <input
                  type="time"
                  className="input"
                  value={openAt}
                  onChange={(e) => setOpenAt(e.target.value)}
                />
              </div>

              <div>
                <label className="label">Tutup</label>
                <input
                  type="time"
                  className="input"
                  value={closeAt}
                  onChange={(e) => setCloseAt(e.target.value)}
                />
              </div>

              <div
                style={{
                  gridColumn: "1 / -1",
                  borderRadius: 14,
                  border: "1px solid rgba(0,0,0,0.06)",
                  background: "rgba(0,0,0,0.02)",
                  padding: "0.75rem 0.9rem",
                }}
              >
                <div className="text-sm" style={{ opacity: 0.7 }}>
                  Tersimpan sebagai
                </div>
                <div
                  style={{
                    marginTop: 6,
                    fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                    fontSize: 13,
                    opacity: 0.9,
                    wordBreak: "break-word",
                  }}
                >
                  {form.jam_operasional || "-"}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div
          style={{
            padding: "1rem 1.1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            borderTop: "1px solid rgba(0,0,0,0.06)",
            background: "rgba(0,0,0,0.01)",
          }}
        >
          <div className="text-sm" style={{ opacity: 0.7 }}>
            {saving ? "Menyimpan perubahan…" : valid ? "Siap disimpan." : "Lengkapi form untuk menyimpan."}
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
            <button className="button button-outline" onClick={onClose} disabled={saving}>
              Batal
            </button>
            <button className="button button-primary" onClick={submit} disabled={saving || !valid}>
              {saving ? "Menyimpan..." : "Simpan"}
            </button>
          </div>
        </div>

        {/* Responsif */}
        <style>
          {`
            @media (max-width: 720px) {
              .card[style*="max-width: 720"] { border-radius: 16px !important; }
            }
            @media (max-width: 640px) {
              /* Grid 2 kolom -> 1 kolom */
              div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
              div[style*="grid-template-columns: 1.2fr 1fr 1fr"] { grid-template-columns: 1fr !important; }
            }
          `}
        </style>
      </div>
    </div>
  );
}

```
</details>

### src/components/cabangs/BranchTable.tsx

- SHA: `251ec04c0db4`  
- Ukuran: 5 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/cabangs/BranchTable.tsx
import React, { useMemo } from "react";
import type { Branch } from "../../types/branch";

type Props = {
  items: Branch[];
  onEdit: (row: Branch) => void;
  onDelete: (row: Branch) => void;
  onOpenGudang: (row: Branch) => void;
};

export default function BranchTable({
  items,
  onEdit,
  onDelete,
  onOpenGudang,
}: Props): React.ReactElement {
  const minWidth = useMemo(() => 860, []);

  return (
    <div
      style={{
        border: "1px solid rgba(0,0,0,0.08)",
        borderRadius: 14,
        overflow: "hidden",
        background: "rgba(255,255,255,0.9)",
      }}
    >
      <div style={{ overflowX: "auto" }}>
        <table className="table" style={{ minWidth, width: "100%" }}>
          <thead>
            <tr>
              <th style={{ width: 80 }}>ID</th>
              <th>Nama</th>
              <th style={{ width: 160 }}>Kota</th>
              <th style={{ width: 180 }}>Telepon</th>
              <th style={{ width: 120 }}>Status</th>
              <th style={{ width: 260 }}>Aksi</th>
            </tr>
          </thead>

          <tbody>
            {items.map((r) => (
              <tr key={r.id}>
                <td style={{ whiteSpace: "nowrap", opacity: 0.9 }}>{r.id}</td>

                <td style={{ minWidth: 220 }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <span style={{ fontWeight: 800, letterSpacing: "-0.01em" }}>{r.nama}</span>
                    <span className="text-sm" style={{ opacity: 0.7 }}>
                      Cabang ID #{r.id}
                    </span>
                  </div>
                </td>

                <td style={{ whiteSpace: "nowrap" }}>{r.kota}</td>

                <td style={{ whiteSpace: "nowrap" }}>{r.telepon ?? "-"}</td>

                <td style={{ whiteSpace: "nowrap" }}>
                  {r.is_active ? (
                    <span className="badge badge-success">Aktif</span>
                  ) : (
                    <span className="badge badge-danger">Nonaktif</span>
                  )}
                </td>

                <td>
                  <div
                    style={{
                      display: "flex",
                      gap: 8,
                      alignItems: "center",
                      justifyContent: "flex-start",
                      flexWrap: "wrap",
                    }}
                  >
                    <button
                      className="button button-outline"
                      onClick={() => onOpenGudang(r)}
                      style={{ borderRadius: 999, padding: "0.45rem 0.75rem" }}
                      title="Buka manajemen gudang untuk cabang ini"
                    >
                      Gudang
                    </button>

                    <button
                      className="button button-outline"
                      onClick={() => onEdit(r)}
                      style={{ borderRadius: 999, padding: "0.45rem 0.75rem" }}
                      title="Edit data cabang"
                    >
                      Edit
                    </button>

                    <button
                      className="button button-outline"
                      onClick={() => onDelete(r)}
                      style={{
                        borderRadius: 999,
                        padding: "0.45rem 0.75rem",
                        borderColor: "rgba(239,68,68,0.35)",
                      }}
                      title="Hapus cabang"
                    >
                      Hapus
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {items.length === 0 && (
              <tr>
                <td colSpan={6} style={{ padding: "22px" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 6,
                      textAlign: "center",
                      opacity: 0.8,
                    }}
                  >
                    <div style={{ fontWeight: 800, letterSpacing: "-0.01em" }}>
                      Belum ada data cabang
                    </div>
                    <div className="text-sm" style={{ opacity: 0.75 }}>
                      Silakan klik tombol <strong>Tambah Cabang</strong> untuk membuat data baru.
                    </div>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
}

```
</details>

### src/components/cash/AuditTrail.tsx

- SHA: `3f9119ad5763`  
- Ukuran: 1 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/cash/AuditTrail.tsx
import React from "react";
import type { CashMove } from "../../types/cash";

type Props = {
  move: CashMove;
  /** Opsional: parent mengoper handler untuk membuka SubmitCashDialog */
  onOpenSubmit?: () => void;
};

export default function AuditTrail({ move, onOpenSubmit }: Props): React.ReactElement {
  return (
    <div>
      <div className="section-header">
        <div className="section-title">Audit Trail</div>

        {onOpenSubmit ? (
          <div className="section-actions">
            <button type="button" className="button button-primary" onClick={onOpenSubmit}>
              Ajukan Setoran
            </button>
          </div>
        ) : null}
      </div>

      <ul className="list-plain">
        <li>
          Submitted: <span className="mono">{move.submitted_at}</span> by #{move.submitted_by}
        </li>

        {move.status === "APPROVED" ? (
          <li>
            Approved: <span className="mono">{move.approved_at}</span> by #{move.approved_by}
          </li>
        ) : null}

        {move.status === "REJECTED" ? (
          <li>
            Rejected: <span className="mono">{move.approved_at}</span> reason: “{move.reject_reason ?? "-"}”
          </li>
        ) : null}
      </ul>
    </div>
  );
}

```
</details>

### src/components/cash/CashDashboard.tsx

- SHA: `723c4940423b`  
- Ukuran: 2 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/cash/CashDashboard.tsx
import React, { useEffect, useState } from "react";
import { listCashHolders, listCashMoves } from "../../api/cash";
import type { ID } from "../../types/pos";

type Props = { branchId?: ID };

export default function CashDashboard({ branchId }: Props): React.ReactElement {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [summary, setSummary] = useState<{ total_balance: number; pending_moves: number } | null>(null);

  useEffect(() => {
    let alive = true;
    setLoading(true);
    setError(null);

    Promise.all([
      listCashHolders({ branch_id: branchId, per_page: 100 }),
      listCashMoves({ status: "SUBMITTED", per_page: 1 }), // hanya ambil total count
    ])
      .then(([holders, moves]) => {
        if (!alive) return;
        const total = holders.data.reduce((acc, h) => acc + (h.balance ?? 0), 0);
        setSummary({ total_balance: total, pending_moves: moves.meta.total });
      })
      .catch((e: unknown) => {
        if (!alive) return;
        const msg = (e as { message?: string }).message ?? "Gagal memuat ringkasan kas.";
        setError(msg);
      })
      .finally(() => alive && setLoading(false));

    return () => {
      alive = false;
    };
  }, [branchId]);

  if (loading) {
    return <div className="card">Loading cash summary…</div>;
  }
  if (error) {
    return <div className="card">{error}</div>;
  }
  if (!summary) {
    return <div className="card">Data kosong.</div>;
  }

  return (
    <div className="form-row form-row--2">
      <CardStat
        title="Total Balance (All Holders)"
        value={summary.total_balance}
      />
      <CardStat
        title="Pending (SUBMITTED) Moves"
        value={summary.pending_moves}
      />
    </div>
  );
}

function CardStat(props: { title: string; value: number }): React.ReactElement {
  const { title, value } = props;
  return (
    <div className="card">
      <div>{title}</div>
      <div style={{ fontSize: 24, fontWeight: 600, marginTop: 4 }}>
        {new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
          maximumFractionDigits: 0,
        }).format(value)}
      </div>
    </div>
  );
}

```
</details>

### src/components/cash/CashHoldersTable.tsx

- SHA: `f854afa13da7`  
- Ukuran: 4 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/cash/CashHoldersTable.tsx
import React, { useEffect, useMemo, useState } from "react";
import { listCashHolders } from "../../api/cash";
import type { CashHolder, CashHolderQuery } from "../../types/cash";

type Props = {
  branchId?: number;
  onPickSubmit?: (holder: CashHolder) => void; // prefill "from" in submit dialog
};

export default function CashHoldersTable({ branchId, onPickSubmit }: Props): React.ReactElement {
  const [query, setQuery] = useState<CashHolderQuery>({ page: 1, per_page: 10, branch_id: branchId });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<CashHolder[]>([]);
  const [meta, setMeta] = useState<{ current_page: number; per_page: number; total: number; last_page: number }>({
    current_page: 1,
    per_page: 10,
    total: 0,
    last_page: 1,
  });

  useEffect(() => {
    let alive = true;
    setLoading(true);
    setError(null);
    listCashHolders(query)
      .then((res) => {
        if (!alive) return;
        setData(res.data);
        setMeta(res.meta);
      })
      .catch((e: unknown) => alive && setError((e as { message?: string }).message ?? "Gagal memuat holder kas."))
      .finally(() => alive && setLoading(false));
    return () => {
      alive = false;
    };
  }, [query]);

  const rows = useMemo(() => data, [data]);

  return (
    <div className="card">
      {/* Toolbar pencarian */}
      <div className="toolbar">
        <div className="toolbar-actions" style={{ width: "100%" }}>
          <input
            value={query.q ?? ""}
            onChange={(e) => setQuery((s) => ({ ...s, q: e.target.value, page: 1 }))}
            placeholder="Cari holder…"
            className="input"
            aria-label="Cari holder"
            style={{ width: "100%" }}
          />
        </div>
      </div>

      {/* State: loading / error / empty / table */}
      {loading ? (
        <div className="card-section">Loading…</div>
      ) : error ? (
        <div className="alert alert-danger">{error}</div>
      ) : rows.length === 0 ? (
        <div className="card-section">Tidak ada data.</div>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Nama</th>
              <th style={{ textAlign: "right" }}>Saldo</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {rows.map((h) => (
              <tr key={h.id}>
                <td>{h.name}</td>
                <td style={{ textAlign: "right" }}>
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    maximumFractionDigits: 0,
                  }).format(h.balance)}
                </td>
                <td style={{ textAlign: "right" }}>
                  {onPickSubmit ? (
                    <button type="button" onClick={() => onPickSubmit(h)} className="button button-outline">
                      Submit Setoran…
                    </button>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Pagination */}
      <div className="toolbar">
        <div className="toolbar-title">
          Hal. {meta.current_page} / {meta.last_page}
        </div>
        <div className="toolbar-actions">
          <button
            type="button"
            disabled={meta.current_page <= 1}
            onClick={() => setQuery((s) => ({ ...s, page: (s.page ?? 1) - 1 }))}
            className="button"
          >
            Prev
          </button>
          <button
            type="button"
            disabled={meta.current_page >= meta.last_page}
            onClick={() => setQuery((s) => ({ ...s, page: (s.page ?? 1) + 1 }))}
            className="button"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

```
</details>

### src/components/cash/SubmitCashDialog.tsx

- SHA: `113cf3a859ac`  
- Ukuran: 8 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/cash/SubmitCashDialog.tsx
import React, { useEffect, useMemo, useState } from "react";
import { listCashHolders, submitCash } from "../../api/cash";
import type { CashHolder, SubmitCashPayload } from "../../types/cash";

function todayYMD(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}
function simpleKey(): string {
  // lightweight, <=64 chars as per backend rule
  return `${Math.random().toString(36).slice(2)}.${Date.now().toString(36)}`;
}

type Props = {
  open: boolean;
  defaultFrom?: CashHolder | null;
  onClose: () => void;
  onSubmitted?: (id: number) => void; // give new move id for history refresh
};

export default function SubmitCashDialog({
  open,
  onClose,
  defaultFrom,
  onSubmitted,
}: Props): React.ReactElement | null {
  const [holders, setHolders] = useState<CashHolder[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [saving, setSaving] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<SubmitCashPayload>({
    from_holder_id: defaultFrom?.id ?? 0,
    to_holder_id: 0,
    amount: 0,
    note: "",
    moved_at: todayYMD(),
    idempotency_key: simpleKey(),
  });

  useEffect(() => {
    if (!open) return;
    setLoading(true);
    setError(null);
    setForm((s) => ({
      ...s,
      moved_at: todayYMD(),
      idempotency_key: simpleKey(),
    }));
    listCashHolders({ per_page: 50 })
      .then((res) => setHolders(res.data))
      .catch((e: unknown) =>
        setError((e as { message?: string }).message ?? "Gagal memuat holder.")
      )
      .finally(() => setLoading(false));
  }, [open]);

  useEffect(() => {
    if (!open) return;
    setForm((s) => ({
      ...s,
      from_holder_id: defaultFrom?.id ?? s.from_holder_id,
    }));
  }, [defaultFrom, open]);

  const selectedFrom = useMemo(() => {
    return holders.find((h) => Number(h.id) === Number(form.from_holder_id)) ?? null;
  }, [holders, form.from_holder_id]);

  // ✅ Auto isi jumlah berdasarkan saldo holder asal
  useEffect(() => {
    if (!open) return;
    if (!selectedFrom) return;

    const bal = Number(selectedFrom.balance);
    setForm((s) => ({
      ...s,
      amount: Number.isFinite(bal) && bal > 0 ? bal : 0,
    }));
  }, [open, selectedFrom]);

  const canSubmit = useMemo(() => {
    const validAmount = Number.isFinite(form.amount) && form.amount > 0;
    return (
      !loading &&
      !saving &&
      form.from_holder_id > 0 &&
      form.to_holder_id > 0 &&
      form.from_holder_id !== form.to_holder_id &&
      validAmount &&
      !!form.moved_at
    );
  }, [form, loading, saving]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="submit-cash-title"
      // Backdrop + center (inline style supaya tidak menambah rules di index.css)
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: "16px",
      }}
      onClick={onClose}
    >
      {/* stopClose saat klik isi dialog */}
      <div
        className="card"
        style={{
          width: "100%",
          maxWidth: 640,
          background: "#fff",
          cursor: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="card__header">
          <h2 id="submit-cash-title" className="card__title">
            Ajukan Setoran Tunai
          </h2>
        </div>

        {/* Body */}
        <div className="card__body">
          {loading && <div className="text-muted">Memuat daftar holder…</div>}
          {error && <div className="alert alert-danger">{error}</div>}

          {/* Form fields */}
          <div className="form-row form-row--2">
            <div className="form-field">
              <label className="form-label">Dari Holder</label>
              <select
                value={form.from_holder_id}
                onChange={(e) =>
                  setForm((s) => ({
                    ...s,
                    from_holder_id: Number(e.target.value),
                  }))
                }
                className="select"
              >
                <option value={0}>Pilih…</option>
                {holders.map((h) => (
                  <option key={h.id} value={h.id}>
                    {h.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-field">
              <label className="form-label">Ke Holder</label>
              <select
                value={form.to_holder_id}
                onChange={(e) =>
                  setForm((s) => ({
                    ...s,
                    to_holder_id: Number(e.target.value),
                  }))
                }
                className="select"
              >
                <option value={0}>Pilih…</option>
                {holders.map((h) => (
                  <option key={h.id} value={h.id}>
                    {h.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-row form-row--2">
            <div className="form-field">
              <label className="form-label">Jumlah</label>
              <input
                type="number"
                inputMode="decimal"
                min={0}
                value={form.amount}
                className="input"
                readOnly
                disabled
              />
              <div style={{ marginTop: 6, opacity: 0.75, fontSize: 12 }}>
                Saldo holder asal: <span className="mono">{selectedFrom ? selectedFrom.balance : 0}</span>
              </div>
            </div>


            <div className="form-field">
              <label className="form-label">Tanggal Setoran</label>
              <input
                type="date"
                value={form.moved_at}
                onChange={(e) =>
                  setForm((s) => ({ ...s, moved_at: e.target.value }))
                }
                className="input"
              />
            </div>
          </div>

          <div className="form-field">
            <label className="form-label">Catatan (opsional)</label>
            <textarea
              value={form.note ?? ""}
              onChange={(e) => setForm((s) => ({ ...s, note: e.target.value }))}
              className="textarea"
              rows={2}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="card__footer" style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
          <button type="button" onClick={onClose} className="button button-outline">
            Batal
          </button>
          <button
            type="button"
            disabled={!canSubmit}
            onClick={async () => {
              setSaving(true);
              setError(null);
              try {
                const res = await submitCash(form);
                onSubmitted?.(res.data.id);
                onClose();
              } catch (e) {
                const err = e as {
                  response?: { data?: { message?: string; errors?: Record<string, string[]> } };
                };
                const serverMsg = err.response?.data?.message;
                const firstFieldError = err.response?.data?.errors
                  ? Object.values(err.response.data.errors)[0]?.[0]
                  : undefined;
                setError(serverMsg ?? firstFieldError ?? "Gagal mengajukan setoran.");
              } finally {
                setSaving(false);
              }
            }}
            className="button button-primary"
            aria-busy={saving ? "true" : "false"}
          >
            {saving ? "Menyimpan…" : "Kirim"}
          </button>
        </div>
      </div>
    </div>
  );
}

```
</details>

### src/components/category/CategoryFilters.tsx

- SHA: `83d54199da74`  
- Ukuran: 4 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/category/CategoryFilters.tsx
import { useEffect, useMemo, useState } from "react";
import type { CategoryQuery, SortCategory } from "../../types/category";

type Props = {
  value: CategoryQuery;
  onChange: (next: CategoryQuery) => void;
};

const SORT_OPTIONS: { label: string; value: SortCategory }[] = [
  { label: "Nama A→Z", value: "nama" },
  { label: "Nama Z→A", value: "-nama" },
  { label: "Terbaru", value: "-created_at" },
  { label: "Terlama", value: "created_at" },
];

export default function CategoryFilters({ value, onChange }: Props): React.ReactElement {
  const [search, setSearch] = useState(value.search ?? "");
  const [isActive, setIsActive] = useState<boolean | undefined>(value.is_active);
  const [sort, setSort] = useState<SortCategory>((value.sort as SortCategory) ?? "nama");

  useEffect(() => {
    setSearch(value.search ?? "");
    setIsActive(value.is_active);
    setSort((value.sort as SortCategory) ?? "nama");
  }, [value]);

  const softText: React.CSSProperties = { color: "var(--color-text-soft)" };

  const gridStyle: React.CSSProperties = useMemo(
    () => ({
      display: "grid",
      gridTemplateColumns: "1.3fr 0.8fr 0.9fr",
      gap: "0.85rem",
      alignItems: "end",
    }),
    []
  );

  const labelStyle: React.CSSProperties = useMemo(
    () => ({
      fontSize: 12,
      fontWeight: 700,
      marginBottom: 6,
      letterSpacing: ".02em",
      ...softText,
    }),
    [softText]
  );

  const actionsStyle: React.CSSProperties = useMemo(
    () => ({
      display: "flex",
      justifyContent: "flex-end",
      gap: "0.6rem",
      flexWrap: "wrap",
      marginTop: "0.9rem",
    }),
    []
  );

  const apply = () => {
    onChange({ ...value, search, sort, is_active: isActive, page: 1 });
  };

  const reset = () => {
    setSearch("");
    setIsActive(undefined);
    setSort("nama");
    onChange({ page: 1, per_page: value.per_page ?? 10, sort: "nama" });
  };

  return (
    <div>
      <div style={gridStyle}>
        {/* Search */}
        <div>
          <div style={labelStyle}>Pencarian</div>
          <input
            className="input"
            placeholder="Cari nama/slug…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") apply();
            }}
            style={{ width: "100%" }}
          />
          <div style={{ ...softText, fontSize: 12, marginTop: 6 }}>
            Tekan <b>Enter</b> atau klik <b>Terapkan</b>.
          </div>
        </div>

        {/* Status */}
        <div>
          <div style={labelStyle}>Status</div>
          <select
            className="select"
            value={String(isActive)}
            onChange={(e) => {
              const v = e.target.value;
              const next = v === "undefined" ? undefined : v === "true";
              setIsActive(next);
              // status: langsung apply (tetap pola Anda)
              onChange({ ...value, is_active: next, page: 1 });
            }}
            style={{ width: "100%" }}
          >
            <option value="undefined">Semua</option>
            <option value="true">Aktif</option>
            <option value="false">Nonaktif</option>
          </select>
        </div>

        {/* Sort */}
        <div>
          <div style={labelStyle}>Urutkan</div>
          <select
            className="select"
            value={sort}
            onChange={(e) => {
              const s = e.target.value as SortCategory;
              setSort(s);
              // sort: langsung apply (tetap pola Anda)
              onChange({ ...value, sort: s, page: 1 });
            }}
            style={{ width: "100%" }}
          >
            {SORT_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div style={actionsStyle}>
        <button className="button button-outline" onClick={reset} type="button">
          Reset
        </button>
        <button className="button button-primary" onClick={apply} type="button">
          Terapkan
        </button>
      </div>

      {/* Responsif: 1 kolom di layar kecil */}
      <style>
        {`
          @media (max-width: 860px) {
            .category-filters-grid-fallback {
              display: block !important;
            }
          }
        `}
      </style>
    </div>
  );
}

```
</details>

### src/components/category/CategoryFormDialog.tsx

- SHA: `2c1535416f35`  
- Ukuran: 12 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/category/CategoryFormDialog.tsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import type {
  Category,
  CategoryCreatePayload,
  CategoryUpdatePayload,
} from "../../types/category";
import { slugify } from "../../lib/slug";

type Props = {
  open: boolean;
  initial?: Category | null;
  onClose: () => void;
  onSubmit: (
    payload: CategoryCreatePayload | CategoryUpdatePayload
  ) => Promise<boolean>;
};

export default function CategoryFormDialog({
  open,
  initial,
  onClose,
  onSubmit,
}: Props) {
  const [nama, setNama] = useState("");
  const [deskripsi, setDeskripsi] = useState<string>("");
  const [isActive, setIsActive] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string[]> | null>(null);

  const dialogRef = useRef<HTMLDivElement | null>(null);
  const firstInputRef = useRef<HTMLInputElement | null>(null);

  const isEdit = Boolean(initial);
  const title = isEdit ? "Edit Kategori" : "Tambah Kategori";
  const subtitle = isEdit
    ? "Perbarui informasi kategori dengan rapi."
    : "Buat kategori baru untuk pengelompokan produk.";

  const fieldError = useMemo(() => {
    const get = (k: string) => (errors?.[k] ? errors?.[k].join(", ") : "");
    return {
      nama: get("nama"),
      deskripsi: get("deskripsi"),
      _error: get("_error"),
    };
  }, [errors]);

  useEffect(() => {
    if (open) {
      setNama(initial?.nama ?? "");
      setDeskripsi(initial?.deskripsi ?? "");
      setIsActive(initial?.is_active ?? true);
      setErrors(null);
      setSubmitting(false);
    }
  }, [open, initial]);

  // UX: lock scroll + esc close + auto focus
  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    // fokus input pertama
    window.setTimeout(() => {
      firstInputRef.current?.focus();
    }, 0);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrors(null);

    const nextSlug =
      initial && initial.nama.trim() === nama.trim() ? initial.slug : slugify(nama);

    const payload: CategoryCreatePayload | CategoryUpdatePayload = initial
      ? { nama, deskripsi: deskripsi || null, is_active: isActive, slug: nextSlug }
      : { nama, deskripsi, is_active: isActive, slug: nextSlug };

    try {
      const ok = await onSubmit(payload);
      if (ok) onClose();
    } catch (err) {
      const e = err as {
        status?: number;
        message?: string;
        errors?: Record<string, string[]>;
      };
      if (e?.errors) setErrors(e.errors);
      else setErrors({ _error: [e?.message ?? "Gagal menyimpan."] });
    } finally {
      setSubmitting(false);
    }
  };

  const onOverlayMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    // klik di luar dialog menutup modal
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      onMouseDown={onOverlayMouseDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="category-dialog-title"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 80,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        background: "rgba(0,0,0,0.45)",
        backdropFilter: "blur(2px)",
      }}
    >
      <div
        ref={dialogRef}
        className="card"
        style={{
          width: "100%",
          maxWidth: 720,
          borderRadius: "var(--radius-xl)",
          overflow: "hidden",
          boxShadow: "0 24px 80px rgba(0,0,0,0.22)",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "1rem 1.25rem",
            borderBottom: "1px solid var(--color-border)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <div style={{ minWidth: 0 }}>
            <div
              id="category-dialog-title"
              style={{
                margin: 0,
                fontWeight: 900,
                letterSpacing: "-0.015em",
                fontSize: "1.1rem",
                lineHeight: 1.2,
              }}
            >
              {title}
            </div>
            <div
              style={{
                marginTop: ".25rem",
                color: "var(--color-text-soft)",
                fontSize: ".9rem",
              }}
            >
              {subtitle}
            </div>
          </div>

          <button
            type="button"
            className="button button-ghost"
            onClick={onClose}
            aria-label="Tutup dialog"
            style={{
              borderRadius: "999px",
              padding: ".5rem .7rem",
              lineHeight: 1,
            }}
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} style={{ padding: "1.25rem" }}>
          {/* Error global */}
          {fieldError._error ? (
            <div
              role="alert"
              style={{
                marginBottom: "1rem",
                padding: ".85rem 1rem",
                borderRadius: "var(--radius-md)",
                border: "1px solid rgba(220,38,38,.25)",
                background: "rgba(220,38,38,.06)",
                color: "var(--color-danger)",
                fontWeight: 700,
              }}
            >
              {fieldError._error}
            </div>
          ) : null}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr .8fr",
              gap: "1rem",
            }}
          >
            {/* Nama */}
            <div style={{ minWidth: 0 }}>
              <label
                htmlFor="nama"
                style={{
                  display: "block",
                  fontSize: ".9rem",
                  fontWeight: 700,
                }}
              >
                Nama <span style={{ color: "var(--color-danger)" }}>*</span>
              </label>
              <input
                ref={firstInputRef}
                id="nama"
                className="input"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                required
                placeholder="Contoh: Minuman"
                aria-invalid={fieldError.nama ? "true" : "false"}
                style={{
                  width: "100%",
                  marginTop: ".4rem",
                  borderColor: fieldError.nama ? "rgba(220,38,38,.45)" : undefined,
                }}
              />
              {fieldError.nama ? (
                <div
                  style={{
                    marginTop: ".4rem",
                    color: "var(--color-danger)",
                    fontSize: ".85rem",
                  }}
                >
                  {fieldError.nama}
                </div>
              ) : (
                <div
                  style={{
                    marginTop: ".4rem",
                    color: "var(--color-text-soft)",
                    fontSize: ".85rem",
                  }}
                >
                  Nama kategori harus jelas dan singkat.
                </div>
              )}
            </div>

            {/* Aktif */}
            <div
              style={{
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                padding: ".9rem 1rem",
                background: "rgba(0,0,0,0.01)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: ".5rem",
              }}
            >
              <div style={{ fontWeight: 800 }}>Status</div>
              <label
                htmlFor="is_active"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: ".6rem",
                  cursor: "pointer",
                  userSelect: "none",
                }}
              >
                <input
                  id="is_active"
                  type="checkbox"
                  checked={isActive}
                  onChange={(e) => setIsActive(e.target.checked)}
                />
                <span style={{ fontWeight: 700 }}>Aktif</span>
              </label>
              <div style={{ color: "var(--color-text-soft)", fontSize: ".85rem" }}>
                Nonaktifkan jika kategori tidak dipakai sementara.
              </div>
            </div>
          </div>

          {/* Deskripsi */}
          <div style={{ marginTop: "1rem" }}>
            <label
              htmlFor="deskripsi"
              style={{
                display: "block",
                fontSize: ".9rem",
                fontWeight: 700,
              }}
            >
              Deskripsi
            </label>
            <textarea
              id="deskripsi"
              className="textarea"
              rows={4}
              value={deskripsi}
              onChange={(e) => setDeskripsi(e.target.value)}
              placeholder="Opsional. Catatan singkat tentang kategori ini."
              aria-invalid={fieldError.deskripsi ? "true" : "false"}
              style={{
                width: "100%",
                marginTop: ".4rem",
                borderColor: fieldError.deskripsi
                  ? "rgba(220,38,38,.45)"
                  : undefined,
              }}
            />
            {fieldError.deskripsi ? (
              <div
                style={{
                  marginTop: ".4rem",
                  color: "var(--color-danger)",
                  fontSize: ".85rem",
                }}
              >
                {fieldError.deskripsi}
              </div>
            ) : null}
          </div>

          {/* Footer actions */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: ".75rem",
              flexWrap: "wrap",
              marginTop: "1.25rem",
              paddingTop: "1rem",
              borderTop: "1px solid var(--color-border)",
            }}
          >
            <div style={{ color: "var(--color-text-soft)", fontSize: ".9rem" }}>
              Slug dibuat otomatis dari nama kategori.
            </div>

            <div style={{ display: "flex", gap: ".6rem", flexWrap: "wrap" }}>
              <button
                type="button"
                className="button button-outline"
                onClick={onClose}
                disabled={submitting}
              >
                Batal
              </button>
              <button
                type="submit"
                className="button button-primary"
                disabled={submitting}
                style={{ minWidth: 120 }}
              >
                {submitting ? "Menyimpan…" : "Simpan"}
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Responsif: modal jadi 1 kolom pada layar kecil */}
      <style>
        {`
          @media (max-width: 720px) {
            form > div[style*="grid-template-columns"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </div>
  );
}

```
</details>

### src/components/category/CategoryTable.tsx

- SHA: `69543f7547dd`  
- Ukuran: 5 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/category/CategoryTable.tsx
import type { Category } from "../../types/category";

type Props = {
  rows: Category[];
  onEdit: (row: Category) => void;
  onDelete: (row: Category) => void;
};

export default function CategoryTable({ rows, onEdit, onDelete }: Props) {
  const softText: React.CSSProperties = { color: "var(--color-text-soft)" };

  const thBase: React.CSSProperties = {
    whiteSpace: "nowrap",
  };

  const tdBase: React.CSSProperties = {
    verticalAlign: "top",
  };

  const mono: React.CSSProperties = {
    fontFamily:
      'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    fontSize: 12,
  };

  const clamp2: React.CSSProperties = {
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  };

  return (
    <div
      style={{
        overflowX: "auto",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-md)",
      }}
    >
      <table className="table" style={{ margin: 0 }}>
        <thead>
          <tr>
            <th style={{ ...thBase, width: 64, textAlign: "right" }}>#</th>
            <th style={thBase}>Nama</th>
            <th style={{ ...thBase, width: 220 }}>Slug</th>
            <th style={thBase}>Deskripsi</th>
            <th style={{ ...thBase, width: 120, textAlign: "center" }}>Status</th>
            <th style={{ ...thBase, width: 180 }}>Aksi</th>
          </tr>
        </thead>

        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan={6} style={{ padding: "1rem" }}>
                <div
                  style={{
                    padding: "1rem",
                    textAlign: "center",
                    border: "1px dashed var(--color-border)",
                    borderRadius: "var(--radius-md)",
                    background: "var(--color-surface)",
                  }}
                >
                  <div style={{ fontWeight: 800 }}>Belum ada data</div>
                  <div style={{ ...softText, marginTop: ".25rem" }}>
                    Silakan tambah kategori baru untuk mulai mengisi data.
                  </div>
                </div>
              </td>
            </tr>
          ) : (
            rows.map((r, i) => (
              <tr key={r.id}>
                <td style={{ ...tdBase, textAlign: "right", ...softText }}>
                  {i + 1}
                </td>

                <td style={tdBase}>
                  <div style={{ fontWeight: 800, lineHeight: 1.25 }}>
                    {r.nama}
                  </div>
                  <div style={{ ...softText, marginTop: ".25rem", ...mono }}>
                    {r.slug}
                  </div>
                </td>

                <td style={{ ...tdBase, ...mono }}>
                  {r.slug}
                </td>

                <td style={tdBase}>
                  {r.deskripsi ? (
                    <div style={{ ...clamp2, lineHeight: 1.45 }}>
                      {r.deskripsi}
                    </div>
                  ) : (
                    <span style={softText}>—</span>
                  )}
                </td>

                <td style={{ ...tdBase, textAlign: "center" }}>
                  <span
                    className={`badge ${
                      r.is_active ? "badge-success" : "badge-danger"
                    }`}
                    style={{ display: "inline-flex", justifyContent: "center", minWidth: 84 }}
                  >
                    {r.is_active ? "Aktif" : "Nonaktif"}
                  </span>
                </td>

                <td style={tdBase}>
                  <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
                    <button
                      className="button button-outline"
                      onClick={() => onEdit(r)}
                      style={{ paddingInline: ".9rem" }}
                    >
                      Edit
                    </button>

                    <button
                      className="button"
                      onClick={() => onDelete(r)}
                      style={{
                        paddingInline: ".9rem",
                        borderColor: "rgba(220,38,38,.25)",
                        color: "var(--color-danger)",
                        background: "rgba(220,38,38,.06)",
                      }}
                    >
                      Hapus
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

```
</details>

### src/components/customers/CustomerSelect.tsx

- SHA: `27cb17ef5d5c`  
- Ukuran: 8 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/customers/CustomerSelect.tsx
import { useEffect, useMemo, useRef, useState } from "react";
import { listCustomers } from "../../api/customers";
import type { Customer } from "../../types/customers";

type Props = {
  branchId: number | string;
  value: Customer | null;
  onChange: (c: Customer | null) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
};

/**
 * CustomerSelect
 * Autocomplete pelanggan terdaftar berdasarkan cabang.
 * - Ketik nama / no HP => fetch 10 teratas
 * - Klik salah satu => onChange(Customer)
 * - Nilai terpilih ditampilkan sebagai "Nama (No HP)"
 *
 * Catatan:
 * - UI dirapikan agar konsisten dengan design system index.css (card/input/button/badge).
 * - Logika utama tidak diubah.
 */
export default function CustomerSelect({
  branchId,
  value,
  onChange,
  placeholder = "Cari nama / no HP terdaftar…",
  disabled = false,
  className = "",
}: Props): React.ReactElement {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const timer = useRef<number | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  // tutup dropdown saat klik di luar
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!wrapRef.current) return;
      if (!wrapRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // fetch dengan debounce ketika q berubah
  useEffect(() => {
    if (!q) {
      setRows([]);
      setLoading(false);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    if (timer.current) window.clearTimeout(timer.current);

    timer.current = window.setTimeout(async () => {
      try {
        const res = await listCustomers({
          q,
          cabang_id: branchId,
          per_page: 10,
          page: 1,
        });
        setRows(res.data ?? []);
      } catch (err: unknown) {
        let msg = "Gagal memuat pelanggan";
        if (typeof err === "object" && err !== null) {
          // @ts-expect-error akses opsional
          msg = err?.message ?? msg;
        }
        setError(msg);
      } finally {
        setLoading(false);
      }
    }, 250);

    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [q, branchId]);

  const displayText = useMemo(() => {
    if (value) {
      const nama = value.nama ?? "-";
      const phone = value.phone ? ` (${value.phone})` : "";
      return `${nama}${phone}`;
    }
    return q;
  }, [value, q]);

  const showEmpty = !loading && !error && rows.length === 0 && Boolean(q);

  return (
    <div ref={wrapRef} className={`relative ${className}`}>
      {/* Input + indikator */}
      <div style={{ position: "relative" }}>
        <input
          className="input w-full"
          placeholder={placeholder}
          value={displayText}
          onChange={(e) => {
            setQ(e.target.value);
            onChange(null);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          disabled={disabled}
          aria-expanded={open ? "true" : "false"}
          aria-autocomplete="list"
          aria-haspopup="listbox"
        />

        {/* Indicator kanan (loading / selected) */}
        <div
          style={{
            position: "absolute",
            right: "0.6rem",
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            pointerEvents: "none",
          }}
        >
          {loading ? (
            <span className="badge" style={{ height: 22 }}>
              Loading
            </span>
          ) : value ? (
            <span className="badge" style={{ height: 22 }}>
              Selected
            </span>
          ) : null}
        </div>
      </div>

      {/* Dropdown */}
      {open && (
        <div
          className="card"
          role="listbox"
          style={{
            position: "absolute",
            zIndex: 30,
            marginTop: "0.5rem",
            width: "100%",
            maxHeight: "16rem",
            overflow: "auto",
            padding: "0.35rem",
            borderRadius: "14px",
          }}
        >
          {/* Status: loading / error / empty */}
          {loading && (
            <div
              style={{
                padding: "0.6rem 0.75rem",
                fontSize: "0.9rem",
                opacity: 0.75,
              }}
            >
              Memuat…
            </div>
          )}

          {error && (
            <div
              className="badge badge-danger"
              style={{
                display: "block",
                padding: "0.6rem 0.75rem",
                borderRadius: "12px",
                margin: "0.35rem",
              }}
            >
              {error}
            </div>
          )}

          {showEmpty && (
            <div
              style={{
                padding: "0.6rem 0.75rem",
                fontSize: "0.9rem",
                opacity: 0.75,
              }}
            >
              Tidak ada hasil untuk “{q}”
            </div>
          )}

          {/* List */}
          {!loading &&
            !error &&
            rows.map((c) => {
              const nama = c.nama ?? "(tanpa nama)";
              const phone = c.phone ?? "-";
              const alamat = c.alamat ?? "-";

              return (
                <button
                  key={c.id}
                  type="button"
                  className="button button-ghost"
                  onMouseDown={(e) => e.preventDefault()} // agar input tidak blur sebelum click
                  onClick={() => {
                    onChange(c);
                    setOpen(false);
                    setQ("");
                  }}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "0.65rem 0.75rem",
                    borderRadius: "12px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "0.25rem",
                    // hover visual halus tanpa mengandalkan tailwind
                    background: "transparent",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                      gap: "0.75rem",
                    }}
                  >
                    <span style={{ fontWeight: 700, fontSize: "0.95rem" }}>
                      {nama}
                    </span>
                    <span className="badge" style={{ height: 22 }}>
                      {phone}
                    </span>
                  </div>

                  <div style={{ fontSize: "0.85rem", opacity: 0.75 }}>
                    {alamat}
                  </div>
                </button>
              );
            })}

          {/* Footer hint */}
          {!loading && !error && rows.length > 0 && (
            <div
              style={{
                marginTop: "0.25rem",
                padding: "0.45rem 0.65rem 0.35rem 0.65rem",
                fontSize: "0.8rem",
                opacity: 0.65,
              }}
            >
              Tip: ketik minimal 2–3 huruf agar hasil lebih relevan.
            </div>
          )}
        </div>
      )}
    </div>
  );
}

```
</details>

### src/components/customers/CustomerStageBadge.tsx

- SHA: `d25516d37b75`  
- Ukuran: 2 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/customers/CustomerStageBadge.tsx
import { memo } from "react";
import type { CustomerStage } from "../../types/customers";

type StageInfo = {
  label: string;
  className: string;
  title: string;
};

const STAGE_INFO: Record<CustomerStage, StageInfo> = {
  LEAD: {
    label: "Lead",
    className: "badge badge-warning",
    title: "Prospek (belum aktif transaksi rutin)",
  },
  ACTIVE: {
    label: "Active",
    className: "badge badge-success",
    title: "Pelanggan aktif",
  },
  CHURN: {
    label: "Churn",
    className: "badge badge-danger",
    title: "Pelanggan tidak aktif / berhenti",
  },
} as const;

interface Props {
  stage: CustomerStage;
}

function CustomerStageBadge({ stage }: Props): React.ReactElement {
  // Defensive UI: kalau suatu saat backend nambah enum baru tapi frontend belum update,
  // badge tetap tampil rapi (tidak memecahkan UI).
  const info = STAGE_INFO[stage] ?? {
    label: String(stage ?? "Unknown"),
    className: "badge",
    title: "Status pelanggan",
  };

  return (
    <span
      className={info.className}
      title={info.title}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.35rem",
        padding: "0.28rem 0.55rem",
        borderRadius: "999px",
        fontSize: "0.78rem",
        lineHeight: 1,
        whiteSpace: "nowrap",
      }}
    >
      {/* titik indikator kecil agar lebih “modern” dan terbaca cepat */}
      <span
        aria-hidden="true"
        style={{
          width: 7,
          height: 7,
          borderRadius: 999,
          background: "currentColor",
          opacity: 0.55,
        }}
      />
      {info.label}
    </span>
  );
}

export default memo(CustomerStageBadge);

```
</details>

### src/components/customers/CustomerTable.tsx

- SHA: `0baa61d0c8f4`  
- Ukuran: 10 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/customers/CustomerTable.tsx
import { useEffect, useMemo, useState } from "react";
import type {
  Customer,
  CustomerQuery,
  CustomerStage,
  LaravelPaginator,
} from "../../types/customers";
import { listCustomers } from "../../api/customers";
import CustomerStageBadge from "./CustomerStageBadge";

interface Props {
  onRowClick?: (c: Customer) => void;
  canCreate?: boolean;
  onCreate?: () => void;
}

// ✅ Selaras backend
const stages: CustomerStage[] = ["LEAD", "ACTIVE", "CHURN"];

// ✅ Helper tanpa `any`: dukung backend yang kadang kirim `nama` atau `name`
type CustomerRow = Customer & { nama?: string; name?: string };
const getDisplayName = (c: CustomerRow) => c.nama ?? c.name ?? "";

export default function CustomerTable({
  onRowClick,
  canCreate = false,
  onCreate,
}: Props): React.ReactElement {
  const [query, setQuery] = useState<CustomerQuery>({ page: 1, per_page: 10 });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [rows, setRows] = useState<LaravelPaginator<Customer> | null>(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await listCustomers(query);
        if (!cancelled) setRows(data);
      } catch {
        if (!cancelled) setError("Failed to load customers");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [query]);

  const empty = useMemo(() => (rows?.data.length ?? 0) === 0, [rows]);
  const page = rows?.current_page ?? 1;
  const lastPage = rows?.last_page ?? 1;

  const canPrev = Boolean(rows) && page > 1 && !loading;
  const canNext = Boolean(rows) && page < lastPage && !loading;

  return (
    <div>
      {/* Toolbar (Filters + Actions) */}
      <div className="card" style={{ padding: "1rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          {/* Filters */}
          <div style={{ flex: "1 1 640px", minWidth: 260 }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr 1fr 1fr",
                gap: "0.85rem",
              }}
            >
              <div style={{ minWidth: 220 }}>
                <label className="form-label">Search</label>
                <input
                  className="input w-full"
                  placeholder="Nama / 08xx / email"
                  value={query.q ?? ""}
                  onChange={(ev) =>
                    setQuery((q) => ({ ...q, q: ev.target.value, page: 1 }))
                  }
                />
              </div>

              <div>
                <label className="form-label">Stage</label>
                <select
                  className="select w-full"
                  value={query.stage ?? ""}
                  onChange={(ev) =>
                    setQuery((q) => ({
                      ...q,
                      stage:
                        (ev.target.value as CustomerStage) || undefined,
                      page: 1,
                    }))
                  }
                >
                  <option value="">All</option>
                  {stages.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="form-label">From</label>
                <input
                  type="date"
                  className="input w-full"
                  value={query.from ?? ""}
                  onChange={(ev) =>
                    setQuery((q) => ({
                      ...q,
                      from: ev.target.value || undefined,
                      page: 1,
                    }))
                  }
                />
              </div>

              <div>
                <label className="form-label">To</label>
                <input
                  type="date"
                  className="input w-full"
                  value={query.to ?? ""}
                  onChange={(ev) =>
                    setQuery((q) => ({
                      ...q,
                      to: ev.target.value || undefined,
                      page: 1,
                    }))
                  }
                />
              </div>
            </div>

            {/* mini helper */}
            <div style={{ marginTop: "0.75rem", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              <span className="badge">Tip</span>
              <span style={{ fontSize: "0.9rem", opacity: 0.75 }}>
                Klik baris tabel untuk membuka detail customer.
              </span>
              {loading ? (
                <span className="badge" style={{ opacity: 0.8 }}>
                  Loading…
                </span>
              ) : null}
            </div>
          </div>

          {/* Actions */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              justifyContent: "flex-end",
              flex: "0 1 auto",
            }}
          >
            {canCreate ? (
              <button
                type="button"
                className="button button-primary"
                onClick={() => onCreate?.()}
                disabled={loading}
              >
                + New Customer
              </button>
            ) : null}

            <button
              type="button"
              className="button button-outline"
              onClick={() => setQuery((q) => ({ ...q, page: 1 }))}
              disabled={loading}
              title="Reset ke halaman 1"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Responsive: grid jadi 1 kolom di layar kecil */}
        <style>
          {`
            @media (max-width: 900px) {
              .card div[style*="grid-template-columns: 2fr 1fr 1fr 1fr"] {
                grid-template-columns: 1fr !important;
              }
            }
          `}
        </style>
      </div>

      {/* Table + Pagination dalam 1 card agar tidak terpecah */}
      <div className="card" style={{ padding: "0.75rem 0.75rem 0.5rem 0.75rem" }}>
        <div style={{ overflowX: "auto" }}>
          <table className="table" style={{ minWidth: 860 }}>
            <thead>
              <tr>
                <th className="text-left">Name</th>
                <th className="text-left">Phone</th>
                <th className="text-left">Email</th>
                <th className="text-left">Stage</th>
                <th className="text-left">Last Order</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td className="text-center muted" colSpan={5}>
                    Loading…
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td className="text-center danger" colSpan={5}>
                    {error}
                  </td>
                </tr>
              ) : rows ? (
                rows.data.map((c) => {
                  const row = c as CustomerRow;

                  return (
                    <tr
                      key={c.id}
                      onClick={() => onRowClick?.(c)}
                      style={{
                        cursor: onRowClick ? "pointer" : "default",
                      }}
                      title={onRowClick ? "Open customer detail" : undefined}
                    >
                      <td className="font-medium">{getDisplayName(row)}</td>
                      <td>{row.phone}</td>
                      <td>{row.email ?? "-"}</td>
                      <td>
                        <CustomerStageBadge stage={row.stage} />
                      </td>
                      <td>
                        {row.last_order_at
                          ? new Date(row.last_order_at).toLocaleString()
                          : "-"}
                      </td>
                    </tr>
                  );
                })
              ) : null}

              {rows && empty && !loading && !error ? (
                <tr>
                  <td className="text-center muted" colSpan={5}>
                    No customers found.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>

        {/* Divider halus */}
        <div
          style={{
            height: 1,
            background: "rgba(2,6,23,0.06)",
            margin: "0.75rem 0.25rem",
          }}
        />

        {/* Pagination */}
        <div
          className="toolbar"
          style={{
            padding: "0 0.25rem 0.25rem 0.25rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0.75rem",
            flexWrap: "wrap",
          }}
        >
          <div className="muted text-xs">
            Page {page} / {lastPage}
            {rows ? (
              <span style={{ marginLeft: "0.5rem", opacity: 0.8 }}>
                • Total: {rows.total ?? rows.data.length}
              </span>
            ) : null}
          </div>

          <div
            className="toolbar-actions"
            style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}
          >
            <button
              className="button button-outline"
              disabled={!canPrev}
              onClick={() =>
                setQuery((q) => ({
                  ...q,
                  page: Math.max(1, (q.page ?? 1) - 1),
                }))
              }
            >
              Prev
            </button>

            <button
              className="button button-outline"
              disabled={!canNext}
              onClick={() =>
                setQuery((q) => ({
                  ...q,
                  page: Math.min(lastPage, (q.page ?? 1) + 1),
                }))
              }
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

```
</details>

### src/components/customers/CustomerTimeline.tsx

- SHA: `34d9a26fb707`  
- Ukuran: 6 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/customers/CustomerTimeline.tsx
import type { CustomerTimelineEvent } from "../../types/customers";

interface Props {
  items: CustomerTimelineEvent[];
  loading?: boolean;
  error?: string | null;
}

function formatEventType(v: string): string {
  // UI helper saja (tidak mengubah data/logika)
  return v
    .replaceAll("_", " ")
    .trim()
    .replace(/\s+/g, " ")
    .toUpperCase();
}

export default function CustomerTimeline({
  items,
  loading,
  error,
}: Props): React.ReactElement {
  if (loading) {
    return (
      <div
        className="text-sm"
        style={{
          padding: "0.75rem",
          border: "1px dashed var(--border)",
          borderRadius: "14px",
          color: "var(--muted-foreground)",
          background: "rgba(2,6,23,0.02)",
        }}
      >
        Loading timeline…
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="text-sm"
        style={{
          padding: "0.75rem",
          border: "1px solid rgba(239,68,68,0.30)",
          borderRadius: "14px",
          background: "rgba(239,68,68,0.06)",
          color: "var(--danger, #ef4444)",
        }}
      >
        {error}
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div
        className="text-sm"
        style={{
          padding: "0.75rem",
          border: "1px dashed var(--border)",
          borderRadius: "14px",
          color: "var(--muted-foreground)",
          background: "rgba(2,6,23,0.02)",
        }}
      >
        No timeline yet.
      </div>
    );
  }

  return (
    <div style={{ marginTop: "0.75rem" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          marginBottom: "0.75rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span className="badge" style={{ height: 26 }}>
            Activity
          </span>
          <span style={{ fontSize: "0.95rem", opacity: 0.8 }}>
            Riwayat aktivitas pelanggan (terbaru ke terlama).
          </span>
        </div>

        <span
          className="badge"
          style={{
            height: 26,
            opacity: 0.85,
          }}
          title="Jumlah event"
        >
          {items.length} items
        </span>
      </div>

      <ol
        style={{
          position: "relative",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        {items.map((ev, idx) => {
          const isLast = idx === items.length - 1;
          const happened = new Date(ev.happened_at);

          return (
            <li
              key={ev.id}
              style={{
                position: "relative",
                display: "grid",
                gridTemplateColumns: "28px 1fr",
                columnGap: "0.75rem",
                paddingBottom: isLast ? 0 : "0.85rem",
              }}
            >
              {/* Rail (dot + line) */}
              <div style={{ position: "relative" }} aria-hidden>
                <span
                  style={{
                    position: "absolute",
                    top: "0.55rem",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 12,
                    height: 12,
                    borderRadius: 9999,
                    background: "var(--background)",
                    border: "2px solid var(--muted-foreground)",
                    boxShadow: "0 0 0 4px rgba(2,6,23,0.04)",
                  }}
                />
                {!isLast ? (
                  <span
                    style={{
                      position: "absolute",
                      top: "1.2rem",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 2,
                      height: "calc(100% - 1.2rem)",
                      background: "var(--border)",
                      borderRadius: 999,
                    }}
                  />
                ) : null}
              </div>

              {/* Content card */}
              <div
                className="card"
                style={{
                  padding: "0.85rem 0.9rem",
                  borderRadius: "16px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "0.75rem",
                    flexWrap: "wrap",
                  }}
                >
                  <div style={{ minWidth: 220 }}>
                    <div
                      className="text-xs"
                      style={{
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "var(--muted-foreground)",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {formatEventType(ev.event_type)}
                    </div>

                    {ev.title ? (
                      <div style={{ fontWeight: 750, lineHeight: 1.25 }}>
                        {ev.title}
                      </div>
                    ) : null}
                  </div>

                  <div
                    className="text-xs"
                    style={{
                      color: "var(--muted-foreground)",
                      whiteSpace: "nowrap",
                    }}
                    title={happened.toISOString()}
                  >
                    {happened.toLocaleString()}
                  </div>
                </div>

                {ev.note ? (
                  <div
                    className="text-sm"
                    style={{
                      marginTop: "0.5rem",
                      lineHeight: 1.55,
                      opacity: 0.92,
                    }}
                  >
                    {ev.note}
                  </div>
                ) : null}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

```
</details>

### src/components/dashboard/KPIStatCards.tsx

- SHA: `254ce5d87719`  
- Ukuran: 3 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/dashboard/KPIStatCards.tsx
import { useMemo } from 'react';
import type { KPIs } from '../../types/dashboard';

type Props = {
  data: KPIs | null;
  loading: boolean;
  error: string | null;
};

function fmtMoney(n: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(n);
}

export default function KPIStatCards({ data, loading, error }: Props): React.ReactElement {
  const items = useMemo(() => {
    if (!data) return [];
    return [
      { label: 'Orders', value: data.orders_total as number | string },
      { label: 'Paid Orders', value: data.orders_paid as number | string },
      { label: 'Revenue', value: fmtMoney(data.revenue) as string },
      { label: 'Avg Ticket', value: fmtMoney(data.avg_ticket) as string },
    ];
  }, [data]);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: 16,
        alignItems: 'stretch',
      }}
    >
      {loading &&
        Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="card" style={{ height: 80, background: 'rgba(0,0,0,.04)' }} />
        ))}

      {error && (
        <div style={{ gridColumn: '1 / -1' }}>
          <div className="card" style={{ padding: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span className="badge badge-danger">Error</span>
            <span style={{ fontSize: 12 }}>{error}</span>
          </div>
        </div>
      )}

      {!loading &&
        !error &&
        items.map((it) => (
          <div key={it.label} className="card" style={{ padding: 16 }}>
            <div style={{ fontSize: 12, opacity: 0.7 }}>{it.label}</div>
            <div style={{ marginTop: 4, fontSize: 20, fontWeight: 600 }}>{it.value}</div>
          </div>
        ))}

      {!loading && !error && data && (
        <div style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span
            className={`badge ${data.validation.is_consistent ? 'badge-success' : 'badge-warning'}`}
            title={`Paid Sum: ${fmtMoney(data.validation.paid_amount_sum)} | Diff: ${fmtMoney(
              data.validation.orders_vs_payments_diff
            )}`}
            style={{ whiteSpace: 'nowrap' }}
          >
            {data.validation.is_consistent ? 'Payments consistent' : 'Check payments mismatch'}
          </span>
          <span style={{ fontSize: 12, opacity: 0.75 }}>{data.paid_rate_pct}% paid</span>
        </div>
      )}
    </div>
  );
}

```
</details>

### src/components/dashboard/LowStockList.tsx

- SHA: `633902c99297`  
- Ukuran: 2 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/dashboard/LowStockList.tsx
import type { LowStockRow } from '../../types/dashboard';

type Props = {
  data: LowStockRow[] | null;
  loading: boolean;
  error: string | null;
  onOpenStock?: (variantId: number) => void;
};

export default function LowStockList({ data, loading, error, onOpenStock }: Props) {
  return (
    <div className="card" style={{ padding: 16 }}>
      <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>Low Stock</div>

      {loading && (
        <div
          aria-busy="true"
          style={{
            height: 96,
            borderRadius: 8,
            background: 'rgba(0,0,0,.05)',
          }}
        />
      )}

      {error && (
        <div style={{ marginTop: 6 }}>
          <span className="badge badge-danger" title={error}>
            {error}
          </span>
        </div>
      )}

      {!loading && !error && (!data || data.length === 0) && (
        <div style={{ fontSize: 13, opacity: 0.7 }}>All good — nothing is below threshold.</div>
      )}

      {!loading && !error && data && data.length > 0 && (
        <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {data.map((r, idx) => (
            <li
              key={`${r.variant_id}-${r.gudang_id}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 0',
                borderTop: idx === 0 ? 'none' : '1px solid rgba(0,0,0,.06)',
              }}
            >
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 14, marginBottom: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {r.name}
                </div>
                <div style={{ fontSize: 12, opacity: 0.7 }}>
                  {r.sku} — On hand {r.qty_on_hand} / Min {r.min_stock}
                </div>
              </div>

              {onOpenStock && (
                <button
                  type="button"
                  className="button button-ghost"
                  onClick={() => onOpenStock(r.variant_id)}
                  style={{ padding: '4px 8px', fontSize: 12 }}
                  aria-label={`Open stock for ${r.sku}`}
                >
                  Stock
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

```
</details>

### src/components/dashboard/QuickActions.tsx

- SHA: `6b27d8c5a244`  
- Ukuran: 3 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/dashboard/QuickActions.tsx
import type { QuickAction } from "../../types/dashboard";

type Props = {
    data: QuickAction[] | null;
    loading: boolean;
    error: string | null;
    onRun?: (action: QuickAction) => void;
};

export default function QuickActions({ data, loading, error, onRun }: Props): React.ReactElement {
    const hasData = !!data && data.length > 0;

    return (
        <div className="card">
            <div style={{ padding: 12, borderBottom: "1px solid rgba(0,0,0,.06)" }}>
                <div style={{ fontSize: 14, fontWeight: 600 }}>Quick Actions</div>
            </div>

            <div style={{ padding: 12 }}>
                {loading && (
                    <div
                        aria-hidden
                        style={{
                            height: 48,
                            borderRadius: 8,
                            background: "rgba(0,0,0,.06)",
                            boxShadow: "inset 0 1px 2px rgba(0,0,0,.06)",
                        }}
                    />
                )}

                {!loading && error && (
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span className="badge badge-danger">Error</span>
                        <span style={{ fontSize: 14 }}>{error}</span>
                    </div>
                )}

                {!loading && !error && !hasData && (
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span className="badge badge-warning">Info</span>
                        <span style={{ opacity: 0.8, fontSize: 14 }}>Tidak ada saran tindakan.</span>
                    </div>
                )}

                {!loading && !error && hasData && (
                    <ul
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 8,
                            listStyle: "none",
                            padding: 0,
                            margin: 0,
                        }}
                    >
                        {data!.map((a, idx) => {
                            const title =
                                a.type === "LOW_STOCK" && a.payload
                                    ? `First SKU ${a.payload.first_sku ?? ""}`
                                    : a.type;

                            const label =
                                a.type === "LOW_STOCK" && a.payload
                                    ? `${a.label} (${a.payload.count})`
                                    : a.label;

                            return (
                                <li key={`${a.type}-${idx}`}>
                                    <button
                                        type="button"
                                        className="button button-outline"
                                        style={{ padding: "6px 10px", fontSize: 12 }}
                                        onClick={() => onRun?.(a)}
                                        title={title}
                                    >
                                        {label}
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
        </div>
    );
}

```
</details>

### src/components/dashboard/ReorderPointList.tsx

- SHA: `fcd5433b2f0d`  
- Ukuran: 2 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { useEffect, useState } from "react";
import { getRopList, type RopRow } from "../../api/stocks";

type Props = {
    gudangId?: number | string;
};

export default function ReorderPointList({ gudangId }: Props) {
    const [rows, setRows] = useState<RopRow[]>([]);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState<string | null>(null);

    useEffect(() => {
        let on = true;
        setLoading(true);
        setErr(null);
        getRopList({ gudang_id: gudangId })
            .then((list) => { if (on) setRows(list); })
            .catch((e: any) => { if (on) setErr(e?.message || "Gagal memuat data ROP."); })
            .finally(() => { if (on) setLoading(false); });
        return () => { on = false; };
    }, [gudangId]);

    return (
        <div className="card" style={{ padding: 16 }}>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>Perlu Reorder (ROP)</div>

            {loading && <div aria-busy="true" style={{ height: 96, borderRadius: 8, background: "rgba(0,0,0,.05)" }} />}
            {!loading && err && <div className="alert alert-danger">{err}</div>}
            {!loading && !err && rows.length === 0 && <div className="alert">Aman — tidak ada item di bawah ROP.</div>}

            {!loading && !err && rows.length > 0 && (
                <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                    {rows.map((r) => (
                        <li key={r.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0" }}>
                            <div>
                                <div style={{ fontWeight: 600 }}>{r.variant?.sku ?? "-"}</div>
                                <div style={{ fontSize: 12, opacity: 0.85 }}>{r.variant?.nama ?? "-"}</div>
                                <div style={{ fontSize: 12, marginTop: 2 }}>
                                    Stok: <b>{r.qty}</b> &nbsp;|&nbsp; ROP: <b>{r.reorder_point_eff ?? r.reorder_point ?? "-"}</b>
                                </div>
                            </div>
                            
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

```
</details>

### src/components/dashboard/Sales7DaysChart.tsx

- SHA: `89bb17c2c9a7`  
- Ukuran: 3 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/dashboard/Sales7DaysChart.tsx
import type { Chart7DayPoint } from '../../types/dashboard';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from 'recharts';

type Props = {
  data: Chart7DayPoint[] | null;
  loading: boolean;
  error: string | null;
};

export default function Sales7DaysChart({ data, loading, error }: Props): React.ReactElement {
  if (loading) {
    return (
      <div className="card" style={{ padding: 16 }}>
        <div
          aria-hidden
          style={{
            height: 240,
            width: '100%',
            borderRadius: 12,
            background: 'rgba(0,0,0,0.05)',
            animation: 'pulse 1.2s ease-in-out infinite',
          }}
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="card" style={{ padding: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span className="badge badge-danger">Error</span>
          <span style={{ fontSize: 14 }}>{error}</span>
        </div>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="card" style={{ padding: 16 }}>
        <span style={{ fontSize: 14, opacity: 0.7 }}>No data.</span>
      </div>
    );
  }

  return (
    <div className="card" style={{ padding: 16 }}>
      <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>Sales (Last 7 Days)</div>

      {/* Tinggi eksplisit agar Recharts stabil (menghindari width/height -1) */}
      <div style={{ height: 240, width: '100%', minWidth: 0 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            {/* orders = garis netral; revenue = warna brand */}
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="orders"
              dot={false}
              stroke="rgba(100,116,139,.9)"      // slate-ish, netral
              strokeWidth={2}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="revenue"
              dot={false}
              stroke="var(--color-primary)"      // #C04657 dari index.css
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

```
</details>

### src/components/dashboard/TopProductsList.tsx

- SHA: `28f9a26c2b89`  
- Ukuran: 3 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/dashboard/TopProductsList.tsx
import type { TopProduct } from '../../types/dashboard';

type Props = {
  data: TopProduct[] | null;
  loading: boolean;
  error: string | null;
  onViewVariant?: (variantId: number) => void;
};

function fmtMoney(n: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(n);
}

export default function TopProductsList({ data, loading, error, onViewVariant }: Props): React.ReactElement {
  return (
    <div className="card" style={{ padding: 16 }}>
      <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>Top Products</div>

      {/* Loading placeholder */}
      {loading && (
        <div
          aria-hidden
          style={{
            height: 96,
            borderRadius: 8,
            background: 'rgba(0,0,0,.05)',
          }}
        />
      )}

      {/* Error */}
      {error && (
        <div style={{ color: '#dc2626', fontSize: 13 }}>
          {error}
        </div>
      )}

      {/* Empty */}
      {!loading && !error && (!data || data.length === 0) && (
        <div style={{ fontSize: 13, opacity: 0.7 }}>No top products.</div>
      )}

      {/* List */}
      {!loading && !error && data && data.length > 0 && (
        <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
          {data.map((r, idx) => (
            <li
              key={`${r.variant_id}-${r.name}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '8px 0',
                borderTop: idx === 0 ? 'none' : '1px solid rgba(0,0,0,.06)',
              }}
            >
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 14, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {r.name}
                </div>
                <div style={{ fontSize: 12, opacity: 0.65 }}>Qty {r.qty}</div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{fmtMoney(r.revenue)}</div>

                {onViewVariant && (
                  <button
                    type="button"
                    className="button button-ghost"
                    onClick={() => onViewVariant(r.variant_id)}
                    style={{ padding: '4px 8px', fontSize: 12 }}
                    aria-label={`Detail ${r.name}`}
                    title="Detail"
                  >
                    Detail
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

```
</details>

### src/components/delivery/AssignCourierSelect.tsx

- SHA: `5e28ee48b991`  
- Ukuran: 5 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/delivery/AssignCourierSelect.tsx
import React, { useEffect, useMemo, useState } from "react";
import type { ID } from "../../types/pos";
import type { User } from "../../types/user";
import type { Paginated } from "../../types/http";
import { listUsers } from "../../api/users";

type Props = {
  value: ID | null | undefined;
  onChange: (id: ID | null) => void;
  disabled?: boolean;
  allowAuto?: boolean; // tampilkan opsi "Auto-assign"
};

export default function AssignCourierSelect({
  value,
  onChange,
  disabled,
  allowAuto,
}: Props): React.ReactElement {
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [perPage] = useState<number>(20);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<Paginated<User> | null>(null);

  // debounce sederhana untuk pencarian
  const [debouncedQ, setDebouncedQ] = useState(search);
  useEffect(() => {
    const t = setTimeout(() => setDebouncedQ(search.trim()), 300);
    return () => clearTimeout(t);
  }, [search]);

  // load kurir by role, q, page
  useEffect(() => {
    let live = true;
    async function run() {
      setLoading(true);
      setError(null);
      try {
        const res = await listUsers({
          role: "kurir", // pastikan Role union berisi "kurir"
          q: debouncedQ || undefined,
          per_page: perPage,
          page,
          is_active: true,
        });
        if (!live) return;
        setData(res);
      } catch (e) {
        if (!live) return;
        setError((e as { message?: string })?.message ?? "Gagal memuat kurir.");
      } finally {
        if (live) setLoading(false);
      }
    }
    run();
    return () => {
      live = false;
    };
  }, [debouncedQ, page, perPage]);

  // agar saat ganti query, kembali ke page 1
  useEffect(() => {
    setPage(1);
  }, [debouncedQ]);

  const items = useMemo<User[]>(() => data?.data ?? [], [data]); // ← stable reference
  const meta = useMemo(
    () => data?.meta ?? { current_page: page, per_page: perPage, total: 0, last_page: 1 },
    [data, page, perPage]
  );

  const selectedLabel = useMemo(() => {
    const found = items.find((u) => u.id === value);
    return found?.name ?? (value ? `#${value}` : "");
  }, [items, value]);

  return (
    <div>
      {/* Bar pencarian + reset */}
      <div>
        <input
          className="input"
          placeholder="Cari kurir (nama/telepon)…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          disabled={disabled}
        />
        <button
          className="button"
          onClick={() => {
            setSearch("");
            setPage(1);
          }}
          disabled={disabled || (!search && page === 1)}
          title="Reset filter"
          type="button"
        >
          Reset
        </button>
      </div>

      {/* Select + pagination kecil */}
      <div>
        <select
          className="select"
          disabled={disabled || loading}
          value={value ?? ""}
          onChange={(e) => {
            const v = e.target.value;
            if (v === "") return onChange(null);
            const n = Number(v);
            onChange(Number.isFinite(n) ? (n as ID) : null);
          }}
        >
          <option value="">{loading ? "Memuat kurir…" : selectedLabel || "Pilih kurir"}</option>
          {allowAuto && <option value="-1">Auto-assign (pilih otomatis)</option>}
          {items.map((u) => (
            <option key={u.id} value={u.id}>
              {u.name}
              {u.phone ? ` — ${u.phone}` : ""}
            </option>
          ))}
        </select>

        <span>
          <small>
            {meta.current_page} / {meta.last_page}
          </small>
        </span>

        <button
          className="button"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={disabled || loading || (meta.current_page ?? 1) <= 1}
          title="Prev page"
          type="button"
        >
          ‹
        </button>
        <button
          className="button"
          onClick={() => setPage((p) => Math.min(meta.last_page ?? p + 1, p + 1))}
          disabled={disabled || loading || (meta.current_page ?? 1) >= (meta.last_page ?? 1)}
          title="Next page"
          type="button"
        >
          ›
        </button>
      </div>

      {/* Pesan status */}
      {error && (
        <div>
          <small>{error}</small>
        </div>
      )}
      {!error && !loading && items.length === 0 && (
        <div>
          <small>Tidak ada kurir untuk filter ini.</small>
        </div>
      )}
    </div>
  );
}

```
</details>

### src/components/delivery/DamageClaimDialog.tsx

- SHA: `8dbb92506018`  
- Ukuran: 3 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/delivery/DamageClaimDialog.tsx
import React, { useRef, useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit: (payload: { note?: string | null; file?: File | null }) => Promise<void>;
};

export default function DamageClaimDialog({ open, onClose, onSubmit }: Props): React.ReactElement | null {
  const [note, setNote] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  if (!open) return null;

  async function submit(): Promise<void> {
    setSubmitting(true);
    try {
      await onSubmit({ note: note || null, file: fileRef.current?.files?.[0] ?? null });
      onClose();
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="damage-claim-title"
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        zIndex: 50,
      }}
    >
      <div className="card" style={{ width: "100%", maxWidth: 520 }}>
        <div style={{ marginBottom: 8 }}>
          <h3 id="damage-claim-title" style={{ margin: 0 }}>Ajukan Klaim Kerusakan</h3>
        </div>

        <div style={{ display: "grid", gap: 12 }}>
          <div>
            <label htmlFor="claim-note" style={{ display: "block", fontSize: 12, opacity: 0.8, marginBottom: 6 }}>
              Catatan (opsional)
            </label>
            <textarea
              id="claim-note"
              className="textarea"
              placeholder="Catatan singkat…"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={3}
            />
          </div>

          <div>
            <label htmlFor="claim-file" style={{ display: "block", fontSize: 12, opacity: 0.8, marginBottom: 6 }}>
              Foto bukti (opsional)
            </label>
            <input
              id="claim-file"
              ref={fileRef}
              type="file"
              accept="image/*"
              className="input"
            />
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 16 }}>
          <button className="button button-outline" onClick={onClose} disabled={submitting}>
            Batal
          </button>
          <button className="button button-primary" onClick={submit} disabled={submitting}>
            {submitting ? "Mengirim…" : "Kirim"}
          </button>
        </div>
      </div>
    </div>
  );
}

```
</details>

### src/components/delivery/DeliveryStatusStepper.tsx

- SHA: `49b209e34ebf`  
- Ukuran: 4 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/delivery/DeliveryStatusStepper.tsx
import React from "react";
import type { DeliveryStatus } from "../../types/delivery";

const ORDER: DeliveryStatus[] = ["REQUESTED", "ASSIGNED", "PICKED_UP", "ON_ROUTE", "DELIVERED"];

type Props = {
  status: DeliveryStatus;
};

function labelOf(s: DeliveryStatus): string {
  switch (s) {
    case "REQUESTED":
      return "Request";
    case "ASSIGNED":
      return "Assigned";
    case "PICKED_UP":
      return "Picked";
    case "ON_ROUTE":
      return "On Route";
    case "DELIVERED":
      return "Done";
    default:
      return s;
  }
}

export default function DeliveryStatusStepper({ status }: Props): React.ReactElement {
  const idx = ORDER.indexOf(status as DeliveryStatus);

  const isTerminalBad = status === "FAILED" || status === "CANCELLED";

  // Untuk status terminal buruk: tampilkan badge tegas, tidak perlu stepper
  if (isTerminalBad) {
    return (
      <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
        <span
          className="badge badge-danger"
          style={{ borderRadius: "999px", padding: "0.3rem 0.6rem", fontSize: "0.78rem" }}
        >
          {status}
        </span>
      </div>
    );
  }

  // Jika status tidak ditemukan di ORDER (defensif): tampilkan badge netral
  if (idx === -1) {
    return (
      <span className="badge" style={{ borderRadius: "999px", padding: "0.3rem 0.6rem", fontSize: "0.78rem" }}>
        {status}
      </span>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.65rem",
        flexWrap: "wrap",
        lineHeight: 1.2,
      }}
      aria-label={`Delivery status: ${status}`}
    >
      {/* Stepper bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.45rem",
          flexWrap: "nowrap",
        }}
      >
        {ORDER.map((s, i) => {
          const done = i < idx;
          const current = i === idx;
          const upcoming = i > idx;

          const dotStyle: React.CSSProperties = {
            width: 12,
            height: 12,
            borderRadius: 999,
            border: "1px solid rgba(0,0,0,0.18)",
            background: "rgba(0,0,0,0.06)",
          };

          if (done) {
            dotStyle.background = "rgba(16,185,129,0.95)"; // hijau halus
            dotStyle.border = "1px solid rgba(16,185,129,0.35)";
          }
          if (current) {
            dotStyle.background = "rgba(59,130,246,0.95)"; // biru halus
            dotStyle.border = "1px solid rgba(59,130,246,0.35)";
            dotStyle.boxShadow = "0 0 0 4px rgba(59,130,246,0.18)";
          }
          if (upcoming) {
            dotStyle.background = "rgba(0,0,0,0.05)";
            dotStyle.border = "1px solid rgba(0,0,0,0.12)";
          }

          const lineStyle: React.CSSProperties = {
            width: 18,
            height: 2,
            borderRadius: 999,
            background: "rgba(0,0,0,0.10)",
          };

          if (i < idx) lineStyle.background = "rgba(16,185,129,0.55)";
          if (i === idx - 1) lineStyle.background = "rgba(59,130,246,0.35)";

          return (
            <React.Fragment key={s}>
              <span
                title={s}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  ...dotStyle,
                }}
                aria-current={current ? "step" : undefined}
              />
              {i < ORDER.length - 1 && <span aria-hidden="true" style={lineStyle} />}
            </React.Fragment>
          );
        })}
      </div>

      {/* Label status saat ini (lebih rapi daripada menampilkan semua badge) */}
      <span
        className="badge"
        style={{
          borderRadius: "999px",
          padding: "0.3rem 0.6rem",
          fontSize: "0.78rem",
          border: "1px solid rgba(0,0,0,0.10)",
          background: "rgba(0,0,0,0.03)",
        }}
        title={status}
      >
        {labelOf(status)}
      </span>
    </div>
  );
}

```
</details>

### src/components/delivery/DeliveryTabs.tsx

- SHA: `44ff05df7aaf`  
- Ukuran: 2 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/delivery/DeliveryTabs.tsx
import React from "react";
import type { DeliveryStatus } from "../../types/delivery";

type Tab = { key: DeliveryStatus | "ALL"; label: string };

const TABS: Tab[] = [
  { key: "ALL", label: "Semua" },
  { key: "REQUESTED", label: "Requested" },
  { key: "ASSIGNED", label: "Assigned" },
  { key: "PICKED_UP", label: "Picked" },
  { key: "ON_ROUTE", label: "On Route" },
  { key: "DELIVERED", label: "Delivered" },
  { key: "FAILED", label: "Failed" },
  { key: "CANCELLED", label: "Cancelled" },
];

type Props = {
  value: Tab["key"];
  onChange: (k: Tab["key"]) => void;
};

export default function DeliveryTabs({ value, onChange }: Props): React.ReactElement {
  return (
    <div aria-label="Delivery tabs" role="tablist">
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          alignItems: "center",
        }}
      >
        {TABS.map((t) => {
          const active = value === t.key;

          return (
            <button
              key={t.key}
              role="tab"
              aria-selected={active}
              aria-pressed={active}
              onClick={() => onChange(t.key)}
              className={`button ${active ? "button-primary" : "button-ghost"}`}
              style={{
                borderRadius: "999px",
                padding: "0.45rem 0.85rem",
                fontSize: "0.85rem",
                fontWeight: active ? 700 : 600,
                lineHeight: 1.1,
                // aktif: lebih “solid”, non-aktif: lebih “subtle”
                border: active ? "1px solid rgba(0,0,0,0.06)" : "1px solid rgba(0,0,0,0.08)",
                background: active ? undefined : "rgba(0,0,0,0.02)",
                opacity: active ? 1 : 0.9,
                transition: "transform 120ms ease, opacity 120ms ease",
              }}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      {/* Fokus & hover halus (tanpa sentuh index.css) */}
      <style>
        {`
          [role="tab"] { outline: none; }
          [role="tab"]:active { transform: scale(0.98); }
          [role="tab"]:focus-visible {
            box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.25);
          }
        `}
      </style>
    </div>
  );
}

```
</details>

### src/components/delivery/WaybillPreview.tsx

- SHA: `a4458b70017e`  
- Ukuran: 1 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { useEffect, useRef } from "react";

type Props = {
  html: string;
  onClose?: () => void;
};

export default function WaybillPreview({ html, onClose }: Props) {
  const ref = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = ref.current;
    if (!iframe) return;
    const doc = iframe.contentDocument;
    if (!doc) return;
    doc.open();
    doc.write(html);
    doc.close();
  }, [html]);

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-background rounded-2xl shadow-xl w-full max-w-4xl h-[80vh] overflow-hidden flex flex-col">
        <div className="p-3 border-b flex items-center justify-between">
          <div className="font-semibold text-sm">Surat Jalan — Preview</div>
          <div className="space-x-2">
            <button
              className="px-3 py-1.5 text-sm rounded-lg border hover:bg-muted"
              onClick={() => {
                const iframe = ref.current;
                iframe?.contentWindow?.print();
              }}
            >
              Print
            </button>
            <button className="px-3 py-1.5 text-sm rounded-lg border hover:bg-muted" onClick={onClose}>
              Tutup
            </button>
          </div>
        </div>
        <iframe ref={ref} className="flex-1 w-full bg-white" title="Waybill Preview" />
      </div>
    </div>
  );
}

```
</details>

### src/components/fees/FeeDetailDialog.tsx

- SHA: `d2acdc131a24`  
- Ukuran: 3 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/fees/FeeDetailDialog.tsx
import type { FeeEntry } from "../../types/pos";

type Props = {
  open: boolean;
  onClose: () => void;
  entry?: FeeEntry | null;
};

export default function FeeDetailDialog({ open, onClose, entry }: Props): React.ReactElement | null {
  if (!open || !entry) return null;

  // Backdrop inline-style agar tidak perlu kelas baru di index.css
  const backdropStyle: React.CSSProperties = {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.4)",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
  };

  // Container pakai .card dari index.css
  const containerStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: 720,
  };

  return (
    <div style={backdropStyle} role="dialog" aria-modal="true" aria-labelledby="fee-detail-title">
      <div className="card" style={containerStyle}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, marginBottom: 8 }}>
          <h3 id="fee-detail-title">Detail Fee</h3>
          <button onClick={onClose} className="button button-ghost" aria-label="Tutup dialog">
            ✕
          </button>
        </div>

        {/* Konten: gunakan .table untuk layout label–value */}
        <div style={{ overflowX: "auto" }}>
          <table className="table">
            <tbody>
              <tr>
                <th style={{ width: "40%" }}>Tanggal</th>
                <td>{entry.period_date}</td>
              </tr>
              <tr>
                <th>Cabang</th>
                <td>{entry.cabang_id}</td>
              </tr>
              <tr>
                <th>Jenis</th>
                <td>{entry.fee?.kind ?? "-"}</td>
              </tr>
              <tr>
                <th>Referensi</th>
                <td>
                  {entry.ref_type}#{entry.ref_id}
                </td>
              </tr>
              <tr>
                <th>Pemilik</th>
                <td>{entry.owner_user_id ?? "-"}</td>
              </tr>
              <tr>
                <th>Base</th>
                <td>Rp {Number(entry.base_amount).toLocaleString()}</td>
              </tr>
              <tr>
                <th>Fee</th>
                <td><strong>Rp {Number(entry.fee_amount).toLocaleString()}</strong></td>
              </tr>
              <tr>
                <th>Status Bayar</th>
                <td>{entry.pay_status}</td>
              </tr>
              {entry.paid_at ? (
                <tr>
                  <th>Dibayar</th>
                  <td>
                    Rp {Number(entry.paid_amount).toLocaleString()} @ {entry.paid_at}
                  </td>
                </tr>
              ) : null}
              {entry.notes ? (
                <tr>
                  <th>Catatan</th>
                  <td>{entry.notes}</td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 12 }}>
          <button onClick={onClose} className="button button-primary">
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}

```
</details>

### src/components/fees/FeeTable.tsx

- SHA: `157ec8358cfc`  
- Ukuran: 3 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/fees/FeeTable.tsx
import { useMemo } from "react";
import type { FeeEntry } from "../../types/pos";

type Props = {
  rows: FeeEntry[];
  loading?: boolean;
  error?: string | null;
  onSelect?: (row: FeeEntry) => void;
  onExport?: () => void;
};

export default function FeeTable({ rows, loading, error, onSelect, onExport }: Props): React.ReactElement {
  const empty = !loading && rows.length === 0 && !error;
  const hasError = Boolean(error);

  const total = useMemo(() => rows.reduce((acc, r) => acc + Number(r.fee_amount || 0), 0), [rows]);

  return (
    <div className="card">
      {/* Header ringkas di atas tabel */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 8 }}>
        <div className="muted">
          Total {rows.length} baris • Jumlah Fee: <b>Rp {total.toLocaleString("id-ID")}</b>
        </div>
        <div>
          <button className="button button-outline" onClick={onExport} disabled={loading}>
            Export CSV
          </button>
        </div>
      </div>

      {/* Tabel */}
      <div style={{ overflowX: "auto" }}>
        <table className="table" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th style={{ width: 120 }}>Tanggal</th>
              <th>Jenis</th>
              <th>Ref</th>
              <th style={{ textAlign: "right" }}>Base</th>
              <th style={{ textAlign: "right" }}>Fee</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6} style={{ textAlign: "center", padding: "24px 0" }}>Memuat…</td>
              </tr>
            ) : hasError ? (
              <tr>
                <td colSpan={6} style={{ textAlign: "center", padding: "24px 0" }}>
                  <span className="badge badge-danger">{error}</span>
                </td>
              </tr>
            ) : empty ? (
              <tr>
                <td colSpan={6} style={{ textAlign: "center", padding: "24px 0" }}>Tidak ada data</td>
              </tr>
            ) : (
              rows.map((r) => (
                <tr key={r.id} onClick={() => onSelect?.(r)} style={{ cursor: "pointer" }}>
                  <td>{r.period_date}</td>
                  <td>{r.fee?.kind ?? "-"}</td>
                  <td>{r.ref_type}#{r.ref_id}</td>
                  <td style={{ textAlign: "right" }}>
                    Rp {Number(r.base_amount).toLocaleString("id-ID")}
                  </td>
                  <td style={{ textAlign: "right", fontWeight: 600 }}>
                    Rp {Number(r.fee_amount).toLocaleString("id-ID")}
                  </td>
                  <td>
                    <span
                      className={
                        "badge " +
                        (r.pay_status === "PAID"
                          ? "badge-success"
                          : r.pay_status === "PARTIAL"
                          ? "badge-warning"
                          : "badge-danger")
                      }
                    >
                      {r.pay_status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

```
</details>

### src/components/fees/PeriodFilter.tsx

- SHA: `0a83c8c3e22f`  
- Ukuran: 5 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/fees/PeriodFilter.tsx
import { useEffect, useId, useMemo, useRef, useState } from "react";

export type Period = { from?: string; to?: string };
type Props = {
  value: Period;
  onChange: (next: Period) => void;
  className?: string;
};

export default function PeriodFilter({ value, onChange, className }: Props): React.ReactElement {
  const idFrom = useId();
  const idTo = useId();

  // dialog state (internal) — supaya Cancel/Tutup tidak langsung mengubah value
  const [open, setOpen] = useState(false);
  const [draftFrom, setDraftFrom] = useState<string>(value.from ?? "");
  const [draftTo, setDraftTo] = useState<string>(value.to ?? "");

  // sinkronkan ketika nilai dari luar berubah (mis. reset dari parent)
  useEffect(() => {
    setDraftFrom(value.from ?? "");
    setDraftTo(value.to ?? "");
  }, [value.from, value.to]);

  const summary = useMemo(() => {
    if (value.from && value.to) return `${value.from} — ${value.to}`;
    if (value.from) return `Dari ${value.from}`;
    if (value.to) return `Sampai ${value.to}`;
    return "Semua tanggal";
  }, [value.from, value.to]);

  const backdropRef = useRef<HTMLDivElement | null>(null);

  function apply(): void {
    onChange({
      from: draftFrom || undefined,
      to: draftTo || undefined,
    });
    setOpen(false);
  }

  function clearBoth(): void {
    setDraftFrom("");
    setDraftTo("");
    onChange({ from: undefined, to: undefined });
    setOpen(false);
  }

  function close(): void {
    // tutup tanpa menyimpan perubahan
    setDraftFrom(value.from ?? "");
    setDraftTo(value.to ?? "");
    setOpen(false);
  }

  // tutup ketika tekan Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className={className ?? ""}>
      {/* Trigger */}
      <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
        <button type="button" className="button" onClick={() => setOpen(true)} aria-haspopup="dialog" aria-expanded={open}>
          Filter Periode
        </button>
        <div style={{ fontSize: 12, opacity: 0.8 }}>{summary}</div>
      </div>

      {/* Dialog (portal-less, sederhana) */}
      {open && (
        <div
          ref={backdropRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${idFrom}-title`}
          onClick={(e) => {
            // klik backdrop untuk tutup
            if (e.target === backdropRef.current) close();
          }}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.35)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
            zIndex: 1000,
          }}
        >
          <div className="card" style={{ width: "100%", maxWidth: 520 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
              <h3 id={`${idFrom}-title`} style={{ margin: 0 }}>Pilih Periode</h3>
              <button type="button" className="button" onClick={close} aria-label="Tutup dialog">
                Tutup
              </button>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div>
                <label htmlFor={idFrom}>Dari</label>
                <input
                  id={idFrom}
                  type="date"
                  className="input"
                  value={draftFrom}
                  onChange={(e) => setDraftFrom(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor={idTo}>Sampai</label>
                <input
                  id={idTo}
                  type="date"
                  className="input"
                  value={draftTo}
                  onChange={(e) => setDraftTo(e.target.value)}
                />
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 16 }}>
              <button type="button" className="button" onClick={clearBoth}>
                Bersihkan
              </button>
              <div style={{ display: "inline-flex", gap: 8 }}>
                <button type="button" className="button" onClick={close}>
                  Batal
                </button>
                <button type="button" className="button button-primary" onClick={apply}>
                  Terapkan
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

```
</details>

### src/components/inventory/ReceiveLotForm.tsx

- SHA: `7b8c7bf8f52a`  
- Ukuran: 22 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import { useEffect, useMemo, useRef, useState } from "react";
import { useAuth } from "../../store/auth";
import { getAuthToken } from "../../api/client";
import { receiveStockLot, type ReceiveStockLotPayload } from "../../api/stocks";

/** ====== Util BASE & headers (selaras dengan src/api/stocks.ts) ====== */
const RAW =
  (import.meta.env as any).VITE_API_URL ?? (import.meta.env as any).VITE_API_BASE_URL;
if (!RAW) throw new Error("VITE_API_URL / VITE_API_BASE_URL belum diset.");
const BASE = RAW.replace(/\/+$/, "");

function authHeaders() {
  const token = getAuthToken();
  if (!token) throw new Error("Auth token tidak ditemukan.");
  return { Authorization: `Bearer ${token}` };
}
function toQuery(q?: Record<string, unknown>) {
  if (!q) return "";
  const p = new URLSearchParams();
  Object.entries(q).forEach(([k, v]) => {
    if (v === undefined || v === null || v === "") return;
    if (typeof v === "boolean") p.append(k, v ? "1" : "0");
    else p.append(k, String(v));
  });
  return p.toString() ? `?${p.toString()}` : "";
}

/** ====== Types lokal untuk dropdown & pencarian ====== */
type Warehouse = { id: number; nama: string };
type VariantSummary = { id: number; sku: string; nama: string };

type Props = {
  defaultGudangId?: number;
  defaultVariantId?: number;
  onSuccess?: (lotId: number) => void;
};

export default function ReceiveLotForm({
  defaultGudangId,
  defaultVariantId,
  onSuccess,
}: Props): React.ReactElement {
  const { user } = useAuth();

  /** ====== State Gudang ====== */
  const cabangId = useMemo(() => Number(user?.cabang_id ?? 0), [user?.cabang_id]);
  const [warehouses, setWarehouses] = useState<Warehouse[]>([]);
  const [gudangId, setGudangId] = useState<number | "">(defaultGudangId ?? "");

  /** ====== State Varian (autocomplete) ====== */
  const [variantQuery, setVariantQuery] = useState("");
  const [variantOpts, setVariantOpts] = useState<VariantSummary[]>([]);
  const [variantLoading, setVariantLoading] = useState(false);
  const [variantId, setVariantId] = useState<number | "">(defaultVariantId ?? "");
  const [variantPicked, setVariantPicked] = useState<VariantSummary | null>(null);

  // UI dropdown control (tanpa ubah logika API)
  const [variantOpen, setVariantOpen] = useState(false);
  const variantBoxRef = useRef<HTMLDivElement | null>(null);

  /** ====== Form fields lain ====== */
  const [qty, setQty] = useState<number | string>("");
  function incQty(delta: number) {
    setQty((prev) => {
      const cur = typeof prev === "number" ? prev : Number(prev) || 0;
      const next = Math.max(0, cur + delta);
      return next;
    });
  }

  const [lotNo, setLotNo] = useState("");
  const [autoLot, setAutoLot] = useState(true);
  const [receivedAt, setReceivedAt] = useState<string>(() => {
    const d = new Date();
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${d.getFullYear()}-${mm}-${dd}`;
  });
  const [expiresAt, setExpiresAt] = useState<string>("");
  const [unitCost, setUnitCost] = useState<number | string>("");
  const [note, setNote] = useState("");

  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ type: "ok" | "err"; text: string } | null>(null);

  /** ====== Load Gudang (dropdown) ====== */
  useEffect(() => {
    let on = true;
    if (!cabangId) return;

    (async () => {
      const url = `${BASE}/gudangs${toQuery({ cabang_id: cabangId, per_page: 50 })}`;
      const res = await fetch(url, { headers: authHeaders() });
      const json = await res.json();
      if (!on) return;

      const rows = Array.isArray(json?.data) ? json.data : Array.isArray(json) ? json : [];
      const list: Warehouse[] = rows.map((w: any) => ({
        id: Number(w.id),
        nama: String(w.nama ?? w.name ?? `Gudang #${w.id}`),
      }));

      setWarehouses(list);

      // preselect kalau tidak ada default dari querystring
      if (!defaultGudangId && list.length > 0) setGudangId(list[0].id);
    })().catch(() => {
      if (on) setWarehouses([]);
    });

    return () => {
      on = false;
    };
  }, [cabangId, defaultGudangId]);

  /** ====== Fetch varian (dipakai untuk prefetch & search) ====== */
  async function fetchVariants(q: string): Promise<void> {
    if (Number(gudangId) <= 0) {
      setVariantOpts([]);
      setVariantLoading(false);
      return;
    }

    setVariantLoading(true);
    try {
      const url = `${BASE}/variants${toQuery({
        q: q.trim(), // boleh kosong untuk prefetch daftar awal
        warehouse_id: Number(gudangId),
        per_page: 12,
        page: 1,
      })}`;

      const res = await fetch(url, { headers: authHeaders() });
      const json = await res.json();

      const raw = json?.data ?? json;
      const arr = Array.isArray(raw) ? raw : [];

      const list: VariantSummary[] = arr.map((v: any) => ({
        id: Number(v.id),
        sku: String(v.sku ?? v.SKU ?? ""),
        nama: String(v.nama ?? v.name ?? ""),
      }));

      setVariantOpts(list);
    } catch {
      setVariantOpts([]);
    } finally {
      setVariantLoading(false);
    }
  }

  /** ====== Pencarian Varian (autocomplete + prefetch saat fokus) ====== */
  const debounceRef = useRef<number | undefined>(undefined);

  const typedEnough = useMemo(
    () => String(variantQuery).trim().length >= 2 && Number(gudangId) > 0,
    [variantQuery, gudangId]
  );

  useEffect(() => {
    // dropdown tidak dibuka -> jangan fetch apa-apa
    if (!variantOpen) {
      // kalau user belum memenuhi syarat 2 huruf, kosongkan (tetap sesuai perilaku lama)
      if (!typedEnough) setVariantOpts([]);
      setVariantLoading(false);
      return;
    }

    // dropdown dibuka tapi gudang belum dipilih
    if (Number(gudangId) <= 0) {
      setVariantOpts([]);
      setVariantLoading(false);
      return;
    }

    // jika user mengetik >=2 huruf -> search debounced (perilaku lama)
    if (typedEnough) {
      if (debounceRef.current) window.clearTimeout(debounceRef.current);

      debounceRef.current = window.setTimeout(() => {
        fetchVariants(variantQuery);
      }, 250) as unknown as number;

      return () => {
        if (debounceRef.current) window.clearTimeout(debounceRef.current);
      };
    }

    // jika belum mengetik (atau <2 huruf) tapi dropdown terbuka -> prefetch daftar awal
    // supaya user bisa lihat varian tersedia tanpa menebak
    fetchVariants("");

    return;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variantQuery, gudangId, variantOpen, typedEnough]);

  /** ====== Click outside untuk menutup dropdown varian (UI only) ====== */
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      const el = variantBoxRef.current;
      if (!el) return;
      if (e.target instanceof Node && !el.contains(e.target)) setVariantOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  /** ====== Generator Lot No otomatis ====== */
  function genLotNo(dt: string, sku: string): string {
    const yyyymmdd = dt.replaceAll("-", "");
    const rand = Math.random().toString().slice(2, 6);
    const cleanSku = sku.replace(/[^A-Za-z0-9]/g, "").slice(0, 12) || "SKU";
    return `LOT-${yyyymmdd}-${cleanSku}-${rand}`;
  }

  /** ====== Auto lot ketika varian / tanggal berubah ====== */
  useEffect(() => {
    if (!autoLot) return;
    if (!receivedAt) return;
    const sku = variantPicked?.sku || "";
    if (!sku) return;
    setLotNo(genLotNo(receivedAt, sku));
  }, [autoLot, receivedAt, variantPicked?.sku]);

  /** ====== Validasi Submit ====== */
  const canSubmit = useMemo(() => {
    return (
      cabangId > 0 &&
      Number(gudangId) > 0 &&
      Number(variantId) > 0 &&
      Number(qty) > 0 &&
      !!receivedAt &&
      !busy
    );
  }, [cabangId, gudangId, variantId, qty, receivedAt, busy]);

  /** ====== Submit ====== */
  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;

    setBusy(true);
    setMsg(null);

    try {
      const payload: ReceiveStockLotPayload = {
        cabang_id: cabangId,
        gudang_id: Number(gudangId),
        product_variant_id: Number(variantId),
        qty: Number(qty),
        lot_no: autoLot ? (lotNo || null) : (lotNo || null),
        received_at: receivedAt || null,
        expires_at: expiresAt || null,
        unit_cost: unitCost === "" ? null : Number(unitCost),
        note: note || null,
        ref_type: "PURCHASE",
        ref_id: null,
      };

      const res = await receiveStockLot(payload);

      setMsg({ type: "ok", text: `Berhasil: Lot #${res.data.id} ditambahkan.` });

      // reset field tertentu (tetap pertahankan gudang & varian untuk input batch)
      setQty("");
      if (autoLot && variantPicked?.sku) setLotNo(genLotNo(receivedAt, variantPicked.sku));
      else setLotNo("");
      setExpiresAt("");
      setUnitCost("");
      setNote("");

      if (onSuccess) onSuccess(res.data.id);
    } catch (err: any) {
      setMsg({ type: "err", text: err?.message || "Gagal menyimpan lot." });
    } finally {
      setBusy(false);
    }
  }

  /** ====== Helper pilih varian ====== */
  function pickVariant(v: VariantSummary) {
    setVariantPicked(v);
    setVariantId(v.id);
    setVariantQuery(`${v.sku} — ${v.nama}`);
    setVariantOpen(false);

    if (autoLot && receivedAt) setLotNo(genLotNo(receivedAt, v.sku));
    setQty((prev) => (prev === "" || Number(prev) === 0 ? 1 : prev));
  }

  /** ====== Render ====== */
  return (
    <form onSubmit={onSubmit} style={{ display: "grid", gap: 16 }}>
      {/* Info / alert */}
      {msg && (
        <div
          className={`alert ${msg.type === "err" ? "alert-danger" : "alert-success"}`}
          style={{ marginBottom: 4 }}
        >
          {msg.text}
        </div>
      )}

      {/* Section: Lokasi & Varian */}
      <section style={{ display: "grid", gap: 10 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
          <div style={{ fontWeight: 700 }}>Lokasi & Varian</div>
          <span className="badge" style={{ opacity: 0.9 }}>
            Cabang #{cabangId || "-"}
          </span>
        </div>

        <div className="rl-grid">
          {/* Gudang */}
          <div style={{ display: "grid", gap: 6 }}>
            <label className="text-sm font-medium">Gudang</label>
            <select
              className="input"
              value={gudangId}
              onChange={(e) => {
                const next = e.target.value ? Number(e.target.value) : "";
                setGudangId(next);
                // reset varian saat gudang berubah (ini tetap sesuai behavior lama)
                setVariantPicked(null);
                setVariantId("");
                setVariantQuery("");
                setVariantOpts([]);
                setVariantOpen(false);
              }}
              required
            >
              {warehouses.length === 0 ? (
                <option value="">Memuat gudang…</option>
              ) : (
                warehouses.map((w) => (
                  <option key={w.id} value={w.id}>
                    {w.nama}
                  </option>
                ))
              )}
            </select>
            <div style={{ fontSize: 12, opacity: 0.75 }}>
              Gudang menentukan konteks stok yang akan diterima.
            </div>
          </div>

          {/* Varian autocomplete */}
          <div ref={variantBoxRef} style={{ display: "grid", gap: 6, position: "relative" }}>
            <label className="text-sm font-medium">Cari Varian (SKU/Nama)</label>
            <input
              className="input"
              type="text"
              placeholder={Number(gudangId) > 0 ? "Klik untuk lihat varian, atau ketik SKU/Nama…" : "Pilih gudang terlebih dahulu"}
              value={variantQuery}
              onChange={(e) => {
                setVariantQuery(e.target.value);
                setVariantPicked(null);
                setVariantId("");
                setVariantOpen(true);
              }}
              onFocus={() => {
                setVariantOpen(true);
                // prefetch langsung terasa cepat (tanpa menunggu useEffect tick)
                if (Number(gudangId) > 0 && String(variantQuery).trim().length < 2) {
                  fetchVariants("");
                }
              }}
              disabled={Number(gudangId) <= 0}
            />

            {/* Hint status */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {variantPicked ? (
                <span className="badge" style={{ background: "rgba(0,0,0,.04)" }}>
                  Dipilih: {variantPicked.sku}
                </span>
              ) : (
                <span className="badge" style={{ background: "rgba(0,0,0,.04)", opacity: 0.9 }}>
                  Belum pilih varian
                </span>
              )}
              {variantLoading ? (
                <span className="badge" style={{ background: "rgba(0,0,0,.04)", opacity: 0.9 }}>
                  Mencari…
                </span>
              ) : null}
            </div>

            {/* Dropdown hasil */}
            {variantOpen && (variantLoading || variantOpts.length > 0) && (
              <div
                className="card"
                style={{
                  position: "absolute",
                  top: "calc(100% + 8px)",
                  left: 0,
                  right: 0,
                  zIndex: 50,
                  padding: 10,
                  maxHeight: 240,
                  overflow: "auto",
                }}
              >
                {variantLoading && (
                  <div className="alert" style={{ marginBottom: 8 }}>
                    Memuat varian…
                  </div>
                )}

                {!variantLoading && variantOpts.length > 0 ? (
                  <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 8 }}>
                    {variantOpts.map((v) => (
                      <li
                        key={v.id}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: 10,
                          padding: "8px 6px",
                          borderRadius: 12,
                          border: "1px solid rgba(0,0,0,0.06)",
                          background: "rgba(0,0,0,0.01)",
                        }}
                      >
                        <div style={{ minWidth: 0 }}>
                          <div style={{ fontWeight: 700, lineHeight: 1.2 }}>{v.sku}</div>
                          <div
                            style={{
                              fontSize: 12,
                              opacity: 0.8,
                              marginTop: 2,
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {v.nama}
                          </div>
                        </div>

                        <button
                          type="button"
                          className="button button-primary"
                          onClick={() => pickVariant(v)}
                          style={{ borderRadius: 999, padding: "0.5rem 0.75rem" }}
                        >
                          Pilih
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {/* jika dropdown terbuka, query belum cukup, dan hasil kosong */}
                {!variantLoading && variantOpts.length === 0 && (
                  <div className="alert" style={{ opacity: 0.9 }}>
                    {String(variantQuery).trim().length >= 2
                      ? "Tidak ada varian ditemukan."
                      : "Mulai ketik untuk mempersempit, atau pilih dari daftar jika tersedia."}
                  </div>
                )}
              </div>
            )}

            <input type="hidden" value={variantId || ""} />
          </div>
        </div>
      </section>

      {/* Section: Kuantitas & Lot */}
      <section style={{ display: "grid", gap: 10 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
          <div style={{ fontWeight: 700 }}>Kuantitas & Lot</div>
          <span
            className="badge"
            style={{ cursor: "pointer" }}
            onClick={() => setAutoLot((v) => !v)}
            title="Klik untuk toggle mode lot"
          >
            Lot: {autoLot ? "Auto" : "Manual"}
          </span>
        </div>

        <div className="rl-grid">
          {/* Qty */}
          <div style={{ display: "grid", gap: 6 }}>
            <label className="text-sm font-medium">Qty</label>

            <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                <button type="button" className="button button-ghost" onClick={() => incQty(-10)}>
                  -10
                </button>
                <button type="button" className="button button-ghost" onClick={() => incQty(-5)}>
                  -5
                </button>
                <button type="button" className="button button-ghost" onClick={() => incQty(-1)}>
                  -1
                </button>
              </div>

              <input
                className="input"
                type="number"
                min={1}
                step={1}
                value={qty}
                onChange={(e) => setQty(e.target.value === "" ? "" : Math.max(1, Number(e.target.value)))}
                required
                style={{ width: 140, textAlign: "center" }}
                placeholder="0"
              />

              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                <button type="button" className="button button-ghost" onClick={() => incQty(+1)}>
                  +1
                </button>
                <button type="button" className="button button-ghost" onClick={() => incQty(+5)}>
                  +5
                </button>
                <button type="button" className="button button-ghost" onClick={() => incQty(+10)}>
                  +10
                </button>
              </div>
            </div>

            <div style={{ fontSize: 12, opacity: 0.75 }}>
              Minimal 1. Tombol cepat hanya membantu input, tidak mengubah logika transaksi.
            </div>
          </div>

          {/* Lot No */}
          <div style={{ display: "grid", gap: 6 }}>
            <label className="text-sm font-medium">Lot No</label>
            <input
              className="input"
              type="text"
              value={lotNo}
              onChange={(e) => setLotNo(e.target.value)}
              disabled={autoLot}
              placeholder={autoLot ? "Terisi otomatis saat pilih varian & tanggal" : "Isi manual (opsional)"}
            />
            <div style={{ fontSize: 12, opacity: 0.75 }}>
              Mode Auto menghasilkan format LOT-YYYYMMDD-SKU-XXXX.
            </div>
          </div>
        </div>
      </section>

      {/* Section: Tanggal & Biaya */}
      <section style={{ display: "grid", gap: 10 }}>
        <div style={{ fontWeight: 700 }}>Tanggal & Biaya</div>

        <div className="rl-grid">
          <div style={{ display: "grid", gap: 6 }}>
            <label className="text-sm font-medium">Tanggal Terima</label>
            <input
              className="input"
              type="date"
              value={receivedAt}
              onChange={(e) => setReceivedAt(e.target.value)}
              required
            />
          </div>

          <div style={{ display: "grid", gap: 6 }}>
            <label className="text-sm font-medium">Kadaluarsa (opsional)</label>
            <input className="input" type="date" value={expiresAt} onChange={(e) => setExpiresAt(e.target.value)} />
          </div>

          <div style={{ display: "grid", gap: 6 }}>
            <label className="text-sm font-medium">Unit Cost (opsional)</label>
            <input
              className="input"
              type="number"
              min={0}
              step="0.01"
              value={unitCost}
              onChange={(e) => setUnitCost(e.target.value === "" ? "" : Number(e.target.value))}
              placeholder="0"
            />
          </div>

          <div style={{ display: "grid", gap: 6 }}>
            <label className="text-sm font-medium">Catatan (opsional)</label>
            <input
              className="input"
              type="text"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Contoh: barang datang dari supplier A"
            />
          </div>
        </div>
      </section>

      {/* Actions */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 12,
          flexWrap: "wrap",
          borderTop: "1px solid rgba(0,0,0,0.06)",
          paddingTop: 12,
        }}
      >
        <div style={{ fontSize: 12, opacity: 0.75 }}>
          Pastikan gudang & varian sudah benar sebelum menyimpan lot.
        </div>

        <button
          type="submit"
          className="button button-primary"
          disabled={!canSubmit || busy}
          style={{ borderRadius: 999, padding: "0.7rem 1rem", minWidth: 160 }}
        >
          {busy ? "Menyimpan…" : "Simpan Lot"}
        </button>
      </div>

      {/* Responsif grid helper */}
      <style>
        {`
          .rl-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
          @media (max-width: 900px) {
            .rl-grid {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </form>
  );
}

```
</details>

### src/components/layout/ProtectedLayout.tsx

- SHA: `5aaae6c7ce3a`  
- Ukuran: 1 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import React, { useState, useCallback } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../nav/Sidebar";
import Topbar from "../nav/Topbar"; // ⬅️ pastikan impor ini
import { useAuth } from "../../store/auth";

type ProtectedLayoutProps = Record<string, never>;

export default function ProtectedLayout(_: ProtectedLayoutProps): React.ReactElement {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const auth = useAuth();
  const navigate = useNavigate();

  const closeSidebar = useCallback(() => setSidebarOpen(false), []);
  const openSidebar = useCallback(() => setSidebarOpen(true), []);

  const handleLogout = useCallback(() => {
    if (typeof (auth as { logout?: () => void }).logout === "function") {
      (auth as { logout: () => void }).logout();
      return;
    }
    try { localStorage.removeItem("token"); } catch {}
    navigate("/login", { replace: true });
  }, [auth, navigate]);

  return (
    <div className="layout-root">
      {/* ✅ Topbar resmi (bukan header inline lagi) */}
      <Topbar onMenuClick={openSidebar} onLogout={handleLogout} />

      {/* Sidebar */}
      <Sidebar open={sidebarOpen} onClose={closeSidebar} />

      {/* Konten utama */}
      <main className="main-content" style={{ padding: "16px" }}>
        <Outlet />
      </main>
    </div>
  );
}

```
</details>

### src/components/nav/Sidebar.tsx

- SHA: `dc119e4f31b3`  
- Ukuran: 5 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/nav/Sidebar.tsx
import React, { useEffect, useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../store/auth";
import {
  filterMenuByRole,
  GROUP_ORDER,
  groupOf,
  type GroupKey,
} from "../../nav-config";

type SidebarProps = {
  open: boolean;
  onClose: () => void;
};

const LS_KEY = "pos-prime.sidebar.openGroups";

export default function Sidebar({ open, onClose }: SidebarProps): React.ReactElement {
  const { hasRole } = useAuth();
  const items = filterMenuByRole(hasRole); // data asli (bukan dummy)

  const sections = useMemo(
    () =>
      GROUP_ORDER
        .map((grp) => ({
          group: grp,
          items: items.filter((it) => groupOf(it.key) === grp),
        }))
        .filter((s) => s.items.length > 0),
    [items]
  );

  const defaultOpen: Record<GroupKey, boolean> = GROUP_ORDER.reduce((acc, g) => {
    acc[g as GroupKey] = g === "Umum" || g === "POS";
    return acc;
  }, {} as Record<GroupKey, boolean>);

  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(defaultOpen);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(LS_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Record<string, boolean>;
        setOpenGroups((prev) => ({ ...prev, ...parsed }));
      }
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(openGroups));
    } catch {}
  }, [openGroups]);

  function toggleGroup(grp: GroupKey) {
    setOpenGroups((s) => ({ ...s, [grp]: !s[grp] }));
  }

  return (
    <>
      {open && (
        <button
          type="button"
          className="sidebar-overlay"
          onClick={onClose}
          aria-label="Tutup sidebar"
        />
      )}

      <aside
        aria-label="Navigasi"
        className={"sidebar" + (open ? " sidebar--open" : "")}
      >
        {/* Brand (sticky) */}
        <div className="sidebar-brand">
          <div className="sidebar-brand__left">
            <div className="sidebar-brand__logo" aria-hidden="true">
              P
            </div>
            <div className="sidebar-brand__text">
              <div className="sidebar-brand__title">POS Prime</div>
              <div className="sidebar-brand__subtitle">Katalog & Sistem POS</div>
            </div>
          </div>

          <button
            type="button"
            className="sidebar-brand__close button button-ghost"
            onClick={onClose}
            aria-label="Tutup"
            title="Tutup"
          >
            ✕
          </button>
        </div>

        {/* Menu */}
        <nav className="nav" aria-label="Menu utama">
          <div className="navlist">
            {sections.map((sec) => {
              const isOpen = !!openGroups[sec.group];

              return (
                <section className="navsection" key={sec.group}>
                  <button
                    type="button"
                    className="navgroup"
                    onClick={() => toggleGroup(sec.group)}
                    aria-expanded={isOpen}
                    aria-controls={`grp-${sec.group}`}
                    title={sec.group}
                  >
                    <span className="navgroup__title">{sec.group}</span>
                    <span
                      className={"navgroup__chev" + (isOpen ? " is-open" : "")}
                      aria-hidden="true"
                    >
                      ▶
                    </span>
                  </button>

                  <div
                    id={`grp-${sec.group}`}
                    role="region"
                    aria-label={sec.group}
                    className={"navgroup__items" + (isOpen ? " is-open" : "")}
                  >
                    {sec.items.map((item) => (
                      <NavLink
                        key={item.key}
                        to={item.to}
                        className={({ isActive }) => "navitem" + (isActive ? " is-active" : "")}
                        onClick={onClose}
                        title={item.label}
                      >
                        <span className="navitem__label">{item.label}</span>
                      </NavLink>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </nav>

        {/* Footer kecil (opsional, tetap UI-only) */}
        <div className="sidebar-footer">
          <div className="sidebar-footer__hint">
            © {new Date().getFullYear()} POS Prime
          </div>
        </div>
      </aside>
    </>
  );
}

```
</details>

### src/components/nav/Topbar.tsx

- SHA: `d5615a262d40`  
- Ukuran: 2 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import React from "react";
import { useAuth } from "../../store/auth";

type TopbarProps = {
  onMenuClick: () => void;
  onLogout?: () => void;
};

export default function Topbar({ onMenuClick, onLogout }: TopbarProps): React.ReactElement {
  const { user, logout } = useAuth();

  const initials =
    (user?.name ?? "")
      .split(" ")
      .filter(Boolean)
      .map((s) => s[0]?.toUpperCase())
      .slice(0, 2)
      .join("") || "U";

  const roleLabel = user?.role ?? "";

  const doLogout = () => {
    if (onLogout) {
      onLogout();
      return;
    }
    void logout();
  };

  return (
    <header className="topbar" aria-label="Topbar">
      <div className="topbar__inner">
        {/* Left: menu + brand */}
        <div className="topbar__left">
          <button
            type="button"
            onClick={onMenuClick}
            className="button button-ghost topbar__menuBtn"
            aria-label="Buka menu"
            title="Menu"
          >
            <span className="topbar__hamburger" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>

          <div className="topbar__brand" title="POS Prime">
            <span className="topbar__brandMuted">Sistem</span>
            <span className="topbar__brandTitle">POS Prime</span>
          </div>
        </div>

        {/* Middle: placeholder (search nanti) */}
        <div className="topbar__center" />

        {/* Right: user */}
        <div className="topbar__right">
          <span className="topbar__avatar" aria-hidden="true">
            {initials}
          </span>

          <div className="topbar__user">
            <span className="topbar__name" title={user?.name}>
              {user?.name ?? "-"}
            </span>

            {roleLabel ? (
              <span className="badge topbar__role" style={{ textTransform: "capitalize" }}>
                {roleLabel}
              </span>
            ) : null}
          </div>

          <button
            onClick={doLogout}
            className="button button-outline topbar__logout"
            title="Keluar"
            aria-label="Keluar"
          >
            Keluar
          </button>
        </div>
      </div>
    </header>
  );
}

```
</details>

### src/components/pos/CartPanel.tsx

- SHA: `a44aa5bd62f4`  
- Ukuran: 6 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/pos/CartPanel.tsx
import React from "react";
import { useCart } from "../../store/cart";
import { rupiah } from "../../utils/rupiah";

export default function CartPanel(): React.ReactElement {
  const { items, setQty, remove, quote, quoting, error } = useCart();

  const itemCount = items.reduce((acc, it) => acc + (Number.isFinite(it.qty) ? it.qty : 0), 0);

  return (
    <div>
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: 12,
          marginBottom: 10,
        }}
      >
        <div>
          <div className="card-title" style={{ marginBottom: 2 }}>
            Keranjang
          </div>
          <div className="muted" style={{ fontSize: 12 }}>
            {items.length === 0 ? "Belum ada item" : `${items.length} item • ${itemCount} qty`}
          </div>
        </div>

        {/* Status kecil saat recalculation */}
        {quoting ? (
          <span className="badge" style={{ opacity: 0.8 }}>
            Hitung ulang…
          </span>
        ) : null}
      </div>

      {/* Body */}
      {items.length === 0 ? (
        <div className="empty-state">Belum ada item</div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {items.map((row) => {
            const label = row.name ?? `Var#${row.variant_id}`;
            const price = row.price_hint ? rupiah(row.price_hint) : "-";

            return (
              <div
                key={row.variant_id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: 10,
                  padding: "10px 10px",
                  borderRadius: 14,
                  border: "1px solid rgba(0,0,0,0.06)",
                  background: "rgba(0,0,0,0.01)",
                }}
              >
                {/* Left: name + price */}
                <div style={{ minWidth: 0 }}>
                  <div
                    style={{
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      marginBottom: 4,
                    }}
                    title={label}
                  >
                    {label}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 10,
                    }}
                  >
                    <span className="muted" style={{ fontSize: 12 }}>
                      Harga
                    </span>
                    <span className="mono" style={{ whiteSpace: "nowrap" }}>
                      {price}
                    </span>
                  </div>
                </div>

                {/* Right: qty + delete */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    gap: 8,
                    justifyContent: "space-between",
                  }}
                >
                  <input
                    type="number"
                    min={1}
                    value={row.qty}
                    className="input text-right"
                    style={{
                      width: 78,
                      height: 36,
                      padding: "6px 10px",
                      borderRadius: 12,
                    }}
                    onChange={(e) =>
                      setQty(row.variant_id, Math.max(1, Number(e.target.value)))
                    }
                    aria-label={`Qty ${label}`}
                  />

                  <button
                    className="button button-ghost"
                    style={{
                      padding: "6px 10px",
                      borderRadius: 999,
                      fontSize: 12,
                      lineHeight: 1,
                      opacity: 0.9,
                    }}
                    onClick={() => remove(row.variant_id)}
                    aria-label={`Hapus ${label}`}
                    type="button"
                  >
                    Hapus
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="divider" style={{ margin: "14px 0" }} />

      {/* Totals */}
      <div aria-live="polite">
        {quote ? (
          <div>
            <Row label="Subtotal" value={rupiah(quote.totals.subtotal)} />
            <Row label="Diskon" value={rupiah(quote.totals.discount)} />
            <Row label="PPN" value={rupiah(quote.totals.tax)} />
            <div className="divider" style={{ margin: "10px 0" }} />
            <Row
              label="Total"
              value={rupiah(quote.totals.grand_total)}
              strong
              bigger
            />
          </div>
        ) : (
          <div className="muted">Tambahkan item untuk melihat total.</div>
        )}

        {error && (
          <div className="alert alert-danger" style={{ marginTop: 10 }}>
            {error}
          </div>
        )}
      </div>
    </div>
  );
}

function Row(props: {
  label: string;
  value: string;
  strong?: boolean;
  bigger?: boolean;
}): React.ReactElement {
  const { label, value, strong, bigger } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        gap: 10,
        marginBottom: bigger ? 0 : 6,
        fontWeight: strong ? 700 : 500,
        fontSize: bigger ? 16 : 13,
      }}
    >
      <span style={{ opacity: strong ? 0.9 : 0.78 }}>{label}</span>
      <span className="mono" style={{ whiteSpace: "nowrap" }}>
        {value}
      </span>
    </div>
  );
}

```
</details>

### src/components/pos/CheckoutDialog.tsx

- SHA: `75bc309bdcc3`  
- Ukuran: 20 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/pos/CheckoutDialog.tsx
import React, { useMemo, useState, useEffect, useCallback } from "react";
import { useCart } from "../../store/cart";
import type { CheckoutPayload, PaymentMethod, Order, CashPosition } from "../../types/pos";
import { checkout } from "../../api/pos";

import CustomerSelect from "../customers/CustomerSelect";
import type { Customer } from "../../types/customers";

type Props = {
  open: boolean;
  onClose: () => void;
  branchId: number;
  warehouseId: number;
  onSuccess: (order: Order) => void;
};

type PayMode = "FULL" | "DP" | "PENDING";

const FF_XENDIT = import.meta.env.VITE_FEATURE_XENDIT === "true";

const payMethods: PaymentMethod[] = FF_XENDIT ? ["CASH", "TRANSFER", "QRIS", "XENDIT"] : ["CASH", "TRANSFER", "QRIS"];

const CASH_POSITIONS: { label: string; value: CashPosition }[] = [
  { label: "Konsumen", value: "CUSTOMER" },
  { label: "Kasir", value: "CASHIER" },
  { label: "Sales", value: "SALES" },
  { label: "Admin", value: "ADMIN" },
];

const toIDR = (n: number) => (n ?? 0).toLocaleString("id-ID", { style: "currency", currency: "IDR" });

const toFloat = (v: unknown): number => {
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
};

export default function CheckoutDialog({
  open,
  onClose,
  branchId,
  warehouseId,
  onSuccess,
}: Props): React.ReactElement | null {
  const { items, quote, clear } = useCart();

  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  // Customer (opsional)
  const [nama, setNama] = useState("");
  const [phone, setPhone] = useState("");
  const [alamat, setAlamat] = useState("");

  // Mode pembayaran: FULL / DP / PENDING
  const [mode, setMode] = useState<PayMode>("FULL");

  // Metode & nominal
  const [method, setMethod] = useState<PaymentMethod>("CASH");
  const grand = useMemo(() => toFloat(quote?.totals?.grand_total ?? 0), [quote]);

  // Nominal untuk FULL & DP
  const [bayar, setBayar] = useState<number>(grand); // untuk FULL
  const [dpAmount, setDpAmount] = useState<number>(0); // untuk DP

  // Posisi Uang
  const [cashPosition, setCashPosition] = useState<CashPosition>("CASHIER");

  // State proses
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  // Sinkronisasi jumlah saat total berubah
  useEffect(() => {
    if (!open) return;
    setBayar(grand);
    setDpAmount(0);
    setErr(null);
  }, [grand, open]);

  // Validasi dasar
  const hasItems = (items?.length ?? 0) > 0;
  const totalReady = Number.isFinite(grand) && grand >= 0;

  // Validasi per mode
  const fullValid = useMemo(() => {
    if (mode !== "FULL") return true;
    if (!totalReady) return false;
    if (bayar < 0) return false;
    return bayar >= grand;
  }, [mode, bayar, grand, totalReady]);

  const dpValid = useMemo(() => {
    if (mode !== "DP") return true;
    if (!totalReady) return false;
    return dpAmount > 0 && dpAmount < grand;
  }, [mode, dpAmount, grand, totalReady]);

  const pendingValid = useMemo(() => {
    if (mode !== "PENDING") return true;
    return totalReady;
  }, [mode, totalReady]);

  const formValid = fullValid && dpValid && pendingValid && hasItems && totalReady;

  // Kembalian (hanya FULL + CASH)
  const change = useMemo(() => {
    if (mode !== "FULL" || method !== "CASH") return 0;
    return Math.max(0, bayar - grand);
  }, [mode, method, bayar, grand]);

  useEffect(() => {
    if (selectedCustomer) {
      setNama((v) => v || selectedCustomer.nama || "");
      setPhone((v) => v || selectedCustomer.phone || "");
      setAlamat((v) => v || selectedCustomer.alamat || "");
    }
  }, [selectedCustomer]);

  // Alasan tombol disable (UX)
  const disableReason = useMemo(() => {
    if (!hasItems) return "Tambahkan item ke keranjang.";
    if (!totalReady) return "Total belum siap. Coba lagi.";
    if (mode === "FULL") {
      if (bayar < 0) return "Nominal bayar tidak boleh negatif.";
      if (!fullValid) {
        if (method === "CASH") return "Nominal bayar harus ≥ total.";
        return "Nominal bayar minimal sama dengan total.";
      }
    }
    if (mode === "DP" && !dpValid) return "Nominal DP harus > 0 dan < total.";
    return null;
  }, [hasItems, totalReady, mode, bayar, method, fullValid, dpValid]);

  const submit = useCallback(async () => {
    if (!formValid || loading) return;
    setLoading(true);
    setErr(null);
    try {
      const payload: CheckoutPayload = {
        items,
        branch_id: branchId,
        warehouse_id: warehouseId,
        customer_id: selectedCustomer?.id,
        customer: nama || phone || alamat || selectedCustomer
          ? {
              nama: nama || selectedCustomer?.nama || "",
              phone: phone || selectedCustomer?.phone || "",
              alamat: alamat || selectedCustomer?.alamat || "",
            }
          : undefined,
        cash_position: cashPosition,
      };

      if (mode === "FULL") {
        payload.payment = { method, amount: bayar };
      } else if (mode === "DP") {
        payload.payment = { method, amount: dpAmount };
      }

      const order = await checkout(payload);

      if (FF_XENDIT && method === "XENDIT") {
        const xp = order.payments?.find((p) => p.method === "XENDIT" && p.status === "PENDING");
        const link = xp?.ref_no;
        if (link && /^https?:\/\//i.test(link)) {
          window.open(link, "_blank", "noopener,noreferrer");
        }
      }

      clear();
      onSuccess(order);
    } catch (e) {
      const msg = (e as Error)?.message || "Gagal memproses pembayaran.";
      setErr(msg);
    } finally {
      setLoading(false);
    }
  }, [
    formValid,
    loading,
    items,
    branchId,
    warehouseId,
    selectedCustomer,
    nama,
    phone,
    alamat,
    cashPosition,
    mode,
    method,
    bayar,
    dpAmount,
    clear,
    onSuccess,
  ]);

  // Keyboard: Enter submit, Esc tutup
  useEffect(() => {
    const onKey = (ev: KeyboardEvent) => {
      if (ev.key === "Escape") {
        if (!loading) onClose();
        return;
      }
      if (ev.key === "Enter") {
        if (formValid && !loading) {
          ev.preventDefault();
          void submit();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [formValid, loading, submit, onClose]);

  if (!open) return null;

  const onBayarChange = (v: string) => {
    const n = toFloat(v);
    setBayar(n < 0 ? 0 : n);
  };
  const onDpChange = (v: string) => {
    const n = toFloat(v);
    setDpAmount(n < 0 ? 0 : n);
  };

  const showMethodBlock = mode !== "PENDING";
  const rightTitle =
    mode === "PENDING" ? "Ringkasan (Pending)" : mode === "DP" ? "Ringkasan (DP)" : "Ringkasan (Full)";

  return (
    <div className="modal-overlay">
      <style>{`
        /* Layout rapi khusus CheckoutDialog */
        .pos-checkout.modal{
          width: min(1040px, calc(100vw - 28px));
          max-height: calc(100dvh - 28px);
          overflow: auto;
          border-radius: 18px;
        }

        .pos-checkout__header{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap: 12px;
          position: sticky;
          top: 0;
          z-index: 2;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(0,0,0,0.06);
          padding-bottom: 10px;
          margin-bottom: 12px;
        }

        .pos-checkout__titlewrap{
          display:flex;
          flex-direction:column;
          gap: 4px;
          min-width: 0;
        }

        .pos-checkout__subtitle{
          font-size: 12px;
          opacity: .72;
        }

        .pos-checkout__body{
          display:grid;
          gap: 12px;
        }

        @media (min-width: 980px){
          .pos-checkout__body{
            grid-template-columns: minmax(0, 1fr) 360px;
            align-items:start;
          }
        }

        .pos-checkout__left{
          display:flex;
          flex-direction:column;
          gap: 12px;
          min-width: 0;
        }

        .pos-checkout__right{
          display:flex;
          flex-direction:column;
          gap: 12px;
        }

        @media (min-width: 980px){
          .pos-checkout__right{
            position: sticky;
            top: 68px;
          }
        }

        .pos-checkout__actions{
          display:flex;
          gap: 10px;
          justify-content:flex-end;
          align-items:center;
          margin-top: 2px;
        }

        .pos-checkout__actions .button{
          border-radius: 999px;
        }

        .pos-checkout__primary{
          min-width: 220px;
        }

        @media (max-width: 520px){
          .pos-checkout__actions{
            flex-direction: column-reverse;
            align-items: stretch;
          }
          .pos-checkout__primary{
            min-width: unset;
            width: 100%;
          }
        }

        .pos-checkout__hint{
          margin-top: 6px;
        }

        .pos-chiprow{
          display:flex;
          align-items:center;
          gap: 8px;
          flex-wrap: wrap;
        }
      `}</style>

      <div className="modal card pos-checkout" role="dialog" aria-modal="true" aria-labelledby="dialog-title">
        {/* Header */}
        <div className="pos-checkout__header">
          <div className="pos-checkout__titlewrap">
            <h3 id="dialog-title" className="modal-title" style={{ margin: 0 }}>
              Bayar
            </h3>
            <div className="pos-chiprow">
              <span className="badge badge-success">Cabang #{branchId}</span>
              <span className="badge badge-info">Gudang #{warehouseId}</span>
              <span className="badge badge-warning">
                Mode: {mode === "FULL" ? "Full" : mode === "DP" ? "DP" : "Pending"}
              </span>
              {showMethodBlock && <span className="badge badge-secondary">Metode: {method}</span>}
            </div>
            <div className="pos-checkout__subtitle">Tekan Enter untuk proses, Esc untuk tutup.</div>
          </div>

          <button className="button button-ghost" onClick={onClose} disabled={loading}>
            Tutup
          </button>
        </div>

        {/* Body */}
        <div className="pos-checkout__body">
          {/* Left column */}
          <div className="pos-checkout__left">
            {/* Customer (opsional) */}
            <div className="card soft">
              <div className="form-row">
                <div className="form-field" style={{ width: "100%" }}>
                  <label className="label">Pelanggan Terdaftar</label>
                  <CustomerSelect branchId={branchId} value={selectedCustomer} onChange={setSelectedCustomer} />
                  <div className="muted text-xs" style={{ marginTop: 6 }}>
                    Pilih pelanggan untuk mem-prefill nama/HP/alamat. Data ini akan di-snapshot ke order.
                  </div>
                </div>
              </div>

              <div className="form-row form-row--2">
                <div className="form-field">
                  <label className="label">Nama (opsional)</label>
                  <input
                    className="input"
                    placeholder="Nama pelanggan"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    autoFocus
                  />
                </div>
                <div className="form-field">
                  <label className="label">HP (opsional)</label>
                  <input
                    className="input"
                    placeholder="08xx / 62xx"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    inputMode="tel"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-field">
                  <label className="label">Alamat (opsional)</label>
                  <input className="input" placeholder="Alamat" value={alamat} onChange={(e) => setAlamat(e.target.value)} />
                </div>
              </div>
            </div>

            {/* Posisi Uang */}
            <div className="card soft">
              <div className="form-row">
                <div className="form-field" style={{ width: "100%" }}>
                  <label className="label">Posisi Uang</label>
                  <select
                    className="select"
                    value={cashPosition}
                    onChange={(e) => setCashPosition(e.target.value as CashPosition)}
                    aria-label="Posisi uang saat ini"
                  >
                    {CASH_POSITIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <div className="muted text-xs" style={{ marginTop: 6 }}>
                    Menandai siapa yang memegang uang cash untuk pesanan ini.
                  </div>
                </div>
              </div>
            </div>

            {/* Mode Pembayaran */}
            <div className="card soft">
              <div className="form-row form-row--3">
                <label className="checkbox">
                  <input
                    type="radio"
                    name="paymode"
                    value="FULL"
                    checked={mode === "FULL"}
                    onChange={() => setMode("FULL")}
                  />
                  <span>Full</span>
                </label>

                <label className="checkbox">
                  <input
                    type="radio"
                    name="paymode"
                    value="DP"
                    checked={mode === "DP"}
                    onChange={() => setMode("DP")}
                  />
                  <span>Down Payment</span>
                </label>

                <label className="checkbox">
                  <input
                    type="radio"
                    name="paymode"
                    value="PENDING"
                    checked={mode === "PENDING"}
                    onChange={() => setMode("PENDING")}
                  />
                  <span>Pending</span>
                </label>
              </div>
            </div>

            {/* Metode & Nominal (kecuali PENDING) */}
            {showMethodBlock && (
              <div className="card soft">
                <div className="form-row form-row--2">
                  <div className="form-field">
                    <label className="label">Metode</label>
                    <select
                      className="select"
                      value={method}
                      onChange={(e) => setMethod(e.target.value as PaymentMethod)}
                      aria-label="Metode pembayaran"
                    >
                      {payMethods.map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select>

                    {method === "XENDIT" && FF_XENDIT && (
                      <div className="muted text-xs" style={{ marginTop: 6 }}>
                        Setelah klik <em>Proses Bayar</em>, Anda akan diarahkan ke halaman pembayaran Xendit.
                      </div>
                    )}
                  </div>

                  <div className="form-field">
                    <label className="label">{mode === "FULL" ? "Nominal Bayar" : "Nominal DP"}</label>
                    {mode === "FULL" ? (
                      <input
                        type="number"
                        className="input text-right"
                        min={0}
                        step="0.01"
                        value={Number.isFinite(bayar) ? bayar : 0}
                        onChange={(e) => onBayarChange(e.target.value)}
                        inputMode="decimal"
                        aria-label="Nominal bayar (Full)"
                      />
                    ) : (
                      <input
                        type="number"
                        className="input text-right"
                        min={0}
                        step="0.01"
                        value={Number.isFinite(dpAmount) ? dpAmount : 0}
                        onChange={(e) => onDpChange(e.target.value)}
                        inputMode="decimal"
                        aria-label="Nominal DP"
                      />
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Actions (desktop tetap di bawah kiri agar natural setelah isi form) */}
            <div className="card soft">
              {!formValid && disableReason && (
                <div className="alert alert-warning" style={{ marginBottom: 10 }}>
                  {disableReason}
                </div>
              )}

              {err && (
                <div className="alert alert-danger" role="alert" style={{ marginBottom: 10 }}>
                  {err}
                </div>
              )}

              <div className="pos-checkout__actions">
                <button className="button button-outline" onClick={onClose} disabled={loading}>
                  Batal
                </button>
                <button
                  className="button button-primary pos-checkout__primary"
                  onClick={() => void submit()}
                  disabled={loading || !formValid}
                  aria-disabled={loading || !formValid}
                >
                  {loading ? "Memproses…" : mode === "PENDING" ? "Simpan (Belum Bayar)" : "Proses Bayar"}
                </button>
              </div>

              <div className="muted text-xs pos-checkout__hint">
                Tekan <kbd className="kbd">Enter</kbd> untuk submit, <kbd className="kbd">Esc</kbd> untuk tutup.
              </div>
            </div>
          </div>

          {/* Right column: Ringkasan sticky */}
          <div className="pos-checkout__right">
            <div className="card soft">
              <div style={{ fontWeight: 800, marginBottom: 10 }}>{rightTitle}</div>

              <div className="kv-grid">
                <div className="kv">
                  <span className="kv-key">Total</span>
                  <span className="kv-val">
                    <strong>{toIDR(grand)}</strong>
                  </span>
                </div>

                {mode === "FULL" && method === "CASH" && bayar >= grand && (
                  <div className="kv">
                    <span className="kv-key">Kembalian</span>
                    <span className="kv-val">{toIDR(change)}</span>
                  </div>
                )}

                {mode === "DP" && dpAmount > 0 && dpAmount < grand && (
                  <div className="kv">
                    <span className="kv-key">Sisa Tagihan</span>
                    <span className="kv-val">{toIDR(Math.max(0, grand - dpAmount))}</span>
                  </div>
                )}
              </div>

              <div style={{ marginTop: 10, opacity: 0.75, fontSize: 12, lineHeight: 1.55 }}>
                • Full: pembayaran lunas (CASH bisa kembalian). <br />
                • DP: bayar sebagian, sisa ditagihkan nanti. <br />
                • Pending: simpan order tanpa payment.
              </div>
            </div>

            {/* Status kecil agar “terlihat” ketika error / loading */}
            <div className="card soft">
              <div className="kv-grid">
                <div className="kv">
                  <span className="kv-key">Item</span>
                  <span className="kv-val">{items?.length ?? 0}</span>
                </div>
                <div className="kv">
                  <span className="kv-key">Valid</span>
                  <span className="kv-val">{formValid ? "Ya" : "Tidak"}</span>
                </div>
              </div>

              {!formValid && disableReason && (
                <div className="muted text-xs" style={{ marginTop: 8 }}>
                  {disableReason}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

```
</details>

### src/components/pos/ProductGrid.tsx

- SHA: `c438ce6d74d3`  
- Ukuran: 18 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/pos/ProductGrid.tsx
import { useEffect, useMemo, useRef, useState } from "react";
import type { Product, ProductQuery } from "../../types/product";
import { listProducts } from "../../api/products";
import { ensureImageUrl } from "../../api/_files";
import { isAbortLike } from "../../utils/isAbortLike";

type Props = {
  onPick?: (p: Product) => void;
  perPage?: number;
  initialQuery?: ProductQuery;
  warehouseId?: number;
  /** Jika true, komponen tidak akan fetch sebelum warehouseId tersedia */
  requireWarehouse?: boolean;
};

type LaravelPaginator<T> = {
  data?: T[];
  current_page?: number;
  last_page?: number;
};

type JsonApiLike<T> = {
  data?: T[];
  meta?: { last_page?: number };
};

// ---------- Type-safe helpers (tanpa 'any') ----------
function isRecord(x: unknown): x is Record<string, unknown> {
  return typeof x === "object" && x !== null;
}
function isString(v: unknown): v is string {
  return typeof v === "string";
}
function isNumber(v: unknown): v is number {
  return typeof v === "number" && Number.isFinite(v);
}
function isLaravelPaginator<T>(v: unknown): v is LaravelPaginator<T> {
  if (!isRecord(v)) return false;
  if (!("data" in v)) return false;
  return Array.isArray((v as Record<string, unknown>).data);
}
function isJsonApiLike<T>(v: unknown): v is JsonApiLike<T> {
  if (!isRecord(v)) return false;
  const meta = v.meta;
  return isRecord(meta) && typeof meta.last_page === "number";
}
function extractData<T>(v: unknown): T[] {
  if (isLaravelPaginator<T>(v)) return v.data ?? [];
  if (isJsonApiLike<T>(v)) return v.data ?? [];
  return [];
}
function extractLastPage(v: unknown): number {
  if (isJsonApiLike(v)) {
    const meta = (v as JsonApiLike<unknown>).meta;
    const lp = meta?.last_page;
    if (typeof lp === "number" && Number.isFinite(lp)) return lp;
  }
  if (isLaravelPaginator(v)) {
    const lp = (v as LaravelPaginator<unknown>).last_page;
    if (typeof lp === "number" && Number.isFinite(lp)) return lp;
  }
  return 1;
}

type ApiErrorShape = { status?: number; message?: string; errors?: unknown };

function isApiErrorShape(x: unknown): x is ApiErrorShape {
  if (typeof x !== "object" || x === null) return false;
  const o = x as Record<string, unknown>;
  const okStatus =
    !("status" in o) || typeof o.status === "number" || typeof o.status === "undefined";
  const okMessage =
    !("message" in o) || typeof o.message === "string" || typeof o.message === "undefined";
  return okStatus && okMessage;
}

function getErrorMessage(e: unknown, fallback = "Gagal memuat produk."): string {
  if (typeof e === "string") return e;
  if (typeof e === "object" && e !== null) {
    const o = e as Record<string, unknown>;
    const m = o["message"];
    if (typeof m === "string" && m.trim() !== "") return m;
  }
  try {
    const s = String(e);
    if (s && s !== "[object Object]") return s;
  } catch {
    /* ignore */
  }
  return fallback;
}

// ---------- Debug helpers ----------
function hasQueryFlag(name: string): boolean {
  try {
    return (
      new URLSearchParams(window.location.search).getAll("debug").includes(name) ||
      new URLSearchParams(window.location.search).has(name)
    );
  } catch {
    return false;
  }
}
function isDebugOn(): boolean {
  if (import.meta.env.DEV === true) return true;
  try {
    if (localStorage.getItem("DEBUG_GRID") === "1") return true;
  } catch {
    /* ignore */
  }
  if (hasQueryFlag("grid") || (hasQueryFlag("debug") && hasQueryFlag("all"))) return true;
  return false;
}
const DEBUG = isDebugOn();

function pickStatus(e: unknown): number | undefined {
  if (!isRecord(e)) return undefined;
  const resp = isRecord((e as Record<string, unknown>).response)
    ? ((e as Record<string, unknown>).response as Record<string, unknown>)
    : undefined;

  const st =
    resp && isNumber(resp.status)
      ? (resp.status as number)
      : isNumber((e as Record<string, unknown>).status)
        ? ((e as Record<string, unknown>).status as number)
        : undefined;

  return st;
}
function pickServerMessage(e: unknown): string | undefined {
  if (!isRecord(e)) return undefined;
  const resp = isRecord((e as Record<string, unknown>).response)
    ? ((e as Record<string, unknown>).response as Record<string, unknown>)
    : undefined;

  const data =
    resp && isRecord(resp.data) ? (resp.data as Record<string, unknown>) : undefined;

  const msg = data && isString(data.message) ? (data.message as string) : undefined;
  return msg;
}
function debugStart(reqId: number, q: ProductQuery) {
  if (!DEBUG) return;
  const qLog = {
    page: q.page,
    per_page: q.per_page,
    sort: q.sort,
    is_active: q.is_active,
    gudang_id: (q as Record<string, unknown>)["gudang_id"],
    cabang_id: (q as Record<string, unknown>)["cabang_id"],
    has_search: Boolean((q as Record<string, unknown>)["search"] ?? (q as Record<string, unknown>)["q"]),
  };
  console.groupCollapsed(`[ProductGrid] ▶ request #${reqId} /products`);
  console.log("query:", qLog);
  console.groupEnd();
}
function debugSuccess(reqId: number, res: unknown, dataLen: number, lastPage: number) {
  if (!DEBUG) return;
  console.groupCollapsed(`[ProductGrid] ✅ success #${reqId} /products`);
  console.log("raw:", res);
  console.log("data.length:", dataLen, "lastPage:", lastPage);
  console.groupEnd();
}
function debugError(reqId: number, err: unknown) {
  if (!DEBUG) return;
  console.groupCollapsed(`[ProductGrid] ❌ error #${reqId} /products`);
  console.log("raw error:", err);
  console.log("status (detected):", pickStatus(err));
  console.log("server message (detected):", pickServerMessage(err));
  console.groupEnd();
}

function formatIDR(n: number): string {
  if (!Number.isFinite(n)) return "0";
  return n.toLocaleString("id-ID");
}

function getMinVariantPrice(p: Product): number | null {
  if (!Array.isArray(p.variants) || p.variants.length === 0) return null;

  const nums = p.variants
    .map((v) => Number(v.harga ?? 0)) // ✅ akses langsung, tanpa cast Record
    .filter((x) => Number.isFinite(x));

  if (nums.length === 0) return null;
  return Math.min(...nums);
}


function ProductCardSkeleton({ keyId }: { keyId: string }): React.ReactElement {
  return (
    <div
      key={keyId}
      className="pg-card"
      aria-hidden="true"
      style={{
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-lg)",
        background: "var(--color-surface)",
        boxShadow: "var(--shadow-xs)",
        padding: "10px",
      }}
    >
      <div
        style={{
          width: "100%",
          paddingTop: "100%",
          borderRadius: "12px",
          background:
            "linear-gradient(90deg, rgba(0,0,0,.04), rgba(0,0,0,.07), rgba(0,0,0,.04))",
          backgroundSize: "200% 100%",
          animation: "pg-shimmer 1.2s ease-in-out infinite",
        }}
      />
      <div style={{ height: 10, marginTop: 10, borderRadius: 8, background: "rgba(0,0,0,.06)" }} />
      <div style={{ height: 10, marginTop: 6, width: "60%", borderRadius: 8, background: "rgba(0,0,0,.06)" }} />
    </div>
  );
}

export default function ProductGrid({
  onPick,
  perPage = 24,
  initialQuery,
  warehouseId,
  requireWarehouse = false,
}: Props) {
  const [items, setItems] = useState<Product[]>([]);
  const lastGoodRef = useRef<Product[]>([]);
  const reqSeqRef = useRef<number>(0);
  const [page, setPage] = useState<number>(1);
  const [lastPage, setLastPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const query: ProductQuery = useMemo(
    () => ({
      per_page: perPage,
      page,
      sort: "nama",
      is_active: true,
      ...(initialQuery ?? {}),
      ...(warehouseId ? { gudang_id: warehouseId } : {}),
    }),
    [page, perPage, initialQuery, warehouseId]
  );

  // Reset halaman saat filter/gudang berubah
  useEffect(() => {
    setPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [perPage, warehouseId, JSON.stringify(initialQuery ?? {})]);

  useEffect(() => {
    if (requireWarehouse && !warehouseId) {
      setItems([]);
      setLastPage(1);
      setLoading(false);
      setError(null);
      return;
    }

    abortRef.current?.abort();
    const ac = new AbortController();
    abortRef.current = ac;

    const myReqId = ++reqSeqRef.current;

    setLoading(true);
    setError(null);

    debugStart(myReqId, query);
    if (import.meta.env.DEV) console.time?.(`[ProductGrid] #${myReqId} /products`);

    listProducts(query, { signal: ac.signal })
      .then((res) => {
        if (myReqId !== reqSeqRef.current) return;
        const data = extractData<Product>(res);
        const lp = extractLastPage(res);
        setItems(data);
        lastGoodRef.current = data;
        setLastPage(lp);
        setError(null);
        debugSuccess(myReqId, res, data.length, lp);
      })
      .catch((e: unknown) => {
        if (isAbortLike(e)) return;
        if (myReqId !== reqSeqRef.current) return;
        debugError(myReqId, e);

        const msg = isApiErrorShape(e) ? e.message ?? "Gagal memuat produk." : getErrorMessage(e);
        if (lastGoodRef.current.length > 0) {
          // tetap tampilkan data terakhir yang valid, tapi warning ditampilkan di bawah
          setError(msg);
          return;
        }
        setError(msg);
        setItems([]);
        setLastPage(1);
      })
      .finally(() => {
        if (import.meta.env.DEV) console.timeEnd?.(`[ProductGrid] #${myReqId} /products`);
        if (myReqId === reqSeqRef.current) setLoading(false);
      });

    return () => ac.abort();
  }, [query, requireWarehouse, warehouseId]);

  const showBlockingError = Boolean(error) && items.length === 0;

  // CSS lokal ProductGrid supaya konsisten dan tidak tergantung class global yang belum ada
  // (Tidak mengubah logika sama sekali)
  const styles = (
    <style>{`
      @keyframes pg-shimmer {
        0% { background-position: 0% 0; }
        100% { background-position: -200% 0; }
      }

      .pg-wrap { width: 100%; }

      .pg-head{
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap: 10px;
        flex-wrap: wrap;
        margin-bottom: 12px;
      }
      .pg-title{
        display:flex;
        align-items:baseline;
        gap: 10px;
        min-width: 0;
      }
      .pg-title h3{
        margin: 0;
        font-size: 14px;
        font-weight: 800;
        letter-spacing: -0.01em;
      }
      .pg-meta{
        font-size: 12px;
        opacity: .72;
        white-space: nowrap;
      }

      .pg-grid{
        display:grid;
        gap: 12px;
        grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
      }

      .pg-card{
        display:flex;
        flex-direction:column;
        text-align:left;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        background: var(--color-surface);
        box-shadow: var(--shadow-xs);
        padding: 10px;
        cursor:pointer;
        transition: transform .06s ease, box-shadow .2s ease;
      }
      .pg-card:hover{
        transform: translateY(-1px);
        box-shadow: var(--shadow-md);
      }
      .pg-card:active{
        transform: translateY(0px);
      }

      .pg-thumb{
        position:relative;
        width:100%;
        padding-top: 100%;
        overflow:hidden;
        border-radius: 12px;
        background: rgba(0,0,0,.04);
        border: 1px solid rgba(0,0,0,.04);
      }
      .pg-thumb img{
        position:absolute;
        inset:0;
        width:100%;
        height:100%;
        object-fit:cover;
      }
      .pg-noimg{
        position:absolute;
        inset:0;
        display:grid;
        place-items:center;
        font-size: 12px;
        opacity: .6;
      }

      .pg-body{ margin-top: 10px; display:flex; flex-direction:column; gap: 6px; }
      .pg-name{
        font-weight: 750;
        font-size: 13px;
        line-height: 1.25;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow:hidden;
        min-height: calc(13px * 1.25 * 2);
      }
      .pg-row{
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap: 8px;
      }
      .pg-price{
        font-weight: 800;
        font-size: 12px;
        color: var(--color-primary);
        background: rgba(192,70,87,.10);
        border: 1px solid rgba(192,70,87,.18);
        padding: 4px 8px;
        border-radius: var(--radius-pill);
        white-space: nowrap;
      }
      .pg-variant{
        font-size: 12px;
        opacity: .7;
        white-space: nowrap;
      }

      .pg-footer{
        display:flex;
        align-items:center;
        justify-content:space-between;
        gap: 10px;
        flex-wrap: wrap;
        margin-top: 14px;
        padding-top: 12px;
        border-top: 1px solid rgba(0,0,0,.06);
      }
      .pg-pager{
        display:flex;
        align-items:center;
        gap: 8px;
      }
      .pg-note{
        font-size: 12px;
        opacity: .72;
      }

      .pg-empty{
        padding: 14px;
        border-radius: var(--radius-lg);
        border: 1px dashed rgba(0,0,0,.12);
        background: rgba(255,255,255,.6);
        color: var(--color-text-soft);
      }
    `}</style>
  );

  return (
    <div className="pg-wrap">
      {styles}

      {showBlockingError && (
        <div className="card">
          <div className="alert alert-danger" style={{ fontSize: 13 }}>
            Tidak dapat memuat produk. {error}
          </div>
        </div>
      )}

      {!showBlockingError && (
        <div className="card">
          {/* Header kecil (rapi + informatif) */}
          <div className="pg-head">
            <div className="pg-title">
              <h3>Katalog Produk</h3>
              <span className="pg-meta">
                Hal. {page} / {lastPage}
                {warehouseId ? ` • Gudang #${warehouseId}` : ""}
              </span>
            </div>

            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              {loading ? (
                <span className="badge badge-warning">Memuat…</span>
              ) : (
                <span className="badge badge-success">{items.length} item</span>
              )}
            </div>
          </div>

          {/* Grid */}
          {loading && items.length === 0 ? (
            <div className="pg-grid" aria-busy="true" aria-label="Memuat katalog">
              {Array.from({ length: Math.min(12, perPage) }).map((_, i) => (
                <ProductCardSkeleton key={`sk-${i}`} keyId={`sk-${i}`} />
              ))}
            </div>
          ) : !loading && items.length === 0 ? (
            <div className="pg-empty">Belum ada produk aktif.</div>
          ) : (
            <div className="pg-grid">
              {items.map((p) => {
                const fallbackPath =
                  p.media?.find((m) => m.is_primary)?.path || p.media?.[0]?.path || null;
                const img = ensureImageUrl(p.image_url ?? null, fallbackPath);

                const minPrice = getMinVariantPrice(p);
                const minFromBackend = Number(
                  (p as unknown as { min_variant_harga?: number | string }).min_variant_harga
                );

                const shown =
                  Number.isFinite(minPrice ?? NaN)
                    ? (minPrice as number)
                    : (Number.isFinite(minFromBackend) ? minFromBackend : 0);
                const hasVariants = Array.isArray(p.variants) && p.variants.length > 0;

                return (
                  <button
                    key={p.id}
                    onClick={() => onPick?.(p)}
                    className="pg-card"
                    type="button"
                    aria-label={`Tambah ${p.nama} ke keranjang`}
                  >
                    <div className="pg-thumb">
                      {img ? (
                        <img
                          src={img}
                          alt={p.nama}
                          loading="lazy"
                          decoding="async"
                          onError={(e) => {
                            e.currentTarget.src = "/no-image.svg";
                          }}
                        />
                      ) : (
                        <div className="pg-noimg">No Image</div>
                      )}
                    </div>

                    <div className="pg-body">
                      <div className="pg-name">{p.nama}</div>

                      <div className="pg-row">
                        <div className="pg-price">
                          Rp{formatIDR(shown)}
                        </div>
                        <div className="pg-variant">
                          {hasVariants ? `${p.variants!.length} varian` : "—"}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* Pagination */}
          {!showBlockingError && (
            <div className="pg-footer">
              <div className="pg-note">
                Klik kartu produk untuk tambah cepat ke keranjang.
              </div>

              <div className="pg-pager">
                <button
                  className="button button-outline"
                  onClick={() => setPage((curr) => Math.max(1, curr - 1))}
                  disabled={page <= 1}
                  type="button"
                >
                  ← Sebelumnya
                </button>
                <button
                  className="button button-outline"
                  onClick={() => setPage((curr) => Math.min(lastPage, curr + 1))}
                  disabled={page >= lastPage}
                  type="button"
                >
                  Selanjutnya →
                </button>
              </div>
            </div>
          )}

          {/* Non-blocking warning (masih tampil data terakhir) */}
          {error && items.length > 0 && (
            <div className="alert alert-warning" style={{ marginTop: 10, fontSize: 12 }}>
              Terjadi kendala sementara: {error}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

```
</details>

### src/components/pos/ProductSearch.tsx

- SHA: `a339b60f16fb`  
- Ukuran: 16 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/pos/ProductSearch.tsx
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { CartItem } from "../../types/pos";
import { useCart } from "../../store/cart";
import { getAuthToken, getBaseUrl } from "../../api/client";
import { mediaPathToUrl } from "../../api/_files";
import { isAbortLike } from "../../utils/isAbortLike";

/* ====================== Types ====================== */

type VariantSummary = {
  id: number;
  name: string;
  harga: number;
  sku: string;
  barcode?: string | null;

  // optional image fields from backend
  product_id?: number;
  image_url?: string | null;  // absolute URL
  media_path?: string | null; // relative path (e.g. 'products/2/xxx.jpg')
};

type Props = { warehouseId: number };

type VariantsEnvelope = {
  data?: Array<{
    id: number;
    full_name?: string;
    nama?: string;
    sku: string;
    barcode?: string | null;
    harga: number;
    product_id?: number;
    image_url?: string | null;
    media_path?: string | null;
  }>;
  meta?: {
    current_page?: number;
    last_page?: number;
    total?: number;
  };
  total?: number;
  current_page?: number;
  last_page?: number;
};

/* ================== Module-scope utils ================== */

function isLikelyBarcode(s: string): boolean {
  return /^\d{6,}$/.test((s ?? "").trim());
}

/** Prefer backend-computed absolute URL; fallback to /storage/<media_path> */
function pickImageUrl(src: {
  image_url?: string | null;
  media_path?: string | null;
}): string | null {
  if (src.image_url) return src.image_url;
  return mediaPathToUrl(src.media_path);
}

/** Map backend payload (variants) into VariantSummary[] */
function mapResponse(json: VariantsEnvelope): VariantSummary[] {
  const arr = Array.isArray(json?.data) ? json.data : [];
  return arr.map((v) => ({
    id: v.id,
    name: v.full_name ?? v.nama ?? v.sku,
    harga: v.harga,
    sku: v.sku,
    barcode: v.barcode ?? null,
    product_id: v.product_id,
    image_url: pickImageUrl(v),
    media_path: v.media_path ?? null,
  }));
}

/** ✅ Safe BASE resolver */
const BASE = getBaseUrl();

/* ====================== Component ====================== */

export default function ProductSearch({ warehouseId }: Props) {
  const [q, setQ] = useState<string>("");
  const [items, setItems] = useState<VariantSummary[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string | null>(null);

  // pagination / infinite scroll
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const perPageDefault = 24; // tampilkan banyak item di awal

  const lastGoodItemsRef = useRef<VariantSummary[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const abortRef = useRef<AbortController | null>(null);
  const reqSeqRef = useRef<number>(0);
  const debounceRef = useRef<number | null>(null);
  const mountedRef = useRef<boolean>(true);
  const didInitRef = useRef<boolean>(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const [activeIdx, setActiveIdx] = useState<number>(-1);
  const listRef = useRef<HTMLDivElement>(null);
  const add = useCart((s) => s.add);

  /* =========== Mount / Unmount =========== */
  useEffect(() => {
    if (import.meta.env.DEV) {
      if (didInitRef.current) return;
      didInitRef.current = true;
    }
    mountedRef.current = true;
    try {
      inputRef.current?.focus();
    } catch {
      /* ignore */
    }
    return () => {
      mountedRef.current = false;
      abortRef.current?.abort();
      if (debounceRef.current) window.clearTimeout(debounceRef.current);
    };
  }, []);

  /* =========== Core fetcher with pagination =========== */
  const fetchPage = useCallback(
    async (term: string, pageToLoad: number): Promise<{ list: VariantSummary[]; lastPage: number }> => {
      if (!warehouseId) return { list: [], lastPage: 1 };

      const myReqId = ++reqSeqRef.current;

      abortRef.current?.abort();
      const ac = new AbortController();
      abortRef.current = ac;

      if (mountedRef.current) {
        setLoading(true);
        setErrorText(null);
      }

      try {
        let url: URL;
        try {
          url = new URL(`${BASE}/variants`);
        } catch {
          throw new Error(
            `Konfigurasi API tidak valid. BASE="${BASE}". Set VITE_API_URL / VITE_API_BASE_URL.`
          );
        }

        url.searchParams.set("q", term ?? "");
        url.searchParams.set("per_page", String(term.trim() === "" ? perPageDefault : 12));
        url.searchParams.set("gudang_id", String(warehouseId));
        url.searchParams.set("page", String(pageToLoad));

        const token = getAuthToken();
        const headers: Record<string, string> = { Accept: "application/json" };
        if (token) headers.Authorization = `Bearer ${token}`;

        let res: Response;
        try {
          res = await fetch(url.toString(), { signal: ac.signal, headers });
        } catch (err) {
          if (isAbortLike(err)) {
            return { list: [], lastPage: 1 };
          }
          throw err;
        }

        if (!res.ok) {
          let detail = "";
          try {
            const txt = await res.text();
            if (txt) detail = ` • ${txt.slice(0, 160)}`;
          } catch { /* ignore */ }
          throw new Error(`HTTP ${res.status}${detail}`);
        }

        const text = await res.text();
        let parsed: unknown;
        try {
          parsed = JSON.parse(text) as unknown;
        } catch {
          throw new Error("Response bukan JSON valid.");
        }

        if (myReqId !== reqSeqRef.current) {
          return { list: [], lastPage: 1 };
        }

        const obj: VariantsEnvelope =
          typeof parsed === "object" && parsed !== null ? (parsed as VariantsEnvelope) : {};

        const list = mapResponse(obj);
        const lastPage = obj.meta?.last_page ?? obj.last_page ?? 1;

        return { list, lastPage };
      } catch (err) {
        if (isAbortLike(err)) {
          return { list: [], lastPage: 1 };
        }
        throw err;
      } finally {
        if (mountedRef.current && reqSeqRef.current) {
          setLoading(false);
        }
      }
    },
    [warehouseId, perPageDefault]
  );

  /* =========== Reset & initial load (show all) =========== */
  const resetAndLoad = useCallback(
    async (term: string) => {
      setPage(1);
      setHasMore(true);
      try {
        const { list, lastPage } = await fetchPage(term, 1);
        if (!mountedRef.current) return;
        setItems(list);
        lastGoodItemsRef.current = list;
        setActiveIdx(list.length ? 0 : -1);
        setHasMore(1 < lastPage);
        setErrorText(null);
      } catch (err: unknown) {
        if (isAbortLike(err)) return;
        if (!mountedRef.current) return;
        const msg =
          (typeof err === "object" && err && "message" in err && typeof (err as { message?: unknown }).message === "string")
            ? (err as { message: string }).message
            : "Gagal memuat data.";
        setErrorText(msg);
        setItems(lastGoodItemsRef.current ?? []);
      }
    },
    [fetchPage]
  );

  // initial: load semua item (term kosong)
  useEffect(() => {
    void resetAndLoad("");
  }, [resetAndLoad]);

  /* =========== Debounced search (termasuk kosong) =========== */
  useEffect(() => {
    if (debounceRef.current) window.clearTimeout(debounceRef.current);

    const term = q ?? "";
    const shouldSearch =
      term.trim().length === 0 ||
      term.trim().length >= 2 ||
      isLikelyBarcode(term);

    debounceRef.current = window.setTimeout(() => {
      if (shouldSearch) void resetAndLoad(term);
    }, 250);

    return () => {
      if (debounceRef.current) window.clearTimeout(debounceRef.current);
    };
  }, [q, resetAndLoad]);

  /* =========== Warehouse change re-load =========== */
  useEffect(() => {
    void resetAndLoad(q ?? "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [warehouseId]);

  /* =========== Load next page (infinite scroll) =========== */
  const loadNextPage = useCallback(async () => {
    if (loading || !hasMore) return;
    const next = page + 1;
    try {
      const { list, lastPage } = await fetchPage(q ?? "", next);
      if (!mountedRef.current) return;
      setItems((prev) => {
        const merged = [...prev, ...list];
        lastGoodItemsRef.current = merged;
        return merged;
      });
      setPage(next);
      setHasMore(next < lastPage);
      setErrorText(null);
    } catch (err: unknown) {
      if (isAbortLike(err)) return;
      if (!mountedRef.current) return;
      const msg =
        (typeof err === "object" && err && "message" in err && typeof (err as { message?: unknown }).message === "string")
          ? (err as { message: string }).message
          : "Gagal memuat data.";
      setErrorText(msg);
    }
  }, [fetchPage, hasMore, loading, page, q]);

  // IntersectionObserver untuk sentinel (infinite scroll)
  useEffect(() => {
    const node = sentinelRef.current;
    if (!node) return;

    const io = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        void loadNextPage();
      }
    }, { root: listRef.current, rootMargin: "0px 0px 120px 0px" });

    io.observe(node);
    return () => io.disconnect();
  }, [loadNextPage]);

  /* =========== Add to cart =========== */
  function addToCart(v: VariantSummary): void {
    const row: CartItem = {
      variant_id: v.id,
      name: v.name,
      price_hint: v.harga,
      qty: 1,
      discount: 0,
    };
    add(row);
    setActiveIdx(-1);
    setErrorText(null);
    try {
      inputRef.current?.focus();
    } catch { /* ignore */ }
  }

  /* =========== Active item visibility =========== */
  useEffect(() => {
    const container = listRef.current;
    if (!container) return;
    const active = container.querySelector<HTMLButtonElement>('[data-active="true"]');
    try {
      active?.scrollIntoView({ block: "nearest" });
    } catch { /* ignore */ }
  }, [activeIdx, items]);

  /* =========== Derived flags =========== */
  const showResults = useMemo(() => items.length > 0, [items]);
  const showShortHint = useMemo(
    () => !loading && !showResults && !isLikelyBarcode(q) && q.trim().length < 2,
    [loading, showResults, q]
  );
  const showNoResults = useMemo(
    () => !loading && !showResults && q.trim().length >= 2,
    [loading, showResults, q]
  );

  /* =========== Render =========== */
  return (
    <div className="w-full">
      <input
        id="pos-search"
        ref={inputRef}
        value={q}
        onChange={(e) => setQ(e.target.value)}
        onKeyDown={(e) => {
          if (!items.length) {
            if (e.key === "Enter" && isLikelyBarcode(q)) {
              e.preventDefault();
              void (async () => {
                await resetAndLoad(q);
                if (lastGoodItemsRef.current.length === 1) {
                  addToCart(lastGoodItemsRef.current[0]);
                }
              })();
            }
            return;
          }
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setActiveIdx((idx) => Math.min(idx + 1, items.length - 1));
          } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setActiveIdx((idx) => Math.max(idx - 1, 0));
          } else if (e.key === "Enter") {
            e.preventDefault();
            if (activeIdx >= 0 && activeIdx < items.length) {
              addToCart(items[activeIdx]);
            }
          } else if (e.key === "Escape") {
            setQ("");
          }
        }}
        placeholder="Cari produk / scan barcode"
        className="input"
        autoComplete="off"
        inputMode="search"
        aria-autocomplete="list"
        aria-controls="pos-search-listbox"
        aria-expanded={showResults}
      />

      <div className="muted" style={{ fontSize: 11, marginTop: 6 }}>API: {BASE}</div>

      {loading && <div className="card soft" style={{ padding: 12 }}>Memuat…</div>}
      {errorText && (
        <div className="card soft" style={{ padding: 10, color: "var(--danger-600)" }}>
          {errorText}
        </div>
      )}

      {showShortHint && (
        <div className="muted" style={{ fontSize: 12, marginTop: 6 }}>
          Ketik minimal 2 karakter atau scan barcode.
        </div>
      )}
      {showNoResults && (
        <div className="muted" style={{ fontSize: 12, marginTop: 6 }}>
          Tidak ada hasil. Coba kata kunci lain.
        </div>
      )}

      {showResults && (
        <div
          id="pos-search-listbox"
          role="listbox"
          aria-label="Hasil pencarian produk"
          ref={listRef}
          className="card soft"
          style={{ marginTop: 8, maxHeight: 420, overflow: "auto", padding: 0 }}
        >
          {items.map((v, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={v.id}
                role="option"
                aria-selected={isActive}
                data-active={isActive ? "true" : "false"}
                onMouseEnter={() => setActiveIdx(idx)}
                onClick={() => addToCart(v)}
                className="button button-ghost"
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "10px 12px",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  borderBottom: "1px solid var(--border-muted, rgba(0,0,0,0.06))",
                  background: isActive ? "var(--surface-muted, #fafafa)" : "transparent",
                  borderRadius: 0,
                }}
              >
                <div
                  style={{
                    height: 40,
                    width: 40,
                    borderRadius: 8,
                    background: "var(--surface-2, #f3f3f3)",
                    overflow: "hidden",
                    flexShrink: 0,
                  }}
                >
                  {v.image_url ? (
                    <img
                      loading="lazy"
                      src={v.image_url ?? ""}
                      alt={v.name}
                      style={{ height: "100%", width: "100%", objectFit: "cover" }}
                      decoding="async"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/no-image.svg"; }}
                    />
                  ) : (
                    <div
                      style={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 10,
                        color: "var(--muted-600, #9ca3af)",
                      }}
                    >
                      No Img
                    </div>
                  )}
                </div>

                <div style={{ minWidth: 0 }}>
                  <div style={{ fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {v.name}
                  </div>
                  <div className="muted" style={{ fontSize: 12, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {v.sku}{v.barcode ? ` • ${v.barcode}` : ""}
                  </div>
                </div>

                <div style={{ marginLeft: "auto", fontSize: 14, fontWeight: 700, whiteSpace: "nowrap" }}>
                  {Intl.NumberFormat("id-ID").format(v.harga)}
                </div>
              </button>
            );
          })}

          {/* Sentinel untuk infinite scroll */}
          <div ref={sentinelRef} style={{ height: 6 }} />
        </div>
      )}

      {hasMore && showResults && (
        <div className="muted" style={{ fontSize: 12, marginTop: 8 }}>
          Gulir ke bawah untuk memuat lebih banyak…
        </div>
      )}
      {!hasMore && showResults && (
        <div className="muted" style={{ fontSize: 12, marginTop: 8 }}>
          Semua produk sudah ditampilkan.
        </div>
      )}
    </div>
  );
}

```
</details>

### src/components/pos/ReceiptPreview.tsx

- SHA: `82a4e630e12c`  
- Ukuran: 4 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/pos/ReceiptPreview.tsx
import React, { useEffect, useMemo, useState } from "react";
import { getReceiptHtml } from "../../api/pos";

type Props = { orderId: number; phone?: string | null };

export default function ReceiptPreview({ orderId, phone }: Props): React.ReactElement {
  const [html, setHtml] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        setLoading(true);
        setError(null);
        setHtml("");

        // HTML thermal 58/80mm
        const res = await getReceiptHtml(orderId);
        if (!alive) return;
        setHtml(res);
      } catch (e) {
        if (!alive) return;
        setError((e as Error).message);
      } finally {
        if (!alive) return;
        setLoading(false);
      }
    })();

    return () => {
      alive = false;
    };
  }, [orderId]);

  function doPrint(): void {
    if (!html) return;
    const win = window.open("", "_blank", "width=420,height=640");
    if (!win) return;
    win.document.open();
    win.document.write(html);
    win.document.close();
    win.focus();
    win.print();
  }

  const waHref = useMemo<string | null>(() => {
    if (!phone) return null;
    const text = `Order #${orderId}\nTerima kasih. Struk pembelian terlampir.`;
    return `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;
  }, [phone, orderId]);

  const canPrint = Boolean(html) && !loading && !error;

  return (
    <div className="card">
      {/* Header card (lebih konsisten daripada modal-header) */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        <div style={{ minWidth: 220 }}>
          <div style={{ fontWeight: 800, fontSize: 16, lineHeight: 1.2 }}>Struk</div>
          <div style={{ marginTop: 4, fontSize: 12, opacity: 0.75 }}>
            Order #{orderId} • Preview thermal (58/80mm)
          </div>
        </div>

        <div className="btn-group" style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <button
            className="button button-outline"
            onClick={doPrint}
            disabled={!canPrint}
            aria-disabled={!canPrint}
            title={!canPrint ? "Struk belum siap untuk dicetak" : "Cetak struk"}
          >
            Print
          </button>

          {waHref && (
            <a className="button button-primary" href={waHref} target="_blank" rel="noreferrer">
              Kirim WA
            </a>
          )}
        </div>
      </div>

      {/* Spacing divider halus */}
      <div style={{ height: 1, background: "rgba(0,0,0,.06)", margin: "12px 0" }} />

      {error && <div className="alert alert-danger">{error}</div>}

      {!error && (
        <div className="card soft" style={{ padding: 12 }}>
          {/* Loading state */}
          {loading && (
            <div style={{ padding: 12 }}>
              <div className="text-sm opacity-70">Memuat struk…</div>
              <div style={{ height: 10 }} />
              <div
                style={{
                  height: 320,
                  borderRadius: 12,
                  background: "rgba(0,0,0,.05)",
                }}
              />
            </div>
          )}

          {!loading && html && (
            <div
              style={{
                borderRadius: 14,
                overflow: "hidden",
                border: "1px solid rgba(0,0,0,.06)",
                background: "#fff",
              }}
            >
              {/* iframe clean agar fokus ke konten struk */}
              <iframe
                title="Receipt"
                srcDoc={html}
                style={{
                  width: "100%",
                  height: "26rem",
                  border: "none",
                  display: "block",
                }}
              />
            </div>
          )}

          {!loading && !html && (
            <div className="empty-state">Struk belum tersedia.</div>
          )}
        </div>
      )}
    </div>
  );
}

```
</details>

### src/components/products/ImageDropzone.tsx

- SHA: `06f9b302fec6`  
- Ukuran: 12 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/products/ImageDropzone.tsx
import { useCallback, useEffect, useRef, useState } from "react";
import type { ProductMedia } from "../../types/product";
import { deleteMedia, listMedia, setPrimaryMedia, uploadMedia } from "../../api/products";

type Props = { productId: number };

/* =========================
   Helpers ENV & URL (tanpa `as any`)
   ========================= */
function getEnvStr(v: unknown): string {
  return typeof v === "string" ? v : "";
}
function rtrimSlash(s: string): string {
  return s.replace(/\/+$/, "");
}
function getApiOrigin(): string {
  const ENV = import.meta.env;
  const rawBase = getEnvStr(ENV.VITE_API_URL) || getEnvStr(ENV.VITE_API_BASE_URL) || "";
  const trimmed = rtrimSlash(rawBase);
  const noApi = trimmed.replace(/\/api(\/v\d+)?$/i, "");
  try {
    if (noApi) return new URL(noApi).origin;
  } catch {
    /* noop */
  }
  if (typeof window !== "undefined") return window.location.origin;
  return "";
}
const API_ORIGIN = getApiOrigin();

function resolveMediaUrl(m: ProductMedia): string {
  const direct = m.thumb_url || m.url;
  if (direct) {
    if (/^https?:\/\//i.test(direct)) return direct;
    return `${API_ORIGIN}${direct.startsWith("/") ? "" : "/"}${direct}`;
  }
  const path = m.path ? `/storage/${m.path}` : "";
  if (!path) return "";
  return `${API_ORIGIN}${path}`;
}

export default function ImageDropzone({ productId }: Props): React.ReactElement {
  const [rows, setRows] = useState<ProductMedia[]>([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const ref = useRef<HTMLInputElement | null>(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      await listMedia(productId)
        .then((r) => setRows(r))
        .catch((e) => setError(e?.message || "Gagal memuat media."))
        .finally(() => setLoading(false));
    } catch (e) {
      const msg = (e as { message?: string })?.message ?? "Gagal memuat media.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  }, [productId]);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  type ApiErr = { message?: string; errors?: Record<string, string[]> };
  const renderErrors = useCallback((e: ApiErr | null): string | null => {
    if (!e) return null;
    if (e.errors && Object.keys(e.errors).length) {
      const arr = Object.entries(e.errors).flatMap(([k, v]) => (v ?? []).map((msg) => `${k}: ${msg}`));
      return arr.join("\n");
    }
    return e.message ?? null;
  }, []);

  const onFiles = useCallback(
    async (files: File[]) => {
      if (!files.length) return;

      const MAX_MB = 5;
      const bad = files.find((f) => !f.type.startsWith("image/") || f.size > MAX_MB * 1024 * 1024);
      if (bad) {
        setError(!bad.type.startsWith("image/") ? "File harus berupa gambar." : `Ukuran gambar maksimal ${MAX_MB}MB per file.`);
        return;
      }

      setBusy(true);
      setError(null);
      try {
        await uploadMedia(productId, files);
        await refresh();
      } catch (e) {
        const api = e as ApiErr;
        setError(renderErrors(api) ?? "Gagal upload media.");
      } finally {
        setBusy(false);
      }
    },
    [productId, refresh, renderErrors]
  );

  function handleBrowse(): void {
    ref.current?.click();
  }

  const makePrimary = useCallback(
    async (m: ProductMedia) => {
      setBusy(true);
      try {
        await setPrimaryMedia(productId, m.id);
        await refresh();
      } catch (e) {
        setError((e as { message?: string })?.message ?? "Gagal set primary.");
      } finally {
        setBusy(false);
      }
    },
    [productId, refresh]
  );

  const removeItem = useCallback(
    async (m: ProductMedia) => {
      if (!confirm("Hapus gambar ini?")) return;
      setBusy(true);
      try {
        await deleteMedia(productId, m.id);
        await refresh();
      } catch (e) {
        setError((e as { message?: string })?.message ?? "Gagal menghapus media.");
      } finally {
        setBusy(false);
      }
    },
    [productId, refresh]
  );

  return (
    <div className="section">
      {/* Header area */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "var(--space-4)",
          flexWrap: "wrap",
          marginBottom: "var(--space-3)",
        }}
      >
        <div style={{ minWidth: 0 }}>
          <div style={{ fontWeight: 800, letterSpacing: "-0.01em" }}>Media Produk</div>
          <div className="text-dim" style={{ fontSize: ".9rem", marginTop: 4 }}>
            Upload beberapa gambar. Tandai salah satu sebagai <b>Primary</b> untuk tampil utama.
          </div>
        </div>

        <button
          type="button"
          className="button button-outline"
          disabled={busy}
          onClick={handleBrowse}
          style={{ whiteSpace: "nowrap" }}
        >
          Pilih Gambar
        </button>
      </div>

      {/* Dropzone */}
      <div
        className={`card ${busy ? "opacity-50" : ""}`}
        role="button"
        tabIndex={0}
        aria-disabled={busy ? "true" : "false"}
        onClick={handleBrowse}
        onKeyDown={(e) => {
          if (busy) return;
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleBrowse();
          }
        }}
        onDragEnter={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          setDragOver(false);
        }}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          const files = Array.from(e.dataTransfer.files || []).filter((f) => f.type.startsWith("image/"));
          void onFiles(files);
        }}
        style={{
          padding: "var(--space-5)",
          cursor: busy ? "not-allowed" : "pointer",
          border: dragOver ? "2px dashed var(--color-primary)" : "2px dashed var(--color-border)",
          background: dragOver ? "rgba(192,70,87,0.06)" : "var(--color-surface)",
          transition: "border-color .15s ease, background .15s ease, transform .06s ease",
          transform: dragOver ? "scale(0.995)" : "scale(1)",
          textAlign: "center",
        }}
      >
        <input
          ref={ref}
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => {
            const files = Array.from(e.target.files || []);
            void onFiles(files);
            e.currentTarget.value = "";
          }}
          style={{ display: "none" }}
        />

        <div
          style={{
            width: 52,
            height: 52,
            margin: "0 auto",
            borderRadius: "999px",
            border: "1px solid var(--color-border)",
            display: "grid",
            placeItems: "center",
            boxShadow: "var(--shadow-xs)",
            background: "#fff",
          }}
          aria-hidden="true"
        >
          <span style={{ fontSize: 22, lineHeight: 1 }}>⬆️</span>
        </div>

        <div style={{ marginTop: "var(--space-3)", fontWeight: 800 }}>
          {dragOver ? "Lepaskan untuk upload" : "Tarik & letakkan gambar di sini"}
        </div>
        <div className="text-dim" style={{ fontSize: ".9rem", marginTop: 6 }}>
          atau klik untuk memilih file (maks. 5MB per gambar)
        </div>
      </div>

      {/* Gallery */}
      <div style={{ marginTop: "var(--space-4)" }}>
        {loading ? (
          <div className="card">Memuat…</div>
        ) : (rows?.length ?? 0) === 0 ? (
          <div className="card text-dim" style={{ fontSize: ".9rem" }}>
            Belum ada media.
          </div>
        ) : (
          <div className="form-row form-row--3">
            {(rows ?? []).map((m) => {
              const url = resolveMediaUrl(m);

              return (
                <div key={m.id} className="card" style={{ padding: "var(--space-4)" }}>
                  <div style={{ position: "relative" }}>
                    <div
                      style={{
                        width: "100%",
                        aspectRatio: "1 / 1",
                        borderRadius: "calc(var(--radius-lg) - 2px)",
                        overflow: "hidden",
                        border: "1px solid var(--color-border)",
                        background: "#fafafa",
                      }}
                    >
                      <img
                        src={url}
                        alt=""
                        loading="lazy"
                        onError={(e) => {
                          const el = e.currentTarget as HTMLImageElement;
                          if (!el.dataset.fallback && m.path) {
                            el.dataset.fallback = "1";
                            el.src = `/storage/${m.path}`;
                          }
                        }}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    </div>

                    {m.is_primary && (
                      <div style={{ position: "absolute", left: 10, top: 10 }}>
                        <span className="badge badge-success">Primary</span>
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div style={{ marginTop: "var(--space-3)" }}>
                    <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
                      <button
                        type="button"
                        className={`button ${m.is_primary ? "" : "button-primary"}`}
                        disabled={busy || m.is_primary}
                        onClick={() => void makePrimary(m)}
                        style={{
                          flex: 1,
                          minWidth: 140,
                          opacity: m.is_primary ? 0.7 : 1,
                        }}
                        title={m.is_primary ? "Sudah Primary" : "Jadikan sebagai Primary"}
                      >
                        {m.is_primary ? "Primary" : "Jadikan Utama"}
                      </button>

                      <button
                        type="button"
                        className="button button-outline"
                        disabled={busy}
                        onClick={() => void removeItem(m)}
                        style={{ flex: 1, minWidth: 120 }}
                      >
                        Hapus
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Error */}
      {error && (
        <div className="card" style={{ borderColor: "rgba(192,70,87,.35)", marginTop: "var(--space-4)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
            <span className="badge badge-danger">Error</span>
            <span className="text-dim" style={{ fontSize: ".92rem" }}>
              Terjadi kesalahan.
            </span>
          </div>
          <pre className="text-dim" style={{ whiteSpace: "pre-wrap", marginTop: 10, marginBottom: 0 }}>
            {error}
          </pre>
        </div>
      )}
    </div>
  );
}

```
</details>

### src/components/products/PriceInput.tsx

- SHA: `255ac5fab254`  
- Ukuran: 3 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/products/PriceInput.tsx
import { useMemo } from "react";

type Props = {
  value: number;
  onChange: (next: number) => void;
  min?: number;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  /** Default: "Rp" */
  prefix?: string;
  /** Lebar input (default 10rem). Jika mau full, kirim "100%" */
  width?: string;
};

function clamp(n: number, min = 0): number {
  return Number.isFinite(n) ? Math.max(min, n) : min;
}

/**
 * PriceInput (UI rapi & konsisten)
 * - Value tetap number murni (tidak memformat ribuan di dalam input)
 * - UI: prefix "Rp" + input align-right
 * - Spinner number diminimalkan (tanpa wajib ubah CSS global)
 */
export default function PriceInput({
  value,
  onChange,
  min = 0,
  disabled,
  className,
  placeholder = "0",
  prefix = "Rp",
  width = "10rem",
}: Props): React.ReactElement {
  const display = useMemo(() => String(Number.isFinite(value) ? value : 0), [value]);

  const wrapperStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "stretch",
    width,
    opacity: disabled ? 0.8 : 1,
  };

  const prefixStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    padding: "0 0.75rem",
    border: "1px solid var(--color-border)",
    borderRight: "none",
    borderTopLeftRadius: "var(--radius-lg)",
    borderBottomLeftRadius: "var(--radius-lg)",
    background: "rgba(15,23,42,0.03)",
    fontWeight: 700,
    fontSize: ".9rem",
    color: "var(--color-text)",
    userSelect: "none",
    whiteSpace: "nowrap",
  };

  const inputStyle: React.CSSProperties = {
    textAlign: "right",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    width: "100%",
    // Hilangkan spinner di Firefox (Chrome/Safari via CSS pseudo-element tidak bisa inline,
    // tapi ini sudah mengurangi perbedaan tampilan antar browser)
    MozAppearance: "textfield",
  };

  return (
    <div style={wrapperStyle} aria-disabled={disabled ? "true" : "false"}>
      <span style={prefixStyle}>{prefix}</span>

      <input
        type="number"
        inputMode="decimal"
        min={min}
        step="1"
        placeholder={placeholder}
        className={className ?? "input"}
        value={display}
        disabled={disabled}
        style={inputStyle}
        onChange={(e) => {
          const raw = e.target.value;

          // Kalau user kosongkan input saat mengetik, jangan langsung dipaksa min.
          // Ini menjaga UX, tapi tetap tidak mengubah logika: onBlur akan mengembalikan min.
          if (raw === "") return;

          const n = Number(raw);
          onChange(clamp(n, min));
        }}
        onBlur={(e) => {
          if (e.currentTarget.value === "") onChange(min);
        }}
      />
    </div>
  );
}

```
</details>

### src/components/products/ProductFilters.tsx

- SHA: `9fe8d2b9c5f0`  
- Ukuran: 6 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/products/ProductFilters.tsx
import type { ProductQuery } from "../../types/product";

type Props = {
  value: ProductQuery;
  categories: Array<{ id: number; nama: string }>;
  onChange: (next: ProductQuery) => void;
};

const SORTS: Array<{ v: ProductQuery["sort"]; label: string }> = [
  { v: "-created_at", label: "Terbaru" },
  { v: "created_at", label: "Terlama" },
  { v: "nama", label: "Nama (A–Z)" },
  { v: "-nama", label: "Nama (Z–A)" },
];

const PER_PAGES = [10, 25, 50, 100];

function isDefault(value: ProductQuery): boolean {
  const searchEmpty = (value.search ?? "").trim() === "";
  const catEmpty = !value.category_id;
  const sortDefault = (value.sort ?? "-created_at") === "-created_at";
  const perDefault = (value.per_page ?? 10) === 10;
  const activeOff = !value.is_active;
  return searchEmpty && catEmpty && sortDefault && perDefault && activeOff;
}

export default function ProductFilters({ value, categories, onChange }: Props): React.ReactElement {
  const canReset = !isDefault(value);

  function reset(): void {
    // hanya reset filter UI; tidak mengubah struktur query lain yang mungkin Anda pakai
    onChange({
      ...value,
      page: 1,
      search: "",
      category_id: undefined,
      sort: "-created_at",
      per_page: 10,
      is_active: false,
    });
  }

  return (
    <div className="card" style={{ padding: "var(--space-5)" }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "var(--space-3)",
          flexWrap: "wrap",
          marginBottom: "var(--space-4)",
        }}
      >
        <div style={{ minWidth: 0 }}>
          <div style={{ fontWeight: 800, letterSpacing: "-0.01em" }}>Filter Produk</div>
          <div className="text-dim" style={{ fontSize: ".9rem", marginTop: 4 }}>
            Cari, pilih kategori, dan atur urutan tampilan.
          </div>
        </div>

        <button
          type="button"
          className="button button-outline"
          onClick={reset}
          disabled={!canReset}
          style={{ whiteSpace: "nowrap" }}
          title={!canReset ? "Filter sudah default" : "Reset semua filter"}
        >
          Reset
        </button>
      </div>

      {/* Baris utama: Search, Kategori, Sort */}
      <div className="form-row form-row--3">
        <div style={{ display: "grid", gap: 6 }}>
          <label className="text-dim" style={{ fontSize: ".85rem" }}>
            Pencarian
          </label>
          <input
            className="input"
            placeholder="Cari nama produk…"
            value={value.search ?? ""}
            onChange={(e) => onChange({ ...value, page: 1, search: e.target.value })}
          />
        </div>

        <div style={{ display: "grid", gap: 6 }}>
          <label className="text-dim" style={{ fontSize: ".85rem" }}>
            Kategori
          </label>
          <select
            className="select"
            value={value.category_id ?? ""}
            onChange={(e) =>
              onChange({
                ...value,
                page: 1,
                category_id: e.target.value ? Number(e.target.value) : undefined,
              })
            }
          >
            <option value="">Semua Kategori</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.nama}
              </option>
            ))}
          </select>
        </div>

        <div style={{ display: "grid", gap: 6 }}>
          <label className="text-dim" style={{ fontSize: ".85rem" }}>
            Urutkan
          </label>
          <select
            className="select"
            value={value.sort ?? "-created_at"}
            onChange={(e) =>
              onChange({
                ...value,
                page: 1,
                sort: e.target.value as ProductQuery["sort"],
              })
            }
          >
            {SORTS.map((s) => (
              <option key={s.v} value={s.v ?? ""}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Baris sekunder: chips + per_page */}
      <div
        className="row row--between"
        style={{
          marginTop: "var(--space-4)",
          paddingTop: "var(--space-4)",
          borderTop: "1px solid var(--color-border)",
          gap: "var(--space-3)",
          flexWrap: "wrap",
        }}
      >
        {/* Left: toggle aktif */}
        <label
          htmlFor="only-active"
          className="row row--center"
          style={{
            gap: "0.6rem",
            userSelect: "none",
            padding: "0.45rem 0.65rem",
            borderRadius: "999px",
            border: "1px solid var(--color-border)",
            background: "var(--color-surface)",
          }}
        >
          <input
            id="only-active"
            type="checkbox"
            className="checkbox"
            checked={!!value.is_active}
            onChange={(e) => onChange({ ...value, page: 1, is_active: e.target.checked })}
          />
          <span className="text-dim" style={{ fontSize: ".9rem" }}>
            Hanya aktif
          </span>
        </label>

        {/* Right: per page */}
        <div className="row row--center" style={{ gap: "0.6rem" }}>
          <span className="text-dim" style={{ fontSize: ".9rem" }}>
            Per halaman
          </span>
          <select
            className="select select--sm"
            value={value.per_page ?? 10}
            onChange={(e) => onChange({ ...value, page: 1, per_page: Number(e.target.value) })}
            style={{ minWidth: 92 }}
          >
            {PER_PAGES.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Optional: status ringkas (biar tidak terasa "kosong") */}
      <div style={{ marginTop: "var(--space-3)" }}>
        <div className="text-dim" style={{ fontSize: ".85rem" }}>
          Status:{" "}
          <b style={{ color: "var(--color-text)" }}>
            {canReset ? "Filter diterapkan" : "Default"}
          </b>
        </div>
      </div>
    </div>
  );
}

```
</details>

### src/components/products/ProductFormDialog.tsx

- SHA: `7015a2f03914`  
- Ukuran: 11 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/products/ProductFormDialog.tsx
import React, { useEffect, useMemo, useState } from "react";
import type {
  Product,
  ProductCreatePayload,
  ProductUpdatePayload,
} from "../../types/product";

type Props = {
  open: boolean;
  initial?: Product | null;
  categories: Array<{ id: number; nama: string }>;
  onClose: () => void;
  onSubmit: (
    payload: ProductCreatePayload | ProductUpdatePayload
  ) => Promise<boolean>;
};

function slugify(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export default function ProductFormDialog({
  open,
  initial,
  categories,
  onClose,
  onSubmit,
}: Props): React.ReactElement | null {
  const isEdit = !!initial?.id;

  const [form, setForm] = useState<ProductCreatePayload>({
    category_id: initial?.category_id ?? (categories[0]?.id ?? 0),
    nama: initial?.nama ?? "",
    slug: initial?.slug ?? "",
    deskripsi: initial?.deskripsi ?? "",
    is_active: initial?.is_active ?? true,
  });

  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    if (open) {
      setForm({
        category_id: initial?.category_id ?? (categories[0]?.id ?? 0),
        nama: initial?.nama ?? "",
        slug: initial?.slug ?? "",
        deskripsi: initial?.deskripsi ?? "",
        is_active: initial?.is_active ?? true,
      });
      setErr(null);
    }
  }, [open, initial, categories]);

  const autoSlug = useMemo(
    () => (form.nama ? slugify(form.nama) : ""),
    [form.nama]
  );

  // Lock scroll + ESC close (UI-only improvement)
  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setErr(null);

    const payload: ProductCreatePayload | ProductUpdatePayload = {
      category_id: form.category_id,
      nama: form.nama.trim(),
      slug: (form.slug && form.slug.trim()) || autoSlug,
      deskripsi: form.deskripsi || null,
      is_active: form.is_active,
    };

    const ok = await onSubmit(payload).catch((e) => {
      setErr(e?.message || "Gagal menyimpan.");
      return false;
    });

    setSaving(false);
    if (ok) onClose();
  }

  if (!open) return null;

  const titleText = isEdit ? "Edit Produk" : "Tambah Produk";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-form-title"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background:
          "radial-gradient(900px 500px at 20% 10%, rgba(192,70,87,0.18), transparent 55%), rgba(0,0,0,0.42)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(10px, 2vw, 16px)",
      }}
      onMouseDown={(e) => {
        // click on overlay closes; click inside should not
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="card"
        onMouseDown={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: 760,
          padding: 0,
          overflow: "hidden",
          borderRadius: "var(--radius-xl)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "var(--space-4) var(--space-5)",
            borderBottom: "1px solid var(--color-border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "var(--space-3)",
          }}
        >
          <div style={{ minWidth: 0 }}>
            <div
              id="product-form-title"
              style={{
                fontWeight: 900,
                letterSpacing: "-0.01em",
                fontSize: "1.05rem",
                lineHeight: 1.2,
              }}
            >
              {titleText}
            </div>
            <div className="text-dim" style={{ fontSize: ".9rem", marginTop: 4 }}>
              Isi detail produk dengan rapi. Slug dapat dibuat otomatis.
            </div>
          </div>

          <button
            type="button"
            className="button button-ghost"
            onClick={onClose}
            aria-label="Tutup dialog"
            style={{
              borderRadius: "999px",
              padding: "0.5rem 0.75rem",
              whiteSpace: "nowrap",
            }}
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: "var(--space-5)" }}>
          <div className="form-row form-row--2">
            <label className="form-field">
              <span className="label">Kategori</span>
              <select
                className="select"
                value={form.category_id}
                onChange={(e) =>
                  setForm((f) => ({ ...f, category_id: Number(e.target.value) }))
                }
                required
              >
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.nama}
                  </option>
                ))}
              </select>
            </label>

            <label className="form-field">
              <span className="label">Nama</span>
              <input
                className="input"
                value={form.nama}
                onChange={(e) =>
                  setForm((f) => ({ ...f, nama: e.target.value }))
                }
                required
                placeholder="Contoh: Kopi Susu 250ml"
              />
            </label>
          </div>

          <div className="form-row" style={{ marginTop: "var(--space-3)" }}>
            <label className="form-field" style={{ width: "100%" }}>
              <span className="label">Slug</span>

              <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
                <input
                  className="input"
                  placeholder={autoSlug}
                  value={form.slug ?? ""}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, slug: e.target.value }))
                  }
                  style={{ flex: 1, minWidth: 240 }}
                />

                <button
                  type="button"
                  className="button button-outline"
                  disabled={!autoSlug || saving}
                  onClick={() =>
                    setForm((f) => ({ ...f, slug: autoSlug }))
                  }
                  style={{ whiteSpace: "nowrap" }}
                  title="Gunakan slug otomatis"
                >
                  Pakai Otomatis
                </button>
              </div>

              <span className="help-text">
                Kosongkan untuk otomatis: <b>{autoSlug || "-"}</b>
              </span>
            </label>
          </div>

          <div className="form-row" style={{ marginTop: "var(--space-3)" }}>
            <label className="form-field" style={{ width: "100%" }}>
              <span className="label">Deskripsi</span>
              <textarea
                className="textarea"
                rows={4}
                value={form.deskripsi ?? ""}
                onChange={(e) =>
                  setForm((f) => ({ ...f, deskripsi: e.target.value }))
                }
                placeholder="Opsional. Tambahkan informasi singkat tentang produk."
              />
            </label>
          </div>

          <div
            style={{
              marginTop: "var(--space-3)",
              padding: "var(--space-3)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-lg)",
              background: "rgba(15,23,42,0.015)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "var(--space-3)",
              flexWrap: "wrap",
            }}
          >
            <div style={{ minWidth: 0 }}>
              <div style={{ fontWeight: 800 }}>Status Produk</div>
              <div className="text-dim" style={{ fontSize: ".9rem", marginTop: 2 }}>
                Nonaktifkan jika produk tidak ingin ditampilkan/dijual.
              </div>
            </div>

            <label
              className="form-field"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                margin: 0,
              }}
            >
              <input
                type="checkbox"
                checked={!!form.is_active}
                onChange={(e) =>
                  setForm((f) => ({ ...f, is_active: e.target.checked }))
                }
              />
              <span style={{ fontWeight: 700 }}>
                {form.is_active ? "Aktif" : "Nonaktif"}
              </span>
            </label>
          </div>

          {err && (
            <div
              className="card"
              style={{
                marginTop: "var(--space-4)",
                borderColor: "rgba(192,70,87,.35)",
                background: "rgba(192,70,87,0.06)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span className="badge badge-danger">Error</span>
                <span className="text-dim" style={{ fontSize: ".92rem" }}>
                  Periksa input atau koneksi Anda.
                </span>
              </div>
              <div style={{ marginTop: 8, fontWeight: 700 }}>{err}</div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            padding: "var(--space-4) var(--space-5)",
            borderTop: "1px solid var(--color-border)",
            display: "flex",
            justifyContent: "flex-end",
            gap: "var(--space-2)",
            flexWrap: "wrap",
            background: "rgba(255,255,255,0.65)",
          }}
        >
          <button type="button" onClick={onClose} className="button" disabled={saving}>
            Batal
          </button>

          <button
            disabled={saving}
            className="button button-primary"
            aria-busy={saving}
            style={{ minWidth: 140 }}
          >
            {saving ? "Menyimpan…" : "Simpan"}
          </button>
        </div>
      </form>
    </div>
  );
}

```
</details>

### src/components/products/ProductTable.tsx

- SHA: `ad7876ddb274`  
- Ukuran: 9 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/products/ProductTable.tsx
import { Link } from "react-router-dom";
import type { Product } from "../../types/product";

type Props = {
  rows: Product[];
  loading?: boolean;
  page: number;
  perPage: number;
  total: number;
  onPageChange: (page: number) => void;
  onEdit: (row: Product) => void;
  onVariants: (row: Product) => void;
  onMedia: (row: Product) => void;
  onDelete: (row: Product) => void;
};

/** Bentuk payload opsional yang mungkin ikut dari API */
type WithCategory = {
  category?: { id?: number; nama?: string } | null;
  category_name?: string | null;
  category_id?: number | null;
};
type WithVariants = {
  variants_count?: number;
  variants?: unknown[] | null;
};
type WithMedia = {
  media_count?: number;
  media?: unknown[] | null;
};

/** Type guard util – tanpa `any` */
function hasCategory(x: Product): x is Product & WithCategory {
  const o = x as unknown as object;
  return "category" in o || "category_name" in o || "category_id" in o;
}
function hasVariants(x: Product): x is Product & WithVariants {
  const o = x as unknown as object;
  return "variants_count" in o || "variants" in o;
}
function hasMedia(x: Product): x is Product & WithMedia {
  const o = x as unknown as object;
  return "media_count" in o || "media" in o;
}

function resolveCategoryName(r: Product): string {
  if (hasCategory(r)) {
    if (r.category && typeof r.category.nama === "string" && r.category.nama.trim() !== "") {
      return r.category.nama;
    }
    if (typeof r.category_name === "string" && r.category_name.trim() !== "") {
      return r.category_name;
    }
    if (typeof r.category_id === "number") {
      return `#${r.category_id}`;
    }
  }
  return "–";
}

function resolveVariantsCount(r: Product): number {
  if (hasVariants(r)) {
    if (typeof r.variants_count === "number") return r.variants_count;
    if (Array.isArray(r.variants)) return r.variants.length;
  }
  return 0;
}

function resolveMediaCount(r: Product): number {
  if (hasMedia(r)) {
    if (typeof r.media_count === "number") return r.media_count;
    if (Array.isArray(r.media)) return r.media.length;
  }
  return 0;
}

function clamp(n: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, n));
}

export default function ProductTable({
  rows,
  loading,
  page,
  perPage,
  total,
  onPageChange,
  onEdit,
  onVariants,
  onMedia,
  onDelete,
}: Props): React.ReactElement {
  const lastPage = Math.max(1, Math.ceil(total / perPage));
  const safePage = clamp(page, 1, lastPage);

  return (
    <div className="card" style={{ overflow: "hidden" }}>
      {/* Header / Toolbar */}
      <div
        style={{
          padding: "var(--space-4) var(--space-4)",
          borderBottom: "1px solid var(--color-border)",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "var(--space-4)",
          flexWrap: "wrap",
        }}
      >
        <div style={{ minWidth: 0 }}>
          <div style={{ fontWeight: 900, letterSpacing: "-0.01em" }}>Daftar Produk</div>
          <div className="text-dim" style={{ fontSize: ".9rem", marginTop: 4 }}>
            Total {total} produk • Halaman {safePage} dari {lastPage}
          </div>
        </div>
      </div>

      {/* Table */}
      <div style={{ width: "100%", overflowX: "auto" }}>
        <table className="table" style={{ minWidth: 760 }}>
          <thead>
            <tr>
              <th>Produk</th>
              <th>Kategori</th>
              <th>Status</th>
              <th style={{ textAlign: "right" }}>Varian</th>
              <th style={{ textAlign: "right" }}>Media</th>
              <th style={{ textAlign: "right", width: 360 }}>Aksi</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6} className="muted" style={{ textAlign: "center", padding: "1.25rem" }}>
                  Memuat…
                </td>
              </tr>
            ) : rows.length === 0 ? (
              <tr>
                <td colSpan={6} className="muted" style={{ textAlign: "center", padding: "1.25rem" }}>
                  Tidak ada data.
                </td>
              </tr>
            ) : (
              rows.map((r) => {
                const categoryLabel = resolveCategoryName(r);
                const variantsCount = resolveVariantsCount(r);
                const mediaCount = resolveMediaCount(r);

                return (
                  <tr key={r.id}>
                    {/* Produk */}
                    <td>
                      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                        <div className="text-strong" style={{ lineHeight: 1.2 }}>
                          <Link to={`/catalog/products/${r.id}`} className="link">
                            {r.nama}
                          </Link>
                        </div>
                        <div className="muted text-xs" style={{ wordBreak: "break-word" }}>
                          {r.slug}
                        </div>
                      </div>
                    </td>

                    {/* Kategori */}
                    <td>
                      <span className="muted" style={{ fontSize: ".95rem" }}>
                        {categoryLabel}
                      </span>
                    </td>

                    {/* Status */}
                    <td>
                      <span className={r.is_active ? "badge badge-success" : "badge"}>
                        {r.is_active ? "Aktif" : "Nonaktif"}
                      </span>
                    </td>

                    {/* Varian */}
                    <td style={{ textAlign: "right" }}>
                      <span className="badge" title="Jumlah varian">
                        {variantsCount}
                      </span>
                    </td>

                    {/* Media */}
                    <td style={{ textAlign: "right" }}>
                      <span className="badge" title="Jumlah media">
                        {mediaCount}
                      </span>
                    </td>

                    {/* Aksi */}
                    <td style={{ textAlign: "right" }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          gap: "var(--space-2)",
                          flexWrap: "wrap",
                        }}
                      >
                        <button
                          type="button"
                          className="button"
                          onClick={() => onVariants(r)}
                          style={{ padding: "0.45rem 0.7rem" }}
                        >
                          Varian
                        </button>

                        <button
                          type="button"
                          className="button"
                          onClick={() => onMedia(r)}
                          style={{ padding: "0.45rem 0.7rem" }}
                        >
                          Media
                        </button>

                        <button
                          type="button"
                          className="button button-primary"
                          onClick={() => onEdit(r)}
                          style={{ padding: "0.45rem 0.85rem", fontWeight: 800 }}
                        >
                          Edit
                        </button>

                        <button
                          type="button"
                          className="button button-outline"
                          onClick={() => onDelete(r)}
                          style={{ padding: "0.45rem 0.85rem" }}
                        >
                          Hapus
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Footer / Pagination */}
      <div
        style={{
          padding: "var(--space-3) var(--space-4)",
          borderTop: "1px solid var(--color-border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "var(--space-3)",
          flexWrap: "wrap",
        }}
      >
        <div className="muted text-sm">
          Menampilkan halaman <b>{safePage}</b> dari <b>{lastPage}</b> • Total <b>{total}</b>
        </div>

        <div style={{ display: "flex", gap: "var(--space-2)" }}>
          <button
            type="button"
            className="button"
            disabled={safePage <= 1}
            onClick={() => onPageChange(safePage - 1)}
          >
            Prev
          </button>
          <button
            type="button"
            className="button"
            disabled={safePage >= lastPage}
            onClick={() => onPageChange(safePage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

```
</details>

### src/components/products/VariantManager.tsx

- SHA: `ccebf686964a`  
- Ukuran: 15 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/products/VariantManager.tsx
import { useCallback, useEffect, useMemo, useState } from "react";
import type {
  ProductVariant,
  VariantCreatePayload,
  VariantUpdatePayload,
} from "../../types/product";
import {
  createVariant,
  deleteVariant,
  listVariants,
  updateVariant,
} from "../../api/products";
import PriceInput from "./PriceInput";

type Props = { productId: number };

export default function VariantManager({ productId }: Props): React.ReactElement {
  const [rows, setRows] = useState<ProductVariant[]>([]);
  const [loading, setLoading] = useState(true);
  const [savingId, setSavingId] = useState<number | "new" | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [draftNew, setDraftNew] = useState<VariantCreatePayload>({
    size: "",
    type: "",
    tester: "",
    sku: "",
    harga: 0,
    is_active: true,
  });

  const isBusy = savingId !== null;

  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const arr = await listVariants(productId);
      setRows(arr);
    } catch (e: unknown) {
      setError((e as { message?: string })?.message || "Gagal memuat varian.");
    } finally {
      setLoading(false);
    }
  }, [productId]);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  async function saveNew(): Promise<void> {
    setSavingId("new");
    setError(null);

    const payload: VariantCreatePayload = {
      ...draftNew,
      size: draftNew.size || null,
      type: draftNew.type || null,
      tester: draftNew.tester || null,
      sku: String(draftNew.sku || "").trim(),
      harga: Number(draftNew.harga || 0),
      is_active: draftNew.is_active ?? true,
    };

    try {
      await createVariant(productId, payload);
      setDraftNew({
        size: "",
        type: "",
        tester: "",
        sku: "",
        harga: 0,
        is_active: true,
      });
      await refresh();
    } catch (e: unknown) {
      setError((e as { message?: string })?.message || "Gagal menambah varian.");
    } finally {
      setSavingId(null);
    }
  }

  async function saveEdit(row: ProductVariant): Promise<void> {
    setSavingId(row.id);
    setError(null);

    const payload: VariantUpdatePayload = {
      size: row.size || null,
      type: row.type || null,
      tester: row.tester || null,
      sku: String(row.sku || "").trim(),
      harga: Number(row.harga || 0),
      is_active: !!row.is_active,
    };

    try {
      await updateVariant(productId, row.id, payload);
      await refresh();
    } catch (e: unknown) {
      setError((e as { message?: string })?.message || "Gagal menyimpan varian.");
    } finally {
      setSavingId(null);
    }
  }

  async function remove(row: ProductVariant): Promise<void> {
    if (!confirm(`Hapus varian ${row.sku}?`)) return;

    setSavingId(row.id);
    setError(null);

    try {
      await deleteVariant(productId, row.id);
      await refresh();
    } catch (e: unknown) {
      setError((e as { message?: string })?.message || "Gagal menghapus varian.");
    } finally {
      setSavingId(null);
    }
  }

  const canAdd = useMemo(() => {
    // UI-only: minimal gate agar tidak “nambah kosong”
    const skuOk = String(draftNew.sku || "").trim().length > 0;
    return skuOk && !isBusy;
  }, [draftNew.sku, isBusy]);

  if (loading) return <div className="card">Memuat varian…</div>;

  return (
    <div className="section">
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "var(--space-4)",
          flexWrap: "wrap",
          marginBottom: "var(--space-3)",
        }}
      >
        <div style={{ minWidth: 0 }}>
          <div style={{ fontWeight: 800, letterSpacing: "-0.01em" }}>Varian Produk</div>
          <div className="text-dim" style={{ fontSize: ".9rem", marginTop: 4 }}>
            Kelola SKU/atribut/aktivasi serta harga per varian.
          </div>
        </div>

        <button
          type="button"
          className="button button-outline"
          disabled={isBusy}
          onClick={() => void refresh()}
          style={{ whiteSpace: "nowrap" }}
          title="Refresh data varian"
        >
          Refresh
        </button>
      </div>

      {/* Add New Variant */}
      <div className="card" style={{ marginBottom: "var(--space-4)" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "var(--space-3)",
            flexWrap: "wrap",
            marginBottom: "var(--space-3)",
          }}
        >
          <div style={{ fontWeight: 800 }}>Tambah Varian</div>
          <span className="text-dim" style={{ fontSize: ".85rem" }}>
            SKU wajib diisi
          </span>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr 1fr 1fr 1fr 0.8fr",
            gap: "var(--space-3)",
          }}
        >
          <div>
            <label className="text-dim" style={{ display: "block", fontSize: ".85rem", marginBottom: 6 }}>
              SKU
            </label>
            <input
              className="input"
              placeholder="SKU"
              value={draftNew.sku}
              onChange={(e) => setDraftNew((d) => ({ ...d, sku: e.target.value }))}
              disabled={isBusy}
            />
          </div>

          <div>
            <label className="text-dim" style={{ display: "block", fontSize: ".85rem", marginBottom: 6 }}>
              Size
            </label>
            <input
              className="input"
              placeholder="Size"
              value={draftNew.size ?? ""}
              onChange={(e) => setDraftNew((d) => ({ ...d, size: e.target.value }))}
              disabled={isBusy}
            />
          </div>

          <div>
            <label className="text-dim" style={{ display: "block", fontSize: ".85rem", marginBottom: 6 }}>
              Type
            </label>
            <input
              className="input"
              placeholder="Type"
              value={draftNew.type ?? ""}
              onChange={(e) => setDraftNew((d) => ({ ...d, type: e.target.value }))}
              disabled={isBusy}
            />
          </div>

          <div>
            <label className="text-dim" style={{ display: "block", fontSize: ".85rem", marginBottom: 6 }}>
              Tester
            </label>
            <input
              className="input"
              placeholder="Tester"
              value={draftNew.tester ?? ""}
              onChange={(e) => setDraftNew((d) => ({ ...d, tester: e.target.value }))}
              disabled={isBusy}
            />
          </div>

          <div>
            <label className="text-dim" style={{ display: "block", fontSize: ".85rem", marginBottom: 6 }}>
              Harga
            </label>
            <input
              type="number"
              className="input"
              placeholder="0"
              value={draftNew.harga}
              onChange={(e) =>
                setDraftNew((d) => ({ ...d, harga: Number(e.target.value || 0) }))
              }
              disabled={isBusy}
            />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: "var(--space-2)",
              flexWrap: "wrap",
            }}
          >
            <label
              className="text-dim"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                userSelect: "none",
                marginBottom: 2,
                fontSize: ".9rem",
              }}
            >
              <input
                type="checkbox"
                checked={!!draftNew.is_active}
                onChange={(e) => setDraftNew((d) => ({ ...d, is_active: e.target.checked }))}
                disabled={isBusy}
              />
              Aktif
            </label>

            <button
              type="button"
              className="button button-primary"
              disabled={!canAdd || savingId === "new"}
              onClick={() => void saveNew()}
              style={{ width: "100%" }}
              title={!String(draftNew.sku || "").trim() ? "SKU wajib diisi" : "Tambah varian"}
            >
              {savingId === "new" ? "Menambah…" : "Tambah"}
            </button>
          </div>
        </div>

        {/* Responsive fallback */}
        <style>
          {`
            @media (max-width: 1000px) {
              .card > div[style*="grid-template-columns: 1.2fr 1fr 1fr 1fr 1fr 0.8fr"] {
                grid-template-columns: 1fr 1fr !important;
              }
            }
            @media (max-width: 560px) {
              .card > div[style*="grid-template-columns: 1fr 1fr"] {
                grid-template-columns: 1fr !important;
              }
            }
          `}
        </style>
      </div>

      {/* Table */}
      <div className="card">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "var(--space-3)",
            flexWrap: "wrap",
            marginBottom: "var(--space-3)",
          }}
        >
          <div style={{ fontWeight: 800 }}>Daftar Varian</div>
          <span className="text-dim" style={{ fontSize: ".85rem" }}>
            Total: {(rows ?? []).length}
          </span>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table className="table" style={{ minWidth: 860 }}>
            <thead>
              <tr>
                <th style={{ width: 190 }}>SKU</th>
                <th style={{ width: 140 }}>Size</th>
                <th style={{ width: 140 }}>Type</th>
                <th style={{ width: 140 }}>Tester</th>
                <th className="text-right" style={{ width: 160 }}>
                  Harga
                </th>
                <th style={{ width: 90, textAlign: "center" }}>Aktif</th>
                <th className="text-right" style={{ width: 220 }}>
                  Aksi
                </th>
              </tr>
            </thead>

            <tbody>
              {(rows ?? []).map((r) => (
                <tr key={r.id} style={{ opacity: savingId === r.id ? 0.7 : 1 }}>
                  <td>
                    <input
                      className="input"
                      value={r.sku}
                      onChange={(e) =>
                        setRows((prev) =>
                          prev.map((x) => (x.id === r.id ? { ...x, sku: e.target.value } : x))
                        )
                      }
                      disabled={savingId === r.id}
                    />
                  </td>

                  <td>
                    <input
                      className="input"
                      value={r.size ?? ""}
                      onChange={(e) =>
                        setRows((prev) =>
                          prev.map((x) => (x.id === r.id ? { ...x, size: e.target.value } : x))
                        )
                      }
                      disabled={savingId === r.id}
                    />
                  </td>

                  <td>
                    <input
                      className="input"
                      value={r.type ?? ""}
                      onChange={(e) =>
                        setRows((prev) =>
                          prev.map((x) => (x.id === r.id ? { ...x, type: e.target.value } : x))
                        )
                      }
                      disabled={savingId === r.id}
                    />
                  </td>

                  <td>
                    <input
                      className="input"
                      value={r.tester ?? ""}
                      onChange={(e) =>
                        setRows((prev) =>
                          prev.map((x) => (x.id === r.id ? { ...x, tester: e.target.value } : x))
                        )
                      }
                      disabled={savingId === r.id}
                    />
                  </td>

                  <td className="text-right">
                    <PriceInput
                      value={r.harga}
                      onChange={(next) =>
                        setRows((prev) =>
                          prev.map((x) => (x.id === r.id ? { ...x, harga: next } : x))
                        )
                      }
                    />
                  </td>

                  <td style={{ textAlign: "center" }}>
                    <input
                      type="checkbox"
                      checked={!!r.is_active}
                      onChange={(e) =>
                        setRows((prev) =>
                          prev.map((x) =>
                            x.id === r.id ? { ...x, is_active: e.target.checked } : x
                          )
                        )
                      }
                      disabled={savingId === r.id}
                    />
                  </td>

                  <td className="text-right">
                    <div style={{ display: "flex", gap: 8, justifyContent: "flex-end", flexWrap: "wrap" }}>
                      <button
                        type="button"
                        className="button button-primary"
                        disabled={savingId === r.id}
                        onClick={() => void saveEdit(r)}
                        style={{ minWidth: 110 }}
                      >
                        {savingId === r.id ? "Menyimpan…" : "Simpan"}
                      </button>
                      <button
                        type="button"
                        className="button button-outline"
                        disabled={savingId === r.id}
                        onClick={() => void remove(r)}
                        style={{ minWidth: 90 }}
                      >
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {(rows ?? []).length === 0 && (
                <tr>
                  <td colSpan={7}>
                    <div className="text-dim" style={{ padding: "var(--space-4)", textAlign: "center" }}>
                      Belum ada varian.
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="card" style={{ marginTop: "var(--space-4)", borderColor: "rgba(192,70,87,.35)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
            <span className="badge badge-danger">Error</span>
            <span className="text-dim" style={{ fontSize: ".92rem" }}>
              {error}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

```
</details>

### src/components/routing/RequireAuth.tsx

- SHA: `8cd3bf51319c`  
- Ukuran: 580 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/routing/RequireAuth.tsx
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../store/auth";

export default function RequireAuth(props: { children: React.ReactElement }): React.ReactElement {
  const { isAuthenticated, status } = useAuth();
  const loc = useLocation();

  if (status === "idle" || status === "loading") {
    return <div className="p-6 text-sm opacity-70">Memeriksa sesi...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: loc }} />;
  }

  return props.children;
}

```
</details>

### src/components/routing/RequireRole.tsx

- SHA: `e88e0b1e68c8`  
- Ukuran: 2 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/routing/RequireRole.tsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../store/auth";
import type { Role } from "../../types/user";

function toSlug(x: string): string {
  return x.trim().toLowerCase().replace(/\s+/g, "_");
}

type MaybeRoleObject = { slug?: string; name?: string } | null | undefined;

/** Extract a single user role slug from either a string or {slug|name}. */
function getUserRoleSlug(userRole: string | MaybeRoleObject): string | null {
  if (typeof userRole === "string") return toSlug(userRole);
  if (userRole && typeof userRole === "object") {
    // Narrow safely: check keys existence at runtime
    if (typeof userRole.slug === "string" && userRole.slug) return toSlug(userRole.slug);
    if (typeof userRole.name === "string" && userRole.name) return toSlug(userRole.name);
  }
  return null;
}

export default function RequireRole(props: {
  roles: Role[];
  children: React.ReactElement;
}): React.ReactElement {
  const { isAuthenticated, status, user } = useAuth();
  const loc = useLocation();

  // Loading/auth bootstrap
  if (status === "idle" || status === "loading") {
    return <div className="p-6 text-sm opacity-70">Memeriksa akses...</div>;
  }

  // Not logged in → to /login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: loc }} />;
  }

  // Normalize current user role -> slug
  const userSlug = getUserRoleSlug((user as unknown as { role?: string | MaybeRoleObject })?.role);
  const requiredSlugs = props.roles.map((r) => toSlug(String(r)));

  const allowed = !!userSlug && requiredSlugs.includes(userSlug);

  // Logged in but not allowed → to /dashboard
  if (!allowed) {
    return <Navigate to="/dashboard" replace />;
  }

  return props.children;
}

```
</details>

### src/components/settings/BackupRestorePanel.tsx

- SHA: `fce1d1815b50`  
- Ukuran: 3 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/settings/BackupRestorePanel.tsx
import { useState } from 'react';
import type { SettingExportQuery, SettingImportPayload, SettingUpsertPayload } from '../../types/settings';
import { exportSettings, importSettings } from '../../api/settings';

export default function BackupRestorePanel() {
  const [exporting, setExporting] = useState(false);
  const [importing, setImporting] = useState(false);
  const [exportJson, setExportJson] = useState<string>('');
  const [importJson, setImportJson] = useState<string>('');
  const [msg, setMsg] = useState<string | null>(null);

  async function doExport() {
    setMsg(null);
    try {
      setExporting(true);
      const params: SettingExportQuery = { format: 'json' };
      const data = await exportSettings(params);
      setExportJson(JSON.stringify(data, null, 2));
      setMsg('Settings exported.');
    } catch {
      setMsg('Export failed.');
    } finally {
      setExporting(false);
    }
  }

  async function doImport() {
    setMsg(null);
    try {
      setImporting(true);
      const parsed = JSON.parse(importJson) as { items: SettingUpsertPayload[] };
      const payload: SettingImportPayload = { items: parsed.items, mode: 'merge' };
      await importSettings(payload);
      setMsg('Settings imported.');
    } catch {
      setMsg('Import failed — make sure JSON is valid.');
    } finally {
      setImporting(false);
    }
  }

  const isError = typeof msg === 'string' && /failed/i.test(msg);

  return (
    <div>
      {/* Export */}
      <div className="card" style={{ marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
          <h3 className="card-title" style={{ margin: 0 }}>Export</h3>
          <button type="button" onClick={doExport} disabled={exporting} className="button button-primary">
            {exporting ? 'Exporting…' : 'Export JSON'}
          </button>
        </div>

        <textarea
          className="textarea"
          rows={8}
          value={exportJson}
          onChange={(e) => setExportJson(e.target.value)}
          placeholder="Exported JSON will appear here"
          style={{ marginTop: 12, fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' }}
        />
      </div>

      {/* Import */}
      <div className="card" style={{ marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
          <h3 className="card-title" style={{ margin: 0 }}>Import</h3>
          <button type="button" onClick={doImport} disabled={importing} className="button button-primary">
            {importing ? 'Importing…' : 'Import JSON (merge)'}
          </button>
        </div>

        <textarea
          className="textarea"
          rows={8}
          value={importJson}
          onChange={(e) => setImportJson(e.target.value)}
          placeholder='Paste {"items":[{ "scope":"GLOBAL","key":"...","value":{...}}]}'
          style={{ marginTop: 12, fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' }}
        />
      </div>

      {msg ? (
        <div className={`badge ${isError ? 'badge-danger' : 'badge-success'}`}>
          {msg}
        </div>
      ) : null}
    </div>
  );
}

```
</details>

### src/components/settings/PreferenceToggles.tsx

- SHA: `cfe02bc989a9`  
- Ukuran: 2 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/settings/PreferenceToggles.tsx
import { useState } from 'react';
import type { SettingUpsertPayload, SettingScope } from '../../types/settings';
import { upsertSetting } from '../../api/settings';
import { useAuth } from '../../store/auth';

interface ToggleDef {
  key: string;         // e.g., 'ui.preferences'
  path: string;        // dot path inside JSON, e.g., 'darkMode'
  label: string;       // UI label
  defaultValue: boolean;
  scope: SettingScope; // USER by default
}

interface Props {
  toggles: ToggleDef[];
  scopeId?: number | null;
}

export default function PreferenceToggles({ toggles, scopeId = null }: Props) {
  const { user } = useAuth();
  const [busyKey, setBusyKey] = useState<string | null>(null);
  const [msg, setMsg] = useState<string | null>(null);
  const [msgType, setMsgType] = useState<'ok' | 'err' | null>(null);

  async function toggle(t: ToggleDef, nextVal: boolean) {
    setMsg(null);
    setMsgType(null);
    try {
      const k = `${t.key}:${t.path}`;
      setBusyKey(k);
      const payload: SettingUpsertPayload = {
        scope: t.scope,
        scope_id: t.scope === 'USER' ? user?.id ?? scopeId ?? null : scopeId ?? null,
        key: t.key,
        value: { [t.path]: nextVal },
      };
      await upsertSetting(payload);
      setMsg('Preference saved.');
      setMsgType('ok');
    } catch {
      setMsg('Failed to save preference.');
      setMsgType('err');
    } finally {
      setBusyKey(null);
    }
  }

  return (
    <div style={{ display: 'grid', gap: 8 }}>
      {toggles.map((t) => {
        const id = `${t.key}-${t.path}`;
        const loading = busyKey === `${t.key}:${t.path}`;
        return (
          <label
            key={id}
            className="card"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '8px 12px',
              margin: 0,
            }}
          >
            <span>{t.label}</span>
            <input
              type="checkbox"
              disabled={loading}
              defaultChecked={t.defaultValue}
              onChange={(e) => toggle(t, e.target.checked)}
              aria-label={t.label}
            />
          </label>
        );
      })}

      {msg ? (
        <div>
          <span
            className={`badge ${msgType === 'ok' ? 'badge-success' : msgType === 'err' ? 'badge-danger' : ''}`}
          >
            {msg}
          </span>
        </div>
      ) : null}
    </div>
  );
}

```
</details>

### src/components/settings/SettingsForm.tsx

- SHA: `7964655429f9`  
- Ukuran: 5 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/settings/SettingsForm.tsx
import { useMemo, useState } from 'react';
import type { Setting, SettingScope, SettingUpsertPayload } from '../../types/settings';
import { upsertSetting } from '../../api/settings';
import { useAuth } from '../../store/auth';

interface Props {
  initial?: Setting | null;
  defaultScope: SettingScope;
  defaultScopeId?: number | null;
  /** Which key are we editing (e.g., 'numbering.invoice', 'receipt.footer', 'tax.rules') */
  settingKey: string;
  /** Optional hint of fields for the JSON value editor */
  valueTemplate?: Record<string, unknown>;
  onSaved?: (saved: Setting) => void;
  disabled?: boolean;
}

export default function SettingsForm({
  initial = null,
  defaultScope,
  defaultScopeId = null,
  settingKey,
  valueTemplate,
  onSaved,
  disabled = false,
}: Props) {
  const { hasRole, user } = useAuth();
  const canEditGlobal = hasRole('superadmin');
  const canEditBranch = hasRole('superadmin', 'admin_cabang');
  const canEditUser = true; // everyone can edit USER-scoped prefs for themselves

  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const [scope, setScope] = useState<SettingScope>(initial?.scope ?? defaultScope);
  const [scopeId, setScopeId] = useState<number | null>(
    initial?.scope_id ?? defaultScopeId ?? (scope === 'USER' ? user?.id ?? null : null),
  );
  const [value, setValue] = useState<Record<string, unknown>>(
    (initial?.value as Record<string, unknown>) ?? valueTemplate ?? {},
  );

  const scopeDisabled = useMemo(() => {
    if (scope === 'GLOBAL') return !canEditGlobal || disabled;
    if (scope === 'BRANCH') return !canEditBranch || disabled;
    return !canEditUser || disabled;
  }, [scope, canEditGlobal, canEditBranch, canEditUser, disabled]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);
    try {
      setSaving(true);
      const payload: SettingUpsertPayload = {
        scope,
        scope_id: scope === 'USER' ? user?.id ?? scopeId ?? null : scopeId ?? null,
        key: settingKey,
        value,
      };
      const saved = await upsertSetting(payload);
      setMessage('Setting saved.');
      onSaved?.(saved);
    } catch {
      setMessage('Failed to save setting.');
    } finally {
      setSaving(false);
    }
  }

  const isSuccess = message === 'Setting saved.';
  const isError = message === 'Failed to save setting.';

  return (
    <form onSubmit={handleSubmit}>
      {/* 3-column form row (mobile first) */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 12,
          marginBottom: 12,
        }}
      >
        {/* upgrade to 3 cols on wider screens via a small inline query-free trick */}
        <div style={{ display: 'contents' as const }}>
          <label>
            <div className="card-title" style={{ fontSize: 12 }}>Scope</div>
            <select
              value={scope}
              onChange={(ev) => setScope(ev.target.value as SettingScope)}
              disabled={scopeDisabled}
              className="select"
              aria-label="Setting Scope"
            >
              <option value="GLOBAL">GLOBAL</option>
              <option value="BRANCH">BRANCH</option>
              <option value="USER">USER</option>
            </select>
          </label>

          <label>
            <div className="card-title" style={{ fontSize: 12 }}>Scope ID</div>
            <input
              type="number"
              value={scopeId ?? ''}
              onChange={(e) => setScopeId(e.target.value === '' ? null : Number(e.target.value))}
              disabled={scope === 'GLOBAL' || scopeDisabled}
              className="input"
              placeholder={scope === 'USER' ? 'User ID (auto)' : 'Branch ID'}
              aria-label="Scope ID"
            />
          </label>

          <label>
            <div className="card-title" style={{ fontSize: 12 }}>Key</div>
            <input
              type="text"
              value={settingKey}
              readOnly
              className="input"
              aria-label="Setting Key"
            />
          </label>
        </div>
      </div>

      <div style={{ marginBottom: 8 }}>
        <div className="card-title" style={{ fontSize: 12 }}>Value (JSON)</div>
        <textarea
          className="textarea"
          rows={8}
          value={JSON.stringify(value, null, 2)}
          onChange={(e) => {
            try {
              const next = JSON.parse(e.target.value) as Record<string, unknown>;
              setValue(next);
              if (isError) setMessage(null);
            } catch {
              // keep last valid state; submission still requires valid JSON
            }
          }}
          aria-label="Setting JSON Value"
        />
        <p className="muted" style={{ marginTop: 6, fontSize: 12 }}>
          Edit as JSON. Must be valid to submit.
        </p>
      </div>

      {message ? (
        <div
          className={isSuccess ? 'badge badge-success' : isError ? 'badge badge-danger' : 'muted'}
          style={{ marginBottom: 8 }}
        >
          {message}
        </div>
      ) : null}

      <div>
        <button type="submit" disabled={saving || disabled} className="button button-primary">
          {saving ? 'Saving…' : 'Save'}
        </button>
      </div>
    </form>
  );
}

```
</details>

### src/components/stock/CabangSelect.tsx

- SHA: `f1c365e9a40f`  
- Ukuran: 6 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/stock/CabangSelect.tsx
import { useEffect, useMemo, useRef, useState } from "react";
import type { Branch, BranchQuery } from "../../types/branch";
import { listBranches } from "../../api/branches";
import { useAuth } from "../../store/auth";

type Props = {
  value?: number; // selected cabang_id (controlled by parent)
  onChange: (id: number | undefined) => void;
  disabled?: boolean;
  allowAll?: boolean; // show “Semua Cabang” option when not locked
};

function getErrMsg(e: unknown, fallback = "Gagal memuat cabang."): string {
  if (typeof e === "string") return e;
  if (e && typeof e === "object" && "message" in e) {
    const m = (e as { message?: unknown }).message;
    if (typeof m === "string") return m;
  }
  return fallback;
}

export default function CabangSelect({
  value,
  onChange,
  disabled,
  allowAll,
}: Props): React.ReactElement {
  const { user } = useAuth();
  const [rows, setRows] = useState<Branch[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Determine if user is locked to a cabang (admin_cabang / gudang)
  const lockedCabangId = useMemo<number | undefined>(() => {
    if (!user) return undefined;
    const role = user.role;
    if ((role === "admin_cabang" || role === "gudang") && user.cabang_id != null) {
      return user.cabang_id;
    }
    return undefined;
  }, [user]);

  // Fetch list of active branches (once)
  useEffect(() => {
    let alive = true;
    setLoading(true);
    setError(null);

    const q: BranchQuery = { is_active: true, per_page: 100 };

    listBranches(q)
      .then((res) => {
        if (!alive) return;
        setRows(res.data ?? []);
      })
      .catch((e: unknown) => {
        if (!alive) return;
        setError(getErrMsg(e));
      })
      .finally(() => {
        if (!alive) return;
        setLoading(false);
      });

    return () => {
      alive = false;
    };
  }, []);

  // If locked, ensure parent value matches lock, but emit only when it actually differs (once)
  const lastEmittedRef = useRef<number | undefined>(undefined);
  useEffect(() => {
    if (lockedCabangId == null) return;
    if (value === lockedCabangId) return;
    if (lastEmittedRef.current === lockedCabangId) return;

    lastEmittedRef.current = lockedCabangId;
    onChange(lockedCabangId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lockedCabangId, value]);

  // Stable, nicely sorted options
  const options = useMemo(() => {
    const sorted = [...rows].sort((a, b) => a.nama.localeCompare(b.nama, "id"));
    return sorted;
  }, [rows]);

  // Compute the current value for the <select>
  const selectedValue: number | "" =
    lockedCabangId != null ? lockedCabangId : value ?? "";

  // Disable when locked or loading or externally disabled
  const isDisabled = Boolean(disabled || loading || lockedCabangId != null);

  // Label kecil untuk status (locked / loading)
  const statusHint = useMemo(() => {
    if (loading) return "Memuat daftar cabang…";
    if (lockedCabangId != null) return "Cabang dikunci sesuai akun Anda.";
    return null;
  }, [loading, lockedCabangId]);

  return (
    <div style={{ display: "grid", gap: 8 }}>
      <div style={{ position: "relative" }}>
        <select
          className="select"
          value={selectedValue}
          disabled={isDisabled}
          aria-label="Pilih Cabang"
          aria-busy={loading}
          onChange={(e) => {
            const v = e.target.value;
            const next = v === "" ? undefined : Number(v);
            if (next === value) return;
            onChange(next);
          }}
          style={{
            width: "100%",
            paddingRight: "2.5rem", // ruang untuk ikon di kanan
            opacity: isDisabled ? 0.9 : 1,
          }}
        >
          {/* Placeholder saat belum ada pilihan (dan tidak lock) */}
          {lockedCabangId == null && !allowAll && (
            <option value="" disabled>
              Pilih cabang…
            </option>
          )}

          {/* “Semua Cabang” only when not locked */}
          {allowAll && lockedCabangId == null && <option value="">Semua Cabang</option>}

          {/* Loading placeholder (tetap tampil, tapi tidak ganggu opsi) */}
          {loading && (
            <option value="" disabled>
              Memuat cabang…
            </option>
          )}

          {/* If locked, show only the locked cabang */}
          {lockedCabangId != null
            ? options
                .filter((r) => r.id === lockedCabangId)
                .map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.nama}
                    {r.kota ? ` · ${r.kota}` : ""}
                  </option>
                ))
            : options.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.nama}
                  {r.kota ? ` · ${r.kota}` : ""}
                </option>
              ))}
        </select>

        {/* ikon status di kanan (tanpa library icon) */}
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            right: 10,
            top: "50%",
            transform: "translateY(-50%)",
            width: 18,
            height: 18,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 999,
            border: "1px solid rgba(0,0,0,0.10)",
            background: "rgba(0,0,0,0.03)",
            fontSize: 11,
            opacity: 0.8,
          }}
          title={lockedCabangId != null ? "Locked" : loading ? "Loading" : "Select"}
        >
          {lockedCabangId != null ? "🔒" : loading ? "…" : "⌄"}
        </span>
      </div>

      {/* Hint halus */}
      {statusHint && (
        <div className="text-dim" style={{ fontSize: ".85rem" }}>
          {statusHint}
        </div>
      )}

      {/* Error */}
      {error && (
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 10,
            padding: "10px 12px",
            borderRadius: 12,
            border: "1px solid rgba(239,68,68,0.25)",
            background: "rgba(239,68,68,0.06)",
          }}
        >
          <span className="badge badge-danger">Error</span>
          <div style={{ lineHeight: 1.35 }}>{error}</div>
        </div>
      )}
    </div>
  );
}

```
</details>

### src/components/stock/GudangSelect.tsx

- SHA: `0fa9aa0cdc69`  
- Ukuran: 4 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/stock/GudangSelect.tsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import type { Warehouse as BaseWarehouse } from "../../types/warehouse";
import { listWarehouses } from "../../api/warehouses";

type Warehouse = BaseWarehouse & { is_default?: boolean | null };

type Props = {
  cabangId?: number;
  value?: number;
  onChange: (id: number | undefined) => void;
  disabled?: boolean;
  allowAll?: boolean;
  autoSelectFirst?: boolean;
};

export default React.memo(function GudangSelect({
  cabangId,
  value,
  onChange,
  disabled,
  allowAll = false,
  autoSelectFirst = true,
}: Props) {
  const [rows, setRows] = useState<Warehouse[]>([]);
  const [loading, setLoading] = useState(false);

  // rows yang sedang berlaku untuk cabang mana
  const rowsForCabangRef = useRef<number | undefined>(undefined);
  // catat cabang yang sudah pernah auto-select (sekali per cabang)
  const lastAutoSelectedCabangRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    setRows([]);
    rowsForCabangRef.current = undefined;
    lastAutoSelectedCabangRef.current = undefined;

    if (!cabangId || cabangId <= 0) return;

    let alive = true;
    setLoading(true);

    listWarehouses({ cabang_id: cabangId, is_active: true, per_page: 100 })
      .then((res) => {
        if (!alive) return;
        const data = (res?.data ?? []) as Warehouse[];
        rowsForCabangRef.current = cabangId;
        setRows(data);
      })
      .catch(() => {
        // dropdown: fail-soft (tidak menampilkan error di sini)
      })
      .finally(() => {
        if (alive) setLoading(false);
      });

    return () => {
      alive = false;
    };
  }, [cabangId]);

  // auto-select default/first (opsional)
  useEffect(() => {
    if (!cabangId || cabangId <= 0) return;
    if (!rows.length) return;
    if (!autoSelectFirst) return;
    if (allowAll) return;
    if (typeof value === "number" && value > 0) return;
    if (rowsForCabangRef.current !== cabangId) return;
    if (lastAutoSelectedCabangRef.current === cabangId) return;

    const def = rows.find((r) => !!r.is_default) ?? rows[0];
    if (!def?.id) return;
    if (def.id === value) return;

    lastAutoSelectedCabangRef.current = cabangId;
    onChange(def.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rows, cabangId, value, allowAll, autoSelectFirst]);

  const opts = useMemo(() => {
    // sort konsisten (id locale)
    return [...rows].sort((a, b) => a.nama.localeCompare(b.nama, "id"));
  }, [rows]);

  const selected = typeof value === "number" && value > 0 ? String(value) : "";

  const cabangReady = Boolean(cabangId && cabangId > 0);
  const isDisabled = Boolean(disabled || !cabangReady || loading);

  // placeholder label yang lebih jelas
  const placeholder = !cabangReady
    ? "Pilih cabang dulu"
    : loading
      ? "Memuat gudang…"
      : allowAll
        ? "Semua Gudang"
        : "Pilih gudang";

  return (
    <select
      className="select"
      value={selected}
      disabled={isDisabled}
      onChange={(e) => {
        const next = e.target.value ? Number(e.target.value) : undefined;
        if (next === value) return;
        onChange(next);
      }}
      aria-label="Pilih Gudang"
    >
      {/* Placeholder: selalu tampil sebagai opsi kosong untuk UX yang konsisten */}
      <option value="">{placeholder}</option>

      {/* Jika allowAll=true, placeholder di atas sudah mewakili "Semua Gudang" */}
      {/* Jika allowAll=false, placeholder di atas mewakili "Pilih gudang" */}

      {opts.map((g) => {
        const label = `${g.nama}${g.is_default ? " (default)" : ""}`;
        return (
          <option
            key={g.id}
            value={String(g.id)}
            title={g.is_default ? "Gudang default" : undefined}
          >
            {label}
          </option>
        );
      })}
    </select>
  );
});

```
</details>

### src/components/stock/LowStockIndicator.tsx

- SHA: `867ba6442453`  
- Ukuran: 1 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/stock/LowStockIndicator.tsx
import React from "react";

export default function LowStockIndicator({
  low,
  isLow,
}: {
  low?: boolean;
  isLow?: boolean;
}): React.ReactElement | null {
  const flag = (typeof low === "boolean" ? low : isLow) ?? false;
  if (!flag) return null;

  // Gunakan style konsisten dengan "badge" project.
  // Tidak mengubah logika, hanya tampilan.
  return (
    <span
      className="badge"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "0.28rem 0.6rem",
        borderRadius: 999,
        fontSize: "0.78rem",
        lineHeight: 1,
        background: "rgba(245, 158, 11, 0.14)", // amber halus
        border: "1px solid rgba(245, 158, 11, 0.28)",
        color: "rgba(146, 64, 14, 0.95)", // amber gelap, tetap terbaca
        fontWeight: 700,
        whiteSpace: "nowrap",
      }}
      title="Stok berada di bawah Min Stok"
      aria-label="Low stock"
    >
      <span
        aria-hidden="true"
        style={{
          width: 8,
          height: 8,
          borderRadius: 999,
          background: "rgba(245, 158, 11, 0.95)",
          boxShadow: "0 0 0 4px rgba(245, 158, 11, 0.18)",
        }}
      />
      Low stock
    </span>
  );
}

```
</details>

### src/components/stock/SetInitialStockDialog.tsx

- SHA: `14a6afc22769`  
- Ukuran: 12 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/stock/SetInitialStockDialog.tsx
import React, { useEffect, useMemo, useState, useCallback, useRef } from "react";
import CabangSelect from "./CabangSelect";
import GudangSelect from "./GudangSelect";
import VariantPicker from "./VariantPicker";
import { setInitialStock } from "../../api/stocks";

type Props = { open: boolean; onClose: () => void; onSuccess: () => void };

function getErrorMessage(err: unknown, fallback = "Terjadi kesalahan."): string {
  if (typeof err === "string") return err;
  if (err && typeof err === "object") {
    const maybe = (err as { message?: unknown }).message;
    if (typeof maybe === "string") return maybe;
  }
  return fallback;
}

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null;
}

/** Robust parser untuk berbagai bentuk nilai (number/string/object) tanpa `any` */
function parseId(v: unknown): number | undefined {
  if (v == null) return undefined;

  if (typeof v === "number") {
    return Number.isFinite(v) && v > 0 ? v : undefined;
  }

  if (typeof v === "string") {
    const n = Number(v);
    return Number.isFinite(n) && n > 0 ? n : undefined;
  }

  if (isRecord(v)) {
    const candidates = [
      "id",
      "value",
      "gudang_id",
      "gudangId",
      "cabang_id",
      "cabangId",
      "product_variant_id",
      "variantId",
    ];
    for (const key of candidates) {
      if (key in v) {
        const raw = (v as Record<string, unknown>)[key];
        if (typeof raw === "number") {
          if (Number.isFinite(raw) && raw > 0) return raw;
        } else if (typeof raw === "string") {
          const n = Number(raw);
          if (Number.isFinite(n) && n > 0) return n;
        }
      }
    }
  }

  return undefined;
}

export default function SetInitialStockDialog({ open, onClose, onSuccess }: Props) {
  const [cabangId, setCabangId] = useState<number | undefined>();
  const [gudangId, setGudangId] = useState<number | undefined>();
  const [variantId, setVariantId] = useState<number | undefined>();
  const [qty, setQty] = useState<number>(0);
  const [minStok, setMinStok] = useState<number | undefined>(10);
  const [saving, setSaving] = useState(false);

  const panelRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    if (!open) return;
    setGudangId(undefined);
    setVariantId(undefined);
    setQty(0);
    setMinStok(10);
  }, [open]);

  useEffect(() => {
    setGudangId(undefined);
  }, [cabangId]);

  // ESC to close (UI improvement; does not change business logic)
  useEffect(() => {
    if (!open) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  const onCabangChange = (raw: unknown) => setCabangId(parseId(raw));
  const onGudangChange = (raw: unknown) => setGudangId(parseId(raw));
  const onVariantChange = (raw: unknown) => setVariantId(parseId(raw));

  const onQtyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    const n = raw === "" ? 0 : Number(raw);
    setQty(n);
  };

  const onMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    const n = raw === "" ? 0 : Number(raw);
    setMinStok(n);
  };

  const valid = useMemo(() => {
    const gidOk = Number.isFinite(gudangId) && Number(gudangId) > 0;
    const vidOk = Number.isFinite(variantId) && Number(variantId) > 0;
    const qtyOk = Number.isFinite(qty) && qty >= 0;
    return gidOk && vidOk && qtyOk;
  }, [gudangId, variantId, qty]);

  const disabledReason = useMemo(() => {
    const reasons: string[] = [];
    if (!(Number.isFinite(gudangId) && Number(gudangId) > 0)) reasons.push("Pilih gudang.");
    if (!(Number.isFinite(variantId) && Number(variantId) > 0)) reasons.push("Pilih varian.");
    if (!(Number.isFinite(qty) && qty >= 0)) reasons.push("Qty harus ≥ 0.");
    return reasons.join(" ");
  }, [gudangId, variantId, qty]);

  const handleSubmit = useCallback(async () => {
    if (!valid) return;

    const gid = Number(gudangId);
    const vid = Number(variantId);
    const q = Number(qty);
    const m = minStok != null ? Number(minStok) : undefined;

    if (!Number.isFinite(gid) || gid <= 0) return;
    if (!Number.isFinite(vid) || vid <= 0) return;
    if (!Number.isFinite(q) || q < 0) return;

    setSaving(true);
    try {
      await setInitialStock({
        gudang_id: gid,
        product_variant_id: vid,
        qty: q,
        min_stok: m,
      });
      onSuccess();
      onClose();
    } catch (err: unknown) {
      const msg = getErrorMessage(err, "Gagal set stok awal.");
      alert(msg);
    } finally {
      setSaving(false);
    }
  }, [valid, gudangId, variantId, qty, minStok, onSuccess, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Set stok awal"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        padding: 16,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(2,6,23,0.55)",
        backdropFilter: "blur(4px)",
      }}
      onMouseDown={(e) => {
        // click backdrop to close, but ignore clicks inside panel
        if (!panelRef.current) return;
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <form
        ref={panelRef}
        className="card"
        style={{
          width: "100%",
          maxWidth: 720,
          borderRadius: 22,
          overflow: "hidden",
          boxShadow: "0 30px 90px rgba(0,0,0,0.35)",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          void handleSubmit();
        }}
        data-testid="set-initial-stock-form"
      >
        {/* Header */}
        <div
          style={{
            padding: "18px 18px 14px",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <div>
            <h3 style={{ margin: 0, marginBottom: 6, fontWeight: 800 }}>
              Set Stok Awal
            </h3>
            <div className="text-dim" style={{ fontSize: ".92rem", lineHeight: 1.5 }}>
              Tentukan gudang, varian, qty awal, dan min stok untuk kebutuhan peringatan low stock.
            </div>
          </div>

          <button
            type="button"
            className="button button-ghost"
            onClick={onClose}
            disabled={saving}
            aria-label="Tutup dialog"
            style={{
              width: 38,
              height: 38,
              borderRadius: 999,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
              lineHeight: 1,
            }}
            title="Tutup"
          >
            ×
          </button>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "rgba(0,0,0,0.06)" }} />

        {/* Body */}
        <div style={{ padding: 18 }}>
          {/* Cabang + Gudang */}
          <div className="form-row form-row--2" style={{ marginBottom: 14 }}>
            <div>
              <label style={{ display: "block", fontWeight: 700, marginBottom: 8 }}>
                Cabang
              </label>
              <CabangSelect value={cabangId} onChange={onCabangChange} />
              <div className="text-dim" style={{ fontSize: ".85rem", marginTop: 6 }}>
                Pilih cabang untuk memfilter daftar gudang.
              </div>
            </div>

            <div>
              <label style={{ display: "block", fontWeight: 700, marginBottom: 8 }}>
                Gudang
              </label>
              <GudangSelect cabangId={cabangId} value={gudangId} onChange={onGudangChange} />
              <div className="text-dim" style={{ fontSize: ".85rem", marginTop: 6 }}>
                Gudang wajib dipilih agar stok tercatat pada lokasi yang benar.
              </div>
            </div>
          </div>

          {/* Varian full */}
          <div style={{ marginBottom: 14 }}>
            <label style={{ display: "block", fontWeight: 700, marginBottom: 8 }}>
              Varian Produk
            </label>
            <VariantPicker value={variantId} onChange={onVariantChange} />
            <div className="text-dim" style={{ fontSize: ".85rem", marginTop: 6 }}>
              Pilih SKU/varian yang akan diisi stok awalnya.
            </div>
          </div>

          {/* Qty + Min */}
          <div className="form-row form-row--2" style={{ marginBottom: 10 }}>
            <div>
              <label style={{ display: "block", fontWeight: 700, marginBottom: 8 }}>
                Qty Awal
              </label>
              <input
                type="number"
                min={0}
                className="input"
                value={Number.isFinite(qty) ? qty : 0}
                onChange={onQtyChange}
                required
                placeholder="0"
              />
              <div className="text-dim" style={{ fontSize: ".85rem", marginTop: 6 }}>
                Nilai awal boleh 0 jika memang belum ada stok.
              </div>
            </div>

            <div>
              <label style={{ display: "block", fontWeight: 700, marginBottom: 8 }}>
                Min. Stok
              </label>
              <input
                type="number"
                min={0}
                className="input"
                value={minStok ?? 0}
                onChange={onMinChange}
                placeholder="10"
              />
              <div className="text-dim" style={{ fontSize: ".85rem", marginTop: 6 }}>
                Digunakan untuk penanda low stock (peringatan).
              </div>
            </div>
          </div>

          {/* Hint invalid */}
          {!valid && (
            <div
              style={{
                marginTop: 12,
                padding: "10px 12px",
                borderRadius: 12,
                border: "1px solid rgba(245,158,11,0.25)",
                background: "rgba(245,158,11,0.10)",
                fontSize: ".9rem",
              }}
            >
              <strong style={{ fontWeight: 800 }}>Belum bisa simpan.</strong>{" "}
              <span>{disabledReason || "Lengkapi data yang diperlukan."}</span>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div style={{ height: 1, background: "rgba(0,0,0,0.06)" }} />
        <div
          style={{
            padding: 14,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 10,
            flexWrap: "wrap",
          }}
        >
          <div className="text-dim" style={{ fontSize: ".85rem" }}>
            Tip: tekan <strong>ESC</strong> untuk menutup dialog.
          </div>

          <div style={{ display: "flex", gap: 8 }}>
            <button type="button" className="button" onClick={onClose} disabled={saving}>
              Batal
            </button>
            <button
              type="submit"
              className="button button-primary"
              disabled={!valid || saving}
              style={{ minWidth: 120 }}
              title={!valid ? disabledReason : ""}
            >
              {saving ? "Menyimpan…" : "Simpan"}
            </button>
          </div>
        </div>
      </form>

      {/* Responsif: agar tetap rapi di mobile */}
      <style>
        {`
          @media (max-width: 640px) {
            form.card[style*="max-width: 720px"] {
              border-radius: 16px !important;
            }
          }
        `}
      </style>
    </div>
  );
}

```
</details>

### src/components/stock/StockTable.tsx

- SHA: `d3ca66500775`  
- Ukuran: 7 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/stock/StockTable.tsx
import type { Stock } from "../../types/stock";
import LowStockIndicator from "./LowStockIndicator";

function fmt(n: number) {
  return new Intl.NumberFormat("id-ID").format(n);
}

type Props = {
  rows: Stock[];
  loading?: boolean;
  onEditMin?: (row: Stock) => void;
};

export default function StockTable({ rows, loading, onEditMin }: Props) {
  // Loading state yang lebih rapi (tanpa ubah logic)
  if (loading) {
    return (
      <div
        style={{
          padding: "14px 12px",
          borderRadius: 14,
          border: "1px solid rgba(0,0,0,0.08)",
          background: "rgba(0,0,0,0.02)",
        }}
      >
        <div style={{ fontWeight: 800, marginBottom: 6 }}>Memuat stok…</div>
        <div className="text-dim" style={{ fontSize: ".9rem" }}>
          Mohon tunggu sebentar.
        </div>
      </div>
    );
  }

  // Empty state yang lebih rapi
  if (!rows?.length) {
    return (
      <div
        style={{
          padding: "14px 12px",
          borderRadius: 14,
          border: "1px dashed rgba(0,0,0,0.18)",
          background: "rgba(0,0,0,0.01)",
        }}
      >
        <div style={{ fontWeight: 800, marginBottom: 6 }}>Belum ada data stok</div>
        <div className="text-dim" style={{ fontSize: ".9rem" }}>
          Coba ubah filter cabang/gudang/varian atau cek kembali data stok.
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Wrapper agar tabel aman di mobile (scroll horizontal, tidak merusak layout) */}
      <div style={{ overflowX: "auto" }}>
        <table className="table" style={{ minWidth: 860 }}>
          <thead>
            <tr>
              <th style={{ width: "52%" }}>Variant</th>
              <th className="text-right" style={{ width: "12%" }}>
                Qty
              </th>
              <th className="text-right" style={{ width: "12%" }}>
                Min
              </th>
              <th style={{ width: "12%" }}>Status</th>
              <th className="text-right" style={{ width: "12%" }}>
                Aksi
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.map((r) => {
              const isLow =
                !!r.is_low_stock ||
                (typeof r.qty === "number" &&
                  typeof r.min_stok === "number" &&
                  r.qty < r.min_stok);

              const nama = r.variant?.nama_produk ?? `Variant #${r.product_variant_id}`;
              const sku = r.variant?.sku ?? "-";
              const cabang = r.cabang?.nama ?? `#${r.cabang_id}`;
              const gudang = r.gudang?.nama ?? `#${r.gudang_id}`;

              return (
                <tr key={r.id}>
                  {/* VARIANT + META */}
                  <td style={{ verticalAlign: "top" }}>
                    <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      {/* Accent dot untuk visual (tidak mengubah logic) */}
                      <span
                        aria-hidden="true"
                        style={{
                          marginTop: 6,
                          width: 10,
                          height: 10,
                          borderRadius: 999,
                          background: isLow ? "rgba(239,68,68,0.9)" : "rgba(16,185,129,0.9)",
                          boxShadow: isLow
                            ? "0 0 0 4px rgba(239,68,68,0.15)"
                            : "0 0 0 4px rgba(16,185,129,0.15)",
                          flex: "0 0 auto",
                        }}
                      />

                      <div style={{ minWidth: 0 }}>
                        <div
                          className="font-medium"
                          style={{
                            fontWeight: 800,
                            lineHeight: 1.25,
                            wordBreak: "break-word",
                          }}
                        >
                          {nama}
                        </div>

                        <div
                          style={{
                            marginTop: 8,
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 8,
                            alignItems: "center",
                          }}
                        >
                          <span className="badge" title="SKU">
                            SKU: {sku}
                          </span>

                          <span className="badge" title="Cabang">
                            Cabang: {cabang}
                          </span>

                          <span className="badge" title="Gudang">
                            Gudang: {gudang}
                          </span>
                        </div>

                        {isLow && (
                          <div className="text-dim" style={{ marginTop: 8, fontSize: ".88rem" }}>
                            Qty di bawah Min Stok. Pertimbangkan restok.
                          </div>
                        )}
                      </div>
                    </div>
                  </td>

                  {/* QTY */}
                  <td className="text-right" style={{ verticalAlign: "top" }}>
                    <div style={{ fontWeight: 800 }}>{fmt(r.qty)}</div>
                    <div className="text-dim" style={{ fontSize: ".85rem", marginTop: 4 }}>
                      Unit
                    </div>
                  </td>

                  {/* MIN */}
                  <td className="text-right" style={{ verticalAlign: "top" }}>
                    <div style={{ fontWeight: 800 }}>{fmt(r.min_stok)}</div>
                    <div className="text-dim" style={{ fontSize: ".85rem", marginTop: 4 }}>
                      Batas
                    </div>
                  </td>

                  {/* STATUS */}
                  <td style={{ verticalAlign: "top" }}>
                    <LowStockIndicator low={isLow} />
                  </td>

                  {/* AKSI */}
                  <td className="text-right" style={{ verticalAlign: "top" }}>
                    {onEditMin ? (
                      <button
                        className="button button-outline"
                        onClick={() => onEditMin(r)}
                        title="Ubah Min Stok"
                        aria-label={`Ubah Min Stok untuk ${
                          r.variant?.sku ?? `Variant ${r.product_variant_id}`
                        }`}
                        style={{
                          whiteSpace: "nowrap",
                          borderRadius: 999,
                          padding: "0.5rem 0.75rem",
                          fontWeight: 700,
                        }}
                      >
                        Ubah Min
                      </button>
                    ) : (
                      <span className="text-dim" style={{ fontSize: ".9rem" }}>
                        -
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Hint untuk mobile */}
      <div className="text-dim" style={{ fontSize: ".85rem", marginTop: 10 }}>
        Jika di layar kecil, geser tabel ke kanan/kiri untuk melihat kolom lain.
      </div>
    </div>
  );
}

```
</details>

### src/components/stock/VariantPicker.tsx

- SHA: `bcee2e7dfb78`  
- Ukuran: 10 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/stock/VariantPicker.tsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { listProducts, listVariants } from "../../api/products";
import type { Product, ProductVariant } from "../../types/product";

// tiny debounce hook (stable for 2025)
function useDebounced<T>(value: T, ms: number): T {
  const [deb, setDeb] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setDeb(value), ms);
    return () => clearTimeout(id);
  }, [value, ms]);
  return deb;
}

type Props = {
  value?: number; // product_variant_id (controlled by parent)
  onChange: (variantId: number | undefined) => void;
  autoSelectFirst?: boolean; // default: false
};

function VariantPicker({ value, onChange, autoSelectFirst = false }: Props) {
  const [search, setSearch] = useState("");
  const debSearch = useDebounced(search, 250);

  const [products, setProducts] = useState<Product[]>([]);
  const [productId, setProductId] = useState<number | undefined>(undefined);

  const [variants, setVariants] = useState<ProductVariant[]>([]);
  const [loadingP, setLoadingP] = useState(false);
  const [loadingV, setLoadingV] = useState(false);
  const [errP, setErrP] = useState<string | null>(null);
  const [errV, setErrV] = useState<string | null>(null);

  // ── Fetch products (debounced, abortable)
  useEffect(() => {
    const ctrl = new AbortController();
    setLoadingP(true);
    setErrP(null);

    listProducts({ search: debSearch, per_page: 10 }, { signal: ctrl.signal })
      .then((res) => setProducts(res.data ?? []))
      .catch((e: unknown) => {
        if ((e as { name?: string }).name !== "AbortError") {
          setErrP((e as Error)?.message ?? "Gagal memuat produk.");
        }
      })
      .finally(() => {
        if (!ctrl.signal.aborted) setLoadingP(false);
      });

    return () => ctrl.abort();
  }, [debSearch]);

  // Reset variants immediately when product changes
  useEffect(() => {
    setVariants([]);
  }, [productId]);

  // ── Fetch variants for selected product (abortable)
  useEffect(() => {
    if (!productId) return;
    const ctrl = new AbortController();
    setLoadingV(true);
    setErrV(null);

    listVariants(productId, { signal: ctrl.signal })
      .then((rows) => setVariants(rows ?? []))
      .catch((e: unknown) => {
        if ((e as { name?: string }).name !== "AbortError") {
          setErrV((e as Error)?.message ?? "Gagal memuat varian.");
        }
      })
      .finally(() => {
        if (!ctrl.signal.aborted) setLoadingV(false);
      });

    return () => ctrl.abort();
  }, [productId]);

  // ── If the current selected variant is not present after variants load, clear it ONCE
  const clearedRef = useRef(false);
  useEffect(() => {
    if (!variants.length) return;
    if (value == null) return;

    const stillExists = variants.some((v) => v.id === value);
    if (stillExists) {
      clearedRef.current = false;
      return;
    }

    if (!clearedRef.current) {
      clearedRef.current = true;
      onChange(undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variants, value]);

  // ── Optional: auto-select first variant ONCE per options set
  const autoEmitRef = useRef<number | undefined>(undefined);
  useEffect(() => {
    if (!autoSelectFirst) return;
    if (!variants.length) return;

    const firstId = variants[0].id;
    if (value === firstId) return;
    if (autoEmitRef.current === firstId) return;

    autoEmitRef.current = firstId;
    onChange(firstId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoSelectFirst, variants, value]);

  // Better UX: keep product dropdown stable and sorted
  const productOptions = useMemo(
    () => [...products].sort((a, b) => a.nama.localeCompare(b.nama, "id")),
    [products]
  );

  const variantOptions = useMemo(() => {
    // Tidak mengubah data, hanya membangun label yang rapi.
    return variants.map((v) => {
      const parts: string[] = [];
      parts.push(v.sku);
      if (v.size) parts.push(v.size);
      if (v.type) parts.push(v.type);
      if (v.tester) parts.push(String(v.tester));
      return { id: v.id, label: parts.join(" · ") };
    });
  }, [variants]);

  const canReset = Boolean(search || productId || value);

  return (
    <div>
      {/* Inline style kecil agar layout selalu rapi tanpa mengandalkan CSS eksternal */}
      <style>
        {`
          .vp-grid{
            display:grid;
            grid-template-columns: 1.1fr 0.9fr;
            gap: 12px;
          }
          .vp-grid2{
            display:grid;
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .vp-rowhead{
            display:flex;
            align-items:center;
            justify-content:space-between;
            gap:10px;
            flex-wrap:wrap;
            margin-bottom:10px;
          }
          .vp-help{
            font-size:.85rem;
            opacity:.75;
            margin-top:6px;
          }
          .vp-meta{
            display:flex;
            gap:8px;
            align-items:center;
            flex-wrap:wrap;
          }
          @media (max-width: 760px){
            .vp-grid{ grid-template-columns: 1fr; }
          }
        `}
      </style>

      {/* Header kecil: status + reset */}
      <div className="vp-rowhead">
        <div className="vp-meta">
          <span className="badge" title="Status">
            {loadingP || loadingV ? "Memuat…" : "Siap"}
          </span>
          {productId ? (
            <span className="badge" title="Produk terpilih">
              Produk: {productId}
            </span>
          ) : (
            <span className="badge" title="Produk terpilih">
              Produk: —
            </span>
          )}
          <span className="badge" title="Jumlah varian">
            Varian: {variants.length}
          </span>
        </div>

        <button
          type="button"
          className="button button-ghost"
          disabled={!canReset}
          onClick={() => {
            // UI-only reset; tidak mengubah logic fetch di luar yang sudah ada
            setSearch("");
            setProductId(undefined);
            setVariants([]);
            if (value !== undefined) onChange(undefined);
            setErrP(null);
            setErrV(null);
          }}
          style={{ whiteSpace: "nowrap" }}
        >
          Reset
        </button>
      </div>

      {/* Row 1: Search + Product */}
      <div className="vp-grid">
        <div>
          <label htmlFor="vp-search" className="mb-2" style={{ display: "block", fontWeight: 700 }}>
            Cari Produk
          </label>

          <div style={{ position: "relative" }}>
            <input
              id="vp-search"
              className="input"
              placeholder="Ketik nama/SKU produk…"
              value={search}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
              aria-label="Cari produk"
              style={{ paddingRight: search ? "3.25rem" : undefined }}
            />

            {search ? (
              <button
                type="button"
                className="button button-ghost"
                aria-label="Hapus pencarian"
                onClick={() => setSearch("")}
                style={{
                  position: "absolute",
                  right: 6,
                  top: "50%",
                  transform: "translateY(-50%)",
                  padding: "0.25rem 0.5rem",
                  borderRadius: 999,
                  fontSize: ".8rem",
                }}
              >
                Clear
              </button>
            ) : null}
          </div>

          <div className="vp-help">
            {loadingP ? "Mencari produk…" : "Tips: cari dengan nama atau SKU."}
          </div>

          {errP && <div className="help help--error">{errP}</div>}
        </div>

        <div>
          <label htmlFor="vp-product" className="mb-2" style={{ display: "block", fontWeight: 700 }}>
            Produk
          </label>
          <select
            id="vp-product"
            className="select"
            value={productId ?? ""}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              const next = e.target.value ? Number(e.target.value) : undefined;
              if (next === productId) return;
              setProductId(next);
              if (value !== undefined) onChange(undefined);
            }}
            disabled={loadingP}
            aria-label="Pilih Produk"
          >
            <option value="">{loadingP ? "Memuat produk…" : "Pilih produk…"}</option>
            {productOptions.map((p) => (
              <option key={p.id} value={p.id}>
                {p.nama}
              </option>
            ))}
          </select>
          <div className="vp-help">
            {productId ? "Produk terpilih, lanjut pilih varian." : "Pilih produk untuk memuat varian."}
          </div>
        </div>
      </div>

      {/* Divider halus */}
      <div style={{ height: 1, background: "rgba(0,0,0,0.06)", margin: "14px 0" }} />

      {/* Row 2: Variant */}
      <div className="vp-grid2">
        <div>
          <label htmlFor="vp-variant" className="mb-2" style={{ display: "block", fontWeight: 700 }}>
            Varian
          </label>
          <select
            id="vp-variant"
            className="select"
            value={value ?? ""}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              const next = e.target.value ? Number(e.target.value) : undefined;
              if (next === value) return;
              onChange(next);
            }}
            disabled={!productId || loadingV}
            aria-label="Pilih Varian"
          >
            <option value="">
              {!productId ? "Pilih produk dulu" : loadingV ? "Memuat varian…" : "Pilih varian…"}
            </option>
            {variantOptions.map((v) => (
              <option key={v.id} value={v.id}>
                {v.label}
              </option>
            ))}
          </select>

          <div className="vp-help">
            {!productId
              ? "Varian akan muncul setelah produk dipilih."
              : loadingV
              ? "Sedang memuat varian…"
              : variants.length
              ? "Pilih varian untuk menerapkan filter."
              : "Tidak ada varian untuk produk ini."}
          </div>

          {errV && <div className="help help--error">{errV}</div>}
        </div>
      </div>
    </div>
  );
}

export default React.memo(VariantPicker);

```
</details>

### src/components/users/RoleBadge.tsx

- SHA: `a80c4111a60a`  
- Ukuran: 976 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/users/RoleBadge.tsx
import React from "react";
import type { Role } from "../../types/user";

const LABEL: Record<Role, string> = {
  superadmin: "Superadmin",
  admin_cabang: "Admin Cabang",
  gudang: "Gudang",
  kasir: "Kasir",
  sales: "Sales",
  kurir: "Kurir",
};

// Mapping ke varian badge kecil yang sudah ada di index.css
const TONE: Record<Role, "badge-success" | "badge-warning" | "badge-danger"> = {
  superadmin: "badge-danger",     // aksen kuat (otoritas tertinggi)
  admin_cabang: "badge-success",  // status otorisasi OK
  gudang: "badge-warning",        // operasional/alert stok
  kasir: "badge-success",         // transaksi OK
  sales: "badge-success",         // target/closing
  kurir: "badge-warning",         // status antar/jemput
};

export default function RoleBadge({ role }: { role: Role }): React.ReactElement {
  return (
    <span className={`badge ${TONE[role]}`} title={LABEL[role]}>
      {LABEL[role]}
    </span>
  );
}

```
</details>

### src/components/users/UserFilters.tsx

- SHA: `00b4cdcfcf11`  
- Ukuran: 3 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import React from "react";
import type { Role } from "../../types/user";

type Props = {
  q: string;
  role: Role | "";
  cabangId: number | "";
  isActive: "" | "1" | "0";
  onChange: (next: Partial<{ q: string; role: Role | ""; cabangId: number | ""; isActive: "" | "1" | "0" }>) => void;
  onReset: () => void;
  onSearch: () => void;
};

export default function UserFilters(props: Props): React.ReactElement {
  return (
    <div className="form-row">
      {/* Keyword */}
      <div className="form-field">
        <label htmlFor="uf-q" className="form-label">Kata Kunci</label>
        <input
          id="uf-q"
          value={props.q}
          onChange={(e) => props.onChange({ q: e.target.value })}
          placeholder="Cari nama / email / phone…"
          className="input"
        />
      </div>

      {/* Role */}
      <div className="form-field">
        <label htmlFor="uf-role" className="form-label">Role</label>
        <select
          id="uf-role"
          value={props.role}
          onChange={(e) => props.onChange({ role: (e.target.value || "") as Role | "" })}
          className="select"
        >
          <option value="">Semua Role</option>
          <option value="superadmin">Superadmin</option>
          <option value="admin_cabang">Admin Cabang</option>
          <option value="gudang">Gudang</option>
          <option value="kasir">Kasir</option>
          <option value="sales">Sales</option>
          <option value="kurir">Kurir</option>
        </select>
      </div>

      {/* Cabang ID */}
      <div className="form-field">
        <label htmlFor="uf-cabang" className="form-label">Cabang ID</label>
        <input
          id="uf-cabang"
          type="number"
          min={1}
          value={props.cabangId}
          onChange={(e) => props.onChange({ cabangId: e.target.value === "" ? "" : Number(e.target.value) })}
          placeholder="Mis. 1"
          className="input"
        />
      </div>

      {/* Status */}
      <div className="form-field">
        <label htmlFor="uf-active" className="form-label">Status</label>
        <select
          id="uf-active"
          value={props.isActive}
          onChange={(e) => props.onChange({ isActive: e.target.value as "" | "1" | "0" })}
          className="select"
        >
          <option value="">Semua Status</option>
          <option value="1">Aktif</option>
          <option value="0">Nonaktif</option>
        </select>
      </div>

      {/* Actions */}
      <div className="form-actions" style={{ display: "flex", gap: 8 }}>
        <button onClick={props.onSearch} className="button button-primary">Cari</button>
        <button onClick={props.onReset} className="button button-outline">Reset</button>
      </div>
    </div>
  );
}

```
</details>

### src/components/users/UserFormDialog.tsx

- SHA: `e164d3a8fdf9`  
- Ukuran: 7 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import React, { useEffect, useState } from "react";
import type { Role, User } from "../../types/user";

type Form = {
  name: string;
  email: string;
  phone: string;
  password: string;
  cabang_id: string; // string agar mudah handle kosong
  role: Role;
  is_active: boolean;
};

type Props = {
  open: boolean;
  onClose: () => void;
  onSubmit: (
    payload: Omit<Form, "cabang_id" | "password"> & {
      cabang_id: number | null;
      password?: string;
    }
  ) => Promise<void>;
  editing?: User | null;
};

type SubmitPayload = {
  name: string;
  email: string;
  phone: string;
  cabang_id: number | null;
  role: Role;
  is_active: boolean;
  password?: string; // opsional saat edit
};

export default function UserFormDialog({ open, onClose, onSubmit, editing }: Props): React.ReactElement | null {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<Form>({
    name: "",
    email: "",
    phone: "",
    password: "",
    cabang_id: "",
    role: "kasir",
    is_active: true,
  });

  useEffect(() => {
    if (editing) {
      setForm({
        name: editing.name,
        email: editing.email,
        phone: editing.phone ?? "",
        password: "",
        cabang_id: editing.cabang_id ? String(editing.cabang_id) : "",
        role: editing.role,
        is_active: editing.is_active,
      });
    } else {
      setForm({
        name: "",
        email: "",
        phone: "",
        password: "",
        cabang_id: "",
        role: "kasir",
        is_active: true,
      });
    }
  }, [editing, open]);

  if (!open) return null;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const cab = form.cabang_id === "" ? null : Number(form.cabang_id);

      const payload: SubmitPayload = {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        cabang_id: cab,
        role: form.role,
        is_active: form.is_active,
      };

      if (form.password && form.password.trim().length > 0) {
        payload.password = form.password;
      }

      await onSubmit(payload);
      onClose();
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div
      // overlay sederhana (tanpa menambah index.css)
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        background: "rgba(0,0,0,.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
      role="dialog"
      aria-modal="true"
    >
      <div className="card" style={{ width: "100%", maxWidth: 640 }}>
        <div className="section" style={{ paddingBottom: 0 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.75rem" }}>
            <h3 style={{ margin: 0 }}>{editing ? "Edit User" : "Tambah User"}</h3>
            <button type="button" onClick={onClose} className="button">
              Tutup
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="section" style={{ paddingTop: "0.75rem" }}>
          {/* Grid form 2 kolom pada layar besar */}
          <div className="form-row form-row--2">
            <div className="form-field" style={{ gridColumn: "1 / -1" }}>
              <label>Nama</label>
              <input
                className="input"
                value={form.name}
                onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                required
              />
            </div>

            <div className="form-field">
              <label>Email</label>
              <input
                className="input"
                type="email"
                value={form.email}
                onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                required
              />
            </div>

            <div className="form-field">
              <label>Telepon</label>
              <input
                className="input"
                value={form.phone}
                onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))}
              />
            </div>

            <div className="form-field">
              <label>Role</label>
              <select
                className="select"
                value={form.role}
                onChange={(e) => setForm((s) => ({ ...s, role: e.target.value as Role }))}
              >
                <option value="superadmin">Superadmin</option>
                <option value="admin_cabang">Admin Cabang</option>
                <option value="gudang">Gudang</option>
                <option value="kasir">Kasir</option>
                <option value="sales">Sales</option>
                <option value="kurir">Kurir</option>
              </select>
            </div>

            <div className="form-field">
              <label>Cabang ID (opsional)</label>
              <input
                className="input"
                type="number"
                min={1}
                value={form.cabang_id}
                onChange={(e) => setForm((s) => ({ ...s, cabang_id: e.target.value }))}
              />
            </div>

            <div className="form-field">
              <label>Status</label>
              <select
                className="select"
                value={String(form.is_active)}
                onChange={(e) => setForm((s) => ({ ...s, is_active: e.target.value === "true" }))}
              >
                <option value="true">Aktif</option>
                <option value="false">Nonaktif</option>
              </select>
            </div>

            <div className="form-field" style={{ gridColumn: "1 / -1" }}>
              <label>{editing ? "Password (biarkan kosong jika tidak ganti)" : "Password"}</label>
              <input
                className="input"
                type="password"
                value={form.password}
                onChange={(e) => setForm((s) => ({ ...s, password: e.target.value }))}
                {...(editing ? {} : { required: true })}
                autoComplete="new-password"
              />
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end", gap: ".5rem", marginTop: ".5rem" }}>
            <button type="button" onClick={onClose} className="button">
              Batal
            </button>
            <button type="submit" disabled={submitting} className="button button-primary">
              {submitting ? "Menyimpan…" : "Simpan"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

```
</details>

### src/components/users/UserTable.tsx

- SHA: `4111fdb4f3cb`  
- Ukuran: 3 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import React from "react";
import type { Paginated } from "../../types/http";
import type { User } from "../../types/user";
import RoleBadge from "./RoleBadge";

type Props = {
  data: Paginated<User> | null;
  loading: boolean;
  onEdit: (u: User) => void;
  onDelete: (u: User) => void;
  page: number;
  onPage: (p: number) => void;
};

export default function UserTable(props: Props): React.ReactElement {
  if (props.loading) {
    return <div style={{ padding: "12px", opacity: 0.8, fontSize: "0.9rem" }}>Memuat data…</div>;
  }

  const empty = !props.data || props.data.data.length === 0;

  return (
    <div style={{ overflowX: "auto" }}>
      <table className="table">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Email</th>
            <th>Telepon</th>
            <th>Role</th>
            <th>Cabang</th>
            <th>Status</th>
            <th style={{ width: 150 }}>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {empty ? (
            <tr>
              <td colSpan={7} style={{ textAlign: "center", padding: "24px 12px", opacity: 0.7 }}>
                Belum ada data.
              </td>
            </tr>
          ) : (
            props.data!.data.map((u) => (
              <tr key={u.id}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.phone ?? "-"}</td>
                <td><RoleBadge role={u.role} /></td>
                <td>{u.cabang_id ?? "-"}</td>
                <td>
                  <span className={`badge ${u.is_active ? "badge-success" : "badge-danger"}`}>
                    {u.is_active ? "Aktif" : "Nonaktif"}
                  </span>
                </td>
                <td>
                  <div style={{ display: "flex", gap: 8 }}>
                    <button onClick={() => props.onEdit(u)} className="button">Edit</button>
                    <button onClick={() => props.onDelete(u)} className="button button-outline">Hapus</button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Pagination */}
      {props.data && props.data.meta.last_page > 1 && (
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 12px",
          borderTop: "1px solid var(--border-color, #e5e7eb)"
        }}>
          <div>
            <small>Hal {props.data.meta.current_page} / {props.data.meta.last_page}</small>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button
              disabled={props.page <= 1}
              onClick={() => props.onPage(props.page - 1)}
              className="button button-outline"
            >
              Sebelumnya
            </button>
            <button
              disabled={props.page >= props.data.meta.last_page}
              onClick={() => props.onPage(props.page + 1)}
              className="button button-outline"
            >
              Berikutnya
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

```
</details>

### src/components/warehouses/WarehouseFilters.tsx

- SHA: `cd47cfecba39`  
- Ukuran: 5 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/warehouses/WarehouseFilters.tsx
import React, { useEffect, useMemo, useState } from "react";
import type { WarehouseQuery } from "../../types/warehouse";
import { listBranches } from "../../api/branches";
import { useAuth } from "../../store/auth";

type Props = {
  value: WarehouseQuery;
  onChange: (next: WarehouseQuery) => void;
  onSearch: () => void;
};

export default function WarehouseFilters({
  value,
  onChange,
  onSearch,
}: Props): React.ReactElement {
  const { user } = useAuth();

  const [cabs, setCabs] = useState<{ id: number; nama: string }[]>([]);
  const [loadingCabang, setLoadingCabang] = useState(false);

  useEffect(() => {
    let mounted = true;

    void (async () => {
      setLoadingCabang(true);
      try {
        const res = await listBranches({ is_active: true, per_page: 100 });
        if (!mounted) return;
        setCabs(res.data.map((b) => ({ id: b.id, nama: b.nama })));
      } finally {
        if (mounted) setLoadingCabang(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  const lockCabang = user?.role === "admin_cabang" && user.cabang_id;
  const cabangValue = useMemo(() => {
    if (lockCabang) return String(lockCabang);
    return String(value.cabang_id ?? "");
  }, [lockCabang, value.cabang_id]);

  return (
    <div>
      {/* Grid utama filter */}
      <div
        className="form-row form-row--3"
        style={{
          alignItems: "end",
          gap: 12,
        }}
      >
        {/* Cari */}
        <div className="form-field" style={{ minWidth: 220 }}>
          <label className="form-label" htmlFor="wh-q">
            Cari
          </label>
          <input
            id="wh-q"
            className="input"
            value={value.q ?? ""}
            onChange={(e) =>
              onChange({
                ...value,
                q: e.target.value,
                page: 1,
              })
            }
            placeholder="Cari nama gudang…"
            autoComplete="off"
          />
        </div>

        {/* Cabang */}
        <div className="form-field" style={{ minWidth: 220 }}>
          <label className="form-label" htmlFor="wh-cabang">
            Cabang
          </label>

          <select
            id="wh-cabang"
            className="select"
            value={cabangValue}
            onChange={(e) =>
              onChange({
                ...value,
                cabang_id: e.target.value ? Number(e.target.value) : undefined,
                page: 1,
              })
            }
            disabled={Boolean(lockCabang) || loadingCabang}
            aria-busy={loadingCabang ? "true" : "false"}
          >
            {!lockCabang && (
              <option value="">
                {loadingCabang ? "Memuat cabang…" : "Semua Cabang"}
              </option>
            )}

            {cabs.map((c) => (
              <option key={c.id} value={c.id}>
                {c.nama}
              </option>
            ))}
          </select>

          {lockCabang && (
            <div className="muted" style={{ marginTop: 6, fontSize: ".85rem" }}>
              Cabang dikunci sesuai akun admin cabang.
            </div>
          )}
        </div>

        {/* Aksi */}
        <div
          className="form-field"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          {/* Toggle aktif */}
          <label
            htmlFor="wh-active"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            <input
              id="wh-active"
              type="checkbox"
              checked={Boolean(value.is_active)}
              onChange={(e) =>
                onChange({
                  ...value,
                  is_active: e.target.checked ? true : undefined,
                  page: 1,
                })
              }
            />
            <span className="muted">Hanya aktif</span>
          </label>

          {/* Tombol aksi: Terapkan + Reset */}
          <div style={{ display: "flex", gap: 8, marginLeft: "auto" }}>
            <button
              type="button"
              className="button button-outline"
              onClick={() =>
                onChange({
                  ...value,
                  q: "",
                  cabang_id: lockCabang ? Number(lockCabang) : undefined,
                  is_active: undefined,
                  page: 1,
                })
              }
              title="Reset filter"
            >
              Reset
            </button>

            <button
              type="button"
              className="button button-primary"
              onClick={onSearch}
              title="Terapkan filter"
            >
              Terapkan
            </button>
          </div>
        </div>
      </div>

      {/* Catatan kecil (optional, tapi bikin tampilan lebih “premium”) */}
      <div className="muted" style={{ marginTop: 10, fontSize: ".85rem" }}>
        Tips: ketik kata kunci lalu klik <b>Terapkan</b>.
      </div>

      {/* Responsif: rapikan agar tidak "maksa 3 kolom" di layar kecil */}
      <style>
        {`
          @media (max-width: 900px) {
            .form-row.form-row--3 {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </div>
  );
}

```
</details>

### src/components/warehouses/WarehouseFormDialog.tsx

- SHA: `d058ab4f052c`  
- Ukuran: 10 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/warehouses/WarehouseFormDialog.tsx
import React, { useEffect, useMemo, useState } from "react";
import type { Warehouse, WarehouseCreatePayload } from "../../types/warehouse";
import { useAuth } from "../../store/auth";
import { listBranches } from "../../api/branches";

type Props = {
  open: boolean;
  initial?: Warehouse | null;
  defaultCabangId?: number;
  onClose: () => void;
  onSubmit: (payload: WarehouseCreatePayload) => Promise<boolean>;
};

export default function WarehouseFormDialog({
  open,
  initial,
  defaultCabangId,
  onClose,
  onSubmit,
}: Props): React.ReactElement | null {
  const { user } = useAuth();
  const lockCabang = user?.role === "admin_cabang" && user.cabang_id;

  const [form, setForm] = useState<WarehouseCreatePayload>({
    cabang_id: defaultCabangId ?? 0,
    nama: "",
    is_default: false,
    is_active: true,
  });

  const [cabangs, setCabangs] = useState<{ id: number; nama: string }[]>([]);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const title = useMemo(() => (initial ? "Edit Gudang" : "Tambah Gudang"), [initial]);

  // Load cabang saat dialog dibuka
  useEffect(() => {
    if (!open) return;
    void (async () => {
      const res = await listBranches({ is_active: true, per_page: 100 });
      setCabangs(res.data.map((b) => ({ id: b.id, nama: b.nama })));
    })();
  }, [open]);

  // Set preferensi cabang saat tambah (bukan edit)
  useEffect(() => {
    if (!open || initial) return;
    const prefer = (lockCabang as number) ?? (defaultCabangId ?? 0);
    setForm((s) => ({ ...s, cabang_id: prefer }));
  }, [open, initial, lockCabang, defaultCabangId]);

  // Isi form saat edit
  useEffect(() => {
    if (!open || !initial) return;
    setForm({
      cabang_id: initial.cabang_id,
      nama: initial.nama,
      is_default: Boolean(initial.is_default),
      is_active: Boolean(initial.is_active),
    });
  }, [open, initial]);

  // UX modal: lock scroll + ESC close
  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  const submit = async () => {
    setSaving(true);
    setError(null);

    if (!form.cabang_id) {
      setError("Cabang harus diisi.");
      setSaving(false);
      return;
    }
    if (!form.nama?.trim()) {
      setError("Nama gudang harus diisi.");
      setSaving(false);
      return;
    }

    const ok = await onSubmit({
      ...form,
      nama: form.nama.trim(),
    });

    setSaving(false);

    if (ok) onClose();
    else setError("Gagal menyimpan. Cek input.");
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="warehouse-dialog-title"
      onMouseDown={(e) => {
        // klik backdrop untuk tutup (tanpa ganggu klik di dalam card)
        if (e.target === e.currentTarget) onClose();
      }}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.45)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        zIndex: 50,
      }}
    >
      <div
        className="card"
        style={{
          width: "100%",
          maxWidth: 720,
          borderRadius: 18,
          overflow: "hidden",
        }}
        onMouseDown={(e) => {
          // cegah backdrop handler ikut kepanggil ketika klik di dalam
          e.stopPropagation();
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 12,
            padding: "16px 18px",
            borderBottom: "1px solid rgba(0,0,0,.06)",
          }}
        >
          <div style={{ minWidth: 0 }}>
            <h3
              id="warehouse-dialog-title"
              className="card-title"
              style={{ margin: 0, lineHeight: 1.2 }}
            >
              {title}
            </h3>
            <div className="muted" style={{ marginTop: 6, fontSize: ".9rem" }}>
              Isi data gudang dengan benar. Cabang dapat terkunci sesuai role.
            </div>
          </div>

          <button
            type="button"
            className="button button-ghost"
            onClick={onClose}
            disabled={saving}
            aria-label="Tutup"
            title="Tutup"
            style={{
              padding: "0.35rem 0.6rem",
              borderRadius: 12,
              lineHeight: 1,
            }}
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: "16px 18px" }}>
          <div className="form-row form-row--2" style={{ gap: 14 }}>
            <div>
              <label className="label">Cabang</label>
              <select
                className="select"
                value={form.cabang_id || ""}
                onChange={(e) =>
                  setForm({ ...form, cabang_id: Number(e.target.value) })
                }
                disabled={Boolean(lockCabang)}
                aria-disabled={Boolean(lockCabang)}
              >
                <option value="" disabled>
                  Pilih Cabang
                </option>
                {cabangs.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.nama}
                  </option>
                ))}
              </select>
              {Boolean(lockCabang) && (
                <div className="muted" style={{ marginTop: 6, fontSize: ".85rem" }}>
                  Cabang dikunci oleh role Anda.
                </div>
              )}
            </div>

            <div>
              <label className="label">Nama Gudang</label>
              <input
                className="input"
                placeholder="Contoh: Gudang Utama"
                value={form.nama}
                onChange={(e) => setForm({ ...form, nama: e.target.value })}
              />
            </div>

            {/* Switch-style rows */}
            <div
              style={{
                gridColumn: "1 / -1",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
              }}
            >
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 10,
                  padding: "10px 12px",
                  border: "1px solid rgba(0,0,0,.08)",
                  borderRadius: 14,
                  background: "rgba(0,0,0,.02)",
                }}
              >
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontWeight: 700, lineHeight: 1.2 }}>Default</div>
                  <div className="muted" style={{ fontSize: ".85rem", marginTop: 4 }}>
                    Jadikan gudang default untuk cabang terpilih.
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={Boolean(form.is_default)}
                  onChange={(e) => setForm({ ...form, is_default: e.target.checked })}
                />
              </label>

              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 10,
                  padding: "10px 12px",
                  border: "1px solid rgba(0,0,0,.08)",
                  borderRadius: 14,
                  background: "rgba(0,0,0,.02)",
                }}
              >
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontWeight: 700, lineHeight: 1.2 }}>Aktif</div>
                  <div className="muted" style={{ fontSize: ".85rem", marginTop: 4 }}>
                    Nonaktifkan jika gudang tidak digunakan.
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={Boolean(form.is_active)}
                  onChange={(e) => setForm({ ...form, is_active: e.target.checked })}
                />
              </label>
            </div>
          </div>

          {/* Error */}
          {error && (
            <div
              style={{
                marginTop: 12,
                display: "flex",
                alignItems: "flex-start",
                gap: 8,
              }}
              role="alert"
            >
              <span className="badge badge-danger">Error</span>
              <div style={{ lineHeight: 1.4 }}>{error}</div>
            </div>
          )}
        </div>

        {/* Footer actions */}
        <div
          style={{
            padding: "14px 18px",
            borderTop: "1px solid rgba(0,0,0,.06)",
            display: "flex",
            justifyContent: "flex-end",
            gap: 8,
            flexWrap: "wrap",
          }}
        >
          <button className="button button-outline" onClick={onClose} disabled={saving}>
            Batal
          </button>
          <button className="button button-primary" onClick={submit} disabled={saving}>
            {saving ? "Menyimpan..." : "Simpan"}
          </button>
        </div>

        {/* Responsif: pada layar kecil, kartu checkbox jadi 1 kolom */}
        <style>
          {`
            @media (max-width: 640px) {
              [role="dialog"] .card div[style*="grid-template-columns: 1fr 1fr"] {
                grid-template-columns: 1fr !important;
              }
            }
          `}
        </style>
      </div>
    </div>
  );
}

```
</details>

### src/components/warehouses/WarehouseTable.tsx

- SHA: `2a5bc7d66697`  
- Ukuran: 4 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/components/warehouses/WarehouseTable.tsx
import React from "react";
import type { Warehouse } from "../../types/warehouse";

type Props = {
  items: Warehouse[];
  onEdit: (row: Warehouse) => void;
  onDelete: (row: Warehouse) => void;
};

export default function WarehouseTable({
  items,
  onEdit,
  onDelete,
}: Props): React.ReactElement {
  return (
    <div style={{ overflowX: "auto" }}>
      <table className="table" style={{ minWidth: 860 }}>
        <thead>
          <tr>
            <th style={{ width: 80 }}>ID</th>
            <th style={{ width: 220 }}>Cabang</th>
            <th>Gudang</th>
            <th style={{ width: 120, textAlign: "center" }}>Default</th>
            <th style={{ width: 120, textAlign: "center" }}>Status</th>
            <th style={{ width: 190 }}>Aksi</th>
          </tr>
        </thead>

        <tbody>
          {items.map((r) => {
            const cabangLabel = r.cabang?.nama ?? `Cabang #${r.cabang_id}`;
            return (
              <tr key={r.id}>
                <td style={{ whiteSpace: "nowrap" }}>{r.id}</td>

                <td style={{ minWidth: 200 }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <span style={{ fontWeight: 600 }}>{cabangLabel}</span>
                    <span className="muted" style={{ fontSize: ".85rem" }}>
                      ID Cabang: {r.cabang_id}
                    </span>
                  </div>
                </td>

                <td>
                  <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <span style={{ fontWeight: 700 }}>{r.nama}</span>
                    <span className="muted" style={{ fontSize: ".85rem" }}>
                      Gudang penyimpanan stok
                    </span>
                  </div>
                </td>

                <td style={{ textAlign: "center" }}>
                  {r.is_default ? (
                    <span className="badge badge-success">Default</span>
                  ) : (
                    <span className="badge">—</span>
                  )}
                </td>

                <td style={{ textAlign: "center" }}>
                  {r.is_active ? (
                    <span className="badge badge-success">Aktif</span>
                  ) : (
                    <span className="badge badge-danger">Nonaktif</span>
                  )}
                </td>

                <td>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <button
                      className="button button-outline"
                      type="button"
                      onClick={() => onEdit(r)}
                      style={{ padding: ".45rem .7rem" }}
                    >
                      Edit
                    </button>

                    <button
                      className="button button-outline"
                      type="button"
                      onClick={() => onDelete(r)}
                      style={{
                        padding: ".45rem .7rem",
                        borderColor: "rgba(239,68,68,.45)",
                        color: "rgb(239,68,68)",
                      }}
                    >
                      Hapus
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}

          {items.length === 0 && (
            <tr>
              <td colSpan={6} style={{ textAlign: "center", padding: "1.25rem" }}>
                <div style={{ display: "grid", gap: 6 }}>
                  <span style={{ fontWeight: 700 }}>Belum ada data gudang</span>
                  <span className="muted" style={{ fontSize: ".9rem" }}>
                    Silakan klik tombol <b>Tambah</b> untuk membuat gudang baru.
                  </span>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

```
</details>



## Pages (src/pages)

### src/pages/accounting/AccountingAccountsIndex.tsx

- SHA: `6426c65ada9e`  
- Ukuran: 8 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// AccountingAccountsIndex.tsx
import { useState } from "react";
import AccountTable from "../../components/accounting/AccountTable";
import type { Account, AccountCreatePayload } from "../../types/accounting";
import { createAccount, updateAccount, deleteAccount } from "../../api/accounting";
import { useAuth } from "../../store/auth";

export default function AccountingAccountsIndex() {
  const { hasRole } = useAuth();
  const canWrite = hasRole("superadmin", "admin_cabang");

  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<Account | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(payload: AccountCreatePayload) {
    try {
      setErr(null);
      if (editing) {
        await updateAccount(editing.id, payload);
      } else {
        await createAccount(payload);
      }
      setDialogOpen(false);
      setEditing(null);
      setToast("Akun tersimpan.");
    } catch {
      setErr("Gagal menyimpan akun (cek 422/403).");
    }
  }

  async function onDelete(a: Account) {
    if (!confirm(`Hapus akun ${a.code} - ${a.name}?`)) return;
    try {
      await deleteAccount(a.id);
      setToast("Akun dihapus.");
    } catch {
      setErr("Gagal menghapus akun.");
    }
  }

  return (
    <div>
      {/* Header */}
      <div className="card" style={{ marginBottom: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <h1 style={{ margin: 0, fontSize: "1.125rem", fontWeight: 700 }}>Chart of Accounts</h1>
          <div style={{ marginLeft: "auto" }} />
          <button
            className="button button-primary"
            onClick={() => { setEditing(null); setDialogOpen(true); }}
            disabled={!canWrite}
            aria-disabled={!canWrite}
            title={canWrite ? "Tambah akun" : "Hanya-baca"}
          >
            Akun Baru
          </button>
        </div>
      </div>

      {/* Toasts */}
      {toast && (
        <div
          className="toast"
          style={{ marginBottom: 12, borderLeftColor: "var(--color-success)" }}
          role="status"
        >
          {toast}
        </div>
      )}
      {err && (
        <div
          className="toast"
          style={{ marginBottom: 12, borderLeftColor: "var(--color-danger)" }}
          role="alert"
        >
          {err}
        </div>
      )}

      {/* Tabel akun */}
      <div className="card" style={{ marginBottom: 12 }}>
        <AccountTable
          onEdit={(a) => { if (!canWrite) return; setEditing(a); setDialogOpen(true); }}
          onDelete={onDelete}
        />
      </div>

      {/* Dialog (popup) */}
      {dialogOpen && (
        <Dialog onClose={() => setDialogOpen(false)} title={editing ? "Edit Akun" : "Akun Baru"}>
          <AccountFormMini
            initial={{
              cabang_id: editing?.cabang_id ?? null,
              code: editing?.code ?? "",
              name: editing?.name ?? "",
              type: editing?.type ?? "Asset",
              normal_balance: editing?.normal_balance ?? "DEBIT",
              parent_id: editing?.parent_id ?? null,
              is_active: editing?.is_active ?? true,
            }}
            onCancel={() => setDialogOpen(false)}
            onSave={onSubmit}
          />
        </Dialog>
      )}
    </div>
  );
}

/** Dialog popup — tanpa menambah class baru di index.css;
 *  backdrop & posisi pakai inline style minimal, konten tetap .card agar konsisten.
 */
function Dialog(props: { title: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={props.title}
      onClick={(e) => {
        // klik backdrop menutup dialog
        if (e.target === e.currentTarget) props.onClose();
      }}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.35)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        zIndex: 50,
      }}
    >
      <div
        className="card"
        style={{
          width: "min(560px, 92vw)",
          maxHeight: "86vh",
          overflow: "auto",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
          <div style={{ fontWeight: 700, fontSize: "1rem" }}>{props.title}</div>
          <div style={{ marginLeft: "auto" }} />
          <button className="button" onClick={props.onClose} aria-label="Tutup dialog">
            Tutup
          </button>
        </div>
        {props.children}
      </div>
    </div>
  );
}

function AccountFormMini(props: {
  initial: AccountCreatePayload & { parent_id: number | null; normal_balance: "DEBIT" | "CREDIT" };
  onSave: (p: AccountCreatePayload) => void;
  onCancel: () => void;
}) {
  const [form, setForm] = useState(props.initial);

  return (
    <form onSubmit={(e) => { e.preventDefault(); props.onSave(form); }}>
      {/* Grid form 2 kolom (class ada di index.css) */}
      <div className="form-row form-row--2">
        <div>
          <label style={{ display: "block", fontWeight: 600, marginBottom: 6 }}>Kode</label>
          <input
            className="input"
            placeholder="Kode"
            value={form.code}
            onChange={(e) => setForm({ ...form, code: e.target.value })}
            required
          />
        </div>

        <div>
          <label style={{ display: "block", fontWeight: 600, marginBottom: 6 }}>Nama</label>
          <input
            className="input"
            placeholder="Nama"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>

        <div>
          <label style={{ display: "block", fontWeight: 600, marginBottom: 6 }}>Tipe Akun</label>
          <select
            className="select"
            value={form.type}
            onChange={(e) => setForm({ ...form, type: e.target.value as typeof form.type })}
          >
            <option>Asset</option>
            <option>Liability</option>
            <option>Equity</option>
            <option>Revenue</option>
            <option>Expense</option>
          </select>
        </div>

        <div>
          <label style={{ display: "block", fontWeight: 600, marginBottom: 6 }}>Normal Balance</label>
          <select
            className="select"
            value={form.normal_balance}
            onChange={(e) => setForm({ ...form, normal_balance: e.target.value as typeof form.normal_balance })}
          >
            <option>DEBIT</option>
            <option>CREDIT</option>
          </select>
        </div>

        <div>
          <label style={{ display: "block", fontWeight: 600, marginBottom: 6 }}>Cabang ID (opsional)</label>
          <input
            className="input"
            placeholder="Kosongkan jika global"
            value={form.cabang_id ?? ""}
            onChange={(e) =>
              setForm({
                ...form,
                cabang_id: e.target.value === "" ? null : Number(e.target.value),
              })
            }
            type="number"
            min={1}
          />
        </div>

        <div>
          <label style={{ display: "block", fontWeight: 600, marginBottom: 6 }}>Parent ID (opsional)</label>
          <input
            className="input"
            placeholder="Parent ID"
            value={form.parent_id ?? ""}
            onChange={(e) => setForm({ ...form, parent_id: e.target.value ? Number(e.target.value) : null })}
            type="number"
            min={0}
          />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <input
            id="is_active"
            type="checkbox"
            checked={form.is_active}
            onChange={(e) => setForm({ ...form, is_active: e.target.checked })}
          />
          <label htmlFor="is_active" style={{ fontWeight: 600 }}>Aktif</label>
        </div>
      </div>

      <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
        <button type="submit" className="button button-primary">Simpan</button>
        <button type="button" className="button" onClick={props.onCancel}>Batal</button>
      </div>
    </form>
  );
}

```
</details>

### src/pages/accounting/AccountingJournalsIndex.tsx

- SHA: `bf7fffd2e60f`  
- Ukuran: 14 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/pages/accounting/AccountingJournalsIndex.tsx
import { useEffect, useState, useCallback } from "react";
import type { JournalEntry, JournalLine } from "../../types/accounting";
import { listJournals, createJournal, postJournal, listAccounts } from "../../api/accounting";
import { useAuth } from "../../store/auth";
import JournalEditor from "../../components/accounting/JournalEditor";

export default function AccountingJournalsIndex() {
  const { hasRole, user } = useAuth();
  const canWrite = hasRole("superadmin", "admin_cabang");

  const getCabangId = useCallback((): number => {
    if (!user) return 0;
    // di project Anda, field yang valid adalah cabang_id (lihat types/user.ts)
    const raw = (user as unknown as { cabang_id?: number | string }).cabang_id;
    const n = typeof raw === "string" ? Number(raw) : raw;
    return Number.isFinite(n) && Number(n) > 0 ? Number(n) : 0;
  }, [user]);

  const [tab, setTab] = useState<"DRAFT" | "POSTED">("DRAFT");
  const [rows, setRows] = useState<JournalEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  // === NEW: state untuk POST ALL ===
  const [postingAll, setPostingAll] = useState(false);
  const [postAllDone, setPostAllDone] = useState(0);
  const [postAllTotal, setPostAllTotal] = useState(0);

  const [editorOpen, setEditorOpen] = useState(false);
  const [lines, setLines] = useState<JournalLine[]>([]);
  const [accounts, setAccounts] = useState<{ id: number; code: string; name: string }[]>([]);
  const [journalNumber, setJournalNumber] = useState<string>("");
  const [journalNumberOptions, setJournalNumberOptions] = useState<string[]>([]);

  useEffect(() => {
    if (!editorOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setEditorOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [editorOpen]);

  useEffect(() => {
    if (!editorOpen) return;

    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    const base = `JRNL-${y}${m}${day}`;
    const options = Array.from({ length: 10 }, (_, i) => `${base}-${String(i + 1).padStart(4, "0")}`);

    setJournalNumber(options[0]);
    setJournalNumberOptions(options);
  }, [editorOpen]);


  // helper refresh (biar tidak duplikasi panggilan list)
  const refresh = useCallback(async () => {
    const cid = getCabangId();
    const j = await listJournals({ cabang_id: cid, status: tab, page: 1, per_page: 10 });
    setRows(j.data);
  }, [getCabangId, tab]);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setErr(null);
        const cid = getCabangId();
        const [j, a] = await Promise.all([
          listJournals({ cabang_id: cid, status: tab, page: 1, per_page: 10 }),
          (async () => {
            const res = await listAccounts({
              per_page: 500,
              ...(cid ? { cabang_id: cid } : {}), // kalau cid = 0, jangan kirim cabang_id
            });
            return res.data.map((x) => ({ id: x.id, code: x.code, name: x.name }));
          })(),
        ]);
        setRows(j.data);
        const sorted = a.slice().sort((x, y) => (x.code || "").localeCompare(y.code || ""));
        setAccounts(sorted);
      } catch {
        setErr("Gagal memuat jurnal.");
      } finally {
        setLoading(false);
      }
    })();
  }, [tab, getCabangId]);

  function onCreate() {
    setEditorOpen(true);
    setLines([
      {
        account_id: 0,
        cabang_id: getCabangId(),
        debit: 0,
        credit: 0,
        ref_type: null,
        ref_id: null,
      },
    ]);
  }

  async function onSave(date: string, number: string, description?: string | null) {
    try {
      const cid = getCabangId();
      await createJournal({
        cabang_id: cid,
        journal_date: date,
        number,
        description: description ?? null,
        lines: (lines ?? []).map((l) => ({ ...l, cabang_id: cid })),
      });
      setEditorOpen(false);
      setLines([]);
      await refresh();
    } catch {
      setErr("Gagal menyimpan jurnal (cek 422/403/409).");
    }
  }

  async function onPost(id: number) {
    if (!confirm("Post jurnal ini? Setelah POSTED, tidak bisa diubah.")) return;
    try {
      await postJournal(id);
      await refresh();
    } catch {
      setErr("Gagal POST jurnal (cek 409 period closed atau unbalanced).");
    }
  }

  // === NEW: POST SEMUA (ambil semua DRAFT by paging, lalu post satu per satu) ===
  async function onPostAll() {
    if (!canWrite) return;
    const cid = getCabangId();
    if (!cid) {
      setErr("Cabang tidak terdeteksi. Login ulang atau cek data user.");
      return;
    }

    const ok = confirm(
      "POST semua jurnal DRAFT untuk cabang ini?\n\nCatatan: Setelah POSTED, jurnal tidak bisa diubah."
    );
    if (!ok) return;

    setPostingAll(true);
    setErr(null);
    setPostAllDone(0);
    setPostAllTotal(0);

    const failed: Array<{ id: number; reason: string }> = [];

    try {
      // 1) kumpulkan semua id DRAFT via paging
      const ids: number[] = [];
      let page = 1;
      let lastPage = 1;

      do {
        const res = await listJournals({ cabang_id: cid, status: "DRAFT", page, per_page: 20 });
        ids.push(...res.data.map((x) => x.id));
        lastPage = res.meta?.last_page ?? 1;
        page += 1;
      } while (page <= lastPage);

      if (ids.length === 0) {
        setErr("Tidak ada jurnal DRAFT yang bisa di-post.");
        return;
      }

      setPostAllTotal(ids.length);

      // 2) post satu per satu (lebih aman untuk menangani error per item)
      for (let i = 0; i < ids.length; i++) {
        const id = ids[i];
        try {
          await postJournal(id);
        } catch {
          failed.push({ id, reason: "Gagal POST (periode closed / unbalanced / unauthorized / konflik)." });
        } finally {
          setPostAllDone(i + 1);
        }
      }

      // 3) refresh tab DRAFT agar terlihat berkurang/habis
      await refresh();

      // 4) ringkasan
      if (failed.length > 0) {
        const sample = failed.slice(0, 8).map((x) => `#${x.id}`).join(", ");
        setErr(
          `POST semua selesai, tetapi ada yang gagal: ${failed.length} dari ${ids.length}. ` +
          `Contoh ID gagal: ${sample}${failed.length > 8 ? ", ..." : ""}`
        );
      }
    } finally {
      setPostingAll(false);
    }
  }

  const renderStatus = (s: "DRAFT" | "POSTED") => (
    <span className={`badge ${s === "POSTED" ? "badge-success" : "badge-warning"}`}>{s}</span>
  );

  if (loading) {
    return (
      <div className="card">
        <div className="card__body">Loading…</div>
      </div>
    );
  }
  if (err) {
    return <div className="alert alert-danger">{err}</div>;
  }

  return (
    <div>
      {/* Header & actions */}
      <div className="card" style={{ marginBottom: 12 }}>
        <div className="card__body">
          <div className="toolbar">
            <h1 className="page-title">Jurnal</h1>
            <div className="toolbar__spacer" />
            <div className="btn-group">
              <button
                className={`button ${tab === "DRAFT" ? "button-primary" : "button-outline"}`}
                onClick={() => setTab("DRAFT")}
                disabled={postingAll}
                aria-disabled={postingAll}
              >
                DRAFT
              </button>
              <button
                className={`button ${tab === "POSTED" ? "button-primary" : "button-outline"}`}
                onClick={() => setTab("POSTED")}
                disabled={postingAll}
                aria-disabled={postingAll}
              >
                POSTED
              </button>

              {/* NEW: Tombol POST SEMUA hanya saat tab DRAFT */}
              {tab === "DRAFT" && (
                <button
                  className="button button-outline"
                  onClick={onPostAll}
                  disabled={!canWrite || postingAll || accounts.length === 0}
                  aria-disabled={!canWrite || postingAll || accounts.length === 0}
                  title={!canWrite ? "Tidak punya akses" : "Post semua jurnal DRAFT"}
                >
                  {postingAll ? `POSTING… (${postAllDone}/${postAllTotal || "?"})` : "POST SEMUA"}
                </button>
              )}

              <button
                className="button button-primary"
                onClick={onCreate}
                disabled={!canWrite || postingAll}
                aria-disabled={!canWrite || postingAll}
              >
                Jurnal Baru
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="card" style={{ marginBottom: 12 }}>
        <div className="card__body" style={{ padding: 0 }}>
          <table className="table">
            <thead>
              <tr>
                <th style={{ width: 140 }}>Tanggal</th>
                <th>Nomor</th>
                <th>Deskripsi</th>
                <th style={{ width: 120, textAlign: "center" }}>Status</th>
                <th style={{ width: 120 }} />
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id}>
                  <td>{r.journal_date}</td>
                  <td>{r.number}</td>
                  <td>{r.description ?? "—"}</td>
                  <td style={{ textAlign: "center" }}>{renderStatus(r.status)}</td>
                  <td style={{ textAlign: "right" }}>
                    {r.status === "DRAFT" && (
                      <button
                        className="button button-outline"
                        onClick={() => onPost(r.id)}
                        disabled={!canWrite || postingAll}
                        aria-disabled={!canWrite || postingAll}
                      >
                        POST
                      </button>
                    )}
                  </td>
                </tr>
              ))}
              {rows.length === 0 && (
                <tr>
                  <td colSpan={5} style={{ textAlign: "center", padding: "28px 12px", color: "var(--muted-foreground)" }}>
                    Tidak ada data.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Popup (Modal) - Jurnal Baru */}
      {editorOpen && (
        <div
          className="modal-overlay"
          onMouseDown={(e) => {
            // klik backdrop => tutup
            if (e.target === e.currentTarget) setEditorOpen(false);
          }}
        >
          <div
            className="modal card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="journal-dialog-title"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2 className="modal-title" id="journal-dialog-title">
                Jurnal Baru
              </h2>

              <button
                className="button button-ghost"
                type="button"
                onClick={() => setEditorOpen(false)}
              >
                Tutup
              </button>
            </div>

            <div className="card__body">
              <div className="form-row form-row--3" style={{ marginBottom: 12 }}>
                <div className="form-field">
                  <label className="form-label" htmlFor="je-date">Tanggal</label>
                  <input
                    type="date"
                    className="input"
                    id="je-date"
                    defaultValue={new Date().toISOString().slice(0, 10)}
                  />
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="je-number">Nomor</label>

                  <select
                    id="je-number"
                    className="input"
                    value={journalNumber}
                    onChange={(e) => setJournalNumber(e.target.value)}
                  >
                    {journalNumberOptions.map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>

                  <div className="help-text" style={{ marginTop: 6 }}>
                    Pilih nomor jurnal dari daftar (format konsisten).
                  </div>
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="je-desc">Deskripsi</label>
                  <input type="text" className="input" id="je-desc" placeholder="Deskripsi (opsional)" />
                </div>
              </div>

              {accounts.length === 0 && (
                <div className="alert alert-danger" style={{ marginBottom: 12 }}>
                  COA/Akun belum termuat. Pastikan user memiliki <b>cabang_id</b> yang valid dan data akun tersedia.
                </div>
              )}

              <JournalEditor lines={lines} onChange={setLines} accounts={accounts} />
            </div>

            <div className="modal-actions">
              <button
                className="button button-primary"
                type="button"
                onClick={() =>
                  onSave(
                    (document.getElementById("je-date") as HTMLInputElement).value,
                    journalNumber,
                    (document.getElementById("je-desc") as HTMLInputElement).value || null
                  )
                }
              >
                Simpan
              </button>

              <button className="button" type="button" onClick={() => setEditorOpen(false)}>
                Batal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

```
</details>

### src/pages/accounting/AccountingReports.tsx

- SHA: `351c11145fca`  
- Ukuran: 13 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/pages/accounting/AccountingReports.tsx
import { useEffect, useState, useCallback } from "react";
import { getTrialBalance, getGeneralLedger, getProfitLoss, getBalanceSheet } from "../../api/accounting";
import type { TrialBalanceRow, GLRow, ID } from "../../types/accounting";
import type { BalanceSheetAgg, ProfitLossAgg } from "../../types/accounting";
import { useAuth } from "../../store/auth";

export default function AccountingReports() {
  const { user } = useAuth();
  const [tab, setTab] = useState<"TB" | "GL" | "PL" | "BS">("TB");

  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [month, setMonth] = useState<number>(new Date().getMonth() + 1);
  const [accountId, setAccountId] = useState<ID | null>(null);

  const [tb, setTb] = useState<TrialBalanceRow[] | null>(null);
  const [gl, setGl] = useState<GLRow[] | null>(null);
  const [pl, setPl] = useState<ProfitLossAgg | null>(null);
  const [bs, setBs] = useState<BalanceSheetAgg | null>(null);
  const [error, setError] = useState<string | null>(null);

  // formatter uang (tanpa koma desimal, konsisten dengan style id-ID)
  const fmt = useCallback((n: number) => {
    const num = Number.isFinite(n) ? n : Number(n) || 0;
    return new Intl.NumberFormat("id-ID", { maximumFractionDigits: 0 }).format(num);
  }, []);

  // Ambil cabang_id toleran berbagai shape user
  const getCabangId = useCallback((): number => {
    if (!user) return 0;
    // @ts-expect-error: toleransi variasi field cabang
    const maybe = user.branch_id ?? user.branchId ?? user.cabang_id ?? user.cabangId ?? (user)?.branch?.id;
    return typeof maybe === "number" && Number.isFinite(maybe) ? maybe : 0;
  }, [user]);

  const refresh = useCallback(async () => {
    const cabang_id = getCabangId();
    setError(null);

    if (!cabang_id) {
      setError("Cabang tidak terdeteksi. Pastikan user memiliki cabang_id (branch/cabang) yang valid.");
      setTb([]); setGl([]); setPl({}); setBs({});
      return;
    }

    try {
      if (tab === "TB") {
        const data = await getTrialBalance({ cabang_id, year, month });
        setTb(data); setGl(null); setPl(null); setBs(null);
        return;
      }
      if (tab === "GL") {
        if (!accountId) {
          setGl([]); setTb(null); setPl(null); setBs(null);
          return;
        }
        const data = await getGeneralLedger({ cabang_id, year, month, account_id: accountId });
        setGl(data); setTb(null); setPl(null); setBs(null);
        return;
      }
      if (tab === "PL") {
        const data = await getProfitLoss({ cabang_id, year, month });
        setPl(data); setTb(null); setGl(null); setBs(null);
        return;
      }
      if (tab === "BS") {
        const data = await getBalanceSheet({ cabang_id, year, month });
        setBs(data); setTb(null); setGl(null); setPl(null);
        return;
      }
    } catch (e: any) {
      // tampilkan error apa adanya kalau ada response message dari backend
      const msg =
        e?.response?.data?.message ||
        e?.message ||
        "Gagal memuat report. Cek Network/Console (401/403/500) dan pastikan ada jurnal POSTED di periode ini.";
      setError(String(msg));
      // set ke empty supaya UI tetap konsisten
      if (tab === "TB") setTb([]);
      if (tab === "GL") setGl([]);
      if (tab === "PL") setPl({});
      if (tab === "BS") setBs({});
    }
  }, [getCabangId, tab, year, month, accountId]);

  useEffect(() => { void refresh(); }, [refresh]);

  return (
    <div>
      {/* Header & Filter */}
      <div className="card" style={{ marginBottom: 12 }}>
        <div className="card__body">
          <div className="toolbar">
            <h1 className="page-title">Laporan Akuntansi</h1>
            <div className="toolbar__spacer" />
            <div className="toolbar__group">
              <select
                className="select"
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
                aria-label="Tahun"
              >
                {Array.from({ length: 6 }).map((_, i) => {
                  const y = new Date().getFullYear() - i;
                  return <option key={y} value={y}>{y}</option>;
                })}
              </select>

              <select
                className="select"
                value={month}
                onChange={(e) => setMonth(Number(e.target.value))}
                aria-label="Bulan"
              >
                {Array.from({ length: 12 }).map((_, i) => {
                  const m = i + 1;
                  return <option key={m} value={m}>{m.toString().padStart(2, "0")}</option>;
                })}
              </select>

              {/* Tab sebagai button group: aktif=button-primary, lain=button-outline */}
              <div className="button-group">
                <button
                  className={tab === "TB" ? "button button-primary" : "button button-outline"}
                  onClick={() => setTab("TB")}
                  aria-pressed={tab === "TB"}
                >Trial Balance</button>
                <button
                  className={tab === "GL" ? "button button-primary" : "button button-outline"}
                  onClick={() => setTab("GL")}
                  aria-pressed={tab === "GL"}
                >General Ledger</button>
                <button
                  className={tab === "PL" ? "button button-primary" : "button button-outline"}
                  onClick={() => setTab("PL")}
                  aria-pressed={tab === "PL"}
                >P&amp;L</button>
                <button
                  className={tab === "BS" ? "button button-primary" : "button button-outline"}
                  onClick={() => setTab("BS")}
                  aria-pressed={tab === "BS"}
                >Balance Sheet</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {error && (
        <div className="alert alert-danger" style={{ marginBottom: 12 }}>
          {error}
        </div>
      )}

      {/* Trial Balance */}
      {tab === "TB" && (
        <div className="card" style={{ marginBottom: 12 }}>
          <div className="card__body" style={{ padding: 0 }}>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Kode</th>
                    <th>Nama</th>
                    <th className="text-right">Debit</th>
                    <th className="text-right">Kredit</th>
                  </tr>
                </thead>
                <tbody>
                  {(tb ?? []).map((r) => (
                    <tr key={r.id}>
                      <td>{r.code}</td>
                      <td>{r.name}</td>
                      <td className="text-right">{fmt(Number(r.debit))}</td>
                      <td className="text-right">{fmt(Number(r.credit))}</td>
                    </tr>
                  ))}
                  {(tb ?? []).length === 0 && (
                    <tr>
                      <td colSpan={4}>
                        <div className="empty text-muted">Tidak ada data.</div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* General Ledger */}
      {tab === "GL" && (
        <div className="card" style={{ marginBottom: 12 }}>
          <div className="card__body">
            <div className="form-row">
              <div className="form-field">
                <label className="form-label">Account ID</label>
                <input
                  type="number"
                  className="input"
                  placeholder="Masukkan Account ID…"
                  value={accountId ?? ""}
                  onChange={(e) => setAccountId(e.target.value ? Number(e.target.value) : null)}
                  min={1}
                />
              </div>
            </div>

            <div className="table-responsive" style={{ marginTop: 8 }}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Tanggal</th>
                    <th>Nomor</th>
                    <th className="text-right">Debit</th>
                    <th className="text-right">Kredit</th>
                    <th>Ref</th>
                  </tr>
                </thead>
                <tbody>
                  {(gl ?? []).map((r, i) => (
                    <tr key={i}>
                      <td>{r.journal_date}</td>
                      <td>{r.number}</td>
                      <td className="text-right">{fmt(Number(r.debit))}</td>
                      <td className="text-right">{fmt(Number(r.credit))}</td>
                      <td className="text-xs">{r.ref_type ? `${r.ref_type}#${r.ref_id}` : "—"}</td>
                    </tr>
                  ))}
                  {(gl ?? []).length === 0 && (
                    <tr>
                      <td colSpan={5}>
                        <div className="empty text-muted">Tidak ada data.</div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Profit & Loss */}
      {tab === "PL" && (
        <div className="card" style={{ marginBottom: 12 }}>
          <div className="card__body" style={{ padding: 0 }}>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Kelompok</th>
                    <th className="text-right">Debit</th>
                    <th className="text-right">Kredit</th>
                    <th className="text-right">Net</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(pl ?? {}).map(([k, v]) => {
                    const debit = Number(v?.debit ?? 0);
                    const credit = Number(v?.credit ?? 0);
                    const net = credit - debit; // revenue normal credit, expense normal debit; ini tetap “indikatif”
                    return (
                      <tr key={k}>
                        <td>{k}</td>
                        <td className="text-right">{fmt(debit)}</td>
                        <td className="text-right">{fmt(credit)}</td>
                        <td className="text-right">{fmt(net)}</td>
                      </tr>
                    );
                  })}
                  {Object.keys(pl ?? {}).length === 0 && (
                    <tr>
                      <td colSpan={4}>
                        <div className="empty text-muted">
                          Tidak ada data. Pastikan ada jurnal berstatus POSTED untuk periode ini.
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Balance Sheet */}
      {tab === "BS" && (
        <div className="card" style={{ marginBottom: 12 }}>
          <div className="card__body" style={{ padding: 0 }}>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Kelompok</th>
                    <th className="text-right">Debit</th>
                    <th className="text-right">Kredit</th>
                    <th className="text-right">Saldo (Net)</th>
                  </tr>
                </thead>
                <tbody>
                  {(["Asset", "Liability", "Equity"] as const).map((k) => {
                    const row = (bs as any)?.[k];
                    const debit = Number(row?.debit ?? 0);
                    const credit = Number(row?.credit ?? 0);
                    const net = k === "Asset" ? debit - credit : credit - debit; // normal balance
                    return (
                      <tr key={k}>
                        <td>{k}</td>
                        <td className="text-right">{fmt(debit)}</td>
                        <td className="text-right">{fmt(credit)}</td>
                        <td className="text-right">{fmt(net)}</td>
                      </tr>
                    );
                  })}

                  {(() => {
                    const a = (bs as any)?.Asset;
                    const l = (bs as any)?.Liability;
                    const e = (bs as any)?.Equity;
                    const asset = (Number(a?.debit ?? 0) - Number(a?.credit ?? 0));
                    const lia = (Number(l?.credit ?? 0) - Number(l?.debit ?? 0));
                    const eq = (Number(e?.credit ?? 0) - Number(e?.debit ?? 0));
                    const diff = asset - (lia + eq);

                    const empty = !bs || Object.keys(bs as any).length === 0;
                    if (empty) return (
                      <tr>
                        <td colSpan={4}>
                          <div className="empty text-muted">
                            Tidak ada data. Pastikan ada jurnal berstatus POSTED untuk periode ini.
                          </div>
                        </td>
                      </tr>
                    );

                    return (
                      <tr>
                        <td><strong>Selisih (Asset - (Liability + Equity))</strong></td>
                        <td colSpan={3} className="text-right"><strong>{fmt(diff)}</strong></td>
                      </tr>
                    );
                  })()}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

```
</details>

### src/pages/auth/Login.tsx

- SHA: `a6f924170fd1`  
- Ukuran: 10 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/pages/auth/Login.tsx
import { useEffect } from "react";
import { useAuth } from "../../store/auth";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/auth/LoginForm";

export default function LoginPage(): React.ReactElement {
  const { isAuthenticated, status } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  // Layout: split card (visual kiri + form kanan)
  const pageStyle: React.CSSProperties = {
    minHeight: "100dvh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1.5rem",
    // background halus, tetap netral agar cocok dengan tema project Anda
    background:
      "radial-gradient(1200px 600px at 10% 10%, rgba(99,102,241,0.18), transparent 55%), radial-gradient(900px 500px at 90% 20%, rgba(16,185,129,0.12), transparent 50%), linear-gradient(180deg, rgba(15,23,42,0.04), rgba(15,23,42,0.02))",
  };

  const shellStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: "980px",
  };

  // kartu besar dengan radius besar
  const splitCardStyle: React.CSSProperties = {
    borderRadius: "28px",
    overflow: "hidden",
    display: "grid",
    gridTemplateColumns: "1.1fr 0.9fr",
    minHeight: "560px",
  };

  // Responsif via inline: pakai media query tidak bisa di inline,
  // jadi kita buat dua layout: desktop grid, mobile stack menggunakan CSS sederhana lewat style + className.
  // Solusi: gunakan wrapper dengan className untuk kontrol responsif di CSS global jika Anda mau.
  // Tapi agar langsung jalan tanpa ubah CSS global, kita set fallback: bila layar kecil, grid akan wrap dengan auto rows.
  // (Sebagian browser tetap oke; jika Anda ingin 100% presisi, nanti kita pindah ke CSS index.css.)

  const leftPanelStyle: React.CSSProperties = {
    position: "relative",
    padding: "1.25rem",
    // gunakan image/gradient. Anda bisa ganti url(...) ke aset project Anda.
    backgroundImage:
      "linear-gradient(135deg, rgba(2,6,23,0.72), rgba(2,6,23,0.35)), radial-gradient(900px 400px at 20% 20%, rgba(99,102,241,0.55), transparent 55%), radial-gradient(700px 420px at 80% 30%, rgba(16,185,129,0.35), transparent 52%), radial-gradient(600px 420px at 30% 85%, rgba(244,63,94,0.25), transparent 55%)",
    color: "rgba(255,255,255,0.92)",
  };

  const mockFrameStyle: React.CSSProperties = {
    position: "absolute",
    inset: "18px",
    borderRadius: "22px",
    border: "1px solid rgba(255,255,255,0.20)",
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.03))",
    boxShadow: "0 22px 60px rgba(0,0,0,0.35)",
    overflow: "hidden",
  };

  const leftContentStyle: React.CSSProperties = {
    position: "relative",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "1.25rem",
  };

  const topNavStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem",
  };

  const badgeStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.35rem 0.6rem",
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,0.18)",
    background: "rgba(255,255,255,0.10)",
    fontSize: "0.78rem",
  };

  const leftFooterStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem",
  };

  const profileStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    minWidth: 0,
  };

  const avatarStyle: React.CSSProperties = {
    width: "40px",
    height: "40px",
    borderRadius: "999px",
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.35), rgba(255,255,255,0.12))",
    border: "1px solid rgba(255,255,255,0.22)",
    display: "grid",
    placeItems: "center",
    fontWeight: 700,
  };

  const formPanelStyle: React.CSSProperties = {
    padding: "2.25rem 2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    background: "rgba(255,255,255,0.92)",
    backdropFilter: "blur(8px)",
  };

  const titleStyle: React.CSSProperties = {
    fontSize: "2.0rem",
    fontWeight: 800,
    letterSpacing: "-0.02em",
    margin: 0,
  };

  const subtitleStyle: React.CSSProperties = {
    marginTop: "0.5rem",
    marginBottom: "1.5rem",
    opacity: 0.75,
    fontSize: "0.95rem",
  };

  // skeleton ringan saat cek sesi
  if (status === "idle" || status === "loading") {
    return (
      <div style={pageStyle}>
        <div style={shellStyle}>
          <div className="card" style={{ borderRadius: "28px", padding: "1.5rem" }}>
            <p className="text-sm opacity-70">Memeriksa sesi…</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={pageStyle}>
      <div style={shellStyle}>
        {/* gunakan style card Anda, tapi kita buat split layout di dalamnya */}
        <div className="card" style={splitCardStyle}>
          {/* LEFT: Visual */}
          <section style={leftPanelStyle}>
            <div style={mockFrameStyle} />

            <div style={leftContentStyle}>
              <div style={topNavStyle}>
                <div style={badgeStyle}>
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: 999,
                      background: "rgba(16,185,129,0.9)",
                      boxShadow: "0 0 0 4px rgba(16,185,129,0.18)",
                    }}
                  />
                  <span>POS Prime • Multi Cabang</span>
                </div>
              </div>

              <div style={{ marginTop: "2.5rem" }}>
                <h2
                  style={{
                    margin: 0,
                    fontSize: "2.2rem",
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                    color: "#ffffff"
                  }}
                >
                  Kelola Penjualan,
                  <br />
                  Stok, dan Kas
                  <br />
                  Lebih Mudah
                </h2>
                <p
                  style={{
                    marginTop: "0.9rem",
                    maxWidth: "28rem",
                    opacity: 0.82,
                    lineHeight: 1.6,
                    color: "#ffffff"
                  }}
                >
                  Masuk untuk mengakses 
                  POS Prime dan optimalkan 
                  operasional toko Anda dengan
                  sistem point-of-sale terbaik.
                </p>
              </div>

              <div style={leftFooterStyle}>
                <div style={profileStyle}>
                  <div style={avatarStyle}>P</div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontWeight: 700, lineHeight: 1.2 }}>
                      POS Prime
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* RIGHT: Form */}
          <section style={formPanelStyle}>
            <div style={{ maxWidth: "420px", width: "100%", margin: "0 auto" }}>
              <div style={{ marginBottom: "1rem" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1rem",
                  }}
                >
                  <div style={{ fontWeight: 800, letterSpacing: "-0.02em" }}>
                    POS Prime
                  </div>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.35rem 0.6rem",
                      borderRadius: "999px",
                      border: "1px solid rgba(2,6,23,0.08)",
                      background: "rgba(2,6,23,0.02)",
                      fontSize: "0.78rem",
                      opacity: 0.85,
                    }}
                  >
                    <span
                      style={{
                        width: 18,
                        height: 18,
                        borderRadius: 999,
                        border: "1px solid rgba(2,6,23,0.10)",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.7rem",
                      }}
                    >
                      ID
                    </span>
                    <span>Indonesia</span>
                  </div>
                </div>
              </div>

              <h1 style={titleStyle}>Hallo, Selamat Datang</h1>
              <p style={subtitleStyle}>Silakan masuk untuk melanjutkan.</p>

              <LoginForm />

              <div style={{ marginTop: "1.25rem", fontSize: "0.85rem", opacity: 0.75 }}>
                Dengan masuk, Anda menyetujui kebijakan operasional aplikasi.
              </div>
            </div>
          </section>
        </div>

        {/* Responsif: fallback sederhana untuk layar kecil */}
        <style>
          {`
            @media (max-width: 900px) {
              .card[style*="grid-template-columns"] {
                grid-template-columns: 1fr !important;
                min-height: unset !important;
              }
            }
          `}
        </style>
      </div>
    </div>
  );
}

```
</details>

### src/pages/cash/CashHistory.tsx

- SHA: `ab7b99a89e85`  
- Ukuran: 9 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/pages/cash/CashHistory.tsx
import React, { useEffect, useMemo, useState } from "react";
import { approveCashMove, listCashMoves, rejectCashMove, listCashHolders } from "../../api/cash";
import type { CashMove, CashMoveQuery, CashHolder } from "../../types/cash";
import { useAuth } from "../../store/auth";

export default function CashHistory(): React.ReactElement {
  const { hasRole } = useAuth();
  const canApprove = hasRole("superadmin") || hasRole("admin_cabang");

  const [q, setQ] = useState<CashMoveQuery>({ page: 1, per_page: 10 });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [rows, setRows] = useState<CashMove[]>([]);
  const [meta, setMeta] = useState<{ current_page: number; per_page: number; total: number; last_page: number }>({
    current_page: 1, per_page: 10, total: 0, last_page: 1
  });
  const [holders, setHolders] = useState<CashHolder[]>([]);
  const [approvingId, setApprovingId] = useState<number | null>(null);

  const holderMap = useMemo(() => {
    const map: Record<number, CashHolder> = {};
    holders.forEach((h) => { map[Number(h.id)] = h; });
    return map;
  }, [holders]);

  useEffect(() => {
    let alive = true;
    setLoading(true);
    setError(null);
    Promise.all([listCashMoves(q), listCashHolders({ per_page: 100 })])
      .then(([moves, holdersRes]) => {
        if (!alive) return;
        setRows(moves.data);
        setMeta(moves.meta);
        setHolders(holdersRes.data);
      })
      .catch((e: unknown) => alive && setError((e as { message?: string }).message ?? "Gagal memuat riwayat setoran."))
      .finally(() => alive && setLoading(false));
    return () => { alive = false; };
  }, [q]);

  const data = useMemo(() => rows, [rows]);

  function hasSufficientBalance(m: CashMove): boolean {
    const from = holderMap[Number(m.from_holder_id)];
    if (!from || typeof from.balance !== "number") return true; // biar backend yang validasi
    return from.balance >= (m.amount ?? 0);
  }

  return (
    <div className="page">
      <h1 className="page-title">Riwayat Setoran Tunai</h1>

      {/* Filter Bar */}
      <div className="toolbar">
        <div className="toolbar-body">
          <input
            value={q.q ?? ""}
            onChange={(e) => setQ((s) => ({ ...s, q: e.target.value, page: 1 }))}
            className="input"
            placeholder="Cari catatan / holder…"
          />
          <select
            value={q.status ?? ""}
            onChange={(e) =>
              setQ((s) => ({
                ...s,
                status: e.target.value ? (e.target.value as CashMove["status"]) : undefined,
                page: 1
              }))
            }
            className="select"
          >
            <option value="">Semua status</option>
            <option value="SUBMITTED">SUBMITTED</option>
            <option value="APPROVED">APPROVED</option>
            <option value="REJECTED">REJECTED</option>
          </select>
        </div>
      </div>

      {/* State: Loading / Error / Empty */}
      {loading ? (
        <div className="card"><div>Loading…</div></div>
      ) : error ? (
        <div className="card"><div className="alert alert-danger">{error}</div></div>
      ) : data.length === 0 ? (
        <div className="card"><div className="muted">Belum ada data.</div></div>
      ) : (
        <div className="card">
          <table className="table">
            <thead>
              <tr>
                <th>Tanggal</th>
                <th>Dari</th>
                <th>Ke</th>
                <th>Saldo Dari</th>
                <th>Jumlah</th>
                <th>Status</th>
                <th className="ta-right">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((m) => {
                const saldoFrom = holderMap[Number(m.from_holder_id)]?.balance ?? 0;
                const statusClass =
                  m.status === "APPROVED" ? "badge badge-success" :
                  m.status === "REJECTED" ? "badge badge-danger" :
                  "badge badge-warning";

                return (
                  <tr key={m.id}>
                    <td><code>{m.submitted_at}</code></td>
                    <td>{m.from_holder?.name ?? m.from_holder_id}</td>
                    <td>{m.to_holder?.name ?? m.to_holder_id}</td>
                    <td data-align="right">
                      {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 })
                        .format(saldoFrom)}
                    </td>
                    <td data-align="right">
                      {new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 })
                        .format(m.amount)}
                    </td>
                    <td>
                      <span className={statusClass}>{m.status}</span>
                    </td>
                    <td className="ta-right">
                      {canApprove && m.status === "SUBMITTED" ? (
                        <div className="actions">
                          <button
                            type="button"
                            className="button button-primary"
                            disabled={approvingId === m.id}
                            onClick={async (ev) => {
                              ev.stopPropagation();
                              if (approvingId === m.id) return;

                              if (!hasSufficientBalance(m)) {
                                const ok = window.confirm(
                                  "Saldo holder asal kurang dari jumlah move.\nTetap kirim approve dan biarkan server yang memvalidasi?"
                                );
                                if (!ok) return;
                              }

                              setApprovingId(m.id);
                              try {
                                await approveCashMove(m.id);
                                setRows((arr) =>
                                  arr.map((x) =>
                                    x.id === m.id ? { ...x, status: "APPROVED", approved_at: new Date().toISOString() } : x
                                  )
                                );
                                const refreshed = await listCashHolders({ per_page: 100 });
                                setHolders(refreshed.data);
                              } catch (e) {
                                const err = e as { response?: { data?: { message?: string } } };
                                alert(err.response?.data?.message ?? "Tidak bisa approve (server error).");
                              } finally {
                                setApprovingId(null);
                              }
                            }}
                          >
                            {approvingId === m.id ? "Approving…" : "Approve"}
                          </button>

                          <button
                            type="button"
                            className="button button-outline"
                            onClick={async () => {
                              const reason = window.prompt("Alasan reject?");
                              if (!reason) return;
                              try {
                                await rejectCashMove(m.id, { reason });
                              } catch (e) {
                                const err = e as { response?: { data?: { message?: string } } };
                                alert(err.response?.data?.message ?? "Tidak bisa reject (403).");
                                return;
                              }
                              setRows((arr) =>
                                arr.map((x) =>
                                  x.id === m.id
                                    ? { ...x, status: "REJECTED", reject_reason: reason, approved_at: new Date().toISOString() }
                                    : x
                                )
                              );
                              const refreshed = await listCashHolders({ per_page: 100 });
                              setHolders(refreshed.data);
                            }}
                          >
                            Reject
                          </button>
                        </div>
                      ) : (
                        <span className="muted">—</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination */}
      <div className="card">
        <div className="pager">
          <div>Hal. {meta.current_page} / {meta.last_page}</div>
          <div className="pager-actions">
            <button
              type="button"
              className="button"
              disabled={meta.current_page <= 1}
              onClick={() => setQ((s) => ({ ...s, page: (s.page ?? 1) - 1 }))}
            >
              Prev
            </button>
            <button
              type="button"
              className="button"
              disabled={meta.current_page >= meta.last_page}
              onClick={() => setQ((s) => ({ ...s, page: (s.page ?? 1) + 1 }))}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

```
</details>

### src/pages/cash/CashIndex.tsx

- SHA: `29e5df63aab7`  
- Ukuran: 2 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/pages/cash/CashIndex.tsx
import React, { useState } from "react";
import CashDashboard from "../../components/cash/CashDashboard";
import CashHoldersTable from "../../components/cash/CashHoldersTable";
import SubmitCashDialog from "../../components/cash/SubmitCashDialog";
import type { CashHolder } from "../../types/cash";
import { useAuth } from "../../store/auth";

export default function CashIndex(): React.ReactElement {
  const { user } = useAuth();
  const [open, setOpen] = useState<boolean>(false);
  const [from, setFrom] = useState<CashHolder | null>(null);

  return (
    <div className="page">
      <h1 className="page-title">Cash Tracking</h1>

      {/* Section: KPI / Ringkasan Kas */}
      <div className="card">
        <CashDashboard branchId={user?.cabang_id ?? undefined} />
      </div>

      {/* Section: Holders + Action */}
      <div className="toolbar">
        <div className="toolbar-title">Holders</div>
        <div className="toolbar-actions">
          <button
            type="button"
            className="button button-primary"
            onClick={() => setOpen(true)}
          >
            Ajukan Setoran
          </button>
        </div>
      </div>

      {/* Tabel Holders */}
      <div className="card">
        <CashHoldersTable
          branchId={user?.cabang_id ?? undefined}
          onPickSubmit={(h) => {
            setFrom(h);
            setOpen(true);
          }}
        />
      </div>

      {/* Dialog Setoran */}
      <SubmitCashDialog
        open={open}
        defaultFrom={from}
        onClose={() => {
          setOpen(false);
          setFrom(null);
        }}
        onSubmitted={() => {
          /* optional toast/refresh elsewhere */
        }}
      />
    </div>
  );
}

```
</details>

### src/pages/categories/CategoryIndex.tsx

- SHA: `23c55fc4bea7`  
- Ukuran: 11 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/pages/categories/CategoryIndex.tsx
import React, { useCallback, useEffect, useMemo, useState } from "react";
import type {
  Category,
  CategoryCreatePayload,
  CategoryQuery,
  CategoryUpdatePayload,
  PaginatedResponse,
  ApiError,
} from "../../types/category";
import {
  listCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../../api/categories";
import CategoryFilters from "../../components/category/CategoryFilters";
import CategoryFormDialog from "../../components/category/CategoryFormDialog";
import CategoryTable from "../../components/category/CategoryTable";

function usePagination(total: number, perPage: number, current: number) {
  const pages = Math.max(1, Math.ceil(total / Math.max(1, perPage)));
  const clamped = Math.min(Math.max(1, current), pages);

  const items = useMemo(() => {
    const arr: number[] = [];
    let start = Math.max(1, clamped - 2);
    const end = Math.min(pages, start + 4);
    start = Math.max(1, end - 4);
    for (let i = start; i <= end; i++) arr.push(i);
    return arr;
  }, [pages, clamped]);

  return { pages, current: clamped, items };
}

function isApiError(e: unknown): e is ApiError {
  return typeof e === "object" && e !== null && "status" in e && "message" in e;
}

export default function CategoryIndex(): React.ReactElement {
  const [query, setQuery] = useState<CategoryQuery>({
    page: 1,
    per_page: 10,
    sort: "nama",
  });
  const [rows, setRows] = useState<Category[]>([]);
  const [meta, setMeta] = useState<{
    total: number;
    last_page: number;
    current_page: number;
    per_page: number;
  }>({
    total: 0,
    last_page: 1,
    current_page: 1,
    per_page: 10,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [openForm, setOpenForm] = useState(false);
  const [editItem, setEditItem] = useState<Category | null>(null);

  const { items: pageItems, current } = usePagination(
    meta.total,
    meta.per_page,
    meta.current_page
  );

  const fetchData = useCallback(
    async (q: CategoryQuery = query) => {
      setLoading(true);
      setError(null);
      try {
        const res: PaginatedResponse<Category> = await listCategories(q);
        setRows(res.data);
        setMeta(res.meta);
      } catch (e: unknown) {
        setError(isApiError(e) ? e.message : "Gagal memuat data");
      } finally {
        setLoading(false);
      }
    },
    [query]
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    fetchData(query);
  }, [query, fetchData]);

  const openCreate = () => {
    setEditItem(null);
    setOpenForm(true);
  };

  const openEdit = (row: Category) => {
    setEditItem(row);
    setOpenForm(true);
  };

  const handleSubmit = async (
    payload: CategoryCreatePayload | CategoryUpdatePayload
  ): Promise<boolean> => {
    if (editItem) {
      await updateCategory(editItem.id, payload as CategoryUpdatePayload);
    } else {
      await createCategory(payload as CategoryCreatePayload);
    }
    await fetchData(query);
    return true;
  };

  const handleDelete = async (row: Category) => {
    const ok = window.confirm(
      `Hapus kategori "${row.nama}"? Tindakan ini tidak dapat dibatalkan.`
    );
    if (!ok) return;

    try {
      await deleteCategory(row.id);
      if (rows.length === 1 && meta.current_page > 1) {
        setQuery({ ...query, page: (query.page ?? 1) - 1 });
      } else {
        await fetchData(query);
      }
    } catch (e: unknown) {
      const msg = isApiError(e) ? e.message : "Gagal menghapus";
      alert(msg);
    }
  };

  const softText: React.CSSProperties = { color: "var(--color-text-soft)" };
  const divider: React.CSSProperties = { borderTop: "1px solid var(--color-border)" };

  return (
    <div className="container">
      {/* HEADER */}
      <div className="section">
        <div className="card" style={{ padding: "1rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <div style={{ minWidth: 220 }}>
              <h1 style={{ margin: 0, lineHeight: 1.15 }}>Kategori</h1>
              <div style={{ ...softText, marginTop: ".35rem" }}>
                Kelola kategori produk.
              </div>

              <div
                style={{
                  display: "flex",
                  gap: ".5rem",
                  flexWrap: "wrap",
                  marginTop: ".8rem",
                }}
              >
                <span className="badge" title="Total data">
                  Total: {meta.total}
                </span>
                <span className="badge" title="Per halaman">
                  Per halaman: {query.per_page ?? 10}
                </span>
                <span className="badge" title="Urutan">
                  Sort: {query.sort ?? "nama"}
                </span>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: ".6rem",
                flexWrap: "wrap",
                justifyContent: "flex-end",
              }}
            >
              <select
                className="select"
                value={query.per_page ?? 10}
                onChange={(e) =>
                  setQuery({
                    ...query,
                    per_page: Number(e.target.value),
                    page: 1,
                  })
                }
                style={{ minWidth: 140 }}
              >
                {[10, 20, 50].map((n) => (
                  <option key={n} value={n}>
                    {n} / halaman
                  </option>
                ))}
              </select>

              <button className="button button-primary" onClick={openCreate}>
                + Tambah Kategori
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="section">
        <div className="card" style={{ padding: 0, overflow: "hidden" }}>
          {/* Toolbar: Filters */}
          <div
            style={{
              padding: "1rem",
              background: "rgba(0,0,0,0.015)",
              borderBottom: "1px solid var(--color-border)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: ".75rem", flexWrap: "wrap" }}>
              <div style={{ fontWeight: 700 }}>Filter</div>
              <div style={{ ...softText, fontSize: 14 }}>
                Gunakan pencarian/sort untuk mempercepat pengelolaan data.
              </div>
            </div>

            <div style={{ marginTop: ".8rem" }}>
              <CategoryFilters value={query} onChange={setQuery} />
            </div>
          </div>

          {/* Body: Table / State */}
          <div style={{ padding: "1rem" }}>
            {loading ? (
              <div
                style={{
                  padding: "1.25rem",
                  textAlign: "center",
                  ...softText,
                  border: "1px dashed var(--color-border)",
                  borderRadius: "var(--radius-md)",
                  background: "var(--color-surface)",
                }}
              >
                Memuat data kategori…
              </div>
            ) : error ? (
              <div
                style={{
                  padding: "1rem",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid rgba(220,38,38,.25)",
                  background: "rgba(220,38,38,.06)",
                  color: "var(--color-danger)",
                  textAlign: "center",
                  fontWeight: 700,
                }}
              >
                {error}
              </div>
            ) : rows.length === 0 ? (
              <div
                style={{
                  padding: "1.25rem",
                  textAlign: "center",
                  border: "1px dashed var(--color-border)",
                  borderRadius: "var(--radius-md)",
                  background: "var(--color-surface)",
                }}
              >
                <div style={{ fontWeight: 800 }}>Belum ada kategori</div>
                <div style={{ ...softText, marginTop: ".35rem" }}>
                  Klik tombol <b>Tambah Kategori</b> untuk membuat data baru.
                </div>
              </div>
            ) : (
              <CategoryTable rows={rows} onEdit={openEdit} onDelete={handleDelete} />
            )}
          </div>

          {/* Footer: Pagination */}
          <div style={{ padding: "0.9rem 1rem", ...divider }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: ".75rem",
                flexWrap: "wrap",
              }}
            >
              <div style={{ ...softText, fontSize: 14 }}>
                Halaman <b>{meta.current_page}</b> dari <b>{meta.last_page}</b> • Total{" "}
                <b>{meta.total}</b> data
              </div>

              <div style={{ display: "flex", gap: ".4rem", flexWrap: "wrap" }}>
                <button
                  className="button button-outline"
                  disabled={current <= 1}
                  onClick={() =>
                    setQuery({ ...query, page: Math.max(1, (query.page ?? 1) - 1) })
                  }
                >
                  Prev
                </button>

                {pageItems.map((p) => (
                  <button
                    key={p}
                    className={p === meta.current_page ? "button button-primary" : "button button-outline"}
                    onClick={() => setQuery({ ...query, page: p })}
                    style={{ minWidth: 44, paddingInline: ".85rem" }}
                  >
                    {p}
                  </button>
                ))}

                <button
                  className="button button-outline"
                  disabled={current >= meta.last_page}
                  onClick={() =>
                    setQuery({
                      ...query,
                      page: Math.min(meta.last_page, (query.page ?? 1) + 1),
                    })
                  }
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CategoryFormDialog
        open={openForm}
        initial={editItem}
        onClose={() => setOpenForm(false)}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

```
</details>

### src/pages/customers/CustomerDetail.tsx

- SHA: `e397430ddce6`  
- Ukuran: 13 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/pages/customers/CustomerDetail.tsx
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  changeCustomerStage,
  getCustomer,
  getCustomerHistory,
} from "../../api/customers";
import type {
  CustomerDetail as TDetail,
  CustomerTimelineEvent,
  CustomerStage,
} from "../../types/customers";
import CustomerStageBadge from "../../components/customers/CustomerStageBadge";
import CustomerTimeline from "../../components/customers/CustomerTimeline";
import { useAuth } from "../../store/auth";

export default function CustomerDetail(): React.ReactElement {
  const { id } = useParams();
  const nav = useNavigate();

  const cid = Number(id);
  const [detail, setDetail] = useState<TDetail | null>(null);
  const [timeline, setTimeline] = useState<CustomerTimelineEvent[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [tlLoading, setTlLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [tlError, setTlError] = useState<string | null>(null);

  const { hasRole } = useAuth();
  const canChangeStage = hasRole("superadmin") || hasRole("admin_cabang");

  useEffect(() => {
    if (!Number.isFinite(cid)) {
      setError("Invalid customer id");
      setLoading(false);
      return;
    }
    let cancelled = false;
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const d = await getCustomer(cid);
        if (!cancelled) setDetail(d);
      } catch {
        if (!cancelled) setError("Failed to load customer");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [cid]);

  useEffect(() => {
    if (!Number.isFinite(cid)) {
      setTlError("Invalid customer id");
      setTlLoading(false);
      return;
    }
    let cancelled = false;
    (async () => {
      setTlLoading(true);
      setTlError(null);
      try {
        const h = await getCustomerHistory(cid);
        if (!cancelled) setTimeline(h);
      } catch {
        if (!cancelled) setTlError("Failed to load timeline");
      } finally {
        if (!cancelled) setTlLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [cid]);

  async function onChangeStage(s: CustomerStage): Promise<void> {
    if (!detail) return;
    try {
      const updated = await changeCustomerStage(detail.customer.id, s);
      setDetail((d) => (d ? { ...d, customer: updated } : d));
    } catch {
      // tempatkan toast global bila ada
    }
  }

  // ====== UI helpers (tanpa ubah data/logika) ======
  const c = detail?.customer;

  const displayName = useMemo(() => {
    if (!c) return "—";
    return (
      (c as unknown as { nama?: string }).nama ??
      (c as unknown as { name?: string }).name ??
      "—"
    );
  }, [c]);

  const displayAddress = useMemo(() => {
    if (!c) return "—";
    return (
      (c as unknown as { alamat?: string | null }).alamat ??
      (c as unknown as { address?: string | null }).address ??
      "—"
    );
  }, [c]);

  const displayPhone = useMemo(() => {
    if (!c) return "—";
    return (c as unknown as { phone?: string | null }).phone ?? "—";
  }, [c]);

  const displayEmail = useMemo(() => {
    if (!c) return "—";
    return (c as unknown as { email?: string | null }).email ?? "—";
  }, [c]);

  // ====== States ======
  if (loading) {
    return (
      <div className="container">
        <div className="section">
          <div className="card p-4">Loading…</div>
        </div>
      </div>
    );
  }

  if (error || !detail || !c) {
    return (
      <div className="container">
        <div className="section">
          <div className="card p-4" style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <span className="badge badge-danger" style={{ verticalAlign: "middle" }}>
              Error
            </span>
            <span>{error ?? "Not found"}</span>
          </div>
        </div>
      </div>
    );
  }

  // ====== Layout ======
  return (
    <div className="container">
      <div className="section">
        {/* Top bar: back + title */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
            marginBottom: "1rem",
          }}
        >
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
            <button
              type="button"
              className="button button-outline"
              onClick={() => nav("/customers")}
              title="Back to customers"
              style={{ borderRadius: "999px" }}
            >
              ← Back
            </button>

            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap" }}>
                <h1 style={{ marginBottom: 0 }}>{displayName}</h1>
                <CustomerStageBadge stage={c.stage} />
              </div>
              <div className="muted" style={{ marginTop: 4 }}>
                {displayPhone} • {displayEmail}
              </div>
            </div>
          </div>

          {/* Right actions */}
          <div style={{ display: "flex", gap: "0.6rem", alignItems: "center", flexWrap: "wrap" }}>
            <span className="badge" title="Customer ID">
              ID: {c.id}
            </span>

            {canChangeStage ? (
              <div
                className="card"
                style={{
                  padding: "0.65rem 0.75rem",
                  display: "flex",
                  gap: "0.6rem",
                  alignItems: "center",
                }}
                title="Change stage"
              >
                <span className="muted" style={{ fontSize: "0.9rem" }}>
                  Stage
                </span>
                <select
                  className="select"
                  value={c.stage}
                  onChange={(e) => onChangeStage(e.target.value as CustomerStage)}
                  style={{ minWidth: 140 }}
                >
                  <option value="LEAD">LEAD</option>
                  <option value="ACTIVE">ACTIVE</option>
                  <option value="CHURN">CHURN</option>
                </select>
              </div>
            ) : null}
          </div>
        </div>

        {/* Summary cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.6fr 1fr",
            gap: "1rem",
            marginBottom: "1rem",
          }}
        >
          {/* Profile card */}
          <div className="card p-4">
            <h2 style={{ marginBottom: "0.5rem" }}>Profile</h2>

            <div className="muted" style={{ marginBottom: "0.75rem" }}>
              Informasi dasar pelanggan.
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "140px 1fr",
                gap: "0.6rem 1rem",
                alignItems: "start",
              }}
            >
              <div className="muted">Name</div>
              <div style={{ fontWeight: 700 }}>{displayName}</div>

              <div className="muted">Phone</div>
              <div>{displayPhone}</div>

              <div className="muted">Email</div>
              <div>{displayEmail}</div>

              <div className="muted">Address</div>
              <div style={{ lineHeight: 1.5 }}>{displayAddress}</div>
            </div>
          </div>

          {/* Quick stats */}
          <div className="card p-4">
            <h2 style={{ marginBottom: "0.5rem" }}>Summary</h2>
            <div className="muted" style={{ marginBottom: "0.75rem" }}>
              Ringkasan singkat.
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "0.6rem",
              }}
            >
              <div
                className="card"
                style={{
                  padding: "0.8rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span className="muted">Total Orders</span>
                <span style={{ fontWeight: 800 }}>{detail.orders.length}</span>
              </div>

              <div
                className="card"
                style={{
                  padding: "0.8rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span className="muted">Timeline Events</span>
                <span style={{ fontWeight: 800 }}>{timeline.length}</span>
              </div>

              <div
                className="card"
                style={{
                  padding: "0.8rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span className="muted">Current Stage</span>
                <span style={{ fontWeight: 800 }}>{c.stage}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Orders + Timeline */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: "1rem",
          }}
        >
          {/* Recent Orders */}
          <section className="card p-4">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                flexWrap: "wrap",
                marginBottom: "0.75rem",
              }}
            >
              <div>
                <h2 style={{ marginBottom: "0.25rem" }}>Recent Orders</h2>
                <div className="muted">Riwayat order terbaru pelanggan.</div>
              </div>

              <span className="badge" title="Orders">
                {detail.orders.length} orders
              </span>
            </div>

            <div style={{ overflowX: "auto" }}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Kode</th>
                    <th>Status</th>
                    <th>Grand Total</th>
                    <th>Ordered</th>
                  </tr>
                </thead>
                <tbody>
                  {detail.orders.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="muted" style={{ textAlign: "center" }}>
                        No orders yet.
                      </td>
                    </tr>
                  ) : (
                    detail.orders.map((o) => (
                      <tr key={o.id}>
                        <td>{(o as unknown as { code?: string }).code ?? "-"}</td>
                        <td>{(o as unknown as { status?: string }).status ?? "-"}</td>
                        <td>
                          {(o as unknown as { grand_total?: number | string }).grand_total ??
                            "-"}
                        </td>
                        <td>
                          {(() => {
                            const dt =
                              (o as unknown as { ordered_at?: string }).ordered_at ??
                              (o as unknown as { created_at?: string }).created_at ??
                              null;
                            return dt ? new Date(dt).toLocaleString() : "-";
                          })()}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </section>

          {/* Timeline */}
          <section className="card p-4">
            <div style={{ marginBottom: "0.75rem" }}>
              <h2 style={{ marginBottom: "0.25rem" }}>Timeline</h2>
              <div className="muted">Aktivitas terkait customer.</div>
            </div>

            <CustomerTimeline items={timeline} loading={tlLoading} error={tlError} />
          </section>
        </div>

        {/* Responsive tweaks */}
        <style>
          {`
            @media (max-width: 1024px) {
              .container .section > div[style*="grid-template-columns: 1.6fr 1fr"] {
                grid-template-columns: 1fr !important;
              }
              .container .section > div[style*="grid-template-columns: 1.2fr 0.8fr"] {
                grid-template-columns: 1fr !important;
              }
            }
            @media (max-width: 520px) {
              .container .section h1 {
                font-size: 1.4rem !important;
              }
            }
          `}
        </style>
      </div>
    </div>
  );
}

```
</details>

### src/pages/customers/CustomersIndex.tsx

- SHA: `5c3f27ba60fb`  
- Ukuran: 4 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/pages/customers/CustomersIndex.tsx
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../store/auth";
import { createCustomer } from "../../api/customers";
import CustomerTable from "../../components/customers/CustomerTable";
import type { Customer } from "../../types/customers";

export default function CustomersIndex(): React.ReactElement {
  const nav = useNavigate();
  const { hasRole } = useAuth();

  const canCreate =
    hasRole("superadmin") ||
    hasRole("admin_cabang") ||
    hasRole("kasir") ||
    hasRole("sales");

  const [version, setVersion] = useState<number>(0);

  async function handleCreate(): Promise<void> {
    const nameInput = window.prompt("Customer name?")?.trim();
    if (!nameInput) return;

    const phone = window.prompt("Phone (e.g. 08xxxxxxxxxx)?")?.trim();
    if (!phone) return;

    try {
      // sesuai tipe saat ini (CustomerUpsertPayload pakai "nama")
      const c = await createCustomer({ nama: nameInput, phone });
      setVersion((v) => v + 1); // refresh table by remount
      nav(`/customers/${c.id}`);
    } catch (err: unknown) {
      let msg = "Failed to create customer";
      if (typeof err === "object" && err !== null) {
        // @ts-expect-error akses opsional, tetap tanpa any
        msg = err?.response?.data?.message ?? (err as Error).message ?? msg;
      }
      alert(msg);
    }
  }

  return (
    <div className="container">
      <div className="section">
        {/* Header + Toolbar */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
            marginBottom: "1rem",
          }}
        >
          <div style={{ minWidth: 240 }}>
            <h1 style={{ marginBottom: "0.35rem" }}>Customers</h1>
            <p style={{ marginBottom: 0 }}>
              Kelola data pelanggan dan akses detail transaksi per pelanggan.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
              flexWrap: "wrap",
            }}
          >
            <span className="badge" title="Modul">
              CRM
            </span>

            {/* Aksi utama */}
            {canCreate ? (
              <button
                type="button"
                className="button button-primary"
                onClick={handleCreate}
              >
                + New Customer
              </button>
            ) : null}

            {/* Aksi sekunder: contoh tombol kecil untuk konsistensi UI */}
            <button
              type="button"
              className="button button-outline"
              onClick={() => setVersion((v) => v + 1)}
              title="Refresh list"
            >
              Refresh
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="card" style={{ padding: "1rem" }}>
          {/* Area penjelas kecil + hint */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              flexWrap: "wrap",
              padding: "0.25rem 0.25rem 0.75rem 0.25rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span className="badge" style={{ height: 26 }}>
                List
              </span>
              <span style={{ fontSize: "0.95rem", opacity: 0.8 }}>
                Klik baris untuk membuka detail customer.
              </span>
            </div>

            {/* Placeholder kanan atas jika suatu saat Anda mau taruh filter global */}
            <div style={{ opacity: 0.7, fontSize: "0.9rem" }}>
              {/* biarkan kosong / atau isi info singkat */}
            </div>
          </div>

          <CustomerTable
            key={version}
            canCreate={canCreate}
            onCreate={handleCreate}
            onRowClick={(c: Customer) => nav(`/customers/${c.id}`)}
          />
        </div>
      </div>
    </div>
  );
}

```
</details>

### src/pages/DashboardHome.tsx

- SHA: `e6910118017b`  
- Ukuran: 10 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/pages/DashboardHome.tsx
import { useEffect, useMemo, useState } from 'react';
import { useAuth } from '../store/auth';
import { getKPIs, getChart7d, getTopProducts, getLowStock, getQuickActions } from '../api/dashboard';
import type { KPIs, Chart7DayPoint, TopProduct, LowStockRow, QuickAction } from '../types/dashboard';
import KPIStatCards from '../components/dashboard/KPIStatCards';
import Sales7DaysChart from '../components/dashboard/Sales7DaysChart';
import TopProductsList from '../components/dashboard/TopProductsList';
import LowStockList from '../components/dashboard/LowStockList';
import QuickActions from '../components/dashboard/QuickActions';
import ReorderPointList from '../components/dashboard/ReorderPointList';

export default function DashboardHome(): React.ReactElement {
  const { user, hasRole } = useAuth();

  const branchId = user?.cabang_id ?? null;
  const isSuperadmin = hasRole('superadmin');
  const effectiveCabangId = useMemo(
    () => (isSuperadmin ? (branchId ?? undefined) : (user?.cabang_id ?? undefined)),
    [isSuperadmin, branchId, user?.cabang_id]
  );

  const canView = useMemo(() => hasRole('superadmin', 'admin_cabang', 'kasir'), [hasRole]);

  const [kpi, setKpi] = useState<KPIs | null>(null);
  const [chart, setChart] = useState<Chart7DayPoint[] | null>(null);
  const [top, setTop] = useState<TopProduct[] | null>(null);
  const [low, setLow] = useState<LowStockRow[] | null>(null);
  const [acts, setActs] = useState<QuickAction[] | null>(null);

  const [loading, setLoading] = useState<boolean>(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const run = async (): Promise<void> => {
      if (!canView) return;
      setLoading(true);
      setErr(null);

      try {
        const now = new Date();
        const to = new Date(now); to.setHours(23, 59, 59, 999);
        const from = new Date(now); from.setDate(now.getDate() - 6); from.setHours(0, 0, 0, 0);

        const [k, c, t, l, a] = await Promise.all([
          getKPIs({ cabang_id: effectiveCabangId, from: from.toISOString(), to: to.toISOString() }),
          getChart7d({ cabang_id: effectiveCabangId }),
          getTopProducts({ cabang_id: effectiveCabangId, limit: 5 }),
          getLowStock({ cabang_id: effectiveCabangId }),
          getQuickActions({ cabang_id: effectiveCabangId }),
        ]);

        if (!cancelled) {
          setKpi(k); setChart(c); setTop(t); setLow(l); setActs(a);
        }
      } catch (e) {
        if (!cancelled) {
          const anyErr = e as { response?: { status?: number; data?: unknown } };
          const serverMsg =
            anyErr?.response?.data &&
            typeof anyErr.response.data === 'object' &&
            (anyErr.response.data as Record<string, unknown>)?.message;

          const msg =
            anyErr?.response?.status === 403
              ? (typeof serverMsg === 'string'
                ? `403 Forbidden — ${serverMsg}`
                : '403 Forbidden — Policy backend menolak akses.')
              : (e instanceof Error ? e.message : 'Failed to load dashboard');

          setErr(msg);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    void run();
    return () => { cancelled = true; };
  }, [effectiveCabangId, canView]);

  // ====== Guard (tetap) ======
  if (!canView) {
    return (
      <div className="card" style={{ padding: 16 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
          <span className="badge badge-warning">Akses</span>
          <div style={{ opacity: 0.85 }}>You don’t have permission to view the dashboard.</div>
        </div>
      </div>
    );
  }

  if (!isSuperadmin && !user?.cabang_id) {
    return (
      <div className="card" style={{ padding: 16 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
          <span className="badge badge-warning">Perlu Tindakan</span>
          <div style={{ opacity: 0.95 }}>
            Akun Anda belum terikat ke cabang. Hubungi admin pusat.
          </div>
        </div>
      </div>
    );
  }

  // ====== UI styles ======
  const pageStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 18,
    width: 'min(1280px, 96%)',
    margin: '0 auto',
    paddingBottom: 6,
  };

  const headerWrap: React.CSSProperties = {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: 12,
    marginTop: 2,
  };

  const headerMeta: React.CSSProperties = {
    fontSize: 12,
    opacity: 0.7,
    marginBottom: 6,
    letterSpacing: '.02em',
    textTransform: 'uppercase',
  };

  const headerTitle: React.CSSProperties = {
    margin: 0,
    fontSize: 20,
    fontWeight: 800,
    letterSpacing: '-0.01em',
    color: 'var(--color-text)',
    lineHeight: 1.2,
  };

  const headerDesc: React.CSSProperties = {
    marginTop: 6,
    marginBottom: 0,
    fontSize: 14,
    color: 'var(--color-text-soft)',
  };

  const headerRight: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
  };

  const cardHeadRow: React.CSSProperties = {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    gap: 10,
  };

  const cardTitle: React.CSSProperties = {
    fontWeight: 750,
    color: 'var(--color-text)',
    margin: 0,
    fontSize: 14,
    letterSpacing: '.01em',
  };

  const cardHint: React.CSSProperties = {
    fontSize: 12,
    color: 'var(--color-text-soft)',
    margin: 0,
    opacity: 0.9,
  };

  const divider: React.CSSProperties = {
    borderTop: '1px solid rgba(0,0,0,0.06)',
    marginTop: 10,
    paddingTop: 12,
  };

  // Grid 3 kartu di bawah chart
  const triGrid: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gap: 18,
    alignItems: 'start',
  };

  const responsiveCss = `
    @media (max-width: 1100px) {
      .dash-3 { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
    }
    @media (max-width: 720px) {
      .dash-3 { grid-template-columns: 1fr !important; }
    }
  `;

  return (
    <div style={pageStyle}>
      {/* Header */}
      <div style={headerWrap}>
        <div style={{ minWidth: 0 }}>
          <div style={headerMeta}>Dashboard</div>
          <h1 style={headerTitle}>Ringkasan aktivitas & performa toko</h1>
          <p style={headerDesc}>
            KPI, tren 7 hari, produk terlaris, indikator reorder (ROP), dan peringatan stok rendah.
          </p>
        </div>

        <div style={headerRight}>
          {err ? (
            <span className="badge badge-danger" title={err}>Error</span>
          ) : loading ? (
            <span className="badge">Loading</span>
          ) : (
            <span className="badge badge-success">Up to date</span>
          )}
        </div>
      </div>

      {/* KPI */}
      <KPIStatCards data={kpi} loading={loading} error={err} />

      {/* Chart: sekarang full width */}
      <section className="card" style={{ padding: 'var(--space-5)', minWidth: 0 }}>
        <div style={cardHeadRow}>
          <h2 style={cardTitle}>Trend Penjualan 7 Hari</h2>
          <p style={cardHint}>Update otomatis berdasarkan cabang & role</p>
        </div>
        <div style={divider}>
          <Sales7DaysChart data={chart} loading={loading} error={err} />
        </div>
      </section>

      {/* 3 kartu: Top Produk, ROP, Stok Rendah (di bawah chart) */}
      <div className="dash-3" style={triGrid}>
        <section className="card" style={{ padding: 'var(--space-5)', minWidth: 0 }}>
          <div style={cardHeadRow}>
            <h2 style={cardTitle}>Produk Terlaris</h2>
            <p style={cardHint}>Top 5</p>
          </div>
          <div style={divider}>
            <TopProductsList data={top} loading={loading} error={err} />
          </div>
        </section>

        <section className="card" style={{ padding: 'var(--space-5)', minWidth: 0 }}>
          <div style={cardHeadRow}>
            <h2 style={cardTitle}>Perlu Reorder (ROP)</h2>
            <p style={cardHint}>Prioritas restok</p>
          </div>
          <div style={divider}>
            <ReorderPointList />
          </div>
        </section>

        <section className="card" style={{ padding: 'var(--space-5)', minWidth: 0 }}>
          <div style={cardHeadRow}>
            <h2 style={cardTitle}>Stok Rendah</h2>
            <p style={cardHint}>Butuh tindakan cepat</p>
          </div>
          <div style={divider}>
            <LowStockList data={low} loading={loading} error={err} />
          </div>
        </section>
      </div>

      {/* Alert bar */}
      {Array.isArray(low) && low.length > 0 && (
        <div
          className="card"
          style={{
            padding: 14,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 10,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span className="badge badge-warning">Peringatan</span>
            <div style={{ fontSize: 14, color: 'var(--color-text)' }}>
              Ada <strong>{low.length}</strong> item stok rendah. Cek kartu <strong>Stok Rendah</strong>.
            </div>
          </div>

          <button
            type="button"
            className="button button-outline"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Lihat Ringkasan
          </button>
        </div>
      )}

      {/* Quick actions */}
      <section className="card" style={{ padding: 'var(--space-5)' }}>
        <div style={cardHeadRow}>
          <h2 style={cardTitle}>Tindakan Cepat</h2>
          <p style={cardHint}>Shortcut operasional</p>
        </div>
        <div style={divider}>
          <QuickActions
            data={acts}
            loading={loading}
            error={err}
            onRun={(a) => {
              if (a.type === 'LOW_STOCK') alert(`Low stock count: ${a.payload?.count ?? 0}`);
              if (a.type === 'PAYMENT_CHECK') alert('Buka daftar pembayaran untuk cek transaksi PENDING/FAILED.');
            }}
          />
        </div>
      </section>

      <style>{responsiveCss}</style>
    </div>
  );
}

```
</details>

### src/pages/delivery/DeliveryDetail.tsx

- SHA: `a8bf22b52871`  
- Ukuran: 16 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/pages/delivery/DeliveryDetail.tsx
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  damageClaim,
  getDelivery,
  updateStatus,
  assignCourier,
  getWaybillHtml,
  sendWaybillWhatsapp,
} from "../../api/deliveries";
import type { DeliveryDetail } from "../../types/delivery";
import DeliveryStatusStepper from "../../components/delivery/DeliveryStatusStepper";
import AssignCourierSelect from "../../components/delivery/AssignCourierSelect";
import DamageClaimDialog from "../../components/delivery/DamageClaimDialog";
import WaybillPreview from "../../components/delivery/WaybillPreview";
import { isAxiosError } from "axios";
import { useAuth } from "../../store/auth";

export default function DeliveryDetail(): React.ReactElement {
  const { id } = useParams();
  const nav = useNavigate();
  const { hasRole } = useAuth();

  const [data, setData] = useState<DeliveryDetail | null>(null);
  const [loading, setLoading] = useState(false);
  const [openClaim, setOpenClaim] = useState(false);

  const [wbOpen, setWbOpen] = useState(false);
  const [wbHtml, setWbHtml] = useState<string>("");

  const canAssign =
    hasRole("superadmin") ||
    hasRole("admin_cabang") ||
    hasRole("kasir") ||
    hasRole("gudang");

  const canProgress =
    hasRole("superadmin") ||
    hasRole("admin_cabang") ||
    hasRole("kurir") ||
    hasRole("kasir") ||
    hasRole("gudang");

  useEffect(() => {
    if (!id) return;
    let live = true;
    setLoading(true);
    getDelivery(Number(id))
      .then((d) => {
        if (!live) return;
        setData(d);
        setLoading(false);
      })
      .catch(() => setLoading(false));
    return () => {
      live = false;
    };
  }, [id]);

  async function onOpenWaybill() {
    try {
      const html = await getWaybillHtml(data!.id);
      setWbHtml(html);
      setWbOpen(true);
    } catch (e) {
      alert((e as Error).message || "Gagal memuat surat jalan.");
    }
  }

  async function onSendToCourier() {
    try {
      const { wa_url } = await sendWaybillWhatsapp(data!.id);
      window.open(wa_url, "_blank", "noopener");
    } catch (e) {
      alert((e as Error).message || "Gagal menyiapkan WhatsApp.");
    }
  }

  function fmt(ts: string | null | undefined): string {
    if (!ts) return "-";
    try {
      return new Date(ts).toLocaleString();
    } catch {
      return ts;
    }
  }

  function TypeChip({ type }: { type: string | null | undefined }): React.ReactElement {
    const t = (type ?? "-").toString();
    return (
      <span
        className="badge"
        style={{
          display: "inline-flex",
          alignItems: "center",
          padding: "0.25rem 0.55rem",
          borderRadius: "999px",
          fontSize: "0.78rem",
          lineHeight: 1.2,
          border: "1px solid rgba(0,0,0,0.08)",
          background: "rgba(0,0,0,0.03)",
          opacity: 0.9,
        }}
      >
        {t}
      </span>
    );
  }

  if (loading) {
    return (
      <div className="page">
        <div className="card" style={{ padding: "1.25rem" }}>
          <div className="text-muted">Memuat…</div>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="page">
        <div className="card" style={{ padding: "1.25rem" }}>
          <div style={{ marginBottom: "0.75rem" }}>Data tidak ditemukan.</div>
          <button className="button" onClick={() => nav(-1)}>
            Kembali
          </button>
        </div>
      </div>
    );
  }

  const showAssignBlock = canAssign && ["REQUESTED", "ASSIGNED"].includes(data.status);
  const showProgressBlock = canProgress && ["ASSIGNED", "PICKED_UP", "ON_ROUTE"].includes(data.status);

  const showWaybillBlock =
    !!data.assigned_to &&
    ["ASSIGNED", "PICKED_UP", "ON_ROUTE", "DELIVERED"].includes(data.status);

  return (
    <div className="page">
      {/* Header lebih rapi */}
      <div
        className="page-header"
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <div style={{ minWidth: 260 }}>
          <h1 className="page-title" style={{ marginBottom: "0.25rem" }}>
            Delivery Detail
          </h1>
          <div className="text-muted" style={{ fontSize: "0.95rem" }}>
            Detail permintaan pickup/delivery, status, kurir, surat jalan, dan timeline.
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", flexWrap: "wrap" }}>
          <Link className="button button-outline" to="/delivery">
            Kembali ke daftar
          </Link>
          <button className="button" onClick={() => nav(-1)}>
            Back
          </button>
        </div>
      </div>

      {/* Ringkasan + status */}
      <div className="card" style={{ marginBottom: "0.9rem" }}>
        {/* Top summary bar */}
        <div
          className="toolbar"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            <div className="mono" style={{ fontWeight: 700 }}>
              Order: {data.order_code ?? `#${data.order_id}`}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
              <TypeChip type={data.type} />
              <span
                className="badge"
                style={{ borderRadius: "999px" }}
              >
                Status: <b style={{ marginLeft: 6 }}>{data.status}</b>
              </span>
            </div>
          </div>

          <div style={{ minWidth: 240 }}>
            <DeliveryStatusStepper status={data.status} />
          </div>
        </div>

        {/* Info grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0.9rem",
            paddingTop: "0.25rem",
          }}
        >
          {/* Card sub: Info utama */}
          <div className="card card--sub" style={{ padding: "1rem" }}>
            <div className="card-header" style={{ marginBottom: "0.6rem" }}>
              Informasi Utama
            </div>

            <div className="details">
              <div className="details-row">
                <span className="text-muted">Kurir:</span>
                <span style={{ fontWeight: 600 }}>{data.courier_name ?? "-"}</span>
              </div>
              <div className="details-row">
                <span className="text-muted">Requested:</span>
                <span>{fmt(data.requested_at)}</span>
              </div>
              <div className="details-row">
                <span className="text-muted">Completed:</span>
                <span>{fmt(data.completed_at)}</span>
              </div>
            </div>
          </div>

          {/* Card sub: Alamat */}
          <div className="card card--sub" style={{ padding: "1rem" }}>
            <div className="card-header" style={{ marginBottom: "0.6rem" }}>
              Alamat
            </div>

            <div className="details">
              <div className="details-row">
                <span className="text-muted">Pickup:</span>
                <span className="truncate-1" title={data.pickup_address ?? ""}>
                  {data.pickup_address ?? "-"}
                </span>
              </div>
              <div className="details-row">
                <span className="text-muted">Delivery:</span>
                <span className="truncate-1" title={data.delivery_address ?? ""}>
                  {data.delivery_address ?? "-"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Assign courier */}
        {showAssignBlock && (
          <div
            className="card card--sub"
            style={{
              marginTop: "0.9rem",
              padding: "1rem",
            }}
          >
            <div
              className="toolbar"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "0.9rem",
                flexWrap: "wrap",
              }}
            >
              <div style={{ minWidth: 260 }}>
                <div style={{ fontWeight: 700, marginBottom: "0.25rem" }}>
                  Assign Kurir
                </div>
                <div className="text-muted text-sm">
                  Pilih kurir atau gunakan Auto-assign.
                </div>
              </div>

              <div style={{ minWidth: 240 }}>
                <AssignCourierSelect
                  value={data.assigned_to ?? null}
                  allowAuto
                  onChange={async (val) => {
                    const auto = val === -1;
                    try {
                      if (auto) {
                        await assignCourier(data.id, { auto: true });
                      } else {
                        const payload = val !== null ? { assigned_to: val } : {};
                        await assignCourier(data.id, payload);
                      }
                      const fresh = await getDelivery(data.id);
                      setData(fresh);
                    } catch (err: unknown) {
                      if (isAxiosError(err)) {
                        if (err.response?.status === 403) {
                          alert("Anda tidak memiliki izin untuk assign kurir di cabang ini.");
                        } else {
                          const serverMsg = (err.response?.data as { message?: string } | undefined)?.message;
                          alert(serverMsg ?? err.message ?? "Gagal assign kurir.");
                        }
                      } else {
                        alert((err as Error).message);
                      }
                    }
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Progress actions */}
        {showProgressBlock && (
          <div
            className="card card--sub"
            style={{
              marginTop: "0.9rem",
              padding: "1rem",
            }}
          >
            <div style={{ fontWeight: 700, marginBottom: "0.6rem" }}>
              Aksi Status
            </div>

            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              {data.status === "ASSIGNED" && (
                <button
                  className="button button-outline"
                  onClick={async () => {
                    await updateStatus(data.id, { status: "PICKED_UP" });
                    setData(await getDelivery(data.id));
                  }}
                >
                  Mark Picked
                </button>
              )}

              {data.status === "PICKED_UP" && (
                <button
                  className="button button-outline"
                  onClick={async () => {
                    await updateStatus(data.id, { status: "ON_ROUTE" });
                    setData(await getDelivery(data.id));
                  }}
                >
                  On Route
                </button>
              )}

              {data.status === "ON_ROUTE" && (
                <button
                  className="button button-primary"
                  onClick={async () => {
                    await updateStatus(data.id, { status: "DELIVERED" });
                    setData(await getDelivery(data.id));
                  }}
                >
                  Delivered
                </button>
              )}

              <button className="button" onClick={() => setOpenClaim(true)}>
                Klaim Kerusakan…
              </button>

              <span className="text-muted text-sm" style={{ marginLeft: "0.25rem" }}>
                (Aksi muncul sesuai status &amp; role.)
              </span>
            </div>
          </div>
        )}

        {/* Surat Jalan: dimasukkan ke dalam card agar tidak menggantung */}
        {showWaybillBlock && (
          <div
            className="card card--sub"
            style={{
              marginTop: "0.9rem",
              padding: "1rem",
            }}
          >
            <div style={{ fontWeight: 700, marginBottom: "0.6rem" }}>Surat Jalan</div>

            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <button className="button button-outline" onClick={onOpenWaybill}>
                Lihat / Print Surat Jalan
              </button>
              <button className="button" onClick={onSendToCourier}>
                Kirim ke WhatsApp Kurir
              </button>
              <span className="text-muted text-sm">
                Tersedia setelah kurir di-assign.
              </span>
            </div>
          </div>
        )}

        {/* Responsif grid info */}
        <style>
          {`
            @media (max-width: 900px) {
              .page .card[style*="grid-template-columns: 1fr 1fr"] {
                grid-template-columns: 1fr !important;
              }
            }
          `}
        </style>
      </div>

      {/* Timeline */}
      <div className="card">
        <div
          className="toolbar"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <div className="card-header" style={{ margin: 0 }}>
            Timeline
          </div>
          <span className="text-muted text-sm">
            Total event: <b>{data.events.length}</b>
          </span>
        </div>

        <ul className="list" style={{ paddingTop: "0.25rem" }}>
          {data.events.length === 0 && (
            <li className="text-muted" style={{ padding: "0.75rem 0.25rem" }}>
              Belum ada event.
            </li>
          )}

          {data.events.map((ev) => (
            <li
              key={ev.id}
              className="card card--sub"
              style={{
                padding: "1rem",
                marginBottom: "0.6rem",
              }}
            >
              <div
                className="toolbar"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "0.75rem",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ minWidth: 220 }}>
                  <div className="strong" style={{ fontWeight: 800 }}>
                    {ev.status}
                  </div>
                  <div className="text-muted text-sm">{fmt(ev.occurred_at)}</div>
                </div>

                {ev.photo_url && (
                  <a
                    href={ev.photo_url}
                    target="_blank"
                    rel="noreferrer"
                    className="button button-outline"
                    style={{ textDecoration: "none" }}
                  >
                    Lihat Foto
                  </a>
                )}
              </div>

              {ev.note && (
                <div style={{ marginTop: "0.5rem", lineHeight: 1.6 }}>
                  {ev.note}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <DamageClaimDialog
        open={openClaim}
        onClose={() => setOpenClaim(false)}
        onSubmit={async ({ note, file }) => {
          await damageClaim(data.id, { note: note ?? undefined, file: file ?? undefined });
          setOpenClaim(false);
          setData(await getDelivery(data.id));
        }}
      />

      {wbOpen && <WaybillPreview html={wbHtml} onClose={() => setWbOpen(false)} />}
    </div>
  );
}

```
</details>

### src/pages/delivery/DeliveryIndex.tsx

- SHA: `af50149baa09`  
- Ukuran: 18 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/pages/delivery/DeliveryIndex.tsx
import React, { useEffect, useMemo, useState } from "react";
import {
  listDeliveries,
  assignCourier,
  updateStatus,
  sendWaybillWhatsapp,
  getWaybillHtml,
} from "../../api/deliveries";
import type { Delivery, DeliveryQuery } from "../../types/delivery";
import DeliveryTabs from "../../components/delivery/DeliveryTabs";
import AssignCourierSelect from "../../components/delivery/AssignCourierSelect";
import DeliveryStatusStepper from "../../components/delivery/DeliveryStatusStepper";
import { Link } from "react-router-dom";
import { isAxiosError } from "axios";
import { useAuth } from "../../store/auth";

export default function DeliveryIndex(): React.ReactElement {
  const { user, hasRole } = useAuth();

  const [query, setQuery] = useState<DeliveryQuery>({
    per_page: 10,
    page: 1,
    sort: "-requested_at",
  });
  const [tab, setTab] = useState<DeliveryQuery["status"] | "ALL">("ALL");
  const [items, setItems] = useState<Delivery[]>([]);
  const [loading, setLoading] = useState(false);
  const [meta, setMeta] = useState({
    current_page: 1,
    per_page: 10,
    total: 0,
    last_page: 1,
  });

  const canAssign =
    hasRole("superadmin") ||
    hasRole("admin_cabang") ||
    hasRole("kasir") ||
    hasRole("gudang");

  const canProgress =
    hasRole("superadmin") ||
    hasRole("admin_cabang") ||
    hasRole("kurir") ||
    hasRole("kasir") ||
    hasRole("gudang");

  const appliedQuery = useMemo(() => {
    const base: DeliveryQuery = { ...query };
    if (tab && tab !== "ALL") base.status = tab;
    if (hasRole("kurir") && user) base.mine = 1;
    return base;
  }, [query, tab, hasRole, user]);

  useEffect(() => {
    let live = true;
    setLoading(true);
    listDeliveries(appliedQuery)
      .then((p) => {
        if (!live) return;
        setItems(p.data);
        setMeta(p.meta);
        setLoading(false);
      })
      .catch(() => setLoading(false));
    return () => {
      live = false;
    };
  }, [appliedQuery]);

  async function openWaybill(id: number) {
    try {
      const html = await getWaybillHtml(id);
      const w = window.open("", "_blank", "noopener,noreferrer");
      if (w) {
        w.document.open();
        w.document.write(html);
        w.document.close();
      } else {
        alert("Popup diblokir. Izinkan pop-up untuk melihat surat jalan.");
      }
    } catch (e) {
      alert((e as Error).message || "Gagal memuat surat jalan.");
    }
  }

  function renderTypeChip(type: string | null | undefined): React.ReactElement {
    const t = (type ?? "-").toString();
    return (
      <span
        className="badge"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.4rem",
          padding: "0.25rem 0.55rem",
          borderRadius: "999px",
          fontSize: "0.78rem",
          lineHeight: 1.2,
          opacity: 0.9,
        }}
      >
        {t}
      </span>
    );
  }

  function renderStatusLabel(status: Delivery["status"]): React.ReactElement {
    return (
      <span
        className="badge"
        style={{
          display: "inline-flex",
          alignItems: "center",
          padding: "0.25rem 0.55rem",
          borderRadius: "999px",
          fontSize: "0.78rem",
          lineHeight: 1.2,
          opacity: 0.9,
          border: "1px solid rgba(0,0,0,0.08)",
          background: "rgba(0,0,0,0.03)",
          marginTop: "0.35rem",
        }}
      >
        {status}
      </span>
    );
  }

  return (
    <div className="page">
      {/* Header: lebih “rapi” + ada info ringkas */}
      <div
        className="page-header"
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <div style={{ minWidth: 260 }}>
          <h1 className="page-title" style={{ marginBottom: "0.25rem" }}>
            Pickup &amp; Delivery
          </h1>
          <div className="text-muted" style={{ fontSize: "0.95rem" }}>
            Kelola permintaan pickup/delivery, assign kurir, update status, dan surat jalan.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <span className="badge" style={{ borderRadius: "999px" }}>
            Total: <b style={{ marginLeft: 6 }}>{meta.total}</b>
          </span>
          <button
            type="button"
            className="button button-outline"
            onClick={() => setQuery((q) => ({ ...q, page: 1 }))}
            disabled={loading}
          >
            Refresh
          </button>
        </div>
      </div>

      {/* Toolbar: tabs + search + per page (lebih konsisten, tidak mepet) */}
      <div className="card" style={{ marginBottom: "0.9rem" }}>
        <div
          className="toolbar"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <div className="toolbar-left" style={{ minWidth: 260 }}>
            <DeliveryTabs
              value={tab ?? "ALL"}
              onChange={(k) => setTab(k === "ALL" ? "ALL" : k)}
            />
          </div>

          <div
            className="toolbar-right"
            style={{
              display: "flex",
              gap: "0.6rem",
              alignItems: "center",
              flexWrap: "wrap",
              justifyContent: "flex-end",
              flex: 1,
            }}
          >
            <input
              className="input"
              placeholder="Cari kode / alamat…"
              value={query.q ?? ""}
              onChange={(e) =>
                setQuery((q) => ({ ...q, q: e.target.value, page: 1 }))
              }
              style={{ minWidth: 240 }}
            />

            <select
              className="input"
              value={query.per_page ?? 10}
              onChange={(e) =>
                setQuery((q) => ({
                  ...q,
                  per_page: Number(e.target.value),
                  page: 1,
                }))
              }
              style={{ width: 130 }}
              aria-label="Per page"
            >
              <option value={10}>10 / page</option>
              <option value={20}>20 / page</option>
              <option value={50}>50 / page</option>
            </select>
          </div>
        </div>
      </div>

      {/* List: Tabel lebih “stabil” (kolom punya lebar, aksi wrap) */}
      <div className="card">
        <div className="table-responsive">
          <table className="table table-hover" style={{ tableLayout: "fixed" }}>
            <thead>
              <tr>
                <th style={{ width: 150 }}>Kode</th>
                <th style={{ width: 110 }}>Jenis</th>
                <th style={{ width: 260 }}>Kurir</th>
                <th style={{ width: 230 }}>Status</th>
                <th>Alamat</th>
                <th className="text-center" style={{ width: 340 }}>
                  Aksi
                </th>
              </tr>
            </thead>

            <tbody>
              {loading && (
                <tr>
                  <td colSpan={6} style={{ padding: "1.25rem" }}>
                    Memuat…
                  </td>
                </tr>
              )}

              {!loading && items.length === 0 && (
                <tr>
                  <td colSpan={6} style={{ padding: "1.25rem" }}>
                    Tidak ada data.
                  </td>
                </tr>
              )}

              {items.map((d) => {
                const canShowAssign =
                  canAssign && ["REQUESTED", "ASSIGNED"].includes(d.status);

                const canShowProgress =
                  canProgress &&
                  ["ASSIGNED", "PICKED_UP", "ON_ROUTE"].includes(d.status);

                const canShowWaybill =
                  !!d.assigned_to &&
                  ["ASSIGNED", "PICKED_UP", "ON_ROUTE", "DELIVERED"].includes(
                    d.status
                  );

                return (
                  <tr key={d.id}>
                    {/* Kode */}
                    <td className="mono">
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                        <Link to={`/delivery/${d.id}`} className="link">
                          {d.order_code ?? `#${d.order_id}`}
                        </Link>
                        <span className="text-muted" style={{ fontSize: "0.8rem" }}>
                          ID: {d.id}
                        </span>
                      </div>
                    </td>

                    {/* Jenis */}
                    <td>{renderTypeChip(d.type)}</td>

                    {/* Kurir + Assign */}
                    <td>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.75rem",
                          justifyContent: "space-between",
                          flexWrap: "wrap",
                        }}
                      >
                        <div style={{ minWidth: 140 }}>
                          <div style={{ fontWeight: 600 }}>
                            {d.courier_name ?? "-"}
                          </div>
                          <div className="text-muted" style={{ fontSize: "0.82rem" }}>
                            {d.assigned_to ? "Sudah di-assign" : "Belum di-assign"}
                          </div>
                        </div>

                        {canShowAssign && (
                          <div style={{ minWidth: 160 }}>
                            <AssignCourierSelect
                              value={d.assigned_to ?? null}
                              allowAuto
                              onChange={async (val) => {
                                const auto = val === -1;
                                try {
                                  if (auto) {
                                    await assignCourier(d.id, { auto: true });
                                    setItems((arr) =>
                                      arr.map((x) => (x.id === d.id ? { ...x } : x))
                                    );
                                  } else {
                                    const payload = val !== null ? { assigned_to: val } : {};
                                    await assignCourier(d.id, payload);
                                    setItems((arr) =>
                                      arr.map((x) =>
                                        x.id === d.id ? { ...x, assigned_to: val } : x
                                      )
                                    );
                                  }
                                } catch (err: unknown) {
                                  if (isAxiosError(err)) {
                                    if (err.response?.status === 403) {
                                      alert("Anda tidak memiliki izin untuk assign kurir di cabang ini.");
                                    } else {
                                      const serverMsg = (
                                        err.response?.data as { message?: string } | undefined
                                      )?.message;
                                      alert(serverMsg ?? err.message ?? "Gagal assign kurir.");
                                    }
                                  } else {
                                    alert((err as Error).message);
                                  }
                                }
                              }}
                            />
                          </div>
                        )}
                      </div>
                    </td>

                    {/* Status */}
                    <td>
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                        <DeliveryStatusStepper status={d.status} />
                        {renderStatusLabel(d.status)}
                      </div>
                    </td>

                    {/* Alamat */}
                    <td>
                      <div className="truncate-1" style={{ fontWeight: 600 }}>
                        {(d.pickup_address || d.delivery_address)
                          ? `${d.pickup_address ?? ""}${
                              d.delivery_address ? " → " + d.delivery_address : ""
                            }`
                          : "-"}
                      </div>
                    </td>

                    {/* Aksi */}
                    <td className="text-center">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          gap: "0.5rem",
                          flexWrap: "wrap",
                        }}
                      >
                        {/* Progress buttons */}
                        {canShowProgress && d.status === "ASSIGNED" && (
                          <button
                            className="button button-outline"
                            onClick={async () => {
                              await updateStatus(d.id, { status: "PICKED_UP" as const });
                              setItems((xs) =>
                                xs.map((x) =>
                                  x.id === d.id ? { ...x, status: "PICKED_UP" } : x
                                )
                              );
                            }}
                          >
                            Mark Picked
                          </button>
                        )}

                        {canShowProgress && d.status === "PICKED_UP" && (
                          <button
                            className="button button-outline"
                            onClick={async () => {
                              await updateStatus(d.id, { status: "ON_ROUTE" as const });
                              setItems((xs) =>
                                xs.map((x) =>
                                  x.id === d.id ? { ...x, status: "ON_ROUTE" } : x
                                )
                              );
                            }}
                          >
                            On Route
                          </button>
                        )}

                        {canShowProgress && d.status === "ON_ROUTE" && (
                          <button
                            className="button button-primary"
                            onClick={async () => {
                              await updateStatus(d.id, { status: "DELIVERED" as const });
                              setItems((xs) =>
                                xs.map((x) =>
                                  x.id === d.id ? { ...x, status: "DELIVERED" } : x
                                )
                              );
                            }}
                          >
                            Delivered
                          </button>
                        )}

                        {/* Surat Jalan */}
                        {canShowWaybill && (
                          <>
                            <button
                              className="button button-outline"
                              onClick={() => openWaybill(d.id)}
                            >
                              Lihat / Print SJ
                            </button>

                            <button
                              className="button button-outline"
                              onClick={async () => {
                                try {
                                  const { wa_url } = await sendWaybillWhatsapp(d.id);
                                  window.open(wa_url, "_blank", "noopener");
                                } catch (e) {
                                  alert((e as Error).message || "Gagal menyiapkan WhatsApp.");
                                }
                              }}
                            >
                              WA Surat Jalan
                            </button>
                          </>
                        )}

                        {/* Link detail: selalu ada, jadi user tidak “bingung” */}
                        <Link to={`/delivery/${d.id}`} className="button button-ghost">
                          Detail
                        </Link>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination: dibuat lebih konsisten, tidak terlalu “kosong” */}
      <div className="card" style={{ marginTop: "0.9rem" }}>
        <div
          className="toolbar"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <div className="text-muted">
            Page <b>{meta.current_page}</b> / <b>{meta.last_page}</b> • Total{" "}
            <b>{meta.total}</b>
          </div>

          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <button
              className="button"
              disabled={meta.current_page <= 1}
              onClick={() =>
                setQuery((q) => ({ ...q, page: Math.max(1, (q.page ?? 1) - 1) }))
              }
            >
              Prev
            </button>
            <button
              className="button"
              disabled={meta.current_page >= meta.last_page}
              onClick={() => setQuery((q) => ({ ...q, page: (q.page ?? 1) + 1 }))}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

```
</details>

### src/pages/fees/FeeIndex.tsx

- SHA: `332938733e2e`  
- Ukuran: 6 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/pages/fees/FeeIndex.tsx
import { useEffect, useMemo, useState } from "react";
import { listFees, exportFeesCsv } from "../../api/pos";
import type { FeeEntry, FeePaged, FeePayStatus, ID } from "../../types/pos";
import PeriodFilter, { type Period } from "../../components/fees/PeriodFilter";
import FeeTable from "../../components/fees/FeeTable";
import FeeDetailDialog from "../../components/fees/FeeDetailDialog";
import { useAuth } from "../../store/auth";
import CabangSelect from "../../components/stock/CabangSelect";

export default function FeeIndex(): React.ReactElement {
  const { user } = useAuth();
  const [rows, setRows] = useState<FeeEntry[]>([]);
  const [meta, setMeta] = useState<FeePaged["meta"]>({ current_page: 1, per_page: 20, total: 0, last_page: 1 });
  const [period, setPeriod] = useState<Period>({ from: undefined, to: undefined });
  const [branchId, setBranchId] = useState<ID | undefined>(undefined);
  const [status, setStatus] = useState<FeePayStatus | "">("");
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(20);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selected, setSelected] = useState<FeeEntry | null>(null);

  // Enforce visibility
  useEffect(() => {
    let ignore = false;
    const q = {
      cabang_id: branchId,
      from: period.from,
      to: period.to,
      pay_status: (status || undefined) as FeePayStatus | undefined,
      page,
      per_page: perPage,
    };
    setLoading(true);
    setError(null);
    listFees(q)
      .then((res) => {
        if (ignore) return;
        setRows(res.data);
        setMeta(res.meta);
      })
      .catch((e: unknown) => {
        if (ignore) return;
        setError(e instanceof Error ? e.message : "Gagal memuat data.");
        setRows([]);
      })
      .finally(() => !ignore && setLoading(false));
    return () => {
      ignore = true;
    };
  }, [branchId, period.from, period.to, status, page, perPage]);

  const canSwitchBranch = useMemo(() => user?.role === "superadmin" || user?.role === "admin_cabang", [user?.role]);

  async function onExport(): Promise<void> {
    const blob = await exportFeesCsv({
      cabang_id: branchId,
      from: period.from,
      to: period.to,
      pay_status: (status || undefined) as FeePayStatus | undefined,
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "fee_entries.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div>
      {/* Header */}
      <div className="card" style={{ marginBottom: 12 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <h2>Fee Tracking</h2>
          <button className="button button-primary" onClick={onExport} disabled={loading}>
            Export CSV
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="card" style={{ marginBottom: 12 }}>
        <div className="form-row form-row--3">
          {/* Periode */}
          <div>
            <label>Periode</label>
            <PeriodFilter value={period} onChange={setPeriod} />
          </div>

          {/* Status */}
          <div>
            <label>Status</label>
            <select
              value={status}
              onChange={(e) => setStatus((e.target.value || "") as FeePayStatus | "")}
              className="select"
            >
              <option value="">Semua</option>
              <option value="UNPAID">UNPAID</option>
              <option value="PARTIAL">PARTIAL</option>
              <option value="PAID">PAID</option>
            </select>
          </div>

          {/* Cabang (khusus superadmin/admin_cabang) */}
          {canSwitchBranch ? (
            <div>
              <label>Cabang</label>
              <CabangSelect value={branchId} onChange={(id) => setBranchId(id ?? undefined)} />
            </div>
          ) : (
            <div />
          )}
        </div>

        {/* Page size */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 12 }}>
          <label>Per halaman</label>
          <select
            className="select"
            value={perPage}
            onChange={(e) => {
              setPerPage(Number(e.target.value));
              setPage(1);
            }}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>
      </div>

      {/* Tabel */}
      <FeeTable rows={rows} loading={loading} error={error} onSelect={setSelected} onExport={onExport} />

      {/* Pager */}
      <div className="card" style={{ marginTop: 12 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <div>
            Halaman {meta.current_page} / {meta.last_page} • Total {meta.total}
          </div>
          <div style={{ display: "inline-flex", gap: 8 }}>
            <button
              className="button"
              disabled={meta.current_page <= 1 || loading}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
            >
              « Prev
            </button>
            <button
              className="button"
              disabled={meta.current_page >= meta.last_page || loading}
              onClick={() => setPage((p) => Math.min(meta.last_page, p + 1))}
            >
              Next »
            </button>
          </div>
        </div>
      </div>

      {/* Detail */}
      <FeeDetailDialog open={!!selected} onClose={() => setSelected(null)} entry={selected ?? undefined} />
    </div>
  );
}

```
</details>

### src/pages/fees/FeeMaster.tsx

- SHA: `2b8a384def32`  
- Ukuran: 15 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/pages/fees/FeeMaster.tsx
import React, { useEffect, useMemo, useState } from "react";
import type {
  Fee, FeeBase, FeeCalcType, FeeCreatePayload, FeeKind, FeeQuery, PaginatedResponse
} from "../../types/fees";
import { listFees, createFee, updateFee, deleteFee } from "../../api/fees";

type CabangOption = { id: number; name: string };

const KIND_OPTIONS: FeeKind[] = ["SALES", "CASHIER", "COURIER"];
const CALC_OPTIONS: FeeCalcType[] = ["PERCENT", "FIXED"];
const BASE_OPTIONS: FeeBase[] = ["GRAND_TOTAL", "DELIVERY"];

function useAsync<T>(fn: () => Promise<T>, deps: React.DependencyList) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setErr(null);
    fn()
      .then((res) => mounted && setData(res))
      .catch((e: unknown) => mounted && setErr(e instanceof Error ? e.message : "Error"))
      .finally(() => mounted && setLoading(false));
    return () => { mounted = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { data, loading, err, setData };
}

/* ---------- Form Dialog ---------- */
type FormMode = { type: "create" } | { type: "edit"; row: Fee };

function FeeFormDialog(props: {
  open: boolean;
  onClose: () => void;
  mode: FormMode;
  cabangOptions: CabangOption[];
  onSaved: (saved: Fee) => void;
}) {
  const { open, onClose, mode, cabangOptions, onSaved } = props;

  const initial: FeeCreatePayload = useMemo(() => {
    if (mode.type === "edit") {
      const r = mode.row;
      return {
        cabang_id: r.cabang_id,
        name: r.name,
        kind: r.kind,
        calc_type: r.calc_type,
        rate: r.rate,
        base: r.base,
        is_active: r.is_active,
      };
    }
    return {
      cabang_id: cabangOptions[0]?.id ?? 1,
      name: "",
      kind: "CASHIER",
      calc_type: "PERCENT",
      rate: 0,
      base: "GRAND_TOTAL",
      is_active: true,
    };
  }, [mode, cabangOptions]);

  const [values, setValues] = useState<FeeCreatePayload>(initial);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => { setValues(initial); setError(null); }, [initial, open]);

  function onChange<K extends keyof FeeCreatePayload>(key: K, val: FeeCreatePayload[K]) {
    setValues((v) => ({ ...v, [key]: val }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      if (values.calc_type === "PERCENT" && values.rate > 100) {
        throw new Error("Rate persentase tidak boleh lebih dari 100.");
      }
      const saved =
        mode.type === "edit"
          ? await updateFee(mode.row.id, values)
          : await createFee(values);
      onSaved(saved);
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Gagal menyimpan fee");
    } finally {
      setSubmitting(false);
    }
  }

  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed", inset: 0, zIndex: 40,
        display: "flex", alignItems: "center", justifyContent: "center",
        background: "rgba(0,0,0,.3)"
      }}
      aria-modal
      role="dialog"
    >
      <div className="card" style={{ width: "100%", maxWidth: 640 }}>
        <h2> {mode.type === "edit" ? "Edit Fee" : "Tambah Fee"} </h2>

        {error && (
          <div className="badge badge-danger" style={{ marginBottom: 8 }}>
            {error}
          </div>
        )}

        <form onSubmit={onSubmit}>
          <div className="form-row form-row--2">
            <div>
              <label>Cabang</label>
              <select
                className="select"
                value={values.cabang_id}
                onChange={(e) => onChange("cabang_id", Number(e.target.value))}
              >
                {cabangOptions.map((c) => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label>Nama</label>
              <input
                className="input"
                value={values.name}
                onChange={(e) => onChange("name", e.target.value)}
                required
                maxLength={100}
              />
            </div>
          </div>

          <div className="form-row form-row--3">
            <div>
              <label>Kind</label>
              <select
                className="select"
                value={values.kind}
                onChange={(e) => onChange("kind", e.target.value as typeof values.kind)}
              >
                {KIND_OPTIONS.map((k) => <option key={k} value={k}>{k}</option>)}
              </select>
            </div>

            <div>
              <label>Calc</label>
              <select
                className="select"
                value={values.calc_type}
                onChange={(e) => onChange("calc_type", e.target.value as typeof values.calc_type)}
              >
                {CALC_OPTIONS.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div>
              <label>Base</label>
              <select
                className="select"
                value={values.base}
                onChange={(e) => onChange("base", e.target.value as typeof values.base)}
              >
                {BASE_OPTIONS.map((b) => <option key={b} value={b}>{b}</option>)}
              </select>
            </div>
          </div>

          <div className="form-row form-row--2">
            <div>
              <label>{values.calc_type === "PERCENT" ? "Rate (%)" : "Rate (Rp)"}</label>
              <input
                type="number"
                step="0.01"
                min={0}
                className="input"
                value={values.rate}
                onChange={(e) => onChange("rate", Number(e.target.value))}
                required
              />
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 8, paddingTop: 22 }}>
              <input
                id="fee-active"
                type="checkbox"
                checked={values.is_active}
                onChange={(e) => onChange("is_active", e.target.checked)}
              />
              <label htmlFor="fee-active" style={{ margin: 0 }}>Aktif</label>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 8 }}>
            <button
              type="button"
              className="button button-outline"
              onClick={onClose}
              disabled={submitting}
            >
              Batal
            </button>
            <button
              type="submit"
              className="button button-primary"
              disabled={submitting}
            >
              {submitting ? "Menyimpan..." : "Simpan"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

/* ---------- Table Row Actions ---------- */
function RowActions(props: {
  row: Fee;
  onEdit: (row: Fee) => void;
  onDelete: (row: Fee) => void;
}) {
  const { row, onEdit, onDelete } = props;
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
      <button className="button button-outline" onClick={() => onEdit(row)}>Edit</button>
      <button className="button button-outline" onClick={() => onDelete(row)}>Delete</button>
    </div>
  );
}

/* ---------- Main Page ---------- */
export default function FeeMaster(): React.ReactElement {
  const cabangOptions: CabangOption[] = useMemo(() => [
    { id: 1, name: "Cabang 1" },
    { id: 2, name: "Cabang 2" },
  ], []);

  const [q, setQ] = useState<FeeQuery>({
    page: 1, per_page: 10, sort: "-created_at",
    cabang_id: cabangOptions[0]?.id ?? 1,
    is_active: undefined, kind: undefined, base: undefined, q: "",
  });

  const { data, loading, err, setData } = useAsync<PaginatedResponse<Fee>>(
    () => listFees(q),
    [q.page, q.per_page, q.sort, q.q, q.cabang_id, q.is_active, q.kind, q.base]
  );

  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<FormMode>({ type: "create" });

  function refresh() {
    setQ((s) => ({ ...s }));
  }

  function onSaved(saved: Fee) {
    setData((prev) => {
      if (!prev) return prev;
      const idx = prev.data.findIndex((x) => x.id === saved.id);
      if (idx === -1) return prev;
      const next = { ...prev, data: [...prev.data] };
      next.data[idx] = saved;
      return next;
    });
    if (mode.type === "create") {
      setQ((s) => ({ ...s, page: 1, sort: "-created_at" }));
    }
  }

  async function onConfirmDelete(row: Fee) {
    if (!confirm(`Hapus fee "${row.name}"?`)) return;
    await deleteFee(row.id);
    refresh();
  }

  const total = data?.meta.total ?? 0;
  const current = data?.meta.current_page ?? 1;
  const last = data?.meta.last_page ?? 1;

  return (
    <div>
      {/* Header */}
      <div className="card" style={{ marginBottom: 12 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <h1>Fees (Master)</h1>
          <button
            className="button button-primary"
            onClick={() => { setMode({ type: "create" }); setOpen(true); }}
          >
            + Tambah
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="card" style={{ marginBottom: 12 }}>
        <div className="form-row form-row--3">
          <div>
            <label>Cabang</label>
            <select
              className="select"
              value={q.cabang_id}
              onChange={(e) => setQ((s) => ({ ...s, page: 1, cabang_id: Number(e.target.value) }))}
            >
              {cabangOptions.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </div>

          <div>
            <label>Kind</label>
            <select
              className="select"
              value={q.kind ?? ""}
              onChange={(e) =>
                setQ((s) => ({ ...s, page: 1, kind: e.target.value ? (e.target.value as typeof s.kind) : undefined }))
              }
            >
              <option value="">(All)</option>
              {KIND_OPTIONS.map((k) => <option key={k} value={k}>{k}</option>)}
            </select>
          </div>

          <div>
            <label>Base</label>
            <select
              className="select"
              value={q.base ?? ""}
              onChange={(e) =>
                setQ((s) => ({ ...s, page: 1, base: e.target.value ? (e.target.value as typeof s.base) : undefined }))
              }
            >
              <option value="">(All)</option>
              {BASE_OPTIONS.map((b) => <option key={b} value={b}>{b}</option>)}
            </select>
          </div>
        </div>

        <div className="form-row form-row--2" style={{ marginTop: 8 }}>
          <div>
            <label>Status</label>
            <select
              className="select"
              value={q.is_active === undefined ? "" : q.is_active ? "1" : "0"}
              onChange={(e) => {
                const v = e.target.value;
                setQ((s) => ({ ...s, page: 1, is_active: v === "" ? undefined : v === "1" }));
              }}
            >
              <option value="">(All)</option>
              <option value="1">Active</option>
              <option value="0">Inactive</option>
            </select>
          </div>

          <div>
            <label>Search</label>
            <input
              className="input"
              placeholder="Cari nama…"
              value={q.q ?? ""}
              onChange={(e) => setQ((s) => ({ ...s, page: 1, q: e.target.value }))}
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="card">
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>Cabang</th>
                <th>Nama</th>
                <th>Kind</th>
                <th>Calc</th>
                <th style={{ textAlign: "right" }}>Rate</th>
                <th>Base</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {loading && (
                <tr><td colSpan={8}>Loading…</td></tr>
              )}
              {err && !loading && (
                <tr><td colSpan={8} style={{ color: "var(--color-danger, #b91c1c)" }}>{err}</td></tr>
              )}
              {!loading && !err && (data?.data.length ?? 0) === 0 && (
                <tr><td colSpan={8}>Tidak ada data.</td></tr>
              )}

              {data?.data.map((r) => (
                <tr key={r.id}>
                  <td>#{r.cabang_id}</td>
                  <td>{r.name}</td>
                  <td>{r.kind}</td>
                  <td>{r.calc_type}</td>
                  <td style={{ textAlign: "right" }}>
                    {r.calc_type === "PERCENT" ? `${r.rate}%` : new Intl.NumberFormat("id-ID").format(r.rate)}
                  </td>
                  <td>{r.base}</td>
                  <td>
                    {r.is_active ? (
                      <span className="badge badge-success">Active</span>
                    ) : (
                      <span className="badge badge-danger">Inactive</span>
                    )}
                  </td>
                  <td>
                    <RowActions
                      row={r}
                      onEdit={(row) => { setMode({ type: "edit", row }); setOpen(true); }}
                      onDelete={onConfirmDelete}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="card" style={{ marginTop: 12 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <div>Total: {total}</div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <button
              className="button"
              onClick={() => setQ((s) => ({ ...s, page: Math.max(1, (s.page ?? 1) - 1) }))}
              disabled={current <= 1}
            >
              Prev
            </button>
            <div>Page {current} / {last}</div>
            <button
              className="button"
              onClick={() => setQ((s) => ({ ...s, page: Math.min(last, (s.page ?? 1) + 1) }))}
              disabled={current >= last}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Form */}
      <FeeFormDialog
        open={open}
        onClose={() => setOpen(false)}
        mode={mode}
        cabangOptions={cabangOptions}
        onSaved={onSaved}
      />
    </div>
  );
}

```
</details>

### src/pages/inventory/ReceiveLotPage.tsx

- SHA: `24f5af000962`  
- Ukuran: 3 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/pages/inventory/ReceiveLotPage.tsx
import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import ReceiveLotForm from "../../components/inventory/ReceiveLotForm";

export default function ReceiveLotPage(): React.ReactElement {
  const loc = useLocation();
  const qs = useMemo(() => new URLSearchParams(loc.search), [loc.search]);

  const defaultGudangId = qs.get("gudang_id") ? Number(qs.get("gudang_id")) : undefined;
  const defaultVariantId = qs.get("variant_id") ? Number(qs.get("variant_id")) : undefined;

  const hasPrefill = Boolean(defaultGudangId || defaultVariantId);

  return (
    <div className="container" style={{ display: "grid", gap: 16 }}>
      {/* Header */}
      <div
        className="card"
        style={{
          padding: "1.25rem 1.25rem",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <div style={{ minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <span className="badge">Inventory</span>
            <span style={{ opacity: 0.6 }}>›</span>
            <span className="badge" style={{ background: "rgba(0,0,0,.04)", color: "var(--color-text)" }}>
              Penerimaan Stok (Lot)
            </span>
            {hasPrefill && (
              <span className="badge" style={{ background: "rgba(22,163,74,.10)", color: "var(--color-success)" }}>
                Prefill aktif
              </span>
            )}
          </div>

          <h2 style={{ marginTop: 10, marginBottom: 6 }}>Penerimaan Stok (Lot)</h2>
          <p style={{ margin: 0 }}>
            Input barang masuk per lot untuk menjaga akurasi stok dan histori penerimaan.
          </p>

          {hasPrefill && (
            <div style={{ marginTop: 10, display: "flex", gap: 8, flexWrap: "wrap" }}>
              {defaultGudangId ? (
                <span className="badge" style={{ background: "rgba(0,0,0,.04)", color: "var(--color-text)" }}>
                  Gudang: #{defaultGudangId}
                </span>
              ) : null}
              {defaultVariantId ? (
                <span className="badge" style={{ background: "rgba(0,0,0,.04)", color: "var(--color-text)" }}>
                  Variant: #{defaultVariantId}
                </span>
              ) : null}
            </div>
          )}
        </div>

        {/* Actions (opsional, tetap aman karena hanya UI) */}
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <Link
            to="/inventory"
            className="button button-outline"
            style={{ textDecoration: "none" }}
          >
            Kembali
          </Link>

          <Link
            to="/inventory/lots"
            className="button button-ghost"
            style={{ textDecoration: "none" }}
          >
            Lihat Lot
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="card" style={{ padding: "1.25rem" }}>
        <ReceiveLotForm
          defaultGudangId={defaultGudangId}
          defaultVariantId={defaultVariantId}
        />
      </div>
    </div>
  );
}

```
</details>

### src/pages/master/Cabangs.tsx

- SHA: `eb4660632518`  
- Ukuran: 8 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/pages/master/Cabangs.tsx
import React, { useMemo, useState } from "react";
import { useBranches } from "../../store/useBranches";
import BranchFilters from "../../components/cabangs/BranchFilters";
import BranchFormDialog from "../../components/cabangs/BranchFormDialog";
import BranchTable from "../../components/cabangs/BranchTable";
import type { Branch, BranchCreatePayload, BranchQuery } from "../../types/branch";
import RequireRole from "../../components/routing/RequireRole";

export default function CabangsPage(): React.ReactElement {
  const {
    items,
    loading,
    error,
    query,
    fetchList,
    create,
    update,
    remove,
    pagination,
  } = useBranches();

  const [openForm, setOpenForm] = useState(false);
  const [editing, setEditing] = useState<Branch | null>(null);

  const title = useMemo(() => "Cabang", []);

  const submit = async (payload: BranchCreatePayload): Promise<boolean> => {
    const ok = editing ? await update(editing.id, payload) : await create(payload);
    if (ok) {
      setOpenForm(false);
      setEditing(null);
    }
    return ok;
  };

  const openCreate = (): void => {
    setEditing(null);
    setOpenForm(true);
  };

  const openEdit = (row: Branch): void => {
    setEditing(row);
    setOpenForm(true);
  };

  const confirmDelete = (row: Branch): void => {
    if (confirm(`Hapus cabang "${row.nama}"?`)) {
      void remove(row.id);
    }
  };

  const goPrev = (): void => pagination.setPage(Math.max(1, pagination.page - 1));
  const goNext = (): void => pagination.setPage(Math.min(pagination.last_page, pagination.page + 1));

  const isFirst = pagination.page <= 1;
  const isLast = pagination.page >= pagination.last_page;

  return (
    <RequireRole roles={["superadmin", "admin_cabang"]}>
      <div className="page">
        {/* PAGE HEADER */}
        <div
          className="card"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            padding: "1.25rem",
          }}
        >
          <div style={{ minWidth: 0 }}>
            <h1 className="h1" style={{ margin: 0 }}>
              {title}
            </h1>
            <p className="text-sm" style={{ margin: "0.35rem 0 0", opacity: 0.75 }}>
              Kelola data cabang, akses gudang per cabang, dan lakukan pemeliharaan data secara terpusat.
            </p>

            <div style={{ marginTop: "0.75rem", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              <span className="badge" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                <span style={{ opacity: 0.75 }}>Total:</span>
                <strong>{pagination.total}</strong>
              </span>
              <span className="badge" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                <span style={{ opacity: 0.75 }}>Halaman:</span>
                <strong>
                  {pagination.page} / {pagination.last_page}
                </strong>
              </span>
              <span className="badge" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                <span style={{ opacity: 0.75 }}>Per halaman:</span>
                <strong>{pagination.per_page}</strong>
              </span>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexShrink: 0 }}>
            <button className="button button-primary" onClick={openCreate}>
              Tambah Cabang
            </button>
          </div>
        </div>

        {/* MAIN WORKSPACE */}
        <div className="card" style={{ padding: "1.25rem" }}>
          {/* Workspace Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              marginBottom: "0.9rem",
            }}
          >
            <div style={{ minWidth: 0 }}>
              <div style={{ fontWeight: 800, letterSpacing: "-0.01em" }}>Daftar Cabang</div>
              <div className="text-sm" style={{ opacity: 0.75, marginTop: "0.25rem" }}>
                Gunakan filter untuk mempercepat pencarian data.
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexShrink: 0 }}>
              <button
                className="button button-outline"
                onClick={() => fetchList()}
                disabled={loading}
                title="Muat ulang data"
              >
                Refresh
              </button>
            </div>
          </div>

          {/* Filters Area */}
          <div
            style={{
              borderRadius: 14,
              border: "1px solid rgba(0,0,0,0.06)",
              padding: "0.9rem",
              background: "rgba(0,0,0,0.01)",
            }}
          >
            <BranchFilters
              value={query as BranchQuery}
              onChange={(next) => fetchList(next)}
              onSearch={() => fetchList()}
            />
          </div>

          {/* Divider */}
          <div
            style={{
              height: 1,
              background: "rgba(0,0,0,0.06)",
              margin: "1rem 0",
            }}
          />

          {/* Error Banner */}
          {error && (
            <div
              className="card"
              style={{
                padding: "0.75rem 0.9rem",
                marginBottom: "1rem",
                display: "flex",
                alignItems: "center",
                gap: 10,
                borderRadius: 14,
              }}
            >
              <span className="badge badge-danger">Error</span>
              <span className="text-sm" style={{ opacity: 0.9 }}>
                {error}
              </span>
            </div>
          )}

          {/* Table / Loading */}
          {loading ? (
            <div className="text-sm" style={{ opacity: 0.75 }}>
              Memuat…
            </div>
          ) : (
            <BranchTable
              items={items}
              onEdit={openEdit}
              onDelete={confirmDelete}
              onOpenGudang={(row) => {
                window.location.href = `/master/warehouses?cabang_id=${row.id}`;
              }}
            />
          )}
        </div>

        {/* PAGINATION TOOLBAR */}
        <div
          className="card"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            padding: "1rem 1.25rem",
          }}
        >
          <div className="text-sm" style={{ opacity: 0.75 }}>
            Menampilkan halaman <strong>{pagination.page}</strong> dari <strong>{pagination.last_page}</strong> • Total{" "}
            <strong>{pagination.total}</strong>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <button className="button button-outline" onClick={goPrev} disabled={loading || isFirst}>
              Sebelumnya
            </button>
            <button className="button button-outline" onClick={goNext} disabled={loading || isLast}>
              Berikutnya
            </button>

            <select
              className="select"
              value={pagination.per_page}
              onChange={(e) => pagination.setPerPage(Number(e.target.value))}
              disabled={loading}
              title="Jumlah data per halaman"
            >
              <option value={10}>10 / halaman</option>
              <option value={25}>25 / halaman</option>
              <option value={50}>50 / halaman</option>
            </select>
          </div>
        </div>

        {/* Form Dialog */}
        <BranchFormDialog
          open={openForm}
          initial={editing ?? undefined}
          onClose={() => {
            setOpenForm(false);
            setEditing(null);
          }}
          onSubmit={submit}
        />
      </div>
    </RequireRole>
  );
}

```
</details>

### src/pages/master/Warehouses.tsx

- SHA: `f91ccbad3800`  
- Ukuran: 8 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/pages/master/Warehouses.tsx
import React, { useMemo, useState } from "react";
import { useWarehouses } from "../../store/useWarehouses";
import WarehouseFilters from "../../components/warehouses/WarehouseFilters";
import WarehouseFormDialog from "../../components/warehouses/WarehouseFormDialog";
import WarehouseTable from "../../components/warehouses/WarehouseTable";
import type {
  Warehouse,
  WarehouseCreatePayload,
  WarehouseQuery,
} from "../../types/warehouse";
import RequireRole from "../../components/routing/RequireRole";

export default function WarehousesPage(): React.ReactElement {
  const url = new URL(window.location.href);
  const cabangFromUrl = url.searchParams.get("cabang_id");
  const initialCabang = cabangFromUrl ? Number(cabangFromUrl) : undefined;

  // fetch otomatis berdasarkan cabang_id awal (tetap)
  const {
    items,
    loading,
    error,
    query,
    fetchList,
    create,
    update,
    remove,
    pagination,
  } = useWarehouses({ cabang_id: initialCabang });

  const [openForm, setOpenForm] = useState(false);
  const [editing, setEditing] = useState<Warehouse | null>(null);

  const title = useMemo(() => "Gudang", []);

  const submit = async (payload: WarehouseCreatePayload): Promise<boolean> => {
    const ok = editing ? await update(editing.id, payload) : await create(payload);
    if (ok) {
      setOpenForm(false);
      setEditing(null);
    }
    return ok;
  };

  return (
    <RequireRole roles={["superadmin", "admin_cabang", "gudang"]}>
      <div className="page">
        {/* ===== Toolbar / Header (lebih rapi & responsif) ===== */}
        <div
          className="card"
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <div style={{ minWidth: 240 }}>
            <h1 className="card-title" style={{ marginBottom: ".25rem" }}>
              {title}
            </h1>

            <div
              className="muted"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                flexWrap: "wrap",
              }}
            >
              <span>Kelola data gudang dan penempatan stok per cabang.</span>

              {typeof initialCabang === "number" && (
                <span className="badge" title="Filter cabang dari URL">
                  Cabang ID: {initialCabang}
                </span>
              )}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              flexWrap: "wrap",
              justifyContent: "flex-end",
              marginLeft: "auto",
            }}
          >
            <button
              className="button button-outline"
              type="button"
              onClick={() => fetchList()}
              title="Refresh data"
            >
              Refresh
            </button>

            <button
              className="button button-primary"
              type="button"
              onClick={() => {
                setEditing(null);
                setOpenForm(true);
              }}
            >
              Tambah
            </button>
          </div>
        </div>

        {/* ===== Filters (tetap komponen Anda, hanya dibungkus rapi) ===== */}
        <div className="card" style={{ marginTop: "1rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              flexWrap: "wrap",
              marginBottom: "0.75rem",
            }}
          >
            <div style={{ minWidth: 240 }}>
              <div style={{ fontWeight: 700, marginBottom: 2 }}>Filter</div>
              <div className="muted" style={{ fontSize: ".9rem" }}>
                Gunakan filter untuk mempersempit data.
              </div>
            </div>

            <div className="muted" style={{ fontSize: ".9rem" }}>
              Total: <b>{pagination.total}</b>
            </div>
          </div>

          <WarehouseFilters
            value={query as WarehouseQuery}
            onChange={(next) => fetchList(next)}
            onSearch={() => fetchList()}
          />
        </div>

        {/* ===== Error ===== */}
        {error && (
          <div
            className="card"
            role="alert"
            style={{
              marginTop: "1rem",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span className="badge badge-danger">Error</span>
            <span className="text-sm">{error}</span>
          </div>
        )}

        {/* ===== Table ===== */}
        <div className="card" style={{ marginTop: "1rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              flexWrap: "wrap",
              marginBottom: "0.75rem",
            }}
          >
            <div style={{ fontWeight: 700 }}>Daftar Gudang</div>

            <div className="muted" style={{ fontSize: ".9rem" }}>
              Halaman {pagination.page} / {pagination.last_page}
            </div>
          </div>

          {loading ? (
            <div className="loading">Memuat…</div>
          ) : (
            <WarehouseTable
              items={items}
              onEdit={(row) => {
                setEditing(row);
                setOpenForm(true);
              }}
              onDelete={(row) => {
                if (confirm(`Hapus gudang "${row.nama}"?`)) {
                  void remove(row.id);
                }
              }}
            />
          )}
        </div>

        {/* ===== Pagination (lebih konsisten, tombol outline) ===== */}
        <div
          className="card"
          style={{
            marginTop: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <div className="muted">
            Halaman {pagination.page} / {pagination.last_page} • Total{" "}
            {pagination.total}
          </div>

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <button
              className="button button-outline"
              type="button"
              onClick={() => pagination.setPage(Math.max(1, pagination.page - 1))}
              disabled={pagination.page <= 1}
            >
              Sebelumnya
            </button>

            <button
              className="button button-outline"
              type="button"
              onClick={() =>
                pagination.setPage(Math.min(pagination.last_page, pagination.page + 1))
              }
              disabled={pagination.page >= pagination.last_page}
            >
              Berikutnya
            </button>

            <select
              className="select"
              value={pagination.per_page}
              onChange={(e) => pagination.setPerPage(Number(e.target.value))}
              aria-label="Jumlah data per halaman"
              style={{ width: 110 }}
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
          </div>
        </div>

        {/* ===== Form Dialog (tetap) ===== */}
        <WarehouseFormDialog
          open={openForm}
          initial={editing ?? undefined}
          defaultCabangId={initialCabang}
          onClose={() => {
            setOpenForm(false);
            setEditing(null);
          }}
          onSubmit={submit}
        />
      </div>
    </RequireRole>
  );
}

```
</details>

### src/pages/pos/Orders.tsx

- SHA: `cc85f244470d`  
- Ukuran: 16 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/pages/pos/Orders.tsx
import React, { useEffect, useMemo, useState, useCallback } from "react";
import ProductSearch from "../../components/pos/ProductSearch";
import ProductGrid from "../../components/pos/ProductGrid";
import CartPanel from "../../components/pos/CartPanel";
import CheckoutDialog from "../../components/pos/CheckoutDialog";
import ReceiptPreview from "../../components/pos/ReceiptPreview";
import { useCart } from "../../store/cart";
import type { Order } from "../../types/pos";
import type { Product } from "../../types/product";
import { listVariants } from "../../api/products";

/** Helpers */
const getInt = (v: unknown): number | null => {
  const n = Number(v);
  return Number.isFinite(n) && n > 0 ? n : null;
};
const setScope = (branchId: number, warehouseId: number): void => {
  localStorage.setItem("active_branch_id", String(branchId));
  localStorage.setItem("active_warehouse_id", String(warehouseId));
  window.dispatchEvent(new Event("scope:changed"));
};

/** ✅ Reactive scope + auto-pick default (first branch & warehouse) */
function useActiveScope(): {
  branch: { id: number } | null;
  warehouse: { id: number } | null;
} {
  const [branchId, setBranchId] = useState<number | null>(null);
  const [warehouseId, setWarehouseId] = useState<number | null>(null);

  const read = useCallback((): void => {
    setBranchId(getInt(localStorage.getItem("active_branch_id")));
    setWarehouseId(getInt(localStorage.getItem("active_warehouse_id")));
  }, []);

  useEffect(() => {
    read();
    const onScopeChanged = (): void => read();
    window.addEventListener("scope:changed", onScopeChanged);
    window.addEventListener("storage", onScopeChanged);
    return () => {
      window.removeEventListener("scope:changed", onScopeChanged);
      window.removeEventListener("storage", onScopeChanged);
    };
  }, [read]);

  useEffect(() => {
    if (branchId && warehouseId) return;
    (async () => {
      try {
        const branchesApi = await import("../../api/branches");
        const warehousesApi = await import("../../api/warehouses");
        const branches = await branchesApi.listBranches({ per_page: 1 });
        const b = branches?.data?.[0] as { id: number } | undefined;
        if (!b) return;
        const warehouses = await warehousesApi.listWarehouses({
          cabang_id: b.id,
          per_page: 1,
        });
        const w = warehouses?.data?.[0] as { id: number } | undefined;
        if (!w) return;
        setScope(b.id, w.id);
      } catch {
        // no-op; banner will handle manual selection
      }
    })();
  }, [branchId, warehouseId]);

  return {
    branch: branchId ? { id: branchId } : null,
    warehouse: warehouseId ? { id: warehouseId } : null,
  };
}

export default function OrdersPage(): React.ReactElement {
  const { branch, warehouse } = useActiveScope();
  const [openPay, setOpenPay] = useState<boolean>(false);
  const [lastOrder, setLastOrder] = useState<Order | null>(null);

  // ✅ Ambil state/aksi via selector (tanpa any/unknown)
  const items = useCart((s) => s.items);
  const quote = useCart((s) => s.quote);
  const add = useCart((s) => s.add);

  type Variant = { id: number; nama?: string; sku?: string; is_active?: boolean };

  const [variantOpen, setVariantOpen] = useState(false);
  const [variantProductName, setVariantProductName] = useState<string>("");
  const [variantOptions, setVariantOptions] = useState<Variant[]>([]);

  const hasItems = items.length > 0;
  const scoped = Boolean(warehouse?.id && branch?.id);
  const grand = quote?.totals?.grand_total ?? 0;
  const grandOk = Number.isFinite(grand) && grand >= 0;

  const canCheckout = useMemo<boolean>(
    () => hasItems && scoped && grandOk,
    [hasItems, scoped, grandOk]
  );

  const disableReason = useMemo<string | null>(() => {
    if (!hasItems) return "Tambahkan item ke keranjang.";
    if (!scoped) return "Pilih Cabang & Gudang terlebih dahulu.";
    if (!grandOk) return "Total belum siap. Coba lagi sebentar.";
    return null;
  }, [hasItems, scoped, grandOk]);

  // Enter → buka dialog bayar jika siap
  useEffect(() => {
    const onKey = (e: KeyboardEvent): void => {
      if (e.key === "Enter" && canCheckout) setOpenPay(true);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [canCheckout]);

  // Klik kartu produk → tambah 1 ke cart (ambil varian pertama bila ada)
  const onPickProduct = async (p: Product): Promise<void> => {
    let variants: Variant[] =
      Array.isArray(p.variants) && p.variants.length > 0
        ? (p.variants as unknown as Variant[])
        : [];

    if (variants.length === 0) {
      const apiVariants = await listVariants(p.id);
      variants = Array.isArray(apiVariants) ? (apiVariants as unknown as Variant[]) : [];
    }

    if (variants.length > 1) {
      setVariantProductName((p as any)?.nama ?? "Produk");
      setVariantOptions(variants);
      setVariantOpen(true);
      return;
    }

    const v = variants.find((x) => x.is_active) ?? variants[0];
    const variantId = v ? Number(v.id) : null;

    if (!variantId || !Number.isFinite(variantId)) {
      console.warn("Tidak bisa menambahkan item: produk tidak memiliki variant yang valid.");
      return;
    }

    add({ variant_id: variantId, qty: 1 });
  };


  return (
    <div className="page">
      {/* CSS lokal khusus Orders (tidak mengganggu halaman lain) */}
      <style>{`
        .pos-shell{
          display:grid;
          gap: 16px;
          align-items:start;
        }
        /* desktop: 2 kolom */
        @media (min-width: 1024px){
          .pos-shell{
            grid-template-columns: minmax(0, 1fr) 380px;
          }
        }

        .pos-header{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap: 12px;
          flex-wrap: wrap;
        }
        .pos-header__left{
          display:flex;
          align-items:baseline;
          gap: 10px;
          min-width: 0;
        }
        .pos-title{
          font-size: 18px;
          font-weight: 800;
          margin: 0;
          line-height: 1.1;
        }
        .pos-sub{
          font-size: 12px;
          opacity: .72;
          white-space: nowrap;
        }
        .pos-header__right{
          display:flex;
          align-items:center;
          gap: 8px;
          flex-wrap: wrap;
          justify-content:flex-end;
        }

        .pos-stack{
          display:flex;
          flex-direction:column;
          gap: 12px;
        }

        .pos-aside{
          display:flex;
          flex-direction:column;
          gap: 12px;
        }
        @media (min-width: 1024px){
          .pos-aside{
            position: sticky;
            top: 14px;
          }
        }

        .pos-paybtn{
          width: 100%;
        }

        .pos-divider{
          height: 1px;
          background: rgba(0,0,0,.06);
          margin: 10px 0 0;
        }
      `}</style>

      {/* Header ringkas agar terasa rapi & konsisten */}
      <div className="card" style={{ marginBottom: 12 }}>
        <div className="pos-header">
          <div className="pos-header__left">
            <h1 className="pos-title">Orders</h1>
            <span className="pos-sub">Enter = Bayar (jika siap)</span>
          </div>

          <div className="pos-header__right">
            {scoped ? (
              <span className="badge badge-success">
                Scope: Cabang #{branch!.id} • Gudang #{warehouse!.id}
              </span>
            ) : (
              <span className="badge badge-warning">Scope belum dipilih</span>
            )}
          </div>
        </div>
        <div className="pos-divider" />
        <div style={{ marginTop: 10, opacity: 0.8, fontSize: 12 }}>
          Cari produk → klik kartu untuk tambah cepat ke keranjang. Katalog muncul setelah Gudang dipilih.
        </div>
      </div>

      <div className="pos-shell">
        {/* MAIN (kiri): Scope + Search + Grid */}
        <div className="pos-stack">
          {!scoped && <ScopePickerBanner />}

          <div className="card">
            <ProductSearch warehouseId={warehouse?.id ?? 0} />
          </div>

          {warehouse?.id ? (
            <div className="card">
              <ProductGrid
                onPick={onPickProduct}
                perPage={24}
                warehouseId={warehouse.id}
                requireWarehouse
              />
            </div>
          ) : (
            <div className="card">
              <div className="empty-state">Pilih Cabang &amp; Gudang untuk melihat katalog.</div>
            </div>
          )}
        </div>

        {/* ASIDE (kanan): Cart + tombol bayar (sticky desktop) */}
        <aside className="pos-aside">
          <div className="card">
            <CartPanel />
          </div>

          <div className="card">
            <div className="form-actions" style={{ justifyContent: "stretch" }}>
              <button
                className="button button-primary pos-paybtn"
                onClick={() => setOpenPay(true)}
                disabled={!canCheckout}
                aria-disabled={!canCheckout}
                aria-label="Bayar pesanan"
                data-testid="btn-pay"
              >
                Bayar
              </button>
            </div>

            {!canCheckout && disableReason && (
              <div className="alert alert-warning" style={{ marginTop: 8 }}>
                {disableReason}
              </div>
            )}
          </div>
        </aside>
      </div>

      {openPay && branch && warehouse && (
        <CheckoutDialog
          open={openPay}
          onClose={() => setOpenPay(false)}
          branchId={branch.id}
          warehouseId={warehouse.id}
          onSuccess={(o: Order): void => {
            setLastOrder(o);
            setOpenPay(false);
          }}
        />
      )}

      {lastOrder && (
        <div className="card" style={{ marginTop: 16 }}>
          <ReceiptPreview orderId={lastOrder.id} phone={undefined} />
        </div>
      )}
      {variantOpen && (
        <div
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setVariantOpen(false);
          }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(0,0,0,0.45)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
          }}
        >
          <div className="card" style={{ width: "100%", maxWidth: 640 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontWeight: 900, fontSize: 16 }}>Pilih Variant</div>
                <div style={{ fontSize: 12, opacity: 0.75 }}>{variantProductName}</div>
              </div>
              <button className="button button-ghost" onClick={() => setVariantOpen(false)} type="button">
                ✕
              </button>
            </div>

            <div style={{ marginTop: 12, display: "grid", gap: 10 }}>
              {variantOptions.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  className="button"
                  onClick={() => {
                    const variantId = Number(v.id);
                    if (!Number.isFinite(variantId)) return;
                    add({ variant_id: variantId, qty: 1 });
                    setVariantOpen(false);
                  }}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "12px 14px",
                    borderRadius: 14,
                  }}
                >
                  <div style={{ textAlign: "left", minWidth: 0 }}>
                    <div style={{ fontWeight: 800, lineHeight: 1.1 }}>
                      {v.nama ?? v.sku ?? `Variant #${v.id}`}
                    </div>
                    <div style={{ fontSize: 12, opacity: 0.75, marginTop: 4 }}>
                      {v.sku ? `SKU: ${v.sku}` : ""}
                    </div>
                  </div>
                  <span className="badge">Pilih</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/** 🔸 Scope picker (inline) dengan loading states yang jelas */
function ScopePickerBanner(): React.ReactElement {
  type IdNama = { id: number; nama: string };

  const [branches, setBranches] = useState<IdNama[]>([]);
  const [warehouses, setWarehouses] = useState<IdNama[]>([]);
  const [bId, setBId] = useState<number | "">("");
  const [wId, setWId] = useState<number | "">("");
  const [loadingB, setLoadingB] = useState<boolean>(true);
  const [loadingW, setLoadingW] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        const api = await import("../../api/branches");
        setLoadingB(true);
        const res = await api.listBranches({ per_page: 50 });
        const data = (res?.data ?? []) as IdNama[];
        setBranches(Array.isArray(data) ? data : []);
      } finally {
        setLoadingB(false);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (!bId) {
        setWarehouses([]);
        setWId("");
        return;
      }
      try {
        const api = await import("../../api/warehouses");
        setLoadingW(true);
        const res = await api.listWarehouses({ cabang_id: Number(bId), per_page: 50 });
        const data = (res?.data ?? []) as IdNama[];
        setWarehouses(Array.isArray(data) ? data : []);
        setWId(data.length > 0 ? data[0].id : "");
      } finally {
        setLoadingW(false);
      }
    })();
  }, [bId]);

  const apply = (): void => {
    if (!bId || !wId) return;
    setScope(Number(bId), Number(wId));
  };

  return (
    <div className="card soft">
      <div className="badge badge-warning" style={{ marginBottom: 8 }}>
        Scope belum dipilih
      </div>

      <div className="form-row form-row--3">
        <div className="form-field">
          <label className="label">Cabang</label>
          <select
            className="select"
            value={bId}
            onChange={(e) => setBId(e.target.value ? Number(e.target.value) : "")}
            aria-label="Pilih cabang"
          >
            <option value="">{loadingB ? "Memuat cabang…" : "Pilih cabang…"}</option>
            {!loadingB && branches.length === 0 && <option value="">Tidak ada cabang</option>}
            {branches.map((b) => (
              <option key={b.id} value={b.id}>
                {b.nama}
              </option>
            ))}
          </select>
        </div>

        <div className="form-field">
          <label className="label">Gudang</label>
          <select
            className="select"
            value={wId}
            onChange={(e) => setWId(e.target.value ? Number(e.target.value) : "")}
            disabled={!bId || loadingW}
            aria-label="Pilih gudang"
          >
            <option value="">
              {!bId ? "Pilih cabang dahulu" : loadingW ? "Memuat gudang…" : "Pilih gudang…"}
            </option>
            {warehouses.map((w) => (
              <option key={w.id} value={w.id}>
                {w.nama}
              </option>
            ))}
          </select>
        </div>

        <div className="form-actions" style={{ alignItems: "end" }}>
          <button
            className="button button-primary"
            disabled={!bId || !wId}
            onClick={apply}
            aria-disabled={!bId || !wId}
          >
            Terapkan
          </button>
        </div>
      </div>
    </div>
  );
}

```
</details>

### src/pages/pos/OrdersIndex.tsx

- SHA: `52036220c349`  
- Ukuran: 36 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/pages/pos/OrdersIndex.tsx
import React, { useEffect, useMemo, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import {
  listOrders,
  getOrder,
  updateOrderItems,
  reprintReceipt,
  resendWhatsApp,
  addPayment,
  setOrderCashPosition,
} from "../../api/pos";
import type {
  ID,
  Order,
  OrderItem,
  OrdersQuery,
  UpdateOrderItemsPayload,
  OrderStatus,
  CheckoutPayment,
  CashPosition,
} from "../../types/pos";
import { createDelivery, assignCourier } from "../../api/deliveries";
import type { DeliveryType } from "../../types/delivery";
import { listCashHolders } from "../../api/cash";
import type { CashHolder } from "../../types/cash";
import { useAuth } from "../../store/auth";

const formatIDR = (n: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);

/* ---------- FilterBar ---------- */
type FilterState = OrdersQuery & { local_q?: string; cash_position?: CashPosition };

function FilterBar(props: {
  value: FilterState;
  onChange: (next: FilterState) => void;
  onApply: () => void;
}) {
  const { value, onChange, onApply } = props;
  const [search, setSearch] = useState(value.local_q ?? value.q ?? "");
  useEffect(() => setSearch(value.local_q ?? value.q ?? ""), [value.local_q, value.q]);

  return (
    <div className="card">
      <div className="posx-filter">
        <div className="form-row form-row--3">
          <div className="form-field">
            <label className="label">Cari</label>
            <input
              className="input"
              placeholder="kode/nama/telepon"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onChange({ ...value, q: search || undefined, page: 1 });
                  onApply();
                }
              }}
            />
          </div>

          <div className="form-field">
            <label className="label">Cabang ID</label>
            <input
              type="number"
              className="input"
              value={value.cabang_id ?? ""}
              onChange={(e) =>
                onChange({
                  ...value,
                  cabang_id: e.target.value ? Number(e.target.value) : undefined,
                  page: 1,
                })
              }
            />
          </div>

          <div className="form-field">
            <label className="label">Status</label>
            <select
              className="select"
              value={value.status ?? ""}
              onChange={(e) =>
                onChange({
                  ...value,
                  status: (e.target.value || undefined) as OrderStatus | undefined,
                  page: 1,
                })
              }
            >
              <option value="">Semua</option>
              <option value="DRAFT">DRAFT</option>
              <option value="UNPAID">UNPAID</option>
              <option value="PAID">PAID</option>
              <option value="VOID">VOID</option>
              <option value="REFUND">REFUND</option>
            </select>
          </div>

          <div className="form-field">
            <label className="label">Posisi Uang</label>
            <select
              className="select"
              value={value.cash_position ?? ""}
              onChange={(e) =>
                onChange({
                  ...value,
                  cash_position: (e.target.value || undefined) as CashPosition | undefined,
                  page: 1,
                })
              }
            >
              <option value="">Semua</option>
              <option value="CUSTOMER">Konsumen</option>
              <option value="CASHIER">Kasir</option>
              <option value="SALES">Sales</option>
              <option value="ADMIN">Admin</option>
            </select>
          </div>

          <div className="form-field">
            <label className="label">Dari</label>
            <input
              type="date"
              className="input"
              value={value.date_from ?? ""}
              onChange={(e) => onChange({ ...value, date_from: e.target.value || undefined, page: 1 })}
            />
          </div>

          <div className="form-field">
            <label className="label">Sampai</label>
            <input
              type="date"
              className="input"
              value={value.date_to ?? ""}
              onChange={(e) => onChange({ ...value, date_to: e.target.value || undefined, page: 1 })}
            />
          </div>

          <div className="form-actions posx-filter-actions">
            <button
              className="button button-outline"
              onClick={() => {
                onChange({ page: 1, per_page: value.per_page ?? 10, sort: "-ordered_at" });
                onApply();
              }}
            >
              Reset
            </button>
            <button
              className="button button-primary"
              onClick={() => {
                onChange({ ...value, q: search || undefined, page: 1 });
                onApply();
              }}
            >
              Terapkan
            </button>
          </div>
        </div>

        <div className="posx-filter-hint">
          Tips: tekan <span className="mono">Enter</span> di kolom Cari untuk menerapkan filter.
        </div>
      </div>
    </div>
  );
}

/* ---------- helpers ---------- */
function statusBadgeClass(status: OrderStatus): string {
  switch (status) {
    case "PAID":
      return "badge badge-success";
    case "UNPAID":
      return "badge badge-warning";
    case "VOID":
    case "REFUND":
      return "badge badge-danger";
    default:
      return "badge";
  }
}

function normalizePhoneForWa(raw?: string | null): string | null {
  if (!raw) return null;
  let digits = raw.replace(/\D/g, "");
  if (!digits) return null;
  if (digits.startsWith("0")) digits = "62" + digits.slice(1);
  if (digits.startsWith("62")) return digits;
  return digits;
}

const CASH_POSITION_OPTIONS: { value: CashPosition; label: string }[] = [
  { value: "CUSTOMER", label: "Konsumen" },
  { value: "CASHIER", label: "Kasir" },
  { value: "SALES", label: "Sales" },
  { value: "ADMIN", label: "Admin" },
];

function CashPositionCell({
  order,
  onChanged,
}: {
  order: Order;
  onChanged: (updated: Order) => void;
}) {
  const [val, setVal] = React.useState<CashPosition>(order.cash_position ?? "CASHIER");
  const [saving, setSaving] = React.useState(false);

  async function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const next = e.target.value as CashPosition;
    setVal(next);
    setSaving(true);
    try {
      const updated = await setOrderCashPosition(order.id, next);
      onChanged(updated);
    } catch (err) {
      setVal(order.cash_position ?? "CASHIER");
      alert((err as Error)?.message ?? "Gagal mengubah Posisi Uang.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <select className="select" value={val} onChange={handleChange} disabled={saving} style={{ minWidth: 140 }}>
      {CASH_POSITION_OPTIONS.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}

/* ---------- OrdersTable ---------- */
function OrdersTable(props: {
  rows: Order[];
  onOpenDetail: (id: ID) => void;
  page: number;
  per_page: number;
  total: number;
  onPage: (p: number) => void;
  onCashPositionChanged: (updated: Order) => void;
}) {
  const { rows, onOpenDetail, page, per_page, total, onPage, onCashPositionChanged } = props;
  const last = Math.max(1, Math.ceil(total / Math.max(1, per_page || 10)));

  return (
    <div className="card">
      <div className="posx-table-head">
        <div className="muted text-sm">
          Halaman {page} dari {last} • Total {total} data
        </div>
        <div className="btn-group">
          <button className="button button-outline" disabled={page <= 1} onClick={() => onPage(page - 1)}>
            Prev
          </button>
          <button className="button button-outline" disabled={page >= last} onClick={() => onPage(page + 1)}>
            Next
          </button>
        </div>
      </div>

      <div className="table-responsive posx-table-wrap">
        <table className="table posx-table">
          <thead>
            <tr>
              <th>Tanggal</th>
              <th>Kode</th>
              <th>Pelanggan</th>
              <th className="posx-col-phone">No HP</th>
              <th className="posx-col-address">Alamat</th>
              <th>Status</th>
              <th className="text-right">Subtotal</th>
              <th className="text-right posx-col-discount">Diskon</th>
              <th className="text-right">Grand Total</th>
              <th className="text-right posx-col-paid">Dibayar</th>
              <th>Posisi Uang</th>
              <th className="w-1">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((o) => (
              <tr key={o.id}>
                <td>{new Date(o.ordered_at).toLocaleString("id-ID")}</td>
                <td>
                  <span className="mono">{o.kode}</span>
                </td>
                <td>{o.customer_name ?? "-"}</td>
                <td className="posx-col-phone">{o.customer_phone ?? "-"}</td>
                <td className="posx-col-address">
                  <span className="posx-truncate">{o.customer_address ?? "-"}</span>
                </td>
                <td>
                  <span className={statusBadgeClass(o.status)}>{o.status}</span>
                </td>
                <td className="text-right">{formatIDR(o.subtotal)}</td>
                <td className="text-right posx-col-discount">{formatIDR(o.discount)}</td>
                <td className="text-right">
                  <strong>{formatIDR(o.grand_total)}</strong>
                </td>
                <td className="text-right posx-col-paid">{formatIDR(o.paid_total)}</td>
                <td>
                  <CashPositionCell order={o} onChanged={onCashPositionChanged} />
                </td>
                <td>
                  <div className="table-actions">
                    <button className="button button-outline" onClick={() => onOpenDetail(o.id)}>
                      Detail
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {rows.length === 0 && (
              <tr>
                <td colSpan={12}>
                  <div className="empty-state">Tidak ada data untuk filter ini.</div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="table-footer posx-table-footer">
        <div className="muted text-sm">
          Halaman {page} dari {last} • Total {total} data
        </div>
        <div className="btn-group">
          <button className="button button-outline" disabled={page <= 1} onClick={() => onPage(page - 1)}>
            Prev
          </button>
          <button className="button button-outline" disabled={page >= last} onClick={() => onPage(page + 1)}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- shared inline styles for modal ---------- */
const overlayStyle: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.45)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "16px",
  zIndex: 1000,
};

const modalStyle: React.CSSProperties = {
  width: "100%",
  maxWidth: 980,
  borderRadius: 18,
  boxShadow: "0 18px 60px rgba(0,0,0,0.25)",
  overflow: "hidden",
};

/* ---------- Detail Dialog (Portal) ---------- */
function OrderDetailDialog(props: {
  open: boolean;
  order: Order | null;
  onClose: () => void;
  onEdit: (o: Order) => void;
  onReprint: (id: ID, format: "58" | "80") => void;
  onResendWa: (id: ID) => void;
}) {
  const { open, order, onClose, onEdit, onReprint, onResendWa } = props;

  const [dlOpen, setDlOpen] = useState(false);
  const [dlType, setDlType] = useState<DeliveryType>("DELIVERY");
  const [dlAuto, setDlAuto] = useState<boolean>(true);
  const [dlSubmitting, setDlSubmitting] = useState<boolean>(false);
  const [dlError, setDlError] = useState<string | null>(null);

  const sisa = Math.max(0, (order?.grand_total ?? 0) - (order?.paid_total ?? 0));
  if (!open || !order) return null;
  const o: Order = order;

  async function doCreateDelivery(): Promise<void> {
    setDlSubmitting(true);
    setDlError(null);
    try {
      const res = await createDelivery({ order_id: o.id, type: dlType });
      if (dlAuto) {
        try {
          await assignCourier(res.data.id, { auto: true });
        } catch {
          /* noop */
        }
      }
      alert("Delivery berhasil dibuat.");
      setDlOpen(false);
      onClose();
    } catch (e) {
      setDlError((e as Error)?.message ?? "Gagal membuat delivery.");
    } finally {
      setDlSubmitting(false);
    }
  }

  return createPortal(
    <div style={overlayStyle}>
      <div className="card" style={modalStyle} role="dialog" aria-modal="true">
        <div className="posx-modal-head">
          <div>
            <div className="posx-modal-title">
              Detail Pesanan — <span className="mono">{o.kode}</span>
            </div>
            <div className="muted text-sm">{new Date(o.ordered_at).toLocaleString("id-ID")}</div>
          </div>
          <button className="button button-ghost" onClick={onClose}>
            Tutup
          </button>
        </div>

        <div className="divider" />

        <div className="kv-grid posx-kv-pad">
          <div className="kv">
            <span className="kv-key">Status</span>
            <span className="kv-val">
              <span className={statusBadgeClass(o.status)}>{o.status}</span>
            </span>
          </div>
          <div className="kv">
            <span className="kv-key">Subtotal</span>
            <span className="kv-val">{formatIDR(o.subtotal)}</span>
          </div>
          <div className="kv">
            <span className="kv-key">Diskon</span>
            <span className="kv-val">{formatIDR(o.discount)}</span>
          </div>
          <div className="kv">
            <span className="kv-key">Total</span>
            <span className="kv-val">
              <strong>{formatIDR(o.grand_total)}</strong>
            </span>
          </div>
          <div className="kv">
            <span className="kv-key">Dibayar</span>
            <span className="kv-val">{formatIDR(o.paid_total)}</span>
          </div>
          <div className="kv">
            <span className="kv-key">Sisa</span>
            <span className="kv-val">
              <strong>{formatIDR(sisa)}</strong>
            </span>
          </div>
        </div>

        <div className="card soft posx-modal-section">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th className="text-right">Harga</th>
                  <th className="text-right">Diskon</th>
                  <th className="text-right">Qty</th>
                  <th className="text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                {o.items.map((it) => (
                  <tr key={it.id}>
                    <td>{it.name_snapshot}</td>
                    <td className="text-right">{formatIDR(it.price)}</td>
                    <td className="text-right">{formatIDR(it.discount)}</td>
                    <td className="text-right">{it.qty}</td>
                    <td className="text-right">{formatIDR(it.line_total)}</td>
                  </tr>
                ))}
                {o.items.length === 0 && (
                  <tr>
                    <td colSpan={5}>
                      <div className="empty-state">Tidak ada item.</div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="posx-modal-actions">
          {o.status === "UNPAID" && sisa > 0 && (
            <button
              className="button button-primary"
              onClick={async () => {
                const nominalStr = prompt(
                  `Nominal pelunasan (sisa ${formatIDR(sisa)}):`,
                  String(Math.round(sisa))
                );
                if (!nominalStr) return;
                const nominal = Number(nominalStr);
                if (!Number.isFinite(nominal) || nominal <= 0) {
                  alert("Nominal tidak valid.");
                  return;
                }

                const methodInputRaw = (prompt("Metode (CASH/TRANSFER/QRIS):", "CASH") || "CASH");
                const methodInput = methodInputRaw.trim().toUpperCase();
                const payment: CheckoutPayment = {
                  method: methodInput as CheckoutPayment["method"],
                  amount: nominal,
                };

                try {
                  if (methodInput === "CASH" && payment.amount > 0) {
                    const resp = await listCashHolders({ per_page: 100 });
                    const list: CashHolder[] = resp.data;
                    if (!Array.isArray(list) || list.length === 0) {
                      alert("Tidak ada CashHolder. Buat holder lebih dulu di modul Cash.");
                      return;
                    }
                    const choices = list.map((h) => `${h.id} — ${h.name}`).join("\n");
                    const picked = prompt(`Pilih Holder penerima CASH (masukkan ID):\n${choices}`);
                    const holderId = picked ? Number(picked.trim()) : NaN;
                    const holder = list.find((h) => h.id === holderId);
                    if (!holder) {
                      alert("Holder tidak valid.");
                      return;
                    }

                    payment.payload_json = {
                      holder_id: holder.id,
                      collected_at: new Date().toISOString(),
                    };
                  }

                  await addPayment(o.id, payment);
                  alert("Pelunasan berhasil.");
                  onClose();
                } catch (e) {
                  alert((e as Error).message || "Gagal menambahkan pembayaran.");
                }
              }}
            >
              Pelunasan
            </button>
          )}

          <button className="button button-outline" onClick={() => onEdit(o)}>
            Edit Item
          </button>
          <button className="button button-outline" onClick={() => onReprint(o.id, "58")}>
            Reprint 58
          </button>
          <button className="button button-outline" onClick={() => onReprint(o.id, "80")}>
            Reprint 80
          </button>
          <button className="button" onClick={() => onResendWa(o.id)}>
            Kirim WA
          </button>
          <button className="button button-primary" onClick={() => setDlOpen(true)}>
            Buat Delivery…
          </button>
        </div>

        {dlOpen &&
          createPortal(
            <div style={{ ...overlayStyle, zIndex: 1100 }}>
              <div className="card" style={{ ...modalStyle, maxWidth: 560 }} role="dialog" aria-modal="true">
                <div className="posx-modal-head">
                  <div className="posx-modal-title">Buat Pickup/Delivery</div>
                  <button className="button button-ghost" onClick={() => setDlOpen(false)}>
                    Tutup
                  </button>
                </div>

                <div className="divider" />

                <div className="form-row posx-modal-form">
                  <div className="form-field">
                    <label className="label">Jenis</label>
                    <select className="select" value={dlType} onChange={(e) => setDlType(e.target.value as DeliveryType)}>
                      <option value="PICKUP">PICKUP (Jemput)</option>
                      <option value="DELIVERY">DELIVERY (Antar)</option>
                      <option value="BOTH">BOTH (Jemput & Antar)</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label className="checkbox">
                      <input type="checkbox" checked={dlAuto} onChange={(e) => setDlAuto(e.target.checked)} />
                      <span>Auto-assign kurir</span>
                    </label>
                  </div>

                  {dlError && <div className="alert alert-danger">{dlError}</div>}

                  <div className="form-actions posx-modal-actions-row">
                    <button className="button button-outline" onClick={() => setDlOpen(false)} disabled={dlSubmitting}>
                      Batal
                    </button>
                    <button className="button button-primary" onClick={doCreateDelivery} disabled={dlSubmitting}>
                      {dlSubmitting ? "Membuat…" : "Buat"}
                    </button>
                  </div>
                </div>
              </div>
            </div>,
            document.body
          )}
      </div>
    </div>,
    document.body
  );
}

/* ---------- Edit Dialog (Portal) ---------- */
function EditOrderDialog(props: {
  open: boolean;
  order: Order | null;
  onClose: () => void;
  onSaved: (updated: Order) => void;
}) {
  const { open, order, onClose, onSaved } = props;
  const [rows, setRows] = useState<OrderItem[]>([]);
  const [note, setNote] = useState<string>("");
  const [saving, setSaving] = useState(false);

  const totals = useMemo(() => {
    const subtotal = rows.reduce((acc, r) => acc + (r.price - r.discount) * r.qty, 0);
    return { subtotal, discount: 0, tax: 0, service_fee: 0, grand_total: subtotal };
  }, [rows]);

  useEffect(() => {
    if (open && order) {
      setRows(order.items.map((i) => ({ ...i })));
      setNote("");
    }
  }, [open, order]);

  if (!open || !order) return null;

  const updateRow = (id: ID, patch: Partial<OrderItem>) => {
    setRows((list) => list.map((r) => (r.id === id ? { ...r, ...patch } : r)));
  };

  const save = async () => {
    setSaving(true);
    try {
      const payload: UpdateOrderItemsPayload = {
        note: note || null,
        items: rows.map((r) => ({
          id: r.id,
          price: Number(r.price),
          discount: Number(r.discount),
          qty: Number(r.qty),
        })),
      };
      const updated = await updateOrderItems(order.id, payload);
      onSaved(updated);
    } catch (e) {
      alert((e as Error).message || "Gagal menyimpan perubahan.");
    } finally {
      setSaving(false);
    }
  };

  return createPortal(
    <div style={overlayStyle}>
      <div className="card" style={modalStyle} role="dialog" aria-modal="true">
        <div className="posx-modal-head">
          <div className="posx-modal-title">
            Edit Item — <span className="mono">{order.kode}</span>
          </div>
          <button className="button button-ghost" onClick={onClose}>
            Tutup
          </button>
        </div>

        <div className="divider" />

        <div className="card soft posx-modal-section">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th className="text-right">Harga</th>
                  <th className="text-right">Diskon</th>
                  <th className="text-right">Qty</th>
                  <th className="text-right">Line Total</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => {
                  const lt = (Number(r.price) - Number(r.discount)) * Number(r.qty);
                  return (
                    <tr key={r.id}>
                      <td>{r.name_snapshot}</td>
                      <td className="text-right">
                        <input
                          className="input text-right"
                          type="number"
                          inputMode="numeric"
                          value={r.price}
                          onChange={(e) => updateRow(r.id, { price: Number(e.target.value || 0) })}
                        />
                      </td>
                      <td className="text-right">
                        <input
                          className="input text-right"
                          type="number"
                          inputMode="numeric"
                          value={r.discount}
                          onChange={(e) => updateRow(r.id, { discount: Number(e.target.value || 0) })}
                        />
                      </td>
                      <td className="text-right">
                        <input
                          className="input text-right"
                          type="number"
                          inputMode="numeric"
                          value={r.qty}
                          onChange={(e) => updateRow(r.id, { qty: Number(e.target.value || 0) })}
                        />
                      </td>
                      <td className="text-right">{formatIDR(lt)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="form-row posx-modal-form">
          <div className="form-field">
            <label className="label">Catatan Koreksi (opsional)</label>
            <input className="input" value={note} onChange={(e) => setNote(e.target.value)} />
          </div>

          <div className="form-field posx-totals">
            <div>
              Subtotal (preview): <strong>{formatIDR(totals.subtotal)}</strong>
            </div>
            <div>
              Total (preview): <strong>{formatIDR(totals.grand_total)}</strong>
            </div>
            <div className="muted text-xs">Total final mengikuti hasil server setelah simpan.</div>
          </div>
        </div>

        <div className="posx-modal-actions">
          <button className="button button-outline" onClick={onClose} disabled={saving}>
            Batal
          </button>
          <button className="button button-primary" onClick={save} disabled={saving}>
            {saving ? "Menyimpan…" : "Simpan Perubahan"}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}

/* ---------- Page ---------- */
export default function OrdersIndex(): React.ReactElement {
  useAuth();

  const [q, setQ] = useState<FilterState>({
    page: 1,
    per_page: 10,
    sort: "-ordered_at",
  });
  const [loading, setLoading] = useState(false);
  const [rows, setRows] = useState<Order[]>([]);
  const [meta, setMeta] = useState<{ current_page: number; per_page: number; total: number; last_page: number }>({
    current_page: 1,
    per_page: 10,
    total: 0,
    last_page: 1,
  });

  const [detailOpen, setDetailOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [detail, setDetail] = useState<Order | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await listOrders({
        page: q.page,
        per_page: q.per_page,
        q: q.q,
        cabang_id: q.cabang_id,
        status: q.status,
        date_from: q.date_from,
        date_to: q.date_to,
        sort: q.sort,
        cash_position: q.cash_position,
      });

      setRows(res.data);
      setMeta({
        current_page: res.meta.current_page,
        per_page: res.meta.per_page,
        total: res.meta.total,
        last_page: res.meta.last_page,
      });

      const per = Math.max(1, res.meta.per_page || 10);
      const pgLast = Math.max(1, Math.ceil(res.meta.total / per));
      if ((q.page ?? 1) > pgLast) {
        setQ((s) => ({ ...s, page: pgLast }));
      }
    } catch (e) {
      alert((e as Error).message || "Gagal memuat pesanan.");
    } finally {
      setLoading(false);
    }
  }, [q.page, q.per_page, q.q, q.cabang_id, q.status, q.date_from, q.date_to, q.sort, q.cash_position]);

  useEffect(() => {
    load();
  }, [load]);

  const openDetail = async (id: ID) => {
    try {
      const o = await getOrder(id);
      setDetail(o);
      setDetailOpen(true);
    } catch (e) {
      alert((e as Error).message || "Gagal memuat detail.");
    }
  };

  const onReprint = async (id: ID, format: "58" | "80") => {
    try {
      await reprintReceipt(id, { format });
      alert(`Berhasil reprint (${format}mm).`);
    } catch (e) {
      alert((e as Error).message || "Gagal reprint.");
    }
  };

  const onResendWa = async (id: ID) => {
    const snapPhone = detail?.customer_phone ?? rows.find((r) => r.id === id)?.customer_phone ?? null;
    const normalized = normalizePhoneForWa(snapPhone);

    if (normalized) {
      try {
        const res = await resendWhatsApp(id, { phone: normalized });
        if (res.wa_url) window.open(res.wa_url, "_blank", "noopener,noreferrer");
        else alert("Pesan WA diproses.");
        return;
      } catch (e) {
        alert((e as Error).message || "Gagal kirim WA.");
        return;
      }
    }

    const manual = prompt("Nomor WhatsApp (628xxxxxxxxxx):")?.trim();
    const normalizedManual = normalizePhoneForWa(manual ?? "");
    if (!normalizedManual) return;

    try {
      const res = await resendWhatsApp(id, { phone: normalizedManual });
      if (res.wa_url) window.open(res.wa_url, "_blank", "noopener,noreferrer");
      else alert("Pesan WA diproses.");
    } catch (e) {
      alert((e as Error).message || "Gagal kirim WA.");
    }
  };

  const onCashPositionChanged = useCallback((updated: Order) => {
    setRows((prev) => prev.map((r) => (r.id === updated.id ? { ...r, cash_position: updated.cash_position } : r)));
    setDetail((cur) => (cur && cur.id === updated.id ? ({ ...cur, cash_position: updated.cash_position } as Order) : cur));
  }, []);

  // ringkasan cepat (hanya UI)
  const summary = useMemo(() => {
    const totalRows = rows.length;
    const paid = rows.filter((r) => r.status === "PAID").length;
    const unpaid = rows.filter((r) => r.status === "UNPAID").length;
    const voided = rows.filter((r) => r.status === "VOID" || r.status === "REFUND").length;
    return { totalRows, paid, unpaid, voided };
  }, [rows]);

  return (
    <div className="page">
      {/* CSS lokal khusus halaman OrdersIndex */}
      <style>{`
        .posx-top{
          display:flex;
          align-items:flex-end;
          justify-content:space-between;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 12px;
        }
        .posx-title{
          margin:0;
          font-size: 18px;
          font-weight: 800;
          letter-spacing: -0.02em;
        }
        .posx-sub{
          margin-top: 4px;
          font-size: 12px;
          opacity: .75;
        }
        .posx-stats{
          display:flex;
          gap: 8px;
          flex-wrap: wrap;
          justify-content:flex-end;
        }
        .posx-stat{
          padding: 8px 10px;
          border-radius: 12px;
          border: 1px solid rgba(0,0,0,.06);
          background: rgba(0,0,0,.02);
          min-width: 120px;
        }
        .posx-stat .k{ font-size: 11px; opacity:.72; }
        .posx-stat .v{ font-size: 14px; font-weight: 800; margin-top: 2px; }

        .posx-filter-actions{
          margin-left:auto;
          display:flex;
          gap: 8px;
          align-items:end;
          justify-content:flex-end;
          width: 100%;
        }
        @media (min-width: 860px){
          .posx-filter-actions{ width: auto; }
        }
        .posx-filter-hint{
          margin-top: 10px;
          font-size: 12px;
          opacity: .70;
        }

        .posx-table-head{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 10px;
        }
        .posx-table-wrap{
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid rgba(0,0,0,.06);
        }
        .posx-table thead th{
          position: sticky;
          top: 0;
          z-index: 1;
          background: #fff;
        }
        .posx-table tbody tr:nth-child(even){
          background: rgba(0,0,0,.015);
        }
        .posx-truncate{
          display:inline-block;
          max-width: 240px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          vertical-align: bottom;
        }

        /* Responsif: sembunyikan kolom berat di layar kecil */
        @media (max-width: 980px){
          .posx-col-address{ display:none; }
        }
        @media (max-width: 860px){
          .posx-col-phone{ display:none; }
          .posx-col-discount{ display:none; }
        }
        @media (max-width: 720px){
          .posx-col-paid{ display:none; }
        }

        .posx-table-footer{
          margin-top: 12px;
        }

        .posx-modal-head{
          padding: 14px 16px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap: 12px;
        }
        .posx-modal-title{
          font-weight: 900;
          letter-spacing: -0.02em;
        }
        .posx-kv-pad{
          padding: 12px 16px;
        }
        .posx-modal-section{
          margin: 0 16px 14px;
        }
        .posx-modal-actions{
          padding: 0 16px 16px;
          display:flex;
          gap: 8px;
          flex-wrap: wrap;
          justify-content:flex-end;
        }
        .posx-modal-form{
          padding: 12px 16px 16px;
        }
        .posx-modal-actions-row{
          margin-left:auto;
        }
        .posx-totals{
          margin-left:auto;
          text-align:right;
        }
        @media (max-width: 860px){
          .posx-totals{ margin-left:0; text-align:left; }
        }
      `}</style>

      <div className="posx-top">
        <div>
          <h2 className="posx-title">Daftar Pesanan</h2>
          <div className="posx-sub">Filter, lihat detail, edit item, reprint, kirim WhatsApp, dan buat delivery.</div>
        </div>

        <div className="posx-stats">
          <div className="posx-stat">
            <div className="k">Rows tampil</div>
            <div className="v">{summary.totalRows}</div>
          </div>
          <div className="posx-stat">
            <div className="k">PAID</div>
            <div className="v">{summary.paid}</div>
          </div>
          <div className="posx-stat">
            <div className="k">UNPAID</div>
            <div className="v">{summary.unpaid}</div>
          </div>
          <div className="posx-stat">
            <div className="k">VOID/REFUND</div>
            <div className="v">{summary.voided}</div>
          </div>
        </div>
      </div>

      <FilterBar value={q} onChange={setQ} onApply={load} />

      {loading ? (
        <div className="card">
          <div className="skeleton h-64" />
        </div>
      ) : (
        <OrdersTable
          rows={rows}
          onOpenDetail={openDetail}
          page={meta.current_page}
          per_page={meta.per_page}
          total={meta.total}
          onPage={(p) => setQ((s) => ({ ...s, page: p }))}
          onCashPositionChanged={onCashPositionChanged}
        />
      )}

      <OrderDetailDialog
        open={detailOpen}
        order={detail}
        onClose={() => {
          setDetailOpen(false);
          setQ((s) => ({ ...s })); // reload daftar (tetap)
        }}
        onEdit={(o) => {
          setDetail(o);
          setEditOpen(true);
        }}
        onReprint={async (id, format) => {
          try {
            await reprintReceipt(id, { format });
            alert(`Berhasil reprint (${format}mm).`);
          } catch (e) {
            alert((e as Error).message || "Gagal reprint.");
          }
        }}
        onResendWa={onResendWa}
      />

      <EditOrderDialog
        open={editOpen}
        order={detail}
        onClose={() => setEditOpen(false)}
        onSaved={() => {
          setEditOpen(false);
          setDetailOpen(false);
          setDetail(null);
          setQ((s) => ({ ...s })); // refresh (tetap)
        }}
      />
    </div>
  );
}

```
</details>

### src/pages/products/ProductDetail.tsx

- SHA: `bbd46659b59d`  
- Ukuran: 15 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/pages/ProductDetail.tsx
import { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import type { Product } from "../../types/product";
import { getProduct, updateProduct, deleteProduct } from "../../api/products";
import VariantManager from "../../components/products/VariantManager";
import ImageDropzone from "../../components/products/ImageDropzone";

type TabKey = "info" | "variant-stock";

type HttpErrorShape = {
  message?: string;
  response?: {
    status?: number;
    data?: {
      message?: string;
      [k: string]: unknown;
    };
  };
};

function getErrorMessage(err: unknown, fallback = "Terjadi kesalahan."): string {
  if (typeof err === "string") return err;
  if (err && typeof err === "object") {
    const e = err as HttpErrorShape;
    return e.response?.data?.message || e.message || fallback;
  }
  return fallback;
}

function getStatus(err: unknown): number | undefined {
  if (err && typeof err === "object") {
    const e = err as HttpErrorShape;
    return e.response?.status;
  }
  return undefined;
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

function isPositiveInt(n: unknown): n is number {
  return typeof n === "number" && Number.isInteger(n) && n > 0;
}

export default function ProductDetail(): React.ReactElement {
  const { id: rawId } = useParams();
  const navigate = useNavigate();
  const id = Number(rawId);

  const [tab, setTab] = useState<TabKey>("info");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [row, setRow] = useState<Product | null>(null);

  const autoSlug = useMemo(
    () => (row?.nama ? slugify(row.nama) : ""),
    [row?.nama]
  );

  async function refresh(): Promise<void> {
    if (!isPositiveInt(id)) {
      setRow(null);
      setErr("Parameter ID tidak valid.");
      setLoading(false);
      return;
    }
    setLoading(true);
    setErr(null);
    try {
      const product = await getProduct(id);
      setRow(product);
    } catch (e: unknown) {
      const status = getStatus(e);
      const msg =
        status === 404
          ? "Produk tidak ditemukan (404)."
          : getErrorMessage(e, "Gagal memuat produk.");
      setRow(null);
      setErr(msg);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  async function onSaveInfo(): Promise<void> {
    if (!row) return;
    setSaving(true);
    setErr(null);
    try {
      await updateProduct(row.id, {
        category_id: row.category_id,
        nama: row.nama.trim(),
        slug: row.slug?.trim() || autoSlug,
        deskripsi: row.deskripsi ?? null,
        is_active: row.is_active,
      });
      await refresh();
    } catch (e: unknown) {
      setErr(getErrorMessage(e, "Gagal menyimpan."));
    } finally {
      setSaving(false);
    }
  }

  async function onDelete(): Promise<void> {
    if (!row) return;
    if (!confirm(`Hapus produk "${row.nama}"? Tindakan ini tidak bisa dibatalkan.`)) return;
    try {
      await deleteProduct(row.id);
      navigate("/catalog/products");
    } catch (e: unknown) {
      alert(getErrorMessage(e, "Gagal menghapus produk."));
    }
  }

  // ====== UI styles (layout only, no logic changes) ======
  const headerWrap: React.CSSProperties = {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: "1rem",
    flexWrap: "wrap",
  };

  const titleStyle: React.CSSProperties = {
    margin: 0,
    fontSize: "1.55rem",
    fontWeight: 800,
    letterSpacing: "-0.02em",
    lineHeight: 1.2,
    color: "var(--color-text)",
  };

  const crumbStyle: React.CSSProperties = {
    fontSize: "0.95rem",
    opacity: 0.75,
    marginBottom: "0.35rem",
  };

  const tabWrap: React.CSSProperties = {
    display: "flex",
    gap: "0.5rem",
    flexWrap: "wrap",
    alignItems: "center",
  };

  const twoColGrid: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "1.2fr 0.8fr",
    gap: "1rem",
  };

  const fieldGroup: React.CSSProperties = {
    display: "grid",
    gap: "0.9rem",
  };

  const fieldLabel: React.CSSProperties = {
    display: "grid",
    gap: "0.35rem",
  };

  const helpText: React.CSSProperties = {
    fontSize: "0.85rem",
    opacity: 0.7,
  };

  const actionsRow: React.CSSProperties = {
    display: "flex",
    justifyContent: "flex-end",
    gap: "0.6rem",
    flexWrap: "wrap",
    marginTop: "0.25rem",
  };

  // ====== States ======
  if (loading) {
    return (
      <div className="container">
        <div className="section">
          <div className="card p-5">Memuat produk…</div>
        </div>
      </div>
    );
  }

  if (err && !row) {
    return (
      <div className="container">
        <div className="section">
          <div className="card p-5">
            <div className="badge badge-danger" style={{ display: "inline-block", marginBottom: "0.8rem" }}>
              {err}
            </div>
            <div>
              <NavLink to="/catalog/products" className="link">
                ← Kembali ke daftar produk
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!row) {
    return (
      <div className="container">
        <div className="section">
          <div className="card p-5">
            <div style={{ marginBottom: "0.6rem" }}>Produk tidak ditemukan.</div>
            <div>
              <NavLink to="/catalog/products" className="link">
                ← Kembali ke daftar produk
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ====== Main ======
  return (
    <div className="container">
      {/* ====== Header ====== */}
      <div className="section">
        <div style={headerWrap}>
          <div style={{ minWidth: 260 }}>
            <div style={crumbStyle}>
              <NavLink to="/catalog/products" className="link">
                Produk
              </NavLink>{" "}
              <span style={{ opacity: 0.6 }}>/</span> Detail
            </div>
            <h1 style={titleStyle}>{row.nama}</h1>
          </div>

          <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
            <button
              className="button button-outline"
              type="button"
              onClick={() => void refresh()}
              disabled={saving}
              style={{ borderRadius: "999px" }}
            >
              Refresh
            </button>

            <button
              className="button button-danger"
              type="button"
              onClick={() => void onDelete()}
              style={{ borderRadius: "999px" }}
            >
              Hapus
            </button>
          </div>
        </div>
      </div>

      {/* ====== Tabs ====== */}
      <div className="section">
        <div className="card p-5">
          <div style={tabWrap}>
            <button
              className={tab === "info" ? "button button-primary" : "button button-outline"}
              onClick={() => setTab("info")}
              type="button"
              style={{ borderRadius: "999px" }}
            >
              Info
            </button>

            <button
              className={tab === "variant-stock" ? "button button-primary" : "button button-outline"}
              onClick={() => setTab("variant-stock")}
              type="button"
              style={{ borderRadius: "999px" }}
            >
              Varian &amp; Stok
            </button>

            <span style={{ marginLeft: "auto" }} />

            <span className="badge" style={{ borderRadius: "999px" }}>
              ID: {row.id}
            </span>
            <span
              className={row.is_active ? "badge badge-success" : "badge badge-warning"}
              style={{ borderRadius: "999px" }}
            >
              {row.is_active ? "Aktif" : "Nonaktif"}
            </span>
          </div>
        </div>
      </div>

      {/* ====== Content ====== */}
      {tab === "info" ? (
        <div className="section">
          <div className="card p-5">
            <div style={twoColGrid}>
              {/* Left: form */}
              <div style={fieldGroup}>
                <label style={fieldLabel}>
                  <span style={{ fontWeight: 700 }}>Nama</span>
                  <input
                    className="input"
                    value={row.nama}
                    onChange={(e) =>
                      setRow({ ...(row as Product), nama: e.target.value })
                    }
                    placeholder="Nama produk"
                  />
                </label>

                <label style={fieldLabel}>
                  <span style={{ fontWeight: 700 }}>Slug</span>
                  <input
                    className="input"
                    placeholder={autoSlug}
                    value={row.slug ?? ""}
                    onChange={(e) =>
                      setRow({ ...(row as Product), slug: e.target.value })
                    }
                  />
                  <span style={helpText}>
                    Kosongkan untuk otomatis: <b>{autoSlug || "-"}</b>
                  </span>
                </label>

                <label style={fieldLabel}>
                  <span style={{ fontWeight: 700 }}>Deskripsi</span>
                  <textarea
                    className="textarea"
                    rows={4}
                    value={row.deskripsi ?? ""}
                    onChange={(e) =>
                      setRow({ ...(row as Product), deskripsi: e.target.value })
                    }
                    placeholder="Deskripsi singkat produk"
                  />
                </label>

                {err && (
                  <div
                    className="badge badge-danger"
                    style={{ display: "block", padding: "0.7rem 0.85rem", borderRadius: "14px" }}
                  >
                    {err}
                  </div>
                )}

                <div style={actionsRow}>
                  <button
                    className="button button-outline"
                    type="button"
                    onClick={() => void refresh()}
                    disabled={saving}
                    style={{ borderRadius: "999px" }}
                  >
                    Reset
                  </button>
                  <button
                    className="button button-primary"
                    type="button"
                    onClick={() => void onSaveInfo()}
                    disabled={saving}
                    style={{ borderRadius: "999px" }}
                  >
                    {saving ? "Menyimpan…" : "Simpan"}
                  </button>
                </div>
              </div>

              {/* Right: status card */}
              <div style={{ display: "grid", gap: "0.75rem" }}>
                <div
                  className="card"
                  style={{
                    padding: "1rem",
                    borderRadius: "16px",
                    border: "1px solid rgba(15, 23, 42, 0.06)",
                    background: "rgba(15, 23, 42, 0.02)",
                  }}
                >
                  <div style={{ fontWeight: 800, marginBottom: "0.5rem" }}>
                    Status Produk
                  </div>

                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      cursor: "pointer",
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={!!row.is_active}
                      onChange={(e) =>
                        setRow({ ...(row as Product), is_active: e.target.checked })
                      }
                    />
                    <span>Aktif</span>
                  </label>

                  <div style={{ marginTop: "0.75rem", fontSize: "0.9rem", opacity: 0.8 }}>
                    Produk nonaktif tidak ditampilkan pada area katalog/penjualan (tergantung aturan project Anda).
                  </div>
                </div>

                <div
                  className="card"
                  style={{
                    padding: "1rem",
                    borderRadius: "16px",
                    border: "1px solid rgba(15, 23, 42, 0.06)",
                  }}
                >
                  <div style={{ fontWeight: 800, marginBottom: "0.5rem" }}>
                    Aksi Cepat
                  </div>

                  <div style={{ display: "grid", gap: "0.5rem" }}>
                    <button
                      className="button button-outline"
                      type="button"
                      onClick={() => setTab("variant-stock")}
                      style={{ borderRadius: "999px", width: "100%" }}
                    >
                      Kelola Varian & Stok
                    </button>

                    <button
                      className="button button-outline"
                      type="button"
                      onClick={() => setTab("variant-stock")}
                      style={{ borderRadius: "999px", width: "100%" }}
                    >
                      Kelola Media Gambar
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* responsive */}
            <style>
              {`
                @media (max-width: 980px) {
                  .container .section div[style*="grid-template-columns: 1.2fr 0.8fr"]{
                    grid-template-columns: 1fr !important;
                  }
                }
              `}
            </style>
          </div>
        </div>
      ) : (
        <div className="section">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "1rem",
            }}
          >
            <div className="card p-5">
              <div style={{ fontWeight: 800, marginBottom: "0.75rem" }}>
                Varian &amp; Stok
              </div>
              <VariantManager productId={row.id} />
            </div>

            <div className="card p-5">
              <div style={{ fontWeight: 800, marginBottom: "0.75rem" }}>
                Media Gambar
              </div>
              <ImageDropzone productId={row.id} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

```
</details>

### src/pages/products/ProductsPage.tsx

- SHA: `7ec99ad9fa1f`  
- Ukuran: 9 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/pages/products/ProductsPage.tsx
import { useEffect, useMemo, useState, useCallback } from "react";
import type {
  Product,
  ProductQuery,
  ProductCreatePayload,
  ProductUpdatePayload,
} from "../../types/product";
import {
  createProduct,
  deleteProduct,
  listProducts,
  updateProduct,
} from "../../api/products";

import { listCategories } from "../../api/categories";
import type { Category } from "../../types/category";

import ProductFilters from "../../components/products/ProductFilters";
import ProductTable from "../../components/products/ProductTable";
import ProductFormDialog from "../../components/products/ProductFormDialog";
import VariantManager from "../../components/products/VariantManager";
import ImageDropzone from "../../components/products/ImageDropzone";

type CategoryLite = Pick<Category, "id" | "nama">;

export default function ProductsPage() {
  const [categories, setCategories] = useState<CategoryLite[]>([]);
  const [query, setQuery] = useState<ProductQuery>({
    page: 1,
    per_page: 10,
    sort: "-created_at",
  });
  const [rows, setRows] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<Product | null>(null);

  const [variantsFor, setVariantsFor] = useState<Product | null>(null);
  const [mediaFor, setMediaFor] = useState<Product | null>(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const r = await listProducts(query);
      setRows(r.data);
      setTotal(r.meta?.total ?? r.data.length);
    } finally {
      setLoading(false);
    }
  }, [query]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  useEffect(() => {
    (async () => {
      try {
        const r = await listCategories({ page: 1, per_page: 100 });
        setCategories(r.data.map((c: Category) => ({ id: c.id, nama: c.nama })));
      } catch {
        // diamkan; filter kategori tetap bisa jalan dengan opsi default "Semua"
      }
    })();
  }, []);

  const page = useMemo(() => query.page ?? 1, [query]);
  const perPage = useMemo(() => query.per_page ?? 10, [query]);

  async function handleSubmit(
    payload: ProductCreatePayload | ProductUpdatePayload
  ) {
    if (editing?.id) {
      await updateProduct(editing.id, payload);
    } else {
      await createProduct(payload as ProductCreatePayload);
    }
    await refresh();
    return true;
  }

  function onDelete(row: Product) {
    if (!confirm(`Hapus produk "${row.nama}"?`)) return;
    deleteProduct(row.id).then(refresh);
  }

  const headerWrap: React.CSSProperties = {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: "1rem",
    flexWrap: "wrap",
  };

  const titleStyle: React.CSSProperties = {
    margin: 0,
    fontSize: "1.6rem",
    fontWeight: 800,
    letterSpacing: "-0.02em",
    lineHeight: 1.2,
    color: "var(--color-text)",
  };

  const subStyle: React.CSSProperties = {
    margin: "0.35rem 0 0 0",
    fontSize: "0.95rem",
    opacity: 0.75,
  };

  const cardHeader: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem",
    flexWrap: "wrap",
    marginBottom: "0.9rem",
  };

  const cardTitle: React.CSSProperties = {
    fontWeight: 800,
    letterSpacing: "-0.01em",
  };

  const metaPillsWrap: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    flexWrap: "wrap",
  };

  return (
    <div className="container">
      {/* ====== Page Header ====== */}
      <div className="section">
        <div style={headerWrap}>
          <div style={{ minWidth: 240 }}>
            <h1 style={titleStyle}>Produk</h1>
            <p style={subStyle}>
              Kelola data produk, varian, dan media. Tampilan dirapikan tanpa
              mengubah logika.
            </p>
          </div>

          <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
            <button
              className="button button-outline"
              type="button"
              onClick={refresh}
              disabled={loading}
              style={{ borderRadius: "999px" }}
            >
              {loading ? "Memuat…" : "Refresh"}
            </button>

            <button
              className="button button-primary"
              type="button"
              onClick={() => {
                setEditing(null);
                setDialogOpen(true);
              }}
              style={{ borderRadius: "999px" }}
            >
              Tambah Produk
            </button>
          </div>
        </div>
      </div>

      {/* ====== Filters Card ====== */}
      <div className="section">
        <div className="card p-5">
          <div style={cardHeader}>
            <div style={cardTitle}>Filter Produk</div>
            <div style={metaPillsWrap}>
              <span className="badge" style={{ borderRadius: "999px" }}>
                Total: {total}
              </span>
              <span className="badge" style={{ borderRadius: "999px" }}>
                Per halaman: {perPage}
              </span>
              <span className="badge" style={{ borderRadius: "999px" }}>
                Halaman: {page}
              </span>
            </div>
          </div>

          <ProductFilters value={query} categories={categories} onChange={setQuery} />
        </div>
      </div>

      {/* ====== Table Card ====== */}
      <div className="section">
        <div className="card p-5">
          <div style={cardHeader}>
            <div style={cardTitle}>Daftar Produk</div>

            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              <span
                className={loading ? "badge badge-warning" : "badge badge-success"}
                style={{ borderRadius: "999px" }}
              >
                {loading ? "Loading" : "Ready"}
              </span>
            </div>
          </div>

          <ProductTable
            rows={rows}
            loading={loading}
            page={page}
            perPage={perPage}
            total={total}
            onPageChange={(p) => setQuery((q) => ({ ...q, page: p }))}
            onEdit={(r) => {
              setEditing(r);
              setDialogOpen(true);
            }}
            onVariants={(r) => setVariantsFor(r)}
            onMedia={(r) => setMediaFor(r)}
            onDelete={onDelete}
          />
        </div>
      </div>

      {/* ====== Variants Dialog ====== */}
      {variantsFor && (
        <div className="dialog is-open" role="dialog" aria-modal="true">
          <div className="dialog__overlay" onClick={() => setVariantsFor(null)} />
          <div className="dialog__content card card--lg">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                flexWrap: "wrap",
                marginBottom: "0.75rem",
              }}
            >
              <div className="title-sm">Varian — {variantsFor.nama}</div>
              <button
                className="button button-outline"
                style={{ borderRadius: "999px" }}
                onClick={() => setVariantsFor(null)}
              >
                Tutup
              </button>
            </div>
            <VariantManager productId={variantsFor.id} />
          </div>
        </div>
      )}

      {/* ====== Media Dialog ====== */}
      {mediaFor && (
        <div className="dialog is-open" role="dialog" aria-modal="true">
          <div className="dialog__overlay" onClick={() => setMediaFor(null)} />
          <div className="dialog__content card card--lg">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                flexWrap: "wrap",
                marginBottom: "0.75rem",
              }}
            >
              <div className="title-sm">Media — {mediaFor.nama}</div>
              <button
                className="button button-outline"
                style={{ borderRadius: "999px" }}
                onClick={() => setMediaFor(null)}
              >
                Tutup
              </button>
            </div>
            <ImageDropzone productId={mediaFor.id} />
          </div>
        </div>
      )}

      {/* ====== Create/Update Dialog ====== */}
      <ProductFormDialog
        open={dialogOpen}
        initial={editing}
        categories={categories}
        onClose={() => setDialogOpen(false)}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

```
</details>

### src/pages/settings/SettingsIndex.tsx

- SHA: `45a79e41c204`  
- Ukuran: 7 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/pages/settings/SettingsIndex.tsx
import { useEffect, useState } from 'react';
import { listSettings } from '../../api/settings';
import type { LaravelPaginator, Setting, SettingQuery, SettingScope } from '../../types/settings';
// import SettingsForm from '../../components/settings/SettingsForm';
// import PreferenceToggles from '../../components/settings/PreferenceToggles';
// import BackupRestorePanel from '../../components/settings/BackupRestorePanel';
import { useAuth } from '../../store/auth';

export default function SettingsIndex() {
  const { hasRole, user } = useAuth();
  const canAccess = hasRole('superadmin', 'admin_cabang', 'kasir');

  const [query, setQuery] = useState<SettingQuery>({ page: 1, per_page: 10 });
  const [rows, setRows] = useState<LaravelPaginator<Setting> | null>(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        setLoading(true);
        setErr(null);
        const data = await listSettings(query);
        if (!cancelled) setRows(data);
      } catch {
        if (!cancelled) setErr('Failed to load settings');
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [query]);

  // const defaultScope: SettingScope = hasRole('superadmin')
  //   ? 'GLOBAL'
  //   : hasRole('admin_cabang')
  //   ? 'BRANCH'
  //   : 'USER';

  if (!canAccess) {
    return (
      <div>
        <h1>Settings</h1>
        <p className="muted">You are not allowed to access this page.</p>
      </div>
    );
  }

  function rowKey(r: Setting) {
    return r.id ? String(r.id) : `${r.scope}:${r.scope_id ?? '0'}:${r.key}`;
  }

  return (
    <div>
      {/* Page Header */}
      <div className="card" style={{ marginBottom: 16 }}>
        <h1 className="card-title">Settings</h1>
        <p className="muted">Global / Branch / User preferences.</p>
      </div>

      {/* Cards Grid (stacked mobile-first) */}
      <div>
        {/* <div className="card" style={{ marginBottom: 16 }}>
          <h2 className="card-title">Numbering — Invoice</h2>
          <SettingsForm
            defaultScope={defaultScope}
            defaultScopeId={defaultScope === 'USER' ? user?.id ?? null : null}
            settingKey="numbering.invoice"
            valueTemplate={{ prefix: 'INV-', pad: 6, reset: 'daily' }}
          />
        </div> */}

        {/* <div className="card" style={{ marginBottom: 16 }}>
          <h2 className="card-title">Receipt Footer</h2>
          <SettingsForm
            defaultScope={defaultScope}
            defaultScopeId={defaultScope === 'USER' ? user?.id ?? null : null}
            settingKey="receipt.footer"
            valueTemplate={{ line1: 'Terima kasih', line2: 'Follow @tokokue' }}
          />
        </div> */}

        {/* <div className="card" style={{ marginBottom: 16 }}>
          <h2 className="card-title">UI Preferences</h2>
          <PreferenceToggles
            toggles={[
              { key: 'ui.preferences', path: 'darkMode', label: 'Dark Mode (User)', defaultValue: false, scope: 'USER' },
              { key: 'ui.preferences', path: 'compactTables', label: 'Compact Tables (User)', defaultValue: false, scope: 'USER' },
            ]}
          />
        </div> */}

        {/* <div className="card" style={{ marginBottom: 16 }}>
          <h2 className="card-title">Backup &amp; Restore</h2>
          <BackupRestorePanel />
        </div> */}
      </div>

      {/* Current Settings Table */}
      <div className="card">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <h2 className="card-title" style={{ margin: 0 }}>Current Settings</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <select
              className="select"
              value={query.scope ?? ''}
              onChange={(e) =>
                setQuery((q) => ({ ...q, scope: (e.target.value || null) as SettingScope | null, page: 1 }))
              }
            >
              <option value="">All Scopes</option>
              <option value="GLOBAL">GLOBAL</option>
              <option value="BRANCH">BRANCH</option>
              <option value="USER">USER</option>
            </select>

            <input
              className="input"
              style={{ width: 120 }}
              type="number"
              placeholder="Scope ID"
              value={query.scope_id ?? ''}
              onChange={(e) =>
                setQuery((q) => ({
                  ...q,
                  scope_id: e.target.value === '' ? null : Number(e.target.value),
                  page: 1,
                }))
              }
            />

            <select
              className="select"
              value={query.per_page ?? 10}
              onChange={(e) => setQuery((q) => ({ ...q, per_page: Number(e.target.value), page: 1 }))}
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
            </select>
          </div>
        </div>

        {loading ? (
          <div className="muted">Loading…</div>
        ) : err ? (
          <div className="badge badge-danger">{err}</div>
        ) : !rows || rows.data.length === 0 ? (
          <div className="muted">No settings found.</div>
        ) : (
          <>
            <div className="table-wrapper">
              <table className="table">
                <thead>
                  <tr>
                    <th style={{ width: 60 }}>ID</th>
                    <th>Scope</th>
                    <th>Scope ID</th>
                    <th>Key</th>
                    <th>Value</th>
                    <th>Updated</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.data.map((r) => (
                    <tr key={rowKey(r)}>
                      <td>{r.id}</td>
                      <td>{r.scope}</td>
                      <td>{r.scope_id ?? '-'}</td>
                      <td>{r.key}</td>
                      <td>
                        <code style={{ whiteSpace: 'pre-wrap', fontSize: 12 }}>
                          {JSON.stringify(r.value)}
                        </code>
                      </td>
                      <td>{new Date(r.updated_at).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12 }}>
              <button
                className="button button-outline"
                disabled={!rows.prev_page_url}
                onClick={() => setQuery((q) => ({ ...q, page: Math.max(1, (q.page ?? 1) - 1) }))}
              >
                Prev
              </button>
              <span className="muted" style={{ fontSize: 12 }}>
                Page {rows.current_page} / {rows.last_page}
              </span>
              <button
                className="button button-outline"
                disabled={!rows.next_page_url}
                onClick={() => setQuery((q) => ({ ...q, page: (q.page ?? 1) + 1 }))}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

```
</details>

### src/pages/stock/StockIndex.tsx

- SHA: `48aa95af5558`  
- Ukuran: 12 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/pages/stock/StockIndex.tsx
import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import type { Stock, StockQuery, UpdateMinStockPayload } from "../../types/stock";
import { listStocks, updateMinStock } from "../../api/stocks";
import StockTable from "../../components/stock/StockTable";
import SetInitialStockDialog from "../../components/stock/SetInitialStockDialog";
import CabangSelect from "../../components/stock/CabangSelect";
import GudangSelect from "../../components/stock/GudangSelect";
import VariantPicker from "../../components/stock/VariantPicker";
import { shallowEqual } from "../../utils/shallowEqual";

function getErrorMessage(err: unknown, fallback = "Terjadi kesalahan."): string {
  if (typeof err === "string") return err;
  if (err && typeof err === "object") {
    const maybe = (err as { message?: unknown }).message;
    if (typeof maybe === "string") return maybe;
  }
  return fallback;
}

type QueryUpdater = (patch: Partial<StockQuery>) => void;

function useQueryState() {
  const [q, setQ] = useState<StockQuery>({ page: 1, per_page: 10, low: false });

  const update: QueryUpdater = useCallback((patch) => {
    setQ((prev) => {
      const next = { ...prev, ...patch };
      const resetPage =
        (patch.cabang_id !== undefined && patch.cabang_id !== prev.cabang_id) ||
        (patch.gudang_id !== undefined && patch.gudang_id !== prev.gudang_id) ||
        (patch.product_variant_id !== undefined &&
          patch.product_variant_id !== prev.product_variant_id) ||
        (patch.low !== undefined && patch.low !== prev.low) ||
        (patch.per_page !== undefined && patch.per_page !== prev.per_page);

      if (resetPage) next.page = 1;
      return shallowEqual(prev, next) ? prev : next;
    });
  }, []);

  const setQDirect = useCallback((next: StockQuery) => {
    setQ((prev) => (shallowEqual(prev, next) ? prev : next));
  }, []);

  return { q, update, setQ: setQDirect };
}

function useDebounced<T>(value: T, delayMs: number): T {
  const [debounced, setDebounced] = useState<T>(value);
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delayMs);
    return () => clearTimeout(id);
  }, [value, delayMs]);
  return debounced;
}

export default function StockIndex() {
  const { q, update } = useQueryState();
  const debouncedQ = useDebounced(q, 150);

  const [rows, setRows] = useState<Stock[]>([]);
  const [loading, setLoading] = useState(false);
  const [openSet, setOpenSet] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onCabangChange = useCallback(
    (id: number | undefined) => update({ cabang_id: id, gudang_id: undefined }),
    [update]
  );

  const onGudangChange = useCallback(
    (id: number | undefined) => update({ gudang_id: id }),
    [update]
  );

  const onVariantChange = useCallback(
    (variantId: number | undefined) => update({ product_variant_id: variantId }),
    [update]
  );

  function normalizeQuery(q: StockQuery): StockQuery {
    return {
      page: q.page ?? 1,
      per_page: q.per_page ?? 10,
      low: !!q.low,
      cabang_id: q.cabang_id ?? undefined,
      gudang_id: q.gudang_id ?? undefined,
      product_variant_id: q.product_variant_id ?? undefined,
    };
  }

  const stableQuery = useMemo<StockQuery>(() => normalizeQuery(debouncedQ), [debouncedQ]);

  const abortRef = useRef<AbortController | null>(null);
  const lastQS = useRef<string>("");

  const reload = useCallback(async () => {
    setError(null);

    const qs = new URLSearchParams(
      Object.entries(stableQuery).reduce<Record<string, string>>((acc, [k, v]) => {
        if (v == null) return acc;
        if (typeof v === "boolean") {
          acc[k] = v ? "1" : "0";
          return acc;
        }
        if (typeof v === "number") {
          if (!Number.isNaN(v)) acc[k] = String(v);
          return acc;
        }
        const s = String(v);
        if (s !== "") acc[k] = s;
        return acc;
      }, {})
    ).toString();

    if (qs === lastQS.current) return;
    lastQS.current = qs;

    setLoading(true);
    abortRef.current?.abort();
    const ctrl = new AbortController();
    abortRef.current = ctrl;

    try {
      const res = await listStocks(stableQuery, { signal: ctrl.signal });
      setRows(res.data);
    } catch (err: unknown) {
      if ((err as { name?: string }).name !== "AbortError") {
        setError(getErrorMessage(err, "Gagal memuat stok."));
      }
    } finally {
      if (!ctrl.signal.aborted) setLoading(false);
    }
  }, [stableQuery]);

  const mountedOnce = useRef(false);

  useEffect(() => {
    if (mountedOnce.current) return;
    mountedOnce.current = true;
    void reload();
    return () => {
      abortRef.current?.abort();
    };
  }, [reload]);

  useEffect(() => {
    if (!mountedOnce.current) return;
    void reload();
    return () => {
      abortRef.current?.abort();
    };
  }, [reload]);

  const onEditMin = useCallback(
    async (row: Stock) => {
      const current = row.variant?.sku ?? String(row.product_variant_id);
      const val = window.prompt(`Ubah Min Stok untuk SKU ${current}`, String(row.min_stok));
      if (val == null) return;

      const parsed = Number(val);
      const payload: UpdateMinStockPayload = { min_stok: Number.isFinite(parsed) ? parsed : 0 };

      try {
        await updateMinStock(row.id, payload);
        void reload();
      } catch (e: unknown) {
        window.alert(getErrorMessage(e, "Gagal update min stok"));
      }
    },
    [reload]
  );

  // --- UI helpers (tanpa ubah logika) ---
  const totalText = useMemo(() => {
    const n = rows?.length ?? 0;
    return `${n} baris`;
  }, [rows]);

  return (
    <div className="container">
      {/* Header page: judul + aksi utama */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 12,
          flexWrap: "wrap",
          marginBottom: 12,
        }}
      >
        <div style={{ minWidth: 260 }}>
          <h2 style={{ marginBottom: 4 }}>Manajemen Stok</h2>
          <div className="text-dim" style={{ fontSize: ".92rem" }}>
            Atur filter cabang/gudang/varian, pantau low stock, dan set stok awal.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
          <span className="badge" title="Jumlah baris saat ini">
            {loading ? "Memuat…" : totalText}
          </span>

          <button
            onClick={() => setOpenSet(true)}
            className="button button-primary"
            style={{ whiteSpace: "nowrap" }}
          >
            Set Stok Awal
          </button>
        </div>
      </div>

      {/* Filters card */}
      <div className="card mb-4">
        {/* Baris 1: Cabang | Gudang | Per Page */}
        <div className="form-row form-row--3 mb-3">
          <div>
            <label className="mb-2" style={{ display: "block", fontWeight: 700 }}>
              Cabang
            </label>
            <CabangSelect allowAll value={q.cabang_id} onChange={onCabangChange} />
            <div className="text-dim" style={{ fontSize: ".85rem", marginTop: 6 }}>
              Pilih cabang untuk memfilter gudang & stok.
            </div>
          </div>

          <div>
            <label className="mb-2" style={{ display: "block", fontWeight: 700 }}>
              Gudang
            </label>
            <GudangSelect
              allowAll
              cabangId={q.cabang_id}
              value={q.gudang_id}
              onChange={onGudangChange}
            />
            <div className="text-dim" style={{ fontSize: ".85rem", marginTop: 6 }}>
              Gudang mengikuti cabang yang dipilih.
            </div>
          </div>

          <div>
            <label className="mb-2" style={{ display: "block", fontWeight: 700 }}>
              Per Page
            </label>
            <select
              className="select"
              value={q.per_page ?? 10}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                update({ per_page: Number(e.target.value) })
              }
            >
              {[10, 20, 50].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
            <div className="text-dim" style={{ fontSize: ".85rem", marginTop: 6 }}>
              Mengatur jumlah data per halaman.
            </div>
          </div>
        </div>

        {/* Divider halus (tanpa perlu CSS baru) */}
        <div
          style={{
            height: 1,
            background: "rgba(0,0,0,0.06)",
            margin: "12px 0",
          }}
        />

        {/* Baris 2: Varian (lebar) | Filter Low Stock */}
        <div className="form-row form-row--3">
          <div style={{ gridColumn: "1 / -1" }}>
            <label className="mb-2" style={{ display: "block", fontWeight: 700 }}>
              Varian Produk
            </label>
            <VariantPicker value={q.product_variant_id} onChange={onVariantChange} />
            <div className="text-dim" style={{ fontSize: ".85rem", marginTop: 6 }}>
              Opsional. Pilih varian untuk mempersempit hasil.
            </div>
          </div>

          <div style={{ gridColumn: "1 / -1" }}>
            <label className="mb-2" style={{ display: "block", fontWeight: 700 }}>
              Filter
            </label>

            <label
              htmlFor="low"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 12px",
                border: "1px solid rgba(0,0,0,0.10)",
                borderRadius: 12,
                background: "rgba(0,0,0,0.02)",
                cursor: "pointer",
                userSelect: "none",
              }}
            >
              <input
                id="low"
                type="checkbox"
                checked={Boolean(q.low)}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  update({ low: e.target.checked })
                }
              />
              <div>
                <div style={{ fontWeight: 700, lineHeight: 1.2 }}>Hanya Low Stock</div>
                <div className="text-dim" style={{ fontSize: ".85rem", marginTop: 2 }}>
                  Tampilkan stok yang berada di bawah min stok.
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="card mb-4">
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
            <span className="badge badge-danger">Error</span>
            <span>{error}</span>
            <button
              className="button button-outline"
              onClick={() => void reload()}
              style={{ marginLeft: "auto" }}
            >
              Coba lagi
            </button>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="card">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            flexWrap: "wrap",
            marginBottom: 12,
          }}
        >
          <div style={{ fontWeight: 800 }}>Daftar Stok</div>
          <div className="text-dim" style={{ fontSize: ".9rem" }}>
            {loading ? "Sedang memuat data…" : "Klik aksi pada tabel untuk ubah Min Stok."}
          </div>
        </div>

        <StockTable rows={rows} loading={loading} onEditMin={onEditMin} />
      </div>

      {/* Dialog */}
      {openSet && (
        <SetInitialStockDialog open={openSet} onClose={() => setOpenSet(false)} onSuccess={reload} />
      )}
    </div>
  );
}

```
</details>

### src/pages/users/Index.tsx

- SHA: `4c00d07c8bc3`  
- Ukuran: 5 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { listUsers, createUser, updateUser, deleteUser } from "../../api/users";
import type { Paginated } from "../../types/http";
import type { Role, User } from "../../types/user";
import { useAuth } from "../../store/auth";
import UserFilters from "../../components/users/UserFilters";
import UserTable from "../../components/users/UserTable";
import UserFormDialog from "../../components/users/UserFormDialog";

export default function UsersIndex(): React.ReactElement {
  const { hasRole } = useAuth();
  const canManage = hasRole("superadmin", "admin_cabang");

  const [page, setPage] = useState(1);
  const [q, setQ] = useState("");
  const [role, setRole] = useState<Role | "">("");
  const [cabangId, setCabangId] = useState<number | "">("");
  const [isActive, setIsActive] = useState<"" | "1" | "0">("");

  const [data, setData] = useState<Paginated<User> | null>(null);
  const [loading, setLoading] = useState(false);

  const [openForm, setOpenForm] = useState(false);
  const [editing, setEditing] = useState<User | null>(null);

  const params = useMemo(() => ({
    q: q || undefined,
    role: (role || undefined) as Role | undefined,
    cabang_id: (cabangId === "" ? undefined : cabangId) as number | undefined,
    is_active: isActive === "" ? undefined : (isActive === "1"),
    per_page: 10,
    page,
  }), [q, role, cabangId, isActive, page]);

  const fetchData = useCallback(async (): Promise<void> => {
    setLoading(true);
    try {
      const res = await listUsers(params);
      setData(res);
    } finally {
      setLoading(false);
    }
  }, [params]);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  function handleFilterChange(next: Partial<{ q: string; role: Role | ""; cabangId: number | ""; isActive: "" | "1" | "0" }>): void {
    if ("q" in next) setQ(next.q ?? "");
    if ("role" in next) setRole((next.role ?? "") as Role | "");
    if ("cabangId" in next) setCabangId((next.cabangId ?? "") as number | "");
    if ("isActive" in next) setIsActive((next.isActive ?? "") as "" | "1" | "0");
  }

  function resetFilters(): void {
    setQ(""); setRole(""); setCabangId(""); setIsActive(""); setPage(1);
  }

  async function submitCreate(payload: Parameters<typeof createUser>[0]): Promise<void> {
    await createUser(payload);
    await fetchData();
  }

  async function submitUpdate(payload: Parameters<typeof updateUser>[1]): Promise<void> {
    if (!editing) return;
    await updateUser(editing.id, payload);
    setEditing(null);
    await fetchData();
  }

  async function confirmDelete(u: User): Promise<void> {
    if (!canManage) return;
    const ok = window.confirm(`Hapus user "${u.name}"? Tindakan ini tidak bisa dibatalkan.`);
    if (!ok) return;
    await deleteUser(u.id);
    await fetchData();
  }

  return (
    <div className="container">
      {/* Header */}
      <section className="section">
        <h1>Users</h1>
        <p className="mb-3" style={{ opacity: 0.8 }}>Kelola pengguna & akses cabang.</p>
      </section>

      {/* Filter Card */}
      <div className="card mb-3">
        <UserFilters
          q={q}
          role={role}
          cabangId={cabangId}
          isActive={isActive}
          onChange={handleFilterChange}
          onReset={resetFilters}
          onSearch={() => setPage(1)}
        />
      </div>

      {/* Toolbar atas tabel */}
      <div className="section" style={{ marginTop: 0, paddingTop: 0 }}>
        <div>
          <span style={{ opacity: 0.8, fontSize: ".9rem" }}>
            Search
          </span>
          {canManage && (
            <button
              onClick={() => { setEditing(null); setOpenForm(true); }}
              className="button button-primary"
              style={{ float: "right" }}
            >
              Tambah User
            </button>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="card">
        <UserTable
          data={data}
          loading={loading}
          onEdit={(u) => { if (canManage) { setEditing(u); setOpenForm(true); } }}
          onDelete={confirmDelete}
          page={page}
          onPage={setPage}
        />
      </div>

      {/* Dialog */}
      {openForm && (
        <UserFormDialog
          open={openForm}
          onClose={() => { setOpenForm(false); }}
          editing={editing ?? undefined}
          onSubmit={async (p) => {
            if (editing) {
              // UPDATE — password opsional
              const { password, ...rest } = p;
              const updatePayload =
                password && password.trim().length > 0
                  ? { ...rest, password }
                  : rest;
              await submitUpdate(updatePayload);
            } else {
              // CREATE — password wajib string
              if (!p.password || p.password.trim().length === 0) {
                throw new Error("Password wajib diisi untuk user baru.");
              }
              const createPayload = {
                name: p.name,
                email: p.email,
                phone: p.phone || null,
                password: p.password,
                cabang_id: p.cabang_id ?? null,
                role: p.role,
                is_active: p.is_active,
              };
              await submitCreate(createPayload);
            }
          }}
        />
      )}
    </div>
  );
}

```
</details>



## Store (src/store)

### src/store/auth.ts

- SHA: `eda83ad2c4c6`  
- Ukuran: 3 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
// src/store/auth.ts
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { login as apiLogin, me as apiMe, logout as apiLogout } from "../api/auth";
import { getAuthToken, setAuthToken } from "../api/client";
import type { LoginPayload } from "../types/auth";
import type { Role, User } from "../types/user";

type AuthStatus = "idle" | "loading" | "authenticated" | "unauthenticated";

type AuthContextValue = {
  user: User | null;
  status: AuthStatus;
  isLoading: boolean;
  isAuthenticated: boolean;
  hasRole: (...roles: Role[]) => boolean;
  login: (payload: LoginPayload) => Promise<void>;
  logout: () => Promise<void>;
  refreshMe: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider(props: { children: React.ReactNode }): React.ReactElement {
  const [user, setUser] = useState<User | null>(null);
  const [status, setStatus] = useState<AuthStatus>("idle");

  const isAuthenticated = status === "authenticated";
  const isLoading = status === "loading" || status === "idle";

  const hasRole = useCallback(
    (...roles: Role[]): boolean => {
      if (!user) return false;
      return roles.includes(user.role);
    },
    [user]
  );

  const refreshMe = useCallback(async (): Promise<void> => {
    const token = getAuthToken();
    if (!token) {
      setUser(null);
      setStatus("unauthenticated");
      return;
    }
    try {
      if (status === "idle") setStatus("loading");
      const u = await apiMe();
      setUser(u);
      setStatus("authenticated");
    } catch {
      setAuthToken(null);
      setUser(null);
      setStatus("unauthenticated");
    }
  }, [status]);

  const login = useCallback(async (payload: LoginPayload): Promise<void> => {
    setStatus("loading");
    try {
      const res = await apiLogin(payload); // setAuthToken() sudah dipanggil di api/auth.ts
      setUser(res.user);
      setStatus("authenticated");
    } catch (e) {
      setAuthToken(null);
      setUser(null);
      setStatus("unauthenticated");
      throw e;
    }
  }, []);

  const logout = useCallback(async (): Promise<void> => {
    try {
      await apiLogout();
    } finally {
      setAuthToken(null);
      setUser(null);
      setStatus("unauthenticated");
    }
  }, []);

  useEffect(() => {
    void (async () => {
      await refreshMe();
    })();
  }, [refreshMe]);

  const value: AuthContextValue = useMemo(
    () => ({
      user,
      status,
      isLoading,
      isAuthenticated,
      hasRole,
      login,
      logout,
      refreshMe,
    }),
    [user, status, isLoading, isAuthenticated, hasRole, login, logout, refreshMe]
  );

  // TANPA JSX: pakai React.createElement agar file .ts valid
  return React.createElement(AuthContext.Provider, { value }, props.children);
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth() must be used within <AuthProvider />");
  return ctx;
}

```
</details>

### src/store/cart.ts

- SHA: `69e2cf26b3a8`  
- Ukuran: 3 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
// src/store/cart.ts
import { create } from 'zustand';
import type { CartItem, QuoteResult } from '../types/pos';
import { quoteCart } from '../api/pos';

type CartState = {
  items: CartItem[];
  quoting: boolean;
  quote?: QuoteResult;
  error?: string | null;
};

type AddItemLegacy = { product_id: number; variant_id?: number | null; qty: number };

type Actions = {
  add: (item: CartItem) => void;
  // ✅ Terima payload lama ATAU baru (2025-safe)
  addItem: (item: CartItem | AddItemLegacy) => void;
  remove: (variant_id: number) => void;
  setQty: (variant_id: number, qty: number) => void;
  clear: () => void;
  recount: () => Promise<void>;
};

export const useCart = create<CartState & Actions>((set, get) => ({
  items: [],
  quoting: false,
  quote: undefined,
  error: null,

  add: (item) => {
    const exists = get().items.find(i => i.variant_id === item.variant_id);
    const items = exists
      ? get().items.map(i => i.variant_id === item.variant_id ? { ...i, qty: i.qty + item.qty } : i)
      : [...get().items, item];
    set({ items });
    void get().recount();
  },

  // ✅ Alias yang menormalkan payload lama → payload CartItem
  addItem: (raw) => {
    // dukung dua bentuk payload:
    // 1) CartItem        -> { variant_id, qty, ... }
    // 2) Legacy AddItem  -> { product_id, variant_id?, qty }
    const maybeLegacy = raw as AddItemLegacy;
    const variant_id = Number(
      // prefer payload baru
      (raw as CartItem).variant_id ??
      // fallback: legacy pakai variant_id bila ada
      maybeLegacy.variant_id ??
      // fallback terakhir: pakai product_id (untuk produk single-variant)
      maybeLegacy.product_id
    );
    const qty = Number((raw as CartItem).qty ?? maybeLegacy.qty ?? 1);

    if (!Number.isFinite(variant_id) || qty <= 0) return;
    get().add({ variant_id, qty });
  },

  remove: (variant_id) => {
    set({ items: get().items.filter(i => i.variant_id !== variant_id) });
    void get().recount();
  },

  setQty: (variant_id, qty) => {
    set({ items: get().items.map(i => i.variant_id === variant_id ? { ...i, qty } : i) });
    void get().recount();
  },

  clear: () => set({ items: [], quote: undefined, error: null }),

  recount: async () => {
    const items = get().items.filter(i => i.qty > 0);
    if (items.length === 0) { set({ quote: undefined, error: null }); return; }
    set({ quoting: true, error: null });
    try {
      const quote = await quoteCart(items);
      set({ quote });
    } catch (e) {
      set({ error: (e as Error).message });
    } finally {
      set({ quoting: false });
    }
  }
}));

```
</details>

### src/store/useBranches.ts

- SHA: `39db7dace177`  
- Ukuran: 4 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  listBranches,
  getBranch,
  createBranch,
  updateBranch,
  deleteBranch,
} from "../api/branches";
import type {
  Branch,
  BranchCreatePayload,
  BranchDetailResponse,
  BranchListResponse,
  BranchQuery,
  BranchUpdatePayload,
  PaginatedMeta,
} from "../types/branch";

function shallowEqual(a?: Record<string, unknown>, b?: Record<string, unknown>) {
  if (a === b) return true;
  if (!a || !b) return false;
  const ka = Object.keys(a);
  const kb = Object.keys(b);
  if (ka.length !== kb.length) return false;
  for (const k of ka) {
    if (a[k] !== b[k]) return false;
  }
  return true;
}

type ListState = {
  items: Branch[];
  meta: PaginatedMeta | null;
  loading: boolean;
  error: string | null;
  query: BranchQuery;
};

export function useBranches(initial?: BranchQuery) {
  const [state, setState] = useState<ListState>({
    items: [],
    meta: null,
    loading: false,
    error: null,
    query: { page: 1, per_page: 10, ...initial },
  });

  // simpan query terkini sebagai referensi stabil
  const queryRef = useRef<BranchQuery>(state.query);
  // sinkronkan ref saat state.query benar-benar berubah
  useEffect(() => {
    queryRef.current = state.query;
  }, [state.query]);

  const fetchList = useCallback(async (q?: BranchQuery) => {
    const nextQuery: BranchQuery = { ...queryRef.current, ...q };
    const queryChanged = !shallowEqual(queryRef.current as Record<string, unknown>, nextQuery as Record<string, unknown>);

    setState((s) => ({ ...s, loading: true, error: null }));
    try {
      const res: BranchListResponse = await listBranches(nextQuery);
      setState((s) => ({
        ...s,
        loading: false,
        items: res.data,
        meta: res.meta,
        // hanya update query jika berubah (mencegah update depth loop)
        query: queryChanged ? nextQuery : s.query,
      }));
      if (queryChanged) {
        queryRef.current = nextQuery;
      }
    } catch {
      setState((s) => ({ ...s, loading: false, error: "Gagal memuat cabang" }));
    }
  }, []);

  const refresh = useCallback(() => fetchList(), [fetchList]);

  const find = useCallback(async (id: number): Promise<Branch | null> => {
    try {
      const res: BranchDetailResponse = await getBranch(id);
      return res.data;
    } catch {
      return null;
    }
  }, []);

  const create = useCallback(async (payload: BranchCreatePayload): Promise<boolean> => {
    try {
      await createBranch(payload);
      await refresh();
      return true;
    } catch {
      return false;
    }
  }, [refresh]);

  const update = useCallback(async (id: number, payload: BranchUpdatePayload): Promise<boolean> => {
    try {
      await updateBranch(id, payload);
      await refresh();
      return true;
    } catch {
      return false;
    }
  }, [refresh]);

  const remove = useCallback(async (id: number): Promise<boolean> => {
    try {
      await deleteBranch(id);
      await refresh();
      return true;
    } catch {
      return false;
    }
  }, [refresh]);

  useEffect(() => {
    // initial load, memakai fetchList yang stabil
    void fetchList();
  }, [fetchList]);

  const pagination = useMemo(() => {
    const m = state.meta;
    return {
      page: state.query.page ?? 1,
      per_page: state.query.per_page ?? 10,
      total: m?.total ?? 0,
      last_page: m?.last_page ?? 1,
      setPage: (page: number) => void fetchList({ page }),
      setPerPage: (per_page: number) => void fetchList({ per_page, page: 1 }),
    };
  }, [state.meta, state.query.page, state.query.per_page, fetchList]);

  return { ...state, fetchList, refresh, find, create, update, remove, pagination };
}

```
</details>

### src/store/useWarehouses.ts

- SHA: `08f6dae568d7`  
- Ukuran: 4 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
import { useCallback, useEffect, useMemo, useState } from "react";
import {
    listWarehouses,
    getWarehouse,
    createWarehouse,
    updateWarehouse,
    deleteWarehouse,
} from "../api/warehouses";
import type {
    Warehouse,
    WarehouseCreatePayload,
    WarehouseDetailResponse,
    WarehouseListResponse,
    WarehouseQuery,
    WarehouseUpdatePayload,
} from "../types/warehouse";

type ListState = {
    items: Warehouse[];
    loading: boolean;
    error: string | null;
    query: WarehouseQuery;
    total: number;
    last_page: number;
    current_page: number;
    per_page: number;
};

export function useWarehouses(initial?: WarehouseQuery) {
    const [state, setState] = useState<ListState>({
        items: [],
        loading: false,
        error: null,
        query: { page: 1, per_page: 10, ...initial },
        total: 0,
        last_page: 1,
        current_page: 1,
        per_page: 10,
    });

    const fetchList = useCallback(async (q?: WarehouseQuery) => {
        // jangan ubah query kalau q tidak diberikan => hindari perubahan fungsi fetchList (deps)
        setState((s) => ({
            ...s,
            loading: true,
            error: null,
            query: q ? { ...s.query, ...q } : s.query,
        }));

        try {
            const res: WarehouseListResponse = await listWarehouses({ ...state.query, ...q });
            setState((s) => ({
                ...s,
                loading: false,
                items: res.data,
                total: Number(res.meta.total ?? 0),
                last_page: Number(res.meta.last_page ?? 1),
                current_page: Number(res.meta.current_page ?? 1),
                per_page: Number(res.meta.per_page ?? s.per_page), // <- paksa number
            }));
        } catch {
            setState((s) => ({ ...s, loading: false, error: "Gagal memuat gudang" }));
        }
    }, [state.query]);

    const refresh = useCallback(() => fetchList(), [fetchList]);

    const find = useCallback(async (id: number): Promise<Warehouse | null> => {
        try {
            const res: WarehouseDetailResponse = await getWarehouse(id);
            return res.data;
        } catch {
            return null;
        }
    }, []);

    const create = useCallback(async (payload: WarehouseCreatePayload): Promise<boolean> => {
        try {
            await createWarehouse(payload);
            await refresh();
            return true;
        } catch {
            return false;
        }
    }, [refresh]);

    const update = useCallback(async (id: number, payload: WarehouseUpdatePayload): Promise<boolean> => {
        try {
            await updateWarehouse(id, payload);
            await refresh();
            return true;
        } catch {
            return false;
        }
    }, [refresh]);

    const remove = useCallback(async (id: number): Promise<boolean> => {
        try {
            await deleteWarehouse(id);
            await refresh();
            return true;
        } catch {
            return false;
        }
    }, [refresh]);

    useEffect(() => {
        void fetchList();
    }, [fetchList]);

    const pagination = useMemo(() => ({
        page: state.current_page,
        per_page: state.per_page,
        total: state.total,
        last_page: state.last_page,
        setPage: (page: number) => fetchList({ page }),
        setPerPage: (per_page: number) => fetchList({ per_page, page: 1 }),
    }), [state.current_page, state.per_page, state.total, state.last_page, fetchList]);

    return { ...state, fetchList, refresh, find, create, update, remove, pagination };
}

```
</details>



## Entry Files

### src/App.tsx

- SHA: `f3248d298ccd`  
- Ukuran: 9 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/App.tsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import { AuthProvider } from "./store/auth";
import LoginPage from "./pages/auth/Login";
import ProtectedLayout from "./components/layout/ProtectedLayout";
import RequireRole from "./components/routing/RequireRole";

import UsersIndex from "./pages/users/Index";
import CabangsPage from "./pages/master/Cabangs";
import WarehousesPage from "./pages/master/Warehouses";
import CategoryIndex from "./pages/categories/CategoryIndex";
import ProductsPage from "./pages/products/ProductsPage";
import ProductDetail from "./pages/products/ProductDetail";
import StockIndex from "./pages/stock/StockIndex";
import OrdersPage from "./pages/pos/Orders";
import OrdersIndex from "./pages/pos/OrdersIndex";
import DeliveryIndex from "./pages/delivery/DeliveryIndex";
import DeliveryDetail from "./pages/delivery/DeliveryDetail";
import CashIndex from "./pages/cash/CashIndex";
import CashHistory from "./pages/cash/CashHistory";
import FeeIndex from "./pages/fees/FeeIndex";
import FeeMaster from "./pages/fees/FeeMaster";
import CustomersIndex from "./pages/customers/CustomersIndex";
import CustomerDetail from "./pages/customers/CustomerDetail";
import DashboardHome from "./pages/DashboardHome";
import SettingsIndex from "./pages/settings/SettingsIndex";
import AccountingAccountsIndex from "./pages/accounting/AccountingAccountsIndex";
import AccountingJournalsIndex from "./pages/accounting/AccountingJournalsIndex";
import AccountingReports from "./pages/accounting/AccountingReports";
import ReceiveLotPage from "./pages/inventory/ReceiveLotPage";

function LegacyProductAlias() {
  const { id } = useParams();
  return <Navigate to={`/catalog/products/${id}`} replace />;
}

export default function App(): React.ReactElement {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public (tanpa navbar) */}
          <Route path="/login" element={<LoginPage />} />

          {/* Protected (dengan navbar + sidebar) */}
          <Route element={<ProtectedLayout />}>
            {/* Root → Dashboard */}
            <Route path="/" element={<Navigate to="/dashboard" replace />} />

            {/* Dashboard (RBAC) */}
            <Route
              path="/dashboard"
              element={
                <RequireRole
                  roles={[
                    "superadmin",
                    "admin_cabang",
                    "kasir",
                    "sales",
                    "kurir",
                    "gudang",
                  ]}
                >
                  <DashboardHome />
                </RequireRole>
              }
            />

            {/* Users */}
            <Route
              path="/users"
              element={
                <RequireRole roles={["superadmin", "admin_cabang"]}>
                  <UsersIndex />
                </RequireRole>
              }
            />

            {/* F2 — Cabang & Gudang: sudah punya RequireRole internal di halaman */}
            <Route path="/master/cabangs" element={<CabangsPage />} />
            <Route path="/master/warehouses" element={<WarehousesPage />} />

            {/* Kategori & Produk */}
            <Route
              path="/master/categories"
              element={
                <RequireRole roles={["superadmin", "admin_cabang"]}>
                  <CategoryIndex />
                </RequireRole>
              }
            />
            <Route
              path="/catalog/products"
              element={
                <RequireRole roles={["superadmin", "admin_cabang"]}>
                  <ProductsPage />
                </RequireRole>
              }
            />
            <Route
              path="/catalog/products/:id"
              element={
                <RequireRole roles={["superadmin", "admin_cabang"]}>
                  <ProductDetail />
                </RequireRole>
              }
            />
            {/* Alias/redirect supaya URL lama juga masuk */}
            <Route path="/products/:id" element={<LegacyProductAlias />} />

            {/* Stok */}
            <Route
              path="/stocks"
              element={
                <RequireRole roles={["superadmin", "admin_cabang", "gudang"]}>
                  <StockIndex />
                </RequireRole>
              }
            />

            {/* Inventory — Penerimaan Stok per Lot (FIFO) */}
            <Route
              path="/inventory/receive-lot"
              element={
                <RequireRole roles={["superadmin", "admin_cabang", "gudang"]}>
                  <ReceiveLotPage />
                </RequireRole>
              }
            />

            {/* POS */}
            <Route
              path="/pos/orders"
              element={
                <RequireRole roles={["superadmin", "admin_cabang", "kasir", "sales"]}>
                  <OrdersPage />
                </RequireRole>
              }
            />
            <Route path="/pos" element={<Navigate to="/pos/orders" replace />} />

            <Route
              path="/pos/orders-list"
              element={
                <RequireRole roles={["superadmin", "admin_cabang", "kasir", "sales"]}>
                  <OrdersIndex />
                </RequireRole>
              }
            />

            {/* Delivery */}
            <Route
              path="/delivery"
              element={
                <RequireRole roles={["superadmin", "admin_cabang", "kasir", "kurir", "gudang"]}>
                  <DeliveryIndex />
                </RequireRole>
              }
            />
            <Route
              path="/delivery/:id"
              element={
                <RequireRole roles={["superadmin", "admin_cabang", "kasir", "kurir", "gudang"]}>
                  <DeliveryDetail />
                </RequireRole>
              }
            />

            {/* Cash (samakan role dengan menu: superadmin, admin_cabang, kasir) */}
            <Route
              path="/cash"
              element={
                <RequireRole roles={["superadmin", "admin_cabang", "kasir"]}>
                  <CashIndex />
                </RequireRole>
              }
            />
            <Route
              path="/cash/history"
              element={
                <RequireRole roles={["superadmin", "admin_cabang", "kasir"]}>
                  <CashHistory />
                </RequireRole>
              }
            />

            {/* Fees */}
            <Route
              path="/fees"
              element={
                <RequireRole roles={["superadmin", "admin_cabang", "kasir", "sales", "kurir"]}>
                  <FeeIndex />
                </RequireRole>
              }
            />
            <Route
              path="/fees/master"
              element={
                <RequireRole roles={["superadmin", "admin_cabang"]}>
                  <FeeMaster />
                </RequireRole>
              }
            />

            {/* Customers */}
            <Route
              path="/customers"
              element={
                <RequireRole roles={["superadmin", "admin_cabang", "kasir", "sales"]}>
                  <CustomersIndex />
                </RequireRole>
              }
            />
            <Route
              path="/customers/:id"
              element={
                <RequireRole roles={["superadmin", "admin_cabang", "kasir", "sales"]}>
                  <CustomerDetail />
                </RequireRole>
              }
            />

            <Route
              path="/settings"
              element={
                <RequireRole roles={["superadmin", "admin_cabang", "kasir"]}>
                  <SettingsIndex />
                </RequireRole>
              }
            />

            {/* Accounting */}
            <Route
              path="/accounting"
              element={<Navigate to="/accounting/reports" replace />}
            />

            <Route
              path="/accounting/accounts"
              element={
                <RequireRole roles={["superadmin", "admin_cabang"]}>
                  <AccountingAccountsIndex />
                </RequireRole>
              }
            />

            <Route
              path="/accounting/journals"
              element={
                <RequireRole roles={["superadmin", "admin_cabang"]}>
                  <AccountingJournalsIndex />
                </RequireRole>
              }
            />

            <Route
              path="/accounting/reports"
              element={
                <RequireRole roles={[
                  "superadmin",
                  "admin_cabang",
                  "kasir",
                  "sales",
                  "kurir",
                  "gudang"
                ]}>
                  <AccountingReports />
                </RequireRole>
              }
            />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

```
</details>

### src/main.tsx

- SHA: `8c07f4e2b9a3`  
- Ukuran: 263 B
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```tsx
// src/main.tsx (contoh)
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

```
</details>

### src/nav-config.ts

- SHA: `dbd0637ef6b8`  
- Ukuran: 4 KB
<details><summary><strong>Lihat Kode Lengkap</strong></summary>

```ts
// src/nav-config.ts
import type { Role } from "./types/user";

export type MenuItem = {
  key: string;
  label: string;
  to: string;
  roles: readonly Role[];
};

function r(...roles: Role[]): readonly Role[] {
  return roles;
}

/**
 * OPSIONAL untuk Sidebar: urutan grup & helper pengelompokan.
 * Tidak wajib dipakai—hanya disediakan agar Sidebar bisa "clean" tanpa hardcode.
 */
export type GroupKey =
  | "Umum"
  | "POS"
  | "Pickup & Delivery"
  | "Katalog"
  | "Gudang & Stok"
  | "Pelanggan"
  | "Cash"
  | "Fees"
  | "Akuntansi"
  | "Administrasi"
  | "Lainnya";

export const GROUP_ORDER: GroupKey[] = [
  "Umum",
  "Katalog",
  "Gudang & Stok",
  "Pelanggan",
  "POS",
  "Pickup & Delivery",
  "Cash",
  "Fees",
  "Akuntansi",
  "Administrasi",
  "Lainnya",
];

/** Mapping kunci → grup (berdasarkan key yang SUDAH ADA, tidak mengubah apa pun). */
export function groupOf(key: string): GroupKey {
  if (key === "dashboard") return "Umum";

  if (key === "pos" || key === "orders.list") return "POS";

  if (key === "delivery") return "Pickup & Delivery";

  if (key === "products" || key === "master.categories") return "Katalog";

  if (key === "stock" || key === "master.warehouses" || key === "inventory.receive-lot") return "Gudang & Stok";

  if (key === "customers") return "Pelanggan";

  if (key === "cash" || key === "cash.history") return "Cash";

  if (key === "fees" || key === "fees.master") return "Fees";

  if (
    key === "accounting.accounts" ||
    key === "accounting.journals" ||
    key === "accounting.reports"
  ) {
    return "Akuntansi";
  }

  if (key === "users" || key === "master.cabangs") return "Administrasi";

  if (key === "settings") return "Lainnya";

  return "Lainnya";
}

/**
 * MENU: semua item dipertahankan utuh (key/label/to/roles sama),
 * hanya DIURUTKAN supaya alur navigasi lebih logis (per grup).
 */
export const MENU: MenuItem[] = [
  // === Umum ===
  { key: "dashboard", label: "Dashboard", to: "/", roles: ["superadmin", "admin_cabang", "kasir", "kurir"] as const },

  // === POS ===
  { key: "pos", label: "POS", to: "/pos/orders", roles: ["superadmin", "admin_cabang", "kasir", "sales"] },
  { key: "orders.list", label: "Daftar Pesanan", to: "/pos/orders-list", roles: ["superadmin", "admin_cabang", "kasir", "sales"] },

  // === Pickup & Delivery ===
  { key: "delivery", label: "Pickup & Delivery", to: "/delivery", roles: ["superadmin", "admin_cabang", "kasir", "kurir", "gudang"] },

  // === Katalog ===
  { key: "master.categories", label: "Kategori", to: "/master/categories", roles: ["superadmin", "admin_cabang"] },
  { key: "products", label: "Produk", to: "/catalog/products", roles: ["superadmin", "admin_cabang"] },

  // === Gudang & Stok ===
  { key: "stock", label: "Stok Gudang", to: "/stocks", roles: ["superadmin", "admin_cabang", "gudang"] },
  { key: "master.warehouses", label: "Gudang", to: "/master/warehouses", roles: ["superadmin", "admin_cabang", "gudang"] },
  { key: "inventory.receive-lot", label: "Penerimaan Lot", to: "/inventory/receive-lot", roles: r("superadmin", "admin_cabang", "gudang") },

  // === Pelanggan ===
  { key: "customers", label: "Pelanggan", to: "/customers", roles: ["superadmin", "admin_cabang", "kasir", "sales"] },

  // === Cash ===
  { key: "cash", label: "Cash", to: "/cash", roles: ["superadmin", "admin_cabang", "kasir"] },
  { key: "cash.history", label: "Riwayat Cash", to: "/cash/history", roles: ["superadmin", "admin_cabang", "kasir"] },

  // === Fees ===
  { key: "fees", label: "Fees", to: "/fees", roles: ["superadmin", "admin_cabang", "kasir", "sales", "kurir"] },
  { key: "fees.master", label: "Fees (Master)", to: "/fees/master", roles: ["superadmin", "admin_cabang"] },

  // === Akuntansi ===
  { key: "accounting.accounts", label: "COA", to: "/accounting/accounts", roles: r("superadmin", "admin_cabang") },
  { key: "accounting.journals", label: "Jurnal", to: "/accounting/journals", roles: r("superadmin", "admin_cabang") },
  { key: "accounting.reports", label: "Akuntansi (Laporan)", to: "/accounting/reports", roles: r("superadmin", "admin_cabang") },

  // === Administrasi ===
  { key: "users", label: "Users", to: "/users", roles: ["superadmin", "admin_cabang"] },
  { key: "master.cabangs", label: "Cabang", to: "/master/cabangs", roles: ["superadmin", "admin_cabang"] },

  // === Lainnya ===
  { key: "settings", label: "Settings", to: "/settings", roles: r("superadmin", "admin_cabang", "kasir") },
];

export function filterMenuByRole(
  can: (...r: Role[]) => boolean
): MenuItem[] {
  return MENU.filter((m) => can(...m.roles));
}

```
</details>
