"use client";
import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "@/components/ui/mode-toggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { SignIn, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { motion } from "framer-motion";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="  pb-10 ">
        <SignedOut>
          <motion.div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600 to-pink-400 flex justify-center items-center">
            <SignIn routing="hash" />
          </motion.div>
        </SignedOut>
        <SignedIn>
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 justify-between">
                <SidebarTrigger className="-ml-1" />
                <div>
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger>
                          <NavigationMenuLink href="/">home</NavigationMenuLink>
                        </NavigationMenuTrigger>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger>
                          <NavigationMenuLink href="/portfolio">
                            Portfolio
                          </NavigationMenuLink>
                        </NavigationMenuTrigger>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger>
                          <NavigationMenuLink href="/resume">
                            Resume
                          </NavigationMenuLink>
                        </NavigationMenuTrigger>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger>
                          <NavigationMenuLink href="/pricing">
                            Pricing
                          </NavigationMenuLink>
                        </NavigationMenuTrigger>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <span className="mx-2">
                          <ModeToggle />
                        </span>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <UserButton />
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                </div>
              </header>
              {children}
            </SidebarInset>
          </SidebarProvider>
        </SignedIn>
      </body>
    </html>
  );
}
