import React from "react";
import { Grid, GridItem, Box, Text } from "@chakra-ui/react";
import StudentHistory from "../components/StudentHistory";
import StudentRadialBar from "../components/StudentRadialBar";
import SubjectCompentencyChart from "../components/SubjectCompentencyChart";
import RandomChart from "../components/RandomChart";
import StudentParameters from "../components/StudentParameters";
import MCQ from "../components/MCQ";

const Profile = () => {
  return (
    <>
      <br />
      <Grid templateColumns="repeat(2, 1fr)" gap={6} sx={{ mx: "6" }}>
        <GridItem
          w="100%"
          h="43vh"
          bg="#1d3557"
          boxShadow="md"
          sx={{ borderRadius: "5px" }}
        >
          <Box
            bg="#FFFFFF"
            rounded="sm"
            w="100%"
            height="93%"
            p={4}
            color="white"
          >
            <StudentHistory />
          </Box>
          <Text
            fontSize="xl"
            textAlign="center"
            style={{ marginTop: "8px", color: "white" }}
          >
            Lesson History
          </Text>
        </GridItem>
        <GridItem w="100%" h="43vh" bg="#1d3557" boxShadow="md">
          <Box
            bg="white"
            rounded="sm"
            w="100%"
            height="93%"
            p={4}
            color="white"
          >
            <StudentRadialBar />
          </Box>
          <Text
            textAlign="center"
            fontSize="xl"
            style={{ marginTop: "8px", color: "white" }}
          >
            Categorical Competencies
          </Text>
        </GridItem>
        <GridItem w="100%" h="43vh" bg="#1d3557" boxShadow="md">
          <Box
            bg="white"
            rounded="sm"
            w="100%"
            height="93%"
            p={4}
            color="white"
          >
            <SubjectCompentencyChart />
          </Box>
          <Text
            textAlign="center"
            fontSize="xl"
            style={{ marginTop: "8px", color: "white" }}
          >
            Relative Competencies
          </Text>
        </GridItem>
        <GridItem w="100%" h="43vh" bg="#1d3557" boxShadow="md">
          <Box
            bg="white"
            rounded="sm"
            w="100%"
            height="93%"
            p={4}
            color="white"
          >
            {/* <RandomChart /> */}
            <StudentParameters />
          </Box>
          <Text
            textAlign="center"
            fontSize="xl"
            style={{ marginTop: "8px", color: "white" }}
          >
            Recommendation Engine Competencies
          </Text>
        </GridItem>
      </Grid>
      <br />
    </>
  );
};

export default Profile;
