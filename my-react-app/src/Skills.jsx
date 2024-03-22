import React from 'react'

function Skills(props) {
    let skillslist = props.skills.map((skills)=> <li>{skills}</li>)
  return (
    <div>
        {/* <h1 style={{marginRight:'40px'}}>{props.skills}</h1> */}
        <ul>
            <a href="/">{skillslist}</a>
        </ul>
    </div>
  )
}

export default Skills