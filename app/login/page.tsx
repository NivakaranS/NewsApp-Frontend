

import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const Login = () => {
    return(
        <div>
            
            <div className='bg-white text-black overflow-hidden h-[100vh] overflow-hidden flex items-center justify-center'>
                <div className='w-[90%] rounded-[10px] ring-1 h-[88vh]  flex flex-row items-center justify-center'>
                    <div className='w-[61.804%] rounded-l-[10px] h-[100%] bg-gray-300  flex flex-col items-center justify-center'>
                        <div className='leading-[35px] text-center'>
                            <p className='text-[50px] font-bold'>NEWS</p>
                            <p>Welcome Back:)</p>
                        </div>
                        <div className='flex flex-col w-[100%] items-center justify-center'>
                            <div className='flex flex-col w-[40%]'>
                                <label className='relative'>Username</label>
                                <input placeholder='' className='bg-white rounded-[5px] ring-[0.5px] focus:outline-none px-[14px] w-[300px]] py-[5px]'/>
                            </div>
                        </div>
                        <div className='flex flex-col w-[100%] mt-[10px] items-center justify-center'>
                            <div className='flex flex-col w-[40%]'>
                                <label className='relative'>Password</label>
                                <input placeholder='' className='bg-white rounded-[5px] ring-[0.5px] focus:outline-none px-[14px] w-[300px]] py-[5px]'/>
                            </div>
                        </div>
                        <div className='bg-gray-800 text-white w-[40%] rounded-[5px] mt-[10px] flex items-center justify-center py-[7px] cursor-pointer'>
                            <p>Login</p>
                        </div>
                    </div>
                    <div className='w-[38.196%] h-[100%] rounded-r-[10px] bg-gray-400  flex flex-col items-center justify-center'>

                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Login