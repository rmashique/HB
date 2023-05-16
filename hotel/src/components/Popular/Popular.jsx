import React from "react";
import "./popular.css";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";

import img from '../../Assets/img5.jpg';
import img6 from '../../Assets/img6.jpg';
import img1 from "../../Assets/img1.jpg";
import img2 from "../../Assets/img2.jpg";
import img3 from "../../Assets/img3.jpg";


const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "df ldn",
    location: "Peru",
    grade: "CULTURAL RELAX",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "ffd kdfjh",
    location: "Canada",
    grade: "CULTURAL RELAX",
  },

  {
    id: 3,
    imgSrc: img3,
    destTitle: "dkh sddg",
    location: "UK",
    grade: "CULTURAL RELAX",
  },

  {
    id: 4,
    imgSrc: img6,
    destTitle: "gdfd fbdf",
    location: "USA",
    grade: "CULTURAL RELAX",
  },
];

const Popular = () => {
  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">The Best Hotels For You</h2>
            <p>
              These are some of the hotels that we highly recomended for you. We
              gurantee the quality of the service, the food, the hotel area and
              the various other aspects.
            </p>
          </div>
          <div className="iconsDiv flex">
            <BsArrowLeftShort className="icon leftIcon" />
            <BsArrowRightShort className="icon" />
          </div>
        </div>
        <div className="mainContent grid">
          
          

          <div className="singleDestination">
            <div className="destImage">
              <img src={img} alt="Image Title" />

              <div className="overlayInfo">
                <h3>Java Heritage Hotel</h3>
                <p>Start from $100/night</p>
                <button className="btn">
                   Book Now
                </button>

                <BsArrowRightShort className="icon" />
              </div>
            </div>

            <div className="destFooter">
              <div className="number">01</div>
              <div className="destText flex">
                <h6>London</h6>
                <span className="flex">
                  <span className="dot">
                    <BsDot className="icon" />
                  </span>
                  Dot
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popular;
