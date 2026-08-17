import type { Metadata } from "next";
import { Almarai } from "next/font/google";
import Script from "next/script";
import { InquiryPopup } from "@/components/inquiry-popup";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const almarai = Almarai({
  variable: "--font-almarai",
  subsets: ["arabic", "latin"],
  weight: ["400", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "الديار القطرية مصر | مشاريع عقارية في القاهرة والساحل الشمالي",
    template: "%s | الديار القطرية مصر",
  },
  description: "التميز الملهم في العقارات",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${almarai.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <InquiryPopup />
        <WhatsAppButton />
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
             fbq('init', '844936298585723');
            fbq('track', 'PageView');`,
          }}
        />
        <noscript>
          {/* Tracking pixel must be a plain <img> for noscript fallback. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            alt=""
            src="https://www.facebook.com/tr?id=844936298585723&ev=PageView&noscript=1"
          />
        </noscript>
      </body>
    </html>
  );
}
