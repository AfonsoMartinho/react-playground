import React, { Children, useState } from 'react'

export const Exercise1 = () => {
  const rootClassName = 'exercise1'
  const [xPosition, setXPosition] = useState(0);
  const [yPosition, setYPosition] = useState(0);
  const [circles, setCircles] = useState<JSX.Element[]>()

  const createCircle = (xPos: number, yPos: number) => {
    setCircles(
      [
       (<div 
        className={`${rootClassName}__circle`} 
        style={{
          left: `${xPos}px`,
          top: `${yPos}px`,
        }}>
          <h1>CIRCLE</h1>
      </div>)
      ]
    )
  } 


  const handleMouseClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setXPosition(event.clientX);
    setYPosition(event.clientY);
    createCircle(event.clientX, event.clientY);
  }
  return (
    <section className={rootClassName}>
      <div className={`${rootClassName}__clickable-area`} onClick={handleMouseClick}>
          {xPosition},{yPosition}
          {circles}
      </div>
    </section>
  )
}
