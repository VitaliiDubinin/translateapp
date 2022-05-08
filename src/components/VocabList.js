import React from "react";

const VocabList = (props) => {
  return (
    <>
      {/* <ol> */}
      {props.data.map((word) => (
        <li key={word.id}>
          {word.or_word} | {word.tr_word}
        </li>
      ))}
      {/* </ol> */}
    </>
  );
};

export default VocabList;
