
import { VideoCard } from "./VideoCard"

const VIDEOS=[{
    title:"Linux directories",
      image:"./image.png",
      thumbnail:"./image2.png",
      author:"Newtork Chuck",
      views:"1.2M views",
      timeStamp:"2 days ago"

},{
    title:"Linux directories",
      image:"./image.png",
      thumbnail:"./image2.png",
      author:"Newtork Chuck",
      views:"1.2M views",
      timeStamp:"2 days ago"

},{
    title:"Linux directories",
      image:"./image.png",
      thumbnail:"./image2.png",
      author:"Newtork Chuck",
      views:"1.2M views",
      timeStamp:"2 days ago"

},{
    title:"Linux directories",
      image:"./image.png",
      thumbnail:"./image2.png",
      author:"Newtork Chuck",
      views:"1.2M views",
      timeStamp:"2 days ago"

},{
    title:"Linux directories",
      image:"./image.png",
      thumbnail:"./image2.png",
      author:"Newtork Chuck",
      views:"1.2M views",
      timeStamp:"2 days ago"

},{
    title:"Linux directories",
      image:"./image.png",
      thumbnail:"./image2.png",
      author:"Newtork Chuck",
      views:"1.2M views",
      timeStamp:"2 days ago"

},{
    title:"Linux directories",
      image:"./image.png",
      thumbnail:"./image2.png",
      author:"Newtork Chuck",
      views:"1.2M views",
      timeStamp:"2 days ago"

}
]

export const VideoGrid=()=>{
    return <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
        {VIDEOS.map(video=><div>
                <VideoCard title={video.title}
                      image={video.image}
                      thumbnail={video.thumbnail} 
                      author={video.author}
                      views={video.views}
                      timeStamp={video.timeStamp}></VideoCard> 
            </div>)}

    </div>
}