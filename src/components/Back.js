import React from "react";

const Back = ({ disableDetail }) => {
  return (
    <button
      value="back"
      onClick={disableDetail}
      className="tc pa3 ma1 br-pill grow yellow b--yellow flex justify-center"
    >
      back
    </button>
  );
};

export default Back;
