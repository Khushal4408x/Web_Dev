import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import {VideoCard} from "../components/VideoCard"
import { VideoGrid } from "@/components/VideGrid";
import { AppBar } from "@/components/Appbar";
import { SearchBar } from "@/components/Searchbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (

    <div>
      <AppBar></AppBar>
    
    <VideoGrid></VideoGrid>
        
    </div>
  );
}
