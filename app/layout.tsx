import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {title:"Kinora — The right people change everything",description:"Discover collaborators, communities and meaningful connections with human-centered matching intelligence.",openGraph:{title:"Kinora — The right people change everything",description:"A more intentional way to find your people.",type:"website"}};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body>{children}</body></html>}