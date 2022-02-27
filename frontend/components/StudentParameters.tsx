import {
  Box,
  Heading,
  HStack,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import React from "react";
import { MdGraphicEq } from "react-icons/md";

interface Props {}

interface Parameter {
  name: string;
  value: number;
}

const parameters: Parameter[] = [
  {
    name: "Numeracy",
    value: 0.7,
  },
  {
    name: "Literacy",
    value: 0.3,
  },
  {
    name: "Emotional Recognition",
    value: 0.2,
  },
  {
    name: "Object Recognition",
    value: 0.5,
  },
  {
    name: "Memorisation",
    value: 0.5,
  },
  {
    name: "Body Language",
    value: 0.3,
  },
  {
    name: "Actions",
    value: 0.2,
  },
];

const StudentParameters: React.FC<Props> = () => {
  return (
    <Box>
      {parameters.map((parameter) => (
        <HStack key={parameter.name}>
          <p
            style={{ marginRight: "10px", textAlign: "right", width: "250px" }}
          >
            {parameter.name}{" "}
          </p>
          <Box style={{ width: "250px" }}>
            <Slider
              aria-label="slider-ex-4"
              min={0}
              max={1}
              value={parameter.value}
              isDisabled
            >
              <SliderTrack bg="red.100">
                <SliderFilledTrack bg="blueviolet" />
              </SliderTrack>
              <SliderThumb boxSize={6}>
                <Box color="blue" />
              </SliderThumb>
            </Slider>
          </Box>
        </HStack>
      ))}
    </Box>
  );
};

export default StudentParameters;
