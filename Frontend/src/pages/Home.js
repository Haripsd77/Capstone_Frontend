import React from 'react';

export function Home() {

  return (
    
    <div className="home" style={{display:'block'}}>
      <div className="All-content">  
          <h1 className="header">Your's Lovely Closet</h1>
      
          <h3 style={{paddingLeft:'10px',color:"black",position:"relative"}}><u>What we can do here!</u></h3>
      
          <ul className="list-group" style={{fontFamily:"Cursive",fontSize:20,fontWeight:"bold",position:"relative"}}>
            <li className='li'>Add Dresses in Closet 👗</li>
            <li className='li'>Add Dresses in Your favourites ❤️</li>
            <li className='li'>Delete Dresses ❌</li>
            <li className='li'>Edit Dresses 📝</li>
            <li className='li'>Play Color-Game 🏳️‍🌈</li>
            <li className='li'>Add Information about dresses ℹ️</li>
          </ul>
      </div>
      
      </div>
  );
}
