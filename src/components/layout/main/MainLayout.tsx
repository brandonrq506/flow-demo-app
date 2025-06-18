import { AuthGuard } from "./AuthGuard";
import { Outlet } from "react-router";

export const MainLayout = () => {
  return (
    <AuthGuard>
      <main className="py-6">
        <div className="px-4 sm:px-6">{<Outlet />}</div>
      </main>
    </AuthGuard>
  );
};
