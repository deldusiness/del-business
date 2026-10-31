import * as React from "react";

import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-primary",
        className
      )}
      {...props}
    />
  );
}
