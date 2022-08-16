import { AiFillPlusSquare, AiFillMinusSquare, AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
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
            <AiFillPlusCircle className="text-3xl cursor-pointer"
              onClick={() => {
                setDesc(!desc);
              }}
            />
          )}
          {!desc && (
            <AiFillMinusCircle className="text-3xl cursor-pointer"
              onClick={() => {
                setDesc(!desc);
              }}
            />
          )}
        </div>
        {!desc && (
          <div className="inline-block overflow-hidden max-w-[300px] pt-3">
            <span className="text-sm">
            The ultimate cottage core inspired midi dress, perfect for all occasions. We offer free Royal Mail 2nd Class shipping to the UK. We ship within 2-3 business days. Remember to check your junk folder for confirmation after ordering.
            </span>
            
          </div>
        )}
      </div>
      <div className="pb-4">
        <h1 className="text-2xl pb-3">Size Guide</h1>
        <div className="flex items-center justify-center">
          {sizeGuide && (
            <AiFillPlusCircle className="text-3xl cursor-pointer"
              onClick={() => {
                setSizeGuide(!sizeGuide);
              }}
            />
          )}
          {!sizeGuide && (
            <AiFillMinusCircle className="text-3xl cursor-pointer"
              onClick={() => {
                setSizeGuide(!sizeGuide);
              }}
            />
          )}
        </div>
        {!sizeGuide && (
          <div className="inline-block overflow-hidden max-w-[300px] pt-3">
            <p className="text-sm">
            Our model wears a size small and is usually a size 8-10. This size will fit between a size 6-12. Due to high demand, this is the only size left in stock.
            </p>
          </div>
        )}
      </div>
      <div>
        <h1 className="text-2xl pb-3">Returns Policy</h1>
        <div className="flex items-center justify-center">
          {returnPolicy && (
            <AiFillPlusCircle className="text-3xl cursor-pointer"
              onClick={() => {
                setReturnPolicy(!returnPolicy);
              }}
            />
          )}
          {!returnPolicy && (
            <AiFillMinusCircle className="text-3xl cursor-pointer"
              onClick={() => {
                setReturnPolicy(!returnPolicy);
              }}
            />
          )}
        </div>
        {!returnPolicy && (
          <div className="inline-block overflow-hidden max-w-[300px] pt-3">
            <p className="text-sm">
            If you would like to return your dress you will have 14 days to do so. Please email 1801helpdesk@gmail.com and one of our team will get back to you.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
