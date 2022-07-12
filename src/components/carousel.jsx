import { useState } from "react";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

const Carousel = () => {
  const featuredImages = ["/3.jpg","/2.jpg","/1.jpg","/4.jpg",];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOnPrevClick = () => {
    if (currentIndex == 0) {
      setCurrentIndex(3);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const handleOnNextClick = () => {
    if (currentIndex == 3) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="flex justify-center relative border-b-2">
      <div className="pb-6">
        <img
          src={featuredImages[currentIndex]}
          alt="null"
          className="rounded-3xl shadow-2xl w-[250px]"
        />
      </div>

      <div className="absolute w-[250px] top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center text-xs">
        <AiFillCaretLeft
          onClick={handleOnPrevClick}
          className="text-4xl cursor-pointer active:text-white"
        />
        <AiFillCaretRight
          onClick={handleOnNextClick}
          className="text-4xl cursor-pointer active:text-white"
        />
      </div>
    </div>
  );
};

export default Carousel;
