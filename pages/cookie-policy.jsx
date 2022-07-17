import Container from "../components/container";
import { NextSeo } from "next-seo";
import Title from "../components/title";
import Article from "../components/article";
import Link from "next/link";

export default function Cookies() {
  return (
    <main>
      <NextSeo
        title="Cookies policy"
        description="In questo sito web abbiamo deciso di non utilizzare cookie di tracciabilità e profiliazione per fini di marketing."
      />

      <Title
        titleH1="Cookies policy"
        subtitleH2="In questo sito web abbiamo deciso di non utilizzare cookie di tracciabilità e profiliazione per fini di marketing."
      />

      <section className="">
        <Container size="big">
          <div className="">
            <Article>
              <h2>Perchè non hai visto il cookie banner?</h2>
              <p>
                Al momento non abbiamo bisogno di installare cookie su questo
                sito web, se in futuro lo faremo, secondo le norme di legge
                metteremo un banner ben visibile dove potrai personalizzazione
                l&apos;utilizzo di cookies.
              </p>
              <p>
                Intanto puoi navigare sereno su tutto questo sito cookie-less.
              </p>
              <Link href="/">
                <a>Torna alla home</a>
              </Link>
            </Article>
          </div>
        </Container>
      </section>
    </main>
  );
}
