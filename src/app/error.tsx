"use client";
import ErrorLayout from "@app/layouts/error/layout";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <ErrorLayout>
      <h2>Oops! Something went wrong!</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
    </ErrorLayout>
  );
}
