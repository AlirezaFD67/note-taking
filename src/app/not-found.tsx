import ErrorLayout from "@app/layouts/error/layout";

export default function NotFound() {
  return (
    <ErrorLayout>
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
    </ErrorLayout>
  );
}