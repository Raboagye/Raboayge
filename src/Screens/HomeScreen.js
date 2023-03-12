import React from 'react'
import "./HomeScreen.css"
import Nav from '../Nav'
import Banner from '../Banner'
import requests from '../Requests'
import Row from '../Row'

function HomeScreen() {
  return (
    <div className='homeScreen'>
        <Nav />
        
        <Banner />

        <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row
          title="Trending Now"
          fetchUrl={requests.fetchTrending}
        />
        <Row
          title="Top Rated"
          fetchUrl={requests.fetchTopRated}
        />
        <Row
          title="Comedy Movies"
          fetchUrl={requests.fetchComedyMovies}
        />
        <Row
          title="Horror Movies"
          fetchUrl={requests.fetchHorrowMovies}
        />
        <Row
          title="Romance"
          fetchUrl={requests.fetchRomanceMovies}
        />
        <Row
          title="Documentaries"
          fetchUrl={requests.fetchDocumentaries}
        />
        
        
       

        {/* Row */}
    </div>
  )
}

export default HomeScreen