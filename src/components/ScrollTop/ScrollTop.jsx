
import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';

  
const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <>
<div className="btn-back-to-top link-secondary" >
<FaArrowCircleUp size={30}  className='' onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}} />
</div>
    </>


  );
}
  
export default ScrollButton;