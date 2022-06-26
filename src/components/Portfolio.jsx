import React from "react";
import { TwitterTimelineEmbed} from 'react-twitter-embed';

function Portfolio() {
  return (
    <div className="portfolio content">
      <div class="container d-flex align-items-left flex-column">
        <div class="row">
          <div class="col-lg-9 top">
            <div class="row mt-3">
                <h5>Video Games</h5>
                <div class="col-lg-1"></div>
                <div class="col-lg-10 border-top"></div>
                <div class="row">
                  <div class="col-lg-1"></div>
                  <div class="col-lg-2">
                    <img class="port-img" src="../portfolio/cultist.png" alt="cult"></img>
                    <h6 class="port-title">Cult</h6>
                  </div>
                </div>
            </div>
            <div class="row mt-5">
                <h5>Dungeons and Dragons</h5>
                <div class="col-lg-1"></div>
                <div class="col-lg-10 border-top"></div>
                <div class="row">
                  <div class="col-lg-1"></div>
                  <div class="col-lg-2">
                    <img class="port-img" src="../portfolio/evil-book.png" alt="book"></img>
                    <h6 class="port-title">Balathor's Book of Beastly Beginnings</h6>
                  </div>
                </div>
            </div>
            <div class="row mt-5">
                <h5>Digital Tools</h5>
                <div class="col-lg-1"></div>
                <div class="col-lg-10 border-top"></div>
                <div class="row">
                  <div class="col-lg-1"></div>
                  <div class="col-lg-2">
                    <img class="port-img" src="../portfolio/files.png" alt="book"></img>
                    <h6 class="port-title">Appear</h6>
                  </div>
                </div>
            </div>
          </div>
          <div class="col-lg-3">
            <TwitterTimelineEmbed sourceType="profile" screenName="pandamoniumlabs" theme="dark" tweetLimit={5}/>
          </div>
        </div>
      </div>
      </div>
  );
}

export default Portfolio;