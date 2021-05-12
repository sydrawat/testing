import React, { useState } from 'react';

import Output from './Output';

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);
  const changeTextHandler = () => {
    setChangedText(true);
  };
  return (
    <>
      <h2>Hello Human</h2>
      {!changedText && <Output>Greeting from outer space!</Output>}
      {/* <Output>Greeting from outer space</Output> */}
      {changedText && <Output>Changed!</Output>}
      <button onClick={changeTextHandler}>Change Text</button>
    </>
  );
};

export default Greeting;
