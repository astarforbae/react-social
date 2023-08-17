import "./post.css";
import { MoreVert } from "@material-ui/icons";
import {Users} from "../../dummyData";
import { useState } from "react";

export default function Post(props) {
  const [like, setLike] = useState(props.post.like);
  const [isLiked, setIsLiked] = useState(false);
  const user = Users.filter(u=>u.id === props.post?.userId);

  const likeHandler = () =>{
    setLike(isLiked ? like-1 : like+1);
    setIsLiked(!isLiked);
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImg"src={user[0].profilePicture} alt="" />
            <span className="postUsername">{user[0].username}</span>
            <span className="postDate">{props.post.date}</span>
          </div>
          <div className="postTopRight">  
            <MoreVert />
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">{props.post?.desc}</span>
          <img src="/assets/post/1.jpg" alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="/assets/like.png" alt="" className="likeIcon" onClick={likeHandler}/>
            <img src="/assets/heart.png" alt="" className="likeIcon" onClick={likeHandler}/>
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{props.post.comment} comments</span>
          </div>

        </div>
      </div>
    </div>
  )
}
