import React from "react";
import user from "../../../assets/icons/user_icon.png";
import cameraIcon from '../../../assets/icons/camera_icon.png';
import tagIcon from '../../../assets/icons/tag_icon.png';
import locIcon from '../../../assets/icons/location_icon.png';
import moodIcon from '../../../assets/icons/mood_icon.png';

const Share = () => {
  return (
    <div className="p-4">
      <div className="m-4 p-4 border bg-white rounded-lg">
        <div className="p-3 flex gap-3">
          <img className="w-8 h-8 border border-black rounded-full" src={user} alt="no" />
          <input className="me-7 ms-2 ps-5 h-7 w-full rounded-full self-center text-sm bg-slate-100" type="text" placeholder="What's on your mind?" />
        </div>
        <div className="p-3 flex justify-between">
          <div className="flex gap-4">
            <img className="h-5 w-5 self-center" src={cameraIcon} alt="" />
            <img className="h-5 w-5 self-center" src={tagIcon} alt="" />
            <img className="h-5 w-5 self-center" src={locIcon} alt="" />
            <img className="h-5 w-5 self-center" src={moodIcon} alt="" />
          </div>
          <button className="border w-20 text-[15px] h-7">Post</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
