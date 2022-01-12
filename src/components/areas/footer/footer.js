import React from 'react'


const AppFooter = () => {
  return (<>
    <footer className="app-footer">
      <div className="footer-content-wrapper content--limiter">
        <div className="copywrite">
          <p className="copywrite__text">rufgc.com © 2017 - 2022</p>
        </div>
        <div className="social">
          <a className="social__icon" href="mailto:torridtime@gmail.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1" width="256"
              height="256"
              viewBox="0 0 256 256"
              className="social__icon-mail"
            >
              <g 
                transform="translate(128 128) scale(0.72 0.72)" 
              >
                <g 
                // style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;"
                  transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)">
                  <path
                    d="M 81.382 77.935 H 8.618 C 3.866 77.935 0 74.068 0 69.316 V 20.684 c 0 -4.752 3.866 -8.618 8.618 -8.618 h 72.764 c 4.752 0 8.618 3.866 8.618 8.618 v 48.633 C 90 74.068 86.134 77.935 81.382 77.935 z M 8.618 16.065 C 6.072 16.065 4 18.137 4 20.684 v 48.633 c 0 2.547 2.072 4.618 4.618 4.618 h 72.764 c 2.547 0 4.618 -2.071 4.618 -4.618 V 20.684 c 0 -2.546 -2.071 -4.618 -4.618 -4.618 H 8.618 z"
                    
                    // style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;"
                    
                    transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                  <path
                    d="M 45 48.971 c -1.142 0 -2.284 -0.246 -3.348 -0.737 L 1.161 29.531 L 2.839 25.9 l 40.49 18.703 c 1.062 0.49 2.279 0.491 3.342 0 l 40.404 -18.663 l 1.678 3.631 L 48.349 48.233 C 47.284 48.725 46.143 48.971 45 48.971 z"
                    
                    // style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1;"
                    
                    transform=" matrix(1 0 0 1 0 0) " strokeLinecap="round" />
                </g>
              </g>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  </>);
}
export default AppFooter;