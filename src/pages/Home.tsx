import { type ChangeEvent, useState } from "react";

import { Avatar, Box, Flex, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import InputSearch from "../components/InputSearch";
import "./Home.css";
import cusines from "../enums/cusinesEnum";

interface CusinesItemProps {
  name: string;
  imageUrl: string;
  onClick: (searchValue: string) => void;
  searchName: string;
}

const CusinesItem = ({
  name,
  imageUrl,
  onClick,
  searchName,
}: CusinesItemProps): JSX.Element => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      gap={2}
      onClick={() => {
        onClick(searchName);
      }}
    >
      <Heading size="md">{name}</Heading>
      <Avatar size="2xl" name="Segun Adebayo" src={imageUrl} />
    </Flex>
  );
};

const Home = (): JSX.Element => {
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState<string>("");

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value);
  };

  const onSearch = (): void => {
    navigate(`/search/${searchValue}`);
  };

  const onSearchByCousine = (search: string) => {
    navigate(`/search/${search}`);
  };

  const renderRecipesCusines = (): JSX.Element => {
    return (
      <Flex justifyContent="space-between">
        {cusines.map((cusine) => (
          <CusinesItem
            name={cusine.name}
            imageUrl={cusine.image}
            searchName={cusine.search}
            onClick={onSearchByCousine}
          />
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
          <InputSearch
            placeholder="Busque por receitas"
            inputValue={searchValue}
            onChange={onChangeInput}
            onSearch={onSearch}
          />
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
