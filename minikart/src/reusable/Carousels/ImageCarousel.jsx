import React, { memo, useState } from "react";
import { Carousel } from "react-bootstrap";
import { imageURL } from "../../utils/apiService/imageURL";
const ImageCarousel = (props) => {
  const { images } = props;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel
        activeIndex={activeIndex}
        className="custom-carousel"
        interval={null}
        onSelect={handleSelect}
      >
        {images.map((image, index) => {
          return (
            <Carousel.Item key={index} className="custom-carousel-item ">
              <img
                className="d-block w-100 custom-carousel-img"
                src={imageURL + image}
                alt=""
                loading="lazy"
              />
              {props.removeBtn ? (
                <div
                  className="image-remove"
                  onClick={() => {
                    props.handleRemove(index);
                    setActiveIndex(0);
                  }}
                >
                  X
                </div>
              ) : (
                ""
              )}
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
};

export default memo(ImageCarousel);
