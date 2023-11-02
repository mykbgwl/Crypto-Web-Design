import {
  Box,
  Button,
  Center,
  Container,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import Card from "../../../components/Card";
import { BsPatchCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const ForgotPasswordSent = () => {
  return (
    <Container>
      <Center minH="100vh">
        <Card
          p={{
            base: "4",
            md: "10",
          }}
          showCard={true}
        >
          <VStack spacing={6}>
            <Icon as={BsPatchCheckFill} boxSize="48px" color="green" />
            <Text textStyle="h4" color="p.black" fontWeight="medium">
              Successfully Sent
            </Text>
            <Text textStyle="p2" color="black.60" textAlign="center">
              We have sent instructions on how to reset your password to{" "}
              <Box as="b" color="p.black">
                jenny.wilson@gmail.com
              </Box>
              . Please follow the instructions from the email.
            </Text>
          </VStack>
        </Card>
      </Center>
    </Container>
  );
};

export default ForgotPasswordSent;
