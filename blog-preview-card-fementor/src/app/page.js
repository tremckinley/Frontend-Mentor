import Image from "next/image";
import BlogImage from "../../assets/images/blogimage";

export default function Home() {
  return (
  <div id="backg" className="flex min-h-screen bg-yellow-300 w-full">
    <div id="card" className="flex flex-col items-center h-fit bg-white p-6 max-w-96 min-w-72 border border-black rounded-lg m-auto">
      <BlogImage/>
      <div id='content' className="flex flex-col w-fill pt-6">
        <div id='category' className="flex w-fit py-1 px-3 font-extrabold text-sm bg-yellow-300 rounded text-center mb-3">Learning</div>
        <div className="my-3 text-sm">Published 21 Dec 2023</div>
        <div id='title' className="font-extrabold text-[24px] my-3 active:text-yellow-300 cursor-pointer">HTML & CSS foundations</div>
        <div className="font-md text-sm text-gray-500 my-3">These languages are the backbone of every website, defining structure, content, and presentation.</div>
        <div className="flex items-center pt-3">
        <Image src="/./assets/images/image-avatar.jpg.png" alt="avatar" height={32} width={32}/>
        <div id="authorName" className="flex ml-2 text-gray-950 text-sm font-extrabold">Greg Hooper</div>
        </div>

        </div>
      

    </div>
  </div>
  
)}
