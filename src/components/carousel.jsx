import { useState } from "react";
import {AiFillCaretRight, AiFillCaretLeft} from 'react-icons/ai'

const Carousel = () => {
    const featuredImages = [
        '/1.jpg',
        '/2.jpg',
        '/3.jpg',
    ]
    const [currentIndex, setCurrentIndex] = useState(0);


    const handleOnPrevClick = () => {
        if(currentIndex==0){
            setCurrentIndex(2);
        }
        else {
            setCurrentIndex(currentIndex-1)
        }

    }
    const handleOnNextClick = () => {
        if(currentIndex==2){
            setCurrentIndex(0);
        }
        else {
            setCurrentIndex(currentIndex+1)
        }
    }

  return (
    <div className="flex justify-center relative">
        <img src={featuredImages[currentIndex]} alt='null' className="rounded shadow-2xl w-[300px]"/>
<div className="absolute w-[300px] top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center text-xs">
    <AiFillCaretLeft onClick={handleOnPrevClick} className='text-xl cursor-pointer'/>
    <AiFillCaretRight onClick={handleOnNextClick} className='text-xl cursor-pointer'/>

</div>

     
    </div>
  );
};

export default Carousel;
