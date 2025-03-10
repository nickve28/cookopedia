import { TabPanel, TabView } from "primereact/tabview";
import { useFetchRecipes } from "./hooks";
import { DataView } from "primereact/dataview";
import { Skeleton } from "primereact/skeleton";

type RecipeItemProps = {
  recipe: Record<string, string>; // TODO
};

const RecipeItem = ({ recipe }: RecipeItemProps) => {
  return (
    <div className="p-col-12 p-md-3">
      <div className="recipe-item">
        <div className="recipe-item-content">
          <img src={recipe.image} alt={recipe.title} />
          <div className="recipe-item-name">{recipe.title}</div>
        </div>
      </div>
    </div>
  );
};

export const RecipesPage = () => {
  const { data, isPending } = useFetchRecipes();

  return (
    <TabView>
      <TabPanel header="Recipes">
        {isPending ? (
          <Skeleton />
        ) : (
          <DataView
            value={data}
            layout="grid"
            itemTemplate={(item) => <RecipeItem recipe={item} />}
          />
        )}
      </TabPanel>
    </TabView>
  );
};
