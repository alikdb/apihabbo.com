import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { RouterProvider } from "react-router-dom";
import router from "./router";
function App() {
  return (
    <>
      <Header />
      <div className="flex overflow-x-hidden overflow-y-auto">
        <Sidebar />
        <div className="relative flex-1 w-full overflow-x-hidden overflow-y-auto">
          <RouterProvider router={router} />
        </div>
      </div>
    </>
  );
}

export default App;
