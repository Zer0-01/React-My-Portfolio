"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import { AppProjectCard } from "@/components/app-project-card";



export default function Home() {
  return (
    <div className="grid grid-cols-1 p-6 gap-6 md:grid-cols-4">
      <div className="flex justify-center md:col-span-2  md:col-start-2">
        <div className="w-1/2 aspect-square overflow-hidden rounded-full border-2 md:w-1/3">
          <Image
            src="/profile-picture.jpeg"
            alt="Profile Picture"
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 md:col-span-2 md:col-start-2 " >
        <h1 className="text-center text-4xl font-bold">Anas Zulkifli</h1>
        <h2 className="text-center text-2xl ">Mobile Developer</h2>
        <div className="flex justify-center gap-2">
          <Button asChild variant="secondary" size="icon" className="size-8 bg-blue-500 hover:bg-blue-400">

            <a
              href="https://www.linkedin.com/in/anas-zulkifli-mohd-jeffry"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin color="white" fill="white" />
            </a>
          </Button>
          <Button variant="secondary" size="icon" className="size-8 bg-black hover:bg-gray-400">
            <a href="https://github.com/Zer0-01"
              target="_blank"
              rel="noopener noreferrer"> <Github color="white" fill="white" /></a>

          </Button>
        </div>


      </div>
      <div className="grid grid-cols-3 md:col-start-2 md:col-span-2">
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
      <div className="flex gap-x-2 md:col-start-2 md:col-span-2">
        <Button asChild className="flex-1">
          <a
            href="https://drive.google.com/file/d/14HKcklVouz4X_8W8tHWVBGfNnI2Tkovt/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          className="flex-1 border-foreground"
        >
          <a
            href="https://wa.me/601154066082"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Me
          </a>
        </Button>      </div>

      <Tabs defaultValue="account" className="md:col-span-2 md:col-start-2" >
        <TabsList className="w-full " >
          <TabsTrigger value="account">Portfolio</TabsTrigger>
          <TabsTrigger value="password">Skills</TabsTrigger>
        </TabsList>
        <TabsContent value="account"><div className="grid grid-cols-1 gap-2 md:grid-cols-2">


          <AppProjectCard title="Aonic Agriculture App" description="All-in-one farming companion — browse agrochemical products, shop online or in-store, redeem vouchers, and find nearby branches with ease." />
          <AppProjectCard title="MIST Flight App" description="Drone mission execution and management system built for precision agriculture. Plan, control, and monitor blanket spraying and point-to-point missions with ease." />
          <AppProjectCard title="E-Wedding Invitation" description="All-in-one digital wedding companion: RSVP tracking, guest messaging, gift registry, and venue navigation made simple." />
          <AppProjectCard title="Portable Data Terminal (PDT)" description="Efficient inventory control. Scan barcodes, manage stock levels, and sync data seamlessly across your system." />
          <AppProjectCard title="Parent-Teacher Communication Tool" description="Smart platform that connects schools and families. Track student attendance, get homework updates, access important documents, and communicate with teachers instantly." />
          <AppProjectCard title="IseBa" description="Designed to make learning Malay simple and engaging — practice spelling, explore syllables, and perfect your pronunciation step by step." />
        </div></TabsContent>
        <TabsContent value="password">Coming Soon.</TabsContent>
      </Tabs>




    </div>
  );
}
