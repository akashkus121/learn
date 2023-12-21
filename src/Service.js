import React from"react";
import Sdata from "./Sdata";
import Card from "./Card";
import './index.css';
const Service=()=>{
    return(
<>
{  Sdata.map((val) => (
      <div key={val.tey}>
        <h1 className='heading_style'>{val.heading}</h1>
        {val.websites.map((website) => (
          <Card
            key={website.key}
            imgsrc={website.imgsrc}
            title={website.title}
            sname={website.sname}
            link={website.link}
          />
        ))}
      </div>
    ))}
</>
    );
};
export default Service;