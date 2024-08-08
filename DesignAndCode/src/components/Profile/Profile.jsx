import React, { useState, useCallback } from "react";
import styles from "./Profile.module.css";

const Profile = () => {
  const [isSignupVisible, setIsSignupVisible] = useState(false);

  const handleShowSignup = useCallback(() => {
    setIsSignupVisible(true);
  }, []);

  const handleCloseSignup = useCallback(() => {
    setIsSignupVisible(false);
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.cardone}>
            <div className={styles.heading}>
              <h3>UI DESIGN</h3>
              <p>Certificate</p>
            </div>
            <img
              src="/assets/Images/Profile/swiftui-logo.svg"
              alt="UI Design Certificate"
            />
          </div>
          <div className={styles.cardTwo}>
            <div className={styles.heading}>
              <h3>UI DESIGN</h3>
              <p>Certificate</p>
            </div>
            <img
              src="/assets/Images/Profile/swiftui-logo.svg"
              alt="UI Design Certificate"
            />
          </div>
          <div className={styles.cardThree}>
            <div className={styles.heading}>
              <h3>UI DESIGN</h3>
              <p>Certificate</p>
            </div>
            <img
              src="/assets/Images/Profile/swiftui-logo.svg"
              alt="UI Design Certificate"
            />
          </div>
        </div>
        <div className={styles.right}>
          <h3>Create a profile</h3>
          <h1>Get certificates</h1>
          <p>
            After passing a test, we’ll award you with an online certificate.
            You can add them to your profile after completing the courses.
          </p>
          <button onClick={handleShowSignup}>Create Account</button>
        </div>
      </div>

      {isSignupVisible && (
        <>
          <div className={styles.overlay} onClick={handleCloseSignup} />
          <div className={styles.signup}>
            <h1>Sign Up</h1>
            <p>Access to 300+ hours of courses, tutorials, and source files</p>
            <form action="/submit-signup" method="post">
              <div className={styles.inputGroup}>
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email address"
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button type="submit">Sign Up</button>
            </form>
            <p className={styles.terms}>
              By clicking on Sign Up, you agree to our{" "}
              <a href="#">Terms of Service</a> and{" "}
              <a href="#">Privacy Policy</a>.
            </p>
            <p className={styles.signinLink}>
              Already have an account? <a href="#">Sign In</a>
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
