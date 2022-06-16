import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";

const Profile = () => {
  const { getUserInfo, user } = useContext(UserContext);

  useEffect(() => {
    getUserInfo();
  }, []);

  if (!user) {
    return <span>Cargando...</span>;
  }
  const order = user.orderIds.map(order=> {
   return(
    <>
    <p>{order.status}</p>
    <p>{order.productIds.map(product => product.name)}</p>
    </>

   ) 
  }
    )
  return <div>Profile {user.name}
  <h2>Orders</h2>
  {order}
  </div>;
};

export default Profile;
