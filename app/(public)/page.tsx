import Link from "next/link";

export default function Home() {
  return(
    <div className="flex items-center justify-center w-full min-h-screen" >
      <Link href="/departments" className="bg-blue-300 py-2 px-3 rounded-lg shadow" >Go to Departments</Link>
    </div>
  )}
    