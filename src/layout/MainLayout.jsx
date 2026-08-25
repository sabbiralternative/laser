import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header/Header";
import MobileFooter from "../components/shared/MobileFooter/MobileFooter";
import { Settings } from "../api";

const MainLayout = () => {
  return (
    <div>
      <meta name="description" content={Settings.metaDescription} />
      <meta name="keywords" content={Settings.metaKeywords} /> <Header />
      <Outlet />
      <MobileFooter />
    </div>
  );
};

export default MainLayout;
