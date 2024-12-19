import React, { useState, useRef } from 'react';
import Image1 from '../../public/Images/Image9.jpg'
import Image2 from '../../public/Images/Image15.jpg'



function PopupImage({ imageUrl }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <img src={Image1} alt="Popup Image" onClick={handleImageClick} />
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <img src={Image2} alt="Enlarged Image" />
          </div>
        </div>
      )}
    </div>
  );
}

export default PopupImage;