import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BottomNav } from "@/components/BottomNav";
import { EstimatorWidget } from "@/components/EstimatorWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "LAV Motors | Auto Repair & Tire Center in Hendersonville, NC",
    template: "%s | LAV Motors",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
    ],
  },
  description:
    "LAV Motors (Luxury Auto Vehicles). Trusted auto repair, tire sales, detailing and NC inspections in Hendersonville, NC. 30+ years experience. Call (828) 989-8985.",
  keywords: [
    "auto repair Hendersonville NC",
    "tire shop Hendersonville",
    "car detailing Hendersonville NC",
    "NC inspection station",
    "oil change Hendersonville",
    "wheel alignment",
    "brake repair",
    "LAV Motors",
  ],
  openGraph: {
    title: "LAV Motors | Auto Repair & Tire Center in Hendersonville, NC",
    description:
      "Trusted auto repair, tire sales, detailing & NC inspections. 30+ years experience.",
    url: "https://www.lavmotors.com",
    siteName: "LAV Motors",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.lavmotors.com/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "LAV Motors auto repair shop in Hendersonville, NC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.lavmotors.com/hero.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://www.lavmotors.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              name: "LAV Motors",
              alternateName: "Luxury Auto Vehicles",
              url: "https://www.lavmotors.com",
              telephone: "+18289898985",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1105 Spartanburg Hwy",
                addressLocality: "Hendersonville",
                addressRegion: "NC",
                postalCode: "28792",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 35.3185,
                longitude: -82.4468,
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.5",
                reviewCount: "100",
              },
              priceRange: "$$",
              areaServed: [
                { "@type": "City", name: "Hendersonville", addressRegion: "NC" },
                { "@type": "City", name: "Asheville", addressRegion: "NC" },
                { "@type": "City", name: "Fletcher", addressRegion: "NC" },
                { "@type": "City", name: "Brevard", addressRegion: "NC" },
                { "@type": "City", name: "Flat Rock", addressRegion: "NC" },
                { "@type": "City", name: "Mills River", addressRegion: "NC" },
                { "@type": "City", name: "Etowah", addressRegion: "NC" },
                { "@type": "City", name: "Tryon", addressRegion: "NC" },
                { "@type": "City", name: "Saluda", addressRegion: "NC" },
                { "@type": "City", name: "Rutherfordton", addressRegion: "NC" },
                { "@type": "City", name: "Arden", addressRegion: "NC" },
                { "@type": "City", name: "Laurel Park", addressRegion: "NC" },
                { "@type": "City", name: "Horse Shoe", addressRegion: "NC" },
                { "@type": "City", name: "East Flat Rock", addressRegion: "NC" },
                { "@type": "City", name: "Skyland", addressRegion: "NC" },
                { "@type": "City", name: "Mountain Home", addressRegion: "NC" },
              ],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "19:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "12:00",
                  closes: "19:00",
                },
              ],
              sameAs: ["https://www.facebook.com/people/LAV-Motors/61576597244897/"],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="pb-16 md:pb-0">{children}</main>
        <Footer />
        <BottomNav />
        <EstimatorWidget />
      </body>
    </html>
  );
}
