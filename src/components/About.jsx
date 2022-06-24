import React from "react";

function About() {
  return (
    <div className="about content" id="about">
        <div class="bg-primary text-white mb-0 masthead">
            <div class="container">
                <div class="text-center mt-4">
                        <img class="profile-avatar mb-5" src="./profiles/jory.jpg" alt="headshot jory" />  
                </div>
                <div class="row">
                    <div class="col-lg-4 ms-auto"><p class="lead">Hi, I am Jory. I like to create and build things, sometimes they might even be usefull. I love getting hands on and just design whatever occupies my mind at any given time.</p></div>
                    <div class="col-lg-4 me-auto"><p class="lead">If you would like to provide any feedback or would just like to chat, please contact me via email, Reddit or Twitter.</p></div>
                </div>
                <div class="text-center">
                    <div class="mb-5 mb-lg-0">
                        <a class="btn btn-outline-light btn-social mx-1" rel="noreferrer" href="mailto:info@pandamoniumlabs.com" target="_blank"><i class="fab fa-solid fa-envelope"></i></a>
                        <a class="btn btn-outline-light btn-social mx-1" rel="noreferrer" href="https://twitter.com/PandamoniumLabs" target="_blank"><i class="fab fa-fw fa-twitter"></i></a>
                        <a class="btn btn-outline-light btn-social mx-1" rel="noreferrer" href="https://www.linkedin.com/in/jory-jackmaer-878222a4/" target="_blank"><i class="fab fa-fw fa-linkedin-in"></i></a>
                        <a class="btn btn-outline-light btn-social mx-1" rel="noreferrer" href="https://www.reddit.com/user/PandamoniumLabs" target="_blank"><i class="fab fa-fw fa-reddit"></i></a>                   
                        <a class="btn btn-outline-light btn-social mx-1" rel="noreferrer" href="https://github.com/DevDjuke"target="_blank"><i class="fab fa-fw fa-github"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default About;