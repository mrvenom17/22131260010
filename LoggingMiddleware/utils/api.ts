import { Log } from "./log";

const BASE_URL = "http://20.244.56.144";

export async function shortenURL(url: string) {
  try {
    const res = await fetch(`${BASE_URL}/evaluation-service/shorten`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJhbGF5c2hhcm1hMTdAZ21haWwuY29tIiwiZXhwIjoxNzUxMDEzODU4LCJpYXQiOjE3NTEwMTI5NTgsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiI1ODY2YjYxMS02OTkxLTQzYzktODFmNC1mNzIzZjc5YWFmNTYiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJhbGF5IHNoYXJtYSIsInN1YiI6ImU2MzI1MTcwLTJhODktNGY3Yi1hNTM0LTI0MDllNTgyZjMyNyJ9LCJlbWFpbCI6ImFsYXlzaGFybWExN0BnbWFpbC5jb20iLCJuYW1lIjoiYWxheSBzaGFybWEiLCJyb2xsTm8iOiIyMjEzMTI2MDAxMCIsImFjY2Vzc0NvZGUiOiJNdWFndnEiLCJjbGllbnRJRCI6ImU2MzI1MTcwLTJhODktNGY3Yi1hNTM0LTI0MDllNTgyZjMyNyIsImNsaWVudFNlY3JldCI6IlNjZGJQZFZtWXVXZHRIVlEifQ.oR5J1BtlZbjYkrOhEVq5v6lr8f8598DpNrh4cW7QTQQ"
      },
      body: JSON.stringify({ url })
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Shortening failed");
    }

    return data;
  } catch (error: any) {
    await Log("frontend", "error", "api", error.message);
    throw error;
  }
}
