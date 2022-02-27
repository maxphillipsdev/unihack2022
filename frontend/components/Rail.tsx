import { Box, HStack, Heading, Text } from "@chakra-ui/react";
import { Lesson, LessonCard } from "./LessonCard";

import Link from "next/link";
import React from "react";
import client from "../lib/client";

export interface Category {
  name: string;
  lessons: Lesson[];
}

interface Props {
  category: Category;
}

export const Rail: React.FC<Props> = ({ category }) => {
  const [lessons, setLessons] = React.useState([]);

  // React.useEffect(() => {
  //   const fetchLessons = async () => {
  //     setLessons([]);
  //     const id = category._id;
  //     const lessons = await client.fetch(
  //       `
  //       *[_type == "lesson" && categories == $id in categories[]->_ref]
  //     `,
  //       {
  //         id,
  //       }
  //     );
  //     setLessons(lessons);
  //   };
  //   fetchLessons();
  // }, []);

  return (
    <Box>
      <Heading
        size="lg"
        style={{
          margin: "10px",
          marginBottom: "0px",
          marginTop: "0px",
          fontFamily: "AtlassianText",
        }}
      >
        {category.name}
      </Heading>
      <p style={{ margin: 10, fontSize: "120%" }}>
        <span>
          Explore Learnery's curated lessons on <strong>{category.name}</strong>
          !
        </span>
      </p>
      {/* <Box overflowX="scroll" whiteSpace="nowrap" paddingLeft="5px">
        {lessons.length > 0 ? (
          lessons.map((lesson: any) => (
            <LessonCard lesson={lesson} key={lesson.slug} />
          ))
        ) : (
          <Text>Loading...</Text>
        )}
      </Box> */}
      <Box overflowX="scroll" whiteSpace="nowrap" paddingLeft="5px">
        <HStack>
          {category.lessons.map((lesson: any) => (
            <LessonCard lesson={lesson} key={lesson.slug} />
          ))}
        </HStack>
      </Box>
    </Box>
  );
};
