import { Box, Image, Text, HStack, Flex } from "@chakra-ui/react";

import React from "react";

interface GoalProps {
  name: string;
  progress: [number, number];
  color: string;
}

const Goal: React.FC<GoalProps> = ({ name, progress, color }) => {
  return (
    <Box>
      <HStack>
        <Text>{name}</Text>
        <Text opacity={0.6}>
          {progress[0]}/{progress[1]}
        </Text>
      </HStack>
      <Box
        background="hsl(0, 0%, 85%)"
        width="100%"
        height="15px"
        borderRadius="1000px"
      >
        <Box
          backgroundColor={color}
          width={`${(progress[0] / progress[1]) * 100}%`}
          height="100%"
          borderRadius="1000px"
        />
      </Box>
    </Box>
  );
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
          Welcome, <strong>{name} 👋</strong>
        </Text>
        <Goal name="Daily" progress={goals.daily} color="hsl(215, 60%, 62%)" />
        <Goal
          name="Weekly"
          progress={goals.weekly}
          color="hsl(215, 60%, 42%)"
        />
        <Goal
          name="Monthly"
          progress={goals.monthly}
          color="hsl(215, 60%, 27%)"
        />
      </Box>
    </Flex>
  );
};
