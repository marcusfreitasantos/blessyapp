import axios from "axios";
import perf from "@react-native-firebase/perf";
import firestore from "@react-native-firebase/firestore";

export const createNews = async (
  title: string,
  content: string,
  userId: number
) => {
  const trace = await perf().startTrace("create_news_trace");
  try {
    const response = axios.post(
      `${process.env.EXPO_PUBLIC_BASE_URL}/news/create`,
      {
        title,
        content,
        userId,
      }
    );
    return response;
  } catch (error) {
    console.log("Error: ", error);
  } finally {
    await trace.stop();
  }
};

export const updateNews = async (
  title: string,
  content: string,
  userId: number,
  postId: number
) => {
  const trace = await perf().startTrace("update_news_trace");
  try {
    const response = axios.post(
      `${process.env.EXPO_PUBLIC_BASE_URL}/news/update`,
      {
        title,
        content,
        userId,
        postId,
      }
    );
    return response;
  } catch (error) {
    console.log("Error: ", error);
  } finally {
    await trace.stop();
  }
};

export const deleteNews = async (postId: number, userId: number) => {
  const trace = await perf().startTrace("delete_news_trace");
  try {
    const response = axios.post(
      `${process.env.EXPO_PUBLIC_BASE_URL}/news/delete`,
      {
        postId,
        userId,
      }
    );
    return response;
  } catch (error) {
    console.log("Error: ", error);
  } finally {
    await trace.stop();
  }
};

//FIREBASE
export const createNewsInFirebase = async (
  authorID: string,
  postContent: string,
  postDate: string,
  postExcerpt: string,
  postStatus: string,
  postTitle: string
) => {
  const trace = await perf().startTrace("fs_create_news_trace");

  try {
    const response = firestore().collection("news").add({
      authorID,
      postContent,
      postDate,
      postExcerpt,
      postStatus,
      postTitle,
    });

    return response;
  } catch (e: any) {
    throw new Error(e);
  } finally {
    trace.stop();
  }
};

export const updateNewsInFirebase = async (
  postID: string,
  postContent: string,
  postExcerpt: string,
  postStatus: string,
  postTitle: string
) => {
  const trace = await perf().startTrace("fs_update_news_trace");

  try {
    const response = firestore().collection("news").doc(postID).update({
      postContent,
      postExcerpt,
      postStatus,
      postTitle,
    });

    return response;
  } catch (e: any) {
    throw new Error(e);
  } finally {
    trace.stop();
  }
};
