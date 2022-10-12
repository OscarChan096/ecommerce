import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {

	return (
		<div className="App">
			<Routes>
				<Route path='/login' element={<Login />}/>
				<Route path='/dashboard' element={<Dashboard />}/>
			</Routes>
		</div>
	);
}

export default App;
