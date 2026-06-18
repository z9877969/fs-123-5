import styles from "./GeneralInfo.module.css";

type GeneralInfoProps = {
  time: number;
  calories?: number | null;
};

export default function GeneralInfo({
  time,
  calories,
}: GeneralInfoProps) {
  return (
    <div className={styles.meta}>
      <span>⏱ {time} min</span>
      {calories && <span>🔥 {calories} kcal</span>}
    </div>
  );
}