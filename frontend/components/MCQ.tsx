import {
  Container,
  Heading,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { TiTick, TiTimes } from "react-icons/ti";

const MCQ: React.FC<{
  question?: string;
  options?: string[];
  setAnswer?: any;
  correctAnswer?: string;
  showCorrectAnswer?: boolean;
}> = ({
  question = "Questions?",
  options = ["1", "2", "3"],
  setAnswer,
  correctAnswer,
  showCorrectAnswer,
}) => {
  const [currClick, setCurrClick] = useState("");
  return (
    <>
      <Container sx={{ backgroundColor: "white" }} width="3xl" padding={4}>
        <Heading>{question}</Heading>
        <RadioGroup>
          <Stack spacing={3} direction="column">
            {options.map((option) => {
              if (showCorrectAnswer) {
                if (currClick === correctAnswer && option === correctAnswer) {
                  // Correct state after submit
                  return (
                    <Radio
                      isReadOnly={showCorrectAnswer}
                      colorScheme="green"
                      isChecked
                      key={option}
                      value={option}
                    >
                      <Stack direction="row">
                        <Text>{option}</Text>
                        <TiTick size={24} fill="green" />
                      </Stack>
                    </Radio>
                  );
                } else if (option === correctAnswer) {
                  return (
                    <Radio
                      isReadOnly={showCorrectAnswer}
                      colorScheme="green"
                      isChecked
                      key={option}
                      value={option}
                    >
                      <Stack direction="row">
                        <Text>{option}</Text>
                        <TiTick size={24} fill="green" />
                      </Stack>
                    </Radio>
                  );
                } else if (
                  currClick !== correctAnswer &&
                  currClick === option
                ) {
                  // wrong
                  return (
                    <Radio
                      isReadOnly={showCorrectAnswer}
                      colorScheme="red"
                      key={option}
                      value={option}
                    >
                      <Stack direction="row">
                        <Text>{option}</Text>
                        <TiTimes size={24} fill="red" />
                      </Stack>
                    </Radio>
                  );
                }
              }
              return (
                <Radio
                  key={option}
                  value={option}
                  isReadOnly={showCorrectAnswer}
                  onChange={(event) => {
                    setAnswer && setAnswer(event.target.value);
                    setCurrClick(event.target.value);
                  }}
                >
                  {option}
                </Radio>
              );
            })}
          </Stack>
        </RadioGroup>
      </Container>
      <br />
    </>
  );
};

export default MCQ;
