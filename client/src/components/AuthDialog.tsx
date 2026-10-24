"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type AuthMode = "login" | "register";

export function AuthDialog() {
  const [mode, setMode] = useState<AuthMode>("login");

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { data } = Object.fromEntries(formData);

    const res = await fetch(`http://localhost:4000/api/auth/${mode}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    console.log("Success", data);
    console.log("data", data);
    console.log(res.status, await res.text());
  };

  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button className="bg-primary" variant="outline">
            Войти
          </Button>
        }
      />
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>
            {mode === "login" ? "Войти" : "Регистрация"}
          </DialogTitle>
          <DialogDescription>
            {mode === "login"
              ? "Войдите в аккаунт, используя email и пароль."
              : "Создайте новый аккаунт."}
          </DialogDescription>
        </DialogHeader>

        <Tabs value={mode} onValueChange={(v) => setMode(v as AuthMode)}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Вход</TabsTrigger>
            <TabsTrigger value="register">Регистрация</TabsTrigger>
          </TabsList>

          <form onSubmit={handleSubmit}>
            <TabsContent value="login">
              <FieldGroup className="pt-4">
                <Field>
                  <Label htmlFor="login-email">Email</Label>
                  <Input
                    id="login-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </Field>
                <Field>
                  <Label htmlFor="login-password">Пароль</Label>
                  <Input
                    id="login-password"
                    name="password"
                    type="password"
                    required
                  />
                </Field>
              </FieldGroup>
            </TabsContent>

            <TabsContent value="register">
              <FieldGroup className="pt-4">
                <Field>
                  <Label htmlFor="reg-name">Имя</Label>
                  <Input id="reg-name" name="name" required />
                </Field>
                <Field>
                  <Label htmlFor="reg-email">Email</Label>
                  <Input
                    id="reg-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </Field>
                <Field>
                  <Label htmlFor="reg-password">Пароль</Label>
                  <Input
                    id="reg-password"
                    name="password"
                    type="password"
                    required
                  />
                </Field>
                <Field>
                  <Label htmlFor="reg-confirm">Повторите пароль</Label>
                  <Input
                    id="reg-confirm"
                    name="confirm"
                    type="password"
                    required
                  />
                </Field>
              </FieldGroup>
            </TabsContent>

            <DialogFooter className="mt-4">
              <Button type="submit">
                {mode === "login" ? "Войти" : "Зарегистрироваться"}
              </Button>
            </DialogFooter>
          </form>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
