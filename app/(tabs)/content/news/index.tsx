import { useContext } from "react";
import { GlobalContext } from "@/contexts/currentUserContext";
import CreateContentForm from "@/components/CreateContentForm";

const News = () => {
  const { userObj } = useContext(GlobalContext);
  return <CreateContentForm userId={userObj.userID} />;
};

export default News;
