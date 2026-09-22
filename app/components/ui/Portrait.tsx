import Image from "next/image";
import portrait from "../../assets/HeroPortrait.png";

interface PortraitProps {
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}

/** Still editorial portrait that fills its positioned frame. */
export default function Portrait({ alt, sizes, priority, className }: PortraitProps) {
  return (
    <span className={`absolute inset-0 block overflow-hidden ${className ?? ""}`}>
      <Image
        src={portrait}
        alt={alt}
        fill
        priority={priority}
        placeholder="blur"
        sizes={sizes}
        className="object-cover object-top"
      />
    </span>
  );
}
