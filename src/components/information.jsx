import ReactCountryFlag from 'react-country-flag';

const Information = () => {
    return (
        <div className="p-10 border-b-2">
            <div>
                <h1 className="text-4xl">Cottage Club Midi</h1>
            </div>
            <h1 className='pt-3 text-xl'>£30</h1>
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
            <h1 className='pt-4'>Size small selected</h1>
            
            
        </div>
    )
}

export default Information;