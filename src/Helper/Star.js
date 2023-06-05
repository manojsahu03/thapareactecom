import { Box } from '@mui/material';
import React from 'react';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

function Star({stars,reviews}) {
    const ratingStar=Array.from({length:5},(elem,index)=>{let number = index + 0.5;
        // debugger;
        return (
          <span key={index}>
            {stars >= index + 1 ? (
              <FaStar className="icon"  style={{color:"orange"}}/>
            ) : stars >= number ? (
              <FaStarHalfAlt className="icon" style={{color:"orange"}} />
            ) : (
              <AiOutlineStar className="icon" />
            )}
          </span>
        );
      });
  return (
   <Box>
     {ratingStar}
        <p>({reviews} customer reviews)</p>

   </Box>
  )
}

export default Star
