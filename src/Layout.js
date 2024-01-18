import SimpleBottomNavigation from "BottomNav";
import LogoBar from "LogoBar";

const Layout = ({ children }) => {
  return (
    <>
      <LogoBar />
      <div className="bg-white max-w-screen-xl mx-auto h-screen">
        {children}
      </div>
      <SimpleBottomNavigation />
    </>
  );
};

export default Layout;
