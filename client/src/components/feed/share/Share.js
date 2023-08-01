import React, { useContext, useRef, useState } from "react";
import userIcon from "../../../assets/icons/user_icon.png";
import cameraIcon from '../../../assets/icons/camera_icon.png';
import tagIcon from '../../../assets/icons/tag_icon.png';
import locIcon from '../../../assets/icons/location_icon.png';
import moodIcon from '../../../assets/icons/mood_icon.png';
import { AuthContext } from '../../../context/AuthContext';
import axios from "axios";

const Share = () => {

  const [file, setFile] = useState(null)
  const { user } = useContext(AuthContext)
  const desc = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userID: user._id,
      desc: desc.current.value
    };

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    
    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="p-4">
      <div className="m-4 p-4 border bg-white rounded-lg">
        <div className="p-3 flex gap-3">
          <img className="w-8 h-8 border border-black rounded-full" src={user.profilePicture ? user.profilePicture : userIcon} alt="no" />
          <input className="me-7 ms-2 ps-5 h-7 w-full rounded-full self-center text-sm bg-slate-100" type="text" placeholder={`What's on your mind ${user.username} ?`}  ref={desc} />
        </div>
        <form className="p-3 flex justify-between" method="post" enctype="multipart/form-data"  onSubmit={submitHandler}  >
          <div className="flex gap-4">
            <label htmlFor="file">
              <img className="h-5 w-5 self-center" src={cameraIcon} alt="" />
              <input type="file" id="file" accept=".png, .jpeg, .jpg" style={{display: "none"}} onChange={(e) => setFile(e.target.files[0])} />
            </label>
            <label htmlFor="tag">
              <img className="h-5 w-5 self-center" src={tagIcon} alt="" />
              <input type="file" id="tag" accept=".png, .jpeg, .jpg" style={{display: "none"}} />
            </label>
            <label htmlFor="location">
              <img className="h-5 w-5 self-center" src={locIcon} alt="" />
              <input type="file" id="location" accept=".png, .jpeg, .jpg" style={{display: "none"}} />
            </label>
            <label htmlFor="mood">
              <img className="h-5 w-5 self-center" src={moodIcon} alt="" />
              <input type="file" id="mood" accept=".png, .jpeg, .jpg" style={{display: "none"}} />
            </label>
          </div>
          <button type="submit" className="border w-20 text-[15px] h-7">Post</button>
        </form>
      </div>
    </div>
  );
};

export default Share;
