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
    <Box style={{ position: "relative", height: "100%", width: "100%" }}>
      <Box
        style={{
          color: "black",
          fontSize: "120%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {parameters.map((parameter) => (
          <HStack
            key={parameter.name}
            style={{ position: "relative", marginTop: "24px" }}
          >
            <p
              style={{
                marginRight: "10px",
                textAlign: "right",
                width: "250px",
              }}
            >
              {parameter.name}:
            </p>
            <Box style={{ width: "350px" }}>
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
                <SliderMark value={0} mt="2" ml="-2.5" fontSize="sm">
                  0.0
                </SliderMark>
                <SliderMark value={0.25} mt="2" ml="-2.5" fontSize="sm">
                  0.25
                </SliderMark>
                <SliderMark value={0.5} mt="2" ml="-2.5" fontSize="sm">
                  0.5
                </SliderMark>
                <SliderMark value={0.75} mt="2" ml="-2.5" fontSize="sm">
                  0.75
                </SliderMark>
                <SliderMark value={1} mt="2" ml="-2.5" fontSize="sm">
                  1.0
                </SliderMark>
              </Slider>
            </Box>
          </HStack>
        ))}
      </Box>
    </Box>
  );
};

export default StudentParameters;
