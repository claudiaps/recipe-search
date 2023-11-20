import { Search2Icon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { type ChangeEvent } from "react";

interface InputSearchProps {
  placeholder: string;
  onSearch: () => void;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
}

const InputSearch = ({
  placeholder,
  onSearch,
  onChange,
  inputValue,
}: InputSearchProps): JSX.Element => {
  return (
    <InputGroup size="lg">
      <Input
        bg="white"
        placeholder={placeholder}
        focusBorderColor="pink.400"
        value={inputValue}
        onChange={onChange}
      />
      <InputRightElement>
        <Search2Icon color="pink.400" onClick={onSearch} />
      </InputRightElement>
    </InputGroup>
  );
};

export default InputSearch;
