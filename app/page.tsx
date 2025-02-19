
import Welcome from "../app/components/welcome"
import Addcustomer from "../app/components/addcustomer"
import Sharegoogle from "../app/components/sharegooglereview"
import Notifications from "../app/components/notifications"
const APP = () => {

  return (
<div className="hero"> 

  
    < Welcome />
    

    <div>
    < Addcustomer />
    </div>
      
    <div>
    < Sharegoogle />
    </div>
      
      <div>
      < Notifications />
      </div>
      
</div>
  
  
  );
    };

export default APP;