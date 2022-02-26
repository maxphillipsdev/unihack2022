import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

const Profile = () => {
  return (
    <>
      Fk my ass
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <GridItem w="100%" h="10" bg="blue.500">
          Test
        </GridItem>
        <GridItem w="100%" h="10" bg="blue.500"></GridItem>
        <GridItem w="100%" h="10" bg="blue.500"></GridItem>
        <GridItem w="100%" h="10" bg="blue.500"></GridItem>
        <GridItem w="100%" h="10" bg="blue.500"></GridItem>
      </Grid>
    </>
  );
};

export default Profile;
