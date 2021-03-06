import {
  AiFillBell,
  AiFillHome,
  AiOutlineInbox,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import {
  Avatar,
  Box,
  Button,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

import { AiFillDashboard } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { FcGraduationCap } from "react-icons/fc";
import { ImStatsBars } from "react-icons/im";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
        style={{ position: "fixed", zIndex: 10 }}
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack display="flex" spacing={3} alignItems="center">
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("gray.800", "inherit")}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />
                <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
                  Dashboard
                </Button>
                <Button w="full" variant="ghost" leftIcon={<AiFillDashboard />}>
                  Therapy Dashboard
                </Button>
              </VStack>
            </Box>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <img src="https://i.ibb.co/tLdhGf8/learnery.png" width="35" />
              <VisuallyHidden>Choc</VisuallyHidden>
            </chakra.a>

            <HStack spacing={3} display={{ base: "none", md: "inline-flex" }}>
              <Link href="/">
                <Button variant="ghost" size="sm" style={{ fontSize: "130%" }}>
                  Learnery
                </Button>
              </Link>
              <Button
                variant="ghost"
                leftIcon={<AiFillDashboard />}
                size="sm"
                onClick={() => {
                  location.href = "http://localhost:3333";
                }}
                style={{ fontSize: "105%", color: "#1d3557" }}
              >
                Therapy
              </Button>
            </HStack>
          </HStack>
          <HStack
            spacing={3}
            display={mobileNav.isOpen ? "none" : "flex"}
            alignItems="center"
          >
            {/* <Box style={{ fontSize: "75%", color: "darkslategray" }}>
              Welcome Max
            </Box> */}
            {/* <FcGraduationCap size={24} /> */}
            <Link href="/student-profile">
              <Button variant="ghost">
                <ImStatsBars style={{ cursor: "pointer", fontSize: "200%" }} />
              </Button>
            </Link>
            <Link href="/student-profile">
              <Avatar
                style={{ cursor: "pointer", border: "3px solid #48cae4" }}
                size="md"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoi5pz196m8gkB1QJO27yu1mz8WC-Qa0E3fsU2_VVTvj3LerDF42NNzXdM76RFs2sfDEY&usqp=CAU"
              />
            </Link>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
}
