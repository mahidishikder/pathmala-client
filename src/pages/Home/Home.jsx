import FeaturedBooks from "../../components/Feture/Feture";
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
      <Best></Best>
      <New></New>

      <FeaturedBooks></FeaturedBooks>
    </div>
  )
}

export default Home