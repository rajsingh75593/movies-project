import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchDataFromApi } from "./Api"
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration } from "./store/homeSlice";
import Home from "./assets/pages/home/Home";
import Header from "./assets/components/header/Header";
import Footer from "./assets/components/footer/Footer";
import PageNotFound from "./assets/pages/404/PageNotFound";
import Details from "./assets/pages/details/Details";
import Explore from "./assets/pages/explore/Explore";
import SearchResult from "./assets/pages/searchResult/SearchResult";

function App() {
  const dispatch = useDispatch()
  const { url } = useSelector(state => state.home)

  const fetchApiConfig = () => {
    fetchDataFromApi('/configuration').then((res) => {
      const url = {
        backdrop: res.images.base_url + "original",
        poster: res.images.base_url + "original",
        profile: res.images.base_url + "original",
      }
      dispatch(getApiConfiguration(url))
    })
  }

  useEffect(() => {
    fetchApiConfig()
  }, [])

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mediaType/:id" element={<Details />} />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route path="/explore/:mediaType" element={<Explore />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
