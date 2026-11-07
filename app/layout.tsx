import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Big Bite | Pizza & Fast Food in Rawalpindi',
  description: 'Explore the Big Bite menu in Pirwadai Murh, Rawalpindi. Burgers, wraps, rolls, shawarma, fries, pasta, wings and pizza deals. Order enquiries on WhatsApp.',
  openGraph: { title: 'Big Bite | Pizza & Fast Food in Rawalpindi', description: 'Good food. Good mood. Explore the Big Bite menu and order through WhatsApp.', type: 'website', images: ['/images/exterior.jpg'] },
  keywords: ['Big Bite Rawalpindi', 'Pizza Restaurant in Rawalpindi', 'Fast Food in Rawalpindi', 'Burgers in Rawalpindi', 'Pizza near Pirwadai Murh'],
};
export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
