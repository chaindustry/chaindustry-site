import React, { useEffect, useState } from "react";
import classes from "./carousel.module.scss";
export const CarouselItem = ({ children }) => {
  return <div className={classes.carousel_item}>{children}</div>;
};

const Carousel = ({ children, xsclass }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const updateIndex = (newindex) => {
      if (newindex < 0) {
        newindex = React.Children.count(children) - 1;
      } else if (newindex >= React.Children.count(children)) {
        newindex = 0;
      }
      setActive(newindex);
    };
    const interval = setInterval(() => {
      updateIndex(active + 1);
    }, 8000);
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [active, children]);
  return (
    <div className={`${classes.carousel} ${xsclass}`}>
      <div
        className={`${classes.inner}`}
        style={{ transform: `translatex(-${active * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
    </div>
  );
};

export default Carousel;
