export default function Background() {
  return (
    <div className="fixed inset-0 z-0 bg-[url('/images/background_dk.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/90 to-gray-900/90"></div>
    </div>
  );
}
