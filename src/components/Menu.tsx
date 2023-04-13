import { useRef } from "react";

import {
  IconButton,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  DrawerHeader,
} from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon, StarIcon } from "@chakra-ui/icons";
import "./Menu.css";

interface MenuItemProps {
  icon: React.ReactNode;
  title: string;
  href: string;
}

const MenuItem = ({ icon, title, href }: MenuItemProps): JSX.Element => {
  return (
    <div className="menuItem">
      {icon}
      <a href={href} className="menuItemLink">
        {title}
      </a>
    </div>
  );
};

const Menu = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <IconButton
        ref={btnRef}
        colorScheme="pink"
        onClick={onOpen}
        aria-label="open menu"
        icon={<HamburgerIcon />}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader backgroundColor="pink">Shasha Recepis</DrawerHeader>
          <DrawerBody>
            <MenuItem title="Pesquisar" href="/" icon={<SearchIcon />} />
            <MenuItem title="Favoritos" href="/favorites" icon={<StarIcon />} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Menu;
