import React from "react";

const TicketCard = ({ session = null }) => {
  return (
    <div className="p-4 bg-white shadow-md">
      <p>Your ticket ID: {session.identity.id}</p>
    </div>
  );
};

export default TicketCard;
