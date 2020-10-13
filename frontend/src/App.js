import React from "react";
import html2canvas from "html2canvas";
import Card from "./Card"
import "./App.css";

import firebase from "./Firebase";
import SignInScreen from "./SignInScreen";



function ExportButton() {
  const saveAsImage = (uri) => {
    const downloadLink = document.createElement("a");

    if (typeof downloadLink.download === "string") {
      downloadLink.href = uri;

      // ファイル名
      downloadLink.download = "component.png";

      // ダウンロードリンクが設定された a タグをクリック
      downloadLink.click();
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      user: null,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        loading: false,
        user: user,
      });
    });
  }

  logout() {
    firebase.auth().signOut();
  }

  render() {
    if (this.state.loading) {
      return <div>loading</div>;
    }
    return (
      <div className="App">
        Username: {this.state.user && this.state.user.displayName}
        {this.state.user ? (
          <button onClick={this.logout}>Logout</button>
        ) : (
          <SignInScreen />
        )}
        <Card />
        <ExportButton />
      </div>
    );
  }
}

export default App;
