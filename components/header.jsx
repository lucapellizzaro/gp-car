import Container from "./container";
import { NavBar } from "./navBar/index";

export default function Header() {
  return (
    <header className="bg-primary text-white">
      <Container size="little">
        <div className="flex items-center justify-between">
          <div>GP-Car Logo</div>
          <NavBar />
        </div>
      </Container>
    </header>
  );
}
