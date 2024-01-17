import { FunctionComponent } from "react";
import styles from "./Frame.module.scss";

const Frame = () => {
  return (
    <div className={styles.div}>
      <div className={styles.timeParent}>
        <div className={styles.time}>9:41 pm</div>
        <div className={styles.border1} />
        <img className={styles.capIcon1} alt="" src="Cap.png" />
        <div className={styles.capacity1} />
        <img className={styles.groupChild} alt="" src="Rectangle 1.png" />
        <img className={styles.wifiPathIcon3} alt="" src="Wifi-path.png" />
        <img className={styles.wifiPathIcon4} alt="" src="Wifi-path.png" />
        <img className={styles.wifiPathIcon5} alt="" src="Wifi-path.png" />
        <img
          className={styles.cellularConnectionPathIcon4}
          alt=""
          src="Cellular-Connection-path.png"
        />
        <img
          className={styles.cellularConnectionPathIcon5}
          alt=""
          src="Cellular-Connection-path.png"
        />
        <img
          className={styles.cellularConnectionPathIcon6}
          alt=""
          src="Cellular-Connection-path.png"
        />
        <img
          className={styles.cellularConnectionPathIcon7}
          alt=""
          src="Cellular-Connection-path.png"
        />
      </div>
      <div className={styles.potentialGrowthWithContainer}>
        <span className={styles.potential}>
          <span>Potential</span>
          <span className={styles.span}>{` `}</span>
        </span>
        <span className={styles.span}>
          <i className={styles.potential}>growth</i>
        </span>
        <span className={styles.potential}>
          <span className={styles.span}>{` `}</span>
          <span>with our tools</span>
        </span>
      </div>
      <div className={styles.ellipseParent}>
        <img className={styles.groupItem} alt="" src="Ellipse 3.png" />
        <div className={styles.morning}>Morning</div>
        <div className={styles.rizkyAkbar}>Rizky Akbar</div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupInner} />
        <div className={styles.videoCreation}>Video Creation</div>
        <img
          className={styles.fluentvideoAdd24RegularIcon1}
          alt=""
          src="fluent_video-add-24-regular.png"
        />


      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupInner} />
        <div className={styles.contentMarketing}>Content Marketing</div>
        <img className={styles.groupIcon3} alt="" src="Group.png" />
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupInner} />
        <div className={styles.analyticsSoftware}>Analytics Software</div>
        <img
          className={styles.carbonanalyticsIcon1}
          alt=""
          src="carbon:analytics.png"
        />
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.groupInner} />
        <div className={styles.socialMediaAdvertising1}>
          Social Media Advertising
        </div>
        <img className={styles.biphoneIcon1} alt="" src="bi:phone.png" />
      </div>
      <div className={styles.rectangleParent1}>
        <div className={styles.groupChild3} />
        <div className={styles.unlockTheFull1}>
          Unlock the full potensial with premium
        </div>
        <b className={styles.premium}>Premium</b>
        <img
          className={styles.akarIconscrown1}
          alt=""
          src="akar-icons:crown.png"
        />
        <div className={styles.groupChild4} />
        <b className={styles.unlock}>{`Unlock `}</b>
      </div>
      <img className={styles.child} alt="" src="Group 6919.png" />
      <img className={styles.item} alt="" src="Group 6920.png" />
    </div>
  );
};

export default Frame;
