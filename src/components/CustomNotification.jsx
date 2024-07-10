import { useEffect } from "react";
import { useNotifStore } from "../global-state/useNotif";

export default function CustomNotification() {
  const { notif, setNotif } = useNotifStore();

  useEffect(() => {
    if (notif) {
      setTimeout(() => {
        setNotif("");
      }, 3000);
    }
  }, [notif]);

  if (!notif) {
    return null;
  }

  return (
    <div className="fixed left-4 bottom-4 bg-green-700 text-white px-2 py-1 rounded text-sm">
      {notif}
    </div>
  );
}
