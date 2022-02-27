import { Container, Heading, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import React from "react";

const MCQ: React.FC<{
  question?: string;
  options?: string[];
  setAnswer?: any;
}> = ({ question = "Questions?", options = ["1", "2", "3"], setAnswer }) => {
  return (
    <>
      <Container sx={{ backgroundColor: "white" }} width="3xl" padding={6}>
        <Heading>{question}</Heading>
        <br />
        <RadioGroup>
          <Stack spacing={5} direction="column">
            {options.map((option) => {
              return (
                <Radio
                  key={option}
                  value={option}
                  onChange={(event) =>
                    setAnswer && setAnswer(event.target.value)
                  }
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
