import Banner from "./Banner/Banner"
import Best from "./Best/Best"
import Category from "./Category/Category"
import New from "./New/New"
import { Helmet } from 'react-helmet';


function Home() {
  return (
    <div>
       <Helmet>
        <title>Home</title>
      </Helmet>

      <Banner></Banner>
      <Category></Category>
      <New></New>
      <Best></Best>
    </div>
  )
}

export default Home