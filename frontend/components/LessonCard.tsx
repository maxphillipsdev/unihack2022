import { Box, Button, HStack, Heading, Image, Text } from "@chakra-ui/react";

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
  isRecommended?: boolean;
  lessons: any;
  setLessons: any;
}

export const LessonCard: React.FC<Props> = ({
  lesson,
  isRecommended = false,
  lessons,
  setLessons,
}) => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <img src={lesson.image} alt="rover" />
        </div>
        <div className="card-body" style={{ textAlign: "" }}>
          <HStack>
            {isRecommended && (
              <span style={{ fontSize: "115%" }} className="tag recommended">
                Recommended
              </span>
            )}
            <span style={{ fontSize: "115%" }} className="tag tag-teal">
              Age: {lesson.targetAge}
            </span>
          </HStack>
          <Text
            style={{
              fontSize: "140%",
              margin: 0,
              marginTop: 10,
              width: "100%",
            }}
          >
            {lesson.title}
          </Text>
          <br />
          <div className="user">
            <img
              src="https://studyinbaltics.ee/wp-content/uploads/2020/03/3799Ffxy.jpg"
              alt="user"
            />
            <div className="user-info">
              <h5>Julie Therapist</h5>
              <small>1w ago</small>
            </div>
          </div>
          <br />
          <Box sx={{ textAlign: "center", width: "100%" }}>
            {/* <Link href={`/lessons/${lesson.slug}`}> */}
            <Link href={`/lessons/test`}>
              <Button>Start Lesson</Button>
            </Link>
          </Box>
        </div>
      </div>
    </div>
  );
};
