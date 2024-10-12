import Navigate from "@/components/admin/admin.navigate"

export default function AdminLayout({ children }) {

  return (
    <div className="flex">
      <Navigate />
      {children}
    </div>
  );
}
