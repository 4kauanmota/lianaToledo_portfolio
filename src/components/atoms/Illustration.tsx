import styles from "./Illustration.module.scss";

type IllustrationType = {
  date: string;
  image: string;
};

const Illustration = ({ date, image }: IllustrationType) => {
  return (
    <div className={styles.illustration}>
      <img src={image} loading="lazy" />
      <p>{date}</p>
    </div>
  );
};

export default Illustration;
