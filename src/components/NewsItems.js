import React, { useEffect, useState } from 'react'
import { NewsCard } from './NewsCard';


export const NewsItems = ({category}) => {
   const [news , setNews] = useState([]);
   
    useEffect(() =>
    { let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=21f4f4406175408da21b0ada2ea8807e`

        fetch(url).then((result) => result.json()).then((news) => setNews(news.articles));

    } ,[category])


  return (
   
         <div  className='d-flex mt-5 justify-content-center align-items-center align-content-between  flex-wrap   my-3 py-3' >
      
      {
         news.map((data , index) =>{
             return <NewsCard key={index}  title={data.title} description ={data.description} imgurl={data.urlToImage} urlofnews={data.url} />
 
         })
      }
 
     </div>

  
   
  )
}
