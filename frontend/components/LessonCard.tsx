import { Box } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export interface Lesson {
  title: string;
  slug: string;
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
          minWidth: "250px",
          background: "darkslategrey",
          color: "white",
          borderRadius: "3px",
          padding: "14px",
          cursor: "pointer",
        }}
      >
        <Box>Title: {lesson.title}</Box>
        <Box>Slug: {lesson.slug}</Box>
        <Box>Target age: {lesson.targetAge}</Box>
      </Box>
    </Link>
  );
};
