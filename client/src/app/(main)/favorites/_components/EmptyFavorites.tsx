import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Link from "next/link";

export default function EmptyFavorites() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <div className="flex size-16 items-center justify-center rounded-full bg-muted">
        <Heart className="size-8 text-muted-foreground" />
      </div>
      <div className="space-y-1.5">
        <h2 className="text-lg font-semibold sm:text-xl">
          В избранном пока пусто
        </h2>
        <p className="max-w-sm text-sm text-muted-foreground">
          Добавляйте товары в избранное, нажимая на сердечко — они появятся
          здесь.
        </p>
      </div>
      <Button size="lg" className="sm:w-auto">
        <Link href="/catalog">Перейти в каталог</Link>
      </Button>
    </div>
  );
}
