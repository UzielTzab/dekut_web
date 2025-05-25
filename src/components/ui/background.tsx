export default function Background() {
  return (
    <div className="fixed inset-0 z-0 bg-[url('/images/background_dk.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/0 via-gray-900/95 to-black"></div>
    </div>
  );
}
