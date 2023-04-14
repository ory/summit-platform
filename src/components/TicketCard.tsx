import React from "react";

const TicketCard = ({ session = null }) => {
  return (
    <div className="p-4">
      <p>Your email: {session?.identity.traits.email}</p>
    </div>
  );
};

export default TicketCard;
