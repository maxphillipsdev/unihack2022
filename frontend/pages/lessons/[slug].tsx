import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import client from "../../lib/client";
import { useRouter } from "next/router";

const Lesson = ({
  lesson,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(lesson);

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
            {lesson.content.map((section: any) => {
              return (
                <Box key={section._key}>
                  <Text>{section._type}</Text>
                </Box>
              );
            })}
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
