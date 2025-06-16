import "./singlePost.css";
import myImage from "../../assets/8.jpg"

export const SinglePost = () => {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src={myImage} alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">
                Title
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                    Author: <b>John Doe</b>
                </span>
                <span className="singlePostDate">
                    1 hour ago
                </span>
            </div>
            <p className="singlePostDesc">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, ratione tempora, temporibus voluptas totam accusantium facilis harum dicta assumenda rem facere amet eveniet odio laudantium suscipit corporis omnis blanditiis numquam.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, ratione tempora, temporibus voluptas totam accusantium facilis harum dicta assumenda rem facere amet eveniet odio laudantium suscipit corporis omnis blanditiis numquam.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, ratione tempora, temporibus voluptas totam accusantium facilis harum dicta assumenda rem facere amet eveniet odio laudantium suscipit corporis omnis blanditiis numquam.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, ratione tempora, temporibus voluptas totam accusantium facilis harum dicta assumenda rem facere amet eveniet odio laudantium suscipit corporis omnis blanditiis numquam.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, ratione tempora, temporibus voluptas totam accusantium facilis harum dicta assumenda rem facere amet eveniet odio laudantium suscipit corporis omnis blanditiis numquam.
                </p>
        </div>
    </div>
  )
}
