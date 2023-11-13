"use client";

import { Separator } from "@/components/ui/separator";
import { Flashcard } from "./flashcard";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Pencil } from "lucide-react";
import { useTheme } from "next-themes";
import { useRef } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const { setTheme, theme } = useTheme();
  const scroll = useRef(null);

  return (
    <>
      <div className="flex flex-nowrap justify-between">
        <h1 className="text-4xl font-bold">{params.id}</h1>
        <Button
          onClick={() => {
            setTheme(theme == "dark" ? "light" : "dark");
          }}
        >
          <Pencil className="h-4 w-4" /> Edit
        </Button>
      </div>
      <Separator className="my-6" />
      <div
        // className='overflow-x-scroll overflow-y-hidden whitespace-nowrap w-full snap-x snap-mandatory snap-center'
        className="relative h-max w-1/2"
      >
        <div
          className="no-scrollbar relative flex w-full flex-none snap-x snap-mandatory overflow-auto scroll-smooth"
          ref={scroll}
        >
          {exampleSet.map((card, i) => {
            return (
              <div key={i} className="relative min-w-full snap-center">
                <Flashcard card={card} index={i} />
              </div>
            );
          })}
        </div>
        <Button
          variant={"outline"}
          size={"icon"}
          className="absolute left-4 top-1/2 translate-y-[-50%]"
          onClick={() => {
            // @ts-ignore
            scroll?.current?.scrollBy({ left: -100, type: "smooth" });
          }}
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <Button
          variant={"outline"}
          size={"icon"}
          className="absolute right-4 top-1/2 translate-y-[-50%]"
          onClick={() => {
            // @ts-ignore
            scroll?.current?.scrollBy({ left: 100, type: "smooth" });
          }}
        >
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </>
  );
}

const exampleSet: { front: string; back: string }[] = [
  {
    front: "Lorem",
    back: "The",
  },
  {
    front: "Ipsum",
    back: "Internet",
  },
  {
    front: "Dolor",
    back: "Itself",
  },
  {
    front: "Sit",
    back: "Is",
  },
  {
    front: "Amet",
    back: "Pain",
  },
];
