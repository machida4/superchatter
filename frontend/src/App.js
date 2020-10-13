import React from "react";
import html2canvas from "html2canvas";
import icon from "./icon.png";
import "./App.css";

const CardComponent = () => {
  return (
    <div id="card-component" class="card magenta-main">
      <div class="header magenta-secondary">
        <div class="author-photo">
          <img class="icon" src={icon} />
        </div>
        <div class="header-content">
          <div class="author-name">machida4</div>
          <div class="purchase-amount">￥50,000</div>
        </div>
      </div>
      <div class="content">
        <div class="message">
          吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪な種族であったそうだ。この書生というのは時々我々を捕かまえて煮て食うという話である。しかしその当時は何という考もなかったから別段恐しいとも思わなかった。ただ彼の掌に載せられてスーと持ち上げられた時何だかフワフワした感じがあったばかりである。
        </div>
        <div></div>
      </div>
    </div>
  );
};

function ExportButton() {
  const saveAsImage = (uri) => {
    const downloadLink = document.createElement("a");

    if (typeof downloadLink.download === "string") {
      downloadLink.href = uri;

      // ファイル名
      downloadLink.download = "component.png";

      // Firefox では body の中にダウンロードリンクがないといけないので一時的に追加
      document.body.appendChild(downloadLink);

      // ダウンロードリンクが設定された a タグをクリック
      downloadLink.click();

      // Firefox 対策で追加したリンクを削除しておく
      document.body.removeChild(downloadLink);
    } else {
      window.open(uri);
    }
  };

  const onClickExport = () => {
    const target = document.getElementById("card-component");

    html2canvas(target).then((canvas) => {
      const targetImgUri = canvas.toDataURL("img/png");
      saveAsImage(targetImgUri);
    });
  };
  return <button onClick={() => onClickExport()}>PNG出力</button>;
}

function App() {
  return (
    <div className="App">
      <CardComponent />
      <ExportButton />
    </div>
  );
}

export default App;
