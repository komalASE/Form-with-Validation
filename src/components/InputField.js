import React from 'react';
import styles from './main.module.css';

const InputField = ({ label, type, value, onChange, error }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
      />
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

export default InputField;
