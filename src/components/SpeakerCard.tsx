import React from "react";

const SpeakerCard = ({ talk }) => {
  return (
    <div className="p-4 bg-white text-gray-600 shadow-md">
      <img
        src={`/speakers/${talk.slug}.png`}
        alt={talk.speaker}
        className="w-full h-48 object-cover"
      />
      <h3 className="text-xl font-semibold">{talk.speaker}</h3>
      <p>{talk.position}</p>
      <p>{talk.company}</p>
    </div>
  );
};

export default SpeakerCard;
