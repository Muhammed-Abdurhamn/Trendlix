import React from "react";
import { Component } from "../../components/Component";
import "./style.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="overlap-wrapper">
        <div className="overlap">
          <Component className="button" property1="default" />
          <img
            className="LOGO"
            alt="Logo"
            src="https://generation-sessions.s3.amazonaws.com/570062c16f86986705eaf4d47aef47ac/img/logo@2x.png"
          />
          <div className="navigation">
            <div className="div" />
            <div className="rectangle-2" />
            <div className="rectangle-3" />
            <div className="rectangle-4" />
            <div className="rectangle-5" />
            <div className="rectangle-6" />
          </div>
          <h1 className="we-are-creatives">
            <span className="span">We Are Creatives  Volkssssssssss</span>
            <span className="text-wrapper-2">&nbsp;</span>
          </h1>
          <p className="far-far-away-behind">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <br />
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the <br />
            Semantics, a large language ocean.Separated they live in Bookmarksgrove.
          </p>
          <div className="slider">
            <div className="group">
              <div className="div-wrapper">
                <div className="text-wrapper-3">01</div>
              </div>
            </div>
            <div className="group-2">
              <div className="text-wrapper-4">02</div>
            </div>
            <div className="group-3">
              <div className="text-wrapper-4">03</div>
            </div>
          </div>
          <div className="text-wrapper-5">5 Years Of Experiance</div>
          <p className="FACEBOOK-INSTAGRAM">
            FACEBOOK&nbsp;&nbsp;-&nbsp;&nbsp;INSTAGRAM&nbsp;&nbsp;-&nbsp;&nbsp;YOUTUBE&nbsp;&nbsp;-TWITTER
          </p>
        </div>
      </div>
    </div>
  );
};
