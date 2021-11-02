import React from "react";
import "./Box.css";

const isOperator = val => {
	return !isNaN(val) || val === "." || val === "=";
}
export const Box = props => (<div className={`button-op ${ isOperator(props.children) ? null : "symbols" }`}
	onClick={()=> props.handleClick(props.children)}>
	     {props.children}
	</div>);
