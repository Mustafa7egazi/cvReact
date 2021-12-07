export default function SideBar() {
  return (
    <div className="left">
      <img
        src="data:image/jpeg;base64,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"
        alt="man"
        style={{ width: "300px", height: "300px" }}
      />
      <h3>Mustafa Hegazy</h3>
      <div className="firstBlock">
        <div id="A">
          <h4 style={{ float: "left", padding: "5px" }}>
            <i className="fab fa-android"></i>
            Android Apps Developer
          </h4>
        </div>
        <div id="B">
          <h4 style={{ float: "left", padding: "5px" }}>
            <i className="fas fa-home"></i> Menofia, EGY{" "}
          </h4>
        </div>
        <div id="C">
          <h4 style={{ float: "left", padding: "5px" }}>
            <i className="fas fa-envelope"></i> 7egz@yahoo.com{" "}
          </h4>
        </div>
        <div id="D">
          <h4 style={{ float: "left", padding: "5px" }}>
            <i className="fas fa-phone-square-alt"></i>01234567891{" "}
          </h4>
        </div>
      </div>
      <br />
      <hr />
      <br />
      <div className="secondBlock">
        <h4 style={{ float: "left", paddingLeft: "5px" }}>
          <i className="fas fa-star"></i> Skills
        </h4>
        <br />
        <h5 style={{ marginTop: "10px", marginLeft: "5px" }}>JAVA</h5>
        <div className="javain">
          <div className="javaout">
            <strong>75%</strong>
          </div>
        </div>
        <h5 style={{ marginTop: "10px", marginLeft: "5px" }}>C++</h5>
        <div className="Cin">
          <div className="Cout">
            <strong>70%</strong>
          </div>
        </div>
        <h5 style={{ marginTop: "10px", marginLeft: "5px" }}>XML</h5>
        <div className="Xin">
          <div className="Xout">
            <strong>50%</strong>
          </div>
        </div>
        <h5 style={{ marginTop: "10px", marginLeft: "5px" }}>
          Problem Solving
        </h5>
        <div className="Pin">
          <div className="Pout">
            <strong>60%</strong>
          </div>
        </div>
      </div>
      <br />
      <hr />
      <br />
      <div className="secondBlock">
        <h4 style={{ float: "left", paddingLeft: "5px" }}>
          <i className="fas fa-globe"></i> Languages
        </h4>
        <br />
        <h5 style={{ marginTop: "5px", marginLeft: "10px" }}>Arabic</h5>
        <div className="Arabin">
          <div className="Arabout">
            <strong>100%</strong>
          </div>
        </div>
        <h5 style={{ marginTop: "5px", marginLeft: "10px" }}>English</h5>
        <div className="Engin">
          <div className="Engout">
            <strong>88%</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
