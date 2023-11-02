import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Card from "../../../components/Card";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Field, Form, Formik } from "formik";
import { object, string } from "yup";
import { Link } from "react-router-dom";

const forgotPasswordValidationSchema = object({
  email: string().email("Email is invalid").required("Email is required"),
});

const ForgotPassword = () => {
  return (
    <Container>
      <Center minH="100vh">
        <Card>
          <Link to="/signin">
            <Icon boxSize={6} as={AiOutlineArrowLeft} />
          </Link>
          <Text mt="4" fontWeight="medium" textStyle="h1">
            Forgot Password
          </Text>
          <Text textStyle="p2" color="black.60" mt="4">
            Enter your email address for which account you want to reset your
            password.
          </Text>
          <Formik
            initialValues={{
              email: "",
            }}
            onSubmit={(values) => {}}
            validationSchema={forgotPasswordValidationSchema}
          >
            {() => (
              <Form>
                <Stack mt="8" spacing={6}>
                  <Field name="email">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input
                          {...field}
                          name="email"
                          type="email"
                          placeholder="Enter your email...."
                        />{" "}
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Button variant="outline" type="submit">
                    Reset Password
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </Card>
      </Center>
    </Container>
  );
};

export default ForgotPassword;
