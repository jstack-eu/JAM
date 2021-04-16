import React, { useState } from "react";
import Link from "next/link";
import theme from "../styles/theme";

const Navbar = ({ pages }) => {
  return (
    <div>
      <nav>
        <div className="nav-inner-wrapper">
          <div className="logo-wrapper">
            <div className="logo">JAMBLOCKS</div>
          </div>
          {pages.map((page) => (
            <div className="link-wrapper">
              <Link href={page.slug}>
                <a>{page.label}</a>
              </Link>
            </div>
          ))}
        </div>

        <style jsx>{`
          nav {
            border-right: 1px solid lightgrey;
          }

          .logo-wrapper {
            background-color: ${theme.color.primaryDark};
            color: ${theme.color.inversedText};
            margin-bottom: ${theme.margin.ml};
            border-bottom: 1px solid ${theme.color.background};
            font-size: 24px;
            font-weight: bold;
          }

          .logo {
            font-family: 'Signika';
            letter-spacing: 4px;
            padding: 24px;
          }

          .nav-inner-wrapper {
            flex-direction: column;
            width: 340px;
            position: fixed;
            top: 0;
            left: 0;
            height: 100%;
            display: flex;
            background-color: ${theme.color.primaryDark};
          }

          .link-wrapper {
            display: flex;
            padding: 16px 24px;
          }

          .link-wrapper a {
            text-decoration: none;
            letter-spacing: 4px;
            font-weight: bold;
            color: ${theme.color.inversedText};
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
