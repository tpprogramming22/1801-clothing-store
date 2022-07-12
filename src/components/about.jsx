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
        <h1 className="text-2xl">Description</h1>
        <div className="flex items-center justify-center">
          {desc && (
            <AiFillPlusSquare className="text-3xl"
              onClick={() => {
                setDesc(!desc);
              }}
            />
          )}
          {!desc && (
            <AiFillMinusSquare className="text-3xl"
              onClick={() => {
                setDesc(!desc);
              }}
            />
          )}
        </div>
        {!desc && (
          <div>
            <p className="text-sm">
              This trending bodycon maxi dress had got 20% x and 80% y with
              sizes ranging from XS to XL
            </p>
          </div>
        )}
      </div>
      <div className="pb-4">
        <h1 className="text-2xl">Size Guide</h1>
        <div className="flex items-center justify-center">
          {sizeGuide && (
            <AiFillPlusSquare className="text-3xl"
              onClick={() => {
                setSizeGuide(!sizeGuide);
              }}
            />
          )}
          {!sizeGuide && (
            <AiFillMinusSquare className="text-3xl"
              onClick={() => {
                setSizeGuide(!sizeGuide);
              }}
            />
          )}
        </div>
        {!sizeGuide && (
          <div>
            <p>
              This is the size guide.
            </p>
          </div>
        )}
      </div>
      <div>
        <h1 className="text-2xl">Returns Policy</h1>
        <div className="flex items-center justify-center">
          {returnPolicy && (
            <AiFillPlusSquare className="text-3xl"
              onClick={() => {
                setReturnPolicy(!returnPolicy);
              }}
            />
          )}
          {!returnPolicy && (
            <AiFillMinusSquare className="text-3xl"
              onClick={() => {
                setReturnPolicy(!returnPolicy);
              }}
            />
          )}
        </div>
        {!returnPolicy && (
          <div>
            <p>
              This is the returns policy.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
