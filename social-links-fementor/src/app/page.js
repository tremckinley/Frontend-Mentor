import SocialLinks from "./Social-links";
import FaceCard from "./FaceCard";
import { user } from "./FaceCard";
import Head from "next/head";

export default function Home() {
  return (
    <div>
    <Head>
       <link rel='icon' href="/favicon.ico" />
    </Head>
    <div className="h-screen background text-white flex flex-col justify-center items-center">
      <div className="card flex flex-col p-5 items-center rounded-lg">
        <FaceCard
          username={user.username}
          bio={user.bio}
          url={user.imageUrl}
          location={user.location}
        />
        <SocialLinks />
      </div>

      <div className="attribution mt-10">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor.
        </a> 
        Coded by <b>Tremaine McKinley.</b>
      </div>
    </div>
    </div>
  );
}
