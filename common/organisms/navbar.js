import React, { useState } from "react";
import Link from "next/link";
import theme from "../styles/theme";

const Navbar = ({ pages }) => {
  return (
    <div>
      <nav>
        <div className="nav-inner-wrapper">
          <div className="logo">LOGO</div>
          <div className="link-wrapper">
            {pages.map((page, i) => (
              <div key={i}>
                <Link href={page.slug}>
                  <a>{page.label}</a>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          nav {
            border-bottom: 1px solid lightgrey;
          }

          .nav-inner-wrapper {
            width: ${theme.layout.containerWidth};
            margin-left: auto;
            margin-right: auto;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }

          .link-wrapper {
            display: flex;
            flex-direction: row;
          }

          .link-wrapper a {
            text-decoration: none;
            padding: ${theme.margin.m};
          }

          .navLogo {
            width: 200px;
            object-fit: contain;
          }

          @media screen and (max-width: ${theme.layout.containerWidth}) {
            .nav-inner-wrapper {
              width: 100% !important;
            }
          }
        `}</style>
      </nav>
    </div>
  );
};

export default Navbar;
