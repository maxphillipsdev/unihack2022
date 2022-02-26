import { Box } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  slug: string;
  targetAge: number;
}

const LessonCard: React.FC<Props> = ({ title, slug, targetAge }) => {
  return (
    <Link href={`/lesson/${slug}`}>
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
        <Box>Title: {title}</Box>
        <Box>Slug: {slug}</Box>
        <Box>Target age: {targetAge}</Box>
      </Box>
    </Link>
  );
};

export default LessonCard;
