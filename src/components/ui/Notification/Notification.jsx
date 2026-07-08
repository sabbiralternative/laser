import { Fragment, useEffect, useState } from "react";
import { setShowNotification } from "../../../redux/features/global/globalSlice";
import { useDispatch, useSelector } from "react-redux";
import useGetNotification from "../../../hooks/useGetNotification";

const Notification = () => {
  const { notification, isFetchingNotification, isFetched } =
    useGetNotification();

  const dispatch = useDispatch();
  const [filteredNotification, setFilteredNotification] = useState([]);
  const { showNotification } = useSelector((state) => state?.global);

  useEffect(() => {
    const storedNotificationId =
      JSON.parse(localStorage.getItem("notificationId")) || [];
    if (
      (!storedNotificationId || storedNotificationId?.length === 0) &&
      notification?.length > 0
    ) {
      dispatch(setShowNotification(true));

      setFilteredNotification(notification);
    }
    if (
      notification?.length > 0 &&
      storedNotificationId &&
      storedNotificationId?.length > 0 &&
      !showNotification
    ) {
      const filteredNotifications = notification.filter(
        (notif) => !storedNotificationId.some((nId) => nId.id == notif.id),
      );

      if (filteredNotifications?.length > 0) {
        setFilteredNotification(filteredNotifications);
        dispatch(setShowNotification(true));
      }
    }
  }, [
    notification,
    showNotification,
    isFetched,
    isFetchingNotification,
    dispatch,
  ]);
  return (
    <Fragment>
      {showNotification && filteredNotification?.length > 0 && (
        <div className="row">
          <div className="col-md-12">
            <div>
              <div className="marquee-box">
                <h4>
                  <i className="mdi mdi-microphone-outline" />
                  News
                </h4>
                <marquee>
                  {filteredNotification?.map((item) => (
                    <p
                      key={item?.id}
                      className="flex gap-1 font-bold text-xs mr-[100vw] "
                    >
                      {item?.text}
                    </p>
                  ))}
                </marquee>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Notification;
