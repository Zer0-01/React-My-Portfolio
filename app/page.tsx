import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 p-6">
      <div className="flex justify-center">
        <Image src="/next.svg" alt="Vercel Logo" width={400} height={400} className="w-3/5" />
      </div>
      <div >
        <h1 className="text-center">Anas Zulkifli</h1>
        <h2 className="text-center">Mobile Developer</h2>

      </div>

    </div>
  );
}
