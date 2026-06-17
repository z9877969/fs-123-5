'use client';
import styles from './LoadMoreBtn.module.css';


interface LoadMoreBtnProps {
  onClick: () => void;      // ← функція без аргументів, нічого не повертає
  isLoading?: boolean;      // ← необов'язковий булевий параметр
}

export const LoadMoreBtn = ({ onClick, isLoading = false }: LoadMoreBtnProps) => {
  return (
    <div className={styles.container}>
      <button onClick={onClick} disabled={isLoading} className={styles.button}>
        {isLoading ? 'Завантаження...' : 'Load More'}
      </button>
    </div>
  );
};