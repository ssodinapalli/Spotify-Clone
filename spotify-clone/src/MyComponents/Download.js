import React from "react";
import '../assests/ComponentCss/Downloadd.css'
import Bottombar from "./Bottombar";

function Download() {
  return (
    <>
    <div className="download-container">
      <div className="DownloadCta__Content-qizc33-1 cLsytm snipcss-bdtTv">
        <div className="DownloadComputer__Container-wxrydg-0 cKXoWq NoAutoDownload__StyledComputer-sc-1s6mawl-2 gWDJur">
          <img
            src="https://www-growth.scdn.co/static/download/laptop.svg"
            alt=""
            className="DownloadComputer__Computer-wxrydg-1 iedzgj"
          />
          <img
            src="https://www-growth.scdn.co/static/download/green-circle.svg"
            alt=""
            className="DownloadComputer__GreenCircle-wxrydg-2 jmaUoe"
          />
          <img
            src="https://www-growth.scdn.co/static/download/green-success-check.svg"
            alt=""
            className="DownloadComputer__SuccessCheck-wxrydg-3 cDJXWb"
          />
        </div>
        <h1 className="Type__TypeElement-sc-9snywk-0 jmMyZK NoAutoDownload__StyledType-sc-1s6mawl-1 cDmTkv">
          Download Spotify
        </h1>
        <p className="Type__TypeElement-sc-9snywk-0 fLKBXt NoAutoDownload__StyledText-sc-1s6mawl-0 iluXgb">
          Play millions of songs and podcasts on your device.
        </p>
        <button
          data-testid="download-cta"
          className="Button-sc-8cs45s-0 jNFemE NoAutoDownload__DownloadCTA-sc-1s6mawl-3 cCWWqg"
        >
          <div className="ButtonInner-peijbp-0 cfGvV encore-inverted-light-set">
            Download
          </div>
          <div className="ButtonFocus-tupyzb-0 bWXdpj"></div>
        </button>
      </div>
      <Bottombar/>
      </div>
    </>
  );
}

export default Download;
