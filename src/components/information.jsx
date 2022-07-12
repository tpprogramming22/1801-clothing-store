import ReactCountryFlag from 'react-country-flag';

const Information = () => {
    return (
        <div className="p-10 border-b-2">
            <div>
                <h1 className="text-4xl">1801 Maxi</h1>
                <p className="pt-3">Free shipping for the United Kingdom</p>
                <ReactCountryFlag countryCode='GB'/>
            </div>
            <h1 className='pt-9 text-xl'>£29.99</h1>
            <div className="flex justify-evenly items-center pt-10">
            <div className="shadow-xl bg-gray-200 rounded w-10 cursor-pointer">
                    <span>XS</span>
                </div>
                <div className="shadow-xl bg-gray-400 rounded w-10 cursor-pointer focus:bg-black">
                    <span>S</span>
                </div>
                <div className="shadow-xl bg-gray-200 rounded w-10 cursor-pointer">
                    <span>M</span>
                </div>
                <div className="shadow-xl bg-gray-200 rounded w-10 cursor-pointer">
                    <span>L</span>
                </div>

            </div>
<div className="pt-10"><h1>Last size left! 'Small' selected.</h1></div>
            
            
        </div>
    )
}

export default Information;