import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { Modal } from "@/components/core";
import { NewPackageForm } from "@/features/packages/components/NewPackageForm";

export const NewPackagePage = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setIsOpen(true), []);

  return (
    <div>
      <Modal isOpen={isOpen} onClose={() => navigate("..")}>
        <NewPackageForm />
      </Modal>
    </div>
  );
};
