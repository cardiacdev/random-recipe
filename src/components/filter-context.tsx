import { createContext, useState } from "react";

interface FilterContextProps {
  area: string;
  category: string;
  handleAreaChange: (area: string) => void;
  handleCategoryChange: (category: string) => void;
  randomNumber: number;
  regenerateRandomNumber: () => void;
}

export const FilterContext = createContext({} as FilterContextProps);

export const FilterContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [area, setArea] = useState("Japanese");
  const [category, setCategory] = useState("");
  const [randomNumber, setRandomNumber] = useState(Math.random());

  const regenerateRandomNumber = () => {
    setRandomNumber(Math.random());
  };

  const handleAreaChange = (area: string) => {
    setArea(area);
    setCategory("");
  };

  const handleCategoryChange = (category: string) => {
    setCategory(category);
    setArea("");
  };

  return (
    <FilterContext.Provider
      value={{
        area,
        category,
        handleAreaChange,
        handleCategoryChange,
        randomNumber,
        regenerateRandomNumber,
      }}>
      {children}
    </FilterContext.Provider>
  );
};
