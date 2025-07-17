import Header from '@/components/Header'
import VideoCard from '@/components/VideoCard'
import React from 'react'

const Page = () => {
  return (
    <main className="wrapper page">
      <Header title="All Videos" subHeader="Public Library" />
      <h1 className="text-2xl font-karla">Welcome to PicScreen</h1>

      <VideoCard
        id="1"
        title="Snapchat message"
        thumbnail="/assets/samples/thumbnail (1).png"
      createdAt={new Date("2025-02-01")}
      userImg="/assets/images/jason.png"
      username="jason"
      views={10}
      visibility="public"
      duration={156}
      />
      <h1 className="text-2xl font-karla">Made by Nishant Singh :)</h1>
    </main>
  );
}

export default Page