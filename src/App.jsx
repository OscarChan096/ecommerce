import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Layout from './components/Layout';

import './App.css';

function App() {

	return (
		<div className="App">
			<Routes>
				<Route index element={<Navigate replace to='/Layout' />} />
				<Route path='/layout' element={<Layout/>} />
				<Route path='/login' element={<Login/>} />
			</Routes>
		</div>
	);
}

export default App;
