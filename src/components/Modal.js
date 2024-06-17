// src/Modal.js
import React from 'react';
import './Modal.css'; // 모달 스타일을 위한 CSS 파일을 임포트합니다.

function Modal({ message, onClose }) {
  return (
    <div className="modal-container">
      <div className="modal-box">
        <div className="modal-content">
          <p>{message}</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
