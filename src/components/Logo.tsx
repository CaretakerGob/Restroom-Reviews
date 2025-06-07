import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="text-2xl font-headline font-bold text-primary hover:text-primary/90 transition-colors">
      Throne Advisor
    </Link>
  );
};

export default Logo;
