
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Menu,
  Sun,
  Moon,
  MapPin,
  ListChecks,
  Users,
  Film,
  MessageSquareText,
  Edit3,
  HandHelping,
  ShieldCheck,
  Home,
  HelpCircle,
  Info,
  ChevronDown,
} from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

interface NavItem {
  href: string;
  label: string;
  icon?: JSX.Element;
  hideLabelOnDesktop?: boolean;
}

interface NavGroup {
  triggerLabel: string;
  triggerIcon?: JSX.Element;
  items: NavItem[];
}

const directNavItems: NavItem[] = [
  { href: '/', label: 'Home', icon: <Home /> },
  { href: '/map', label: 'Lavatory Locator', icon: <MapPin /> },
];

const navGroups: NavGroup[] = [
  {
    triggerLabel: 'Contribute',
    triggerIcon: <Edit3 />,
    items: [
      { href: '/submit-review', label: 'Share Stall Story', icon: <Edit3 /> },
      { href: '/nominate-business', label: 'Nominate for Crusade', icon: <HandHelping /> },
      { href: '/anonymous-tips', label: 'Anonymous Tips', icon: <HelpCircle /> },
    ],
  },
  {
    triggerLabel: 'Explore',
    triggerIcon: <ListChecks />,
    items: [
      { href: '/reviews', label: 'Wall of Thrones', icon: <ListChecks /> },
      { href: '/community', label: 'Flush Force HQ', icon: <Users /> },
      { href: '/videos', label: 'Restroom Reels', icon: <Film /> },
      { href: '/blog', label: 'Bathroom Buzz', icon: <MessageSquareText /> },
    ],
  },
  {
    triggerLabel: 'Info',
    triggerIcon: <Info />,
    items: [
      { href: '/about', label: 'About Us', icon: <Info /> },
      { href: '/contact', label: 'Contact', icon: <MessageSquareText /> }, // Using MessageSquareText as a generic contact icon
      { href: '/porcelain-rule', label: 'Proper Porcelain Policy', icon: <ShieldCheck /> },
    ],
  },
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

  const renderDesktopNavItem = (item: NavItem) => (
    <Button key={item.href} variant="ghost" asChild title={item.label}>
      <Link href={item.href} className="flex items-center gap-1.5 text-xs lg:text-sm">
        {item.icon && React.cloneElement(item.icon, { className: "h-4 w-4" })}
        {!item.hideLabelOnDesktop && <span className="hidden lg:inline">{item.label}</span>}
        {!item.icon && <span className="lg:hidden md:inline">{item.label}</span>}
      </Link>
    </Button>
  );

  const renderMobileNavItem = (item: NavItem, isTopLevel: boolean = false) => (
     <Button
        key={item.href}
        variant="ghost"
        asChild
        className={cn("w-full justify-start", !isTopLevel && "pl-8")}
      >
        <Link href={item.href} className="flex items-center gap-2">
          {item.icon && React.cloneElement(item.icon, { className: "h-5 w-5" })}
          {item.label}
        </Link>
      </Button>
  );


  return (
    <header className="bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />
        <nav className="hidden md:flex space-x-1 items-center flex-wrap">
          {directNavItems.map(item => renderDesktopNavItem(item))}

          {navGroups.map((group) => (
            <DropdownMenu key={group.triggerLabel}>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1.5 text-xs lg:text-sm">
                  {group.triggerIcon && React.cloneElement(group.triggerIcon, { className: "h-4 w-4" })}
                  <span className="hidden lg:inline">{group.triggerLabel}</span>
                   <span className="lg:hidden md:inline">{group.triggerIcon ? null : group.triggerLabel}</span>
                  <ChevronDown className="h-3 w-3 opacity-70 hidden lg:inline" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                {group.items.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link href={item.href} className="flex items-center gap-2 w-full">
                      {item.icon && React.cloneElement(item.icon, { className: "h-4 w-4" })}
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
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
              <nav className="flex flex-col space-y-1 mt-8">
                {directNavItems.map(item => renderMobileNavItem(item, true))}
                
                {navGroups.map((group) => (
                  <React.Fragment key={group.triggerLabel}>
                    <div className="px-2 py-2 text-sm font-semibold text-muted-foreground flex items-center gap-2">
                       {group.triggerIcon && React.cloneElement(group.triggerIcon, { className: "h-5 w-5" })}
                      {group.triggerLabel}
                    </div>
                    {group.items.map(item => renderMobileNavItem(item))}
                  </React.Fragment>
                ))}
                <div className="pt-4">
                  <Button asChild className="w-full justify-start bg-secondary text-secondary-foreground hover:bg-secondary/80">
                    <Link href="/admin" className="flex items-center gap-2">Admin</Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
