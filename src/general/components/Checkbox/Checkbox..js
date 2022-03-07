import React from 'react';
import styled  from 'styled-components';
const Wrapper = styled.div`
/* Customize the label (the container) */
.container {
  display: flex;
  align-items:center;
  position: relative;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 16px;
  line-height:1.7;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color:${props=>props.disabled ?"var(--grey_2)": "var(--grey_dark)"};
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
 margin-right: 1.5rem;
  height: 1.8rem;
  width: 1.8rem;
  border:1.5px solid var(--grey_dark);
  border-radius:0.3rem;
  background-color: transparent;
  box-sizing:border-box;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
border-color:${props=>props.disabled ?"": "var(--primary_main)"};
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: var(--primary_main);
}
.container input:disabled ~ .checkmark {
  background-color: var(--grey_2);
}
.container input:indeterminate ~ .checkmark {
  background-color: var(--primary_main);
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}
.container input:disabled ~ .checkmark:after,.container input:indeterminate ~ .checkmark:after {
  display: block;
    left: 4.5px;
    top: 1px;
    width: 10px;
    height: 10px;
    border: ${props=>props.disabled ?"none": "solid white"};
    border-width: 0 2px 0 0;
    /* -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg); */
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 6px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
` 
const Checkbox = (props)=><Wrapper {...props}>
  <label className="container">
  <input type="checkbox" disabled={props.disabled} checked={props.checked }  indeterminate={props.indeterminate}/>
  <span className="checkmark"></span>
    {props.text}
</label>

</Wrapper>
export default Checkbox;