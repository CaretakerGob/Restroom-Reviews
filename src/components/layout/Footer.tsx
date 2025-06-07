import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="/about" className="hover:text-accent transition-colors">About Us</Link>
          <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
          <Link href="/porcelain-rule" className="hover:text-accent transition-colors">The Porcelain Rule</Link>
        </div>
        <p>&copy; {new Date().getFullYear()} Throne Advisor. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
