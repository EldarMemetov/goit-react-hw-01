import './App.css';

import {Profile} from './components/Profile/Profile';
import user from './components/data/userData.json';

import { FriendList } from './components/FriendList/FriendList';
import friends from './components/data/friends.json';

import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';
import transactions from './components/data/transactions.json';

const App = () => {
  return (
    <div className="container">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar} 
        stats={user.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
export default App; 
