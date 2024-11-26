import React, { useEffect, useRef } from 'react';

const Slider = () => {
  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
  ];

  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const imageWidth = 350 + 24; // Image width + margin between images

    const moveSlider = () => {
      // Increase transition duration for smoothness
      slider.style.transition = 'transform 3s ease-in-out'; // 3 seconds transition
      slider.style.transform = `translateX(-${imageWidth}px)`; // Move left by one image width

      // Once the transition is complete, reset the position
      slider.addEventListener('transitionend', () => {
        const firstImage = slider.children[0];
        slider.appendChild(firstImage); // Move the first image to the end of the list
        slider.style.transition = 'none'; // Disable transition during reset
        slider.style.transform = 'translateX(0)'; // Reset position immediately
      });
    };

    // Set the slider to loop infinitely, slower transition
    const intervalId = setInterval(moveSlider, 5000); // 5 seconds interval for slower transition

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <div className="relative overflow-hidden w-4/5 mx-auto mt-20">
      <div
        ref={sliderRef}
        className="flex transition-transform duration-500 ease-in-out"
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-[350px] h-[200px] object-cover mx-6 rounded-xl shadow-xl transition-all duration-500 transform hover:scale-105"
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
