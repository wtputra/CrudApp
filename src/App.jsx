import { Outlet } from "react-router-dom";
import CustomNotification from "./components/CustomNotification";
import GlobalLoading from "./components/GlobalLoading";

// layout
function App() {
  return (
    <div className="bg-gray-400">
      <div className="bg-white w-[500px] mx-auto min-h-screen p-4">
        <Outlet />
      </div>

      <CustomNotification />
      <GlobalLoading />
    </div>
  );
}

export default App;
