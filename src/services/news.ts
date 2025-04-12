import perf from "@react-native-firebase/perf";
import firestore from "@react-native-firebase/firestore";

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
    const payload = {
      authorID,
      postContent,
      postDate,
      postExcerpt,
      postStatus,
      postTitle,
    };

    const payloadSize = JSON.stringify(payload).length;

    trace.putMetric("payload_size_bytes", payloadSize);

    const response = await firestore().collection("news").add(payload);

    trace.putAttribute("status", "success");

    return response;
  } catch (e: any) {
    trace.putAttribute("status", "error");
    trace.putAttribute("error_message", e.message ?? "unknown");
    throw new Error(e);
  } finally {
    await trace.stop();
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
    const payload = {
      postContent,
      postExcerpt,
      postStatus,
      postTitle,
    };

    const payloadSize = JSON.stringify(payload).length;
    trace.putMetric("payload_size_bytes", payloadSize);

    const response = await firestore()
      .collection("news")
      .doc(postID)
      .update(payload);

    trace.putAttribute("status", "success");

    return response;
  } catch (e: any) {
    trace.putAttribute("status", "error");
    trace.putAttribute("error_message", e.message ?? "unknown");
    throw new Error(e);
  } finally {
    await trace.stop();
  }
};

export const deleteNewsInFirebase = async (postID: string) => {
  const trace = await perf().startTrace("fs_delete_news_trace");

  try {
    const response = await firestore().collection("news").doc(postID).delete();

    trace.putAttribute("status", "success");

    return response;
  } catch (e: any) {
    trace.putAttribute("status", "error");
    trace.putAttribute("error_message", e.message ?? "unknown");
    throw new Error(e);
  } finally {
    await trace.stop();
  }
};
