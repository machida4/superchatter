import React from "react";
import html2canvas from "html2canvas";

const ExportButton = (props) => {
  const button = generateButton()

  return (
    <div className="exportButton">
      {button}
    </div>
  );
};

function generateButton() {
  const saveAsImage = (uri) => {
    const downloadLink = document.createElement("a");

    if (typeof downloadLink.download === "string") {
      downloadLink.href = uri;
      downloadLink.download = "card.png";

      downloadLink.click();
    } else {
      window.open(uri);
    }
  };

  const onClickExport = () => {
    const target = document.getElementById("card");

    html2canvas(target, { useCORS: true }).then((canvas) => {
      const targetImgUri = canvas.toDataURL("img/png");
      saveAsImage(targetImgUri);
    });
  };

  return <button onClick={() => onClickExport()}>PNG出力</button>;
}

export default ExportButton;
