import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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
        <Button variant="outline" className="flex-1  border-foreground">Contact Me</Button>
      </div>

      <Tabs defaultValue="account" >
        <TabsList className="w-full" >
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account"><div className="grid grid-cols-1">
          <Card className="my-2">
            <CardHeader>
              <CardTitle>Aonic Agriculture App</CardTitle>
              <CardDescription>All-in-one farming companion — browse agrochemical products, shop online or in-store, redeem vouchers, and find nearby branches with ease.</CardDescription>
            </CardHeader>

          </Card>
          <Card className="my-2">
            <CardHeader>
              <CardTitle>IseBa</CardTitle>
              <CardDescription>Designed to make learning Malay simple and engaging — practice spelling, explore syllables, and perfect your pronunciation step by step.</CardDescription>
            </CardHeader>

          </Card>
        </div></TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>




    </div>
  );
}
