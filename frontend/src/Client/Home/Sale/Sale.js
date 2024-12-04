import React, { useState } from "react";
import { gsap } from "gsap";
import "./Sale.css";

const itemsData = [
  { id: 1, label: "salmon curry", imageUrl: "images/salmon-curry.gif" },
  { id: 2, label: "fish sandwich", imageUrl: "images/fish-sandwich.gif" },
  { id: 3, label: "shakshouka", imageUrl: "images/shakshouka.gif" },
  { id: 4, label: "creme brulee", imageUrl: "images/creme-brulee.gif" },
];

const App = () => {
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleExpand = (index) => {
    setClickedIndex((prevIndex) => (prevIndex === index ? null : index));

    itemsData.forEach((_, ind) => {
      const item = document.querySelector(`.item-${ind}`);
      const overlay = item.querySelector(".overlay");
      const menu = item.querySelector(".menu");

      const isCurrent = index === ind;
      gsap.killTweensOf(item);
      gsap.to(item, {
        width: isCurrent ? (clickedIndex === index ? "10vw" : "25vw") : "8vw",
        duration: 2.5,
        ease: "elastic(1, .3)",
      });

      gsap.killTweensOf(overlay);
      gsap.to(overlay, {
        opacity: isCurrent ? (clickedIndex === index ? "0" : "1") : "0",
        duration: 2.5,
        ease: "elastic(1, .3)",
      });

      gsap.killTweensOf(menu);
      gsap.to(menu, {
        opacity: isCurrent ? (clickedIndex === index ? "1" : "0") : "0",
        duration: 2.5,
        ease: "elastic(1, .3)",
      });
    });
  };

  return (
    <div>
      <h2>
        Helloresto <br />
        <span>menu list</span>
      </h2>
      <div className="group">
        {itemsData.map((item, index) => (
          <div
            key={item.id}
            className={`item item-${index}`}
            style={{ "--url": `url(${item.imageUrl})` }}
            onClick={() => handleExpand(index)}
          >
            <div className="overlay">
              <div className="menu">
                <label>{item.label}</label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
