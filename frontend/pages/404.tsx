import { Box, Flex, HStack, Text, Link, Button } from "@chakra-ui/react";

const Error404 = () => {
  return (
    <Flex
      width="100%"
      height="100%"
      fontSize="20px"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      textAlign="center"
      mt="100px"
    >
      <Text fontSize="150px">😢</Text>
      <Text>
        Due to time constraints, this lessons has not been developed yet.
        <br />
        Check out one of our recommended lessons for now.
      </Text>
      <Link href="/" textDecoration="none">
        <Button
          background="hsl(0, 0%, 80%)"
          textDecoration="none"
          mt="15px"
          _hover={{ background: "hsl(0, 0%, 70%)", textDecoration: "none" }}
        >
          Take me back
        </Button>
      </Link>
    </Flex>
  );
};

export default Error404;
