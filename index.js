const element = (
  <div className="main">
    <h1 className="head">Congratulations</h1>
    <div className="sub">
      <img
        className="img"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <h1 className="subtext">Kiran V</h1>
      <p className="subtext">
        Vishnu Institute of Computer Education And Technology,<br></br>
        Bhimavaram
      </p>
      <img
        className="img"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
