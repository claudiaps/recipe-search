import { Avatar, Box, Flex, Heading } from "@chakra-ui/react";
import InputSearch from "../components/InputSearch";
import "./Home.css";
import cusines from "../enums/cusinesEnum";

interface CusinesItemProps {
  name: string;
  imageUrl: string;
}

const CusinesItem = ({ name, imageUrl }: CusinesItemProps): JSX.Element => {
  return (
    <Flex direction="column" alignItems="center" gap={2}>
      <Heading size="md">{name}</Heading>
      <Avatar size="2xl" name="Segun Adebayo" src={imageUrl} />
    </Flex>
  );
};

const Home = (): JSX.Element => {
  const renderRecipesCusines = (): JSX.Element => {
    return (
      <Flex justifyContent="space-between">
        {cusines.map((cusine) => (
          <CusinesItem name={cusine.name} imageUrl={cusine.image} />
        ))}
      </Flex>
    );
  };

  return (
    <div>
      <div className="imageContainer">
        <Flex
          dir="row"
          justifyContent="center"
          alignItems="center"
          height="100%"
          marginInline={150}
        >
          <InputSearch />
        </Flex>
      </div>
      <Box paddingInline={16} paddingBlock={8}>
        <Heading
          fontSize={28}
          color="var(--chakra-colors-pink-500)"
          marginBottom={10}
        >
          Receitas
        </Heading>
        {renderRecipesCusines()}
      </Box>
    </div>
  );
};

export default Home;
