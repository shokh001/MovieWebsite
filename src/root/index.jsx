import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from '@material-ui/core'
import Header from '../components/Header'
import MainNav from '../components/MainNav'
import './root.css'
import Trending from '../pages/Trending'
import Movies from '../pages/Movies'
import Series from '../pages/Series'
import Search from '../pages/Search'

const Root = () => {
    return (
        <Router>
            <Header />
            <div className='root'>
                <Container>
                    <Switch>
                        <Route path='/' exact component={Trending} />
                        <Route path='/movies' component={Movies}/>
                        <Route path='/series' component={Series}/>
                        <Route path='/search' component={Search}/>
                    </Switch>
                </Container>
            </div>
            <MainNav />
        </Router>
    )
}

export default Root
