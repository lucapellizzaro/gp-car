import Container from "../components/container";
import { NextSeo } from "next-seo";
import Title from "../components/title";
import Article from "../components/article";
import Link from "next/link";

const TITOLARE = "Pani Giorgio";
const SITOWEB = "www.gp-car.com";

export default function Privacy() {
  return (
    <main>
      <NextSeo
        title="Privacy policy"
        description="Tutto quello che c&#39;è da sapere sulla gestione dei tuoi dati presso GP-CAR."
      />

      <Title
        titleH1="Privacy policy"
        subtitleH2="Non sarà una pagina noiosa. La faremo breve, ecco tutto quello che c&#39;è da sapere sulla gestione dei tuoi dati presso GP-CAR."
      />

      <section className="">
        <Container size="big">
          <div className="">
            <Article>
              <h4>
                Informativa sul trattamento di dati personali ai sensi del
                Regolamento (UE) 2016/679 del Parlamento europeo e del Consiglio
                del 27 aprile 2016 (GDPR). In vigore dal 01/03/2022
              </h4>
              <hr />
              <h3>Premessa</h3>
              <p>
                La presente informativa tiene conto di quanto indicato dal GDPR
                e dal Codice della Privacy (D. Lgs 30 giugno 2003 n. 196). Il
                documento &egrave; stato redatto anche in base alle Linee Guida
                del Garante Privacy (soprattutto le Linee Guida di contrasto
                allo spam emesse dl Garante Privacy il 4 luglio 2013).
              </p>
              <p>
                <strong>Titolare del Trattamento: {TITOLARE}</strong>
              </p>
              <p>
                Sito al quale si riferisce la presente privacy policy:&nbsp;
                <strong>{SITOWEB}</strong>&nbsp;(sito web)
              </p>
              <h3>Informazioni generali</h3>
              <p>
                Il presente documento descrive come il Titolare del Trattamento
                tratta i Suoi dati personali conferiti sul Sito.
              </p>
              <p>
                Di seguito vengono descritti i principali trattamenti dei Suoi
                dati personali. Viene in particolare spiegata la base giuridica
                del trattamento, se il conferimento &egrave; obbligatorio e le
                conseguenze del mancato conferimento di dati personali. Per
                descrivere al meglio i Suoi diritti, qualora necessario, abbiamo
                specificato se e quando un determinato trattamento di dati
                personali non viene effettuato.
              </p>
              <h4>Registrazione sul sito</h4>
              <p>
                Il Sito non offre la possibilit&agrave; di registrazione.
                Pertanto, il Titolare del Trattamento non tratta i Suoi dati
                personali per questa finalit&agrave;.
              </p>
              <h4>Acquisti sul sito</h4>
              <p>
                Sul Sito non &egrave; possibile effettuare acquisti. Pertanto, i
                Suoi dati personali non saranno trattati per questa
                finalit&agrave;. Il Titolare del Trattamento non tratta i dati
                dell&apos;utente per inviare email di &quot;remainder&quot; di
                acquisto di prodotti e/o servizi del Titolare stesso.
              </p>
              <h4>Rispondere alla Sue richieste</h4>
              <p>
                I Suoi dati verranno trattati per rispondere alle Sue richieste
                di informazioni. Il conferimento &egrave; facoltativo, ma il Suo
                rifiuto comporter&agrave; l&rsquo;impossibilit&agrave; per il
                Titolare del Trattamento di rispondere alle Sue domande. La base
                giuridica del trattamento &egrave; il legittimo interesse del
                Titolare del Trattamento a dare seguito alle richieste
                dell&rsquo;utente. Questo legittimo interesse &egrave;
                equivalente all&apos;interesse dell&apos;utente a ricevere
                risposta alle comunicazioni inviate al Titolare del Trattamento.
              </p>
              <h4>Marketing generico</h4>
              <p>
                Il Titolare del Trattamento non Le invier&agrave; materiale
                pubblicitario e/o newsletter relativo a prodotti propri o di
                terzi.
              </p>
              <h4>Profiliazione</h4>
              <p>
                Previo Suo consenso, il Titolare del Trattamento potr&agrave;
                trattare i Suoi dati personali per finalit&agrave; di
                profilazione, ossia per l&apos;analisi delle Sue scelte di
                consumo attraverso la rivelazione della tipologia e della
                frequenza degli acquisti da Lei effettuati, al fine di inviarLe
                materiale pubblicitario e/o newsletter relativi a prodotti
                propri o di terzi, di Suo specifico interesse. La base giuridica
                di questo trattamento &egrave; il Suo consenso. Il conferimento
                dei dati per questa finalit&agrave; &egrave; meramente
                facoltativo. Il mancato assenso al trattamento dei Suoi dati
                personali per finalit&agrave; di profilazione comporter&agrave;
                l&rsquo;impossibilit&agrave; per il Titolare del Trattamento di
                elaborare il Suo profilo commerciale, mediante la rilevazione
                delle Sue scelte e abitudini di acquisto nonch&eacute; di
                inviarLe materiale pubblicitario, relativo a prodotti del
                Titolare del Trattamento e/o di terzi, di Suo specifico
                interesse. Queste comunicazioni verranno inviate alla e-mail da
                Lei conferita sul Sito.
              </p>
              <h4>Cessione dei dati</h4>
              <p>
                Il Titolare del Trattamento non cede a terzi i Suoi dati
                personali.
              </p>
              <h4>Geolocalizzazione</h4>
              <p>
                Il Sito non implementa strumenti di geolocalizzazione
                dell&apos;indirizzo IP dell&apos;utente.
              </p>
              <h4>Comunicazione dei dati personali</h4>
              <p>
                Nell&apos;ambito della propria ordinaria attivit&agrave;, il
                Titolare del Trattamento pu&ograve; comunicare i Suoi dati
                personali a determinate categorie di soggetti. All&apos;articolo
                2 Lei pu&ograve; trovare l&apos;elenco dei soggetti ai quali il
                Titolare del Trattamento comunica i Suoi dati personali. Per
                agevolare la tutela dei Suoi diritti, l&apos;articolo 2
                pu&ograve; specificare in alcuni casi quando i Suoi dati non
                vengono comunicati a terzi.
              </p>
              <p>
                La &quot;comunicazione&quot; a terzi del dato personale &egrave;
                diversa dalla &quot;cessione&quot; (disciplinata al punto che
                precede). Infatti, nella comunicazione il terzo al quale
                &egrave; trasmesso il dato pu&ograve; usarlo solo per le
                specifiche finalit&agrave; descritte nel rapporto con il
                Titolare del Trattamento. Nella cessione, invece, il terzo
                diventa Titolare del Trattamento autonomo del dato personale.
                Inoltre, per cedere i Suoi dati personali a terzi &egrave;
                sempre richiesto il Suo consenso.
              </p>
              <p>
                Fermo quanto precede, resta inteso che il Titolare del
                Trattamento potr&agrave; comunque utilizzare i Suoi dati
                personali per dare corretto adempimento agli obblighi previsti
                dalle leggi in vigore.
              </p>
              <hr />
              <h3>INFORMATIVA PRIVACY SPECIFICA</h3>
              <h4>Art. 1 Modalit&agrave; di trattamento</h4>
              <p>
                1.1 Il trattamento dei Suoi dati personali sar&agrave;
                principalmente effettuato con l&rsquo;ausilio di mezzi
                elettronici o comunque automatizzati, secondo le modalit&agrave;
                e con gli strumenti idonei a garantirne la sicurezza e la
                riservatezza in conformit&agrave; al GDPR.
              </p>
              <p>
                1.2 Le informazioni acquisite e le modalit&agrave; del
                trattamento saranno pertinenti e non eccedenti rispetto alla
                tipologia dei servizi resi. I Suoi dati saranno altres&igrave;
                gestiti e protetti in ambienti informatici sicuri e adeguati
                alle circostanze.
              </p>
              <p>
                1.3 Tramite il Sito non vengono trattati &quot;dati
                particolari&quot;. I dati particolari sono quelli che possono
                rivelare l&apos;origine razziale ed etnica, le convinzioni
                religiose, filosofiche o di altro genere, le opinioni politiche,
                l&apos;adesione a partiti, sindacati, associazioni od
                organizzazioni a carattere religioso, filosofico, politico o
                sindacale, lo stato di salute e la vita sessuale.
              </p>
              <p>1.4 Tramite il Sito non vengono trattati dati giudiziari.</p>
              <h4>Art. 2 Comunicazione dei dati personali</h4>
              <p>
                Il Titolare del Trattamento pu&ograve; comunicare i Suoi dati
                personali a categorie determinate di soggetti. Di seguito
                vengono indicati i soggetti ai quali il Titolare del Trattamento
                si riserva di comunicare i Suoi dati:
              </p>
              <ul>
                <li>
                  Il Titolare del Trattamento pu&ograve; comunicare i Suoi dati
                  personali a tutti quei soggetti (ivi incluse le Pubbliche
                  Autorit&agrave;) che hanno accesso ai dati personali in forza
                  di provvedimenti normativi o amministrativi.
                </li>
                <li>
                  I Suoi dati personali possono essere comunicati anche a tutti
                  quei soggetti pubblici e/o privati, persone fisiche e/o
                  giuridiche (studi di consulenza legale, amministrativa e
                  fiscale, Uffici Giudiziari, Camere di Commercio, Camere ed
                  Uffici del Lavoro, ecc.), qualora la comunicazione risulti
                  necessaria o funzionale al corretto adempimento degli obblighi
                  derivanti dalla legge.
                </li>
                <li>
                  Il Titolare del Trattamento non si avvale di dipendenti e/o
                  collaboratori a qualsiasi titolo. Pertanto, i Suoi dati
                  personali non verranno comunicati a questa categoria di
                  soggetti.
                </li>
                <li>
                  Il Titolare del Trattamento non si avvale di societ&agrave;,
                  consulenti o professionisti incaricati
                  dell&rsquo;installazione, della manutenzione,
                  dell&rsquo;aggiornamento e, in generale, della gestione degli
                  hardware e software del Titolare del Trattamento. Pertanto, i
                  Suoi dati non verranno comunicati a queste categorie di
                  soggetti.
                </li>
                <li>
                  Il Titolare del Trattamento non si avvale di piattaforme CRM
                  (societ&agrave; che svolgono in particolare
                  l&apos;attivit&agrave; di inviare comunicazioni automatizzate
                  agli utenti). Pertanto, i Suoi dati personali non vengono
                  comunicati a queste societ&agrave;.
                </li>
                <li>
                  Il Titolare del Trattamento non si avvale di societ&agrave;
                  esterne per prestare il servizio di customer care.
                </li>
              </ul>
              <p>
                Il Titolare si riserva la facolt&agrave; di modificare il sopra
                indicato elenco in base alla propria ordinaria
                operativit&agrave;. Pertanto, Lei &egrave; invitato ad accedere
                con regolarit&agrave; alla presente informativa per controllare
                a quali soggetti il Titolare del Trattamento comunica i Suoi
                dati personali.
              </p>
              <h4>Art. 3 Conservazione dei dati personali</h4>
              <p>
                3.1 Il presente articolo descrive per quanto tempo il Titolare
                del Trattamento si riserva il diritto di conservare i Suoi dati
                personali.
              </p>
              <ul>
                <li>
                  I Suoi dati personali saranno conservati per il solo tempo
                  necessario a garantire la corretta prestazione dei servizi
                  offerti tramite il Sito.
                </li>
              </ul>
              <p>
                3.2 Fermo quanto previsto all&apos;articolo 3.1, il Titolare del
                Trattamento pu&ograve; conservare i Suoi dati personali per il
                tempo richiesto da normative specifiche, come di volta in volta
                modificate.
              </p>
              <h4>Art. 4 Trasferimento dei dati personali</h4>
              <p>
                4.1 Il Titolare del Trattamento ha sede all&apos;interno
                dell&apos;Unione europea. Pertanto, il trattamento dei Suoi dati
                &egrave; sicuro dal punto di vista normativo in quanto
                disciplinato dal GDPR. Qualora il trasferimento dei Suoi dati
                personali avvenga in un Paese extra-UE e per il quale la
                Commissione europea ha espresso un giudizio di adeguatezza, il
                trasferimento si ritiene in ogni caso sicuro dal punto di vista
                normativo. Il presente articolo 4.1 indica di volta in volta i
                Paesi nei quali i Suoi dati personali possono essere
                eventualmente trasferiti e dove la Commissione europea ha
                espresso un giudizio di adeguatezza.
              </p>
              <ul>
                <li>
                  Si invita pertanto l&apos;utente ad accedere con
                  regolarit&agrave; al presente articolo per verificare se il
                  trasferimento dei Suoi dati personali avviene in un Paese con
                  queste caratteristiche.
                </li>
              </ul>
              <p>
                4.2 Fermo quanto indicato all&apos;articolo 4.1, i Suoi dati
                possono essere trasferiti anche in Paesi extra-UE e per i quali
                la Commissione europea non ha espresso un giudizio di
                adeguatezza. Lei &egrave; pertanto invitato a visionare con
                regolarit&agrave; il presente articolo 4.2 per appurare in quali
                di questi Paesi i Suoi dati sono eventualmente trasferiti.
              </p>
              <p>
                4.3 In questo articolo il Titolare del Trattamento indica i
                Paesi presso i quali eventualmente dirige in modo specifico la
                propria attivit&agrave;. Questa circostanza pu&ograve; implicare
                l&apos;applicazione della normativa del Paese di riferimento,
                unitamente a quella del GDPR.&nbsp;
              </p>
              <ul>
                <li>
                  Su richiesta dell&apos;utente, il Titolare del Trattamento
                  applicher&agrave; al trattamento dei dati personali la
                  normativa eventualmente pi&ugrave; favorevole prevista dalla
                  legislazione nazionale dell&apos;utente stesso.
                </li>
              </ul>
              <h4>Art. 5. Diritti dell&apos;interessato</h4>
              <p>
                Ai sensi dell&rsquo;art. 13 del Regolamento Privacy, il Titolare
                del Trattamento La informa che Lei ha diritto di:
              </p>
              <ul>
                <li>
                  chiedere al Titolare del Trattamento l&rsquo;accesso ai Suoi
                  dati personali e la rettifica o la cancellazione degli stessi
                  o la limitazione del trattamento che La riguardano o di
                  opporsi al loro trattamento, oltre al diritto alla
                  portabilit&agrave; dei dati
                </li>
                <li>
                  revocare il consenso in qualsiasi momento senza pregiudicare
                  la liceit&agrave; del trattamento basata sul consenso prestato
                  prima della revoca
                </li>
                <li>
                  proporre reclamo a un&rsquo;autorit&agrave; di controllo (es.:
                  il Garante per la protezione dei dati personali).
                </li>
              </ul>
              <p>
                I diritti di cui sopra potranno essere esercitati con richiesta
                rivolta senza formalit&agrave; ai contatti indicati in Premessa.
              </p>
              <h4>Art. 6. Modifiche e Miscellanea</h4>
              <p>
                Il Titolare del Trattamento si riserva il diritto di apportare
                modifiche alla presente informativa in qualsiasi momento,
                dandone idonea pubblicit&agrave; agli utenti del Sito e
                garantendo in ogni caso una adeguata ed analoga protezione dei
                dati personali. Al fine di visionare eventuali modifiche, Lei
                &egrave; invitato a consultare con regolarit&agrave; la presente
                informativa. In caso di modifiche sostanziali alla presente
                informativa privacy, il Titolare del Trattamento ne potr&agrave;
                dare comunicazione anche tramite email.
              </p>
              <Link href="/">
                <a title="Torna alla home">Torna alla home</a>
              </Link>
            </Article>
          </div>
        </Container>
      </section>
    </main>
  );
}
