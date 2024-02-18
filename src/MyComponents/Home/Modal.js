import React from "react";
import Modal from "@mui/material/Modal";
import img from './ModalStates.png';

export default function ModalView({ open, setOpen }) {

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Modal
        onClose={handleClose}
        open={open}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{
          position: "absolute",
          border: "2px solid #000",
          backgroundColor: "lightgray",
          boxShadow: "2px solid black",
          maxHeight: "90vh",
          maxWidth: "80vw",
          overflow: 'auto',
          padding: "2%",
          color: "white",
        }}>
          <img src={img} alt="" style={{ width: '100%', height: 'auto' }} />
        </div>
      </Modal>
    </div>
  );
}
