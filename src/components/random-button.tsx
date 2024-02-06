import { useContext } from "react";

import { Shuffle } from "lucide-react";

import { FilterContext } from "./filter-context";
import { Button } from "./ui/button";

export const RandomButton = () => {
  const { regenerateRandomNumber } = useContext(FilterContext);
  return (
    <Button className="my-8" size={"lg"} onClick={regenerateRandomNumber}>
      I'm feeling lucky! <Shuffle className="ml-2" size={"1.3rem"} />
    </Button>
  );
};
