interface ErrorContentProps {
  message?: string;
}

export default function ErrorContent({
  message = "خطای نامشخص!",
}: ErrorContentProps) {
  return <p className="text-gray-600">{message}</p>;
}
