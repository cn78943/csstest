// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Sidebar 스타일을 위한 CSS 파일

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="dashboard">
          Dashboard
        </div>
        <br />
        <ul>
          <li><Link to="/">메인 화면</Link></li>
          <li><Link to="/editor">문제 풀기</Link></li>
          <li><Link to="/editortest">테스트용 IDE</Link></li>
          <li><Link to="/editor">질의응답 게시판</Link></li>
          <li><Link to="/editor">Test Menu</Link></li>
          <li><Link to="/editor">Test Menu</Link></li>
        </ul>

        <div className="chat-wrapper">
          <div className="chat-container">
            <div className="chat-header">
              채팅헤더
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Sidebar;
