import Container from "../components/container";
import { NextSeo } from "next-seo";
import Title from "../components/title";
import Article from "../components/article";
import Link from "next/link";

import { BRAND_NAME } from "../lib/contants";
import Contactform from "../components/contactForm";

export default function Contactus() {
  return (
    <main>
      <NextSeo
        title="Contatti per un preventivo o informazioni"
        description="Per richiedere un preventivo o ulteriori informazioni su carrelli elevatori e transpallet, scrivi un messaggio o chiamaci usando i contatti di seguito."
      />

      <Title
        titleH1="Contattaci"
        subtitleH2="Per richiedere un preventivo o ulteriori informazioni su carrelli elevatori e transpallet, scrivi un messaggio o chiamaci usando i contatti di seguito."
      />

      <section className="">
        <Container size="big">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Article>
              <h3>Scrivici un messaggio</h3>
              <p>
                Compila questo modulo per richiedere ulteriori informazioni.
                Risponderemo il prima possibile.
              </p>
              <Contactform />
            </Article>
            <Article>
              <h2>{BRAND_NAME}</h2>
              <p>
                Via Cima XII, 8a
                <br />
                36051 Olmo di Creazzo (VI)
                <br />
                Italia
              </p>
              <p>
                P.Iva 03335850248
                <br />
                C.F. PNAGRG67A25B812X
              </p>
              <p>
                Telefono: +39 329 37 69 499
                <br />
                Fax: +39 0444 523404
              </p>
              <p>
                e-mail: info (at) gp-car.com
                <br />
                pec: gp-car (at) pec.it
              </p>
              <Link href="/privacy-policy">
                <a>Privacy policy</a>
              </Link>{" "}
              -{" "}
              <Link href="/cookie-policy">
                <a>Cookie policy</a>
              </Link>
            </Article>
          </div>
        </Container>
      </section>
    </main>
  );
}
