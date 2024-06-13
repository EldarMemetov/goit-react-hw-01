
import people from'./FriendList.module.css';
import { FriendListItem } from '../../components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={people.friendList}>
      {friends.map(friend => {
        return <FriendListItem key={friend.id} {...friend} />
      })}
    </ul>
  )
};