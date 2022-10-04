import React, { useState } from 'react';
import image from './constants';

import { AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai'
import { BsPinterest } from 'react-icons/bs'
import { FaShare } from 'react-icons/fa'

function App() {

  const [isShowShareAria, setIsShowShareAria] = useState(false)

  console.log(isShowShareAria)
  return (
    <main className="wrapper">
      <article className="card">
        <header className="card__header">
          <img src={image.drawers} alt="background drawers" />
        </header>

        <div className="card__main">
          <div className="card__body">
            <h2 className="mb-2 bold-700">

              Shift the overall look and feel by adding these wonderful
              touches to furniture in your home
            </h2>
            <p>
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I’ve got some simple tips
              to help you make any room feel complete.
            </p>
          </div>
          <footer className="card__footer d-flex justify-between align-center">
            <img src={image.avatar} className="card__avatar" alt="avatar user" />
            <div className="card__info grow-1 ml-2">
              <p className="bold-700">
                Michelle Appleton
              </p>
              <p className="gray">
                28 Jun 2020
              </p>
            </div>
            <button className="btn btn--share" onClick={() => setIsShowShareAria(prevState => !prevState)}>
              <FaShare />
            </button>
          </footer>
        </div>

        <div aria-hidden={isShowShareAria ? false : true} className="card__share-aria d-flex justify-between align-center">
          <p className="gray upper letter-spacing-5">share</p>
          <div className="card__socials grow-1 ml-2 d-flex gap-1">
            <AiFillFacebook className="fontsize-2 card__social" />
            <AiOutlineTwitter className="fontsize-2 card__social" />
            <BsPinterest className="fontsize-2 card__social" />
          </div>
          <button
            className="btn btn--share btn--dark"
            onClick={() => setIsShowShareAria(false)}>
            <FaShare />
          </button>
        </div>
      </article>
    </main>
  );
}

export default App;
