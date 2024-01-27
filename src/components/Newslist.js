import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../features/newsSlices';
const defaultImage = process.env.PUBLIC_URL +'/news-default-big.png';


export default function Newslist(category){
    const dispatch = useDispatch();
    const newstate = useSelector((state) => state.news);
    useEffect(() => {
        dispatch(fetchNews(category));
    }, [dispatch, category]);
    console.log("state ==> ",newstate.data);
    const descriptionStyle = {};
    const smallStyle = {};
    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const convertDate = (dateToconver) => {
        console.log(dateToconver);
        var date = new Date(dateToconver);
        return date.toUTCString();
    }
    return(
        <>
            <div className='container my-3'>
            <h2 className='text-center'>Top Headlines - {capitalizeFirstLetter(category.category)}</h2>
                <div className='row'>
                
                    {newstate.data.articles && newstate.data.articles.map((elements) => {   
                        console.log("elements.pubhishDate==>",elements.publishedAt) 
                        return <div className='col-md-4' key={elements.url}>
                            <div className='my-3'>
                                <div className="card" style={{width: '18rem'}}>
                                    <img src={!elements.urlToImage ? defaultImage : elements.urlToImage} className="card-img-top" alt="#" />
                                    <div className="card-body">
                                        <h6 className="card-title">{(elements.title != null && elements.title.length > 20) ? elements.title.substring(0,20) : elements.title }</h6>
                                        <div style={descriptionStyle} className="card-text">{ (elements.description != null && elements.description.length > 120) ? elements.description.substring(0,120) : elements.description }</div>
                                        <small style={smallStyle} className='text-muted'>By {!elements.author ? "Unknown" : elements.author} on {convertDate(elements.publishedAt)}</small>
                                        
                                        <a href={elements.newUrl} target='_blank' className="float-right btn-sm btn btn-primary">Read More <i className="bi bi-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}