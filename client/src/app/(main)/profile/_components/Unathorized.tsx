"use client";

import { LockKeyhole } from "lucide-react";
import { AuthDialog } from "@/components/AuthDialog";
import { Card, CardContent } from "@/components/ui/card";

export default function Unauthorized() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <Card className="w-full max-w-md border-0 shadow-none sm:border sm:shadow-sm">
        <CardContent className="flex flex-col items-center gap-5 p-6 text-center sm:p-8">
          <div className="flex size-16 items-center justify-center rounded-full bg-muted">
            <LockKeyhole className="size-8 text-muted-foreground" />
          </div>

          <div className="space-y-1.5">
            <h2 className="text-lg font-semibold sm:text-xl">Требуется вход</h2>
            <p className="text-sm text-muted-foreground">
              Войдите или зарегистрируйтесь, чтобы получить доступ к профилю и
              избранному.
            </p>
          </div>

          <AuthDialog></AuthDialog>
        </CardContent>
      </Card>
    </div>
  );
}
