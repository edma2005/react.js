import TopBar from "../../Components/TopBar/TopBar"
import "../MainPage/MainPage.css"
// import pic from "../../Components/Images/moja foto mniejsza.jpg"

const MainPage = () => {
  return (
    <div>
        <TopBar/>
      <div>
        <h3>Home</h3>
        {/* <img className="avatar" src={pic} alt="avatar" /> */}
        <div className="background">
        <img src={require('../../Components/Images/moja foto mniejsza.jpg')} alt="foto" width="200px" />
        <p>Front End - Back End - Web Development</p>
        </div>
      </div>
    </div>
  )
}

export default MainPage