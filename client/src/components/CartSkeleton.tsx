import { Skeleton } from "@/components/ui/skeleton";

export function CartSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex gap-3 border-b py-4 sm:gap-4">
          <Skeleton className="size-20 shrink-0 rounded-lg sm:size-24" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-3 w-16" />
            <Skeleton className="h-3.5 w-full" />
            <Skeleton className="h-3.5 w-2/3" />
            <div className="flex items-center justify-between pt-2">
              <Skeleton className="h-8 w-24 rounded-lg" />
              <Skeleton className="h-5 w-20" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}