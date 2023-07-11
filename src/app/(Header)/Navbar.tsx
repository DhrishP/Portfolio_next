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

const Navbar = () => {
  return (
    <nav className="sm:flex hidden w-full fixed pt-6 justify-between items-center">
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
                  href="https://github.com "
                >
                  <Github className="mr-2 h-4 w-4" />
                  <span>GitHub</span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer ">
                <a
                  className="flex items-center justify-center "
                  target="_blank"
                  href="https://twitter.com "
                >
                  <Twitter className="mr-2 h-4 w-4" />
                  <span>Twitter</span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer ">
                <a
                  className="flex items-center justify-center "
                  target="_blank"
                  href="https://linkedin.com "
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

      <ul className="w-1/2 flex cursor-pointer mr-2 md:mr-4 items-center space-x-6 justify-center  ">
        <li className="hover:text-gray-600"> <a href="#Home">Home</a> </li>
        <li className="hover:text-gray-600"> <a href="#about">About</a> </li>
        <li className="hover:text-gray-600"> <a href="#Home">Services</a> </li>
        <li className="hover:text-gray-600"> <a href="#Home">Contact</a> </li>
      </ul>
    </nav>
  );
};

export default Navbar;
