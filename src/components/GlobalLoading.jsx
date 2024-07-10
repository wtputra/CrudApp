import { useLoadingStore } from "../global-state/useLoadingStore";
import CustomLoading from "./CustomLoading";

export default function GlobalLoading() {
  const { loading } = useLoadingStore();

  if (!loading) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-4 rounded flex items-center gap-4">
        <CustomLoading />
        <p className="text-sm">Loading ..</p>
      </div>
    </div>
  );
}
