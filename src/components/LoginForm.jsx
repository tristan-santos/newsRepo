/* eslint-disable no-unused-vars */

import { useState } from "react"
import TextInput from "./TextInput"
import "../App.scss"
import { motion } from "framer-motion"

export default function LoginForm({ onLogin }) {
	const [form, setForm] = useState({ username: "", password: "" })
	const [error, setError] = useState("")

	function handleChange(e) {
		const { name, value } = e.target
		setForm((prev) => ({ ...prev, [name]: value }))
	}

	function handleSubmit(e) {
		e.preventDefault()
		setError("")
		if (!form.username || !form.password) {
			setError("Please enter both username and password.")
			return
		}

		// Demonstrate passing data via props
		onLogin({ username: form.username, password: form.password })
	}

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
		<motion.form
			variants={container}
			className="login-form card"
			onSubmit={handleSubmit}
		>
			<motion.h2 variants={item}>Login</motion.h2>
			{error && (
				<motion.div values={item} className="form-error">
					{error}
				</motion.div>
			)}
			<TextInput
				type="text"
				label="Username"
				name="username"
				value={form.username}
				onChange={handleChange}
				placeholder="Enter username"
			/>

			<TextInput
				label="Password"
				type="password"
				name="password"
				value={form.password}
				onChange={handleChange}
				placeholder="Enter password"
			/>

			<motion.div variants={item} className="actions">
				<motion.button variants={item} type="submit" className="btn-primary">
					Login
				</motion.button>
			</motion.div>
		</motion.form>
	)
}
