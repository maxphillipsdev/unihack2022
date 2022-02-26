import { Box, Heading, HStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { LessonCard, Lesson } from "./LessonCard";

export interface Category {
  name: string;
  lessons: Lesson[];
}

interface Props {
  category: Category;
}

export const Rail: React.FC<Props> = ({ category }) => {
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
      <Box overflowX="scroll" whiteSpace="nowrap" paddingLeft="5px">
        {category.lessons.map((lesson) => (
          <LessonCard lesson={lesson} key={lesson.slug} />
        ))}
      </Box>
    </Box>
  );
};
