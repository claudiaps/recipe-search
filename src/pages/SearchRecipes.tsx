import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Image,
} from "@chakra-ui/react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

interface RecipeType {
  id: number;
  title: string;
  image: string;
}

export const recipeLoader = async ({
  params,
}: {
  params: {
    recipeSearch?: string;
  };
}): Promise<RecipeType | []> => {
  try {
    const recipes = await axios.get(
      "https://api.spoonacular.com/recipes/complexSearch",
      {
        params: {
          number: 20,
          apiKey: "d7cf3f1717bc425cbc62180f7c7e0e7f",
          query: params.recipeSearch,
        },
      }
    );
    return recipes.data.results;
  } catch (err) {
    throw new Error("Not Found");
  }
};

interface RecipeItemProps {
  title: string;
  image: string;
}

const RecipeItem = ({ title, image }: RecipeItemProps): JSX.Element => {
  return (
    <Card w={400} display="flex" justifyContent="center" alignItems="center">
      <CardHeader>
        <Heading size="sm" color="pink.500">
          {title}
        </Heading>
      </CardHeader>
      <CardBody>
        <Image
          src={image}
          objectFit="contain"
          h={110}
          w={180}
          borderRadius={20}
        />
      </CardBody>
    </Card>
  );
};

const SearchRecipes = (): JSX.Element => {
  const results = useLoaderData() as RecipeType[];

  const renderRecipes = (): JSX.Element => {
    return (
      <>
        {results.map((recipe: RecipeType) => (
          <RecipeItem
            title={recipe.title}
            image={recipe.image}
            key={recipe.id}
          />
        ))}
      </>
    );
  };

  return (
    <div>
      <Flex
        direction="row"
        flexWrap="wrap"
        justifyContent="space-between"
        padding={8}
        gap={8}
      >
        {renderRecipes()}
      </Flex>
    </div>
  );
};

export default SearchRecipes;
