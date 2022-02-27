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
        {(category.name === "Recommended" && "Today's Recommended Lessons") ||
          category.name}
      </Heading>
      <p style={{ margin: 10, fontSize: "120%" }}>
        {category.name === "Recommended" ? (
          <span>
            Here's what <strong>Learnery</strong> suggests Max Phillips to do
            next!
          </span>
        ) : (
          <span>
            Explore Learnery's curated lessons on{" "}
            <strong>{category.name}</strong>!
          </span>
        )}
      </p>
      <Box overflowX="scroll" whiteSpace="nowrap" paddingLeft="5px">
        {category.lessons.map((lesson) => (
          <LessonCard lesson={lesson} key={lesson.slug} />
        ))}
      </Box>
    </Box>
  );
};
