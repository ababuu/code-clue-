export default function Header() {
  return (
    <header className="flex items-center gap-3 w-full max-w-4xl my-6">
      <img
        src="/android-chrome-192x192.png"
        alt="Code Clue Logo"
        className="h-12 w-12 rounded-xl shadow-sm"
      />
      <h1 className="text-3xl font-bold text-gray-800">Code Clue</h1>
    </header>
  );
}
