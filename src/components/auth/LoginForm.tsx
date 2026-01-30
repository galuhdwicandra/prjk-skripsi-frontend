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
