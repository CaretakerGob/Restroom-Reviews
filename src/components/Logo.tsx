
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/rotb-companion.firebasestorage.app/o/Restroom%20Reviews%2FLogos%2FR%26R%20LOGO_THREE_sparkle.png?alt=media&token=0960bfdf-0780-4f91-83eb-61bbddb13280"
        alt="Throne Advisor Logo"
        width={40}
        height={40}
        priority
      />
    </Link>
  );
};

export default Logo;
