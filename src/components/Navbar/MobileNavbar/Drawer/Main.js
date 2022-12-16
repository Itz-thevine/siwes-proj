import React from "react";

const Main = (props) => {
  return (
    <div onClick={props.toggle}>
      {props.show ? <div className="closeIcon" onClick={props.close}>&#x2715;</div> :
        <>
          <div className="toggleIcon" />
          <div className="toggleIcon" />
          <div className="toggleIcon" />
        </>
      }
    </div>
  );
};

export default Main;
