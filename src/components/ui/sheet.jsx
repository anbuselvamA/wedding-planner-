import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const Sheet = DialogPrimitive.Root
const SheetTrigger = DialogPrimitive.Trigger
const SheetClose = DialogPrimitive.Close
const SheetPortal = DialogPrimitive.Portal

function SheetOverlay({ className, ...props }) {
  return (
    <DialogPrimitive.Overlay
      className={cn(
        "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )}
      {...props}
    />
  )
}

function SheetContent({ className, children, side = "right", ...props }) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <DialogPrimitive.Content
        className={cn(
          "fixed z-50 flex flex-col gap-4 bg-[#fdfaf8] shadow-xl transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
          side === "right" &&
            "inset-y-0 right-0 h-full w-3/4 max-w-sm border-l border-[#ececec] data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right",
          side === "left" &&
            "inset-y-0 left-0 h-full w-3/4 max-w-sm border-r border-[#ececec] data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left",
          side === "top" &&
            "inset-x-0 top-0 h-auto border-b border-[#ececec] data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
          side === "bottom" &&
            "inset-x-0 bottom-0 h-auto border-t border-[#ececec] data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
          className
        )}
        {...props}
      >
        <DialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#bd6a71]">
          <XIcon className="size-5 text-[#666]" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
        {children}
      </DialogPrimitive.Content>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }) {
  return (
    <div
      className={cn("flex flex-col gap-1.5 p-6 pb-0", className)}
      {...props}
    />
  )
}

function SheetTitle({ className, ...props }) {
  return (
    <DialogPrimitive.Title
      className={cn("font-serif text-xl font-medium text-[#222]", className)}
      {...props}
    />
  )
}

function SheetDescription({ className, ...props }) {
  return (
    <DialogPrimitive.Description
      className={cn("text-sm text-[#666]", className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
}
