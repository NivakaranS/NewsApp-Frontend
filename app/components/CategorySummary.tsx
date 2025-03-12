
'use client';
import React, {useEffect, useState} from "react";
import { getNews, getNewsByCategory } from "../services/getNews";

const CategorySummary1 = () => {

    const [sportsNews, setSportsNews] = useState<any[]>([]);
        const [latestNews, setLatestNews] = useState<any[]>([]);
        const [topNews, setTopNews] = useState<any[]>([]);
    
    
        useEffect(() => {
            const fetchNews = async () => {
                try {
                    const data = await getNewsByCategory('Sports');
    
                    const sortedNews = [...data].sort((a: any, b: any) => a.priority - b.priority);
                    setSportsNews(sortedNews)
    
                    
    
                } catch(err) {
                    console.error("Error in fetching news: ", err)
                }
            }
    
            fetchNews()
        }, [])

    return(
        <div className="bg-white text-black flex items-center justify-center w-full">
            <div className="w-[90%] py-[20px]">
                <p className="text-[45px]">SPORTS NEWS</p>
                <div className="bg-black w-full h-[1px]"></div>
                <div className="flex flex-row border-b-[1px] ">
                    <div className="w-[73.720%]  border-r-[1px]">
                        
                        <div className="flex flex-row border-b-[1px] py-[18px]">
                            {sportsNews[0] && (
                                <div className="w-[100%] bg-gray-500 bg-cover bg-center mr-[20px] h-[69vh] ring-1 flex flex-col justify-end px-[15px] py-[10px] ring-black rounded-[10px]">
                                <p className="text-[35px] ">{sportsNews[0].title}</p>
                                <div>
                                    <p className="">{sportsNews[0].content}</p>
                                </div>
                            </div>)}
                        </div>

                        <div>
                            <div className="h-[60vh] flex flex-row border-b-[1px] ">
                                {  sportsNews[1] && (
                                <div className="w-[50%] h-[100%] px-[15px] border-r-[1px] py-[20px]">
                                    <div className="h-[57.478%] bg-[url('/back2.jpg')] bg-cover bg-center ring-1 rounded-[10px]  ">
                                        
                                    </div>
                                    <div className="pt-[10px]">
                                        <p className="text-[27px] leading-[30px]">{sportsNews[1].title}</p>
                                        <p className="leading-[17px] text-[12px] mt-[5px]">{sportsNews[1].content}</p>
                                    </div>
                                </div>)}
                              
                                { sportsNews[2] && (
                                    <div className="w-[50%] h-[100%] px-[15px] border-r-[1px] py-[20px]">
                                        <div className="h-[57.478%] bg-[url('/back.jpg')] bg-cover bg-center ring-1 rounded-[10px]  ">
                                            
                                        </div>
                                        <div className="pt-[10px]">
                                            <p className="text-[27px] leading-[30px]">{sportsNews[2].title}</p>
                                            <p className="leading-[17px] text-[12px] mt-[5px]">{sportsNews[2].content}</p>
                                        </div>
                                    </div>)}

                                    { sportsNews[3] && (
                                        <div className="w-[50%] overflow-hidden h-[100%] px-[15px] py-[20px]">
                                        <div className="h-[57.478%] bg-[url('/back2.jpg')] bg-cover bg-center ring-1 rounded-[10px]  ">
                                            
                                        </div>
                                        <div className="pt-[10px]">
                                            <p className="text-[27px] leading-[30px]">{sportsNews[3].title}</p>
                                            <p className="leading-[17px] text-[12px] mt-[5px]">{sportsNews[3].content}</p>
                                        </div>
                                    </div>
                                    )}
                               
                                </div>


                                { sportsNews[4] && (
                                <div className="flex flex-row py-[20px] h-[55vh]">
                                    <div className="w-[57.478%] bg-[url('/back.jpg')] bg-cover bg-center rounded-[10px] ring-1 bg-white h-full">
                                        
                                    </div>
                                    <div className="flex flex-col w-[42.522%] justify-center px-[15px]">
                                        <p className="text-[30px] leading-[30px]">{sportsNews[4].title}</p>
                                        <p className="text-[12px]">{sportsNews[4].content}</p>
                                    </div>
                                </div>)}
                         

                        </div>
                    </div>
                    <div className="w-[26.280%] pt-[5px] h-[185vh]">
                        { sportsNews[5] && (
                            <div className="h-[34%] pb-[5px] border-b-[1px] flex flex-col justify-center">
                                <div className="h-[57.478%] bg-[url('/back2.jpg')] bg-cover bg-center rounded-[10px] ring-1 mt-[15px] ml-[20px]">

                                </div>
                                <div className="h-[42.522%] ml-[20px]">
                                    <p className="text-[20px]  mt-[8px] leading-[25px]">{sportsNews[5].title}</p>
                                    <p className="leading-[18px] text-[13px] mt-[2px]">{sportsNews[5].content}</p>
                                </div>
                            </div>
                        )}

                        { sportsNews[6] && (
                            <div className="h-[34%] pb-[5px] border-b-[1px] flex flex-col justify-center">
                                <div className="h-[57.478%] bg-[url('/back.jpg')] bg-cover bg-center rounded-[10px] ring-1 mt-[15px] ml-[20px]">

                                </div>
                                <div className="h-[42.522%] ml-[20px]">
                                    <p className="text-[20px]  mt-[8px] leading-[25px]">{sportsNews[6].title}</p>
                                    <p className="leading-[18px] text-[13px] mt-[2px]">{sportsNews[6].content}</p>
                                </div>
                            </div>
                        )}
                        
                        { sportsNews[7] && (
                            <div className="h-[34%] pb-[5px] flex flex-col justify-center">
                                <div className="h-[57.478%] bg-[url('/back2.jpg')] bg-cover bg-center rounded-[10px] ring-1 mt-[15px] ml-[20px]">

                                </div>
                                <div className="h-[42.522%] ml-[20px]">
                                    <p className="text-[20px]  mt-[8px] leading-[25px]">{sportsNews[7].title}</p>
                                    <p className="leading-[18px] text-[13px] mt-[2px]">{sportsNews[7].content}</p>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategorySummary1