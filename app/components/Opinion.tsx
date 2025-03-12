'use client'
import React, { useEffect, useState } from 'react'
import { getOpinion } from '../services/getOpinion'

const Opinion = () => {
    const [opinions, setOpinions] = useState<any[]>([]);

    
    
        useEffect(() => {
            const fetchNews = async () => {
                try {
                    const data = await getOpinion();
    
                    const sortedNews = [...data].sort((a: any, b: any) => a.priority - b.priority);
                    setOpinions(sortedNews)
    
                } catch(err) {
                    console.error("Error in fetching news: ", err)
                }
            }
    
            fetchNews()
        }, [])

    return(
        <div className="text-black bg-white w-[100%] flex items-center justify-center">
            <div className="w-[90%] flex flex-col">
                <p className="text-[50px]">Opinions</p>
                <div className="flex flex row w-full mt-[10px] space-x-[15px] pb-[30px]">
                    { opinions.slice(0, 4).map((opinion, index) =>  
                    (<div key={index} className=" overflow-hidden w-[50%] ring-[0.5px] bg-gray-300  h-[69vh] rounded-[10px] flex flex-col">
                        <div className="h-[57.478%] bg-[url('/back.jpg')] bg-cover bg-center rounded-[10px] bg-gray-400">

                        </div>
                        <div className="h-[42.522%] px-[15px] py-[10px] bg-gray-300 rounded-b-[10px] ">
                            <p className="text-[20px] leading-[25px]">{opinion.title}</p>
                            <p className="leading-[18px]  text-[13px] mt-[5px]">{opinion.content}</p>
                        </div>
                    </div>))}

              
                </div>
            </div>
        </div>
    )
}

export default Opinion;