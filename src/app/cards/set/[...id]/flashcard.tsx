"use client";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import "./flashcard.css";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { MousePointerClick } from "lucide-react";

export function Flashcard({
  card,
  index,
}: {
  card: { front: string; back: string };
  index?: number;
}) {
  const [flipped, setFlipped] = useState(false);
  const [touched, setTouched] = useState(false);

  return (
    <>
      <div
        className={cn(
          "flashcard min-w-full max-w-6xl cursor-default",
          flipped && "flipped",
        )}
        onClick={() => {
          setFlipped(!flipped);
          setTouched(true);
        }}
      >
        <div className="card">
          <Card className="front flex items-center justify-center px-16 text-4xl">
            <CardTitle className="select-none">{card.front}</CardTitle>
            {!touched && index == 0 && (
              <CardContent className="tooltip absolute bottom-4 flex flex-row flex-nowrap items-center gap-2 bg-card p-2 text-lg text-muted-foreground">
                <MousePointerClick className="h-5 w-5" /> Click the card to flip
              </CardContent>
            )}
          </Card>
          <Card className="back flex items-center justify-center text-4xl">
            <CardTitle className="select-none">{card.back}</CardTitle>
          </Card>
        </div>
      </div>
    </>
  );
}
