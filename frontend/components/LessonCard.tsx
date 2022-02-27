import { Box, HStack, Image } from "@chakra-ui/react";
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
          width: "480px",
          background: "white",
          borderRadius: "4px",
          cursor: "pointer",
          boxShadow: "0px 5px 10px 0px hsl(0deg 0% 0% / 20%)",
          overflow: "hidden",
          margin: "10px",
          marginLeft: "5px",
          marginRight: "5px",
          display: "inline-block",
        }}
      >
        <HStack>
          <Image src={lesson.image} style={{ maxWidth: "50%" }} />
          <Box padding="16px">
            <Box>{lesson.title}</Box>
            <Box opacity="60%" style={{}}>
              Target age: {lesson.targetAge}
            </Box>
          </Box>
        </HStack>
      </Box>
    </Link>
  );
};
