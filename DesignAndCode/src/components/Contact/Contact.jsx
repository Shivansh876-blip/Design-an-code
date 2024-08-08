import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.one}>
          <ul>
            <li>Home</li>
            <li>Courses</li>
            <li>Tutorial</li>
            <li>Pricing</li>
            <li>Updates</li>
          </ul>
        </div>
        <div className={styles.two}>
          <ul>
            <li>Download</li>
            <li>Search</li>
            <li>Account</li>
            <li>Licences</li>
            <li>Ui kit</li>
          </ul>
        </div>
        <div className={styles.three}>
          <p>Site made with React, Gatsby,</p>
          <p>Netlify and Contentful. Learn how.</p>
          <p>Design+Code © 2024</p>
          <p>Terms of Service - Privacy Policy</p>
          <p>
            Need help?{" "}
            <a href="mailto:support@example.com?subject=Support%20Request&body=Hello%2C%0A%0APlease%20provide%20details%20about%20your%20issue.%0A%0AThank%20you!">
              Contact Us
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
