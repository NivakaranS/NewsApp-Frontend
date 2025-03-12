'use client'

import React, { useState, useEffect } from 'react';
import { getNews } from '../services/getNews';

import { getStocks } from '../services/getStocks';

const Summary = () => {
    const [news, setNews] = useState<any[]>([]);
    const [latestNews, setLatestNews] = useState<any[]>([]);
    const [topNews, setTopNews] = useState<any[]>([]);
    const [stocks, setStocks] = useState<any[]>([]);

    useEffect(() => {
        const fetchStocks = async () => {
            try {
                const stocks = await getStocks();
                setStocks(stocks)
            } catch(err) {
                console.error(err)
            }
        }

        fetchStocks()
    }, [])

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const data = await getNews();
                

                const sortedNews = [...data].sort((a: any, b: any) => a.priority - b.priority);
                setNews(sortedNews)

                const latestNews = [...data].sort((a: any, b: any) => 
                    new Date(a.LastModified).getTime() - new Date(b.LastModified).getTime()
                )
                setLatestNews(latestNews)
                

            } catch(err) {
                console.error("Error in fetching news: ", err)
            }
        }

        fetchNews()
    }, [])



    return(
        <div className=" pt-[15vh] w-full flex bg-white flex-col  items-center">
            <div className="w-[90%] text-black mt-[1%] flex flex-row space-x-[1.618%]">
                { news[0] && (
                <div className="w-[57.478%] cursor-pointer bg-gray-500 bg-cover bg-center flex flex-col justify-end py-[30px] px-[30px] ring-black ring-[0.5px]  h-[80vh] rounded-[16px]">
                    <p className="text-[40px] leading-[45px] w-[70%]">{news[0].title}</p>
                    <p className="leading-[20px] ">{news[0].content}</p>
                </div>
                )}
                <div className="w-[42.522%] h-[80vh] flex flex-col space-y-[2.617%]">
                    {news.slice(1, 2).map((item, index) => (
                    <div key={index} className=" cursor-pointer bg-[url('/back.jpg')] bg-cover bg-center bg-opacity-50 ring-black ring-[0.5px] flex flex-col justify-end px-[13px] py-[10px] rounded-[10px] h-[49.443vh] ">
                        <p className="text-[28px] text-white">{item.title}</p>
                        <p className="leading-[20px] text-[15px] text-white">{item.content}</p>
                    </div>
                    ))}
                    
                    {
                        news.slice(2,4).map((item, index) => (
                            <div key={index} className="h-[15.2785vh] flex flex-row  ring-black ring-[0.8px] rounded-[10px] bg-white">
                                <div className="w-[80%] flex justify-center px-[20px] h-full flex-col">
                                    <p className="text-[20px]">{item.index}</p>
                                    <p className="leading-[19px]">{item.content}</p>
                                </div>
                                <div className="w-[20%] bg-gray-400 h-full rounded-[10px] ring-[0.5px]">
                                    
                                </div>
                            </div>
                        
                        ))
                    }
                    
                   
                    
                </div>
                
            </div>
            <div className="h-[16vh]  flex flex-row justify-between w-[85%] mt-[1.5%]">
                { stocks.slice(0, 6).map((stock, index) => ((
                    <div key={index} className="bg-black w-[180px] ring-black py-[10px] ring-1 rounded-[5px]  flex flex-col items-center justify-center px-[20px]">
                        <div className="leading-[20px]">
                            <p className="text-[20px]">{stock.title}</p>
                            <p className='text-[15px] mt-[3px]'>{stock.subTitle}</p>
                            <p className="text-[14px]">Rs. {stock.price}</p>
                        </div>
                    </div>
                )))}

                
            </div>
            <div className="w-[90%] mt-[20px] h-[0.5px] bg-black">

            </div>
            <div className="w-[100%] flex flex-col justify-center items-center ">
                <div className="text-black flex flex-row  border-b-[1px] w-[90%] space-x-[1.618%]">
                    
                    <div className="flex border-r-[1px] flex-col  w-[73.72%]">
                        
                        {news[4] && (
                            <div className="border-b-[1px] pt-[20px] pb-[25px]">
                            <p className="text-[40px]">{news[4].title}</p>
                            <div className="flex flex-row space-x-[1.618%]">
                                <div className="w-[57.478%] bg-[url('/back2.jpg')] bg-cover bg-center h-[50vh] ring-1 ring-black rounded-[10px] bg-white">

                                </div>
                                <div className="flex flex-col  justify-center w-[42.522%] mr-[1.618%]">
                                    <p className="text-[28px]">{news[4].subTitle}</p>
                                    <p>{news[4].content}</p>
                                </div>
                            </div>
                        </div>
                    )}
                        <div className="flex flex-row  border-b-[1px] ">
                            
                            {news[5] && (
                                <div className="w-[50%] h-[90vh] pb-[20px] border-r-[1px] ">
                                <div className="h-[57.478%] bg-[url('/back.jpg')] bg-cover bg-center mt-[2.617%] mx-[2.617%] ring-1 rounded-[10px]">

                                </div>
                                <div className="h-[42.522%] px-[10px]">
                                    <p className="text-[25px] leading-[30px] mt-[10px]">{news[5].title}</p>
                                    <p className='text-[15px] mt-[5px]'>{news[5].content}</p>
                                </div>

                            </div>)}

                            {news[6] &&
                                <div className="w-[50%] h-[90vh] pb-[20px] border-r-[1px] ">
                                <div className="h-[57.478%] bg-[url('/back2.jpg')] bg-cover bg-center mt-[2.617%] mx-[2.617%]  ring-1 rounded-[10px]">

                                </div>
                                <div className="h-[42.522%] px-[10px]">
                                    <p className="text-[25px] leading-[30px] mt-[10px]">{news[6].title}</p>
                                <p className='text-[15px] mt-[5px]'>{news[6].content}</p>
                                </div>

                            </div>
                            }
                            { news[7] &&
                            <div className="w-[50%] h-[90vh] pb-[20px] ">
                                <div className="h-[57.478%] bg-[url('/back.jpg')] bg-cover bg-center mt-[2.617%] mx-[2.617%] ring-1 rounded-[10px]">

                                </div>
                                <div className="h-[42.522%] px-[10px]">
                                    <p className="text-[25px] leading-[30px] mt-[10px]">{news[7].title}</p>
                                    <p className='text-[15px] mt-[5px]'>{news[7].content}</p>
                                </div>

                           </div>
                            }

                        </div>
                        {news[8] &&
                        <div className="flex flex-row py-[20px]">
                            <div className="bg-[url('/back.jpg')] bg-cover bg-center ring-1 ring-black rounded-[10px] mr-[1.618%] w-[57.478%] h-[50vh]">

                            </div>
                            <div className="w-[42.522%]  h-[50vh] flex flex-col justify-center">
                                <div>
                                    <p className="text-[30px] leading-[35px]">{news[8].subTitle}</p>
                                </div>
                                <div>
                                    <p>{news[8].content}</p>
                                    
                                </div>


                            </div>
                        </div>
                        }

                    </div>
                    <div className="w-[26.280%] py-[1.618%] flex flex-col space-y-[2.617%]">
                        <p className="text-[20px]">Latest News</p>
                        
                        {latestNews.slice(0, 5).map((item, index) => (
                            <div key={index} className="border-[1px] flex flex-row rounded-[10px] px-[15px] py-[5px]">
                                <div className="ring-black flex items-center justify-center border-r-[1px] w-[30%] h-[50px]">
                                    <p className="leading-[17px]">5 minutes ago</p>
                                </div>
                                <div className="w-[70%] px-[10px] flex items-center justify-center">
                                    <p className="leading-[17px] ">{item.title}</p>
                                </div>
                            </div>
                        ))}
                        
                        
                        <div className="w-[100%]  flex justify-end">
                            <p className="cursor-pointer">View all</p>
                        </div>
                        <p className="text-[20px]">Top News</p>
                        
                        {news.slice(0, 5).map((item, index) => (
                            <div key={index} className="border-[1px] flex flex-row rounded-[10px] px-[15px] py-[5px]">
                                <div className="ring-black flex items-center justify-center border-r-[1px] w-[30%] h-[50px]">
                                    <p className="leading-[17px]">5 minutes ago</p>
                                </div>
                                <div className="w-[70%] px-[10px] flex items-center justify-center">
                                    <p className="leading-[17px] ">{item.title}</p>
                                </div>
                            </div>
                            
                        ))}
                        
                        
                        <p className="text-[20px]">Trending</p>
                        <div className="border-[1px] flex flex-row rounded-[10px] px-[15px] py-[5px]">
                            <div className="ring-black flex items-center justify-center border-r-[1px] w-[30%] h-[50px]">
                                <p className="leading-[17px]">5 minutes ago</p>
                            </div>
                            <div className="w-[70%] px-[10px] flex items-center justify-center">
                                <p className="leading-[17px] ">Latest News Title Number 01</p>
                            </div>
                        </div>
                        <div className="border-[1px] flex flex-row rounded-[10px] px-[15px] py-[5px]">
                            <div className="ring-black flex items-center justify-center border-r-[1px] w-[30%] h-[50px]">
                                <p className="leading-[17px]">5 minutes ago</p>
                            </div>
                            <div className="w-[70%] px-[10px] flex items-center justify-center">
                                <p className="leading-[17px] ">Latest News Title Number 01</p>
                            </div>
                        </div>
                        <div className="border-[1px] flex flex-row rounded-[10px] px-[15px] py-[5px]">
                            <div className="ring-black flex items-center justify-center border-r-[1px] w-[30%] h-[50px]">
                                <p className="leading-[17px]">5 minutes ago</p>
                            </div>
                            <div className="w-[70%] px-[10px] flex items-center justify-center">
                                <p className="leading-[17px] ">Latest News Title Number 01</p>
                            </div>
                        </div>
                        <div className="border-[1px] flex flex-row rounded-[10px] px-[15px] py-[5px]">
                            <div className="ring-black flex items-center justify-center border-r-[1px] w-[30%] h-[50px]">
                                <p className="leading-[17px]">5 minutes ago</p>
                            </div>
                            <div className="w-[70%] px-[10px] flex items-center justify-center">
                                <p className="leading-[17px] ">Latest News Title Number 01</p>
                            </div>
                        </div>
                        <div className="border-[1px] flex flex-row rounded-[10px] px-[15px] py-[5px]">
                            <div className="ring-black flex items-center justify-center border-r-[1px] w-[30%] h-[50px]">
                                <p className="leading-[17px]">5 minutes ago</p>
                            </div>
                            <div className="w-[70%] px-[10px] flex items-center justify-center">
                                <p className="leading-[17px] ">Latest News Title Number 01</p>
                            </div>
                        </div>
                        <div className="border-[1px] flex flex-row rounded-[10px] px-[15px] py-[5px]">
                            <div className="ring-black flex items-center justify-center border-r-[1px] w-[30%] h-[50px]">
                                <p className="leading-[17px]">5 minutes ago</p>
                            </div>
                            <div className="w-[70%] px-[10px] flex items-center justify-center">
                                <p className="leading-[17px] ">Latest News Title Number 01</p>
                            </div>
                        </div>
                        
                        <div className="w-[100%]  flex justify-end">
                            <p className="cursor-pointer">View all</p>
                        </div>
                    </div>


                </div>
                <div className="w-[90%] text-black border-b-[1px] py-[1.618%] ">
                    {news[9] &&
                        <div className="h-[70vh] flex flex-col bg-gray-500 bg-cover bg-center justify-end px-[40px] py-[40px] ring-[0.5px] rounded-[10px]">
                            <div className='leading-[40px]'>
                                <p className="text-[40px] ">{news[9].title}</p>
                                <p className='text-[25px] '>{news[9].subTitle}</p>
                            </div>
                            <p className=''>{news[9].content}</p>
                        </div>
                    }
                </div>
                <div className="flex flex-row  border-b-[1px] text-black w-[90%]">
                    {news[10] && (
                        <div className="w-[50%] overflow-hidden h-[95vh] py-[20px] border-r-[1px] pr-[15px]">
                        <div className="h-[57.478%] bg-[url('/back.jpg')] bg-cover bg-center ring-1 rounded-[10px]">

                        </div>
                        <div className="h-[42.522%] pt-[10px]">
                            <div className="leading-[28px]">
                                <p className="text-[25px]">{news[10].title}</p>
                            </div>
                            <p className=' mt-[5px] text-[13px]'>{news[10].content}</p>
                        </div>
                    </div> 
                )}

                    {news[11] && (
                        <div className="w-[50%] overflow-hidden h-[95vh] py-[20px] border-r-[1px] px-[15px]">
                        <div className="h-[57.478%] bg-[url('/back2.jpg')] bg-cover bg-center ring-1 rounded-[10px]">

                        </div>
                        <div className="h-[42.522%] pt-[10px]">
                            <div className="leading-[28px]">
                                <p className="text-[25px]">{news[11].title}</p>
                            </div>
                            <p className='mt-[5px] text-[13px]'>{news[11].content}</p>
                        </div>
                    </div>
                    )}

                    {news[12] && (
                        <div className="w-[50%] overflow-hidden h-[95vh] py-[20px] border-r-[1px] px-[15px]">
                        <div className="h-[57.478%] bg-[url('/back.jpg')] bg-cover bg-center ring-1 rounded-[10px]">

                        </div>
                        <div className="h-[42.522%] pt-[10px]">
                            <div className="leading-[28px]">
                                <p className="text-[25px]">{news[12].title}</p>
                            </div>
                            <p className='mt-[5px] text-[13px]'>{news[13].content}</p>
                        </div>
                    </div>)}

                    {news[13] && (
                        <div className="w-[50%] overflow-hidden h-[95vh] py-[20px] pl-[15px]">
                        <div className="h-[57.478%] bg-[url('/back2.jpg')] bg-cover bg-center ring-1 rounded-[10px]">

                        </div>
                        <div className="h-[42.522%] pt-[10px]">
                            <div className="leading-[28px]">
                                <p className="text-[25px]">{news[13].title}</p>
                            </div>
                            <p className='mt-[5px] text-[13px]'>{news[13].content}</p>
                        </div>
                    </div>
                    )}

                </div>
            </div>
        </div>
    )
}

export default Summary;