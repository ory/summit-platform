import React from "react";

const TalkCard = ({ talk }) => {
  return (
    <div className="p-4 bg-white shadow-md">
      <a href={`/${talk.slug}`}>
        <h3 className="text-xl font-semibold">{talk.title}</h3>
      </a>
      <p className="text-gray-600">{talk.time}</p>
      <p className="text-gray-600">{talk.speaker}</p>
      <p className="text-gray-600">{talk.company}</p>
      <p className="text-gray-600">{talk.synopsis}</p>
    </div>
  );
};

export default TalkCard;
