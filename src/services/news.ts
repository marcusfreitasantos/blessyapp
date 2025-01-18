import axios from "axios";
import perf from "@react-native-firebase/perf";

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
