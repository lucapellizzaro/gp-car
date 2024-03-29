import { useRouter } from "next/router";
import Link from "next/link";
import Container from "./container";
import { navlist, pagelist } from "../lib/arrayList";
import { BRAND_NAME } from "../lib/contants";
import Image from "next/image";

export default function Footer() {
  const router = useRouter();

  return (
    <footer className="bg-light">
      <Container>
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h3 className="font-bold text-3xl">
              <img
                width="300"
                height="73"
                src="/img/gp-car-logo-blue.svg"
                className="w-auto h-10 -ml-2 my-1 md:h-12"
                alt="GP-CAR logo"
              />
            </h3>

            <h4 className="font-bold text-xl xl:text-2xl">{BRAND_NAME}</h4>

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
          <div className="p-6 -mt-12">
            <Image
              className="h-auto w-40"
              layout="responsive"
              width="236"
              height="338"
              alt="Giorgio Pani Manutenzione professionale carrelli elevatori transpallet Servizio assistenza"
              src="/img/uomo-gp-car.png"
            />
          </div>
          <nav className="space-y-4">
            <h4 className="font-bold text-xl xl:text-2xl">I nostri prodotti</h4>
            <ul className="text-gray-600 space-y-3 ml-3">
              {navlist.map((item, index) => (
                <li key={index}>
                  <Link href={item.url}>
                    <a
                      title={item.label}
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
            <h4 className="font-bold text-xl xl:text-2xl">Scopri tutto</h4>
            <ul className="text-gray-600 space-y-3 ml-3">
              {pagelist.map((item, index) => (
                <li key={index}>
                  <Link href={item.url}>
                    <a
                      title={item.label}
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
        <div className="flex flex-col xl:flex-row text-xs text-center xl:text-left xl:text-sm xl:space-x-10">
          <p>
            &copy;{new Date().getFullYear()} {BRAND_NAME} - P.Iva 03335850248 -
            C.F. PNAGRG67A25B812X
          </p>
          <p className="flex justify-center space-x-6">
            <Link href="/privacy-policy">
              <a
                title="Privacy Policy"
                className="underline hover:text-primary"
              >
                Privacy Policy
              </a>
            </Link>
            <Link href="/cookie-policy">
              <a
                title="Cookies Policy"
                className="underline hover:text-primary"
              >
                Cookies Policy
              </a>
            </Link>
          </p>
          <p>
            Creato con <span className="text-red-600">&hearts;</span> da{" "}
            <a
              title="Creato con amore da Bearoba"
              href="https://bearoba.it"
              className="underline hover:text-primary"
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
