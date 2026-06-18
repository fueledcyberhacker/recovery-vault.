"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });

    setIsSubmitting(false);

    if (!response.ok) {
      setError("Unable to create an account with those details.");
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  return (
    <main className="mx-auto max-w-md p-8">
      <h1 className="mb-6 text-3xl font-bold">Create account</h1>
      <form className="card space-y-4" onSubmit={handleSubmit}>
        <input className="w-full rounded bg-background p-3" name="name" placeholder="name" required />
        <input className="w-full rounded bg-background p-3" name="email" placeholder="email" type="email" required />
        <input className="w-full rounded bg-background p-3" name="password" placeholder="password" type="password" minLength={8} required />
        {error ? <p className="text-sm text-destructive">{error}</p> : null}
        <button className="w-full rounded bg-primary p-3 font-bold text-primary-foreground" disabled={isSubmitting} type="submit">
          {isSubmitting ? "Creating account..." : "Register"}
        </button>
      </form>
    </main>
  );
}
