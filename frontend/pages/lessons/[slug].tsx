import { Box, Button, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import client from "../../lib/client";
import { useRouter } from "next/router";
import MCQ from "../../components/MCQ";
import { useState } from "react";

const MCQs = [
  {
    question: "How long did ancient Rome rule Europe for?",
    options: ["100 year", "500 years", "1000 years"],
    answer: "1000 years",
  },
  {
    question:
      "For what period of time did Ancient Rome be ruled by the Republic?",
    options: ["2BC - 1BC", "509BC - 45BC", "60BC - 45BC"],
    answer: "509BC - 45BC",
  },
  {
    question:
      "According to the lesson, what areas did Ancient Rome effect for future civilization",
    options: ["Government", "Painting", "Cooking"],
    answer: "Government",
  },
];

const Lesson = ({
  lesson,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [answers, setAnswers] = useState(["", "", ""]);
  const [showAnswers, setShowAnswers] = useState(false);
  console.log(lesson);
  const router = useRouter();
  // Answers
  const onSubmit = () => {
    console.log(answers);
    // calculate number correct
    let i = 0;
    const correct = MCQs.reduce((prev, curr) => {
      let newVal = prev;
      if (curr.answer === answers[i]) {
        newVal++;
      }
      i++;
      return newVal;
    }, 0);
    alert(correct / MCQs.length);
    setShowAnswers(true);
  };
  return (
    <Flex
      as="main"
      flexDir="column"
      width="100%"
      justify="space-evenly"
      style={{ height: "calc(100vh - 64px)" }}
    >
      <HStack h="100%">
        <Box w="50%" h="100%" bg="tomato">
          Left half
        </Box>
        <Box w="50%" h="100%">
          <VStack h="100%">
            {MCQs.map((mcq, idx) => {
              return (
                <MCQ
                  correctAnswer={MCQs[idx].answer}
                  showCorrectAnswer={showAnswers}
                  key={idx}
                  question={mcq.question}
                  options={mcq.options}
                  setAnswer={(clicked) => {
                    setAnswers((prev) => {
                      let copy = [...prev];
                      copy[idx] = clicked;
                      return copy;
                    });
                  }}
                />
              );
            })}
            <Button
              size="lg"
              padding="2"
              onClick={
                showAnswers
                  ? () => {
                      // try again
                      router.push("/")
                    }
                  : onSubmit
              }
              colorScheme="blue"
            >
              {showAnswers ? "Return" : "Submit"}
            </Button>
            {/* {lesson.content.map((section: any) => {
              if (section._type === "mcqSection") {
                return (
                  <>
                    {section.questions.map((quiz) => {
                      console.log(quiz);
                      
                      return <MCQ question={quiz.question} options={["1", "2"]}/>;
                    })}
                  </>
                );
              }
              return (
                <Box key={section._key}>
                  <Text>{section._type}</Text>
                </Box>
              );
            })} */}
          </VStack>
        </Box>
      </HStack>
    </Flex>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const slug = ctx.params?.slug;
  const lesson = await client.fetch(
    `
    *[_type == "lesson" && slug.current == $slug][0]
  `,
    { slug }
  );
  return {
    props: {
      lesson: lesson || null,
    },
  };
};

export default Lesson;
