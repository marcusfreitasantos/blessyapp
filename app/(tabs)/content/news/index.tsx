import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "@/contexts/currentUserContext";
import CreateContentForm from "@/components/CreateContentForm";
import { useLocalSearchParams } from "expo-router";
import { getChurchSingleContentById } from "@/services/churches";

const News = () => {
  const { postId } = useLocalSearchParams();
  const { userObj } = useContext(GlobalContext);
  const [contentData, setContentData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getContent = async () => {
    try {
      setIsLoading(true);
      const req = await getChurchSingleContentById(
        userObj.userID.toString(),
        "news",
        postId
      );
      if (req?.status === 200) {
        setContentData(req.data);
      }
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
      postId={postId ? Number(postId) : 0}
      contentData={contentData}
    />
  );
};

export default News;
