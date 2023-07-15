import React from "react";
import FilterBar from "./FilterBar";
// import News from "./News";
import "./recommended.css";
import VideoCard from "./VideoCard";

function RecommendedVideos(){

    return(
        <div className="recommended">
            <FilterBar />
            {/* <Cover /> */}
            <h2>Recommended</h2>
            <div className="recommendedVideo" >
                <VideoCard title="Rang jo lagyo- lyrical" 
                views="1.9M" 
                timestamp="2months" 
                image="https://i.ytimg.com/vi/2vmMcIRNGLI/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAcT4wP3-Ul5DzCWbfjRozhgDNvVQ" 
                channelImage="https://yt3.ggpht.com/r3LRqil5Fg3_fGNg6BXCn2GjCv6CwFgOFS0Dkr1wq3RAft6qHqfILyohIRYH1C7CdfwbMX3T=s68-c-k-c0x00ffffff-no-rj" 
                channel="Bollymood" 
                />

                <VideoCard title="Chilli Cheese Toast" 
                views="7.2M views" 
                timestamp="2 years ago" 
                image="https://i.ytimg.com/vi/1vQYLE_C8Gs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB92sL0X4GqdowbF7AO9o7Kd2LQZw" 
                channelImage="https://yt3.ggpht.com/_pOoniFnx_XVx8SJxo3lk5JFsdAtS5hD9GXIQTPU6EwOX5ZqiJJ4YO_jt0Djdw9L6FILS3RFFQ=s68-c-k-c0x00ffffff-no-rj" 
                channel="Chef Ranveer Brar" 
                />
                <VideoCard title="Best of KK -playlist" 
                views="2.7M views" 
                timestamp="2 months ago" 
                image="https://i.ytimg.com/vi/m5bW7n-24zo/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARggIGUoOTAP&rs=AOn4CLCvAr_rDy-tPTur9C4LG-Ar0QA9bw" 
                channelImage="https://yt3.ggpht.com/39SdTUAgLYAtYk_r8Oc5VNDJIGeDrwmTcuk-oOC23wZlTTCdZa-E_r43J2HZlkoktL0rpdKz258=s68-c-k-c0x00ffffff-no-rj" 
                channel="Bollymood" 
                />
                <VideoCard title="Scarlet Witch Power Scenes" 
                views="6.2M views" 
                timestamp="1 year ago" 
                image="https://i.ytimg.com/vi/_kZSpGB7OOY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-jiihaiX2Y9xyMPbEa2if9HTWpw" 
                channelImage="https://yt3.ggpht.com/p4DQUbD6Ds75DjImnMeCIrlfk7B9D8c-AKVuFBqndML-e6zXKOOydrz1XFwkyRSW6L2_2iRj=s68-c-k-c0x00ffffff-no-rj" 
                channel="Keep Cool Scenes" 
                />
                <VideoCard title="Friends-Joey" 
                views="537k views" 
                timestamp="1 year ago" 
                image="https://i.ytimg.com/vi/H2cZ8ALannY/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB1AaAAuADigIMCAAQARhyIFEoQjAP&rs=AOn4CLAul1QHwX62Xu3PvVVIj4_m9pPLbg" 
                channelImage="https://yt3.ggpht.com/Pfia8PAnhmNwl_lpVZmfZtuobCw7dB2FkDZx5k1WyvSCbmJD-4LhzIKtQ4f3hqsa9McBVHHmZg=s68-c-k-c0x00ffffff-no-rj" 
                channel="Ducky Momo" 
                />
                <VideoCard title="Green Bean| Mr. Bean" 
                views="25M views" 
                timestamp="1 year ago" 
                image="https://i.ytimg.com/an_webp/bUxd3jqCr94/mqdefault_6s.webp?du=3000&sqp=CKrizZ4G&rs=AOn4CLA78pW0CZozW76GpFpoSGZONaRUgA" 
                channelImage="https://yt3.ggpht.com/yEBcMGxb-jLT_1ToMxXl-r2fhSqE-IMB_7WLyNSqK9vl7MYB8JR4X9dDmU3jYrdV_hhKGpCaUg=s68-c-k-c0x00ffffff-no-rj" 
                channel="WildBrain Kids" 
                />
                <VideoCard title="Dumbeldore's Army" 
                views="10M views" 
                timestamp="5 years ago" 
                image="https://i.ytimg.com/vi/3vUtg20L7LM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCs3A3vdTfUX4irX167CRgzJ2WydQ" 
                channelImage="https://yt3.ggpht.com/Bs7QPM2R0Fgl-sR8QiREhRsU8m8hCZxKvPzN3l23JHfoIJvREwAIRmfG9Py21bgA5HQk9S-_uA=s68-c-k-c0x00ffffff-no-rj" 
                channel="Wizarding World" 
                />
                <VideoCard title="Pehli Baar Mile" 
                views="4.2M views" 
                timestamp="1 month ago" 
                image="https://i.ytimg.com/vi/TvdBBqisRIo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA8-LvzGv3ugDwoOB5R1vmVLu-XaA" 
                channelImage="https://yt3.ggpht.com/y3XYbIH_v-UAuoLUeF5V5tdI8My5Vi-Q0Ps8lzJuIBLOWscb3Mjzc_k5pCsVWw-_ax5m7fF6uHk=s88-c-k-c0x00ffffff-no-rj" 
                channel="R Music by Rochak Kohli" 
                />
                <VideoCard title="Aise Kyun-Mismatched" 
                views="2.6M views" 
                timestamp="2 month ago" 
                image="https://i.ytimg.com/vi/sTA2Lj0nH64/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAxsm3xSqinQSV-RvGpWRMhqumFRA" 
                channelImage="https://yt3.ggpht.com/qV8kXGqfRzyI7wGeL0EG351oKE4xK5Oxv2BfrNgYDdpfd8lbiNgiPvf20d06lrTl0-JfGoNGdSY=s88-c-k-c0x00ffffff-no-rj" 
                channel="Rajat-Silver Beats" 
                />
                <VideoCard title="Gulabi Aankhein | Sanam Puri" 
                views="2.5M views" 
                timestamp="1 year ago" 
                image="https://i.ytimg.com/vi/hgi2MYAFgE8/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDZ7zfqw7S6xWpmIwIXmemTkJs_YQ" 
                channelImage="https://yt3.ggpht.com/wVu-NIQG1tpZ9z2ftP9sznogRJdJ0_PFLZiAbv0nHZu4hiifY3DYTkNUIklsAMx8DNwKWYD0jA=s48-c-k-c0x00ffffff-no-nd-rj" 
                channel="Sanam" 
                />
                <VideoCard title="Apna Bna Le-Lofi" 
                views="1M views" 
                timestamp="8 days ago" 
                image="https://i.ytimg.com/vi/J-YdeU3ci24/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAwQZHHQrVr-7-p_jXfudiSrbEyrA" 
                channelImage="https://yt3.ggpht.com/TuzLMkG7PL_y-kmtvMSeCiHuyHCD842D2stitatrR_j0PGDTdjDTZO5IVeae-IgntG5ZBsuG=s68-c-k-c0x00ffffff-no-rj" 
                channel="8D Music" 
                />
                <VideoCard title="Priyanka Chopra's speech will leave you-SPEECHLESS" 
                views="3M views" 
                timestamp="4 months ago" 
                image="https://i.ytimg.com/vi/edIctUyd4RQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC3duT8J4rjV2TA86kHz8LygXSaOQ" 
                channelImage="https://yt3.ggpht.com/y3XYbIH_v-UAuoLUeF5V5tdI8My5Vi-Q0Ps8lzJuIBLOWscb3Mjzc_k5pCsVWw-_ax5m7fF6uHk=s88-c-k-c0x00ffffff-no-rj" 
                channel="Motivation Mentors" 
                />
            </div>
            {/* <h2>Latest Youtube News</h2>
            <News /> */}
        </div>
    )
}

export default RecommendedVideos;