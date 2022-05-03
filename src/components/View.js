import React from "react";

const View = (props) => {
  return (
    <div className="view">
      <div className="notepad">
        <p>
          id: <span>{props.id}</span>
        </p>
        <p>
          original word: <span>{props.or_word}</span>
        </p>
        <p>
          translated word: <span>{props.tr_word}</span>
        </p>
      </div>
    </div>
  );
};

export default View;
