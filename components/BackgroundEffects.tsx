export default function BackgroundEffects() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Radial glow at top */}
      <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.14),transparent_70%)] blur-2xl" />
      {/* Secondary glow */}
      <div className="absolute right-0 top-[30%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(14,165,233,0.12),transparent_70%)] blur-3xl" />
      <div className="absolute left-0 top-[60%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.10),transparent_70%)] blur-3xl" />
      {/* Grid */}
      <div className="absolute inset-0 grid-bg opacity-[0.6] mask-fade-b" />
    </div>
  );
}
