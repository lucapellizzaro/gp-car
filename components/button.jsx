export default function Button({ children, submitting }) {
  return (
    <button
      disabled={submitting}
      type="submit"
      className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-base font-medium rounded text-white bg-primary hover:bg-opacity-90 disabled:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
    >
      {children}
    </button>
  );
}
