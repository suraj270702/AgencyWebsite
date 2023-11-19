import React from "react";

import logo from "../assets/Rectangle 9.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-primary px-8 py-4 max-w-screen-2xl mt-24 ">
      <div className="flex flex-col lg:flex-row lg:gap-10">
        <div className="md:p-6 w-full md:w-[600px]  ">
          <div>
            <div className="flex items-center gap-6">
              <img src={logo} className="" />
              <span className="text-3xl md:4xl text-white font-bold">XYZ</span>
            </div>
            <p className="text-white text-[16px] md:text-[24px] font-[400] mt-6 opacity-[0.8]">
              A simple paragraph is comprised of three major components. The
              first sentence, which is often a declarative sentence.
            </p>
            <div className="mt-6 flex">
              <div className="w-[250px] bg-[rgba(154,122,241,0.35)]  rounded-tl-[20px] rounded-bl-[20px] pl-4 py-3">
                <input
                  type="email"
                  placeholder="email"
                  className="border-none outline-none text-[14px] md:text-[20px] w-content bg-transparent text-[rgba(255,255,255,0.60)]"
                />
              </div>
              <button className="px-10  py-3 text-[14px] md:text-[20px] bg-[#9A7Af1] text-white rounded-[20px] -ml-4">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-row sm:justify-between gap-24 md:gap-10 mt-4 md:mt-0">
          <div className="md:p-6 ">
            <div className="flex flex-col mt-4">
              <h3 className="text-white text-[16px] md:text-[24px] font-semibold">
                Platform
              </h3>
              <Link
                to="/"
                className="mt-3 text-white text-[16px] md:text-[20px] font-[400] opacity-[0.8] hover:text-gray-300"
              >
                Overview
              </Link>
              <Link
                to="/"
                className="mt-3 text-white text-[16px] md:text-[20px] font-[400] opacity-[0.8] hover:text-gray-300"
              >
                Features
              </Link>
              <Link
                to="/"
                className="mt-3 text-white text-[16px] md:text-[20px] font-[400] opacity-[0.8] hover:text-gray-300"
              >
                About
              </Link>
              <Link
                to="/"
                className="mt-3 text-white text-[16px] md:text-[20px] font-[400] opacity-[0.8] hover:text-gray-300"
              >
                Pricing
              </Link>
            </div>
          </div>
          <div className="md:p-6 ">
            <div className="flex flex-col mt-4">
              <h3 className="text-white text-[16px] md:text-[24px] font-semibold">
                Help
              </h3>
              <Link
                to="/"
                className="mt-3 text-white text-[16px] md:text-[20px] font-[400] opacity-[0.8] hover:text-gray-300"
              >
                how does it work?
              </Link>
              <Link
                to="/"
                className="mt-3 text-white text-[16px] md:text-[20px] font-[400] opacity-[0.8] hover:text-gray-300"
              >
                how to ask question?
              </Link>
              <Link
                to="/"
                className="mt-3 text-white text-[16px] md:text-[20px] font-[400] opacity-[0.8] hover:text-gray-300"
              >
                How to play
              </Link>
              <Link
                to="/"
                className="mt-3 text-white text-[16px] md:text-[20px] font-[400] opacity-[0.8] hover:text-gray-300"
              >
                How to do this?
              </Link>
            </div>
          </div>
        </div>
        <div className="md:p-6 w-[200px] mt-4 md:mt-0">
          <div className="flex flex-col mt-2">
            <h3 className="text-white text-[16px] md:text-[24px] font-semibold">
              Contacts
            </h3>
            <Link
              to="/"
              className="mt-3 text-white text-[16px] md:text-[20px] font-[400] opacity-[0.8] hover:text-gray-300"
            >
              (012) 1234-567-890
            </Link>
            <Link
              to="/"
              className="mt-3 text-white text-[16px] md:text-[20px] font-[400] opacity-[0.8] hover:text-gray-300"
            >
              123 xyz xyz qwuerybaihefv, qiwu - hrebcl 095467
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-10 md:px-7">
        <div className="border-t ">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-10">
            <h3 className="text-[rgba(255,255,255,0.80)] text-[16px] md:text-[24px] font-[400]">
              @ XYZ 20XX --- 20XX. All rights reserved.
            </h3>
            <div className="flex items-center gap-10 mt-6 md:mt-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="44"
                viewBox="0 0 45 44"
                fill="none"
              >
                <g opacity="0.8" clip-path="url(#clip0_17_159)">
                  <path
                    d="M42.9844 0.125H2.01562C1.03037 0.125 0.234375 0.907031 0.234375 1.875V42.125C0.234375 43.093 1.03037 43.875 2.01562 43.875H42.9844C43.9696 43.875 44.7656 43.093 44.7656 42.125V1.875C44.7656 0.907031 43.9696 0.125 42.9844 0.125ZM41.2031 40.375H30.9554V26.9328H36.7444L37.6128 20.332H30.9554V16.1156C30.9554 14.2016 31.4953 12.9 34.2841 12.9H37.841V6.99375C37.2231 6.91172 35.1135 6.73125 32.6531 6.73125C27.5209 6.73125 24.0085 9.81016 24.0085 15.4594V20.3266H18.2083V26.9273H24.0141V40.375H3.79688V3.625H41.2031V40.375Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_17_159">
                    <rect width="45" height="44" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
              >
                <g opacity="0.8" clip-path="url(#clip0_17_161)">
                  <path
                    d="M22 10.7835C15.793 10.7835 10.7836 15.7928 10.7836 21.9999C10.7836 28.2069 15.793 33.2163 22 33.2163C28.207 33.2163 33.2164 28.2069 33.2164 21.9999C33.2164 15.7928 28.207 10.7835 22 10.7835ZM22 29.2897C17.986 29.2897 14.7102 26.0139 14.7102 21.9999C14.7102 17.9858 17.986 14.71 22 14.71C26.0141 14.71 29.2899 17.9858 29.2899 21.9999C29.2899 26.0139 26.0141 29.2897 22 29.2897ZM33.6758 7.71002C32.2266 7.71002 31.0563 8.88034 31.0563 10.3296C31.0563 11.7788 32.2266 12.9491 33.6758 12.9491C35.125 12.9491 36.2953 11.7842 36.2953 10.3296C36.2958 9.98543 36.2283 9.64461 36.0968 9.32659C35.9653 9.00858 35.7724 8.71964 35.529 8.47631C35.2857 8.23297 34.9968 8.04004 34.6788 7.90855C34.3607 7.77705 34.0199 7.70959 33.6758 7.71002ZM43.8641 21.9999C43.8641 18.9811 43.8914 15.9897 43.7219 12.9764C43.5524 9.47643 42.7539 6.37018 40.1945 3.81081C37.6297 1.24596 34.5289 0.452994 31.0289 0.283462C28.0102 0.113931 25.0188 0.141275 22.0055 0.141275C18.9867 0.141275 15.9953 0.113931 12.982 0.283462C9.48205 0.452994 6.3758 1.25143 3.81642 3.81081C1.25158 6.37565 0.458609 9.47643 0.289078 12.9764C0.119546 15.9952 0.14689 18.9866 0.14689 21.9999C0.14689 25.0131 0.119546 28.01 0.289078 31.0233C0.458609 34.5233 1.25705 37.6296 3.81642 40.1889C6.38127 42.7538 9.48205 43.5467 12.982 43.7163C16.0008 43.8858 18.9922 43.8585 22.0055 43.8585C25.0242 43.8585 28.0156 43.8858 31.0289 43.7163C34.5289 43.5467 37.6352 42.7483 40.1945 40.1889C42.7594 37.6241 43.5524 34.5233 43.7219 31.0233C43.8969 28.01 43.8641 25.0186 43.8641 21.9999ZM39.0516 34.8952C38.6524 35.8905 38.1711 36.6342 37.4 37.3999C36.6289 38.171 35.8906 38.6522 34.8953 39.0514C32.0188 40.1944 25.1883 39.9374 22 39.9374C18.8117 39.9374 11.9758 40.1944 9.09923 39.0569C8.10392 38.6577 7.36017 38.1764 6.59455 37.4053C5.82345 36.6342 5.3422 35.896 4.94298 34.9007C3.80548 32.0186 4.06252 25.1882 4.06252 21.9999C4.06252 18.8116 3.80548 11.9756 4.94298 9.09909C5.3422 8.10378 5.82345 7.36003 6.59455 6.5944C7.36564 5.82878 8.10392 5.34206 9.09923 4.94284C11.9758 3.80534 18.8117 4.06237 22 4.06237C25.1883 4.06237 32.0242 3.80534 34.9008 4.94284C35.8961 5.34206 36.6399 5.82331 37.4055 6.5944C38.1766 7.36549 38.6578 8.10378 39.057 9.09909C40.1945 11.9756 39.9375 18.8116 39.9375 21.9999C39.9375 25.1882 40.1945 32.0186 39.0516 34.8952Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_17_161">
                    <rect width="44" height="44" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="45"
                height="44"
                viewBox="0 0 45 44"
                fill="none"
              >
                <g opacity="0.8" clip-path="url(#clip0_17_163)">
                  <path
                    d="M42.9844 0.125H2.01562C1.03037 0.125 0.234375 0.907031 0.234375 1.875V42.125C0.234375 43.093 1.03037 43.875 2.01562 43.875H42.9844C43.9696 43.875 44.7656 43.093 44.7656 42.125V1.875C44.7656 0.907031 43.9696 0.125 42.9844 0.125ZM34.4845 15.968C34.5012 16.225 34.5012 16.493 34.5012 16.7555C34.5012 24.7836 28.2779 34.0312 16.9058 34.0312C13.3989 34.0312 10.1481 33.0305 7.40947 31.3078C7.91045 31.3625 8.38916 31.3844 8.90127 31.3844C11.7958 31.3844 14.4565 30.4219 16.5773 28.7922C13.8609 28.7375 11.5787 26.9875 10.7994 24.5813C11.7513 24.718 12.6085 24.718 13.5882 24.4719C12.1895 24.1927 10.9323 23.4464 10.0302 22.3598C9.12814 21.2731 8.63679 19.9132 8.63965 18.5109V18.4344C9.45791 18.8883 10.4209 19.1672 11.4284 19.2055C10.5814 18.6509 9.88685 17.8996 9.40621 17.0181C8.92556 16.1367 8.67373 15.1523 8.67305 14.1523C8.67305 13.0203 8.97363 11.9867 9.51357 11.0898C11.0661 12.9675 13.0033 14.5031 15.1995 15.597C17.3956 16.6909 19.8015 17.3185 22.2606 17.4391C21.3867 13.3102 24.5262 9.96875 28.3002 9.96875C30.0814 9.96875 31.6846 10.7016 32.8145 11.8828C34.2117 11.6258 35.5477 11.1117 36.7389 10.4227C36.2769 11.8281 35.3083 13.0148 34.0225 13.7641C35.2693 13.6328 36.4717 13.2938 37.585 12.818C36.7444 14.032 35.6924 15.1094 34.4845 15.968Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_17_163">
                    <rect width="45" height="44" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
              >
                <g opacity="0.8" clip-path="url(#clip0_17_165)">
                  <path
                    d="M40.3586 0.125H3.64141C1.7 0.125 0.125 1.7 0.125 3.64141V40.3586C0.125 42.3 1.7 43.875 3.64141 43.875H40.3586C42.3 43.875 43.875 42.3 43.875 40.3586V3.64141C43.875 1.7 42.3 0.125 40.3586 0.125ZM40.3586 40.375C15.8695 40.3695 3.625 40.3641 3.625 40.3586C3.63047 15.8695 3.63594 3.625 3.64141 3.625C28.1305 3.63047 40.375 3.63594 40.375 3.64141C40.3695 28.1305 40.3641 40.375 40.3586 40.375ZM6.61094 16.5258H13.1023V37.4055H6.61094V16.5258ZM9.85938 13.6711C11.932 13.6711 13.6219 11.9867 13.6219 9.90859C13.6219 9.41449 13.5246 8.92523 13.3355 8.46875C13.1464 8.01226 12.8692 7.59749 12.5199 7.2481C12.1705 6.89872 11.7557 6.62158 11.2992 6.4325C10.8427 6.24341 10.3535 6.14609 9.85938 6.14609C9.36528 6.14609 8.87602 6.24341 8.41953 6.4325C7.96304 6.62158 7.54827 6.89872 7.19889 7.2481C6.84951 7.59749 6.57236 8.01226 6.38328 8.46875C6.19419 8.92523 6.09687 9.41449 6.09687 9.90859C6.09141 11.9867 7.77578 13.6711 9.85938 13.6711ZM23.657 27.075C23.657 24.3516 24.1766 21.7156 27.5508 21.7156C30.8758 21.7156 30.925 24.8273 30.925 27.25V37.4055H37.4109V25.9539C37.4109 20.332 36.1969 16.0062 29.6289 16.0062C26.4734 16.0062 24.357 17.7398 23.4875 19.3805H23.4V16.5258H17.1711V37.4055H23.657V27.075Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_17_165">
                    <rect width="44" height="44" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
