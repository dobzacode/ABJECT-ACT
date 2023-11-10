export default function VideoBackground({ src }: { src: string }) {
  return (
    <div className="fixed left-0 top-0 -z-20 h-full w-full overflow-hidden ">
      <video autoPlay muted loop className="h-full w-full object-cover">
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
