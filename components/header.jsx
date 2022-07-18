import Container from "./container";
import { NavBar } from "./navBar/index";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-primary text-white">
      <Container size="little">
        <div className="flex items-center justify-between">
          <h2>
            <Link href="/">
              <a title="Torna alla home">
                <img
                  width="300"
                  height="73"
                  src="/img/gp-car-logo-w.svg"
                  className="w-auto h-10 -ml-1 my-1 md:h-12"
                  alt="GP-CAR logo"
                />
              </a>
            </Link>
          </h2>
          <NavBar />
        </div>
      </Container>
    </header>
  );
}
