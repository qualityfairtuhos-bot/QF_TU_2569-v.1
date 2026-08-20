"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="th">
      <body style={{ padding: 24, fontFamily: "sans-serif" }}>
        <h2>เกิดข้อผิดพลาดในการโหลดระบบ</h2>
        <button
          onClick={() => reset()}
          style={{
            marginTop: 16,
            padding: "8px 16px",
            borderRadius: 6,
            background: "#0284c7",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          ลองใหม่อีกครั้ง
        </button>
      </body>
    </html>
  );
}
