export default function NotFoundPage() {
  return (
    <div className="text-center p-12">
      <h1>⛔ 404 - صفحه یافت نشد!</h1>
      <p>صفحه‌ای که به دنبال آن هستید وجود ندارد.</p>
      <a href="/" className="text-blue-500 hover:text-blue-700 transition">
        بازگشت به صفحه اصلی
      </a>
    </div>
  );
}
