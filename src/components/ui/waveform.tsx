export function Waveform({ playing = false, bars = 28 }: { playing?: boolean; bars?: number }) {
  return (
    <div className="flex h-10 items-end gap-[3px]" aria-hidden>
      {Array.from({ length: bars }, (_, i) => {
        const h = 30 + ((i * 37) % 70);
        return (
          <span
            key={i}
            className={`wave-bar w-[3px] rounded-full bg-lavender/80 ${playing ? "" : "[animation:none] opacity-50"}`}
            style={{
              height: `${h}%`,
              animationDelay: `${i * 0.06}s`,
            }}
          />
        );
      })}
    </div>
  );
}
