import React, { useState } from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Navbar from './components/navbar';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<Navbar />
			<Dashboard />
		</div>
	);
}

export default App;
