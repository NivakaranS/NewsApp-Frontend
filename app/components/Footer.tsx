
import Image from 'next/image'
import X from '../images/x.png'
import Instagram from '../images/instagram.png';
import Linkedin from '../images/linkedin.png'


const Footer = ()  => {
    return(
        <div className="bg-gray-800 text-white flex items-center justify-center">
            <div  className="flex flex-col items-center justify-center w-[90%]">
                <div className="flex flex-row pt-[40px] pb-[20px] w-[100%]">
                    <div className="w-[150%]">
                        <p className="text-[40px]">NEWS</p>
                        <p className="text-[12px] pr-[15px]">Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
                        <div className="leading-[18px] mt-[10px]">
                            <p>+94 76 0015 755</p>
                            <p>nivakaran@hotmail.com</p>
                        </div>
                    </div>
                    <div className="w-[100%]">
                        <p className="text-[30px]">Quick Links</p>
                        <div className='text-[15px] space-y-[5px]'>
                            <p className='cursor-pointer'>Home</p>
                            <p className='cursor-pointer'>Politics</p>
                            <p className='cursor-pointer'>Business</p>
                            <p className='cursor-pointer'>Entertainment</p>
                            <p className='cursor-pointer'>Sports</p>
                            <p className='cursor-pointer'>Health</p>
                            <p className='cursor-pointer'>Tech</p>
                        </div>
                    </div>
                    <div className="w-[100%] ">
                        <p className="text-[30px]">Features</p>
                        <div className='text-[15px] space-y-[5px]'>
                            <p className='cursor-pointer'>Investigation reports</p>
                            <p className='cursor-pointer'>Exclusive interviews</p>
                            <p className='cursor-pointer'>Opinions & Editorials</p>
                            <p className='cursor-pointer'>Fact-Checking Initiative</p>
                        </div>

                    </div>
                    <div className="w-[150%] ">
                        <div className="bg-gray-400 px-[20px] pt-[20px] pb-[30px] rounded-[10px]">
                            <p className="text-black">Subscribe to our newsletter</p>
                            <div className="flex relative mt-[3px] flex-row rounded bg-gray-300  px-[15px] py-[5px]">
                                <input className="text-black focus:outline-none w-[100%]" placeholder="Enter email address"/>
                                <div className="rounded-[5px] absolute right-[3px] top-[3px] bg-gray-500 px-[10px] py-[2px]">
                                    <p>Subscribe</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[10px]">
                            <p>Follow Us</p>
                            <div className="mt-[5px] flex flex-row space-x-[10px] items-center ">
                                <div className="w-[40px] rounded h-[35px] flex items-center justify-center bg-[#000] overflow-hidden">
                                    <Image alt="" src={X} className="h-[30px]" />
                                </div>
                                <Image alt="" src={Linkedin} height={34} />
                                <Image alt="" src={Instagram} height={34} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[0.5px] w-[100%] bg-black"></div>
                <div className="flex flex-row w-[100%] py-[5px] text-[13px] justify-between">
                    <div>
                        <p className="">News Copyright &copy; 2025. All Rights Reserved. </p>
                    </div>
                    <div className="flex flex-row space-x-[13px]">
                        <p>Privacy Policy</p>
                        <p>Editorial Conditions</p>
                        <p>Terms & Conditions</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer