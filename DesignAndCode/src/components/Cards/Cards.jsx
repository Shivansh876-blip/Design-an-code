import styles from "./Cards.module.css";

const Cards = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
        </div>
      </div>
      <div className={styles.btn}>
        {" "}
        <button>Browse Course</button>
      </div>
    </>
  );
};

export default Cards;
