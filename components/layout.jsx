import Annuncio from "./annuncio";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <>
      <Annuncio>Sitoweb non reale, solo un test!</Annuncio>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
}
