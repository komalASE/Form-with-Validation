import React from 'react';
import Form from './components/Form';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Form</h1>
      <Form />
    </div>
  );
}

export default App;
