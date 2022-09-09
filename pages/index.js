import Post from "../components/Post";

export default function Home() {
  return (
    <div className="bg-white flex-1 h-screen w-full flex flex-col items-center overflow-y-scroll">
      <Post/>
      <Post/>
    </div>
  )
}
