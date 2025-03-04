import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "@/contexts/currentUserContext";
import CreateContentForm from "@/components/CreateContentForm";
import { useLocalSearchParams } from "expo-router";
import { getChurchSingleContentFromFirebaseById } from "@/services/churches";

const News = () => {
  const postData = useLocalSearchParams();
  const contentId =
    typeof postData.contentId === "string" ? postData.contentId : "";
  const { userObj } = useContext(GlobalContext);
  const [contentData, setContentData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getContent = async () => {
    try {
      setIsLoading(true);
      const res = await getChurchSingleContentFromFirebaseById(
        "news",
        contentId
      );

      if (!res?.includes("Erro")) setContentData(res);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getContent();
  }, []);

  if (isLoading) return;

  return (
    <CreateContentForm
      userId={userObj.userID}
      postId={contentId ?? 0}
      contentData={contentData}
    />
  );
};

export default News;
