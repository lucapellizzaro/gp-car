import Container from "./container";

export default function Title({ titleH1, subtitleH2 }) {
  return (
    <section className="bg-primary text-center text-white">
      <Container>
        <h1 className="font-bold max-w-2xl mx-auto text-4xl md:text-5xl xl:text-6xl mt-8 md:mt-12 mb-4 md:mb-6">
          {titleH1}
        </h1>
        <h2 className="text-lg md:text-xl max-w-xl mx-auto mb-8 md:mb-12">
          {subtitleH2}
        </h2>
      </Container>
    </section>
  );
}
