

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Modal({ open, onClose, title, children, className }) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className={cn(
          "sm:max-w-md w-full bg-white p-6 rounded-lg",
          className
        )}
      >
        <div className="absolute right-4 top-4">
          <X
            className="h-5 w-5 text-gray-500 cursor-pointer"
            onClick={onClose}
          />
        </div>
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-gray-900">
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4">{children}</div>
      </DialogContent>
    </Dialog>
  );
}