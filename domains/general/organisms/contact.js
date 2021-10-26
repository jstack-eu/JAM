import React, { useState, useEffect } from "react";
import theme from "../../../styles/theme";
import { useRouter } from "next/router";

export const Contact = ({ data, locale }) => {
  const router = useRouter();

  const getPropByLocale = (fields, key) => {
    if (locale === "nl") {
      return (
        fields[key] || fields[key + (locale[0].toUpperCase() + locale.slice(1))]
      );
    }

    return fields[key + (locale[0].toUpperCase() + locale.slice(1))];
  };

  return (
    <div>
      <iframe
        className="map-iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5961.113643449066!2d4.3841050765909015!3d51.083740878783146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3ee3bf60c662b%3A0x4371aa3a553f5113!2sDV+Hydraulics!5e0!3m2!1snl!2sbe!4v1443550998023&z=15"
        allowFullScreen
      ></iframe>

      <div className="container">
        <div className="left">
          <img
            // style="width: 40%;  float: left;
            // margin-bottom: 40px;
            // margin-top: 40px;"
            src="images/locatie.png"
          />
        </div>

        <div
          className="right"
          // style="padding-top: 40px; margin-left: 40%; padding-left: 20px;"
        >
          <h1>{getPropByLocale(data, "contactTitle")}</h1>
          <p>
            <i
              className="fa fa-2x fa-map-marker"
              fontSize="34"
              // style="padding-right: 12px; font-size: 26px; color: #ec6b06;"
            ></i>
            <span>{data.address}</span>
          </p>
          <p>
            <i
              className="fa fa-2x fa-phone"
              // style="padding-right: 12px; font-size: 26px; color: #ec6b06;"
            ></i>
            <span>{data.phone}</span>
          </p>
          <p>
            <i
              className="fa fa-2x fa-envelope-o"
              // style="padding-right: 12px; font-size: 26px; color: #ec6b06;"
            ></i>
            <span>{data.email}</span>
          </p>
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          padding: 80px;
          width: ${theme.layout.containerWidth};
          margin-left: auto;
          margin-right: auto;
          flex-direction: row;
        }
        .fa {
          width: 48px;
          color: ${theme.color.secondary};
        }
        .left {
          margin-right: ${theme.margin.l};
        }
        .right {
          margin-left: ${theme.margin.l};
        }
        .map-iframe {
          width: 100%;
          border: none;
          height: 400px;
        }
        @media screen and (max-width: ${theme.media.l}px) { 
          .wrapper {
            padding-top: ${theme.margin.xl};
            padding-bottom: ${theme.margin.xxxl};
          }
          .left {
            display: none;
          }
          .container {
          padding: 64px;
          padding-left: 12px;
        }
      `}</style>
    </div>
  );
};

export default Contact;
