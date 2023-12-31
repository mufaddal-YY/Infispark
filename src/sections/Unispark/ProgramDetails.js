import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProgramImage from "./../../assets/images/unispark/program-details.png";
import CourseCurriculum from "./../../components/CourseCurriculum";

const ProgramDetails = () => {
  return (
    <>
      <div className="section-container section-sp4 bg-light">
        <div className="container">
          <h4>Program Details</h4>
          {/* <p className="text-blue m-b30">
            Below are the details of the Program.
          </p> */}
          <div className="row">
            <div className="col-lg-6 m-b10">
              <div className="">
                <Image width={600} src={ProgramImage} alt="Infispark" />
              </div>
            </div>
            <div className="col-lg-6 m-b20">
              <div className="p-10 bg-white">
                <h6 className="m-l20">Course Curriculum</h6>
                <CourseCurriculum />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="our-partner-box1 row m-b20">
                <div className="partner-logo col-md-6">
                  <div className="d-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      viewBox="0 0 36.424 29.136"
                    >
                      <path
                        id="Icon_awesome-ticket-alt"
                        data-name="Icon awesome-ticket-alt"
                        d="M6.871,9.653H24.047V19.959H6.871Zm21.471,5.153a2.576,2.576,0,0,0,2.576,2.576v5.153a2.576,2.576,0,0,1-2.576,2.576H2.576A2.576,2.576,0,0,1,0,22.535V17.382a2.576,2.576,0,0,0,2.576-2.576A2.576,2.576,0,0,0,0,12.229V7.076A2.576,2.576,0,0,1,2.576,4.5H28.341a2.576,2.576,0,0,1,2.576,2.576v5.153A2.576,2.576,0,0,0,28.341,14.806Z"
                        transform="matrix(0.966, -0.259, 0.259, 0.966, -0.552, 4.268)"
                        fill="none"
                        stroke="#0061ff"
                        stroke-width="1"
                      />
                    </svg>

                    <h6 className=" fs14 m-l10"> Exam voucher included</h6>
                  </div>
                  <p className="fs12">
                    Program includes an Azure Exam vouchers for all courses
                    listed under Unispark program.
                  </p>
                </div>

                <div className="partner-logo col-md-6">
                  <div className="d-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      viewBox="0 0 24.198 21.983"
                    >
                      <g id="talk-bubbles-line" transform="translate(0)">
                        <path
                          id="Path_14652"
                          data-name="Path 14652"
                          d="M18.6,26.045a.759.759,0,0,1-.759.759H7.218c-.167,0-.326.152-.463.25L4.184,29.079V16.942a.759.759,0,0,1,.759-.759H7.87V14.667H4.942a2.276,2.276,0,0,0-2.276,2.276V30.6a.741.741,0,0,0,1.183.6l3.907-2.875h10.2a2.1,2.1,0,0,0,2.162-2.177v-.857H18.6Z"
                          transform="translate(-2.667 -9.357)"
                          fill="#2d7cfe"
                        />
                        <path
                          id="Path_14653"
                          data-name="Path 14653"
                          d="M29.838,5.333h-12.9a2.276,2.276,0,0,0-2.276,2.276v9.1a2.276,2.276,0,0,0,2.276,2.276H27.221L30.847,21.8a.742.742,0,0,0,1.191-.6V7.609a2.276,2.276,0,0,0-2.2-2.276ZM30.6,19.7,27.941,17.63a.759.759,0,0,0-.463-.159H16.942a.759.759,0,0,1-.759-.759v-9.1a.759.759,0,0,1,.759-.759h12.9a.834.834,0,0,1,.759.8Z"
                          transform="translate(-7.839 -5.333)"
                          fill="#2d7cfe"
                        />
                      </g>
                    </svg>

                    <h6 className=" fs14 m-l10"> Placement guidance</h6>
                  </div>
                  <p className="fs12">
                    We offer placement guidance to students after 80% completion
                    of course.
                  </p>
                </div>

                <div className="partner-logo col-md-6">
                  <div className="">
                    <p className="fs12">
                      <svg
                        className="m-r5"
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        viewBox="0 0 29.096 21.26"
                      >
                        <g
                          id="Group_28044"
                          data-name="Group 28044"
                          transform="translate(-297.205 -131.483)"
                        >
                          <g
                            id="Group_27954"
                            data-name="Group 27954"
                            transform="translate(297.205 131.483)"
                          >
                            <path
                              id="Path_7210"
                              data-name="Path 7210"
                              d="M297.205,149.719a.881.881,0,0,1,.781-.239c.075,0,.151,0,.227,0,.4,0,.4,0,.4-.385q0-2.185,0-4.37,0-5.562,0-11.124a1.943,1.943,0,0,1,2.115-2.119h20.714a1.9,1.9,0,0,1,1.975,1.461,3.486,3.486,0,0,1,.068,1.015c-.016.265.065.386.349.36.235-.021.473.011.709-.007a1.707,1.707,0,0,1,1.76,1.767c-.04,1.323-.009,2.648-.01,3.973a1.7,1.7,0,0,1-1.724,1.783,6.813,6.813,0,0,1-.737,0c-.258-.018-.349.077-.346.339.011.965,0,1.929,0,2.894,0,1.353.006,2.705,0,4.058,0,.267.075.385.353.359a3.586,3.586,0,0,1,.567,0,.49.49,0,0,1,.518.547,5.75,5.75,0,0,1-.037,1.16,1.91,1.91,0,0,1-1.849,1.55c-.085,0-.17,0-.255,0H299.312a1.955,1.955,0,0,1-2.107-1.491Zm13.849-17.3H300.668a.993.993,0,0,0-1.117,1.119q0,7.775,0,15.551c0,.382,0,.383.395.383h9.932c.459,0,.6.117.684.572a.443.443,0,0,0,.472.4.494.494,0,0,0,.509-.4c.107-.5.195-.568.7-.568h9.9c.375,0,.377,0,.377-.381q0-3.405,0-6.811c0-.446,0-.446-.457-.446h-7.378c-.258,0-.5-.038-.61-.315s.045-.448.229-.616c.651-.592,1.295-1.19,1.951-1.777a.682.682,0,0,0,.252-.566c-.012-.794,0-1.589,0-2.384a1.753,1.753,0,0,1,1.9-1.878c1.123.052,2.251.012,3.377.012.743,0,.743,0,.739-.756,0-.8-.347-1.138-1.142-1.138Zm4.685,8.448a1.048,1.048,0,0,0,.128.028q4.327,0,8.654,0a.768.768,0,0,0,.834-.857q.006-1.972,0-3.944c0-.579-.271-.843-.858-.844q-3.079,0-6.157,0c-.606,0-.864.257-.868.862-.006.794-.036,1.591.009,2.383a1.458,1.458,0,0,1-.624,1.36C316.47,140.15,316.133,140.509,315.739,140.87Zm-4.71,10.932q5.945,0,11.89,0a.99.99,0,0,0,1.07-1.082c0-.24-.082-.3-.312-.3q-5.491.009-10.982,0a.4.4,0,0,0-.4.239,1.423,1.423,0,0,1-2.478.042.513.513,0,0,0-.516-.282q-5.023.01-10.045,0c-.293,0-.587.008-.88,0-.2-.008-.259.079-.263.269a.978.978,0,0,0,1.08,1.117Z"
                              transform="translate(-297.205 -131.483)"
                              fill="#0061ff"
                            />
                            <path
                              id="Path_7211"
                              data-name="Path 7211"
                              d="M334.926,157.418a5.793,5.793,0,0,0-2.21.268,2.13,2.13,0,0,0-1.423,2.046c.027.443.009.889,0,1.334a1.483,1.483,0,0,1-.053.419.411.411,0,0,1-.432.3c-.214,0-.406-.11-.418-.313-.074-1.325-.289-2.683.731-3.8a3.413,3.413,0,0,1,1.766-1.019c.233-.056.25-.13.131-.317a1.981,1.981,0,0,1-.283-1,9.246,9.246,0,0,1,.043-2.066,2.215,2.215,0,0,1,2.807-1.659,2.146,2.146,0,0,1,1.631,2.069c0,.539,0,1.078,0,1.618a1.883,1.883,0,0,1-.3,1.05c-.132.2-.087.248.131.3a3.17,3.17,0,0,1,2.515,2.519,6.993,6.993,0,0,1,.034,1.33c.007.265.008.53,0,.795a.466.466,0,1,1-.931,0c-.013-.491-.032-.985,0-1.475a2.2,2.2,0,0,0-1.61-2.207A6.685,6.685,0,0,0,334.926,157.418Zm-1.24-2.958h0c0,.3-.012.606,0,.908a1.139,1.139,0,0,0,.787,1.044,1.6,1.6,0,0,0,.729.059,1.176,1.176,0,0,0,1.071-1.1c.014-.586.016-1.173,0-1.759a1.306,1.306,0,0,0-2.585-.032C333.672,153.872,333.687,154.166,333.687,154.46Z"
                              transform="translate(-321.137 -145.974)"
                              fill="#0061ff"
                            />
                            <path
                              id="Path_7212"
                              data-name="Path 7212"
                              d="M344.6,137.4c.169,0,.34-.009.509,0a.444.444,0,0,1,.437.432.426.426,0,0,1-.381.48,7.5,7.5,0,0,1-1.1,0,.466.466,0,0,1-.422-.486.472.472,0,0,1,.477-.432C344.28,137.4,344.44,137.4,344.6,137.4Z"
                              transform="translate(-330.763 -135.76)"
                              fill="#0061ff"
                            />
                          </g>
                        </g>
                      </svg>{" "}
                      Higher interaction in live online classes conducted by
                      industry experts.
                    </p>
                  </div>
                </div>
                <div className="partner-logo col-md-6">
                  <div className="">
                    <p className="fs12">
                      <svg
                        className="m-r5"
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        viewBox="0 0 26.524 26.008"
                      >
                        <g
                          id="Group_28045"
                          data-name="Group 28045"
                          transform="translate(547 -314)"
                        >
                          <g
                            id="Group_27950"
                            data-name="Group 27950"
                            transform="translate(-547 314)"
                          >
                            <path
                              id="Path_7196"
                              data-name="Path 7196"
                              d="M63.207,156.122a.668.668,0,0,1,.633-.267q2.962,0,5.925,0c.364,0,.369,0,.36-.374a12.186,12.186,0,0,1,.36-3.56c.028-.1.06-.2.089-.3a1.536,1.536,0,0,1,1.118-1.182,11.47,11.47,0,0,0,2.668-1.3c.474-.289.64-.245.913.226.35.6.7,1.206,1.047,1.815.1.182.154.219.272.008.353-.632.721-1.256,1.086-1.882.226-.388.423-.445.8-.211a15.167,15.167,0,0,0,3.145,1.5.868.868,0,0,1,.51.514,6.615,6.615,0,0,1,.5,1.707,12.943,12.943,0,0,1,.152,2.73c-.008.243.073.31.308.309,1.958-.007,3.915,0,5.873,0,.086,0,.173,0,.259,0a.473.473,0,0,1,.476.292.492.492,0,0,1-.146.539c-1.039,1.083-2.068,2.174-3.112,3.252-.172.177-.181.276,0,.451,1.011.977,2.009,1.966,3.012,2.952a1.628,1.628,0,0,1,.177.188.441.441,0,0,1-.319.727,2.543,2.543,0,0,1-.259,0c-2.139,0-4.277,0-6.416,0a.593.593,0,0,0-.522.249,6.933,6.933,0,0,1-4.909,2.705,7.015,7.015,0,0,1-6.418-2.727.551.551,0,0,0-.48-.227c-2.165.006-4.329,0-6.494.007a.734.734,0,0,1-.6-.226v-.414c.093-.1.181-.207.279-.3q1.509-1.486,3.021-2.968c.106-.1.188-.184.042-.335q-1.677-1.736-3.342-3.484Zm13.226,10.241a6.3,6.3,0,1,0-6.281-6.314A6.3,6.3,0,0,0,76.433,166.363Zm-5.366-11.077a7.214,7.214,0,0,1,10.794.015,3.812,3.812,0,0,0,.008-1.185,8.4,8.4,0,0,0-.425-2.356.64.64,0,0,0-.428-.434,13.356,13.356,0,0,1-2.5-1.173c-.178-.108-.259-.078-.358.1-.392.7-.8,1.39-1.2,2.085-.118.206-.232.421-.509.418s-.386-.222-.5-.427c-.395-.688-.8-1.371-1.184-2.063-.1-.185-.186-.218-.375-.1a11.21,11.21,0,0,1-2.309,1.094.992.992,0,0,0-.7.761,12.6,12.6,0,0,0-.388,2.937A.512.512,0,0,0,71.067,155.286Zm17.174,1.473h-.254c-1.621,0-3.243,0-4.864,0-.229,0-.262.041-.159.253a6.948,6.948,0,0,1,.7,3.047,7.212,7.212,0,0,1-.667,3.03c-.119.263-.114.274.166.274q2.393,0,4.786,0c.059,0,.138.036.124,0-.915-.915-1.808-1.85-2.7-2.782-.283-.295-.295-.48-.015-.775.67-.708,1.345-1.41,2.016-2.116C87.644,157.4,87.918,157.1,88.242,156.759Zm-23.474,6.554a.34.34,0,0,0,.25.047q2.354,0,4.708,0c.316,0,.314,0,.185-.3a7.08,7.08,0,0,1,.049-6.077c.106-.229.018-.232-.167-.231-1.63,0-3.26,0-4.889,0-.056,0-.121-.025-.17.034.021.091.1.137.157.2.879.925,1.763,1.846,2.638,2.774.331.351.321.516-.016.85q-1.241,1.228-2.484,2.454C64.945,163.151,64.858,163.229,64.768,163.313Z"
                              transform="translate(-63.207 -141.244)"
                              fill="#2d7cfe"
                            />
                            <path
                              id="Path_7197"
                              data-name="Path 7197"
                              d="M103.629,121.341a3.135,3.135,0,0,1,2.84-3.179,3.094,3.094,0,0,1,3.346,2.585,5.849,5.849,0,0,1-.506,3.045,3.379,3.379,0,0,1-1.057,1.445,2.427,2.427,0,0,1-3.432-.485A5.1,5.1,0,0,1,103.685,122,2.974,2.974,0,0,1,103.629,121.341Zm3.127-2.281a2.15,2.15,0,0,0-2.163,1.69,4.12,4.12,0,0,0,.28,2.354,2.928,2.928,0,0,0,1.051,1.441,1.429,1.429,0,0,0,1.93-.15,2.93,2.93,0,0,0,.643-.961,6.791,6.791,0,0,0,.452-1.825A2.2,2.2,0,0,0,106.756,119.061Z"
                              transform="translate(-93.5 -118.15)"
                              fill="#2d7cfe"
                            />
                            <path
                              id="Path_7198"
                              data-name="Path 7198"
                              d="M105.542,184.16a.462.462,0,0,1-.715.455q-1.006-.474-2-.969a.479.479,0,0,0-.481-.006c-.647.326-1.3.633-1.953.95a.521.521,0,0,1-.606,0,.552.552,0,0,1-.152-.568c.1-.733.192-1.467.3-2.2a.383.383,0,0,0-.127-.363c-.512-.525-1.015-1.057-1.526-1.583a.527.527,0,0,1-.2-.574c.081-.226.278-.278.492-.316.721-.126,1.438-.271,2.16-.393a.418.418,0,0,0,.331-.245c.34-.64.687-1.275,1.027-1.914.105-.2.219-.381.473-.385s.384.188.494.393c.337.631.681,1.259,1.016,1.891a.437.437,0,0,0,.348.26c.73.121,1.456.267,2.185.4a.512.512,0,0,1,.461.32.521.521,0,0,1-.187.554c-.5.52-1,1.048-1.509,1.563a.461.461,0,0,0-.15.433c.1.715.2,1.432.292,2.149C105.529,184.072,105.538,184.131,105.542,184.16Zm-4.9-.9c-.033.221.088.174.21.116.466-.223.937-.437,1.4-.676a.688.688,0,0,1,.685.007c.453.23.914.445,1.371.668.152.074.249.08.218-.139-.075-.519-.136-1.041-.222-1.558a.6.6,0,0,1,.164-.566q.567-.585,1.126-1.177c.045-.047.124-.088.088-.169-.027-.061-.1-.056-.159-.067-.483-.086-.963-.186-1.448-.256a.805.805,0,0,1-.674-.482c-.209-.434-.451-.853-.682-1.276-.035-.064-.047-.173-.138-.167s-.1.109-.134.175c-.231.424-.472.843-.682,1.276a.79.79,0,0,1-.654.47c-.468.069-.932.164-1.4.251-.079.015-.2-.019-.22.089-.02.091.077.147.135.207q.533.563,1.072,1.121a.609.609,0,0,1,.167.566C100.776,182.2,100.714,182.731,100.642,183.259Z"
                              transform="translate(-89.33 -161.548)"
                              fill="#2d7cfe"
                            />
                          </g>
                        </g>
                      </svg>{" "}
                      Doubt clearing sessions with certified mentors.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="p-20 bg-white">
                <h6 className="">
                
                  <svg
                  className="m-r5"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    viewBox="0 0 20.897 18.956"
                  >
                    <g
                      id="Icon_feather-briefcase"
                      data-name="Icon feather-briefcase"
                      transform="translate(-2.4 -3.9)"
                    >
                      <path
                        id="Path_3"
                        data-name="Path 3"
                        d="M5.083,9.9h15.53A2.686,2.686,0,0,1,23.3,12.583V22.29a2.686,2.686,0,0,1-2.683,2.683H5.083A2.686,2.686,0,0,1,2.4,22.29V12.583A2.686,2.686,0,0,1,5.083,9.9Zm15.53,13.589a1.2,1.2,0,0,0,1.2-1.2V12.583a1.2,1.2,0,0,0-1.2-1.2H5.083a1.2,1.2,0,0,0-1.2,1.2V22.29a1.2,1.2,0,0,0,1.2,1.2Z"
                        transform="translate(0 -2.117)"
                        fill="#0062ff"
                      />
                      <path
                        id="Path_4"
                        data-name="Path 4"
                        d="M19.907,22.856a.742.742,0,0,1-.742-.742V6.583a1.2,1.2,0,0,0-1.2-1.2H14.083a1.2,1.2,0,0,0-1.2,1.2v15.53a.742.742,0,1,1-1.484,0V6.583A2.686,2.686,0,0,1,14.083,3.9h3.883a2.686,2.686,0,0,1,2.683,2.683v15.53A.742.742,0,0,1,19.907,22.856Z"
                        transform="translate(-3.176 0)"
                        fill="#0062ff"
                      />
                    </g>
                  </svg> For Business
                </h6>
                <p className="fs14">Customized learning paths, 4x outcomes & completion rates; award-winning client support.</p>
                <Link href={"/contact-us"}><div className="radius-sm bg-primary text-center p-10 text-white">Contact Us</div></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgramDetails;
