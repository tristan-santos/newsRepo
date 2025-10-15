/* eslint-disable no-unused-vars */

import React from "react"
import see from "../assets/view.png"
import hide from "../assets/hide.png"
import { useState } from "react"

// Reusable text input component demonstrating prop usage
function TextInput({ label, type, name, value, onChange, placeholder }) {
	const [show, setShow] = useState(false)

	return (
		<label className="input-group">
			<input
				className="text-input"
				type={show && type === "password" ? "text" : type}
				name={name}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
			/>
			<span className="input-label">{label}</span>
			{type === "password" && (
				<img
					src={show ? hide : see}
					onClick={() => {
						if (show) {
							setShow(false)
						} else {
							setShow(true)
						}
					}}
				/>
			)}
		</label>
	)
}

export default TextInput
