import React, { useState } from 'react'

export const Exercise1 = () => {
  const rootClassName = 'exercise1'
  const [circles, setCircles] = useState<JSX.Element[]>([])
  const [previousCircles, setPreviousCircles] = useState<JSX.Element[]>([])

  const createCircle = (xPos: number, yPos: number) => {
    const circleRadius = 30;
    const newCircle = (
      <div
        key={`circle-${xPos}-${yPos}`} 
          className={`${rootClassName}__circle`} 
          style={{
            width: `${circleRadius * 2}px`,
            height: `${circleRadius * 2}px`,
            left: `${xPos - circleRadius}px`, // decrising the radius of the circle so that it appears on the center of the cursor instead of all the way to the left
            top: `${yPos - circleRadius}px`, // decrising the radius of the circle so that it appears on the center of the cursor instead of all the way to the top
          }}>
      </div>
    );
    setCircles([...circles, newCircle]);
    setPreviousCircles([...circles, newCircle]);
  } 


  const handleMouseClick = (event: React.MouseEvent<HTMLDivElement>) => {
    createCircle(event.clientX, event.clientY);
  }

  const undoHandler = () => {
    setCircles((current) => {
      return current.slice(0, -1)
    })
  }
  

  const redoHandler = () => {
   setCircles([
    ...circles, previousCircles[circles.length] 
   ])
  }

  return (
    <section className={rootClassName}>
      <h1>Click on the screen to create circles</h1>
      <div className='buttons'>
        <button onClick={undoHandler} disabled={circles.length === 0}>Undo</button>
        <button disabled={previousCircles.length === circles.length} onClick={redoHandler}>Redo</button>
      </div>
      <div className={`${rootClassName}__clickable-area`} onClick={handleMouseClick}>
          {circles}
      </div>
    </section>
  )
}
