import { Background, Parallax } from "react-parallax";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  HStack,
  Text,
} from "@chakra-ui/react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import AltLessonCard from "../components/AltLessonCard";
import { FaGraduationCap } from "react-icons/fa";
import HeaderSection from "../components/HeaderSection";
import { Heading } from "@chakra-ui/react";
import { ImStatsBars } from "react-icons/im";
import { LessonCard } from "../components/LessonCard";
import { StudentSummary } from "../components/StudentSummary";
import Link from "next/link";
import type { NextPage } from "next";
import { Rail } from "../components/Rail";
import { RiPsychotherapyFill } from "react-icons/ri";
import SplashScreen from "../components/SplashScreen";
import StudentParameters from "../components/StudentParameters";
import client from "../lib/client";
import { motion } from "framer-motion";
import { useState } from "react";
import wallpaper from "../assets/img/education-wallpaper.png";

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

const Home: NextPage = ({
  lessons,
  categories,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(lessons, categories);
  // ===== Recommended lessons ======

  const [recommendedLessons, setRecommendedLessons] = useState([
    {
      title: "How to tie your shoes",
      slug: "how-to-tie-ur-shoes",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXxlbnwwfHwwfHw%3D&w=1000&q=80",
      targetAge: 5,
    },
    {
      title: "How to tie your shoes",
      slug: "how-to-tie-ur-shoes",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXxlbnwwfHwwfHw%3D&w=1000&q=80",
      targetAge: 6,
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

        <StudentSummary
          name="Max Phillips"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoi5pz196m8gkB1QJO27yu1mz8WC-Qa0E3fsU2_VVTvj3LerDF42NNzXdM76RFs2sfDEY&usqp=CAU"
          goals={{
            daily: [5, 20],
            weekly: [50, 70],
            monthly: [100, 280],
          }}
        />
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
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Heading
            size="lg"
            style={{
              margin: "10px",
              marginBottom: "0px",
              marginTop: "0px",
              fontFamily: "AtlassianText",
              textAlign: "center",
            }}
          >
            Today's Recommended Curriculum
          </Heading>
          <p
            style={{
              fontSize: "120%",
              margin: "10px",
              textAlign: "center",
            }}
          >
            Here's what <strong>Learnery</strong> suggests Max Phillips to do
            next!
          </p>
          <HStack>
            {recommendedLessons.map((lesson, i) => (
              <LessonCard lesson={lesson} isRecommended={i === 0} />
            ))}
          </HStack>
        </motion.div>
      </Box>
      <Box
        width="85%"
        style={{
          margin: "0 auto",
          padding: "52px",
        }}
      >
        {categories.map((category: any) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Rail category={category} key={category.title} />
          </motion.div>
        ))}
      </Box>
    </Flex>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const lessons = await client.fetch(
    `
    *[_type == "lesson"]
  `
  );
  const categories = await client.fetch(
    `
    *[_type == "category"]
  `
  );
  return {
    props: { lessons, categories },
  };
};
export default Home;
