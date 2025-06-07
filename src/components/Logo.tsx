import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logo.png"
        alt="Restroom Reviews Logo"
        width={40}
        height={40}
        priority
      />
    </Link>
  );
};

export default Logo;
