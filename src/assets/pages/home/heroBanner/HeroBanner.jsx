import React, { useEffect, useState } from 'react'
import "./style.scss"
import { useNavigate } from 'react-router-dom'
import UseFetch from '../../../hooks/UseFetch'
import { useSelector } from 'react-redux'
import Img from '../../../components/lazyLoadImage/Img'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'


export default function HeroBanner() {
  const [background, setBacground] = useState("")
  const [query, setQuery] = useState("")

  const navigate = useNavigate()
  const { url } = useSelector(state => state.home)
  const { data, loading } = UseFetch("/movie/upcoming")

  const searchQueryHandler = (e) => {
    e.preventDefault()
    if (query.length > 0) {
      navigate(`/search/${query}`)
    }
    setQuery("")
  }
  useEffect(() => {
    let bg = url?.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path
    setBacground(bg)
  }, [data])



  return (
    <>
      <div className="heroBanner">
        {!loading && <div className="backdore-img"><Img src={background} /></div>}
        <div className="opacity-layer"></div>
        <ContentWrapper>
          <div className="heroBannerContent">
            <span className="title">Welcome.</span>
            <span className="subTitle">Millions of movies, Tv shows and people to discover. Explore Now.</span>
          </div>
          <div className="searchInput">
            <form onClick={searchQueryHandler} className='w-75 m-auto btn-group'>
              <input type="text" name='name' value={query} onChange={(e) => setQuery(e.target.value)} className='form-control w-75' placeholder='Search movies & TV Shows...' />
              <button type='submit' className='btn w-25'>Search</button>
            </form>
          </div>
        </ContentWrapper>
      </div>
    </>
  )
}
