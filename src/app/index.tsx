import {
  EditPackagePage,
  NewPackagePage,
  PackagesPage,
} from "@/pages/packages";
import { MainErrorPage, MainLayout } from "@/components/layout";
import { Navigate, createBrowserRouter } from "react-router";
import { AppProvider } from "./provider";
import { LoginPage } from "@/pages/auth";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <MainErrorPage />,
    children: [
      { index: true, element: <Navigate to="/packages" /> },
      {
        path: "/packages",
        element: <PackagesPage />,
        children: [
          { path: "new", element: <NewPackagePage /> },
          { path: ":packageId/edit", element: <EditPackagePage /> },
        ],
      },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
  {
    path: "login",
    element: <LoginPage />,
  },
]);

export const App = () => {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
};
