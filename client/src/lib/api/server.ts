import "server-only";
import { cookies } from "next/headers";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;

export async function apiServerGet<T>(path: string): Promise<T> {
  const cookieStore = await cookies();

  const res = await fetch(`${API_BASE_URL}${path}`, {
    method: "GET",
    headers: { cookie: cookieStore.toString() },
    cache: "no-store",
  });

  return res.json();
}

export async function apiServerPost<T>(
  path: string,
  body: unknown
): Promise<T> {
  const cookieStore = await cookies();

  const res = await fetch(`${API_BASE_URL}${path}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      cookie: cookieStore.toString(),
    },
    body: JSON.stringify(body),
    cache: "no-store",
  });

  return res.json();
}
