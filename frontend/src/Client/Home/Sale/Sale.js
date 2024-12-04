import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./Sale.css";

const Sale = () => {
    useEffect(() => {
        const items = document.querySelectorAll(".item-list");
      
        if (!items || items.length === 0) return; // Kiểm tra nếu không có phần tử
      
        items.forEach((item, i) => {
          item.clicked = false;
          const overlay = item.querySelector(".overlay");
          const menu = item.querySelector(".menu");
      
          if (!overlay || !menu) return; // Kiểm tra nếu phần tử con không tồn tại
      
          item.addEventListener("click", () => {
            const expand = (item, i) => {
              items.forEach((it, ind) => {
                if (i === ind) return;
                it.clicked = false;
              });
      
              // Item
              gsap.to(items, {
                width: item.clicked ? "10vw" : "8vw",
                duration: 2,
                ease: "elastic(1, .6)",
              });
              item.clicked = !item.clicked;
              gsap.to(item, {
                width: item.clicked ? "25vw" : "10vw",
                duration: 2.5,
                ease: "elastic(1, .3)",
              });
      
              // Overlay
              gsap.to(overlay, {
                opacity: item.clicked ? "1" : "0",
                duration: 2.5,
                ease: "elastic(1, .3)",
              });
      
              // Menu
              gsap.to(menu, {
                opacity: item.clicked ? "1" : "0",
                duration: 2.5,
                ease: "elastic(1, .3)",
              });
            };
      
            expand(item, i);
          });
        });
      }, []);
      

  return (
    <div className="Sale">
      <h2>
        Helloresto <br />
        <span>menulist</span>
      </h2>

      <div className="group">
        <div
          className="item-list"
          style={{
            "--url": "url('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmJjMTJicW5uODJ0dGN0Nm5uenYwYjVmYXIwbjlwcXpsN2ZkdWc1cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/isiqjpQhGVvCo/giphy.webp')",
          }}
        >
          <div className="overlay"></div>
          <div className="menu">
            <label>salmon curry</label>
          </div>
        </div>
        <div
          className="item-list"
          style={{
            "--url": "url('https://media.giphy.com/media/oeFYnddcjgXtu/giphy.gif?cid=790b7611fa4i81rkz3fs3hp9t0l36fkaqui2y99ve82g7m74&ep=v1_gifs_search&rid=giphy.gif&ct=g')",
          }}
        >
          <div className="overlay"></div>
          <div className="menu">
            <label>fish sandwich</label>
          </div>
        </div>
        <div
          className="item-list"
          style={{
            "--url": "url('https://media.giphy.com/media/6Bdx9wl8sIh4A/giphy.gif?cid=790b7611l7ryu4drulz6bb4ec0ip0q7x9fkp036l2nk7dst2&ep=v1_gifs_search&rid=giphy.gif&ct=g')",
          }}
        >
          <div className="overlay"></div>
          <div className="menu">
            <label>shakshouka</label>
          </div>
        </div>
        <div
          className="item-list"
          style={{
            "--url": "url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTFpZ2xkZTNyZHRoaDJyc2ZrbGc0cG4xanppNm0zOHAydHBjbDZsZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/5n5CPcCgv8dkByKoxN/giphy.gif')",
          }}
        >
          <div className="overlay"></div>
          <div className="menu">
            <label>creme brulee</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale;