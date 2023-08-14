import "./sidebar.css"
import { RssFeed, WorkOutline, Event, School, HelpOutline} from "@material-ui/icons"
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr"/>
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/2.jpg" alt="" />
            <span className="sidebarFriendName">Elon Musk</span>
          </li>
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/person/3.jpg" alt="" />
            <span className="sidebarFriendName">Man Man</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
