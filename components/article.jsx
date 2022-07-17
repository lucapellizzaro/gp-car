export default function Article({ children }) {
  return (
    <article className="prose prose-blue mx-auto prose-a:hover:opacity-80 lg:prose-lg xl:prose-xl">
      {children}
    </article>
  );
}
