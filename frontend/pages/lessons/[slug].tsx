import { Box, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";
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
    alert(correct / MCQs.length);
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
        <Box w="50%" h="100%" bg="white">
          <Heading
            style={{ paddingLeft: 48, paddingRight: 48, paddingTop: 48 }}
            size="xl"
          >
            Reading: Ancient Rome
          </Heading>
          <Text style={{ padding: 48, fontSize: "150%" }}>
            Ancient Rome was a powerful and important civilization that ruled
            much of Europe for nearly 1000 years. The culture of Ancient Rome
            was spread throughout Europe during its rule. As a result, Rome's
            culture still has an impact in the Western world today. The basis
            for much of Western culture comes from Ancient Rome, especially in
            areas such as government, engineering, architecture, language, and
            literature.
          </Text>
          <Text
            style={{
              paddingLeft: 48,
              paddingRight: 48,
              fontSize: "150%",
            }}
          >
            Rome first grew into power as a Republic. This meant that Rome's
            leaders, such as senators, were elected officials that served for a
            limited amount of time, not kings who were born into leadership and
            ruled for life. They had a complex government with written laws, a
            constitution, and a balance of powers. These concepts became very
            important in forming future democratic governments, like the United
            States. The Republic would rule Rome for hundreds of years from
            around 509 BC to 45 BC.
          </Text>
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/tClxdOsC_JY"
            title="YouTube video player"
            style={{ padding: 48 }}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
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

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const slug = ctx.params?.slug;
//   const lesson = await client.fetch(
//     `
//     *[_type == "lesson" && slug.current == $slug][0]
//   `,
//     { slug }
//   );

//   return {
//     props: {
//       lesson: lesson || null,
//     },
//   };
// };

export default Lesson;
