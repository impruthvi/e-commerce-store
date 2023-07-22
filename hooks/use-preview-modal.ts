import { create } from "zustand";

import { Product } from "@/types";

interface PreviewModalState {
  isOpen: boolean;
  product?: Product;
  onOpen: (product: Product) => void;
  onClose: () => void;
}

const usePreviewModal = create<PreviewModalState>((set) => ({
  isOpen: false,
  product: undefined,
  onOpen: (product) => set(() => ({ isOpen: true, product })),
  onClose: () => set(() => ({ isOpen: false, product: undefined })),
}));

export default usePreviewModal;