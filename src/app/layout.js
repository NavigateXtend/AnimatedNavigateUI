import Navbar from "@/ui/Navbar";
import { Inter, Lato } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

// export const metadata = {
//   metadataBase: new URL("https://navigateui.com"),
//   title: { default: "Animated Navigate UI", template: "%s - Navigate UI" },
//   openGraph: {
//     images: "/opengraph-image.png",
//   },
//   description:
//     "Navigate to a world of free, reusable, and highly customizable Tailwind components",
//   icons: {
//     icon: "/icon.png",
//     shortcut: "/shortcut-icon.png",
//     apple: "/apple-icon.png",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Navigate UI",
//     description:
//       "Navigate to a world of free, reusable, and highly customizable Tailwind components",
//     creator: "@navigateui_team",
//   },
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} overflow-x-hidden bg-white select-none`}
      >
        {/* <Providers> */}
        <Navbar />
        <div className="max-w-con mx-auto px-2 lg:px-10">{children}</div>
        {/* </Providers> */}
      </body>
      {/* <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA4_ID} /> */}
    </html>
  );
}
