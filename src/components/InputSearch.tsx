import { Search2Icon } from "@chakra-ui/icons";
import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

const InputSearch = (): JSX.Element => {
  return (
    <InputGroup>
      <Input variant="filled" placeholder="Busque por receitas" size="lg" />
      <InputRightElement marginTop={1}>
        <IconButton
          color="var(--chakra-colors-pink-700)"
          aria-label="open menu"
          icon={<Search2Icon />}
          size="lg"
        />
      </InputRightElement>
    </InputGroup>
  );
};

export default InputSearch;
