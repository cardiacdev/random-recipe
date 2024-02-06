import { useContext, useState } from "react";

import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { categories } from "@/lib/categories";
import { capitalize, cn } from "@/lib/utils";

import { FilterContext } from "./filter-context";
import { Button } from "./ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "./ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export const CategoryCombobox = () => {
  const { category, handleCategoryChange } = useContext(FilterContext);
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
          {capitalize(category) || `Select category...`}
          <CaretSortIcon className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={`Search category...`} className="h-9" />
          <CommandEmpty>No category found.</CommandEmpty>
          <CommandGroup>
            {categories.map((value) => (
              <CommandItem
                key={value}
                value={value}
                onSelect={(value) => {
                  handleCategoryChange(value);
                  setOpen(false);
                }}>
                {value}
                <CheckIcon
                  className={cn(
                    "ml-auto size-4",
                    value === capitalize(category) ? "opacity-100" : "opacity-0",
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
