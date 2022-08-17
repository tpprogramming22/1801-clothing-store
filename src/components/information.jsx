import ReactCountryFlag from 'react-country-flag';
import {TbTruckDelivery} from 'react-icons/tb'

const Information = () => {
    return (
        <div className="p-10 border-b-2">
            <div>
                <h1 className="text-4xl">Cottage Club Midi</h1>
            </div>
            <h1 className='pt-3 text-xl'>£35</h1>
            <div className="flex justify-evenly items-center pt-10">
            <div className="shadow-xl bg-gray-200 rounded w-10 cursor-pointer blur-[2px]">
                    <span>XS</span>
                </div>
                <div className="shadow-xl bg-gray-400 rounded w-10 cursor-pointer focus:bg-black">
                    <span>S</span>
                </div>
                <div className="shadow-xl bg-gray-200 rounded w-10 cursor-pointer blur-[2px]">
                    <span>M</span>
                </div>
                <div className="shadow-xl bg-gray-200 rounded w-10 cursor-pointer blur-[2px]">
                    <span>L</span>
                </div>

            </div>
            
            
            
            
        </div>
    )
}

export default Information;