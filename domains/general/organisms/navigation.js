import React, { useState, useEffect } from 'react'
import theme from '../../../styles/theme'
import { useRouter } from 'next/router'

const NavigationBlock = ({
  pages,
  locale,
  inversed,
  toggleMenu,
  isMenuOpen,
}) => {
  const [hasScrolled, setHasScrolled] = useState(false)
  const [vw, setVw] = useState(null)

  const router = useRouter()

  const transitionTime = inversed ? 0 : 0.4

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () => {
        setHasScrolled(window.pageYOffset > 1)
      })
      window.addEventListener('resize', () => {
        setVw(window.innerWidth)
      })
      setVw(window.innerWidth)
    }
  }, [])

  return (
    <>
      <div className={`${hasScrolled ? 'scrolledWrapper' : 'navWrapper'}`}>
        <select
          className="langSelect"
          value={locale}
          onChange={(e) =>
            router.push(router.asPath, router.asPath, {
              locale: e.target.value,
            })
          }
        >
          <option value="nl">Nl</option>
          <option value="fr">Fr</option>
          <option value="en">En</option>
        </select>
        <i
          onClick={toggleMenu}
          className="fa fa-2x fa-bars hamburger"
          fontSize="34"
          // style="padding-right: 12px; font-size: 26px; color: #ec6b06;"
        ></i>

        <div className="innerWrapper">
          <a className="logoLink" href="" locale={locale}>
            <img src="/logo.png" className="logo"></img>
          </a>
          <div className="links">
            {pages
              .sort((a, b) => a.order - b.order)
              .map((page, i) => (
                <a className="link" href={`${page.slug}`} key={i}>
                  {page.label}
                </a>
              ))}
          </div>
        </div>
        <div className="mobileWrapper">
          <a className="logoLink" href="" locale={locale}>
            <img src="/logo.png" className="logo"></img>
          </a>
        </div>

        <div
          className={`hideDesktop ${
            isMenuOpen ? 'mobileMenu' : 'mobileMenuHidden'
          }`}
        >
          <i
            onClick={toggleMenu}
            className="fa fa-2x fa-times times"
            fontSize="34"
            // style="padding-right: 12px; font-size: 26px; color: #ec6b06;"
          ></i>

          <div className="mobileLinks">
            {pages
              .sort((a, b) => a.order - b.order)
              .map((page, i) => (
                <a
                  className="link"
                  href={`${page.slug}`}
                  locale={locale}
                  key={i}
                >
                  {page.label}
                </a>
              ))}
          </div>
          <div className="border" />
        </div>

        <style jsx>{`

        .scrolledWrapper {
          background-color: ${theme.color.background};
          top: 0;
          width: 100%;
          position: fixed;
          height: 80px;
          z-index: 3;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04),
            0 2px 4px rgba(0, 0, 0, 0.04), 0 4px 8px rgba(0, 0, 0, 0.04),
            0 8px 16px rgba(0, 0, 0, 0.04), 0 16px 84px rgba(0, 0, 0, 0.04),
            0 32px 64px rgba(0, 0, 0, 0.04);
          -webkit-transition: all ${transitionTime}s linear;
          -moz-transition: all ${transitionTime}s linear;
          -o-transition: all ${transitionTime}s linear;
          transition: all ${transitionTime}s linear;
        }

        .navWrapper {
          top: 0;
          width: 100%;
          position: fixed;
          height: 80px;


          box-shadow: ${
            inversed
              ? `0 1px 2px rgba(0, 0, 0, 0.04),
            0 2px 4px rgba(0, 0, 0, 0.04), 0 4px 8px rgba(0, 0, 0, 0.04),
            0 8px 16px rgba(0, 0, 0, 0.04), 0 16px 84px rgba(0, 0, 0, 0.04),
            0 32px 64px rgba(0, 0, 0, 0.04);`
              : 'none'
          }
          /* met deze ' wordt de mobileNav succesvoll gehide, no idea whyy */
          -webkit-transition: all ${transitionTime}s linear;
          -moz-transition: all ${transitionTime}s linear;
          -o-transition: all ${transitionTime}s linear;
          transition: all ${transitionTime}s linear;
        }
        .langSelect {
          font-size: 12px;
          background: #ec6b06;
          color: #fff;
          font-weight: 700;
          border: none;
          box-shadow: none;
          position: fixed;
          right: 20px;
          top: 20px;
          height: 34px;
          padding: 6px 12px;
          border-radius: 4px;
        }

        .links {
          height: 100%;
          align-items: center;
          display: flex;
        }
        .border {
          height: 8px;
          width: 100%;
          bottom: 0;
          background: ${theme.color.secondary};
          position: fixed;
          z-index: 5;
        }
        .link {
          color: ${inversed ? theme.color.primary : theme.color.background};
          font-weight: bold;
          padding: 0 12px;
          text-decoration: none;
          font-size: 16px;
          height: 100%;
          align-items: center;
          display: flex;
        }
        .link:hover {
          background-color: ${theme.color.secondary};
          color:  ${theme.color.background} !important;
          transition-duration: 0.2s;
        }
        .scrolledWrapper .link {
          color: ${theme.color.primary} !important;
        }
        .scrolledWrapper .link:hover {
          color:  ${theme.color.background} !important;
        }
        .logoLink {
          position: fixed;
        }
        .logo {
          height: 60px;
          margin-top: 6px;
          top: 4px;
          position: fixed;
          left: 20px;
        }
        .hamburger {
              display: none;
            }
        .mobileMenuHidden {
          top: 0;
          z-index: 4;
          position: fixed;
          height: 100%;
          width: 100%;
          right: -${vw || theme.media.l}px;
          background: ${theme.color.primary};
          /* -webkit-transition: all 0.1s linear;
          -moz-transition: all 0.1s linear;
          -o-transition: all 0.1s linear;
          transition: all 0.1s linear; */
        }
        .mobileLinks {
          display: flex;
          flex-direction: column;
          margin-top: 60px;
          margin-bottom: 20px;

        }
        .mobileLinks a {
          font-family: "ArchivoBlack", sans-serif;
          font-size: 26px;
          color: ${theme.color.inversedText};
          padding-top: 16px;
          padding-bottom: 16px;
          padding-left: 24px;
        }

        .innerWrapper {
          display: flex;
          
          height: 100%;
          max-width: ${theme.layout.containerWidth};
          
          justify-content: space-between;
          margin-left: auto;
          /* margin-right: auto; */
        }

        .innerWrapper {
          display: flex;
          justify-content: flex-end;
          height: 100%;
          margin-right: 104px;
          }

        @media screen and (max-width: ${theme.media.xl}px) {
          .link {
            color:  ${theme.color.primary}
           }
           .hideDesktop {
              display: none;
            }
           .navWrapper {
            background-color: ${theme.color.background};

          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04),
            0 2px 4px rgba(0, 0, 0, 0.04), 0 4px 8px rgba(0, 0, 0, 0.04),
            0 8px 16px rgba(0, 0, 0, 0.04), 0 16px 84px rgba(0, 0, 0, 0.04),
            0 32px 64px rgba(0, 0, 0, 0.04);
            }


          }

          @media screen and (max-width: ${theme.media.l}px) {
            .innerWrapper {
              display: none;
            }
            .right {
              padding-left: 0 !important;
            }
            .hideDesktop {
              display: block;
            }
            .langSelect {
              right: 72px;
            }
            .mobileMenu {
              overflow: scroll;
              top: 0;
              position: fixed;
              height: 100%;
              width: 100%;
              right: 0;
              background: ${theme.color.primary};
              z-index: 4;
              -webkit-transition: all 0.2s linear;
              -moz-transition: all 0.2s linear;
              -o-transition: all 0.2s linear;
              transition: all 0.2s linear;
            }
            
            .hamburger {
              cursor: pointer;
              color: ${theme.color.primary};
              display: block;
              position: absolute;
              right: 20px;
              top: 20px;
            }
            .times {
              cursor: pointer;
              color: ${theme.color.secondary};
              display: block;
              position: absolute;
              right: 20px;
              top: 20px;

              border-radius: 180%;
              padding-left: 7px;
              padding-top: 3px;
              height: 39px;
              width: 39px;
            }
          }
          
      `}</style>
      </div>
    </>
  )
}

export default NavigationBlock
