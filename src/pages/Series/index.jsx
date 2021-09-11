import React, { useState, useEffect } from 'react'
import axios from 'axios';
import CustomPagination from '../../components/Pagination';
import SingleContent from '../../components/SingleContent';
import Genres from '../../components/Genres';
import useGenres from '../../hooks/useGenres';

const Series = () => {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numberOfPages, setNumberOfPages] = useState();
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [genres, setGenres] = useState([]);
    const genreforURL = useGenres(selectedGenres);
    // console.log(genreforURL)

    const fetchMovies = async () => {
        const { data } = await axios.get(    
            `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
        );

        setContent(data.results);
        setNumberOfPages(data.total_pages);
    }

    useEffect(() => {
        fetchMovies();
    }, [page, genreforURL])

    return (
        <div>
            <span className='pageTitle'>TV Series</span>
            <Genres
                type='tv'
                selectedGenres={selectedGenres}
                genres={genres}
                setSelectedGenres={setSelectedGenres}
                setGenres={setGenres}
                setPage={setPage}
            />
            <div className="trending">
                {
                    content && content.map((value) => (
                        <SingleContent
                            key={value.id}
                            date={value.first_air_date || value.release_date}
                            title={value.title || value.name}
                            poster={value.poster_path}
                            id={value.id}
                            media_type='tv'
                            vote_average={value.vote_average}
                        />
                    ))
                }
            </div>
            {
                numberOfPages > 1 &&
                (<CustomPagination setPage={setPage} numberOfPages={numberOfPages} />)
            }
        </div>
    )
}

export default Series
