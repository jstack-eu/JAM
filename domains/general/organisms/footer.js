import React, { useState, useEffect } from "react";
import theme from "../../../styles/theme";

const FooterBlock = ({ info }) => {
  return (
    <div className="wrapper">
      <div className="upper-footer">
        <div>
          <a href="https://www.facebook.com/DVHydraulics/" className="fb-logo">
            <img src="/images/fb-white.png" />
          </a>
          <a
            href="https://www.linkedin.com/company/dv-hydraulics/"
            className="li-logo"
          >
            <img src="/images/linkedin-white.png" />
          </a>
        </div>

        <div className="lower-footer-contact">
          <p>{info.address}</p>
          <p>{info.email}</p>
          <p>{info.phone}</p>
        </div>
      </div>

      <div className="lowest-footer">
        <div className="container">
          <div className="row">
            <div>
              <a className="lower-footer-link" href="/conditions">
                General conditions
              </a>
              -
              <a className="lower-footer-link" href="/privacy">
                Privacy policy
              </a>
              -
              <a className="lower-footer-link" href="https://icons8.com">
                Icon pack by Icons8
              </a>
            </div>
            <div>@2021 DVHydraulics</div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .wrapper {
          background: ${theme.color.greyM};
        }
        .row {
          justify-content: space-between;
          flex: 1;
          display: flex;
          flex-direction: row;
          overflow: hidden;
          padding-right: ${theme.margin.m};
        }
        .upper-footer {
          display: flex;
          align-items: center;
          flex-direction: column;
          padding-top: ${theme.margin.l};
          padding-bottom: ${theme.margin.ml};
          border-top: 12px solid ${theme.color.grey};
        }
        .lower-footer-contact {
          color: ${theme.color.inversedText};
          text-align: center;
        }
        .lowest-footer {
          padding: ${theme.margin.ms} 0;
          background: ${theme.color.greyMM};
          color: ${theme.color.inversedText};
        }
        .lower-footer-link {
          padding: ${theme.margin.m};
          color: ${theme.color.inversedText};
          text-decoration: none;
        }
        .fb-logo {
          margin-right: ${theme.margin.m};
        }
        .li-logo {
          margin-left: ${theme.margin.m};
        }
      `}</style>
    </div>
  );
};

export default FooterBlock;
