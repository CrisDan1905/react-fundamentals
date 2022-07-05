// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
// const smallBox = <div className="box box--small" style={{ fontStyle: 'italic', background: 'lightblue' }}>small lightblue box</div>
// const mediumBox = <div className="box box--medium" style={{ fontStyle: 'italic', background: 'pink' }}>medium pink box</div>
// const largeBox = <div className="box box--large" style={{ fontStyle: 'italic', background: 'orange' }}>large orange box</div>

const Box = ({size, style, ...otherPops}) => {
  return (
    <div className={`box box--${size}`} style={{fontStyle: 'italic', ...style}} {...otherPops}/>
  )
}

function App() {
  return (
    <div>
      <Box size="small" style={{ fontStyle: 'italic', background: 'lightblue'}} crazy="test">
        small lightblue box
      </Box>
      <Box size="medium" style={{ fontStyle: 'italic', background: 'pink' }}>
        medium pink box
      </Box>
      <Box size="large" style={{ fontStyle: 'italic', background: 'orange' }}>
        large orange box
      </Box>
      <Box style={{ fontStyle: 'italic', background: 'azure' }}>
        unsized box
      </Box>
    </div>
  )
}

export default App
