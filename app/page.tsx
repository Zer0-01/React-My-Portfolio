"use client";

import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Github, Linkedin } from "lucide-react";
import Link from 'next/link';

import Image from "next/image";



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
        <h1 className="text-center text-3xl font-bold">Anas Zulkifli</h1>
        <h2 className="text-center ">Mobile Developer</h2>
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
          <Card >
            <CardHeader>
              <CardTitle>Aonic Agriculture App</CardTitle>
              <CardDescription>All-in-one farming companion — browse agrochemical products, shop online or in-store, redeem vouchers, and find nearby branches with ease.</CardDescription>
            </CardHeader>

          </Card>
          <Card >
            <CardHeader>
              <CardTitle>IseBa</CardTitle>
              <CardDescription>Designed to make learning Malay simple and engaging — practice spelling, explore syllables, and perfect your pronunciation step by step.</CardDescription>
            </CardHeader>

          </Card>
        </div></TabsContent>
        <TabsContent value="password">Coming Soon.</TabsContent>
      </Tabs>




    </div>
  );
}
