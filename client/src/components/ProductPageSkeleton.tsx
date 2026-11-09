import { Skeleton } from "@/components/ui/skeleton";

export function ProductPageSkeleton() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-6">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-3">
          <Skeleton className="aspect-square w-full rounded-xl sm:rounded-2xl" />
          <div className="grid grid-cols-4 gap-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="aspect-square w-full rounded-lg" />
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-8 w-32" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-12 w-full rounded-xl" />
          <Skeleton className="h-20 w-full" />
        </div>
      </div>
    </div>
  );
}
