import React from 'react';
import Images from './Image';
import Topic from './Topic';
import "./Card.css";



function Card(props) {
   
   
   const  openExternalLink = () => {
        // Get the external link URL from props
        const  link  = props.link;
    
        // Open the link in a new tab or window
        window.open(link, '_blank');
      };
  
    return (
        <>
       
        <div className="cards">
                <div className="card">
                
               <Images imgsrc={props.imgsrc} />
                    <div className="card_info">
                        <span className="card_category">{props.title}
                        </span>
                        <Topic sname={props.sname}/>
                      
                        <button onClick={openExternalLink}>Visit Link</button>
                        
                      </div>
                    </div>
                </div>
               
    
           
        </>
    );
};
export default Card;