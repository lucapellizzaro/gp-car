import MobileNavBar from "./mobile";
import DesktopNavBar from "./desktop";

export function NavBar({ show, onChangeVisibility }) {
  return (
    <>
      <div className="hidden md:block">
        <DesktopNavBar />
      </div>
      <div className="block sm:hidden">
        <MobileNavBar />
      </div>
    </>
  );
}
