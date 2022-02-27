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
import React, { useContext } from "react";
import { MdGraphicEq } from "react-icons/md";
import { UserContext } from "../pages/_app";

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
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const StudentParameters: React.FC<Props> = () => {
  const userContext = useContext(UserContext);

  console.log(userContext);

  return (
    <Box style={{ position: "relative", height: "100%", width: "100%" }}>
      <Box
        style={{
          color: "black",
          fontSize: "100%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {Object.keys(userContext.currCompetencies).map((parameterName) => (
          <HStack
            key={capitalizeFirstLetter(parameterName)}
            style={{ position: "relative", marginTop: "24px" }}
          >
            <p
              style={{
                marginRight: "10px",
                textAlign: "right",
                width: "250px",
              }}
            >
              <strong>{capitalizeFirstLetter(parameterName)}</strong>{" "}
              proficiency:
            </p>
            <Box style={{ width: "350px" }}>
              <Slider
                aria-label="slider-ex-4"
                min={0}
                max={1}
                value={userContext.currCompetencies[parameterName] as number}
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
        <br />
        <hr />
        {Object.keys(userContext.currCompetencies).map((parameterName) => (
          <HStack
            key={capitalizeFirstLetter(parameterName)}
            style={{ position: "relative", marginTop: "24px" }}
          >
            <p
              style={{
                marginRight: "10px",
                textAlign: "right",
                width: "250px",
              }}
            >
              <strong>{capitalizeFirstLetter(parameterName)}</strong> target
              age:
            </p>
            <Box style={{ width: "350px" }}>
              <Slider
                aria-label="slider-ex-4"
                min={0}
                max={20}
                value={userContext.currTargetAges[parameterName]}
                isDisabled
              >
                <SliderTrack bg="red.100">
                  <SliderFilledTrack bg="blueviolet" />
                </SliderTrack>
                <SliderThumb boxSize={6}>
                  <Box color="blue" />
                </SliderThumb>
                <SliderMark value={0} mt="2" ml="-2.5" fontSize="sm">
                  2
                </SliderMark>
                <SliderMark value={4} mt="2" ml="-2.5" fontSize="sm">
                  4
                </SliderMark>
                <SliderMark value={8} mt="2" ml="-2.5" fontSize="sm">
                  8
                </SliderMark>
                <SliderMark value={12} mt="2" ml="-2.5" fontSize="sm">
                  12
                </SliderMark>
                <SliderMark value={16} mt="2" ml="-2.5" fontSize="sm">
                  16
                </SliderMark>
                <SliderMark value={20} mt="2" ml="-2.5" fontSize="sm">
                  20
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
