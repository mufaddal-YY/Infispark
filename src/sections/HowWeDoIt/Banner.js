import React from "react";
import Image from "next/image";
import BannerImage from "./../../assets/images/How We Do It/how-we-do.png";

const HeroBanner = () => {
  return (
    <div className="page-banner bg-about bg-light">
      <div className="container">
        <div className="row align-items-center">
          
          <div className="col-lg-6 col-sm-12 ">
            <div className=" text-center hidden">
              <h3 className="title">How we do it?</h3>
            </div>
          </div>
          <div className="col-lg-5 col-sm-12">
            <div className=" m-t50">
              <div className=" text-center floating m-b40">
                <Image width={650} src={BannerImage} alt="" />
              </div>
              {/* <div className="howWeDo1 floating">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={180}
                  viewBox="0 0 325 80"
                >
                  <g
                    id="Group_28053"
                    data-name="Group 28053"
                    transform="translate(-1128 -213)"
                  >
                    <path
                      id="Path_14660"
                      data-name="Path 14660"
                      d="M12,0H313a12,12,0,0,1,12,12V68a12,12,0,0,1-12,12H12A12,12,0,0,1,0,68V12A12,12,0,0,1,12,0Z"
                      transform="translate(1128 213)"
                      fill="#fff"
                    />
                    <text
                      id="Robust_Reporting"
                      data-name="Robust Reporting"
                      transform="translate(1215.66 264.5)"
                      fill="#2e2e2e"
                      font-size="20"
                      font-family="Inter-SemiBold, Inter"
                      font-weight="600"
                    >
                      <tspan x="0" y="0">
                        Robust Reporting
                      </tspan>
                    </text>
                    <g
                      id="closed-caption-alt"
                      transform="translate(1145 231.887)"
                    >
                      <path
                        id="Path_7023"
                        data-name="Path 7023"
                        d="M28.5,25.5h9.283v3.094H28.5Z"
                        transform="translate(0.801 0.613)"
                        fill="#2e2e2e"
                      />
                      <path
                        id="Path_7024"
                        data-name="Path 7024"
                        d="M16.5,25.5h9.283v3.094H16.5Z"
                        transform="translate(0.424 0.613)"
                        fill="#2e2e2e"
                      />
                      <path
                        id="Path_7025"
                        data-name="Path 7025"
                        d="M9,25.5h4.641v3.094H9Z"
                        transform="translate(0.188 0.613)"
                        fill="#2e2e2e"
                      />
                      <path
                        id="Path_7026"
                        data-name="Path 7026"
                        d="M33,19.5h6.188v3.094H33Z"
                        transform="translate(0.942 0.424)"
                        fill="#2e2e2e"
                      />
                      <path
                        id="Path_7027"
                        data-name="Path 7027"
                        d="M19.5,19.5H30.33v3.094H19.5Z"
                        transform="translate(0.518 0.424)"
                        fill="#2e2e2e"
                      />
                      <path
                        id="Path_7028"
                        data-name="Path 7028"
                        d="M9,19.5h7.736v3.094H9Z"
                        transform="translate(0.188 0.424)"
                        fill="#2e2e2e"
                      />
                      <path
                        id="Path_7029"
                        data-name="Path 7029"
                        d="M27.345,46.225,24.66,44.678l6.188-10.83h9.283a3.09,3.09,0,0,0,3.094-3.094V12.188a3.09,3.09,0,0,0-3.094-3.094H9.188a3.09,3.09,0,0,0-3.094,3.094V30.754a3.09,3.09,0,0,0,3.094,3.094H23.113v3.094H9.188A6.188,6.188,0,0,1,3,30.754V12.188A6.187,6.187,0,0,1,9.188,6H40.131a6.187,6.187,0,0,1,6.188,6.188V30.754a6.188,6.188,0,0,1-6.188,6.188h-7.48Z"
                        transform="translate(0 0)"
                        fill="#2e2e2e"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="howWeDo2 floating">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={180}
                  viewBox="0 0 310 80"
                >
                  <g
                    id="Group_28054"
                    data-name="Group 28054"
                    transform="translate(-1080 -336)"
                  >
                    <path
                      id="Path_14661"
                      data-name="Path 14661"
                      d="M12,0H298a12,12,0,0,1,12,12V68a12,12,0,0,1-12,12H12A12,12,0,0,1,0,68V12A12,12,0,0,1,12,0Z"
                      transform="translate(1080 336)"
                      fill="#fff"
                    />
                    <text
                      id="Program_Dashboard"
                      data-name="Program Dashboard"
                      transform="translate(1169.66 383)"
                      fill="#2e2e2e"
                      font-size="20"
                      font-family="Inter-SemiBold, Inter"
                      font-weight="600"
                    >
                      <tspan x="0" y="0">
                        Program Dashboard
                      </tspan>
                    </text>
                    <g
                      id="_4eedfa186aa2e2b1900809d5b62051f0"
                      data-name="4eedfa186aa2e2b1900809d5b62051f0"
                      transform="translate(1215.148 469.148) rotate(180)"
                    >
                      <rect
                        id="Rectangle_989"
                        data-name="Rectangle 989"
                        width="17"
                        height="17"
                        rx="3"
                        transform="translate(73.147 73.147)"
                        fill="none"
                        stroke="#2e2e2e"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                      <rect
                        id="Rectangle_990"
                        data-name="Rectangle 990"
                        width="17"
                        height="17"
                        rx="3"
                        transform="translate(97.147 73.147)"
                        fill="none"
                        stroke="#2e2e2e"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                      <rect
                        id="Rectangle_991"
                        data-name="Rectangle 991"
                        width="17"
                        height="17"
                        rx="3"
                        transform="translate(73.147 97.147)"
                        fill="none"
                        stroke="#2e2e2e"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                      <rect
                        id="Rectangle_992"
                        data-name="Rectangle 992"
                        width="17"
                        height="17"
                        rx="3"
                        transform="translate(97.147 97.147)"
                        fill="none"
                        stroke="#2e2e2e"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="howWeDo3 floating">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={180}
                  viewBox="0 0 282 80"
                >
                  <g
                    id="Group_28055"
                    data-name="Group 28055"
                    transform="translate(-1126 -454)"
                  >
                    <path
                      id="Path_14662"
                      data-name="Path 14662"
                      d="M12,0H270a12,12,0,0,1,12,12V68a12,12,0,0,1-12,12H12A12,12,0,0,1,0,68V12A12,12,0,0,1,12,0Z"
                      transform="translate(1126 454)"
                      fill="#fff"
                    />
                    <text
                      id="Social_media"
                      data-name="Social media"
                      transform="translate(1218.66 500.5)"
                      fill="#2e2e2e"
                      font-size="20"
                      font-family="Inter-SemiBold, Inter"
                      font-weight="600"
                    >
                      <tspan x="0" y="0">
                        Social media
                      </tspan>
                    </text>
                    <g
                      id="Layer_2"
                      data-name="Layer 2"
                      transform="translate(1141.002 467.771)"
                    >
                      <path
                        id="Path_7183"
                        data-name="Path 7183"
                        d="M24.162,31.7V42.926h1.6V37.313h3.207v-1.6H25.766V32.5h4.811V30.9H24.964A.8.8,0,0,0,24.162,31.7Zm17.64-2a1.2,1.2,0,1,1-2.405,0V26.087H42.6v-1.6H39.4V22.078h-1.6V29.7a2.806,2.806,0,0,0,5.613,0v-1.2H41.8ZM18.381,21.637a.8.8,0,0,0,1.139,0L24.05,17.1a4.009,4.009,0,0,0-5.1-6.142,4.009,4.009,0,0,0-5.1,6.142Zm-1.7-9.774a2.4,2.4,0,0,1,1.7.706.8.8,0,0,0,1.139,0,2.405,2.405,0,0,1,3.4,3.4L18.95,19.938l-3.969-3.969a2.405,2.405,0,0,1,1.7-4.105Z"
                        transform="translate(-1.126 -1.451)"
                        fill="#2e2e2e"
                      />
                      <path
                        id="Path_7184"
                        data-name="Path 7184"
                        d="M41.454,18A10.832,10.832,0,0,0,30.669,28.015,10.808,10.808,0,0,0,20.494,46.4a14.986,14.986,0,0,1-.289,5.083.8.8,0,0,0,.978.994,6.334,6.334,0,0,0,4.5-3.416,10.808,10.808,0,0,0,12.965-9.79,10.921,10.921,0,0,0,2.806.377,9.621,9.621,0,0,0,1.05-.056A6.326,6.326,0,0,0,47.315,43.6a.8.8,0,0,0,.954-.938,14.825,14.825,0,0,1-.249-5.22A10.824,10.824,0,0,0,41.454,18ZM25.417,47.338a.8.8,0,0,0-.954.489,4.675,4.675,0,0,1-2.405,2.662,17.48,17.48,0,0,0,0-4.578.8.8,0,0,0-.265-.513,9.213,9.213,0,1,1,3.64,1.94Zm21.36-10.993a.8.8,0,0,0-.337.553,17.944,17.944,0,0,0,0,4.811A4.747,4.747,0,0,1,43.835,38.5a.8.8,0,0,0-.9-.561,9.013,9.013,0,0,1-1.483.1,9.2,9.2,0,0,1-2.806-.457,10.857,10.857,0,0,0-6.415-9.012,9.213,9.213,0,1,1,14.529,7.77Z"
                        transform="translate(-1.981 -2.985)"
                        fill="#2e2e2e"
                      />
                      <path
                        id="Path_7185"
                        data-name="Path 7185"
                        d="M11.185,27.844a6.334,6.334,0,0,0,4.5-3.416,10.279,10.279,0,0,0,2.141.208,10.849,10.849,0,1,0-7.329-2.87,14.986,14.986,0,0,1-.289,5.083.8.8,0,0,0,.978.994ZM8.6,13.812A9.269,9.269,0,1,1,15.427,22.7a.8.8,0,0,0-.954.489,4.675,4.675,0,0,1-2.405,2.662,17.48,17.48,0,0,0,0-4.578.8.8,0,0,0-.265-.513A9.213,9.213,0,0,1,8.6,13.812Z"
                        transform="translate(0)"
                        fill="#2e2e2e"
                      />
                    </g>
                  </g>
                </svg>
              </div> */}
            </div>
          </div>

          {/* <div className="col-md"></div> */}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
