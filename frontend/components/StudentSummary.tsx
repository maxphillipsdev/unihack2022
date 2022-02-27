import { Box, Image, Text, HStack } from "@chakra-ui/react";

import React from "react";

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
    <Box>
      <HStack>
        <Image src={image} />
        <Box>
          <Box>{name}</Box>
        </Box>
      </HStack>
    </Box>
  );
};
