import React, { useEffect, useState, useRef } from 'react';
import './FlipBook.css';

const FlipBook = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const flipIntervalRef = useRef(null);  // To store the interval reference

  useEffect(() => {
    const flipBook = (elBook) => {
      const pageLen = elBook.querySelectorAll(".page").length;

      // Set up event listeners for manual flipping
      elBook.querySelectorAll(".page").forEach((page, i) => {
        page.style.setProperty("--i", i);
        page.addEventListener("click", (evt) => {
          const c = !!evt.target.closest(".back") ? i : i + 1;
          if (c === pageLen) {
            setCurrentPage(0);  // Go to the first page if we reach the last page
          } else {
            setCurrentPage(c);  // Move to the clicked page
          }
        });
      });
    };

    // Initialize the flipbook on the book element
    const bookEl = document.querySelector(".book");
    flipBook(bookEl);
    
    // Start the auto-flip logic
    startAutoFlip();

    // Clean up on component unmount
    return () => {
      stopAutoFlip();
    };
  }, []);

  // Function to start auto-flipping every 2 seconds
  const startAutoFlip = () => {
    flipIntervalRef.current = setInterval(() => {
      setCurrentPage(prevPage => {
        const bookEl = document.querySelector(".book");
        const pageLen = bookEl.querySelectorAll(".page").length;
        const nextPage = prevPage + 1 < pageLen ? prevPage + 1 : 0;  // Reset to first page if we reach the end
        return nextPage;
      });
    }, 3000);
  };

  // Function to stop auto-flipping
  const stopAutoFlip = () => {
    clearInterval(flipIntervalRef.current);
  };

  // Mouse event handlers to stop/start flipping on hover/leave
  const handleMouseEnter = () => {
    stopAutoFlip();
  };

  const handleMouseLeave = () => {
    startAutoFlip();
  };

  useEffect(() => {
    const bookEl = document.querySelector(".book");
    if (bookEl) {
      bookEl.style.setProperty("--c", currentPage);
    }
  }, [currentPage]);

  return (
    <div className="book-container">
      <div
        className="book"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="page">
          <div className="front">
            <h1>My Story</h1>
            <h3>2024.<br />First edition</h3>
          </div>
          <div className="back">
            <h2>I AM YINGBO LIU, A ...</h2>
            <p>software engineer with over 10 years of experience in full-stack development. Proven expertise in designing, developing, and maintaining complex applications across diverse industries. Proficient in a variety of programming languages and frameworks.
              I AM ALSO A ...</p>
          </div>
        </div>

        <div className="page">
          <div className="front">
            <img src={`${process.env.PUBLIC_URL}/mybio.jpg`} alt="Img 1" />
          </div>
          <div className="back">
            <p>MOTHER by heart, and a LOVER of both dogs and adventure. I code with passion, raise a family with love, and carve my way through snowy mountains. Welcome to my story.</p>
          </div>
        </div>

        <div className="page">
          <div className="front">
            <img src={`${process.env.PUBLIC_URL}/tea.jpg`}  alt="Img 1" />
          </div>
          <div className="back">
            <img src={`${process.env.PUBLIC_URL}/holdhands.jpg`} alt="Hold hands" />
          </div>
        </div>

        <div className="page">
          <div className="front">
            <h2>A Mom’s Heart</h2>
            <p>Being a mother is my greatest joy. My family gives me purpose and keeps me grounded. Balancing motherhood with my career as a software engineer isn’t always easy, but it's a rewarding journey.</p>
          </div>
          <div className="back">
            <img src={`${process.env.PUBLIC_URL}/mydog.jpg`} alt="My dog" />
          </div>
        </div>

        <div className="page">
          <div className="front">
            <h2>My Furry Friend</h2>
            <p>I’ve always been a dog lover. My loyal canine companion is a constant source of comfort during late-night coding sessions and family moments. He’s a part of the family and an important part of my life.</p>
          </div>
          <div className="back">
            <p>Snowboarding is my escape. There’s nothing like the rush of fresh snow under my board as I race down Calgary’s breathtaking mountains. It’s something I love to share with my family, a sport that brings us closer.</p>
          </div>
        </div>

        <div className="page">
          <div className="front">
            <img src={`${process.env.PUBLIC_URL}/snowboarding.jpg`} alt="Snowboarding" />
          </div>
          <div className="back">
            <h3>To Be Continued…</h3>
            <p>Life is a beautiful journey, constantly evolving. My story is still being written—with my family by my side, new challenges to face, and adventures waiting on the horizon. Stay tuned for the next chapter!</p>
          </div>
        </div>

        <div className="page">
          <div className="front">
            <img src={`${process.env.PUBLIC_URL}/view.jpg`} alt="Img 2" />
          </div>
          <div className="back"></div>
        </div>
      </div>
    </div>
  );
};

export default FlipBook;
