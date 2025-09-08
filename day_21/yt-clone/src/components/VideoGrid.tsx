import { VideoCard } from "./VideoCard"

const VIDEOS = [{
    title: "Elon Musk | Plan to conqure search",
    image: "photo.jpg",
    thumbImage: "thumb.png",
    author: "Groktube",
    views: "45m",
    timestap: "2 days ago"
},
{
    title: "Elon Tusk | Plan to conqure Mars",
    image: "photo.jpg",
    thumbImage: "thumb.png",
    author: "Groktube",
    views: "45m",
    timestap: "2 days ago"
},
{
    title: "tlon Musk | Plan to conqure self",
    image: "photo.jpg",
    thumbImage: "thumb.png",
    author: "Groktube",
    views: "45m",
    timestap: "2 days ago"
},
{
    title: "zlon Musk | Plan to conqure water",
    image: "photo.jpg",
    thumbImage: "thumb.png",
    author: "Groktube",
    views: "45m",
    timestap: "2 days ago"
}, {
    title: "Elon Musk | Plan to conqure search",
    image: "photo.jpg",
    thumbImage: "thumb.png",
    author: "Groktube",
    views: "45m",
    timestap: "2 days ago"
},
{
    title: "Elon Tusk | Plan to conqure Mars",
    image: "photo.jpg",
    thumbImage: "thumb.png",
    author: "Groktube",
    views: "45m",
    timestap: "2 days ago"
},
{
    title: "tlon Musk | Plan to conqure self",
    image: "photo.jpg",
    thumbImage: "thumb.png",
    author: "Groktube",
    views: "45m",
    timestap: "2 days ago"
},
{
    title: "zlon Musk | Plan to conqure water",
    image: "photo.jpg",
    thumbImage: "thumb.png",
    author: "Groktube",
    views: "45m",
    timestap: "2 days ago"
}, {
    title: "Elon Musk | Plan to conqure search",
    image: "photo.jpg",
    thumbImage: "thumb.png",
    author: "Groktube",
    views: "45m",
    timestap: "2 days ago"
},
{
    title: "Elon Tusk | Plan to conqure Mars",
    image: "photo.jpg",
    thumbImage: "thumb.png",
    author: "Groktube",
    views: "45m",
    timestap: "2 days ago"
},
{
    title: "tlon Musk | Plan to conqure self",
    image: "photo.jpg",
    thumbImage: "thumb.png",
    author: "Groktube",
    views: "45m",
    timestap: "2 days ago"
},
{
    title: "zlon Musk | Plan to conqure water",
    image: "photo.jpg",
    thumbImage: "thumb.png",
    author: "Groktube",
    views: "45m",
    timestap: "2 days ago"
}, {
    title: "Elon Musk | Plan to conqure search",
    image: "photo.jpg",
    thumbImage: "thumb.png",
    author: "Groktube",
    views: "45m",
    timestap: "2 days ago"
},
{
    title: "Elon Tusk | Plan to conqure Mars",
    image: "photo.jpg",
    thumbImage: "thumb.png",
    author: "Groktube",
    views: "45m",
    timestap: "2 days ago"
},
{
    title: "tlon Musk | Plan to conqure self",
    image: "photo.jpg",
    thumbImage: "thumb.png",
    author: "Groktube",
    views: "45m",
    timestap: "2 days ago"
},
{
    title: "zlon Musk | Plan to conqure water",
    image: "photo.jpg",
    thumbImage: "thumb.png",
    author: "Groktube",
    views: "45m",
    timestap: "2 days ago"
}
]


export const VideoGrid = () => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map(video => <div>
            <VideoCard title={video.title}
                image={video.image}
                thumbImage={video.thumbImage}
                author={video.author}
                views={video.views}
                timestap={video.timestap}>

            </VideoCard>
        </div>)}
    </div>
}