
'use client'; // Header now needs to be a client component to use the theme hook

import Link from 'next/link';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import { useEffect, useState } from 'react';

const navItems = [
  { href: '/reviews', label: 'Wall of Thrones' },
  { href: '/submit-review', label: 'Submit Review' },
  { href: '/nominate-business', label: 'Nominate Business' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
  { href: '/porcelain-rule', label: 'The Porcelain Rule' },
];

const Header = () => {
  const { theme, toggleTheme, mounted } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures this runs only on the client after hydration
  }, []);

  const renderThemeToggle = () => {
    if (!isClient || !mounted) {
      // Render a placeholder or nothing until theme is determined to avoid mismatch/flicker
      return <div style={{ width: '40px', height: '40px' }} />; // Placeholder for button size
    }
    return (
      <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
        {theme === 'light' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      </Button>
    );
  };

  return (
    <header className="bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />
        <nav className="hidden md:flex space-x-1 items-center"> {/* Reduced space-x for more items */}
          {navItems.map((item) => (
            <Button key={item.href} variant="ghost" asChild>
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
          {renderThemeToggle()}
          <Button asChild className="bg-[#3C2F2F] text-white hover:bg-[#4A3F3F]">
            <Link href="/admin">Admin</Link>
          </Button>
        </nav>
        <div className="md:hidden flex items-center space-x-2">
          {renderThemeToggle()}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Button key={item.href} variant="ghost" asChild className="w-full justify-start">
                    <Link href={item.href}>{item.label}</Link>
                  </Button>
                ))}
                <Button asChild className="w-full justify-start bg-[#3C2F2F] text-white hover:bg-[#4A3F3F]">
                  <Link href="/admin">Admin</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
