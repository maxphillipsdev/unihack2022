import React from "react";
import { Grid, GridItem, Box, Text } from "@chakra-ui/react";
import StudentHistory from "../components/StudentHistory";

const Profile = () => {
  return (
    <>
      <br />
      <Grid templateColumns="repeat(2, 1fr)" gap={6} sx={{ mx: "6" }}>
        <GridItem w="100%" h="38vh" bg="gray.200" boxShadow="md">
          <Box bg="white" w="100%" height="90%" p={4} color="white">
            <StudentHistory />
          </Box>
          <Text fontSize="md" textAlign="center">
            Lesson History
          </Text>
        </GridItem>
        <GridItem w="100%" h="38vh" bg="gray.200" boxShadow="md">
          <Box bg="white" w="100%" height="90%" p={4} color="white">
            This is the Box
          </Box>
          <Text fontSize="md" textAlign="center">
            Statistics Visualization #1
          </Text>
        </GridItem>
        <GridItem w="100%" h="38vh" bg="gray.200" boxShadow="md">
          <Box bg="white" w="100%" height="90%" p={4} color="white">
            This is the Box
          </Box>
          <Text fontSize="md" textAlign="center">
            Statistics Visualization #2
          </Text>
        </GridItem>
        <GridItem w="100%" h="38vh" bg="gray.200" boxShadow="md">
          <Box bg="white" w="100%" height="90%" p={4} color="white">
            This is the Box
          </Box>
          <Text fontSize="md" textAlign="center">
            Statistics Visualization #3
          </Text>
        </GridItem>
      </Grid>
      <br />
    </>
  );
};

export default Profile;
