import React, { useEffect } from 'react';
import './FlipBook.css';

const FlipBook = () => {
  useEffect(() => {
    const flipBook = (elBook) => {
      const pageLen = elBook.querySelectorAll(".page").length;
      elBook.style.setProperty("--c", 0); // Set current to the first page
      elBook.querySelectorAll(".page").forEach((page, i) => {
        page.style.setProperty("--i", i);
        page.addEventListener("click", (evt) => {
          debugger
          const c = !!evt.target.closest(".back") ? i : i + 1;
          if(c === pageLen) {
            elBook.style.setProperty("--c", 0);
          }else {
            elBook.style.setProperty("--c", c);
          }
          
        });
      });
    };

    document.querySelectorAll(".book").forEach(flipBook);
  }, []);

  return (
    <div className="book-container">
      <div className="book">
        <div className="page">
          <div className="front">
            <h1>My Story</h1>
            <h3>2024.<br />First edition</h3>
          </div>
          <div className="back">
            <h2>Introduction</h2>
            <p>A software engineer by profession, a mother by heart, and a lover of both dogs and adventure. I code with passion, raise a family with love, and carve my way through snowy mountains. Welcome to my story.</p>
          </div>
        </div>

        <div className="page">
          <div className="front">
          <img src="https://picsum.photos/500/400" alt="Img 1" />
          </div>
          <div className="back">
            <h2>The Coder's World</h2>
            <p>Coding is like second nature to me. I love crafting solutions, solving problems, and building ideas. Each line of code represents a piece of the puzzle that makes our digital world come to life.</p>
          </div>
        </div>

        <div className="page">
          <div className="front">
            <h2>A Mom’s Heart</h2>
            <p>Being a mother is my greatest joy. My family gives me purpose and keeps me grounded. Balancing motherhood with my career as a software engineer isn’t always easy, but it's a rewarding journey.</p>
          </div>
          <div className="back">
            <img src={`${process.env.PUBLIC_URL}/mydog.jpg`}/>
          </div>
        </div>

        <div className="page">
          <div className="front">
            <h2>My Furry Friend</h2>
            <p>I’ve always been a dog lover. My loyal canine companion is a constant source of comfort during late-night coding sessions and family moments. He’s a part of the family and an important part of my life.</p>
          </div>
          <div className="back">
          <img src={`${process.env.PUBLIC_URL}/snowboarding.jpg`}/>
          </div>
        </div>

        <div className="page">
          <div className="front">
          <p>Snowboarding is my escape. There’s nothing like the rush of fresh snow under my board as I race down Calgary’s breathtaking mountains. It’s something I love to share with my family, a sport that brings us closer.</p>
          </div>
          <div className="back">
            <h3>To Be Continued…</h3>
            <p>Life is a beautiful journey, constantly evolving. My story is still being written—with my family by my side, new challenges to face, and adventures waiting on the horizon. Stay tuned for the next chapter!</p>
          </div>
        </div>
        <div className="page">
          <div className="front">
          <img src="https://picsum.photos/536/354" alt="Img 2" />
          </div>
          <div className="back">
            </div>
        </div>
      </div>
    </div>
  );
};

export default FlipBook;
