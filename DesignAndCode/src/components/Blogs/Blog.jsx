import styles from "./Blog.module.css";

const Blog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.one}>
            <img src="" alt="d" />
            <h2>Pablo Stanley</h2>
            <h6>Designer at Blush</h6>
            <h4>Meng To's book totally changed my design workflow. It even inspired me to start design workshops and YouTube tutorials.</h4>
      </div>
      <div className={styles.two}>
      <img src="" alt="d" />
            <h2>Pablo Stanley</h2>
            <h6>Designer at Blush</h6>
            <h4>Meng To's book totally changed my design workflow. It even inspired me to start design workshops and YouTube tutorials.</h4>
      </div>
      <div className={styles.three}>
        <h5>Trusted by teams</h5>
        <h1>120,000 people</h1>
        <p>
          Many startups look for designers who code and developers who design.
          They use our courses to help train new hires and expand skill sets.
        </p>
        <button>
            More Stories
        </button>
      </div>
    </div>
  );
};

export default Blog;
