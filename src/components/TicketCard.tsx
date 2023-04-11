import React from "react";

const TicketCard = ({ session = null }) => {
  return (
    <div className="p-4">
      <p>Your ticket ID: {session?.identity.id}</p>
    </div>
  );
};

export default TicketCard;
