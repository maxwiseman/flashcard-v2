import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { Input } from "./input";
import { ReactElement, ReactNode, cloneElement } from "react";

export function Setting({
  form,
  name,
  label,
  children,
  description,
  placeholder,
}: {
  form: UseFormReturn<any, any, undefined>;
  name: string;
  label?: string;
  children: ReactElement;
  description?: string;
  placeholder?: string;
}) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            {cloneElement(children, { placeholder, ...field })}
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
