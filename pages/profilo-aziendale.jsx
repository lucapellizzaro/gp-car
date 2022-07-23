import Container from "../components/container";
import { NextSeo } from "next-seo";
import Title from "../components/title";
import Article from "../components/article";
import Link from "next/link";
import Image from "next/image";
import Gridbox from "../components/gridBox";

export default function Aboutus() {
  return (
    <main>
      <NextSeo
        title="Profilo aziendale, la nostra storia e servizi"
        description="Decennale esperienza nel settore dei carrelli elevatori. Interventi di assistenza sulla provincia di Vicenza dal 2006."
      />

      <Title
        titleH1="Profilo aziendale"
        subtitleH2="Decennale esperienza nel settore dei carrelli elevatori. Interventi di assistenza sulla provincia di Vicenza dal 2006."
      />

      <section className="">
        <Container size="big">
          <div className="">
            <Article>
              <h2>La nostra storia</h2>
              <p>
                La ditta GP-CAR di <b>Giorgio Pani</b> è un’impresa individuale
                nata nel 2006 con una decennale esperienza nel settore dei
                carrelli elevatori. Interventi di assistenza su provincia di
                Vicenza, Verona, Padova, Treviso e Venezia.
              </p>
              <figure className="aspect-w-7 aspect-h-4">
                <Image
                  layout="fill"
                  placeholder="blur"
                  blurDataURL="data:image/webp;base64,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"
                  src="/img/gp-car-azienda.jpg"
                  alt="Foto azienda GP-CAR Carrelli elevatori transpallet Vicenza"
                  className="w-full h-full object-center rounded object-cover lg:w-full lg:h-full"
                ></Image>
                <figcaption className="opacity-0">
                  Azienda GP-CAR Carrelli elevatori transpallet Vicenza
                </figcaption>
              </figure>
              <p>
                Con sede a Olmo di Creazzo nel vicentino, propone vendita di
                carrelli elevatori Montini, assistenza tecnica specializzata
                muletti elettrici e gasolio, usato garantino Montini e rivendita
                multimarca rigenerati.
              </p>
              <p>
                Rivenditore autorizzato Montini Carrelli Elevatori su provincia
                di Vicenza. Ampia gamma di muletti elettrici adatti alle imprese
                manifatturiera e alimentari.
              </p>
              <Link href="/prodotti">
                <a title="Vedi tutti i carrelli elevatori">
                  Vedi la nostra vetrina
                </a>
              </Link>
            </Article>
          </div>
        </Container>
      </section>

      <section className="bg-light">
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
