import React from "react";

function Home() {
  return (
    <div className="home content">
      <header class="masthead bg-primary text-white text-center min-vh-100">
        <div class="container d-flex align-items-center flex-column">
            <img class="masthead-avatar mb-5" src="./logo601.png" alt="logo" />
            <h1 class="masthead-heading text-uppercase mb-0">PANDAMONIUM LABS</h1>
            <div class="divider-custom divider-light">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
            </div>
            <p class="masthead-subheading font-weight-light mb-0">Builders - Creators - Developers - Dreamers</p>
        </div>
      </header>

      <div class="container d-flex align-items-left flex-column business-item">
        <div class="row">    
          <div class="col-lg-1 me-auto"></div>
          <h2 class="col-lg-8 ms-auto">Creative projects from A to Z</h2>
          <div class="col-lg-3 me-auto"></div>
        </div>
        <div class="row">       
          <div class="col-lg-1"></div>
          <div class="col-lg-7 me-auto"><p class="lead"> <br></br>Logo design? Check. Backdrop needed? No problem. Gamification? Already done. <br></br>Our team of exceptional experts bring your ideas to their fullest potential. <br></br> One stop shop. Design and implementation done right.</p></div>                
          <div class="col-lg-1"></div>
          <img class="col-lg-2 ms-auto fancy-img" src="./item_1.png" alt="alien_brain"></img>

          <div class="col-lg-1"></div>
        </div>
      </div>

      <div class="container d-flex align-items-left flex-column business-item">
        <div class="row">    
          <div class="col-lg-1 me-auto"></div>
          <h2 class="col-lg-8 ms-auto">Fandom professionally done</h2>
          <div class="col-lg-3 me-auto"></div>
        </div>
        <div class="row right">       
          <div class="col-lg-1"></div>
          <img class="col-lg-2 ms-auto fancy-img" src="./item_2.png" alt="placeholder"></img>
          <div class="col-lg-1"></div>
          <div class="col-lg-7 me-auto"><p class="lead"><br></br>The greatest minds and the biggest nerds come together to bring new life to old things. From fantasy to science fiction, Lovecraft to Warcraft, your favorite things have never looked so fresh.</p></div>                
          <div class="col-lg-1"></div>
        </div>
        <div class="row right-alt">       
          <div class="col-lg-1"></div>
          <div class="col-lg-7 me-auto"><p class="lead"><br></br>The greatest minds and the biggest nerds come together to bring new life to old things. From fantasy to science fiction, Lovecraft to Warcraft, your favorite things have never looked so fresh.</p></div>                
          <div class="col-lg-1"></div>
          <img class="col-lg-2 ms-auto fancy-img" src="./item_2.png" alt="carrousel"></img>
          <div class="col-lg-1"></div>
        </div>
      </div>

      <div class="container d-flex align-items-left flex-column business-item">
        <div class="row">    
          <div class="col-lg-1 me-auto"></div>
          <h2 class="col-lg-8 ms-auto">Community is everything</h2>
          <div class="col-lg-3 me-auto"></div>
        </div>
        <div class="row">       
          <div class="col-lg-1"></div>
          <div class="col-lg-7 ms-auto"><p class="lead"><br></br>Keep an eye on our calendar and socials. We often organise events or contests for kids of all ages. (That means you too Steve.) <br></br> Online as well as offline, we try to keep our community as close and engaged as possible. </p></div>
          <div class="col-lg-1"></div>
          <img class="col-lg-2 ms-auto fancy-img" src="./item_3.png" alt="carrousel"></img>
          <div class="col-lg-1"></div>
        </div>
      </div>

    </div>
  );
}

export default Home;