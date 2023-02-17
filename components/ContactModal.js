import {
  Flex,
  Text,
  Button,
  // FormHelperText,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Textarea,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useToast,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const defaultValues = { name: "", email: "", message: "" };

const ContactModal = ({ onClose, isOpen }) => {
  const toast = useToast();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid, isSubmitting, isSubmitSuccessful },
  } = useForm({ mode: "onChange", defaultValues });

  useEffect(() => {
    if (!isSubmitSuccessful) return;
    // console.log("reseting values");
    reset(defaultValues);
  }, [isSubmitSuccessful, reset]);

  const handleSendMessage = async (values) => {
    // For testing values
    // console.log("Testing...");
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     console.log(values);
    //     onClose();
    //     toast({
    //       title: "Message sent",
    //       description: "Thanks! I'll be in touch soon.",
    //       status: "success",
    //       duration: 9000,
    //       isClosable: true,
    //     });
    //     resolve();
    //   }, 3000);
    // });

    const res = await fetch("/api/sendgrid", {
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const { error } = await res.json();
    if (error) {
      console.log(error);
      toast({
        title: "Something went wrong",
        description:
          "Oops! The message was not sent and I'll look into the issue. In the meantime, you can reach out to me at john-zhuangzhuang-li@outlook.com.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      return;
    }
    toast({
      title: "Message sent",
      description: "Thank you! I'll be in touch soon.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
    onClose();
  };

  return (
    <>
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        closeOnOverlayClick={!isSubmitting}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Get in touch</ModalHeader>
          <ModalCloseButton isDisabled={isSubmitting} />
          <ModalBody>
            <Flex
              flexDirection="column"
              gap={6}
              as="form"
              id="contact"
              onSubmit={handleSubmit(handleSendMessage)}
            >
              <Text>
                Kindly provide your message and email address for prompt
                follow-up. Thank you for reaching out!
              </Text>
              <FormControl
                isInvalid={errors.name}
                isRequired
                isDisabled={isSubmitting}
              >
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  id="name"
                  placeholder="Your name"
                  focusBorderColor="purple.500"
                  {...register("name", {
                    required: "This field is required",
                    maxLength: {
                      value: 30,
                      message: "Please enter less than 30 characters",
                    },
                  })}
                />
                {errors.name ? (
                  <FormErrorMessage>{errors.name.message}</FormErrorMessage>
                ) : (
                  ""
                  // <FormHelperText>Your name</FormHelperText>
                )}
              </FormControl>
              <FormControl
                isInvalid={errors.email}
                isRequired
                isDisabled={isSubmitting}
              >
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  placeholder="Your email address"
                  focusBorderColor="purple.500"
                  {...register("email", {
                    required: "This field is required",
                    maxLength: {
                      value: 100,
                      message: "Please enter less than 100 characters",
                    },
                    pattern: {
                      value:
                        /^[a-zA-Z0-9_!#$%&’*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$/,
                      message: "Please enter a valid email",
                    },
                  })}
                />
                {errors.email ? (
                  <FormErrorMessage>{errors.email.message}</FormErrorMessage>
                ) : (
                  ""
                  // <FormHelperText>Email address</FormHelperText>
                )}
              </FormControl>
              <FormControl
                isInvalid={errors.message}
                isRequired
                isDisabled={isSubmitting}
              >
                <FormLabel htmlFor="message">Message</FormLabel>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  focusBorderColor="purple.500"
                  resize={{ base: "none", sm: "vertical" }}
                  {...register("message", {
                    required: "This field is required",
                    maxLength: {
                      value: 2000,
                      message: "Please enter less than 2000 characters",
                    },
                  })}
                />
                {errors.message ? (
                  <FormErrorMessage>{errors.message.message}</FormErrorMessage>
                ) : (
                  ""
                  // <FormHelperText>
                  //   Get in touch by leaving a message and your email, I'll be
                  //   sure to reply promptly. Thank you for reaching out!
                  // </FormHelperText>
                )}
              </FormControl>
            </Flex>
          </ModalBody>
          <ModalFooter>
            {/* <Button
              onClick={() =>
                toast({
                  title: "Something went wrong",
                  description:
                    "Oops! I'll look into the issue. In the meantime, you can reach out to me at john-zhuangzhuang-li@outlook.com.",
                  status: "error",
                  duration: 9000,
                  isClosable: true,
                })
              }
            >
              Test
            </Button> */}
            <Button
              form="contact"
              mr={4}
              colorScheme="purple"
              isLoading={isSubmitting}
              isDisabled={isSubmitting || !isValid}
              type="submit"
            >
              Submit
            </Button>
            <Button onClick={onClose} isDisabled={isSubmitting}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ContactModal;
