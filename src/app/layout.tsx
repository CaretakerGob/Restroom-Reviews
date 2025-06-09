
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: {
    default: 'Restroom Reviews - Find & Share Restroom Experiences',
    template: '%s | Restroom Reviews',
  },
  description: 'Your trusted community-driven guide to public restrooms. Find clean, safe, and comfortable facilities. Share your stall stories, rate restrooms, and help improve hygiene standards with Restroom Reviews.',
  keywords: ['restroom reviews', 'public toilets', 'bathroom ratings', 'find a restroom', 'clean restrooms', 'toilet finder', 'restroom hygiene'],
  openGraph: {
    title: 'Restroom Reviews - Find & Share Restroom Experiences',
    description: 'Join the community dedicated to finding and rating public restrooms. Help make every pit stop a pleasant one!',
    url: 'https://www.restroomreviews.work', // Replace with your actual domain
    siteName: 'Restroom Reviews',
    // images: [ // Add a default OG image
    //   {
    //     url: 'https://www.restroomreviews.work/og-image.png', // Replace with your actual OG image URL
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
    locale: 'en_US',
    type: 'website',
  },
  // twitter: { // Add Twitter specific card data if desired
  //   card: 'summary_large_image',
  //   title: 'Restroom Reviews - Find & Share Restroom Experiences',
  //   description: 'Your community guide to cleaner public restrooms.',
  //   // siteId: '@YourTwitterHandle', // Replace with your Twitter handle
  //   // creator: '@YourTwitterHandle',
  //   // images: ['https://www.restroomreviews.work/twitter-image.png'], // Replace
  // },
  robots: { // Basic robots.txt directives
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen bg-background text-foreground">
        <ThemeProvider>
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
