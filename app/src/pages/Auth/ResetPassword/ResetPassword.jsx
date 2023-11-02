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
import { object, ref, string } from "yup";
import { Link } from "react-router-dom";

const resetPasswordValidationSchema = object({
  password: string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  repeatPassword: string()
    .oneOf([ref("password"), null], "Passwords must match")
    .required("Repeat password is required"),
});

const ResetPassword = () => {
  return (
    <Container>
      <Center minH="100vh">
        <Card>
          <Text mt="4" fontWeight="medium" textStyle="h1">
          Reset Password
          </Text>
          <Text textStyle="p2" color="black.60" mt="4">
          Enter your new password.
          </Text>
          <Formik
            initialValues={{
              password: "",
              repeatpassword: "",
            }}
            onSubmit={(values) => {}}
            validationSchema={resetPasswordValidationSchema}
          >
            {() => (
              <Form>
                <Stack mt="8" spacing={6}>
                  <Field name="password">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor="password">New Password</FormLabel>
                        <Input
                          {...field}
                          name="password"
                          type="password"
                          placeholder="Enter your new password...."
                        />{" "}
                        <FormErrorMessage>{meta.error}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name="repeatPassword">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel htmlFor="repeatPassword">
                          Repeat New Password
                        </FormLabel>
                        <Input
                          {...field}
                          name="repeatPassword"
                          type="password"
                          placeholder="Enter your repeat Password...."
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

export default ResetPassword;
