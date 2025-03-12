'use client'
import React, { useEffect, useState } from 'react'
import { getNewsByCategory } from '../services/getNews'


const CategorySummary2 = () => {

    const [businessNews, setBusinessNews] = useState<any[]>([]);
           
        
            useEffect(() => {
                const fetchNews = async () => {
                    try {
                        const data = await getNewsByCategory('Business');
        
                        const sortedNews = [...data].sort((a: any, b: any) => a.priority - b.priority);
                        setBusinessNews(sortedNews)
        
                        
        
                    } catch(err) {
                        console.error("Error in fetching news: ", err)
                    }
                }
        
                fetchNews()
            }, [])
            
    return(
        <div className="bg-white text-black flex items-center justify-center w-full">
            <div className="w-[90%] py-[20px]">
                <p className="text-[45px]">BUSINESS NEWS</p>
                <div className="bg-black w-full h-[1px]"></div>
                <div className="flex flex-row border-b-[1px] ">
                    <div className="w-[26.280%] pt-[10px] h-[185vh]">
                        
                        { businessNews[0] && 
                        (<div className="h-[33.3%] pb-[15px] border-b-[1px] flex flex-col justify-center">
                            <div className="h-[57.478%] bg-[url('/back.jpg')] bg-cover bg-center rounded-[10px] ring-1 mt-[10px] mr-[20px]">

                            </div>
                            <div className="h-[42.522%] mr-[20px]">
                                <p className="text-[20px]  mt-[8px] leading-[25px]">{businessNews[0].title}</p>
                                <p className="leading-[18px] text-[13px] mt-[3px]">{businessNews[0].content}</p>
                            </div>
                        </div>)}

                        { businessNews[1] && 
                        (<div className="h-[33.3%] pb-[15px] border-b-[1px] flex flex-col justify-center">
                            <div className="h-[57.478%] bg-[url('/back2.jpg')] bg-cover bg-center rounded-[10px] ring-1 mt-[10px] mr-[20px]">

                            </div>
                            <div className="h-[42.522%] mr-[20px]">
                                <p className="text-[20px]  mt-[8px] leading-[25px]">{businessNews[1].title}</p>
                                <p className="leading-[18px] text-[13px] mt-[3px]">{businessNews[1].content}</p>
                            </div>
                        </div>)}

                        { businessNews[2] && 
                        (<div className="h-[33.3%] pb-[15px] flex flex-col justify-center">
                            <div className="h-[57.478%] bg-[url('/back.jpg')] bg-cover bg-center rounded-[10px] ring-1 mt-[10px] mr-[20px]">

                            </div>
                            <div className="h-[42.522%] mr-[20px]">
                                <p className="text-[20px]  mt-[8px] leading-[25px]">{businessNews[2].title}</p>
                                <p className="leading-[18px] text-[13px] mt-[3px]">{businessNews[2].content}</p>
                            </div>
                        </div>)}

                    </div>
                    <div className="w-[73.720%]  border-l-[1px]">
                        { businessNews[3] &&
                        (<div className="flex flex-row border-b-[1px] py-[18px]">
                            <div className="w-[100%] ml-[20px] bg-gray-500 bg-cover bg-center h-[69vh] ring-1 flex flex-col justify-end px-[40px] py-[30px] ring-black rounded-[10px]">
                                <p className="text-[35px] leading-[40px]">{businessNews[3].title}</p>
                                <div>
                                    <p className='leading-[22px]'>{businessNews[3].content}</p>
                                </div>
                            </div>
                        </div>)}

                        <div>
                            <div className="h-[60vh] flex flex-row border-b-[1px] ">
                                { businessNews[4] &&
                                (<div className="w-[50%] overflow-hidden h-[100%] px-[15px] border-r-[1px] py-[20px]">
                                    <div className="h-[57.478%] bg-[url('/back.jpg')] bg-cover bg-center ring-1 rounded-[10px]  ">
                                        
                                    </div>
                                    <div className="pt-[10px]">
                                        <p className="text-[23px] leading-[25px]">{businessNews[4].title}</p>
                                        <p className="leading-[17px] text-[13px] mt-[5px]">{businessNews[4].content}</p>
                                    </div>
                                </div>)}
                              
                                    { businessNews[5] &&
                                    (<div className="w-[50%] overflow-hidden h-[100%] px-[15px] border-r-[1px] py-[20px]">
                                        <div className="h-[57.478%] bg-[url('/back2.jpg')] bg-cover bg-center ring-1 rounded-[10px]  ">
                                            
                                        </div>
                                        <div className="pt-[10px]">
                                            <p className="text-[23px] leading-[25px]">{businessNews[5].title}</p>
                                            <p className="leading-[17px] text-[13px] mt-[5px]">{businessNews[5].content}</p>
                                        </div>
                                    </div>)}

                                    { businessNews[6] &&
                                    (<div className="w-[50%] overflow-hidden h-[100%] px-[15px] py-[20px]">
                                        <div className="h-[57.478%] bg-[url('/back.jpg')] bg-cover bg-center ring-1 rounded-[10px]  ">
                                            
                                        </div>
                                        <div className="pt-[10px]">
                                            <p className="text-[23px] leading-[25px]">{businessNews[6].title}</p>
                                            <p className="leading-[17px] text-[13px] mt-[5px]">{businessNews[6].content}</p>
                                        </div>
                                    </div>)}
                               
                                </div>
                                { businessNews[7] &&
                                (<div className="flex flex-row py-[20px] h-[55vh]">
                                    <div className="w-[57.478%] ml-[20px] bg-[url('/back2.jpg')] bg-cover bg-center rounded-[10px] ring-1 bg-white h-full">
                                        
                                    </div>
                                    <div className="flex flex-col w-[42.522%] justify-center px-[15px]">
                                        <p className="text-[30px] leading-[34px]">{businessNews[7].title}</p>
                                        <p className='text-[13px] leading-[18px]'>{businessNews[7].content}</p>
                                    </div>
                                </div>)}
                         

                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default CategorySummary2