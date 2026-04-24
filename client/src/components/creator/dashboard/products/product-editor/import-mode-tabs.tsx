"use client";

import { Tabs, TabsTrigger } from "@/components/ui/tabs";
import { TabsList } from "@radix-ui/react-tabs";
import { ReactNode } from "react";

export function ImportModeTabs({
  value,
  onValueChange,
  children,
}: {
  value: string;
  onValueChange: (v: string) => void;
  children: ReactNode;
}) {
  return (
    <Tabs value={value} onValueChange={onValueChange} className="space-y-5">
      <TabsList className="grid w-full max-w-xl grid-cols-3 rounded-none border border-border bg-card p-2">
        <TabsTrigger
          className="rounded-none data-[state=active]:bg-[#ff90e8] data-[state=active]:text-black"
          value="search"
        >
          Search
        </TabsTrigger>
        <TabsTrigger
          className="rounded-none data-[state=active]:bg-[#ff90e8] data-[state=active]:text-black"
          value="scrape"
        >
          Quick Import (Scrape)
        </TabsTrigger>
      </TabsList>
      {children}
    </Tabs>
  );
}
