import React from 'react'

export default function About(props) {
    return (
        <>
     
     
<div className="text-center my-5">
<h1 className={`text-${props.mode==='dark' || props.mode==='blue-light' ?'light':'dark'}`}>About Text App</h1> 
<div className={`container d-flex  flex-column align-items-cente bg-gradient p-3 border border-2 border-${props.mode==='dark' || props.mode==='blue-light' ?'light':'dark'}`} >
<p>
  <a className={`btn btn-primary bg-transparent text-${props.mode==='dark' || props.mode==='blue-light'?'light':'dark'} border border-${props.mode==='dark' || props.mode==='blue-light' ?'light':'dark'} my-2`} data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample">
    About Example 1
  </a>
  {/* <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Button with data-bs-target
  </button> */}
</p>
<div className="collapse" id="collapseExample1">
  <div className={`card card-body my-2 bg-transparent text-${props.mode==='dark' || props.mode==='blue-light'?'light':'dark'}`}>
    This is the simple text converter app made with some basics of ReactJS. 
  </div>
</div>


<p>
  <a className={`btn btn-primary bg-transparent text-${props.mode==='dark' || props.mode==='blue-light'?'light':'dark'} border border-${props.mode==='dark' || props.mode==='blue-light' ?'light':'dark'} my-2`} data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
    About Example 2
  </a>
  {/* <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Button with data-bs-target
  </button> */}
</p>
<div className="collapse" id="collapseExample2">
  <div className={`card card-body my-2 bg-transparent text-${props.mode==='dark' || props.mode==='blue-light'?'light':'dark'}`}>
    In this app you can convert your text to desired case i.e. either to UpperCase or to LowerCase. By this app you can remove extra spaces if present and also the text which you wrote or have converted can also be copied for further use.
  </div>
</div>

<p>
  <a className={`btn btn-primary bg-transparent text-${props.mode==='dark' || props.mode==='blue-light'?'light':'dark'} border border-${props.mode==='dark' || props.mode==='blue-light' ?'light':'dark'} my-2`} data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample">
    About Example 3
  </a>
  {/* <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Button with data-bs-target
  </button> */}
</p>
<div className="collapse" id="collapseExample3">
  <div className={`card card-body my-2 bg-transparent text-${props.mode==='dark' || props.mode==='blue-light'?'light':'dark'}`}>
    This app is made for different modes as per the user's convinience.
  </div>
</div>

</div>
</div>
</>
)}


/* <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div> */