
'use client'; 

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Sun, Moon, MapPin, ListChecks, Users, Film, MessageSquareText, Edit3, HandHelping, ShieldCheck, Home, HelpCircle } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

const navItems = [
  { href: '/', label: 'Home', icon: <Home /> },
  { href: '/map', label: 'Lavatory Locator', icon: <MapPin /> },
  { href: '/reviews', label: 'Wall of Thrones', icon: <ListChecks /> },
  { href: '/community', label: 'Flush Force HQ', icon: <Users /> },
  { href: '/videos', label: 'Restroom Reels', icon: <Film /> },
  { href: '/blog', label: 'Bathroom Buzz', icon: <MessageSquareText /> },
  { href: '/submit-review', label: 'Share Stall Story', icon: <Edit3 /> },
  { href: '/nominate-business', label: 'Nominate for Crusade', icon: <HandHelping /> },
  { href: '/anonymous-tips', label: 'Anonymous Tips', icon: <HelpCircle /> },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
  { href: '/porcelain-rule', label: 'Proper Porcelain Policy', icon: <ShieldCheck /> },
];

const Header = () => {
  const { theme, toggleTheme, mounted } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); 
  }, []);

  const renderThemeToggle = () => {
    if (!isClient || !mounted) {
      return <div style={{ width: '40px', height: '40px' }} />; 
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
        <nav className="hidden md:flex space-x-1 items-center flex-wrap"> 
          {navItems.map((item) => (
            <Button key={item.href} variant="ghost" asChild title={item.label}>
              <Link href={item.href} className="flex items-center gap-1.5 text-xs lg:text-sm">
                {item.icon && React.cloneElement(item.icon, {className: "h-4 w-4"})} 
                <span className="hidden lg:inline">{item.label}</span>
                 <span className="lg:hidden md:inline">{item.icon ? null : item.label}</span>
              </Link>
            </Button>
          ))}
          {renderThemeToggle()}
          <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs lg:text-sm">
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
                    <Link href={item.href} className="flex items-center gap-2">
                      {item.icon && React.cloneElement(item.icon, {className: "h-5 w-5"})} 
                      {item.label}
                    </Link>
                  </Button>
                ))}
                <Button asChild className="w-full justify-start bg-secondary text-secondary-foreground hover:bg-secondary/80">
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
