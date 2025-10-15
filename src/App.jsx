/* eslint-disable no-unused-vars */
import { useState } from "react"
import "./App.scss"
import LoginForm from "./components/LoginForm"

function App() {
	const [user, setUser] = useState(false)

	function handleLogin(credentials) {
		setUser({ username: credentials.username, password: credentials.password })
	}

	function handleSignOut() {
		setUser(false)
	}

	return (
		<>
			<div className="container" initial="hidden" animate="show" exit="hidden">
				{!user ? (
					<div className="card" key="login">
						<LoginForm onLogin={handleLogin} />
					</div>
				) : (
					<div className="card welcome" key="welcome">
						<h1>Welcome, {user.username}!</h1>
						<h2>Your Password is {user.password}</h2>
						<p>You have successfully signed in!!.</p>
						<button onClick={handleSignOut}>Sign out</button>
					</div>
				)}
			</div>
		</>
	)
}

export default App
