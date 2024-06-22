import React from 'react'
import image from "../assets/th.jpeg"
export const NewsCard = ({title , description ,urlofnews ,imgurl }) => {
  return (
    <div class="card bg-secondary text-dark mt-10 mx-3 p-2 my-3 px-2 py-2 " style={{maxWidth: "22%", height: "430px",  }}>
    <img src={imgurl?imgurl:image} style={{height:"50%" , width:"100%"}} class="card-img-top" alt="newsImage"/>
    <div class="card-body">
      <h5 class="card-title">{title.slice(0 , 50)}</h5>
      <p class="card-text">{description ? description.slice(0 , 100) :"there are latest news about"}</p>
      <a href={urlofnews} class="btn btn-primary">read more</a>
      

    </div>
  </div>
  )
}
