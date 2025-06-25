import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"
import myImage from "../../assets/6.jpg"

export const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img src={myImage} alt="" />
            <label htmlFor="fileInput"><i className="settingsPPIcon fa-solid fa-circle-user"></i></label>
            <input type="file" id="fileInput" style={{display:"none"}}/>
          </div>
            <label >Username</label>
            <input type="text" placeholder="Safak" />
            <label >Email</label>
            <input type="email" placeholder="Safak@gmail.com" />
            <label >Password</label>
            <input type="password" />
            <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}

