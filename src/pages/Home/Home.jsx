import Banner from "./Banner/Banner"
import Best from "./Best/Best"
import Category from "./Category/Category"
import New from "./New/New"

function Home() {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <New></New>
      <Best></Best>
    </div>
  )
}

export default Home