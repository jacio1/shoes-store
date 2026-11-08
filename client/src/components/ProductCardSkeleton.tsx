import { Skeleton } from "@/components/ui/skeleton";

export function ProductCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-xl border bg-card shadow-sm sm:rounded-2xl">
      <Skeleton className="aspect-square w-full rounded-none" />

      <div className="space-y-1.5 p-2.5 sm:space-y-2 sm:p-4">
        <Skeleton className="h-2.5 w-16 sm:h-3" />

        <div className="space-y-1">
          <Skeleton className="h-3 w-full sm:h-3.5" />
          <Skeleton className="h-3 w-2/3 sm:h-3.5" />
        </div>

        <Skeleton className="h-4 w-24 sm:h-5" />

        <Skeleton className="h-8 w-full rounded-lg sm:h-9 sm:rounded-xl" />
      </div>
    </div>
  );
}