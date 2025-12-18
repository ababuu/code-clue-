export default function Error({ error }) {
  return (
    <p className="w-full max-w-4xl bg-red-50 p-6 rounded-2xl mt-6 shadow-lg font-sans text-red-500">
      {error}
    </p>
  );
}
