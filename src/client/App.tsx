import React, { useState, Suspense } from 'react';
import styles from './styles/App.module.css';

const UserInfoCard = React.lazy(() => import(/*  webpackChunkName: "UserInfoCard" */'./components/UserInfoCard'));
function App(): JSX.Element {
  const [counter, setCounter] = useState(0);
  const [showUser, setShowUser] = useState(false);
  return (
    <div className={styles['App-Main-Container']}>
      <h1>Hello React</h1>
      <button
        type="button"
        onClick={() => {
          setCounter((preVal) => preVal - 1);
        }}
      >
        -
      </button>
      {counter}
      <button
        type="button"
        onClick={() => {
          setCounter((preVal) => preVal + 1);
        }}
      >
        +
      </button>
      <br />
      <button
        type="button"
        onClick={() => {
          setShowUser(true);
        }}
      >
        Show user
      </button>
      {showUser && (
        <Suspense fallback={<h4>Loading Component...</h4>}>
          <UserInfoCard />
        </Suspense>
      )}
    </div>
  );
}

export default App;
