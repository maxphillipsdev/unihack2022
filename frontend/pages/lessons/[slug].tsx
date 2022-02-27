import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import client from "../../lib/client";
import { useRouter } from "next/router";
import MCQ from "../../components/MCQ";
import { useState } from "react";

const MCQs = [
  {
    question: "How do you tie your shoes?",
    options: ["1", "2", "3", "4"],
    answer: "2",
  },
  {
    question: "How do you tie your shoes?",
    options: ["1", "2", "3", "4"],
    answer: "3",
  },
  {
    question: "How do you tie your shoes?",
    options: ["1", "2", "3", "4"],
    answer: "4",
  },
];

const Lesson = ({
  lesson,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [answers, setAnswers] = useState(["", "", ""]);
  console.log(lesson);

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
    alert(correct / MCQs.length)
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
            <button onClick={onSubmit}>SUbmit</button>
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
