import { useState, useContext, useEffect } from "react";
import { GlobalContext } from "@/contexts/currentUserContext";

import NotificationsMenu from "@/components/NotificationsMenu";
import { getUserNotifications } from "@/services/users";
import LoadingSpinner from "@/components/LoadingSpinner";
import HeaderDefault from "@/components/DefaultHeader";

const Notifications = () => {
  const { userObj } = useContext(GlobalContext);

  const [userNotifications, setUserNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUserNotificationsFromApi = async () => {
    try {
      setIsLoading(true);
      const res = await getUserNotifications(userObj.userID);
      setUserNotifications(res?.data);
    } catch (error) {
      console.log("Error from getUserNotificationsFromApi: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUserNotificationsFromApi();
  }, []);
  return (
    <>
      <HeaderDefault screenName="Notificações" />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <NotificationsMenu notificationsContent={userNotifications} />
      )}
    </>
  );
};

export default Notifications;
