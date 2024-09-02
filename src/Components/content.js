import React from 'react';
import Image1 from '../img1.png';
import Image2 from '../img2.png';
import Image3 from '../img3.png';
import Image4 from '../img4.png';
import Image5 from '../img5.png';
import Image6 from '../img6.png';
import Image7 from '../img7.png';
import Image8 from '../img8.png';
import Image9 from '../img9.png';
import Image10 from '../img10.png';
import Image11 from '../img11.png';
import Image12 from '../img12.png';


function Content() {
    const videoData = [
        {
            thumbnail: Image1,
            title: "Virat Kohli 160* (159) vs South Africa 3rd Odi 2018 , Cape Town (Ball By Ball)",
            channel: "Cricbuzz",
            views: "23M views",
            timestamp: "5 Months ago",
        },
        {
            thumbnail: Image2,
            title: "Trending Love Mashup 2024 | Romantic Hindi Love Mashup 2024 | The Love Mashup 2024 #003",
            channel: "Live Music",
            views: "5M views",
            timestamp: "5 years ago",
        },
        {
            thumbnail: Image3,
            title: "Maate Vinadhuga Full Video Song | Taxiwaala Video Songs | Vijay Deverakonda, Priyanka Jawalkar",
            channel: "Geetha Arts Music",
            views: "93M views",
            timestamp: "5 year ago",
        },
        {
            thumbnail: Image7,
            title: "Good Vibes Music 🌻 Top 100 Chill Out Songs Playlist | New Tiktok Songs With Lyrics",
            channel: "Dreamy Vibez",
            views: "14M views",
            timestamp: "1 year ago",
        },
        {
            thumbnail: Image5,
            title: "Karthik's Love Mix | Special Audio Jukebox | Veesum Velichathile | Poopol Poopol | Un Paarvaiyil",
            channel: "Saregama Tamil",
            views: "680K views",
            timestamp: "9 Months ago",
        },
        {
            thumbnail: Image6,
            title: "The GOAT (Official Trailer) Tamil: Thalapathy Vijay | Venkat Prabhu | Yuvan Shankar Raja | T-Series",
            channel: "T-Series",
            views: "27M views",
            timestamp: "5 Days ago",
        },
        {
            thumbnail: Image4,
            title: "Deep learning training will be undertaken by an interdisciplinary team of IISc faculty",
            channel: "IISc bangalore",
            views: "680K views",
            timestamp: "1 year ago",
        },
        {
            thumbnail: Image8,
            title: "Adharam Madhuram (Slowed+Reverb) | Krishna Bhajan | Bhakti Song | Radha Krishna Lofi Bhajan",
            channel: "AS Creation",
            views: "680K views",
            timestamp: "1 year ago",
        },
        {
            thumbnail: Image9,
            title: "Kadhaipoma'2 | Chapter - 7 | Thodu Vaanam with English Subtitles| Ft NP, Preetha |BlackSheep Studios",
            channel: "BlackSheep Studio",
            views: "670K views",
            timestamp: "1 day ago",
        },
        {
            thumbnail: Image10,
            title: "Kesariya - Film Version | Brahmāstra | Ranbir | Alia | Pritam | Arijit | Amitabh",
            channel: "SonyMusicIndiaVEVO",
            views: "128M views",
            timestamp: "1 year ago",
        },
        {
            thumbnail: Image11,
            title: "Fire Song (Tamil) - Lyrical | Kanguva | Suriya | Devi Sri Prasad | Siva | Viveka",
            channel: "Saregama Tamil",
            views: "710K views",
            timestamp: "1 year ago",
        },
        {
            thumbnail: Image12,
            title: "🔥 Top 10 Fiery Moments Of Virat Kohli! 😡 || The Aggressive Side Of Virat Kohli || The Cricketer",
            channel: "Cricbuzz",
            views: "6M views",
            timestamp: "1 Month ago",
        },
    ];

    return (
        <div className="content">
            <div className="videoGrid">
                {videoData.map((video, index) => (
                    <div key={index} className="videoCard">
                        <img className="videoCard__thumbnail" src={video.thumbnail} alt={video.title} />
                        <div className="videoCard__info">
                            <h2>{video.title}</h2>
                            <p>{video.channel}</p><br />
                            <p>{video.views} • {video.timestamp}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Content;
