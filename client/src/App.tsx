import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch('/api/users')
      .then((res: any) => res.json())
      .then(users => {
        setUsers(users);
      });
  }, []);

  console.log(users);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {users && (
          <div>
            <label>👇 Fetched user data from express api 👇</label>
            <pre>{JSON.stringify(users)}</pre>
          </div>
        )}
      </header>
    </div>
  );
};

export default App;
