import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';


const inter = Inter({ subsets: ['latin'] });



export const metadata: Metadata = {
  title: {
    default: "Baraka Mtito Academy | Quality Education in Kibwezi East",
    template: "%s | Baraka Mtito Academy"
  },
  description: "Baraka School in Kibwezi East offers quality education, modern facilities, and holistic development for students. Enroll now for academic excellence.",
  keywords: "Baraka School, Kibwezi East, school Kenya, education, primary school, secondary school, Baraka Mtito Academy, Kenya education",
  authors: [{ name: "Baraka Mtito Academy" }],
  creator: "Baraka Mtito Academy",
  publisher: "Baraka Mtito Academy",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=' bg-gray-600'>
        
        
        <main>{children}</main>
      </body>
    </html>
  );
}