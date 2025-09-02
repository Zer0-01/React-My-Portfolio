import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, Linkedin } from "lucide-react";
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
        <div className="flex justify-center">
          <Linkedin />
          <Github />
        </div>


      </div>
      <div className="grid grid-cols-3">
        <div className="flex flex-col items-center text-center">
          <h3>2</h3>
          <h3>Years of work experience</h3>
        </div>
        <div className="flex flex-col items-center text-center">
          <h3>3</h3>
          <h3>Completed projects</h3>

        </div>
        <div className="flex flex-col items-center text-center">
          <h3>5 +</h3>
          <h3>Personal side projects</h3>
        </div>


      </div>
      <div className="flex gap-x-2">
        <Button className="flex-1">Download CV</Button>
        <Button className="flex-1">Download CV</Button>
      </div>

      <Tabs defaultValue="account" >
        <TabsList className="w-full" >
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account"><div className="grid grid-cols-1">
          <Image src="/aonic-agri-1.jpg" alt="Vercel Logo" width={400} height={400} className="text-center w-3/5" />
        </div></TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>




    </div>
  );
}
