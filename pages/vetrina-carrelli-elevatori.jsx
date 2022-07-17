import Container from "../components/container";
import { NextSeo } from "next-seo";
import Title from "../components/title";
import Article from "../components/article";
import Link from "next/link";

import { BRAND_NAME } from "../lib/contants";

export default function Vetrina() {
  return (
    <main>
      <NextSeo
        title="Contatti per un preventivo o informazioni"
        description="Scopri le nostre proposte di carrelli elevatori e transpallet, sia nuovo, rigenerato garantito o usato."
      />

      <Title
        titleH1="Vetrina prodotti"
        subtitleH2="Scopri le nostre proposte di carrelli elevatori e transpallet, sia nuovo, rigenerato garantito o usato."
      />

      <section className="">
        <Container size="big">
          <Article>
            <h3>Finito tutto :-/</h3>
            <p>
              Attualmente non abbiamo nessuna nuova proposta da mostrarti, forse
              i carrelli elevatori o transpallet, sia nuovi che usati sono già
              stati venduti oppure potrebbe essere che il sito web abbia
              riscontrato un errore.
            </p>
            <p>Ma stanno arrivando nuovi carrelli elevatori e transpallet..</p>
            <Link href="/contatti">
              <a>Richiesta informazioni</a>
            </Link>
          </Article>
        </Container>
      </section>
    </main>
  );
}
