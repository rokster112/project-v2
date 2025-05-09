import movingBg from "../assets/moving-bg.mp4";

export default function Background() {
  return (
    <div className="w-full h-screen overflow-hidden absolute z-[-1]">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={movingBg} type="video/mp4" />
        <source src="/assets/moving-bg.webm" type="video/webm" />
      </video>
    </div>
  );
}
