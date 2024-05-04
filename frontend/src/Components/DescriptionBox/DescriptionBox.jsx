import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="description-navigator">
        <div className="description-nav-box">Description</div>
        <div className="description-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An E-commerce website ia an online platform that facilates the buying and selling products or services over the internet</p>
        <p>E-commerce typcally displays products or services along with detailed description,images,prices and availability.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
