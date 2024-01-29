import { NotificationProps } from "pages/notifications";
import React from "react";
import { useNavigate } from "react-router-dom";
import { doc } from "firebase/firestore";
import { db } from "firebaseApp";
import { updateDoc } from "firebase/firestore";

import styles from "./Notification.module.scss";

export default function NotificationBox({
  notification,
}: {
  notification: NotificationProps;
}) {
  const navigate = useNavigate();

  const onClickNotification = async (url: string) => {
    // isRead 업데이트
    const ref = doc(db, "notifications", notification.id);
    await updateDoc(ref, {
      isRead: true,
    });

    // url로 이동
    navigate(url);
  };

  return (
    <div className={styles.notification} key={notification.id}>
      <div onClick={() => onClickNotification(notification?.url)}>
        <div className={styles.notification__flex}>
          <div className={styles.notification__createdAt}>
            {notification?.createdAt}
          </div>
          {notification?.isRead === false && (
            <div className={styles.notification__unread} />
          )}
        </div>
        <div className={styles.notification__content}>
          {notification?.content}
        </div>
      </div>
    </div>
  );
}
