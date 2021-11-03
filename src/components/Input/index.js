import React, { useState,useRef } from "react";


const Input = ({ setCitiesList }) => {
	const [inputValue, setInputValue] = useState("");
	const inputRef = useRef(null);
	const handleClick = () => {
		setCitiesList((currentArray) => [...currentArray, inputValue])
		setInputValue('');
		inputRef.current.focus();
	}
	const handleOnChange = (event) => {
		setInputValue(event.target.value);
		
  };
	
  return (
    <div className="input-wrap">
		<input ref={inputRef} className="input" onChange={handleOnChange} value={inputValue} />
      <button className="button" onClick={handleClick}>Add City</button>
    </div>
  );
};

export default Input;
