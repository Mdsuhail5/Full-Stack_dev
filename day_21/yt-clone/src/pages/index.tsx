import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { VideoCard } from "@/components/VideoCard"
import { VideoGrid } from "@/components/VideoGrid";
import { Appbar } from "@/components/Appbar";
import { LeftBar } from "@/components/Leftbar";

export default function Home() {
  return (
    <main>
      <Appbar />
      <div className="flex">
        <LeftBar />
        <VideoGrid />
      </div>
    </main>
  )
}
