import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Image,
  Spinner,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface RecipeType {
  id: number;
  title: string;
  image: string;
}

interface RecipeItemProps {
  title: string;
  image: string;
}

const RecipeItem = ({ title, image }: RecipeItemProps): JSX.Element => {
  return (
    <Card w={200} display="flex" justifyContent="center" alignItems="center">
      <CardHeader>
        <Heading size="sm" color="pink.500">
          {title}
        </Heading>
      </CardHeader>
      <CardBody>
        <Image src={image} boxSize="150px" borderRadius="full" />
      </CardBody>
    </Card>
  );
};

const SearchRecipes = () => {
  const { recipeSearch } = useParams();

  const [recipes, setRecipes] = useState<RecipeType[]>();
  const [loading, setLoading] = useState<boolean>(false);

  const getRecipes = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        "https://api.spoonacular.com/recipes/complexSearch",
        {
          params: {
            number: 20,
            apiKey: "d7cf3f1717bc425cbc62180f7c7e0e7f",
            query: recipeSearch,
          },
        }
      );
      setRecipes(data.results);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void getRecipes();
  }, []);

  const renderRecipes = () => {
    if (recipes?.length === 0)
      return <Text>Ops! Não foram encontradas receitas para essa busca.</Text>;
    return recipes?.map((recipe: RecipeType) => (
      <RecipeItem title={recipe.title} image={recipe.image} key={recipe.id} />
    ));
  };

  return (
    <>
      {loading && !recipes && (
        <Flex justifyContent="center" alignItems="center" marginTop={20}>
          <Spinner size="xl" color="pink" />
        </Flex>
      )}
      <Flex
        direction="row"
        flexWrap="wrap"
        justifyContent="space-between"
        padding={8}
        gap={8}
      >
        {renderRecipes()}
      </Flex>
    </>
  );
};

export default SearchRecipes;
