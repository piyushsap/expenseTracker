import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar/sidebar";
import { Header } from "../Header/header";
export function Layout() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}
