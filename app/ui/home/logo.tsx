import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/baraka.png"
        alt="School Logo"
        width={120}
        height={60}
        className="h-10 md:h-20 lg:h-20 w-auto object-contain"
        priority
      />
    </Link>
  );
}