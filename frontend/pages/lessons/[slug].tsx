import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";

import { useRouter } from "next/router";

const Lesson = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Flex
      as="main"
      flexDir="column"
      width="100%"
      justify="space-evenly"
      style={{ height: "calc(100vh - 64px)" }}
    >
      <HStack h="100%">
        <Box w="50%" h="100%" bg="tomato">
          Left half
        </Box>
        <Box w="50%" h="100%">
          <VStack h="100%">
            <Box style={{ border: "1px solid black" }} h="full" w="100%">
              Test
            </Box>
            <Box style={{ border: "1px solid black" }} h="full" w="100%">
              Test
            </Box>
            <Box style={{ border: "1px solid black" }} h="full" w="100%">
              Test
            </Box>
          </VStack>
        </Box>
      </HStack>
    </Flex>
  );
};

export default Lesson;
