import user from './Profile.module.css';
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={user.profile}>
      <div className={user.description}>
        <img src={avatar} alt="User avatar" className={user.avatar} />
        <p className={user.name}>{username}</p>
        <p className={user.tag}>@{tag}</p>
        <p className={user.location}>{location}</p>
      </div>

      <ul className={user.stats}>
        <li>
          <span className={user.label}>Followers</span>
          <span className={user.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={user.label}>Views</span>
          <span className={user.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={user.label}>Likes</span>
          <span className={user.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};


