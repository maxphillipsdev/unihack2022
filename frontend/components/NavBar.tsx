import { Box, ChakraComponent, Flex, HStack } from "@chakra-ui/react";
import React, { FC } from "react";

import Link from "next/link";

const LinkWrapper: ChakraComponent<
  "span",
  {
    name: string;
    path: string;
  }
> = ({ name, path }) => (
  <Link href={path} passHref>
    {name}
  </Link>
);

const NavBar: FC = () => {
  return (
    <Flex
      boxShadow="rgb(0 0 0 / 10%) 0px -5px 10px 10px"
      paddingY={3}
      paddingX={5}
      background="white"
      style={{ position: "fixed", width: "100vw" }}
    >
      <Box flexGrow={1} textAlign="left">
        Not Educatory
      </Box>
      <HStack flexGrow={1} justify="flex-end">
        <Box>Link 1</Box>
        <Box>Link 2</Box>
        <Box>Link 3</Box>
      </HStack>
    </Flex>
  );
};

export default NavBar;
