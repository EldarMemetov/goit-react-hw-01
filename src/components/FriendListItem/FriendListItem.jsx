
import clsx from 'clsx';
import styles from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
      <span className={clsx(styles.status, isOnline ? styles.online : styles.offline)}>
        {isOnline ? <span className={styles.onlineText}>online</span> : <span className={styles.offlineText}>offline</span>}
      </span>
    </li>
  );
};

