import MobileNavBar from "./mobile";
import DesktopNavBar from "./desktop";

export function NavBar() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopNavBar />
      </div>
      <div className="block lg:hidden">
        <MobileNavBar />
      </div>
    </>
  );
}
