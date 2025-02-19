import styles from '../styles/addcustomer.module.css';


const Addcustomer = () => {
  	return (
    		<div className={styles.adcCustomer}>
      			<div className={styles.addCircleParent}>
        				<img className={styles.addCircleIcon} alt="" src="public/Adc customer.jpg" />
        				<div className={styles.addCustomerTo}>Add customer to Marketing List</div>
      			</div>
    		</div>);
};

export default Addcustomer;
