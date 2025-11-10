import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "../../lib/utils";

type DialogProps = React.ComponentProps<typeof DialogPrimitive.Root>;
type DialogTriggerProps = React.ComponentProps<typeof DialogPrimitive.Trigger>;
type DialogPortalProps = React.ComponentProps<typeof DialogPrimitive.Portal>;
type DialogCloseProps = React.ComponentProps<typeof DialogPrimitive.Close>;
type DialogOverlayProps = React.ComponentProps<
  typeof DialogPrimitive.Overlay
> & {
  className?: string;
};
type DialogContentProps = React.ComponentProps<
  typeof DialogPrimitive.Content
> & {
  className?: string;
  variant?: "center" | "topRight";
};
type DialogHeaderProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
};
type DialogFooterProps = React.HTMLAttributes<HTMLDivElement> & {
  className?: string;
};
type DialogTitleProps = React.ComponentProps<typeof DialogPrimitive.Title> & {
  className?: string;
};
type DialogDescriptionProps = React.ComponentProps<
  typeof DialogPrimitive.Description
> & { className?: string };

function Dialog(props: DialogProps) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function DialogTrigger(props: DialogTriggerProps) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogPortal(props: DialogPortalProps) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function DialogClose(props: DialogCloseProps) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

function DialogOverlay({ className, ...props }: DialogOverlayProps) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )}
      {...props}
    />
  );
}

function DialogContent({
  className,
  variant = "center",
  children,
  ...props
}: DialogContentProps) {
  const isTopRight = variant === "topRight";

  return (
    <DialogPortal>
      <DialogOverlay />

      <div
        className={cn(
          "fixed inset-0 z-50 flex p-4",
          isTopRight
            ? "justify-end items-start pt-20 pr-4 sm:pr-10"
            : "items-center justify-center"
        )}
      >
        <DialogPrimitive.Content
          {...props}
          className={cn(
            "bg-white rounded-lg shadow-lg border p-6 w-full sm:max-w-lg max-h-[90vh] overflow-y-auto data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 duration-200",
            className
          )}
        >
          {/* Optional Close Button */}
          {/* <DialogPrimitive.Close className="absolute top-4 right-4 text-gray-500 hover:text-black focus:outline-none">
            <XIcon className="w-4 h-4" />
          </DialogPrimitive.Close> */}

          {children}
        </DialogPrimitive.Content>
      </div>
    </DialogPortal>
  );
}

function DialogHeader({ className, ...props }: DialogHeaderProps) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  );
}

function DialogFooter({ className, ...props }: DialogFooterProps) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  );
}

function DialogTitle({ className, ...props }: DialogTitleProps) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-lg font-semibold leading-none", className)}
      {...props}
    />
  );
}

function DialogDescription({ className, ...props }: DialogDescriptionProps) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
