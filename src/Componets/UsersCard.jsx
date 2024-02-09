import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UsersCard = ({ card }) => {
//   console.log(card, "from card");
  return (
    <div>
      <div className="card w-96 h-[500px] bg-base-100 shadow-2xl">
        <figure>
          <div className="avatar my-5">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={card?.image} />
            </div>
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title">First Name : <Link className="text-blue-400" to={`/users/${card?.id}`}>
          {card?.firstName}
          </Link></h2>

          <h2>Last Name: {card?.lastName}</h2>
          <h2>Email : {card?.email}</h2>

          <h1 className="text-center font-bold">Address</h1>
          <p>Street : {card?.address?.address}</p>
          <p>Suite : {card?.address?.state}</p>
          <p>City : {card?.address?.city}</p>


          <p className="mt-4"> Company Name : {card?.company?.name}</p>
          
        </div>
      </div>
    </div>
  );
};

UsersCard.propTypes = {
  card: PropTypes.node,
};

export default UsersCard;
