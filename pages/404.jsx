import Container from "../components/container";
import { NextSeo } from "next-seo";
import Title from "../components/title";
import Article from "../components/article";
import Link from "next/link";
import Image from "next/image";
import Gridbox from "../components/gridBox";

export default function Error404() {
  return (
    <main>
      <NextSeo
        noindex={true}
        title="404"
        description="La pagina non è stata trovata, ma nessun problema di seguito ti proponiamo altre pagine del sito."
      />

      <Title
        titleH1="Error 404 :-/"
        subtitleH2="Ahimè la pagina non è stata trovata, ma nessun problema! Di seguito ti proponiamo altre pagine del sito."
      />

      <section>
        <Container size="big">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Gridbox
              boxTitle="Riparazioni"
              boxText="Servizio riparazione svolto da personale qualificato e certificato con ricambi originali!"
              boxLink="/contatti"
              boxCta="Contattaci"
            />
            <Gridbox
              boxTitle="Noleggio"
              boxText="Servizio di noleggio a breve e lungo termine carrelli elevatori, transpallet."
              boxLink="/contatti"
              boxCta="Richiedi ora"
            />
            <Gridbox
              boxTitle="Certificati ISPESL"
              boxText="Effettuiamo controlli certificati ISPESL, con verbale di verifica da parte di personale abilitato con attestato!"
              boxLink="/contatti"
              boxCta="Prenota un controllo"
            />
            <Gridbox
              boxTitle="Assistenza"
              boxText="Assistenza specializzata garantendo in caso di urgenze l’intervento entro le 24 ore!"
              boxLink="/contatti"
              boxCta="Chiama subito"
            />
            <Gridbox
              boxTitle="Vendita"
              boxText="Rivenditore autorizzato Montini, vendita di tutta la gamma dei carrelli elevatori nuovi ed usati."
              boxLink="/prodotti"
              boxCta="Vedi tutto"
            />
            <Gridbox
              boxTitle="Batterie"
              boxText="Forniamo il servizio di riparazione e vendita batterie."
              boxLink="/contatti"
              boxCta="Richiedi un preventivo"
            />
          </div>
        </Container>
      </section>

      <section className="">
        <Container size="big">
          <div className="">
            <Article>
              <h2>Controlli di sicurezza</h2>
              <p>
                Eseguiamo il servizio controlli di sicurezza e manutenzione come
                da norme vigenti (Dlg 359/99 del 04 agosto 1999, recepimento
                della direttiva 95/63 CE che integra e modifica il Dlg 626/94)
                ultima modifica del 09 aprile 2008 con testo unico Dlgs n.81
                art.71.
              </p>
              <figure className="aspect-w-7 aspect-h-3">
                <Image
                  layout="fill"
                  placeholder="blur"
                  blurDataURL="data:image/webp;base64,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"
                  src="/img/controlli-certificati-ispesl-carrelli-elevatori.jpeg"
                  alt="Foto Controlli di sicurezza su carrello elevatore"
                  className="w-full h-full object-center rounded object-cover lg:w-full lg:h-full"
                ></Image>
                <figcaption className="opacity-0">
                  Controlli di sicurezza su carrello elevatore
                </figcaption>
              </figure>
              <p>
                Effettuiamo controlli certificati ISPESL, con verbale di
                verifica da parte di personale abilitato con attestato!
              </p>
              <Link href="/contatti">
                <a title="Prenota controllo di sicurezza">
                  Prenota un controllo
                </a>
              </Link>
            </Article>
          </div>
        </Container>
      </section>
    </main>
  );
}
