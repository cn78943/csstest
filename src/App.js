// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Routes와 Route를 임포트합니다.
import Sidebar from './components/Sidebar';
import MainPage from './main/Mainpage';
import EditorPage from './ide/EditorPage';
import TestEditorPage from './ide/TestEditorPage';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="main">
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/editor" element={<EditorPage />} />
              <Route path="/editortest" element={<TestEditorPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
