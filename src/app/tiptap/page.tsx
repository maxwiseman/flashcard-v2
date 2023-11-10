"use client";

import { TipTap } from "@/components/ui/tiptap";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Bold, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Page() {
  const { setTheme } = useTheme();

  return (
    <>
      <TipTap />
      <ToggleGroup
        onValueChange={value => {
          setTheme(value);
        }}
        variant="outline"
        type="single"
        className="mt-2"
      >
        <ToggleGroupItem value="dark">
          <Moon className="w-4 h-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="light">
          <Sun className="w-4 h-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </>
  );
}
