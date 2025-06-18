import { LinkButton } from "@/components/core";
import { Outlet } from "react-router";
import { PackagesTable } from "@/features/packages/components/PackagesTable";
import { PageHeaderWithActions } from "@/components/layout";
import { PlusIcon } from "@heroicons/react/24/outline";

export const PackagesPage = () => {
  return (
    <div>
      <PageHeaderWithActions
        className="mb-2"
        title="Packages"
        actions={
          <LinkButton
            to="new"
            size="lg"
            startIcon={<PlusIcon className="size-5" aria-hidden />}>
            Create New Package
          </LinkButton>
        }
      />

      <PackagesTable />
      <Outlet />
    </div>
  );
};
