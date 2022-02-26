import { Box, Container, Flex, HStack, Text } from "@chakra-ui/react";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Flex
      as="main"
      flexDir="column"
      width="100%"
      justify="space-evenly"
      height="100vh"
    >
      <Box as="section" id="student-profile">
        <Flex justify="center" align="center">
          <Text>Student Profile</Text>
        </Flex>
      </Box>
      <HStack
        as="section"
        id="recommended-rail"
        overflowX="scroll"
        p={3}
        bgColor="gray.400"
      >
        <Container p={2} marginRight={3} border="1px solid black">
          Recommended Rail
        </Container>
        <Container p={2} marginRight={3} border="1px solid black">
          Recommended Rail
        </Container>
        <Container p={2} marginRight={3} border="1px solid black">
          Recommended Rail
        </Container>
        <Container p={2} marginRight={3} border="1px solid black">
          Recommended Rail
        </Container>
        <Container p={2} marginRight={3} border="1px solid black">
          Recommended Rail
        </Container>
        <Container p={2} marginRight={3} border="1px solid black">
          Recommended Rail
        </Container>
        <Container p={2} marginRight={3} border="1px solid black">
          Recommended Rail
        </Container>
        <Container p={2} marginRight={3} border="1px solid black">
          Recommended Rail
        </Container>
        <Container p={2} marginRight={3} border="1px solid black">
          Recommended Rail
        </Container>
        <Container p={2} marginRight={3} border="1px solid black">
          Recommended Rail
        </Container>
      </HStack>
      <HStack as="section" id="lessons-rail">
        <Container>Lessons Rail</Container>
      </HStack>
    </Flex>
  );
};

export default Home;
