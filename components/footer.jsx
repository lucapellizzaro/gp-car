import { useRouter } from "next/router";
import Link from "next/link";
import Container from "./container";
import { navlist, pagelist } from "../lib/arrayList";
import { BRAND_NAME } from "../lib/contants";

export default function Footer() {
  const router = useRouter();

  return (
    <footer className="bg-light">
      <Container size="big">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <h3 className="font-bold text-3xl">{BRAND_NAME}</h3>
            <p>
              Via Cima XII, 8a
              <br />
              36051 Olmo di Creazzo (VI)
            </p>
            <p>
              Telefono: +39 329 37 69 499
              <br />
              e-mail: info (at) gp-car.com
            </p>
            <p>
              <Link href="/contatti">
                <a className="underline text-primary hover:opacity-80">
                  Scrivi un messaggio
                </a>
              </Link>
            </p>
          </div>
          <nav className="space-y-4">
            <h4 className="font-bold text-3xl">I nostri prodotti</h4>
            <ul className="text-gray-600 space-y-3 ml-3">
              {navlist.map((item) => (
                <li>
                  <Link href={item.url}>
                    <a
                      className={
                        router.pathname === item.url
                          ? "text-gray-600"
                          : "underline text-primary hover:opacity-80"
                      }
                    >
                      {item.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="space-y-4">
            <h4 className="font-bold text-3xl">Scopri tutto</h4>
            <ul className="text-gray-600 space-y-3 ml-3">
              {pagelist.map((item) => (
                <li>
                  <Link href={item.url}>
                    <a
                      className={
                        router.pathname === item.url
                          ? "text-gray-600"
                          : "underline text-primary hover:opacity-80"
                      }
                    >
                      {item.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
      <Container size="little">
        <div className="flex flex-col md:flex-row text-xs md:text-sm md:space-x-10">
          <p>
            &copy;{new Date().getFullYear()} {BRAND_NAME} - P.Iva 03335850248 -
            C.F. PNAGRG67A25B812X
          </p>
          <p className="flex space-x-6">
            <Link href="/privacy-policy">
              <a class="underline hover:text-primary">Privacy Policy</a>
            </Link>
            <Link href="/cookie-policy">
              <a class="underline hover:text-primary">Cookies Policy</a>
            </Link>
          </p>
          <p>
            Made with <span className="text-red-600">&hearts;</span> by{" "}
            <a
              href="https://bearoba.it"
              class="underline hover:text-primary"
              target="_blank"
              rel="noreferrer noopener"
            >
              bearoba
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
