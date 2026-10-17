import Image from "next/image";

const sizes = {
  sm: "w-[min(100%,220px)] sm:w-[250px]",
  md: "w-[min(100%,260px)] sm:w-[300px] lg:w-[320px]",
  lg: "w-[min(100%,300px)] sm:w-[340px] lg:w-[380px]",
} as const;

export function PromoShot({
  src,
  alt,
  className = "",
  priority = false,
  size = "md",
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  size?: keyof typeof sizes;
}) {
  return (
    <div className={`relative mx-auto ${sizes[size]} ${className}`}>
      <div className="absolute inset-x-8 -bottom-6 h-12 rounded-full bg-violet/28 blur-2xl" aria-hidden />
      <Image
        src={src}
        alt={alt}
        width={900}
        height={1800}
        priority={priority}
        unoptimized
        sizes="(max-width: 640px) 260px, (max-width: 1024px) 320px, 380px"
        className="relative h-auto w-full rounded-[1.6rem] shadow-[0_24px_60px_rgba(0,0,0,0.42)]"
      />
    </div>
  );
}
