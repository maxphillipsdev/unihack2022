import React from "react";
import { Grid, GridItem, Box, Text } from "@chakra-ui/react";
import StudentHistory from "../components/StudentHistory";
import StudentRadialBar from "../components/StudentRadialBar";
import SubjectCompentencyChart from "../components/SubjectCompentencyChart";
import RandomChart from "../components/RandomChart";

const Profile = () => {
  return (
    <>
      <br />
      <Grid templateColumns="repeat(2, 1fr)" gap={6} sx={{ mx: "6" }}>
        <GridItem w="100%" h="43vh" bg="gray.200" boxShadow="md">
          <Box bg="white" rounded="sm" w="100%" height="93%" p={4} color="white">
            <StudentHistory />
          </Box>
          <Text fontSize="lg" textAlign="center">
            Lesson History
          </Text>
        </GridItem>
        <GridItem w="100%" h="43vh" bg="gray.200" boxShadow="md">
          <Box bg="white" rounded="sm" w="100%" height="93%" p={4} color="white">
            <StudentRadialBar />
          </Box>
          <Text fontSize="lg" textAlign="center">
            Statistics Visualization #1
          </Text>
        </GridItem>
        <GridItem w="100%" h="43vh" bg="gray.200" boxShadow="md">
          <Box bg="white" rounded="sm" w="100%" height="93%" p={4} color="white">
            <SubjectCompentencyChart />
          </Box>
          <Text fontSize="lg" textAlign="center">
            Statistics Visualization #2
          </Text>
        </GridItem>
        <GridItem w="100%" h="43vh" bg="gray.200" boxShadow="md">
          <Box bg="white" rounded="sm" w="100%" height="93%" p={4} color="white">
            <RandomChart />
          </Box>
          <Text fontSize="lg" textAlign="center">
            Statistics Visualization #3
          </Text>
        </GridItem>
      </Grid>
      <br />
    </>
  );
};

export default Profile;
