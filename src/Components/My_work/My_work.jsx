import React from 'react'
import './My_work.css'
import theam from '/home/nagaraj/Desktop/javascript/portfolio/src/assets/theme_pattern.svg'
import workdata from '/home/nagaraj/Desktop/javascript/portfolio/src/assets/mywork_data'
import arrow from '/home/nagaraj/Desktop/javascript/portfolio/src/assets/arrow_icon.svg'

const My_work = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theam} alt="" />
      </div>
      <div className="mywork-container">
        {workdata.map((work, index) => {
          return <img key={index} src={work.w_img} alt='' />;
        })}
      </div>
      <div className="mywork-showmore">
          <p>Show more</p>
          <img src={arrow} alt="" />
        </div>
    </div>

  )
}

export default My_work