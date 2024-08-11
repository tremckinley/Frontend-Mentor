import Image from "next/image";
import BlogImage from "../../assets/images/blogimage";

export default function Home() {
  return (
  <div className="flex h-screen bg-yellow-300 w-full">
    <div id="card" className="flex flex-col items-center h-fit bg-white p-6 w-full max-w-[384px] border border-black rounded-lg">
      <BlogImage />
      <div id='content' className="flex flex-col border border-red-800 w-full m-6">
        <div id='category' className="flex w-fit p-1 font-bold text-sm bg-yellow-300 rounded-lg text-center">Learning</div>
        <div className="my-6 text-sm">Published 21 Dec 2023</div>
      </div>

    </div>
  </div>
  
)}
