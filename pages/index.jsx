import Container from "../components/container";
import { NextSeo } from "next-seo";
import Title from "../components/title";
import Card from "../components/card";
import Article from "../components/article";
import Link from "next/link";
import Image from "next/image";
import { productslist } from "../lib/arrayList";

export default function Home() {
  return (
    <main>
      <NextSeo
        title="Assistenza, vendita carrelli elevatori, transpallet"
        description="GP-CAR garantisce interventi di riparazione e assistenza rapida, su carrelli elevatori elettrici e gasolio, transpallet manuali o elettrici."
      />

      <Title
        titleH1="Assistenza carrelli elevatori a Vicenza"
        subtitleH2="GP-CAR garantisce interventi di riparazione e assistenza rapida, su carrelli elevatori elettrici e gasolio, transpallet manuali o elettrici."
      />

      <section className="">
        <Container size="big">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <Card
              cardTitle="Serve carrello a noleggio?"
              cardText="Prova il nostro servizio di noleggio a breve e lungo termine carrelli elevatori, transpallet. Noleggio con macchine rigenerate e certificate."
              cardLink="Richiedi noleggio"
              cardUrl="/contatti"
              imgAlt="foto servizio noleggio carrello elevatore"
              imgUrl="/img/noleggio-carrelli-elevatori-breve-lungo-termine-vicenza.jpeg"
            />
            <Card
              cardTitle="Batteria del muletto esaurita?"
              cardText="Siamo vicini ai nostri clienti con un servizio di riparazione e vendita batterie per carrelli elevatori e transpallet e altre esigenze."
              cardLink="Scrivici ora"
              cardUrl="/contatti"
              imgAlt="foto servizio noleggio carrello elevatore"
              imgUrl="/img/batteria-carrello-elevatore-muletto.jpeg"
            />
            <Card
              cardTitle="Siete a norma di legge?"
              cardText="Eseguiamo un servizio controlli professionale con personale abilitato, tutti i controlli certificati ISPESL di sicurezza e manutenzione come da norme vigenti."
              cardLink="Prenota controllo"
              cardUrl="/contatti"
              imgAlt="foto servizio noleggio carrello elevatore"
              imgUrl="/img/controlli-certificati-ispesl-carrelli-elevatori.jpeg"
            />
          </div>
        </Container>
      </section>

      <section className="bg-light">
        <Container size="big">
          <div className="">
            <Article>
              <h2>Servizio assistenza 24h</h2>
              <p>
                La GP-CAR garantisce interventi <strong>riparazione</strong> e{" "}
                <strong>assistenza</strong> rapida, su carrelli elevatori
                elettrici e gasolio, transpallet manuali o elettrici.
              </p>
              <figure className="aspect-w-16 aspect-h-9">
                <Image
                  layout="fill"
                  placeholder="blur"
                  blurDataURL="data:image/webp;base64,UklGRqICAABXRUJQVlA4WAoAAAAgAAAAOAAAJQAASUNDUBgCAAAAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANlZQOCBkAAAAcAQAnQEqOQAmAD7tYqlOP68sozAYDAPwHYlpAM8oFZr3UVs8m3WG7YzPqQAA/u+4fDye35Gy18Cq1BxNfhlw1Kw7vavf+aYdhKk1WRLCVzt8rztEyCp052+iGc+N0TzYLmgAAA=="
                  src="/img/gp-car-vicenza-carrelli-elevatori-riparazione.jpeg"
                  alt="Manutenzione carrelli elevatori transpallet Servizio assistenza 24h"
                  className="w-full h-full object-center rounded object-cover lg:w-full lg:h-full"
                ></Image>
                <figcaption className="opacity-0">
                  Manutenzione carrelli elevatori transpallet Servizio
                  assistenza 24h
                </figcaption>
              </figure>
              <p>
                Tecnici preparati e qualificati saranno sempre in grado di
                identificare i guasti e i problemi del carrello. Interventi di
                manutenzione alle scadenze concordate, riparazioni, fornitura di
                parti di ricambio originali, controlli di sicurezza per
                mantenere in efficienti i vostri carrelli elevatori.
              </p>
              <Link href="/contatti">
                <a>Chiama ora</a>
              </Link>
            </Article>
          </div>
        </Container>
      </section>

      <section className="">
        <Container size="big">
          <div className="mb-14 mx-auto max-w-2xl text-center">
            <h3 className="font-bold text-4xl mb-3">
              Ultimi prodotti inseriti
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Ti presentiamo gli ultimi carrelli elevatori o transpallet
              arrivati presso la nostra azienda, nuovi, rigenerati o usati con
              garanzia.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {productslist.map((item, index) => (
              <Card
                key={index}
                cardTitle={item.title}
                cardText={item.desc}
                cardLink="Scopri tutto"
                cardUrl={item.url}
                imgAlt={item.imgAlt}
                imgUrl={item.imgSrc}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-light">
        <Container size="big">
          <div className="">
            <Article>
              <h2>Vendita usato garantito</h2>
              <p>
                La GP-CAR dispone di un parco di <strong>carrelli usati</strong>{" "}
                in pronta visione, per aziende e rivenditori.
              </p>
              <figure className="aspect-w-16 aspect-h-9">
                <Image
                  layout="fill"
                  placeholder="blur"
                  blurDataURL="data:image/webp;base64,UklGRnwIAABXRUJQVlA4WAoAAAAgAAAAcgIA1QEASUNDUBgCAAAAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANlZQOCA+BgAAEHAAnQEqcwLWAT7tdLFUqay0oyHyyoKQHYlpbuFkmjb78vHgj6mt9dUYfxuKH9Lzp9gFTVqxxtXmCDaPl+ope5wuLKBeJWdOMFnWzuWcbTtjoCrMQHzbq7/mWFsAOFYBSp2nrGF6LY6AgWsfG1Ap0qh/czK1oQmXs7mGfBVzP7qXmEU6dsdAQ6WPjLtzMl7ECsx4zttzFydbEDWnhqi9kLX34ARlOna0I3crUzJeyEzgPlOnbHQEOFt7434ARlOna0IkP7mZL/uS/8Vbx7augCMqBIr2z5Tp2x0BCm4nWC+nf3MyX/irczJey0EQjKdOJmjCKdEfhzr8K4C+ngVmH9zSrczJcA/vobmpCgmPZu1qMpE2+OZkvYf3MyX/cl/3JeVl38fCOAvp394x9nXJr2p8K2Q+nf3MyXsP70F29BFVSpylDkf+izowgEEVbv7mZL10Njcl7D+5mS9h/czJew/uGMY7B2DznlJrH0OVbqfxfxjL2H9yWESH9zMl7D+5mS9h/cym/lzuGbPtx0R+Sh7KCwKNAG3Spy8Lomp564C+nf3MyXsQI4NulPAomfUUx/opThjQOLRzWp2fyrjqIfTv7mZL2H7GzF7uqheXokYyKm8Y9+m/9TanfMIkP7mZL2H95LLv4vcYUxSieK/S6zHsaAaJMVEmKicVRTWp8K2Q+nfsVOXoiDzregxVSJ6rAq3a2gcWMe/R21Gagw/Ul7CcgBrkqdRzuMfAPu49jm9cbV5ggsBH0J8v+1eQUXGgcWM8IvECDHzBBY0DixzKdZzvYCmN80DixiL7yRfmgcWMe/Q8mxJQnoyEWYN+ece80DiqTLC0ugsaBxYx11U1Vsy21VUc37MESGXMRgsY9NezrPR8BBY0C3aU8lY+qwxsKPcR37wYcnVR29rxAgx8wQWNA4p3zCN3Jeuhvoxb7mDgZSpVfRgsa9nWej4CCxoFxlFzoaza0eK2OvcpN1LFNRbp18Ht7NXmCCxoHFrC/ueyFr7+jic3YjAAaSMY4zKKU0FbhWPfo+AifMDjS199//trMPvfAB6CSzIq5h3y42rzBBYz7InxtSf6k1ufOeIpTblnUXeuIGrzQOLGPfrWFgIdK8bxREHO2NWpjR8+kQiTPCse/R8BBY0DixIJMlEhuiX5MmxYEY44rPR8BBY0Dg0TL1T/eWxOO4ruHC/UetOZ2rzQOLGPcgAA/vaSkNpAvALypjzsGvXMOZW0VBfxbWVEyYsXInvJrMMghhbtc+AyFxCadBiyXOy1UuLGsFlcEKSon3Yz5anm7P+R/U/6YLiYGoHcJrKF9aCsr2kqpWEamQZGIt0ZB7q4asX/wWZwpb7F+XWkub/wK/spNBkDoxAY9L/+y8/pZw05OJ9ooRc628YmscgU+Kmk4hkSh6t4Sv+2Bn/JLZHEsHpK7weRldCqYIGyEoqu81kwLXm5rKLGp5bIgFZ2xSUhUF/Bc2bgeDgDpuN/CEsEgmy5lFHuiVlosGT4RTz9ry78gfa/rP1RkIDmK1ZJgI6rew2em20i0wrwKRlIKlAV0+tMtqG8ruU208viVTKhAgAgv6zbKmCsZ7lgyLpNZKqEqF1eZJQsTGJg34sZJZ4iVQ+g7ecnOK3Lyd2lJAngO/tZdIVTIV0W8NY/89vtMcAFtuS9CtJM1cjxmu33CA4OzDFEB275wb23AvAB1+1tNW+iQMUDU+SeG8Bn2POtKOyA/k4OqyNKdHoHpnPGf93cdZqICK5+iFnXKDHB54/Nwd3p3iTm2edb1KgCkmxG0/VbFC0UHruZRAHh5tHl9ujA6kEB1/t2bTd4Rl/WKuvMigqrHEUiA60V7hXRfJNg6WbSHgzcPkyzrBgBAAsFby89zJpRX8Tr8XQOrqCAAi2+t7qOmwavCxxneU7AACPOVLm7SI2gcx0o52m1S3vbFYACzgRzghhs0bZLYoyyk1HA+9iOtCbcgAXS4OhW+7sj0x8NBZlnGIILI0E92lWavIQDPNdMHWa2vWoFretE42zQAK1YutfAUhLAUTTnh5eTsAy2/2382GoCQMs3ovjJmIFuvAd7II2JY5cfyI+hx4F+JgmqwHKmHZROxt1Mat7tAWQCEq7Cv7sMThQO+dQRoZa4GdQAAAA="
                  src="/img/gp-car-foto-carrelli-elevatori-montivi-vicenza.jpeg"
                  alt="Vendita carrelli elevatori transpallet usato e nuovo garantito"
                  className="w-full h-full object-center rounded object-cover lg:w-full lg:h-full"
                ></Image>
                <figcaption className="opacity-0">
                  Vendita carrelli elevatori transpallet usato e nuovo garantito
                </figcaption>
              </figure>
              <p>
                La nostra lunga esperienza nel ricondizionamento di carrelli
                elevatori ci permette di fornirvi un muletto in tempi che vanno
                dai 15 ai 30 giorni a seconda degli interventi concordati.
              </p>
              <p>
                La nostra officina ci permette di svolgere in casa gli
                interventi meccanici e di ottenere carrelli elevatori
                esteticamente “nuovi” grazie a lavaggio e verniciatura completi.
              </p>
              <Link href="/vetrina-carrelli-elevatori">
                <a>Vedi tutto</a>
              </Link>
            </Article>
          </div>
        </Container>
      </section>

      <section className="">
        <Container size="big">
          <div className="">
            <Article>
              <h2>Rivenditore autorizzato Montini a Vicenza</h2>
              <p>
                Siamo <strong>rivenditori MONTINI</strong> su Vicenza, carrelli
                elevatori prodotti in Italia, ottima e meritata reputazione per
                la sua eccellente qualità e la sua vasta gamma di carrelli per
                il <strong>magazzinaggio</strong> e la{" "}
                <strong>logistica</strong>.
              </p>
              <figure className="aspect-w-7 aspect-h-3">
                <Image
                  layout="fill"
                  placeholder="blur"
                  blurDataURL="data:image/webp;base64,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"
                  src="/img/montini-carrelli-elevatore-ammortizzatori.jpeg"
                  alt="Rivenditore autorizzato carrelli elevatori Montini a Vicenza"
                  className="w-full h-full object-center rounded object-cover lg:w-full lg:h-full"
                ></Image>
                <figcaption className="opacity-0">
                  Rivenditore autorizzato carrelli elevatori Montini a Vicenza
                </figcaption>
              </figure>
              <p>
                Assistenza autorizzata e riparazione carrelli su Vicenza e
                provincia. Nel nostro sito potrete vedere un ampia vetrina di
                prodotti nuovi: carrelli, <strong>transpallet</strong> manuali
                ed elettrici, <strong>commissionatori</strong>, carrelli{" "}
                <strong>retrattili</strong>.
              </p>

              <Link href="/contatti">
                <a>Richiedi un preventivo</a>
              </Link>
            </Article>
          </div>
        </Container>
      </section>
    </main>
  );
}
