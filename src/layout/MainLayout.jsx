import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header/Header";
import MobileFooter from "../components/shared/MobileFooter/MobileFooter";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <MobileFooter />
    </div>
  );
};

export default MainLayout;
