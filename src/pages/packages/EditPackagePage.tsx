import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { usePackage } from "@/features/packages/api/tanstack/usePackage";

import { Loading, Modal } from "@/components/core";
import { EditPackageForm } from "@/features/packages/components/EditPackageForm";

export const EditPackagePage = () => {
  const navigate = useNavigate();
  const { packageId } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const id = Number(packageId);
  const { data, isPending, isError } = usePackage(id);

  useEffect(() => setIsOpen(true), []);

  if (!packageId) throw new Error("Package ID is required");

  if (isPending) {
    return (
      <Modal isOpen={isOpen} onClose={() => navigate("..")}>
        <Loading className="mx-auto" />
      </Modal>
    );
  }

  if (isError) {
    return (
      <Modal isOpen={isOpen} onClose={() => navigate("..")}>
        <div className="p-4">
          <h2 className="text-lg font-semibold">Error</h2>
          <p>Something went wrong while fetching this package.</p>
        </div>
      </Modal>
    );
  }

  return (
    <Modal isOpen={isOpen} onClose={() => navigate("..")}>
      <EditPackageForm packageId={id} fitPackage={data} />
    </Modal>
  );
};
