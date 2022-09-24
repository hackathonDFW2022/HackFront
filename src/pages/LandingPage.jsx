import Navbar from "../components/Navbar";
import {GiFruitTree} from "react-icons/gi";
import Anchor from "../components/Anchor";
import { useEffect,useState } from "react";
import { NewsBit } from "../components/NewsBit";
import { news } from "../components/news";

const LandingPage = () => {

    // const [news,setNews] = useState([])

    // useEffect(() => {
    //   fetch("https://newsapi.org/v2/top-headlines?q=climate&apiKey=ea3d725ddc504913b30c421d475524d3")
    //   .then(res => res.json())
    //   .then(
    //     (result)=>
    //     {
    //         setNews(result.articles)
    //     },
    //     (error) => {
    //         console.log(error)
    //     }
    //   )
      
    // }, [])
    

    return(
        <> 
            <div className="">
                <div className="flex mx-96 justify-center pt-12">
                    <div className="w-6/12 flex flex-col justify-center">
                        <h1 className="text-green-800 font-bold text-5xl pb-4">Go Green</h1>
                        <p className="leading-6 text-green-700">Green Beings is dedicated to helping you do your part in preventing climate change. </p>
                        <div className="pt-5 flex gap-5">
                            <Anchor text="Take the Test" location="#"/>
                            <Anchor text="About us" location="#"/>
                        </div>
                    </div>
                    <div className="w-6/12 flex justify-center items-center text-green-900 text-[20rem]">
                        <GiFruitTree/>
                    </div>
                </div>
            </div>
            <div className="bg-green-100 flex flex-col px-[26em] py-10">
                { news.map((articles,index) =>{
                        return(
                            <NewsBit key={index} articles={articles}/>
                        )}) }
            </div>

        </>
    )
}

export default LandingPage;

