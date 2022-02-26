import { Box, Container, Flex, HStack, Text } from "@chakra-ui/react";

import type { NextPage } from "next";
import Link from "next/link";
import HeaderSection from "../components/HeaderSection";
import { Heading } from "@chakra-ui/react";
import StudentParameters from "../components/StudentParameters";
import { Rail } from "../components/Rail";

// TODO: this data should come from somewhere
const lessonData = [
  {
    name: "Recommended",
    lessons: [
      {
        title: "Title here",
        slug: "slug-here",
        targetAge: 8
      },
      {
        title: "Title here",
        slug: "slug-here",
        targetAge: 8
      }
    ]
  },
  {
    name: "Mathematics",
    lessons: [
      {
        title: "Title here",
        slug: "slug-here",
        targetAge: 8
      },
      {
        title: "Title here",
        slug: "slug-here",
        targetAge: 8
      }
    ]
  },
  {
    name: "Physics",
    lessons: [
      {
        title: "Title here",
        slug: "slug-here",
        targetAge: 8
      },
      {
        title: "Title here",
        slug: "slug-here",
        targetAge: 8
      }
    ]
  }
];

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
              <Text>Studentr Profile</Text>
            </Flex>
          </Box>
        </Link>
      </Box>
      <Box>
        {lessonData.map((category) => (
          <Rail category={category} key={category.name} />
        ))}
      </Box>
    </Flex>
  );
};

export default Home;
