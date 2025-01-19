import { useForm, Controller } from "react-hook-form";
import React, { useEffect, useState, useContext } from "react";
import { ChurchContentGlobalContext } from "@/contexts/currentChurchContent";
import LoadingSpinner from "../LoadingSpinner";
import {
  HStack,
  Text,
  Textarea,
  VStack,
  TextareaInput,
  View,
} from "@gluestack-ui/themed";
import InputComponent from "../Input";
import ButtonComponent from "../Button";
import { router } from "expo-router";
import { createNews } from "@/services/news";
import { Alert } from "react-native";

type Inputs = {
  title: string;
  content: string;
};

type CreateContentFormTypes = {
  userId: number;
  postId: number;
  contentData: {
    postTitle: string;
    singlePostContent: string;
  } | null;
};

const CreateContentForm = ({
  userId,
  postId,
  contentData,
}: CreateContentFormTypes) => {
  const { setCurrentChurchContentCategory } = useContext(
    ChurchContentGlobalContext
  );
  const [isLoading, setIsLoading] = useState(false);
  const requiredFieldMsg = "Campo obrigatório";
  const formDefaultValues = {
    title: contentData ? contentData.postTitle : "",
    content: contentData ? contentData.singlePostContent : "",
  };

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: formDefaultValues,
  });

  const createNewContent = async (title: string, content: string) => {
    try {
      setIsLoading(true);
      const req = await createNews(title, content, userId);
      if (req?.status === 200) {
        Alert.alert("Sucesso!", "Conteúdo publicado.", [
          {
            text: "Ver notícias",
            onPress: () => {
              setCurrentChurchContentCategory("news");
              router.push(`/church/${userId}`);
            },
            style: "default",
          },

          {
            text: "Criar outro conteúdo",
            style: "cancel",
          },
        ]);
      }
    } catch (e) {
      console.log(e);
      Alert.alert("Oops!", "O conteúdo não foi publicado, tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = (data: Inputs) => {
    createNewContent(data.title, data.content);
    reset(formDefaultValues);
  };

  return (
    <>
      {isLoading ? (
        <View h={"100%"}>
          <LoadingSpinner
            spinnerText="Publicando conteúdo..."
            spinnerColor="$blessyPrimaryColor"
          />
        </View>
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
                p={10}
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
