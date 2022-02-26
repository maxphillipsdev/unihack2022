import { Box, Container, Flex, HStack, Text } from "@chakra-ui/react";

import type { NextPage } from "next";
import Link from "next/link";
import HeaderSection from "../components/HeaderSection";
import { Heading } from "@chakra-ui/react";
import StudentParameters from "../components/StudentParameters";
import { Rail } from "../components/Rail";
import wallpaper from "../assets/img/education-wallpaper.png";
import { motion } from "framer-motion";
import SplashScreen from "../components/SplashScreen";
import { Parallax, Background } from "react-parallax";

const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
};

// TODO: this data should come from somewhere
const lessonData = [
  {
    name: "Recommended",
    lessons: [
      {
        title: "Title here",
        slug: "slug-here",
        image:
          "https://scse.d.umn.edu/sites/scse.d.umn.edu/files/umd_dept_home/physics-chalkboard_cropped.jpg",
        targetAge: 8,
      },
      {
        title: "Title here",
        slug: "slug-here",
        image:
          "https://scse.d.umn.edu/sites/scse.d.umn.edu/files/umd_dept_home/physics-chalkboard_cropped.jpg",
        targetAge: 8,
      },
    ],
  },
  {
    name: "Mathematics",
    lessons: [
      {
        title: "Title here",
        slug: "slug-here",
        image:
          "https://scse.d.umn.edu/sites/scse.d.umn.edu/files/umd_dept_home/physics-chalkboard_cropped.jpg",
        targetAge: 8,
      },
      {
        title: "Title here",
        slug: "slug-here",
        image:
          "https://scse.d.umn.edu/sites/scse.d.umn.edu/files/umd_dept_home/physics-chalkboard_cropped.jpg",
        targetAge: 8,
      },
      {
        title: "Title here",
        slug: "slug-here",
        image:
          "https://scse.d.umn.edu/sites/scse.d.umn.edu/files/umd_dept_home/physics-chalkboard_cropped.jpg",
        targetAge: 8,
      },
      {
        title: "Title here",
        slug: "slug-here",
        image:
          "https://scse.d.umn.edu/sites/scse.d.umn.edu/files/umd_dept_home/physics-chalkboard_cropped.jpg",
        targetAge: 8,
      },
      {
        title: "Title here",
        slug: "slug-here",
        image:
          "https://scse.d.umn.edu/sites/scse.d.umn.edu/files/umd_dept_home/physics-chalkboard_cropped.jpg",
        targetAge: 8,
      },
      {
        title: "Title here",
        slug: "slug-here",
        image:
          "https://scse.d.umn.edu/sites/scse.d.umn.edu/files/umd_dept_home/physics-chalkboard_cropped.jpg",
        targetAge: 8,
      },
      {
        title: "Title here",
        slug: "slug-here",
        image:
          "https://scse.d.umn.edu/sites/scse.d.umn.edu/files/umd_dept_home/physics-chalkboard_cropped.jpg",
        targetAge: 8,
      },
      {
        title: "Title here",
        slug: "slug-here",
        image:
          "https://scse.d.umn.edu/sites/scse.d.umn.edu/files/umd_dept_home/physics-chalkboard_cropped.jpg",
        targetAge: 8,
      },
      {
        title: "Title here",
        slug: "slug-here",
        image:
          "https://scse.d.umn.edu/sites/scse.d.umn.edu/files/umd_dept_home/physics-chalkboard_cropped.jpg",
        targetAge: 8,
      },
    ],
  },
  {
    name: "Physics",
    lessons: [
      {
        title: "Title here",
        slug: "slug-here",
        image:
          "https://scse.d.umn.edu/sites/scse.d.umn.edu/files/umd_dept_home/physics-chalkboard_cropped.jpg",
        targetAge: 8,
      },
      {
        title: "Title here",
        slug: "slug-here",
        image:
          "https://scse.d.umn.edu/sites/scse.d.umn.edu/files/umd_dept_home/physics-chalkboard_cropped.jpg",
        targetAge: 8,
      },
    ],
  },
];

const Home: NextPage = () => {
  return (
    <Flex as="main" flexDir="column" width="100%" height="100vh">
      <SplashScreen />
      <Box as="section" id="student-profile" h="28%">
        <Link href="/student-profile">
          <Box
            style={{
              cursor: "pointer",
              borderRadius: "3px",
            }}
            h="70%"
          >
            <motion.img
              initial={{ opacity: 0.2 }}
              animate={{ opacity: 1 }}
              style={{ width: "100%" }}
              transition={{ duration: 1 }}
              src="https://fuse.education.vic.gov.au/Content/images/DET_Fuse_Header.jpg"
            ></motion.img>
          </Box>
        </Link>
      </Box>
      <br />
      <Box width="70%" style={{ margin: "0 auto" }}>
        {lessonData.map((category) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Rail category={category} key={category.name} />
          </motion.div>
        ))}
      </Box>
    </Flex>
  );
};

export default Home;
