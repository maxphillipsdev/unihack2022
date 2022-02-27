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
import { useContext, useEffect, useState } from "react";
import wallpaper from "../assets/img/education-wallpaper.png";
import { UserContext } from "./_app";

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
    name: "History",
    lessons: [
      {
        title: "Ancient History 1",
        slug: "ancient-history-1",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Parthenon_%2830276156187%29.jpg/1200px-Parthenon_%2830276156187%29.jpg",
        targetAge: 10,
      },
      {
        title: "Modern History 1",
        slug: "modern-history-1",
        image:
          "http://upload.wikimedia.org/wikipedia/commons/thumb/4/40/ANTIAKW.jpg/800px-ANTIAKW.jpg",
        targetAge: 10,
      },
      {
        title: "Archeology",
        slug: "archeology-1",
        image:
          "https://static.theprint.in/wp-content/uploads/2022/01/terracotta-164169_1280.jpeg?compress=true&quality=80&w=376&dpr=2.6",
        targetAge: 12,
      },
    ],
  },
  {
    name: "Maths",
    lessons: [
      {
        title: "Arithmetic 1",
        slug: "arithmetic-1",
        image:
          "https://cdn.vanderbilt.edu/vu-news/files/20190417230900/math-blackboard.jpg",
        targetAge: 6,
      },
      {
        title: "Probability 1",
        slug: "probability-1",
        image:
          "https://www.thesprucecrafts.com/thmb/284T1TCXUV7cBrItDN0i55ZqB3U=/1500x844/smart/filters:no_upscale()/dice-probabilities-rolling-2-sixsided-dice-411406_hero_3220-4c2f1909efb84327bd236c34e7610364.jpg",
        targetAge: 10,
      },
      {
        title: "Trigonometry 1",
        slug: "trigonometry-1",
        image:
          "https://e.staedtlercdn.com/fileadmin/_processed_/4/4/csm_UK_STAEDTLER-Rulers-and-set-squares_d12d377fb9.jpg",
        targetAge: 12,
      },
    ],
  },
  {
    name: "English",
    lessons: [
      {
        title: "Spelling 1",
        slug: "spelling-1",
        image:
          "https://compote.slate.com/images/9c753ed5-6ecf-4085-894f-6af84877ccb6.jpg",
        targetAge: 6,
      },
      {
        title: "Grammar 1",
        slug: "slug-here",
        image:
          "https://media.smallbiztrends.com/2021/08/common-grammar-mistakes.png",
        targetAge: 8,
      },
      {
        title: "Creative Writing 1",
        slug: "slug-here",
        image:
          "https://images.ctfassets.net/3s5io6mnxfqz/4yeXIDuHZer33N4bJndXGs/4a2b095aaa90860fc2f53d0e7765116c/AdobeStock_86801082.jpeg?fm=jpg&w=900&fl=progressive",
        targetAge: 8,
      },
    ],
  },
];

const Home: NextPage = ({
  lessons,
  categories,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const userContext = useContext(UserContext);
  console.log(lessons, categories);

  // ===== Recommended lessons ======
  // TODO: remove reading I when start lesson clicked
  // COMPLETE READING 1
  // OUTPUT: READING II AND MATHS I
  const [recommendedLessons, setRecommendedLessons] = useState([
    {
      title: "Reading I",
      slug: "how-to-tie-ur-shoes",
      image: "https://desktime.com/blog/wp-content/uploads/2015/09/reading.png",
      targetAge: 5,
      priority: userContext.user.currPriorities.literacy,
    },
    {
      title: "Maths I",
      slug: "how-to-tie-ur-shoes",
      image:
        "https://media.istockphoto.com/photos/heap-of-wooden-numbers-on-blue-background-picture-id1292684021?b=1&k=20&m=1292684021&s=170667a&w=0&h=5-7WcFt5ibtORzehe4YnPSTZIgUiayWQ3ICRrOibazk=",
      targetAge: 6,
      priority: userContext.user.currPriorities.numeracy,
    },
    {
      title: "Reading II",
      slug: "how-to-tie-ur-shoes",
      image:
        "https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/GettyImages-1301650294_463234_ofai7p.jpg",
      targetAge: 6,
      priority: userContext.user.currPriorities.literacy,
    },
  ]);

  useEffect(() => {
    setRecommendedLessons(
      recommendedLessons.sort((a, b) => b.priority - a.priority)
    );
  }, [userContext]);

  useEffect(() => {
    setRecommendedLessons([
      {
        title: "Reading I",
        slug: "how-to-tie-ur-shoes",
        image:
          "https://desktime.com/blog/wp-content/uploads/2015/09/reading.png",
        targetAge: 5,
        priority: userContext.user.currPriorities.literacy,
      },
      {
        title: "Maths I",
        slug: "how-to-tie-ur-shoes",
        image:
          "https://media.istockphoto.com/photos/heap-of-wooden-numbers-on-blue-background-picture-id1292684021?b=1&k=20&m=1292684021&s=170667a&w=0&h=5-7WcFt5ibtORzehe4YnPSTZIgUiayWQ3ICRrOibazk=",
        targetAge: 6,
        priority: userContext.user.currPriorities.numeracy,
      },
      {
        title: "Reading II",
        slug: "how-to-tie-ur-shoes",
        image:
          "https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/GettyImages-1301650294_463234_ofai7p.jpg",
        targetAge: 6,
        priority: userContext.user.currPriorities.literacy,
      },
    ]);
  }, [userContext]);

  console.log(recommendedLessons);
  // ================================

  return (
    <Flex as="main" flexDir="column" width="100%" height="100vh">
      {/* <SplashScreen /> */}
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
      </Box>

      <StudentSummary
        name="Max Phillips"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoi5pz196m8gkB1QJO27yu1mz8WC-Qa0E3fsU2_VVTvj3LerDF42NNzXdM76RFs2sfDEY&usqp=CAU"
        goals={{
          daily: [5, 20],
          weekly: [50, 70],
          monthly: [100, 280],
        }}
      />

      <div style={{ height: "200px" }} />
      <Box
        width="85%"
        style={{
          margin: "0 auto",
          padding: "52px",
          marginTop: "0px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Heading
            size="xl"
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
            {recommendedLessons
              .sort((a, b) => a.priority - b.priority)
              .filter(
                (lesson) =>
                  lesson.title != "Reading I" || lesson.priority == 0.5
              )
              .map((lesson, i) => (
                <LessonCard
                  lesson={lesson}
                  isRecommended
                  lessons={recommendedLessons}
                  setLessons={setRecommendedLessons}
                  priority={lesson.priority}
                />
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
        {/* {categories.map((category: any) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Rail category={category} key={category.title} />
          </motion.div>
        ))} */}

        <Heading
          size="xl"
          style={{
            margin: "10px",
            marginBottom: "0px",
            marginTop: "0px",
            fontFamily: "AtlassianText",
            textAlign: "center",
          }}
        >
          Curated Lessons
        </Heading>
        {lessonData.map((category: any) => (
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

// export const getServerSideProps: GetServerSideProps = async () => {
//   const lessons = await client.fetch(
//     `
//     *[_type == "lesson"]
//   `
//   );
//   const categories = await client.fetch(
//     `
//     *[_type == "category"]
//   `
//   );
//   return {
//     props: { lessons, categories },
//   };
// };
export default Home;
