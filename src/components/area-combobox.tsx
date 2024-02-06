import { useContext, useState } from "react";

import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { areas } from "@/lib/areas";
import { capitalize, cn } from "@/lib/utils";

import { FilterContext } from "./filter-context";
import { Button } from "./ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "./ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export const AreaCombobox = () => {
  const { area, handleAreaChange } = useContext(FilterContext);
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
          {capitalize(area) || `Select area...`}
          <CaretSortIcon className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={`Search area...`} className="h-9" />
          <CommandEmpty>No area found.</CommandEmpty>
          <CommandGroup>
            {areas.map((value) => (
              <CommandItem
                key={value}
                value={value}
                onSelect={(value) => {
                  handleAreaChange(value);
                  setOpen(false);
                }}>
                {value}
                <CheckIcon
                  className={cn("ml-auto size-4", value === capitalize(area) ? "opacity-100" : "opacity-0")}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
