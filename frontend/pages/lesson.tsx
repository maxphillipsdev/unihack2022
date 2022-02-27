import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useState } from "react";

const Lesson = () => {
  return (
    <Flex
      as="main"
      flexDir="column"
      width="100%"
      justify="space-evenly"
      style={{ height: "calc(100vh - 64px)" }}
    >
      <VStack h="100%"></VStack>
    </Flex>
  );
};

export default Lesson;
