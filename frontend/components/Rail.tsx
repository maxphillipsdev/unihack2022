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
    <Box style={{ margin: "10px" }}>
      <Heading size="lg" style={{ margin: "10px" }}>
        {category.name}
      </Heading>
      <HStack
        as="section"
        overflowX="scroll"
        p={3}
        bgColor="gray.400"
        style={{
          margin: "14px",
          borderRadius: "3px",
        }}
      >
        {category.lessons.map((lesson) => {
          <LessonCard lesson={lesson} />
        })}
      </HStack>
    </Box>
  );
};
