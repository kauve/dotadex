import React from 'react'
import "./index.css"
import {Link} from 'react-scroll'

function ButtonHD({text}) {
  return (
    <div className='button-container'>
    <Link className='buttonHD'  to="searchHero" spy={true} smooth={true} duration={1000}> {text} </Link>
    </div>
  )
}


export default ButtonHD