import React from 'react'

export default function About() {
    return (
        <>
     
     
<div className="text-center my-5">
<h1>About Text App</h1> 
<div className="container d-flex  flex-column align-items-center  bg-light bg-gradient p-3">
<p>
  <a class="btn btn-primary bg-light text-dark border my-2" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample">
    About Example 1
  </a>
  {/* <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Button with data-bs-target
  </button> */}
</p>
<div class="collapse" id="collapseExample1">
  <div class="card card-body my-2">
    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
  </div>
</div>


<p>
  <a class="btn btn-primary bg-light text-dark border my-2" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
    About Example 2
  </a>
  {/* <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Button with data-bs-target
  </button> */}
</p>
<div class="collapse" id="collapseExample2">
  <div class="card card-body my-2">
    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
  </div>
</div>

<p>
  <a class="btn btn-primary bg-light text-dark border my-2" data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample">
    About Example 3
  </a>
  {/* <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Button with data-bs-target
  </button> */}
</p>
<div class="collapse" id="collapseExample3">
  <div class="card card-body my-2">
    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
  </div>
</div>

</div>
</div>

</>
    )
}
