import { Box, Container, Flex, HStack, Text } from "@chakra-ui/react";

import type { NextPage } from "next";
import Link from "next/link";
import HeaderSection from "../components/HeaderSection";
import LessonCard from "../components/LessonCard";
import { Heading } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <Flex as="main" flexDir="column" width="100%" height="100vh">
      <Box as="section" id="student-profile" h="40%">
        <Link href="/student-profile">
          <Box
            style={{
              margin: "14px",
              background: "tomato",
              cursor: "pointer",
              borderRadius: "3px",
            }}
            h="90%"
          >
            <Flex justify="center" align="center">
              <Text>Student Profile</Text>
            </Flex>
          </Box>
        </Link>
      </Box>
      <Box style={{ margin: "10px" }}>
        <Heading size="lg" style={{ margin: "10px" }}>
          Recommended
        </Heading>
        <HStack
          as="section"
          id="recommended-rail"
          overflowX="scroll"
          p={3}
          bgColor="gray.400"
          style={{
            margin: "14px",
            borderRadius: "3px",
          }}
        >
          <LessonCard title="Title here" slug="slug-here"></LessonCard>
          <LessonCard title="Title here" slug="slug-here"></LessonCard>
          <LessonCard title="Title here" slug="slug-here"></LessonCard>
          <LessonCard title="Title here" slug="slug-here"></LessonCard>
        </HStack>
      </Box>
      <Box style={{ margin: "10px" }}>
        <Heading size="lg" style={{ margin: "10px" }}>
          Numeracy
        </Heading>
        <HStack
          as="section"
          id="lessons-rail"
          overflowX="scroll"
          p={3}
          bgColor="gray.400"
          style={{
            margin: "14px",
            borderRadius: "3px",
          }}
        >
          <LessonCard title="Title here" slug="slug-here"></LessonCard>
          <LessonCard title="Title here" slug="slug-here"></LessonCard>
          <LessonCard title="Title here" slug="slug-here"></LessonCard>
          <LessonCard title="Title here" slug="slug-here"></LessonCard>
        </HStack>
      </Box>
    </Flex>
  );
};

export default Home;
