import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ padding: 32, fontFamily: "sans-serif", textAlign: "center" }}>
      <h2>ไม่พบหน้าที่ต้องการ (404)</h2>
      <p style={{ marginTop: 8, color: "#666" }}>
        ไม่พบหน้าที่คุณกำลังค้นหา
      </p>
      <Link
        href="/"
        style={{
          display: "inline-block",
          marginTop: 16,
          padding: "8px 16px",
          background: "#0284c7",
          color: "#fff",
          borderRadius: 6,
          textDecoration: "none",
        }}
      >
        กลับสู่หน้าหลัก
      </Link>
    </div>
  );
}
