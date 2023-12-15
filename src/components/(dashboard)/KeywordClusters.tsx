import Link from "next/link"

const KeywordClusters = ({...props}) => {

    interface Cluster {
        keyword: string;
        slug: string;
      }
      
      interface Clusters {
        [key: string]: Cluster;
      }
    
    if (props.json == "most searched") { 
        console.log("most searched component")
    }
    if (props.json == "ranking opportunities") { 
        console.log("ranking opportunities component")
    }

    const most_searched_cluster: Clusters = {
        1 : {
            keyword: "custom video",
            slug: "custom_video_csv"
        },
        2 : {
            keyword: "customer data platform",
            slug: "customer_data_platform_kws"
        },
        3 : {
            keyword: "meeting management",
            slug: "meeting_management_kws"
        },
        4 : {
            keyword: "sales training",
            slug: "sales_training_kws"
        },
        5 : {
            keyword: "screen recording",
            slug: "screen_recording_software_kws"
        },
        6 : {
            keyword: "video email",
            slug: "video_email_kws"
        },
    }
    const ranking_opportunities_cluster: Clusters = {
        1 : {
            keyword: "ai generated text",
            slug: "ai_generated_text"
        },
        2 : {
            keyword: "audio translator",
            slug: "audio_translator"
        },
        3 : {
            keyword: "avatars",
            slug: "avatars"
        },
        4 : {
            keyword: "custom video",
            slug: "custom_video_csv"
        },
        5 : {
            keyword: "deepfake voice",
            slug: "deepfake_voice"
        },
        6 : {
            keyword: "large asl",
            slug: "large_asl"
        },
        7 : {
            keyword: "videos definition",
            slug: "videos_definition"
        },
        8 : {
            keyword: "video training",
            slug: "video_training"
        },
        9 : {
            keyword: "video recording",
            slug: "video_recording"
        },
        10 : {
            keyword: "speech synthesis",
            slug: "speech_synthesis"
        },
        11 : {
            keyword: "synonyms machine learning",
            slug: "method_synonyms"
        },
    }


            
                if(props.json == "most searched"){
                    return (
                    <>
                    {Object.keys(most_searched_cluster).map((key) => {
                        const cluster = most_searched_cluster[key];
                        if (cluster) {
                        return (
                            <div className="">
                                <Link
                                        key={key}
                                        href={`/searches/${cluster.slug}`}
                                        className="text-sm text-gray-700 hover:underline"
                                    >
                                    {cluster.keyword}
                                </Link>
                            </div>
                        
                        );
                        }
                        return null; // Return null if no condition is met
                    })}
                    </>
                    )
                    
                } 
                else if (props.json == "ranking opportunities") {
                    return (
                        <>
                        {Object.keys(ranking_opportunities_cluster).map((key) => {
                            const cluster = ranking_opportunities_cluster[key];
                            if (cluster) {
                            return (
                                <div className="">
                                    <Link
                                            key={key}
                                            href={`/searches/${cluster.slug}`}
                                            className="text-sm text-gray-700 hover:underline"
                                        >
                                        {cluster.keyword}
                                    </Link>
                                </div>
                            
                            );
                            }
                            return null; // Return null if no condition is met
                        })}
                        </>
                        )
                }
            

    
}

export default KeywordClusters