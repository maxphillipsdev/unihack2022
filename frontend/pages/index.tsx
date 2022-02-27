import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  HStack,
  Text,
} from "@chakra-ui/react";

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
import { ImStatsBars } from "react-icons/im";
import { RiPsychotherapyFill } from "react-icons/ri";
import { FaGraduationCap } from "react-icons/fa";
import { useState } from "react";

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
  // {
  //   name: "Recommended",
  //   lessons: [
  //     {
  //       title: "Title here",
  //       slug: "slug-here",
  //       image:
  //         "https://scse.d.umn.edu/sites/scse.d.umn.edu/files/umd_dept_home/physics-chalkboard_cropped.jpg",
  //       targetAge: 8,
  //     },
  //     {
  //       title: "Title here",
  //       slug: "slug-here",
  //       image:
  //         "https://scse.d.umn.edu/sites/scse.d.umn.edu/files/umd_dept_home/physics-chalkboard_cropped.jpg",
  //       targetAge: 8,
  //     },
  //   ],
  // },
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
  // ===== Recommended lessons ======

  const [recommendedLessons, setRecommendedLessons] = useState([
    {
      title: "How to tie your shoes",
      slug: "how-to-tie-ur-shoes",
      image: "",
    },
  ]);

  // ================================

  return (
    <Flex as="main" flexDir="column" width="100%" height="100vh">
      <SplashScreen />
      <Box
        as="section"
        id="student-profile"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
        }}
      >
        <Link href="/student-profile">
          <motion.img
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 1 }}
            style={{ width: "100%", cursor: "pointer" }}
            transition={{ duration: 1 }}
            src="https://fuse.education.vic.gov.au/Content/images/DET_Fuse_Header.jpg"
          ></motion.img>
        </Link>

        <Link href="/student-profile">
          <Box style={{ position: "relative" }}>
            <img
              style={{
                borderRadius: "50%",
                width: "200px",
                position: "absolute",
                bottom: -100,
                left: "50%",
                transform: "translate(-50%)",
                border: "6px solid #457b9d",
                cursor: "pointer",
              }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoi5pz196m8gkB1QJO27yu1mz8WC-Qa0E3fsU2_VVTvj3LerDF42NNzXdM76RFs2sfDEY&usqp=CAU"
            />
            <Box
              style={{
                position: "absolute",
                left: "50%",
                transform: "translate(-50%)",
                top: "110px",
                fontSize: "150%",
              }}
            >
              <p>
                Welcome <strong>Max Phillips</strong>!
              </p>
              <br />
              <HStack
                justify="space-between"
                style={{
                  margin: "0 auto",
                  width: "250px",
                  textAlign: "center",
                }}
              >
                <Link href="/student-profile">
                  <Button variant="solid">
                    <ImStatsBars
                      style={{ cursor: "pointer", fontSize: "200%" }}
                    />
                  </Button>
                </Link>
                <Link href="http://localhost:3333/">
                  <Button variant="solid">
                    <RiPsychotherapyFill
                      style={{ cursor: "pointer", fontSize: "200%" }}
                    />
                  </Button>
                </Link>
                <Link href="/">
                  <Button variant="solid">
                    <FaGraduationCap
                      style={{ cursor: "pointer", fontSize: "200%" }}
                    />
                  </Button>
                </Link>
              </HStack>
            </Box>
          </Box>
        </Link>
      </Box>
      <div style={{ height: "200px" }} />
      <Box
        width="85%"
        style={{
          margin: "0 auto",
          padding: "52px",
          marginTop: "270px",
        }}
      >
        {lessonData.map((category) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Rail category={category} key={category.name} />
            <br />
            <br />
          </motion.div>
        ))}
      </Box>
    </Flex>
  );
};

export default Home;
