import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";
import { useState, useEffect } from "react";
const About = () => {
  const [desc, setDesc] = useState(true);
  const [sizeGuide, setSizeGuide] = useState(true);
  const [returnPolicy, setReturnPolicy] = useState(true);

  useEffect(() => {
    const description = desc;
  }, []);

  return (
    <div className="pt-4 pb-10 border-b-2">
      {/* <h1 className="text-3xl">Information</h1> */}
      <div className="pb-4 pt-4">
        <h1 className="text-2xl pb-3">Description</h1>
        <div className="flex items-center justify-center">
          {desc && (
            <AiFillPlusSquare className="text-3xl cursor-pointer"
              onClick={() => {
                setDesc(!desc);
              }}
            />
          )}
          {!desc && (
            <AiFillMinusSquare className="text-3xl cursor-pointer"
              onClick={() => {
                setDesc(!desc);
              }}
            />
          )}
        </div>
        {!desc && (
          <div className="inline-block overflow-hidden max-w-[300px] pt-3">
            <span className="text-sm">
            A classic, timeless dress that flatters every body type. It is perfect for every season. 

We offer free Royal Mail 2nd Class shipping to the UK. We ship within 2-3 business days. 
            </span>
            
          </div>
        )}
      </div>
      <div className="pb-4">
        <h1 className="text-2xl pb-3">Size Guide</h1>
        <div className="flex items-center justify-center">
          {sizeGuide && (
            <AiFillPlusSquare className="text-3xl cursor-pointer"
              onClick={() => {
                setSizeGuide(!sizeGuide);
              }}
            />
          )}
          {!sizeGuide && (
            <AiFillMinusSquare className="text-3xl cursor-pointer"
              onClick={() => {
                setSizeGuide(!sizeGuide);
              }}
            />
          )}
        </div>
        {!sizeGuide && (
          <div className="inline-block overflow-hidden max-w-[300px] pt-3">
            <p className="text-sm">
            Our models both wear a size S, this size will fit a size 6-12. They are both 5’8 and wear size UK 8-10. Due to high demand, this is the only size left in stock. 
            </p>
          </div>
        )}
      </div>
      <div>
        <h1 className="text-2xl pb-3">Returns Policy</h1>
        <div className="flex items-center justify-center">
          {returnPolicy && (
            <AiFillPlusSquare className="text-3xl cursor-pointer"
              onClick={() => {
                setReturnPolicy(!returnPolicy);
              }}
            />
          )}
          {!returnPolicy && (
            <AiFillMinusSquare className="text-3xl cursor-pointer"
              onClick={() => {
                setReturnPolicy(!returnPolicy);
              }}
            />
          )}
        </div>
        {!returnPolicy && (
          <div className="inline-block overflow-hidden max-w-[300px] pt-3">
            <p className="text-sm">
            If you want to return your dress (within 14 days), please email 1801helpdesk@gmail.com and one of our team will help you.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
