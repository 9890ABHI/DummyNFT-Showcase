import React from "react";
import assets from "../assets";
import styles from "../styles/Global";

const FeatureCard = ({ iconText, iconUrl }) => (
  <>
    <div className={styles.featureCard}>
      <img src={iconUrl} alt="icon" className={styles.featureImg} />
      <p className={styles.featureText}>{iconText}</p>
    </div>
  </>
);
const Feature = () => {
  return (
    <>
      <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
        <div className={`${styles.subSection} flex-col text-center`}>
          <div className="">
            <h1 className={`${styles.h1Text} ${styles.whiteText}`}>
              Technologies
            </h1>
            <p className={`${styles.pText} ${styles.whiteText}`}>
              ProNef has been devloped using a cross-platform technology, React
              native.
            </p>
          </div>
          <div className={styles.flexWrap}>
            <FeatureCard iconUrl={assets.react} iconText="React Native" />
            <FeatureCard iconUrl={assets.javascript} iconText="JavaScript" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
