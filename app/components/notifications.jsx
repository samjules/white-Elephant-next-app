import styles from '../styles/Notifcations.module.css';


const Notifcations = () => {
  	return (
    		<div className={styles.notificationParentParent}>
      			<div className={styles.notificationParent}>
        				<div className={styles.notificationsParent}>
          					<img className={styles.notificationsIcon} alt="" src="notifications.svg" />
          					<div className={styles.notifications}>Notifications</div>
        				</div>
      			</div>
    		</div>);
};

export default Notifcations;
