export default function Background() {
  return (
    <div className="fixed inset-0 z-0 bg-[url('https://cdn.pixabay.com/photo/2020/07/23/07/45/spaceship-5430676_1280.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 via-gray-900/40 to-black"></div>
    </div>
  );
}
