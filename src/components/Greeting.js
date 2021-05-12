import React, { useState } from 'react';

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);
  const changeTextHandler = () => {
    setChangedText(true);
  };
  return (
    <>
      <h2>Hello Human</h2>
      {!changedText && <p>Greeting from outer space!</p>}
      {/* <p>Greeting from outer space</p> */}
      {changedText && <p>Changed!</p>}
      <button onClick={changeTextHandler}>Change Text</button>
    </>
  );
};

export default Greeting;
