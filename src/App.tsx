import { AreaCombobox } from "./components/area-combobox";
import { CategoryCombobox } from "./components/category-combobox";
import { FilterContextProvider } from "./components/filter-context";
import { Header } from "./components/header";
import { RandomButton } from "./components/random-button";
import { RecipeContainer } from "./components/recipe-container";

function App() {
  return (
    <>
      <FilterContextProvider>
        <Header />
        <div className="container flex flex-col items-center">
          <RandomButton />
          <div className="flex gap-4 pb-4">
            <AreaCombobox />
            <CategoryCombobox />
          </div>
          <RecipeContainer />
        </div>
      </FilterContextProvider>
    </>
  );
}

export default App;
