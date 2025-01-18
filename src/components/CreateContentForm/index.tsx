import { useForm, Controller } from "react-hook-form";
import React, { useState } from "react";
import LoadingSpinner from "../LoadingSpinner";
import {
  HStack,
  Text,
  Textarea,
  VStack,
  TextareaInput,
} from "@gluestack-ui/themed";
import InputComponent from "../Input";
import ButtonComponent from "../Button";
import { router } from "expo-router";

type Inputs = {
  title: string;
  content: string;
};

const CreateContentForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const requiredFieldMsg = "Campo obrigatório";
  const formDefaultValues = {
    title: "",
    content: "",
  };

  const onSubmit = (data: Inputs) => {
    console.log(data);
    reset(formDefaultValues);
  };

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: formDefaultValues,
  });

  return (
    <>
      {isLoading ? (
        <LoadingSpinner spinnerText="Publicando conteúdo..." />
      ) : (
        <VStack
          space="md"
          reversed={false}
          bg="white"
          w="100%"
          p={20}
          rounded={3}
          hardShadow={"1"}
        >
          <Controller
            name="title"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <InputComponent
                inputType="text"
                inputPlaceholder="Título da notícia"
                inputValue={value}
                onChangeText={(value) => onChange(value)}
              />
            )}
          />
          {errors.title && <Text color="$error600">{requiredFieldMsg}</Text>}

          <Controller
            name="content"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <Textarea
                size="md"
                isReadOnly={false}
                isInvalid={false}
                isDisabled={false}
              >
                <TextareaInput
                  numberOfLines={40}
                  placeholder="Conteúdo da notícia"
                  placeholderTextColor="$secondary300"
                  color="$secondary400"
                  value={value}
                  onChangeText={onChange}
                />
              </Textarea>
            )}
          />
          {errors.title && <Text color="$error600">{requiredFieldMsg}</Text>}

          <HStack justifyContent="space-between">
            <ButtonComponent
              onPress={() => router.back()}
              buttonText="Cancelar"
              action="secondary"
              variant="outline"
              rounded
            />
            <ButtonComponent
              onPress={handleSubmit(onSubmit)}
              buttonText="Publicar"
              action="primary"
              variant="solid"
              rounded
            />
          </HStack>
        </VStack>
      )}
    </>
  );
};

export default CreateContentForm;
