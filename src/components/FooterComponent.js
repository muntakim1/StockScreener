import React from "react";

const FooterComponent = () => {
  return (
    <footer id="footer">
      <div className="container footer-bottom clearfix">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span style={{ color: "coral", fontFamily: "cursive" }}>
              Stock{" "}
            </span>
            Screener.{" "}
          </strong>
          All Rights Reserved
        </div>
        <div className="credits">
          Designed by{" "}
          <a href="https://github.com/muntakim1">Muntakimur Rahaman</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
