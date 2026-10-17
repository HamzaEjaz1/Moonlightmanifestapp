import Image from "next/image";

export function PromoShot({
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
      <div className="absolute inset-x-10 -bottom-8 h-16 rounded-full bg-violet/30 blur-2xl" aria-hidden />
      <Image
        src={src}
        alt={alt}
        width={900}
        height={1800}
        priority={priority}
        unoptimized
        className="relative h-auto w-full rounded-[2rem] shadow-[0_30px_80px_rgba(0,0,0,0.4)]"
      />
    </div>
  );
}
