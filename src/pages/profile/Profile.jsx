import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./profile.css"

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">

              <img className="profileCoverImg" src="assets/post/1.jpg" alt="" />
              <img className="profileUserImg" src="assets/person/1.jpg" alt="" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Irving Zhang</h4>
              <h4 className="profileInfoDesc">Hello my friends</h4>
            </div>
          </div>
          <div className="profileRightBottom">

            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  )
}
