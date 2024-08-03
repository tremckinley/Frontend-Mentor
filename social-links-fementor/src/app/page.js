import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen bg-black text-white flex flex-col justify-center items-center">
      <div className='contain flex flex-col bg-stone-800 p-3 items-center rounded'>

      <h2>Jessica Randall</h2>
      <h3>London, United Kingdom</h3>
      <p>"Front-end developer and avid reader."</p>
      <button className="py-1 w-40 bg-stone-600 m-1 rounded text-xs">GitHub</button>
      <button className="py-1 w-40 bg-stone-600 m-1 rounded text-xs">Frontend Mentor</button>
      <button className="py-1 w-40 bg-stone-600 m-1 rounded text-xs">LinkedIn</button>
      <button className="py-1 w-40 bg-stone-600 m-1 rounded text-xs">Twitter</button>
      <button className="py-1 w-40 bg-stone-600 m-1 rounded text-xs">Instagram</button>
      
      
      
      
      
      </div>

      <div className="attribution mt-10">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>

  );
}
