import { Box, Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export interface Lesson {
  title: string;
  slug: string;
  image: string;
  targetAge: number;
}

interface Props {
  lesson: Lesson;
}

export const LessonCard: React.FC<Props> = ({ lesson }) => {
  return (
    <Link href={`/lesson/${lesson.slug}`}>
      <Box
        style={{
          width: "250px",
          background: "white",
          borderRadius: "15px",
          cursor: "pointer",
          boxShadow: "0px 5px 10px 0px hsl(0deg 0% 0% / 20%)",
          overflow: "hidden",
          margin: "10px",
          marginLeft: "5px",
          marginRight: "5px",
          display: "inline-block"
        }}
      >
        <Image src={lesson.image} />
        <Box padding="10px">
          <Box>{lesson.title}</Box>
          <Box opacity="60%">Target age: {lesson.targetAge}</Box>
        </Box>
      </Box>
    </Link>
  );
};
