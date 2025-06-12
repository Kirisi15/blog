import "./post.css"
import myImage from "../../assets/1.jpg"

export const Post = () => {
  return (
    <div className="post">
       <img src={myImage} alt="" className="postImg" />

       <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
            Lorem ipsum dolor sit amet 
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
       </div>
       <p className="postDesc">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod velit delectus praesentium ratione minus est ea aperiam natus quibusdam officia at odit veritatis quas quidem error, maxime quae voluptatum dolores.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod velit delectus praesentium ratione minus est ea aperiam natus quibusdam officia at odit veritatis quas quidem error, maxime quae voluptatum dolores.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod velit delectus praesentium ratione minus est ea aperiam natus quibusdam officia at odit veritatis quas quidem error, maxime quae voluptatum dolores.

       </p>
    </div>
  )
}


