import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Sale.css";

const Sale = () => {
  const [clickedItems, setClickedItems] = useState([
    false,
    false,
    false,
    false,
  ]);

  const itemsRef = useRef([]);

  useEffect(() => {
    const items = itemsRef.current;

    if (!items || items.length === 0) return;

    const expand = (index) => {
      const newClickedItems = [...clickedItems];
      newClickedItems[index] = !newClickedItems[index];
      setClickedItems(newClickedItems);

      items.forEach((it, i) => {
        if (index === i) return;
        gsap.to(it, {
          width: "10vw",
          scale: 1,
          duration: 2,
          ease: "elastic(1, .6)",
        });
        const overlay = it.querySelector(".overlay");
        const menu = it.querySelector(".menu");
        if (overlay && menu) {
          gsap.to(overlay, {
            opacity: 0,
            duration: 2.5,
            ease: "elastic(1, .3)",
          });
          gsap.to(menu, { opacity: 0, duration: 2.5, ease: "elastic(1, .3)" });
        }
      });

      const item = items[index];
      const overlay = item.querySelector(".overlay");
      const menu = item.querySelector(".menu");

      if (!overlay || !menu) return;

      gsap.to(item, {
        width: newClickedItems[index] ? "25vw" : "10vw",
        scale: newClickedItems[index] ? 1.2 : 1,
        duration: 2.5,
        ease: "elastic(1, .3)",
      });

      gsap.to(overlay, {
        opacity: newClickedItems[index] ? 1 : 0,
        duration: 2.5,
        ease: "elastic(1, .3)",
      });

      gsap.to(menu, {
        opacity: newClickedItems[index] ? 1 : 0,
        duration: 2.5,
        ease: "elastic(1, .3)",
      });
    };

    // Kiểm tra trước khi thêm sự kiện click
    if (items && items.length > 0) {
      items.forEach((item, index) => {
        item.addEventListener("click", () => expand(index));
      });
    }

    // Cleanup: remove event listeners khi component unmount hoặc cập nhật
    return () => {
      if (items && items.length > 0) {
        items.forEach((item) => {
          item.removeEventListener("click", expand);
        });
      }
    };
  }, [clickedItems]);

  return (
    <div className="Sale">
      <h2>
        Helloresto <br />
        <span>menulist</span>
      </h2>

      <div className="group">
        <div
          className="item-list"
          ref={(el) => (itemsRef.current[0] = el)}
          style={{
            "--url":
              "url('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmJjMTJicW5uODJ0dGN0Nm5uenYwYjVmYXIwbjlwcXpsN2ZkdWc1cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/isiqjpQhGVvCo/giphy.webp')",
          }}
        >
          <div className="overlay"></div>
          <div className="menu">
            <label>salmon curry</label>
          </div>
        </div>
        <div
          className="item-list"
          ref={(el) => (itemsRef.current[1] = el)}
          style={{
            "--url":
              "url('https://media.giphy.com/media/oeFYnddcjgXtu/giphy.gif?cid=790b7611fa4i81rkz3fs3hp9t0l36fkaqui2y99ve82g7m74&ep=v1_gifs_search&rid=giphy.gif&ct=g')",
          }}
        >
          <div className="overlay"></div>
          <div className="menu">
            <label>fish sandwich</label>
          </div>
        </div>
        <div
          className="item-list"
          ref={(el) => (itemsRef.current[2] = el)}
          style={{
            "--url":
              "url('https://media.giphy.com/media/6Bdx9wl8sIh4A/giphy.gif?cid=790b7611l7ryu4drulz6bb4ec0ip0q7x9fkp036l2nk7dst2&ep=v1_gifs_search&rid=giphy.gif&ct=g')",
          }}
        >
          <div className="overlay"></div>
          <div className="menu">
            <label>shakshouka</label>
          </div>
        </div>
        <div
          className="item-list"
          ref={(el) => (itemsRef.current[3] = el)}
          style={{
            "--url":
              "url('https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTFpZ2xkZTNyZHRoaDJyc2ZrbGc0cG4xanppNm0zOHAydHBjbDZsZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/5n5CPcCgv8dkByKoxN/giphy.gif')",
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
