import {AiFillCreditCard} from 'react-icons/ai'

const PaymentLink = () => {
    return (
        <div className='flex justify-center items-center pt-4'>
            <a href='https://buy.stripe.com/bIY7tmdX92Lye7SfYY'><AiFillCreditCard className='text-6xl cursor-pointer'/></a>
        </div>
    )
}

export default PaymentLink;