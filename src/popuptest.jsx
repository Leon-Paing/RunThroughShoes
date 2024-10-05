import React, { useState } from 'react';

function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={togglePopup}>Open Popup</button>

      {isOpen && (
        <div style={styles.overlay}>
          <div style={styles.popup}>
            <h2>Popup Title</h2>
            <p>This is a pop-up that blurs the background.</p>
            <button onClick={togglePopup}>Close</button>
          </div>
        </div>
      )}

      <div style={{ marginTop: '20px' }}>
        <p>Some content behind the pop-up. This will be blurred when the pop-up is open.</p>
        <p>Click the button above to open the pop-up.</p>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000, // Ensure the pop-up is on top of everything
  },
  popup: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '500px',
    width: '100%',
    zIndex: 1001, // Ensure the pop-up content is on top
  },
  blurredBackground: {
    filter: 'blur(8px)', // Blurring effect
    pointerEvents: 'none', // Prevent clicks on the background
  },
};

export default Popup;