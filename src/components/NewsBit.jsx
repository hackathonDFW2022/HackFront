import { AiOutlineArrowRight } from "react-icons/ai";

export const NewsBit= (props) =>{
    const {source,author,title,description,url,urlToImage,publishedAt} = props.articles;

    return(
        <div className="pb-10 flex flex-col gap-1">
            <h3 className="bg-green-300 w-fit px-1 py-0.5 rounded-md text-sm text-green-700">{source.name}</h3>
            <a href={url} className="text-xl font-bold">{title}</a>
            <h3 className="underline">By: {author}</h3>
            <h4>{description}</h4>
            <div className="flex justify-between items-center">
                <a href={url} className="flex m-0 items-center"><p>Read more </p><AiOutlineArrowRight className="translate-y-[.15em] ml-[.2em]"/></a>
                <p className="text-xs text-gray-600">{publishedAt}</p>
            </div>
        </div>
    )
}