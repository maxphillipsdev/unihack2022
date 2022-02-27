import { Box, Image, Text, HStack, Flex } from "@chakra-ui/react";

import React from "react";

interface GoalProps {
  name: string;
  progress: [number, number];
  color: string;
}

const Goal: React.FC<GoalProps> = ({ name, progress, color }) => {
  return <div>goal</div>;
};

interface Props {
  name: string;
  image: string;
  goals: {
    daily: [number, number];
    weekly: [number, number];
    monthly: [number, number];
  };
}

export const StudentSummary: React.FC<Props> = ({ name, image, goals }) => {
  return (
    <Flex transform="translateY(-50%)" width="100%" justifyContent="center">
      <Box
        width="500px"
        background="white"
        boxShadow="0px 5px 10px 0px hsl(0deg 0% 0% / 20%)"
        borderRadius="15px"
        padding="15px"
        textAlign="center"
      >
        <Text fontSize="30px">
          Welcome, <strong>{name}</strong>
        </Text>
        <Goal />
      </Box>
    </Flex>
  );
};
