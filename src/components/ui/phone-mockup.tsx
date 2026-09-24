import Image from "next/image";

export function PhoneMockup({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-x-6 -bottom-8 h-16 rounded-full bg-violet/30 blur-2xl" aria-hidden />
      <div className="relative overflow-hidden rounded-[2.35rem] border border-white/15 bg-[#05030a] p-[7px] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex justify-center">
          <span className="mt-2 h-5 w-24 rounded-full bg-black/70" />
        </div>
        <div className="overflow-hidden rounded-[1.95rem] bg-black">
          <Image
            src={src}
            alt={alt}
            width={390}
            height={844}
            priority={priority}
            unoptimized
            className="h-auto w-full"
          />
        </div>
      </div>
    </div>
  );
}
