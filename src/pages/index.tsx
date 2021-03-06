import {
  Button,
  Code,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { CNImage, CNLink } from "@/components/utility";
import Example from "@/images/example.png";

const Home: NextPage = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <Flex
      direction="column"
      minW="100vw"
      minH="100vh"
      bg="whiteAlpha"
      justifyContent={"center"}
      alignItems={"center"}
      gap="1.5rem"
      px="2rem"
    >
      <CNLink
        href="https://github.com/freeman-jiang/chakra-next-template"
        target={"_blank"}
      >
        <Button pos="fixed" top="1rem" right="1rem" colorScheme={"redwood"}>
          Use this template
        </Button>
      </CNLink>
      <VStack textAlign={"center"}>
        <Heading fontWeight={500} fontSize="2.75rem">
          chakra-next-template
        </Heading>
        <Text maxW={"30rem"} fontSize="1.1rem">
          The easiest way to start building a scalable project with TypeScript,
          Next.js, & Chakra UI!
        </Text>
      </VStack>
      <Stack
        gap={{ base: 0, md: 2 }}
        alignItems={"center"}
        direction={{ base: "column", md: "row" }}
      >
        <Button
          colorScheme={"redwood"}
          aria-label="Toggle color mode"
          onClick={toggleColorMode}
        >
          Toggle color mode
        </Button>
        <Button variant={"custom"} shadow={"custom"}>
          {"I'm a custom variant!"}
        </Button>
        <CNLink fontWeight={300} href="/nowhere" as="button">
          {"I'm a Chakra + Next Link!"}
        </CNLink>
      </Stack>

      <HStack spacing={4}>
        <CNImage w="4rem" src={Example} />
        <Text>
          I{"'"}m a Next.js optimized image that takes <Code>BoxProps</Code>
        </Text>
      </HStack>
    </Flex>
  );
};

export default Home;
