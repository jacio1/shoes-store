"use client";

import { cn } from "@/lib/utils";
import { Apple, Heart, Home, LayoutDashboard, ListTodo, NotebookPen, ShoppingCart, UserCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    href: "/",
    label: "Главная",
    icon: Home,
  },
  {
    href: "/favorites",
    label: "Избранное",
    icon: Heart,
  },
  {
    href: "/catalog",
    label: "Каталог",
    icon: LayoutDashboard,
  },
    {
    href: "/cart",
    label: "Корзина",
    icon: ShoppingCart,
  },
  {
    href: "/profile",
    label: "Профиль",
    icon: UserCircle,
  },
];

export default function MobileBottomNav() {
  const pathname = usePathname();
  return (
    <nav className="shrink w-full border-t bg-background md:hidden pb-[env(safe-area-inset-bottom)]">
      <ul className="grid grid-cols-5 ">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 py-3 text-xs font-medium transition-colors",
                  isActive ? "text-white" : "text-muted-foreground",
                )}
              >
                <Icon className="h-8 w-8" />
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}