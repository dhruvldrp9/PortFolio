import { cn } from "@/lib/utils";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function Heading({ children, className }: HeadingProps) {
  return (
    <div className="mb-12">
      <h1 className={cn(
        "text-4xl font-bold text-foreground pb-2",
        className
      )}>
        {children}
      </h1>
      <div className="mt-4 flex items-center gap-2">
        <div className="h-1 w-24 rounded-full bg-[#ffffff]" />
        <div className="h-1 w-12 rounded-full bg-[#ffffff]/50" />
        <div className="h-1 w-6 rounded-full bg-[#ffffff]/25" />
      </div>
    </div>
  );
}
