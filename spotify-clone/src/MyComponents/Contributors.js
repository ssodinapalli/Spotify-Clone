import React from "react";
import '../assests/ComponentCss/Contributors.css'
export default function Contributors() {
  return (
    <>
    <div className="con-container">
      <div className="author-quote-wrap">
        <input
          className="toggle-quote"
          type="radio"
          id="AQ-1"
          name="quote"
          checked
        />
        <div className="author-quote">
          <div className="pull-left author-photo photo-a animated bounceInLeft">
            <div className="navigate">
              <label className="label left" htmlFor="AQ-5">
                &nbsp;
              </label>
              <label className="label right" htmlFor="AQ-2">
                &nbsp;
              </label>
            </div>
          </div>
          <div className="pull-right quote-content">
            <div className="clearfix animated zoomIn">
              <div className="quote-like pull-right">
                <span className="love"></span> 423
              </div>
            </div>
            <div className="quote-text animated rotateInDownRight">
              Don't You
              <br />
              Think That
              <br />
              If I Were
              <br />
              Wrong,
              <br />
              I'd Know It?
            </div>
            <div className="quote-author animated lightSpeedIn">Sheldon Cooper</div>
          </div>
        </div>

        <input className="toggle-quote" type="radio" id="AQ-2" name="quote" />
        <div className="author-quote">
          <div className="pull-left author-photo photo-b animated bounceInLeft">
            <div className="navigate">
              <label className="label left" htmlFor="AQ-1">
                &nbsp;
              </label>
              <label className="label right" htmlFor="AQ-3">
                &nbsp;
              </label>
            </div>
          </div>
          <div className="pull-right quote-content">
            <div className="clearfix animated zoomIn">
              <div className="quote-like pull-right">
                <span className="love"></span> 512
              </div>
            </div>
            <div className="quote-text animated zoomInDown">
              My Goal Was
              <br />
              To Prove
              <br />
              To My Family
              <br />I wasn't a dummy
            </div>
            <div className="quote-author animated lightSpeedIn">Ronalda Colen</div>
          </div>
        </div>

        <input className="toggle-quote" type="radio" id="AQ-3" name="quote" />
        <div className="author-quote">
          <div className="pull-left author-photo photo-c animated bounceInLeft">
            <div className="navigate">
              <label className="label left" htmlFor="AQ-2">
                &nbsp;
              </label>
              <label className="label right" htmlFor="AQ-4">
                &nbsp;
              </label>
            </div>
          </div>
          <div className="pull-right quote-content">
            <div className="clearfix animated zoomIn">
              <div className="quote-like pull-right">
                <span className="love"></span> 618
              </div>
            </div>
            <div className="quote-text animated bounceInRight">
              Smart-Phones.
              <br />
              Who Cares?
              <br />
              Smart-Phones.
              <br />I Only Have
              <br />
              Dummy Phones
            </div>
            <div className="quote-author animated lightSpeedIn">Don Rickles</div>
          </div>
        </div>

        <input className="toggle-quote" type="radio" id="AQ-4" name="quote" />
        <div className="author-quote">
          <div className="pull-left author-photo photo-d animated bounceInLeft">
            <div className="navigate">
              <label className="label left" htmlFor="AQ-3">
                &nbsp;
              </label>
              <label className="label right" htmlFor="AQ-5">
                &nbsp;
              </label>
            </div>
          </div>
          <div className="pull-right quote-content">
            <div className="clearfix animated zoomIn">
              <div className="quote-like pull-right">
                <span className="love"></span> 741
              </div>
            </div>
            <div className="quote-text animated lightSpeedIn">
              Design
              <br />
              Means
              <br />
              Being Good
              <br />
              Not Just
              <br />
              Looking Good
            </div>
            <div className="quote-author animated lightSpeedIn">
              Jacquie Dermody
            </div>
          </div>
        </div>

        <input className="toggle-quote" type="radio" id="AQ-5" name="quote" />
        <div className="author-quote">
          <div className="pull-left author-photo photo-e animated bounceInLeft">
            <div className="navigate">
              <label className="label left" htmlFor="AQ-4">
                &nbsp;
              </label>
              <label className="label right" htmlFor="AQ-1">
                &nbsp;
              </label>
            </div>
          </div>
          <div className="pull-right quote-content">
            <div className="clearfix animated zoomIn">
              <div className="quote-like pull-right">
                <span className="love"></span> 824
              </div>
            </div>
            <div className="quote-text animated flipInX">
              Design
              <br />
              Is
              <br />
              Thinking
              <br />
              Made
              <br />
              Visible
            </div>
            <div className="quote-author animated lightSpeedIn">Mohan Khadka</div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
