import myLogo from './../cottageclothing.png'

const Header = () => {
    return (
        <div className='flex justify-center items-center'>
            <img src={myLogo} alt='logo' className='main-logo'/>
        </div>
    )
}

export default Header;