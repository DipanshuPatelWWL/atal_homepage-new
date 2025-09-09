import React from 'react'

function Registrationform() {
    return (
        <div className="max-w-3xl mx-auto p-6 mt-10 mb-10 bg-white shadow-md rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-6">Customer Registration</h2>
            <h2 className="text-xl font-bold mb-4">Personal Info</h2>
            <form >
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                        <label className="block text-sm font-medium mb-1">Full name</label>
                        <input
                            type="text"
                            placeholder="First name"
                            className="w-full border border-gray-300 rounded-md p-2 " />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Last name</label>
                        <input
                            type="text"
                            placeholder="Last name"
                            className="w-full border border-gray-300 rounded-md p-2 " />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Date of birth</label>
                        <input
                            type="date"
                            className="w-full border border-gray-300 rounded-md p-2 " />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Mobile phone</label>
                        <input
                            type="tel"
                            placeholder="000-000-0000"
                            className="w-full border border-gray-300 rounded-md p-2 " />
                        <div className="flex items-center mt-2">
                            <input
                                type="checkbox"
                                className="mr-2" />
                            <span className="text-sm">Opt-in for SMS/WhatsApp updates</span>
                        </div>
                    </div>
                </div>


                <h2 className="text-xl font-bold mb-4">Login & Security</h2>
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                        <label className='block text-sm font-medium mb-1'>Password</label>
                        <input
                            type="password"
                            placeholder='Password'
                            className='w-full border border-gray-300 rounded-md p-2' />
                        <div className='mt-5'>
                            <p>Password Strength: <strong>Weak</strong></p>
                            <input
                                type="range"
                                className="appearance-none h-2 bg-gray-300 rounded-lg
                                [&::-webkit-slider-thumb]:appearance-none 
                                [&::-webkit-slider-thumb]:w-0 
                                [&::-webkit-slider-thumb]:h-0 
                                [&::-webkit-slider-thumb]:bg-transparent 
                                [&::-webkit-slider-thumb]:border-none
                                [&::-moz-range-thumb]:w-0 
                                [&::-moz-range-thumb]:h-0 
                                [&::-moz-range-thumb]:bg-transparent 
                                [&::-moz-range-thumb]:border-none"
                            />
                        </div>
                    </div>
                    <div>
                        <label className='block text-sm font-medium mb-1'>Confirm Password</label>
                        <input
                            type="password"
                            placeholder='Confirm Password'
                            className='w-full border border-gray-300 rounded-md p-2' />
                        <div className='mt-5'>
                            <p className='block text-sm font-medium mb-1'>Two factor authentication</p>

                            <input
                                type="radio"
                                name="2fa"
                                id='email'
                                value="email" />
                            <span className='pl-3 pr-4'>Email</span>

                            <input
                                type="radio"
                                name="2fa"
                                id='sms'
                                value="sms" />
                            <span className='pl-3'>SMS</span>
                        </div>

                    </div>
                </div>


                <h2 className="text-xl font-bold mb-4">Address</h2>
                <div className='grid grid-cols-2 gap-4 mb-6'>
                    <div>
                        <label className=' block text-sm font-medium mb-1'>Street Address</label>
                        <input
                            type="text"
                            placeholder='Street Address'
                            className='w-full border border-gray-300 rounded-md p-2'
                        />
                        <label className='block text-sm font-medium mb-1 mt-4'>City</label>
                        <input
                            type="text"
                            placeholder='City'
                            className='w-full border border-gray-300 rounded-md p-2'
                        />
                        <label className='block text-sm font-medium mb-1 mt-4'>Postal Code</label>
                        <input
                            type="text"
                            placeholder='Postal code'
                            className='w-full border border-gray-300 rounded-md p-2'
                        />
                    </div>
                    <div className='mt-5'>
                        <p className='block text-sm font-medium mb-1'>Prefrense</p>
                        <p className='block text-sm font-medium mb-1'>Communication Prefrense</p>
                        <div>
                            <input
                                type="checkbox"
                                className="mr-2" />
                            <span className="text-sm mr-5">Email</span>
                            <input
                                type="checkbox"
                                className="mr-2" />
                            <span className="text-sm mr-5">SMS</span>
                            <input
                                type="checkbox"
                                className="mr-2" />
                            <span className="text-sm">Phone</span>
                        </div>
                        <p className='block text-sm font-medium mb-1 mt-5'>Marketing opt-in</p>
                        <div>
                            <input
                                type="checkbox"
                                className="mr-2" />
                            <span className="text-sm mr-5">I agree to recieve :pmotional offers</span>

                        </div>
                        {/* <p className='block text-sm font-medium mb-1 mt-5'>Optional Medical Info</p> */}
                        <p className='block text-sm font-medium mb-1 mt-4'>Priscription upload</p>
                        <input type="file"
                            className='w-full border border-gray-300 rounded-md p-2'
                        />
                    </div>
                </div>
            </form>
        </div>


    )
}

export default Registrationform