import {AiTwotoneMail} from 'react-icons/ai'
const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-300 w-[400px]">
        <h1 className='pt-2'>Contact us for any queries!</h1>
        <div className="flex justify-evenly items-center">
       <a href='mailto: 1801helpdesk@gmail.com' className='text-xl pb-3'><AiTwotoneMail /></a>
        </div>
        
      </footer>
    </div>
  );
};

export default Footer;
