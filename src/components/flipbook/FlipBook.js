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
            <h2>Lorem Ipsum</h2>
            1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, modi, perspiciatis molestias cum neque delectus eum eveniet repellat iusto totam magnam cupiditate quaerat quis.
          </div>
        </div>

        <div className="page">
          <div className="front">
            2. Dolor Molestias aspernatur repudiandae sed quos debitis recusandae consectetur ab facilis voluptates sint vero eos, consequuntur delectus?
          </div>
          <div className="back">
            <img src="https://picsum.photos/500/400" alt="Img 1" />
          </div>
        </div>

        <div className="page">
          <div className="front">
            <h2>Sit amet</h2>
            4. Consectetur adipisicing elit. Dignissimos illo voluptate sapiente provident tempore ea voluptates perferendis tenetur eos nulla, doloribus! Distinctio a nostrum ipsum, adipisci at mollitia.
          </div>
          <div className="back">
            5. Debitis recusandae consectetur ab facilis voluptates sint vero eos, consequuntur delectus temporibus harum dolorem provident eaque perferendis.
          </div>
        </div>

        <div className="page">
          <div className="front">
            <h2>Consectetur</h2>
            6. Adipisicing elit. Sed, fuga aspernatur? Numquam, molestias unde! Voluptatibus sint aspernatur qui dolore est itaque ipsum consequuntur neque asperiores non obcaecati harum, perspiciatis voluptate!
          </div>
          <div className="back">
            7. Temporibus, eum nobis? Adipisci, a? Eaque vel amet ut reprehenderit.
          </div>
        </div>

        <div className="page">
          <div className="front">
            <img src="https://picsum.photos/536/354" alt="Img 2" />
          </div>
          <div className="back">
            <h3>Finalis</h3>
            9. Lorem ipsum dolor sit, amet consectetur adipisicing elit. code by Roko, eniam vero, magni dignissimos deleniti hic ratione sequi ullam eos.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipBook;
