export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 bg-black overflow-hidden">
      <div className="stars" />
      <div className="twinkling" />
      <img
        src="/images/done.png"
        alt="nave"
        className="navecita"
      />

    </div>
  );
}
