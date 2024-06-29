import type { Metadata } from "next";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.css';
import classNames from "classnames";
import { Open_Sans } from 'next/font/google'
import { BasePage } from "@/components/basePage";

export const metadata: Metadata = {
  title: "Germoneys",
  description: "Germoneys application",
};

const openSans = Open_Sans({
    subsets: ['latin'],
    display: 'swap',
    weight: "300"
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={"h-100 min-vh-100 m-0 p-0"}>
    <head>
        <link rel="icon" href="/logoicon.ico"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap" rel="stylesheet"/>
    </head>
    <body className={classNames(openSans.className,'d-flex flex-column min-vh-100 bg-secondary bg-opacity-25')}>
      <BasePage>
          {children}
      </BasePage>
    </body>
    </html>
  );
}