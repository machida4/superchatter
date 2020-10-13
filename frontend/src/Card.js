import React from "react";
import icon from "./icon.png";
import "./Card.css";

// TODO: 入力できるようにする
const Card = () => {
  return (
    <div id="card-component" className="card magenta-main">
      <div className="header magenta-secondary">
        <div className="author-photo">
          <img className="icon" src={icon} />
        </div>
        <div className="header-content">
          <div className="author-name">machida4</div>
          <div className="purchase-amount">￥50,000</div>
        </div>
      </div>
      <div className="content">
        <div className="message">
          吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪な種族であったそうだ。この書生というのは時々我々を捕かまえて煮て食うという話である。しかしその当時は何という考もなかったから別段恐しいとも思わなかった。ただ彼の掌に載せられてスーと持ち上げられた時何だかフワフワした感じがあったばかりである。
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Card;
