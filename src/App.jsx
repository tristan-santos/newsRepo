/* eslint-disable no-unused-vars */
import { useState } from "react"
import "./App.scss"
import LoginForm from "./components/LoginForm"
import { motion, AnimatePresence } from "framer-motion"

function App() {
	const [user, setUser] = useState(false)

	function handleLogin(credentials) {
		setUser({ username: credentials.username, password: credentials.password })
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
		<>
			<motion.div
				className="container"
				variants={container}
				initial="hidden"
				animate="show"
			>
				{!user ? (
					<motion.div className="card" variants={item}>
						<LoginForm onLogin={handleLogin} />
					</motion.div>
				) : (
					<motion.div className="card welcome" variants={container}>
						<motion.h1 variants={item}>Welcome, {user.username}!</motion.h1>
						<motion.h2 variants={item}>
							Your Password is {user.password}
						</motion.h2>
						<motion.p variants={item}>
							You have successfully signed in!!.
						</motion.p>
						<motion.button variants={item} onClick={() => setUser(false)}>
							Sign out
						</motion.button>
					</motion.div>
				)}
			</motion.div>
		</>
	)
}

export default App
