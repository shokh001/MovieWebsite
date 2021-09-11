import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react';
import CustomPagination from '../../components/Pagination';
import SingleContent from '../../components/SingleContent';
import './trending.css'

const Trending = () => {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numberOfPages, setNumberOfPages] = useState();

    const fetchTrending = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
        );

        setContent(data.results);
        setNumberOfPages(data.total_pages);
    }

    useEffect(() => {
        fetchTrending();
    }, [page])

    return (
        <div>
            <span className='pageTitle'>Trending</span>
            <div className="trending">
                {
                    content && content.map((value) => (
                        <SingleContent
                            key={value.id}
                            date={value.first_air_date || value.release_date}
                            title={value.title || value.name}
                            poster={value.poster_path}
                            id={value.id}
                            media_type={value.media_type}
                            vote_average={value.vote_average}
                        />
                    ))
                }
            </div>
            <CustomPagination numberOfPages={numberOfPages} setPage={setPage} />
        </div>
    )
}

export default Trending
