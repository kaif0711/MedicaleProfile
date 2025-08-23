import React,{ useEffect }  from 'react'
import Header from '../components/Header'
import TopDocters from '../components/TopDocters'
import Banner from '../components/Banner'

const Home = () => {
  useEffect(() => {
    document.title = 'Mansuri Occupational Health Consultancy';
  }, []);

  return (
    <div>
        <Header/>
        <TopDocters/>
        <Banner/>
    </div>
  )
}

export default Home