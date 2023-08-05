"use client";

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BadgeCheck } from "lucide-react";

type DialogModalProps = {
  children: React.ReactNode;
  title: string;
  check1: string;
  check2: string;
  check3: string;
  check4: string;
};

const DialogModal = ({
  children,
  title,
  check1,
  check2,
  check3,
  check4,
}: DialogModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogTitle>{title}</DialogTitle>
        <div className="grid grid-rows-4 gap-y-5 ">
          <div className="flex items-center gap-x-2">
            <BadgeCheck />
            <h2>{check1}</h2>
          </div>
          <div className="flex items-center gap-x-2">
            <BadgeCheck />
            <h2>{check2}</h2>
          </div>
          <div className="flex items-center gap-x-2">
            <BadgeCheck />
            <h2>{check3}</h2>
          </div>
          <div className="flex items-center gap-x-2">
            <BadgeCheck />
            <h2>{check4}</h2>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogModal;
