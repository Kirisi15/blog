import { Sidebar } from "../../components/sidebar/Sidebar";
import { SinglePost } from "../../components/SinglePost/SinglePost";
import "./single.css";

export const Single = () => {
  return (
    <div className="single">
        <SinglePost />  
        <Sidebar />
    </div>
  )
}
