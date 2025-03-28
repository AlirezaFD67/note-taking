export default function ErrorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
        backgroundColor: "#f8d7da",
        color: "#721c24",
      }}
    >
      <h1>⚠️ Something Went Wrong</h1>
      {children}
    </div>
  );
}
