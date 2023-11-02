import { Box, Button, Center, Icon, Text, VStack } from "@chakra-ui/react";
import Card from "../../../components/Card";
import { BsPatchCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const RegisterSuccess = () => {
  return (
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
            Successfully Registered
          </Text>
          <Text textStyle="p2" color="black.60" textAlign="center">
            Hurray! You have successfully created your account. Enter the app to
            explore all it’s features.
          </Text>
          <Box w="full">
            <Link to="/signin">
              <Button w="full">Enter the App</Button>
            </Link>
          </Box>
        </VStack>
      </Card>
    </Center>
  );
};

export default RegisterSuccess;
