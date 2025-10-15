/* eslint-disable no-unused-vars */

import { useState } from "react"
import TextInput from "./TextInput"
import "../App.scss"

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

	return (
		<>
			<form className="login-form card" onSubmit={handleSubmit}>
				<h2>Login</h2>
				{error && <div className="form-error">{error}</div>}
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
				<div className="utils">
					<div className="remember">
						<input type="checkbox" id="rememberMe" />
						<label htmlFor="rememberMe">Remember Me</label>
					</div>
					<div className="forgot">
						<a href="/">Forgot Password?</a>
					</div>
				</div>

				<div className="actions">
					<button type="submit" className="btn-primary">
						Login
					</button>
				</div>
			</form>
		</>
	)
}
