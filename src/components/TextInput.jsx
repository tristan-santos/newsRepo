/* eslint-disable no-unused-vars */

import React from "react"
import see from "../assets/view.png"
import hide from "../assets/hide.png"
import { useState } from "react"
import { motion } from "framer-motion"

// Reusable text input component demonstrating prop usage
function TextInput({ label, type, name, value, onChange, placeholder }) {
	const [show, setShow] = useState(false)

	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: { staggerChildren: 0.5, when: "beforeChildren" },
		},
	}
	const item = {
		hidden: { opacity: 0, y: -20 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				staggerChildren: 0.5,
				when: "beforeChildren",
				duration: 0.3,
			},
		},
	}

	return (
		<motion.label variants={container} className="input-group">
			<motion.input
				variants={item}
				className="text-input"
				type={show && type === "password" ? "text" : type}
				name={name}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
			/>
			<motion.span variants={item} className="input-label">
				{label}
			</motion.span>
			{type === "password" && (
				<motion.img
					variants={item}
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
		</motion.label>
	)
}

export default TextInput
