"use client";

import usePreviewModal from "@/hooks/use-preview-modal";
import { start } from "repl";
import Modal from "@/components/ui/modal";
import Gallery from "@/components/gallery";
import Info from "@/components/Info";

const PreviewModal = () => {
  const previwModal = usePreviewModal();

  const product = usePreviewModal((start) => start.product);

  if (!product) return null;

  return (
    <Modal open={previwModal.isOpen} onClose={previwModal.onClose}>
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery images={product.images} />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <Info product={product} />
        </div>
      </div>
    </Modal>
  );
};

export default PreviewModal;
