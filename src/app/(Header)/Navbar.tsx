"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Github, Twitter, LinkedinIcon } from "lucide-react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const { setTheme } = useTheme();
  return (
    <nav className="sm:flex hidden w-full md:fixed pt-6 justify-between items-center z-10">
      <div className="w-1/3 flex space-x-2 items-center justify-center">
        <DropdownMenu>
          <Avatar className=" ">
            <DropdownMenuTrigger>
              <AvatarImage src="https://github.com/DhrishP.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer ">
                <a
                  className="flex items-center justify-center "
                  target="_blank"
                  href="https://github.com/DhrishP "
                >
                  <Github className="mr-2 h-4 w-4" />
                  <span>GitHub</span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer ">
                <a
                  className="flex items-center justify-center "
                  target="_blank"
                  href="https://twitter.com/PDhrish "
                >
                  <Twitter className="mr-2 h-4 w-4" />
                  <span>Twitter</span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer ">
                <a
                  className="flex items-center justify-center "
                  target="_blank"
                  href="https://www.linkedin.com/in/dhrish-parekh-89a845262/"
                >
                  <LinkedinIcon className="mr-2 h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </Avatar>

          <h3>Dhrish Parekh</h3>
        </DropdownMenu>
      </div>

      <ul className="w-1/2 flex cursor-pointer mr-2 md:mr-2  items-center space-x-6 justify-center  ">
        <li className="hover:text-gray-600">
          {" "}
          <a href="#home">Home</a>{" "}
        </li>
        <li className="hover:text-gray-600">
          {" "}
          <a href="#about">About</a>{" "}
        </li>
        <li className="hover:text-gray-600">
          {" "}
          <a href="#skills">Skills</a>{" "}
        </li>
        <li className="hover:text-gray-600">
          {" "}
          <a href="#projects">Projects</a>{" "}
        </li>
        <li className="hover:text-gray-600">
          {" "}
          <a href="#contact">Contact</a>{" "}
        </li>
        <li>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
