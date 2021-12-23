import React from "react";
import { Carousel } from "react-bootstrap";

const Image = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.mFBobTnVlxKV_HKPSnlwdwHaKl%26pid%3DApi&f=1"
            alt="First slide"
            height="400px"
            width="400P"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://fr.web.img5.acsta.net/c_310_420/pictures/18/08/08/15/23/5182038.jpg"
            alt="Second slide"
            height="400px"
            width="500px"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmadmeaning.com%2Fwp-content%2Fuploads%2F2018%2F10%2FIMG_8765.jpg&f=1&nofb=1"
            alt="Third slide"
            height="400px"
            width="400px"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Image;
