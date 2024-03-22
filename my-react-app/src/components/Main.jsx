import React from 'react'

function Main(props) {

  const name = 'emmanuel'
  return (
    <div className='Main'>
        <h2>It's me KachiDroid {props.title}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cumque tenetur asperiores sint accusamus impedit totam harum repellendus quidem, quod et. Ducimus deleniti debitis temporibus optio! Corporis iure voluptate tempore.</p>

        {props.title}

        {name}
    </div>
  )
}

export default Main