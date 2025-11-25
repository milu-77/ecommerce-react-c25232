 
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

export const MainLayouts = () => {
  return (
    <>
      <Header /> 
      <main className="container">
       
        <Outlet />
      </main>
    </>
  );
};