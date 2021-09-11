import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MovieIcon from '@material-ui/icons/Movie';
import TvIcon from '@material-ui/icons/Tv';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        backgroundColor: '#2d313a',
        zIndex: 100
    },
});

const MainNav = () => {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const history = useHistory();

    useEffect(()=> {
        if(value === 0) history.push('/')
        else if (value === 1) history.push('/movies')
        else if (value === 2) history.push('/series')
        else if (value === 3) history.push('/search')
    }, [value, history])

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction label="Trending" style={{ color: '#fff' }} icon={<WhatshotIcon />} />
            <BottomNavigationAction label="Movie" style={{ color: '#fff' }} icon={<MovieIcon />} />
            <BottomNavigationAction label="TV Series" style={{ color: '#fff' }} icon={<TvIcon />} />
            <BottomNavigationAction label="Search" style={{ color: '#fff' }} icon={<SearchIcon />} />
        </BottomNavigation>
    );
}

export default MainNav