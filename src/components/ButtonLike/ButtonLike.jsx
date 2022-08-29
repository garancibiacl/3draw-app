import {React, useState} from "react";
import { FaRegHeart } from "react-icons/fa"
import { FaHeart } from "react-icons/fa"


export  const ButtonLike = () => {
const [like, setLike] = useState(false)
  return (
    <div >
      <span className="wish-icon" onClick={() => setLike((prevLike) => !prevLike)}>
      {like ? <FaHeart color="#ff6161" size={20}  /> : <FaRegHeart color="#abb0b8" size={20} /> }
</span>
    </div>
  );
}





