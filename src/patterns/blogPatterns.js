import React from 'react'

import blogPatterns from './blogPatterns.module.scss'

const Patterns = () => {
  return (
    <div id="pattern">
      <svg className={blogPatterns.Polygon_2} viewBox="0 0 46 40">
        <path fill="rgba(81,192,192,1)" id="Polygon_2" d="M 22.99999809265137 0 L 46 40 L 0 40 Z">
        </path>
      </svg>
      <svg className={blogPatterns.Ellipse_7}>
        <ellipse fill="rgba(98,130,203,1)" id="Ellipse_7" rx="12.5" ry="12.5" cx="12.5" cy="12.5">
        </ellipse>
      </svg>
      <svg className={blogPatterns.Polygon_1} viewBox="0 0 46 40">
        <path fill="rgba(38,38,38,1)" id="Polygon_1" d="M 22.99999809265137 0 L 46 40 L 0 40 Z">
        </path>
      </svg>
      <svg className={blogPatterns.Polygon_2_p} viewBox="0 0 46 40">
        <path fill="rgba(81,192,192,1)" id="Polygon_2_p" d="M 22.99999809265137 0 L 46 40 L 0 40 Z">
        </path>
      </svg>
      <svg className={blogPatterns.Polygon_11} viewBox="0 0 42 42">
        <path fill="transparent" stroke="rgba(112,112,112,1)" stroke-width="1px" stroke-linejoin="miter" stroke-linecap="butt" stroke-miterlimit="4" shape-rendering="auto" id="Polygon_11" d="M 20.99999809265137 0 L 42 21 L 20.99999809265137 42 L 0 20.99999809265137 Z">
        </path>
      </svg>
      <svg className={blogPatterns.Polygon_5} viewBox="0 0 42 42">
        <path fill="transparent" stroke="rgba(112,112,112,1)" stroke-width="1px" stroke-linejoin="miter" stroke-linecap="butt" stroke-miterlimit="4" shape-rendering="auto" id="Polygon_5" d="M 20.99999809265137 0 L 42 21 L 20.99999809265137 42 L 0 20.99999809265137 Z">
        </path>
      </svg>
    </div>
  )
}

export default Patterns;