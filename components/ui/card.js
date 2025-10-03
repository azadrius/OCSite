
export function Card({ className = "", children }) {
  return <div className={`rounded-xl border ${className}`}>{children}</div>;
}
export function CardHeader({ className = "", children }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}
export function CardTitle({ className = "", children }) {
  return <h3 className={`font-semibold tracking-tight ${className}`}>{children}</h3>;
}
export function CardContent({ className = "", children }) {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>;
}
