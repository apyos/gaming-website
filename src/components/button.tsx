import { h, ComponentChildren } from "preact";
import cn from "classnames";

// Config
const CLASSES =
  "py-2.5 px-10 border-b hover:ring-0 focus:outline-none focus:ring-0 text-center leading-normal";
const VARIANTS = {
  light: "text-gray-900 bg-white border-gray-100 hover:text-black",
  dark: "text-gray-100 bg-black border-gray-800 hover:text-white",
};

type ButtonProps = h.JSX.HTMLAttributes<HTMLAnchorElement> & {
  children: ComponentChildren;
  variant: keyof typeof VARIANTS;
};

export const Button = ({ children, variant, ...props }: ButtonProps) => (
  <a class={cn(CLASSES, VARIANTS[variant])} {...props}>
    {children}
  </a>
);
