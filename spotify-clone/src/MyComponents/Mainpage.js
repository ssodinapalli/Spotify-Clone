import React from "react";
import "../assests/ComponentCss/Mainpage.css";

function Mainpage() {
  // let btn = document.querySelector('.toggle-btn');
  // let sidebar = document.querySelector('.sidebar-left');
  // btn.addEventListener('click', function () {
  // 	document.querySelector('.sidebar-menu').scrollTop = 0;
  // 	sidebar.classList.toggle('closed');
  // });

  // function openSidebar() {
  // 	sidebar.classList.remove('closed');
  // 	setTimeout(() => {
  // 		document.querySelector('#search').focus();
  // 	}, 300);
  // }

  // function toggleSidebar() {
  // 	sidebar.classList.remove('closed');
  // 	sidebar.classList.toggle('-translate-x-full');
  // }

  return (
    <>
      <body class="flex h-screen overflow-hidden">
        <aside class="absolute z-10 w-3/4 sm:w-1/2 -translate-x-full lg:translate-x-0 sidebar-left lg:relative lg:w-[18rem] flex-shrink-0 h-full py-[1.5rem] px-[1.25rem] bg-black backdrop-blur-xl bg-opacity-5">
          <div class="hidden lg:block toggle-btn icon cursor-pointer duration-300 hover:scale-110 p-[0.3rem] toggle-btn absolute w-[1.5rem] h-[1.5rem] bg-black bg-opacity-60 backdrop-blur-2xl rounded-full -right-0 top-0 translate-x-1/2 translate-y-[15.25rem]">
            <svg
              stroke="#fff"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 19.9201L8.47997 13.4001C7.70997 12.6301 7.70997 11.3701 8.47997 10.6001L15 4.08008"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div>
            <header class="flex justify-between items-center">
              <a href="#" class="inline-flex space-x-[1.25rem]">
                <div class="h-[2.5rem] flex-shrink-0">
                  <img
                    class="h-[2.5rem]"
                    src="https://i.imgur.com/HYlxHuo.png"
                    alt=""
                  />
                </div>
                <div class="closed-hide">
                  <img
                    class="h-[2.5rem]"
                    src="https://i.imgur.com/DHjiMAT.png"
                    alt=""
                  />
                </div>
              </a>
              <div class="closed-hide flex space-x-[0.5rem]">
                <div class="duration-300 hover:scale-110 icon bg-alt cursor-pointer rounded-full w-[1.5rem] h-[1.5rem] p-[0.35rem] bg-opacity-40">
                  <svg
                    stroke="#fff"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 19.9201L8.47997 13.4001C7.70997 12.6301 7.70997 11.3701 8.47997 10.6001L15 4.08008"
                      stroke-width="3"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div class="opacity-30 icon bg-alt rounded-full w-[1.5rem] h-[1.5rem] p-[0.35rem] bg-opacity-50">
                  <svg
                    stroke="#fff"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008"
                      stroke-width="3"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </header>

            <div class="relative mt-[1.5rem] rounded-md bg-black bg-opacity-40 overflow-hidden text-alt text-opacity-60 focus-within:text-opacity-80">
              <input
                id="search"
                type="text"
                class="closed-hide md:block px-[2.5rem] duration-300 w-full outline-none bg-transparent h-[2.5rem] text-[13px] placeholder-current"
                placeholder="Search"
              />
              <label
                for="search"
                onclick="openSidebar()"
                class="cursor-pointer h-[2.5rem] w-[2.5rem] absolute top-0 left-0 flex items-center justify-center"
              >
                <div class="duration-300 icon">
                  <svg
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      opacity="0.6"
                      d="M22 22L20 20"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </label>
              <div class="closed-hide flex h-[2.5rem] w-[2.5rem] absolute top-0 right-0 items-center justify-center">
                <div class="duration-300 icon cursor-pointer hover:text-white hover:text-opacity-70">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22.75 17.5C22.75 17.91 22.41 18.25 22 18.25H15V18.5C15 20 14.1 20.5 13 20.5H7C5.9 20.5 5 20 5 18.5V18.25H2C1.59 18.25 1.25 17.91 1.25 17.5C1.25 17.09 1.59 16.75 2 16.75H5V16.5C5 15 5.9 14.5 7 14.5H13C14.1 14.5 15 15 15 16.5V16.75H22C22.41 16.75 22.75 17.09 22.75 17.5Z" />
                    <path
                      opacity="0.4"
                      d="M22.75 6.5C22.75 6.91 22.41 7.25 22 7.25H19V7.5C19 9 18.1 9.5 17 9.5H11C9.9 9.5 9 9 9 7.5V7.25H2C1.59 7.25 1.25 6.91 1.25 6.5C1.25 6.09 1.59 5.75 2 5.75H9V5.5C9 4 9.9 3.5 11 3.5H17C18.1 3.5 19 4 19 5.5V5.75H22C22.41 5.75 22.75 6.09 22.75 6.5Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="sidebar-menu pb-[1.5rem]">
              <nav class="mt-[1.5rem] text-sm text-alt2">
                <h6 class="closed-hide uppercase text-[11px] text-alt tracking-wider ml-[0.5rem]">
                  Menu
                </h6>
                <ul class="space-y-[0.25rem] mt-[1rem]">
                  <li class="text-white">
                    <a
                      href="#"
                      class="inline-flex items-center h-[2.5rem] space-x-[1.25rem] hover:text-white"
                    >
                      <div class="w-[2.5rem] flex justify-center">
                        <div class="icon w-[1.5rem] h-[1.5rem] duration-300">
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M20.83 8.01002L14.28 2.77002C13 1.75002 11 1.74002 9.72996 2.76002L3.17996 8.01002C2.23996 8.76002 1.66996 10.26 1.86996 11.44L3.12996 18.98C3.41996 20.67 4.98996 22 6.69996 22H17.3C18.99 22 20.59 20.64 20.88 18.97L22.14 11.43C22.32 10.26 21.75 8.76002 20.83 8.01002Z" />
                            <path
                              fill="#444"
                              d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V15C11.25 14.59 11.59 14.25 12 14.25C12.41 14.25 12.75 14.59 12.75 15V18C12.75 18.41 12.41 18.75 12 18.75Z"
                            />
                          </svg>
                        </div>
                      </div>
                      <span class="closed-hide duration-300">Home</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="inline-flex items-center h-[2.5rem] space-x-[1.25rem] hover:text-white"
                    >
                      <div class="w-[2.5rem] flex justify-center">
                        <div class="icon w-[1.5rem] h-[1.5rem] duration-300">
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.4"
                              d="M20.9808 3.0201C20.1108 2.1501 18.8808 1.8101 17.6908 2.1101L7.89084 4.5601C6.24084 4.9701 4.97084 6.2501 4.56084 7.8901L2.11084 17.7001C1.81084 18.8901 2.15084 20.1201 3.02084 20.9901C3.68084 21.6401 4.55084 22.0001 5.45084 22.0001C5.73084 22.0001 6.02084 21.9701 6.30084 21.8901L16.1108 19.4401C17.7508 19.0301 19.0308 17.7601 19.4408 16.1101L21.8908 6.3001C22.1908 5.1101 21.8508 3.8801 20.9808 3.0201Z"
                            />
                            <path d="M11.9991 15.8801C14.142 15.8801 15.8791 14.143 15.8791 12.0001C15.8791 9.85725 14.142 8.12012 11.9991 8.12012C9.85628 8.12012 8.11914 9.85725 8.11914 12.0001C8.11914 14.143 9.85628 15.8801 11.9991 15.8801Z" />
                          </svg>
                        </div>
                      </div>
                      <span class="closed-hide duration-300">Discover</span>
                    </a>
                  </li>
                  <li class="flex justify-between items-center">
                    <a
                      href="#"
                      class="inline-flex items-center h-[2.5rem] space-x-[1.25rem] hover:text-white"
                    >
                      <div class="w-[2.5rem] flex justify-center">
                        <div class="icon w-[1.5rem] h-[1.5rem] duration-300">
                          <svg
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.4"
                              d="M22 10V17C22 20 20 22 17 22H7C4 22 2 20 2 17V10C2 7.26 3.67 5.34999 6.25 5.04999C6.49 5.00999 6.74 5 7 5H17C20 5 22 7 22 10Z"
                            />
                            <path d="M7.75 2V5H7C6.74 5 6.49 5.00999 6.25 5.04999V2C6.25 1.59 6.59 1.25 7 1.25C7.41 1.25 7.75 1.59 7.75 2Z" />
                            <path d="M7.88086 16C9.26157 16 10.3809 14.8807 10.3809 13.5C10.3809 12.1193 9.26157 11 7.88086 11C6.50015 11 5.38086 12.1193 5.38086 13.5C5.38086 14.8807 6.50015 16 7.88086 16Z" />
                            <path d="M17.8809 12.25H13.8809C13.4709 12.25 13.1309 11.91 13.1309 11.5C13.1309 11.09 13.4709 10.75 13.8809 10.75H17.8809C18.2909 10.75 18.6309 11.09 18.6309 11.5C18.6309 11.91 18.2909 12.25 17.8809 12.25Z" />
                            <path d="M14.3809 16.25H13.8809C13.4709 16.25 13.1309 15.91 13.1309 15.5C13.1309 15.09 13.4709 14.75 13.8809 14.75H14.3809C14.7909 14.75 15.1309 15.09 15.1309 15.5C15.1309 15.91 14.7909 16.25 14.3809 16.25Z" />
                            <path d="M17.8809 16.25H17.3809C16.9709 16.25 16.6309 15.91 16.6309 15.5C16.6309 15.09 16.9709 14.75 17.3809 14.75H17.8809C18.2909 14.75 18.6309 15.09 18.6309 15.5C18.6309 15.91 18.2909 16.25 17.8809 16.25Z" />
                          </svg>
                        </div>
                      </div>
                      <span class="closed-hide duration-300">Radio</span>
                    </a>
                    <span class="closed-hide flex w-[4px] h-[4px] bg-primary rounded-full mr-[0.5rem]"></span>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="inline-flex items-center h-[2.5rem] space-x-[1.25rem] hover:text-white"
                    >
                      <div class="w-[2.5rem] flex justify-center">
                        <div class="icon w-[1.5rem] h-[1.5rem] duration-300">
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M10.2894 10.3398V18.4098C10.2894 20.3898 8.66937 21.9998 6.69937 21.9998C4.71937 21.9998 3.10938 20.3898 3.10938 18.4098C3.10938 16.4398 4.71937 14.8298 6.69937 14.8298C7.52938 14.8298 8.27938 15.1198 8.88938 15.5898V10.7398L10.2894 10.3398Z" />
                            <path d="M20.8909 7.31982V16.4798C20.8909 18.4598 19.2809 20.0698 17.3009 20.0698C15.3309 20.0698 13.7109 18.4598 13.7109 16.4798C13.7109 14.5098 15.3309 12.8998 17.3009 12.8998C18.1409 12.8998 18.8909 13.1898 19.5009 13.6698V7.71982L20.8909 7.31982Z" />
                            <path
                              opacity="0.4"
                              d="M20.8906 5.18007V7.32007L8.89062 10.7401V6.75007C8.89062 5.28007 9.78062 4.14007 11.1906 3.76007L16.9706 2.18007C18.1406 1.86007 19.1306 1.97007 19.8306 2.51007C20.5406 3.04007 20.8906 3.94007 20.8906 5.18007Z"
                            />
                          </svg>
                        </div>
                      </div>
                      <span class="closed-hide duration-300">Albums</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="inline-flex items-center h-[2.5rem] space-x-[1.25rem] hover:text-white"
                    >
                      <div class="w-[2.5rem] flex justify-center">
                        <div class="icon w-[1.5rem] h-[1.5rem] duration-300">
                          <svg
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M14.1297 11.3401C14.5197 9.70008 13.0897 8.27003 11.4497 8.66003C10.6797 8.85003 10.0497 9.48005 9.85974 10.2501C9.46974 11.8901 10.8997 13.32 12.5397 12.93C13.3197 12.74 13.9497 12.1101 14.1297 11.3401Z" />
                            <path
                              opacity="0.4"
                              d="M6.02094 17.97C5.84093 17.97 5.65093 17.9 5.51093 17.77C3.57093 15.97 2.46094 13.43 2.46094 10.79C2.46094 5.52998 6.74093 1.25 12.0009 1.25C17.2609 1.25 21.5409 5.52998 21.5409 10.79C21.5409 13.45 20.4709 15.91 18.5309 17.74C18.2309 18.02 17.7509 18.01 17.4709 17.71C17.1909 17.41 17.2009 16.93 17.5009 16.65C19.1409 15.11 20.0409 13.04 20.0409 10.8C20.0409 6.36999 16.4309 2.76001 12.0009 2.76001C7.57093 2.76001 3.96094 6.36999 3.96094 10.8C3.96094 13.06 4.87093 15.14 6.53093 16.68C6.83093 16.96 6.85094 17.44 6.57094 17.74C6.42094 17.89 6.22094 17.97 6.02094 17.97Z"
                            />
                            <path
                              opacity="0.4"
                              d="M15.9995 15.3C15.8195 15.3 15.6295 15.23 15.4895 15.1C15.1895 14.82 15.1695 14.34 15.4595 14.04C16.2895 13.16 16.7495 12 16.7495 10.8C16.7495 8.18005 14.6195 6.06006 12.0095 6.06006C9.39952 6.06006 7.26953 8.19005 7.26953 10.8C7.26953 12.01 7.72952 13.16 8.55952 14.04C8.83952 14.34 8.82953 14.82 8.52953 15.1C8.22953 15.39 7.74953 15.3701 7.46953 15.0701C6.37953 13.9101 5.76953 12.39 5.76953 10.8C5.76953 7.36005 8.56952 4.56006 12.0095 4.56006C15.4495 4.56006 18.2495 7.36005 18.2495 10.8C18.2495 12.39 17.6495 13.9101 16.5495 15.0701C16.3995 15.2201 16.1995 15.3 15.9995 15.3Z"
                            />
                            <path d="M10.3007 16.66L8.86071 18.4501C7.72071 19.8801 8.73071 21.99 10.5607 21.99H13.4307C15.2607 21.99 16.2807 19.8701 15.1307 18.4501L13.6907 16.66C12.8307 15.57 11.1707 15.57 10.3007 16.66Z" />
                          </svg>
                        </div>
                      </div>
                      <span class="closed-hide duration-300">Artists</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="inline-flex items-center h-[2.5rem] space-x-[1.25rem] hover:text-white"
                    >
                      <div class="w-[2.5rem] flex justify-center">
                        <div class="icon w-[1.5rem] h-[1.5rem] duration-300">
                          <svg
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.4"
                              d="M19.1197 9.11986C18.7297 9.11986 18.4197 9.42986 18.4197 9.81986V11.3999C18.4197 14.9399 15.5397 17.8199 11.9997 17.8199C8.45969 17.8199 5.57969 14.9399 5.57969 11.3999V9.80986C5.57969 9.41986 5.26969 9.10986 4.87969 9.10986C4.48969 9.10986 4.17969 9.41986 4.17969 9.80986V11.3899C4.17969 15.4599 7.30969 18.8099 11.2997 19.1699V21.2999C11.2997 21.6899 11.6097 21.9999 11.9997 21.9999C12.3897 21.9999 12.6997 21.6899 12.6997 21.2999V19.1699C16.6797 18.8199 19.8197 15.4599 19.8197 11.3899V9.80986C19.8097 9.42986 19.4997 9.11986 19.1197 9.11986Z"
                            />
                            <path d="M12.0001 2C9.56008 2 7.58008 3.98 7.58008 6.42V11.54C7.58008 13.98 9.56008 15.96 12.0001 15.96C14.4401 15.96 16.4201 13.98 16.4201 11.54V6.42C16.4201 3.98 14.4401 2 12.0001 2ZM13.3101 8.95C13.2401 9.21 13.0101 9.38 12.7501 9.38C12.7001 9.38 12.6501 9.37 12.6001 9.36C12.2101 9.25 11.8001 9.25 11.4101 9.36C11.0901 9.45 10.7801 9.26 10.7001 8.95C10.6101 8.64 10.8001 8.32 11.1101 8.24C11.7001 8.08 12.3201 8.08 12.9101 8.24C13.2101 8.32 13.3901 8.64 13.3101 8.95ZM13.8401 7.01C13.7501 7.25 13.5301 7.39 13.2901 7.39C13.2201 7.39 13.1601 7.38 13.0901 7.36C12.3901 7.1 11.6101 7.1 10.9101 7.36C10.6101 7.47 10.2701 7.31 10.1601 7.01C10.0501 6.71 10.2101 6.37 10.5101 6.27C11.4701 5.92 12.5301 5.92 13.4901 6.27C13.7901 6.38 13.9501 6.71 13.8401 7.01Z" />
                          </svg>
                        </div>
                      </div>
                      <span class="closed-hide duration-300">Podcasts</span>
                    </a>
                  </li>
                </ul>
              </nav>
              <div class="closed-hide mt-[1.5rem] text-xs">
                <div class="flex items-center justify-between">
                  <h6 class="uppercase text-[11px] text-alt tracking-wider ml-[0.5rem]">
                    Playlists
                  </h6>
                  <div class="icon mr-[0.5rem] cursor-pointer duration-300 hover:text-opacity-80 text-white">
                    <svg
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 12H18"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 18V6"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <ul class="space-y-[0.25rem] mt-[1rem]">
                  <li class="flex items-center justify-between">
                    <a
                      href="#"
                      class="inline-flex items-center h-[2.5rem] space-x-[1.25rem] hover:text-white"
                    >
                      <div class="w-[2.5rem] flex justify-center">
                        <div class="icon w-[1.2rem] h-[1.2rem] duration-300">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              stroke="currentColor"
                              d="M 1.956 8.079 L 13.852 8.079"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              opacity="0.3"
                              stroke="currentColor"
                              d="M 2.044 13.333 L 9.273 13.333"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              opacity="0.6"
                              d="M 22.099 8.665 L 18.696 7.534 C 17.987 7.295 17.271 7.38 16.748 7.765 C 16.217 8.15 15.916 8.796 15.916 9.543 L 15.916 12.446 L 21.214 14.209 C 21.475 14.301 21.745 14.34 21.999 14.34 C 22.43 14.34 22.83 14.217 23.162 13.978 C 23.693 13.593 23.993 12.946 23.993 12.199 L 23.993 11.291 C 23.993 10.19 23.146 9.012 22.099 8.665 Z"
                              fill="currentColor"
                            />
                            <path
                              opacity="0.6"
                              d="M 17.064 12.823 L 17.064 20.315 C 17.064 22.332 15.424 23.972 13.406 23.972 C 11.389 23.972 9.749 22.332 9.749 20.315 C 9.749 18.297 11.389 16.657 13.406 16.657 C 14.376 16.657 15.254 17.042 15.909 17.658 L 15.909 12.438 L 17.064 12.823 Z"
                              fill="currentColor"
                            />
                            <path
                              opacity="0.3"
                              stroke="currentColor"
                              d="M 2 2.989 L 13.896 2.989"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                      <span class="duration-300">Top Hit 2021 -USA</span>
                    </a>
                    <div class="icon mr-[0.5rem] h-[1rem] w-[1rem] cursor-pointer duration-300 hover:text-white">
                      <svg
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M18.85 9.14001L18.2 19.21C18.09 20.78 18 22 15.21 22H8.79002C6.00002 22 5.91002 20.78 5.80002 19.21L5.15002 9.14001"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10.33 16.5H13.66"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.5 12.5H14.5"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </li>
                  <li class="flex items-center justify-between">
                    <a
                      href="#"
                      class="inline-flex items-center h-[2.5rem] space-x-[1.25rem] hover:text-white"
                    >
                      <div class="w-[2.5rem] flex justify-center">
                        <div class="icon w-[1.2rem] h-[1.2rem] duration-300">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              stroke="currentColor"
                              d="M 1.956 8.079 L 13.852 8.079"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              opacity="0.3"
                              stroke="currentColor"
                              d="M 2.044 13.333 L 9.273 13.333"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              opacity="0.6"
                              d="M 22.099 8.665 L 18.696 7.534 C 17.987 7.295 17.271 7.38 16.748 7.765 C 16.217 8.15 15.916 8.796 15.916 9.543 L 15.916 12.446 L 21.214 14.209 C 21.475 14.301 21.745 14.34 21.999 14.34 C 22.43 14.34 22.83 14.217 23.162 13.978 C 23.693 13.593 23.993 12.946 23.993 12.199 L 23.993 11.291 C 23.993 10.19 23.146 9.012 22.099 8.665 Z"
                              fill="currentColor"
                            />
                            <path
                              opacity="0.6"
                              d="M 17.064 12.823 L 17.064 20.315 C 17.064 22.332 15.424 23.972 13.406 23.972 C 11.389 23.972 9.749 22.332 9.749 20.315 C 9.749 18.297 11.389 16.657 13.406 16.657 C 14.376 16.657 15.254 17.042 15.909 17.658 L 15.909 12.438 L 17.064 12.823 Z"
                              fill="currentColor"
                            />
                            <path
                              opacity="0.3"
                              stroke="currentColor"
                              d="M 2 2.989 L 13.896 2.989"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                      <span class="duration-300">Dance</span>
                    </a>
                    <div class="icon mr-[0.5rem] h-[1rem] w-[1rem] cursor-pointer duration-300 hover:text-white">
                      <svg
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M18.85 9.14001L18.2 19.21C18.09 20.78 18 22 15.21 22H8.79002C6.00002 22 5.91002 20.78 5.80002 19.21L5.15002 9.14001"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10.33 16.5H13.66"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.5 12.5H14.5"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </li>
                  <li class="flex items-center justify-between">
                    <a
                      href="#"
                      class="inline-flex items-center h-[2.5rem] space-x-[1.25rem] hover:text-white"
                    >
                      <div class="w-[2.5rem] flex justify-center">
                        <div class="icon w-[1.2rem] h-[1.2rem] duration-300">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              stroke="currentColor"
                              d="M 1.956 8.079 L 13.852 8.079"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              opacity="0.3"
                              stroke="currentColor"
                              d="M 2.044 13.333 L 9.273 13.333"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              opacity="0.6"
                              d="M 22.099 8.665 L 18.696 7.534 C 17.987 7.295 17.271 7.38 16.748 7.765 C 16.217 8.15 15.916 8.796 15.916 9.543 L 15.916 12.446 L 21.214 14.209 C 21.475 14.301 21.745 14.34 21.999 14.34 C 22.43 14.34 22.83 14.217 23.162 13.978 C 23.693 13.593 23.993 12.946 23.993 12.199 L 23.993 11.291 C 23.993 10.19 23.146 9.012 22.099 8.665 Z"
                              fill="currentColor"
                            />
                            <path
                              opacity="0.6"
                              d="M 17.064 12.823 L 17.064 20.315 C 17.064 22.332 15.424 23.972 13.406 23.972 C 11.389 23.972 9.749 22.332 9.749 20.315 C 9.749 18.297 11.389 16.657 13.406 16.657 C 14.376 16.657 15.254 17.042 15.909 17.658 L 15.909 12.438 L 17.064 12.823 Z"
                              fill="currentColor"
                            />
                            <path
                              opacity="0.3"
                              stroke="currentColor"
                              d="M 2 2.989 L 13.896 2.989"
                              stroke-width="1.5"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                      <span class="duration-300">Discover Weekly 2001</span>
                    </a>
                    <div class="icon mr-[0.5rem] h-[1rem] w-[1rem] cursor-pointer duration-300 hover:text-white">
                      <svg
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M18.85 9.14001L18.2 19.21C18.09 20.78 18 22 15.21 22H8.79002C6.00002 22 5.91002 20.78 5.80002 19.21L5.15002 9.14001"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10.33 16.5H13.66"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.5 12.5H14.5"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="closed-hide absolute bottom-0 left-0 h-[8.5rem] w-full">
            <div class="mx-[1.25rem] px-[0.25rem] py-[1.25rem] border-t border-alt border-opacity-40 flex flex-col justify-between h-full">
              <div class="flex items-center space-x-[0.5rem]">
                <img
                  class="cursor-pointer h-[3rem]"
                  src="https://i.imgur.com/aYFRaIV.png"
                  alt=""
                />
                <div class="flex flex-col font-light">
                  <span class="text-sm text-white">Take on Me</span>
                  <span class="text-xs text-alt2">A-ha</span>
                </div>
              </div>
              <div class="flex items-center">
                <div class="icon duration-300 hover:text-white cursor-pointer">
                  <svg
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 10V14C2 16 3 17 5 17H6.43C6.8 17 7.17 17.11 7.49 17.3L10.41 19.13C12.93 20.71 15 19.56 15 16.59V7.41003C15 4.43003 12.93 3.29003 10.41 4.87003L7.49 6.70003C7.17 6.89003 6.8 7.00003 6.43 7.00003H5C3 7.00003 2 8.00003 2 10Z"
                      stroke-width="1.5"
                    />
                    <path
                      d="M18 8C19.78 10.37 19.78 13.63 18 16"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19.83 5.5C22.72 9.35 22.72 14.65 19.83 18.5"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div class="cursor-pointer mx-[0.75rem] bg-black duration-300 hover:bg-opacity-50 bg-opacity-40 flex-1 h-[5px] rounded-full relative">
                  <span class="bg-primary absolute left-0 top-0 w-1/3 h-[5px] rounded-l-md"></span>
                  <span class="bg-white border-[2px] border-border box-content rounded-lg h-[15px] w-[5px] absolute top-[-7px] left-1/3"></span>
                </div>
                <div class="space-x-[0.75rem] flex">
                  <div class="icon duration-300 hover:text-white cursor-pointer">
                    <svg
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M 2.087 2.943 L 22.087 2.943"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M 2.087 8.943 L 11.087 8.943"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M 2.087 14.943 L 8.087 14.943"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M 2.087 20.943 L 6.087 20.943"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M 12.853 17.419 L 12.853 15.112 C 12.853 12.246 14.883 11.073 17.366 12.506 L 19.369 13.659 L 21.372 14.814 C 23.855 16.246 23.855 18.594 21.372 20.026 L 19.369 21.18 L 17.366 22.335 C 14.883 23.768 12.853 22.593 12.853 19.728 L 12.853 17.419 Z"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div class="icon duration-300 hover:text-white cursor-pointer">
                    <svg
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 16.95H6.21C2.84 16.95 2 16.11 2 12.74V6.74003C2 3.37003 2.84 2.53003 6.21 2.53003H16.74C20.11 2.53003 20.95 3.37003 20.95 6.74003"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10 21.4699V16.95"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M2 12.95H10"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.73999 21.47H9.99999"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M22 12.8V18.51C22 20.88 21.41 21.47 19.04 21.47H15.49C13.12 21.47 12.53 20.88 12.53 18.51V12.8C12.53 10.43 13.12 9.83997 15.49 9.83997H19.04C21.41 9.83997 22 10.43 22 12.8Z"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17.2445 18.25H17.2535"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <main class="h-screen flex-1 flex flex-col bg-black bg-opacity-50 backdrop-blur-lg ">
          <div class="content flex-1">
            <div class="font-light flex flex-shrink-0 relative flex-col w-full h-[18rem]">
              <div
                class="w-full h-[18rem] bg-cover"
                style={{
                  backgroundimage: "url(https://i.imgur.com/jbjDNHM.jpeg)",
                  backgroundposition: "0 30%",
                }}
              ></div>
              <div class="flex text-alt2 absolute top-0 left-0 w-full h-[14rem] bg-black bg-opacity-50 p-[1.5rem]">
                <div>
                  <div class="h-[2.5rem] flex breadcrumb">
                    <a href="#" class="text-hover">
                      Home
                    </a>
                    <a href="#" class="text-alt4 text-hover">
                      Popular Artists
                    </a>
                  </div>
                  <div class="mt-[1.5rem] h-[1.5rem] flex items-center uppercase text-alt4 text-sm font-medium tracking-wide">
                    Artist
                  </div>
                  <div class="h-[4rem] flex items-center space-x-[0.5rem]">
                    <h1 class="text-[3rem] text-white p-0 m-0 font-medium">
                      A-ha
                    </h1>
                    <div class="icon mt-[1rem] scale-110">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <rect
                          id="svg_2"
                          height="256.46268"
                          width="256"
                          y="128"
                          x="128"
                          fill="#ffffff"
                        />
                        <path
                          fill="#00a1f1"
                          d="M512,268c0,17.9-4.3,34.5-12.9,49.7c-8.6,15.2-20.1,27.1-34.6,35.4c0.4,2.7,0.6,6.9,0.6,12.6
                  c0,27.1-9.1,50.1-27.1,69.1c-18.1,19.1-39.9,28.6-65.4,28.6c-11.4,0-22.3-2.1-32.6-6.3c-8,16.4-19.5,29.6-34.6,39.7
                  C290.4,507,273.9,512,256,512c-18.3,0-34.9-4.9-49.7-14.9c-14.9-9.9-26.3-23.2-34.3-40c-10.3,4.2-21.1,6.3-32.6,6.3
                  c-25.5,0-47.4-9.5-65.7-28.6c-18.3-19-27.4-42.1-27.4-69.1c0-3,0.4-7.2,1.1-12.6c-14.5-8.4-26-20.2-34.6-35.4
                  C4.3,302.5,0,285.9,0,268c0-19,4.8-36.5,14.3-52.3c9.5-15.8,22.3-27.5,38.3-35.1c-4.2-11.4-6.3-22.9-6.3-34.3
                  c0-27,9.1-50.1,27.4-69.1c18.3-19,40.2-28.6,65.7-28.6c11.4,0,22.3,2.1,32.6,6.3c8-16.4,19.5-29.6,34.6-39.7
                  C221.6,5.1,238.1,0,256,0c17.9,0,34.4,5.1,49.4,15.1c15,10.1,26.6,23.3,34.6,39.7c10.3-4.2,21.1-6.3,32.6-6.3
                  c25.5,0,47.3,9.5,65.4,28.6c18.1,19.1,27.1,42.1,27.1,69.1c0,12.6-1.9,24-5.7,34.3c16,7.6,28.8,19.3,38.3,35.1
                  C507.2,231.5,512,249,512,268z M245.1,345.1l105.7-158.3c2.7-4.2,3.5-8.8,2.6-13.7c-1-4.9-3.5-8.8-7.7-11.4
                  c-4.2-2.7-8.8-3.6-13.7-2.9c-5,0.8-9,3.2-12,7.4l-93.1,140L184,263.4c-3.8-3.8-8.2-5.6-13.1-5.4c-5,0.2-9.3,2-13.1,5.4
                  c-3.4,3.4-5.1,7.7-5.1,12.9c0,5.1,1.7,9.4,5.1,12.9l58.9,58.9l2.9,2.3c3.4,2.3,6.9,3.4,10.3,3.4
                  C236.6,353.7,241.7,350.9,245.1,345.1z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="h-[1.5rem] flex items-center space-x-[0.5rem]">
                    <div class="icon self-start">
                      <svg
                        stroke="#fff"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.46005 18.4898V15.5698C5.46005 14.5998 6.22005 13.7298 7.30005 13.7298C8.27005 13.7298 9.14005 14.4898 9.14005 15.5698V18.3798C9.14005 20.3298 7.52005 21.9498 5.57005 21.9498C3.62005 21.9498 2.00005 20.3198 2.00005 18.3798V12.2198C1.89005 6.5998 6.33005 2.0498 11.95 2.0498C17.57 2.0498 22 6.5998 22 12.1098V18.2698C22 20.2198 20.38 21.8398 18.43 21.8398C16.48 21.8398 14.86 20.2198 14.86 18.2698V15.4598C14.86 14.4898 15.62 13.6198 16.7 13.6198C17.67 13.6198 18.54 14.3798 18.54 15.4598V18.4898"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <span class="text-white">11,184,811</span>
                    <span class="hidden sm:inline text-alt4 text-sm">
                      Monthly Listeners
                    </span>
                  </div>
                </div>
                <div class="ml-auto flex flex-col items-end">
                  <div class="flex items-center space-x-[1rem]">
                    <a
                      href="#"
                      class="duration-300 hover:bg-black hover:bg-opacity-20 h-[2rem] w-[2rem] rounded-full flex justify-center items-center space-x-[0.2rem]"
                    >
                      <span class="bg-white rounded-full w-[0.3rem] h-[0.3rem]"></span>
                      <span class="bg-white rounded-full w-[0.3rem] h-[0.3rem]"></span>
                      <span class="bg-white rounded-full w-[0.3rem] h-[0.3rem]"></span>
                    </a>
                    <div
                      onclick="toggleSidebar()"
                      class="icon w-[2rem] h-[2rem] lg:hidden"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        stroke="#fff"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 7H21"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          opacity="0.6"
                          d="M3 12H21"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                        <path
                          d="M3 17H21"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="mt-auto h-[3rem] flex space-x-[1rem]">
                    <div class="hover:bg-opacity-90 duration-300 cursor-pointer bg-primary bg-opacity-80 backdrop-blur-md h-full rounded-full text-white px-[1.5rem] md:px-[2rem] lg:px-[2.5rem] uppercase font-medium text-sm md:text-base lg:text-lg flex items-center justify-center">
                      Play
                    </div>
                    <div class="hidden sm:flex hover:bg-opacity-20 duration-300 cursor-pointer bg-black bg-opacity-10 backdrop-blur-lg h-full rounded-full text-white pl-[0.75rem] pr-[1.5rem] border-2 border-[#737373] items-center justify-center">
                      <div class="icon w-[1.75rem] h-[1.75rem]">
                        <svg
                          viewBox="0 0 24 24"
                          fill="#fff"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10.5795 15.5801C10.3795 15.5801 10.1895 15.5001 10.0495 15.3601L7.21945 12.5301C6.92945 12.2401 6.92945 11.7601 7.21945 11.4701C7.50945 11.1801 7.98945 11.1801 8.27945 11.4701L10.5795 13.7701L15.7195 8.6301C16.0095 8.3401 16.4895 8.3401 16.7795 8.6301C17.0695 8.9201 17.0695 9.4001 16.7795 9.6901L11.1095 15.3601C10.9695 15.5001 10.7795 15.5801 10.5795 15.5801Z" />
                        </svg>
                      </div>
                      <span class="text-sm">Following</span>
                    </div>
                  </div>
                </div>
              </div>
              <header class="font-light absolute bottom-0 w-full h-[4rem] flex items-center justify-between bg-[#2c2c2c] bg-opacity-90">
                <nav class="h-full z-30">
                  <ul class="text-sm sm:text-base flex h-full text-alt space-x-[1.5rem] sm:space-x-[2rem] pl-[1.5rem]">
                    <li class="!font-medium !text-white text-base sm:text-lg relative h-full">
                      <a href="#" class="text-hover h-full flex items-center">
                        Popular
                      </a>
                    </li>
                    <li class="h-full">
                      <a href="#" class="text-hover h-full flex items-center">
                        Albumes
                      </a>
                    </li>
                    <li class="h-full">
                      <a href="#" class="text-hover h-full flex items-center">
                        Songs
                      </a>
                    </li>
                    <li class="h-full">
                      <a href="#" class="text-hover h-full flex items-center">
                        Fans also like
                      </a>
                    </li>
                    <li class="h-full">
                      <a href="#" class="text-hover h-full flex items-center">
                        About
                      </a>
                    </li>
                  </ul>
                </nav>
                <div class="hidden md:flex z-30 pr-[2rem] space-x-[0.25rem] text-sm items-center ">
                  <div class="icon">
                    <svg
                      stroke="#fff"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.16055 10.87C9.06055 10.86 8.94055 10.86 8.83055 10.87C6.45055 10.79 4.56055 8.84 4.56055 6.44C4.56055 3.99 6.54055 2 9.00055 2C11.4505 2 13.4405 3.99 13.4405 6.44C13.4305 8.84 11.5405 10.79 9.16055 10.87Z"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        opacity="0.4"
                        d="M16.4093 4C18.3493 4 19.9093 5.57 19.9093 7.5C19.9093 9.39 18.4093 10.93 16.5393 11C16.4593 10.99 16.3693 10.99 16.2793 11"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.1607 14.56C1.7407 16.18 1.7407 18.82 4.1607 20.43C6.9107 22.27 11.4207 22.27 14.1707 20.43C16.5907 18.81 16.5907 16.17 14.1707 14.56C11.4307 12.73 6.9207 12.73 4.1607 14.56Z"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        opacity="0.4"
                        d="M18.3398 20C19.0598 19.85 19.7398 19.56 20.2998 19.13C21.8598 17.96 21.8598 16.03 20.2998 14.86C19.7498 14.44 19.0798 14.16 18.3698 14"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <span class="text-white font-normal">12.3M</span>
                  <span class="text-alt">Followers</span>
                </div>
                <div class="header-bg"></div>
                <span style={{ offsetleft: "1.5rem" }}></span>
              </header>
            </div>
            <div class="flex flex-col w-full flex-1 px-[1.25rem] py-[2rem] pr-0">
              <div class="flex space-x-[0.5rem]">
                <h3 class="text-white text-xl tracking-wider">The list</h3>
                <span class="text-xs text-alt mt-[0.6rem]">12 songs</span>
              </div>
              <table class="song-list table-fixed text-alt2 font-light text-[13px] mt-[1.25rem]">
                <tbody>
                  <tr class="currently-playing">
                    <td class="relative">
                      <span class="duration-300 absolute icon">#1</span>
                      <div
                        onclick="this.classList.toggle('paused')"
                        class="icon select-none music-actions relative"
                      >
                        <div class="absolute icon playing duration-300">
                          <svg
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.8"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M3 8.25V15.75"
                            />
                            <path
                              opacity="0.7"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M7.5 5.75V18.25"
                            />
                            <path
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M12 3.25V20.75"
                            />
                            <path
                              opacity="0.7"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M16.5 5.75V18.25"
                            />
                            <path
                              opacity="0.8"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M21 8.25V15.75"
                            />
                          </svg>
                        </div>

                        <div class="absolute icon pause duration-300 opacity-0 invisible cursor-pointer">
                          <svg
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.3 21H14.7C19.2 21 21 19.2 21 14.7V9.3C21 4.8 19.2 3 14.7 3H9.3C4.8 3 3 4.8 3 9.3V14.7C3 19.2 4.8 21 9.3 21Z"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>

                        <div class="absolute icon play duration-300 opacity-0 invisible cursor-pointer">
                          <svg
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L14.05 6.1999L17.14 7.9799C20.97 10.1899 20.97 13.8099 17.14 16.0199L14.05 17.7999L10.96 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999Z"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </td>
                    <td class="w-[4rem]">
                      <a href="#" class="flex ml-[0.5rem] w-max">
                        <img
                          src="https://i.imgur.com/ApxXsDK.jpeg"
                          class="w-auto object-cover w-[2.5rem] h-[2.5rem] rounded-md"
                          alt=""
                        />
                      </a>
                    </td>
                    <td class="font-medium">
                      <div class="flex-col !items-start">
                        <a
                          href="#"
                          class="duration-300 flex w-max hover:translate-x-[0.25rem]"
                        >
                          Take On Me
                        </a>
                        <div class="text-alt text-xs sm:hidden flex">
                          <div class="icon mr-[0.5rem] w-[0.85rem] h-[0.85rem]">
                            <svg
                              stroke="#fff"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.4796 18.4898V15.5698C5.4796 14.5998 6.2396 13.7298 7.3196 13.7298C8.2896 13.7298 9.15959 14.4898 9.15959 15.5698V18.3798C9.15959 20.3298 7.53959 21.9498 5.58959 21.9498C3.63959 21.9498 2.01958 20.3198 2.01958 18.3798V12.2198C1.90958 6.59979 6.34959 2.0498 11.9696 2.0498C17.5896 2.0498 22.0196 6.5998 22.0196 12.1098V18.2698C22.0196 20.2198 20.3996 21.8398 18.4496 21.8398C16.4996 21.8398 14.8796 20.2198 14.8796 18.2698V15.4598C14.8796 14.4898 15.6396 13.6198 16.7196 13.6198C17.6896 13.6198 18.5596 14.3798 18.5596 15.4598V18.4898"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                opacity="0.4"
                                d="M15.53 9.11999H14.72C14.5 9.11999 14.29 9.25 14.19 9.44L13.44 10.94C13.33 11.16 13.02 11.16 12.91 10.94L11.07 7.27002C10.96 7.06002 10.66 7.05001 10.55 7.26001L9.70996 8.80999C9.60996 8.99999 9.40997 9.11999 9.18997 9.11999H8.45996"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                          <span>990,573,569</span>
                        </div>
                      </div>
                    </td>
                    <td class="hidden md:table-cell">Hunting High and Low</td>
                    <td class="hidden sm:table-cell">
                      <div>
                        <div class="icon mr-[0.5rem] w-[1.1rem] h-[1.1rem]">
                          <svg
                            stroke="#fff"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.4796 18.4898V15.5698C5.4796 14.5998 6.2396 13.7298 7.3196 13.7298C8.2896 13.7298 9.15959 14.4898 9.15959 15.5698V18.3798C9.15959 20.3298 7.53959 21.9498 5.58959 21.9498C3.63959 21.9498 2.01958 20.3198 2.01958 18.3798V12.2198C1.90958 6.59979 6.34959 2.0498 11.9696 2.0498C17.5896 2.0498 22.0196 6.5998 22.0196 12.1098V18.2698C22.0196 20.2198 20.3996 21.8398 18.4496 21.8398C16.4996 21.8398 14.8796 20.2198 14.8796 18.2698V15.4598C14.8796 14.4898 15.6396 13.6198 16.7196 13.6198C17.6896 13.6198 18.5596 14.3798 18.5596 15.4598V18.4898"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              opacity="0.4"
                              d="M15.53 9.11999H14.72C14.5 9.11999 14.29 9.25 14.19 9.44L13.44 10.94C13.33 11.16 13.02 11.16 12.91 10.94L11.07 7.27002C10.96 7.06002 10.66 7.05001 10.55 7.26001L9.70996 8.80999C9.60996 8.99999 9.40997 9.11999 9.18997 9.11999H8.45996"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <span>990,573,569</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <div class="icon mr-[0.5rem] w-[1.1rem] h-[1.1rem]">
                          <svg
                            stroke="#fff"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              opacity="0.4"
                              d="M15.7099 15.1798L12.6099 13.3298C12.0699 13.0098 11.6299 12.2398 11.6299 11.6098V7.50977"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <span>3:45</span>
                      </div>
                    </td>
                    <td class="hidden sm:table-cell">
                      <div class="duration-300 hover:text-primary icon cursor-pointer">
                        <svg
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </td>
                    <td>
                      <div class="mr-[0.5rem] cursor-pointer group h-[1.5rem] w-[1.5rem] flex justify-center items-center space-x-[0.15rem]">
                        <span class="duration-300 group-hover:bg-white bg-current rounded-full w-[0.25rem] h-[0.25rem]"></span>
                        <span class="duration-300 group-hover:bg-white bg-current rounded-full w-[0.25rem] h-[0.25rem]"></span>
                        <span class="duration-300 group-hover:bg-white bg-current rounded-full w-[0.25rem] h-[0.25rem]"></span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="relative">
                      <span class="duration-300 absolute icon">#2</span>
                      <div
                        onclick="/* this.classList.toggle('paused') */"
                        class="duration-300 icon paused select-none music-actions relative"
                      >
                        <div class="absolute icon playing duration-300">
                          <svg
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.8"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M3 8.25V15.75"
                            />
                            <path
                              opacity="0.7"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M7.5 5.75V18.25"
                            />
                            <path
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M12 3.25V20.75"
                            />
                            <path
                              opacity="0.7"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M16.5 5.75V18.25"
                            />
                            <path
                              opacity="0.8"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M21 8.25V15.75"
                            />
                          </svg>
                        </div>

                        <div class="absolute icon pause duration-300 opacity-0 invisible cursor-pointer">
                          <svg
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.3 21H14.7C19.2 21 21 19.2 21 14.7V9.3C21 4.8 19.2 3 14.7 3H9.3C4.8 3 3 4.8 3 9.3V14.7C3 19.2 4.8 21 9.3 21Z"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>

                        <div class="absolute icon play duration-300 opacity-0 invisible cursor-pointer">
                          <svg
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L14.05 6.1999L17.14 7.9799C20.97 10.1899 20.97 13.8099 17.14 16.0199L14.05 17.7999L10.96 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999Z"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </td>
                    <td class="w-[4rem]">
                      <img
                        src="https://i.imgur.com/jbjDNHM.jpeg"
                        class="ml-[0.5rem] object-cover w-[2.5rem] h-[2.5rem] rounded-md"
                        alt=""
                      />
                    </td>
                    <td class="font-medium">
                      <div class="flex-col !items-start">
                        <a
                          href="#"
                          class="duration-300 flex w-max hover:translate-x-[0.25rem]"
                        >
                          Hunting High and Low
                        </a>
                        <div class="text-alt text-xs sm:hidden flex">
                          <div class="icon mr-[0.5rem] w-[0.85rem] h-[0.85rem]">
                            <svg
                              stroke="#fff"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.4796 18.4898V15.5698C5.4796 14.5998 6.2396 13.7298 7.3196 13.7298C8.2896 13.7298 9.15959 14.4898 9.15959 15.5698V18.3798C9.15959 20.3298 7.53959 21.9498 5.58959 21.9498C3.63959 21.9498 2.01958 20.3198 2.01958 18.3798V12.2198C1.90958 6.59979 6.34959 2.0498 11.9696 2.0498C17.5896 2.0498 22.0196 6.5998 22.0196 12.1098V18.2698C22.0196 20.2198 20.3996 21.8398 18.4496 21.8398C16.4996 21.8398 14.8796 20.2198 14.8796 18.2698V15.4598C14.8796 14.4898 15.6396 13.6198 16.7196 13.6198C17.6896 13.6198 18.5596 14.3798 18.5596 15.4598V18.4898"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                opacity="0.4"
                                d="M15.53 9.11999H14.72C14.5 9.11999 14.29 9.25 14.19 9.44L13.44 10.94C13.33 11.16 13.02 11.16 12.91 10.94L11.07 7.27002C10.96 7.06002 10.66 7.05001 10.55 7.26001L9.70996 8.80999C9.60996 8.99999 9.40997 9.11999 9.18997 9.11999H8.45996"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                          <span>48,827,789</span>
                        </div>
                      </div>
                    </td>
                    <td class="hidden md:table-cell">Hunting High and Low</td>
                    <td class="hidden sm:table-cell">
                      <div>
                        <div class="icon mr-[0.5rem] w-[1.1rem] h-[1.1rem]">
                          <svg
                            stroke="#fff"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.4796 18.4898V15.5698C5.4796 14.5998 6.2396 13.7298 7.3196 13.7298C8.2896 13.7298 9.15959 14.4898 9.15959 15.5698V18.3798C9.15959 20.3298 7.53959 21.9498 5.58959 21.9498C3.63959 21.9498 2.01958 20.3198 2.01958 18.3798V12.2198C1.90958 6.59979 6.34959 2.0498 11.9696 2.0498C17.5896 2.0498 22.0196 6.5998 22.0196 12.1098V18.2698C22.0196 20.2198 20.3996 21.8398 18.4496 21.8398C16.4996 21.8398 14.8796 20.2198 14.8796 18.2698V15.4598C14.8796 14.4898 15.6396 13.6198 16.7196 13.6198C17.6896 13.6198 18.5596 14.3798 18.5596 15.4598V18.4898"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              opacity="0.4"
                              d="M15.53 9.11999H14.72C14.5 9.11999 14.29 9.25 14.19 9.44L13.44 10.94C13.33 11.16 13.02 11.16 12.91 10.94L11.07 7.27002C10.96 7.06002 10.66 7.05001 10.55 7.26001L9.70996 8.80999C9.60996 8.99999 9.40997 9.11999 9.18997 9.11999H8.45996"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <span>48,827,789</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <div class="icon mr-[0.5rem] w-[1.1rem] h-[1.1rem]">
                          <svg
                            stroke="#fff"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              opacity="0.4"
                              d="M15.7099 15.1798L12.6099 13.3298C12.0699 13.0098 11.6299 12.2398 11.6299 11.6098V7.50977"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <span>5:02</span>
                      </div>
                    </td>
                    <td class="hidden sm:table-cell">
                      <div class="duration-300 hover:text-primary icon cursor-pointer">
                        <svg
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </td>
                    <td>
                      <div class="mr-[0.5rem] cursor-pointer group h-[1.5rem] w-[1.5rem] flex justify-center items-center space-x-[0.15rem]">
                        <span class="duration-300 group-hover:bg-white bg-current rounded-full w-[0.25rem] h-[0.25rem]"></span>
                        <span class="duration-300 group-hover:bg-white bg-current rounded-full w-[0.25rem] h-[0.25rem]"></span>
                        <span class="duration-300 group-hover:bg-white bg-current rounded-full w-[0.25rem] h-[0.25rem]"></span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="relative">
                      <span class="duration-300 absolute icon">#3</span>
                      <div
                        onclick="/* this.classList.toggle('paused') */"
                        class="duration-300 icon paused select-none music-actions relative"
                      >
                        <div class="absolute icon playing duration-300">
                          <svg
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.8"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M3 8.25V15.75"
                            />
                            <path
                              opacity="0.7"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M7.5 5.75V18.25"
                            />
                            <path
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M12 3.25V20.75"
                            />
                            <path
                              opacity="0.7"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M16.5 5.75V18.25"
                            />
                            <path
                              opacity="0.8"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M21 8.25V15.75"
                            />
                          </svg>
                        </div>

                        <div class="absolute icon pause duration-300 opacity-0 invisible cursor-pointer">
                          <svg
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.3 21H14.7C19.2 21 21 19.2 21 14.7V9.3C21 4.8 19.2 3 14.7 3H9.3C4.8 3 3 4.8 3 9.3V14.7C3 19.2 4.8 21 9.3 21Z"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>

                        <div class="absolute icon play duration-300 opacity-0 invisible cursor-pointer">
                          <svg
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L14.05 6.1999L17.14 7.9799C20.97 10.1899 20.97 13.8099 17.14 16.0199L14.05 17.7999L10.96 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999Z"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </td>
                    <td class="w-[4rem]">
                      <img
                        src="https://i.imgur.com/rriZ0J3.jpeg"
                        class="ml-[0.5rem] object-cover w-[2.5rem] h-[2.5rem] rounded-md"
                        alt=""
                      />
                    </td>
                    <td class="font-medium">
                      <div class="flex-col !items-start">
                        <a
                          href="#"
                          class="duration-300 flex w-max hover:translate-x-[0.25rem]"
                        >
                          The Sun Always Shines on T.V
                        </a>
                        <div class="text-alt text-xs sm:hidden flex">
                          <div class="icon mr-[0.5rem] w-[0.85rem] h-[0.85rem]">
                            <svg
                              stroke="#fff"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.4796 18.4898V15.5698C5.4796 14.5998 6.2396 13.7298 7.3196 13.7298C8.2896 13.7298 9.15959 14.4898 9.15959 15.5698V18.3798C9.15959 20.3298 7.53959 21.9498 5.58959 21.9498C3.63959 21.9498 2.01958 20.3198 2.01958 18.3798V12.2198C1.90958 6.59979 6.34959 2.0498 11.9696 2.0498C17.5896 2.0498 22.0196 6.5998 22.0196 12.1098V18.2698C22.0196 20.2198 20.3996 21.8398 18.4496 21.8398C16.4996 21.8398 14.8796 20.2198 14.8796 18.2698V15.4598C14.8796 14.4898 15.6396 13.6198 16.7196 13.6198C17.6896 13.6198 18.5596 14.3798 18.5596 15.4598V18.4898"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                opacity="0.4"
                                d="M15.53 9.11999H14.72C14.5 9.11999 14.29 9.25 14.19 9.44L13.44 10.94C13.33 11.16 13.02 11.16 12.91 10.94L11.07 7.27002C10.96 7.06002 10.66 7.05001 10.55 7.26001L9.70996 8.80999C9.60996 8.99999 9.40997 9.11999 9.18997 9.11999H8.45996"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                          <span>30,421,392</span>
                        </div>
                      </div>
                    </td>
                    <td class="hidden md:table-cell">Hunting High and Low</td>
                    <td class="hidden sm:table-cell">
                      <div>
                        <div class="icon mr-[0.5rem] w-[1.1rem] h-[1.1rem]">
                          <svg
                            stroke="#fff"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.4796 18.4898V15.5698C5.4796 14.5998 6.2396 13.7298 7.3196 13.7298C8.2896 13.7298 9.15959 14.4898 9.15959 15.5698V18.3798C9.15959 20.3298 7.53959 21.9498 5.58959 21.9498C3.63959 21.9498 2.01958 20.3198 2.01958 18.3798V12.2198C1.90958 6.59979 6.34959 2.0498 11.9696 2.0498C17.5896 2.0498 22.0196 6.5998 22.0196 12.1098V18.2698C22.0196 20.2198 20.3996 21.8398 18.4496 21.8398C16.4996 21.8398 14.8796 20.2198 14.8796 18.2698V15.4598C14.8796 14.4898 15.6396 13.6198 16.7196 13.6198C17.6896 13.6198 18.5596 14.3798 18.5596 15.4598V18.4898"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              opacity="0.4"
                              d="M15.53 9.11999H14.72C14.5 9.11999 14.29 9.25 14.19 9.44L13.44 10.94C13.33 11.16 13.02 11.16 12.91 10.94L11.07 7.27002C10.96 7.06002 10.66 7.05001 10.55 7.26001L9.70996 8.80999C9.60996 8.99999 9.40997 9.11999 9.18997 9.11999H8.45996"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <span>30,421,392</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <div class="icon mr-[0.5rem] w-[1.1rem] h-[1.1rem]">
                          <svg
                            stroke="#fff"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              opacity="0.4"
                              d="M15.7099 15.1798L12.6099 13.3298C12.0699 13.0098 11.6299 12.2398 11.6299 11.6098V7.50977"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <span>3:04</span>
                      </div>
                    </td>
                    <td class="hidden sm:table-cell">
                      <div class="duration-300 hover:text-primary icon cursor-pointer">
                        <svg
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </td>
                    <td>
                      <div class="mr-[0.5rem] cursor-pointer group h-[1.5rem] w-[1.5rem] flex justify-center items-center space-x-[0.15rem]">
                        <span class="duration-300 group-hover:bg-white bg-current rounded-full w-[0.25rem] h-[0.25rem]"></span>
                        <span class="duration-300 group-hover:bg-white bg-current rounded-full w-[0.25rem] h-[0.25rem]"></span>
                        <span class="duration-300 group-hover:bg-white bg-current rounded-full w-[0.25rem] h-[0.25rem]"></span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="relative">
                      <span class="duration-300 absolute icon">#4</span>
                      <div
                        onclick="/* this.classList.toggle('paused') */"
                        class="duration-300 icon paused select-none music-actions relative"
                      >
                        <div class="absolute icon playing duration-300">
                          <svg
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.8"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M3 8.25V15.75"
                            />
                            <path
                              opacity="0.7"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M7.5 5.75V18.25"
                            />
                            <path
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M12 3.25V20.75"
                            />
                            <path
                              opacity="0.7"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M16.5 5.75V18.25"
                            />
                            <path
                              opacity="0.8"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M21 8.25V15.75"
                            />
                          </svg>
                        </div>

                        <div class="absolute icon pause duration-300 opacity-0 invisible cursor-pointer">
                          <svg
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.3 21H14.7C19.2 21 21 19.2 21 14.7V9.3C21 4.8 19.2 3 14.7 3H9.3C4.8 3 3 4.8 3 9.3V14.7C3 19.2 4.8 21 9.3 21Z"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>

                        <div class="absolute icon play duration-300 opacity-0 invisible cursor-pointer">
                          <svg
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L14.05 6.1999L17.14 7.9799C20.97 10.1899 20.97 13.8099 17.14 16.0199L14.05 17.7999L10.96 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999Z"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </td>
                    <td class="w-[4rem]">
                      <img
                        src="https://i.imgur.com/6xlEXsp.jpeg"
                        class="ml-[0.5rem] object-cover w-[2.5rem] h-[2.5rem] rounded-md"
                        alt=""
                      />
                    </td>
                    <td class="font-medium">
                      <div class="flex-col !items-start">
                        <a
                          href="#"
                          class="duration-300 flex w-max hover:translate-x-[0.25rem]"
                        >
                          Take on Me-2017 Acoustic
                        </a>
                        <div class="text-alt text-xs sm:hidden flex">
                          <div class="icon mr-[0.5rem] w-[0.85rem] h-[0.85rem]">
                            <svg
                              stroke="#fff"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.4796 18.4898V15.5698C5.4796 14.5998 6.2396 13.7298 7.3196 13.7298C8.2896 13.7298 9.15959 14.4898 9.15959 15.5698V18.3798C9.15959 20.3298 7.53959 21.9498 5.58959 21.9498C3.63959 21.9498 2.01958 20.3198 2.01958 18.3798V12.2198C1.90958 6.59979 6.34959 2.0498 11.9696 2.0498C17.5896 2.0498 22.0196 6.5998 22.0196 12.1098V18.2698C22.0196 20.2198 20.3996 21.8398 18.4496 21.8398C16.4996 21.8398 14.8796 20.2198 14.8796 18.2698V15.4598C14.8796 14.4898 15.6396 13.6198 16.7196 13.6198C17.6896 13.6198 18.5596 14.3798 18.5596 15.4598V18.4898"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                opacity="0.4"
                                d="M15.53 9.11999H14.72C14.5 9.11999 14.29 9.25 14.19 9.44L13.44 10.94C13.33 11.16 13.02 11.16 12.91 10.94L11.07 7.27002C10.96 7.06002 10.66 7.05001 10.55 7.26001L9.70996 8.80999C9.60996 8.99999 9.40997 9.11999 9.18997 9.11999H8.45996"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                          <span>48,465,490</span>
                        </div>
                      </div>
                    </td>
                    <td class="hidden md:table-cell">Hunting High and Low</td>
                    <td class="hidden sm:table-cell">
                      <div>
                        <div class="icon mr-[0.5rem] w-[1.1rem] h-[1.1rem]">
                          <svg
                            stroke="#fff"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.4796 18.4898V15.5698C5.4796 14.5998 6.2396 13.7298 7.3196 13.7298C8.2896 13.7298 9.15959 14.4898 9.15959 15.5698V18.3798C9.15959 20.3298 7.53959 21.9498 5.58959 21.9498C3.63959 21.9498 2.01958 20.3198 2.01958 18.3798V12.2198C1.90958 6.59979 6.34959 2.0498 11.9696 2.0498C17.5896 2.0498 22.0196 6.5998 22.0196 12.1098V18.2698C22.0196 20.2198 20.3996 21.8398 18.4496 21.8398C16.4996 21.8398 14.8796 20.2198 14.8796 18.2698V15.4598C14.8796 14.4898 15.6396 13.6198 16.7196 13.6198C17.6896 13.6198 18.5596 14.3798 18.5596 15.4598V18.4898"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              opacity="0.4"
                              d="M15.53 9.11999H14.72C14.5 9.11999 14.29 9.25 14.19 9.44L13.44 10.94C13.33 11.16 13.02 11.16 12.91 10.94L11.07 7.27002C10.96 7.06002 10.66 7.05001 10.55 7.26001L9.70996 8.80999C9.60996 8.99999 9.40997 9.11999 9.18997 9.11999H8.45996"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <span>48,465,490</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <div class="icon mr-[0.5rem] w-[1.1rem] h-[1.1rem]">
                          <svg
                            stroke="#fff"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              opacity="0.4"
                              d="M15.7099 15.1798L12.6099 13.3298C12.0699 13.0098 11.6299 12.2398 11.6299 11.6098V7.50977"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <span>3:48</span>
                      </div>
                    </td>
                    <td class="hidden sm:table-cell">
                      <div class="duration-300 text-primary hover:text-primary icon cursor-pointer">
                        <svg
                          viewBox="0 0 24 24"
                          stroke="transparent"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </td>
                    <td>
                      <div class="mr-[0.5rem] cursor-pointer group h-[1.5rem] w-[1.5rem] flex justify-center items-center space-x-[0.15rem]">
                        <span class="duration-300 group-hover:bg-white bg-current rounded-full w-[0.25rem] h-[0.25rem]"></span>
                        <span class="duration-300 group-hover:bg-white bg-current rounded-full w-[0.25rem] h-[0.25rem]"></span>
                        <span class="duration-300 group-hover:bg-white bg-current rounded-full w-[0.25rem] h-[0.25rem]"></span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="relative">
                      <span class="duration-300 absolute icon">#5</span>
                      <div
                        onclick="/* this.classList.toggle('paused') */"
                        class="duration-300 icon paused select-none music-actions relative"
                      >
                        <div class="absolute icon playing duration-300">
                          <svg
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.8"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M3 8.25V15.75"
                            />
                            <path
                              opacity="0.7"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M7.5 5.75V18.25"
                            />
                            <path
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M12 3.25V20.75"
                            />
                            <path
                              opacity="0.7"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M16.5 5.75V18.25"
                            />
                            <path
                              opacity="0.8"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M21 8.25V15.75"
                            />
                          </svg>
                        </div>

                        <div class="absolute icon pause duration-300 opacity-0 invisible cursor-pointer">
                          <svg
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.3 21H14.7C19.2 21 21 19.2 21 14.7V9.3C21 4.8 19.2 3 14.7 3H9.3C4.8 3 3 4.8 3 9.3V14.7C3 19.2 4.8 21 9.3 21Z"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>

                        <div class="absolute icon play duration-300 opacity-0 invisible cursor-pointer">
                          <svg
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4 11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L14.05 6.1999L17.14 7.9799C20.97 10.1899 20.97 13.8099 17.14 16.0199L14.05 17.7999L10.96 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999Z"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </td>
                    <td class="w-[4rem]">
                      <img
                        src="https://i.imgur.com/LXUVLbP.jpeg"
                        class="ml-[0.5rem] object-cover w-[2.5rem] h-[2.5rem] rounded-md"
                        alt=""
                      />
                    </td>
                    <td class="font-medium">
                      <div class="flex-col !items-start">
                        <a
                          href="#"
                          class="duration-300 flex w-max hover:translate-x-[0.25rem]"
                        >
                          Crying in the Rain
                        </a>
                        <div class="text-alt text-xs sm:hidden flex">
                          <div class="icon mr-[0.5rem] w-[0.85rem] h-[0.85rem]">
                            <svg
                              stroke="#fff"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.4796 18.4898V15.5698C5.4796 14.5998 6.2396 13.7298 7.3196 13.7298C8.2896 13.7298 9.15959 14.4898 9.15959 15.5698V18.3798C9.15959 20.3298 7.53959 21.9498 5.58959 21.9498C3.63959 21.9498 2.01958 20.3198 2.01958 18.3798V12.2198C1.90958 6.59979 6.34959 2.0498 11.9696 2.0498C17.5896 2.0498 22.0196 6.5998 22.0196 12.1098V18.2698C22.0196 20.2198 20.3996 21.8398 18.4496 21.8398C16.4996 21.8398 14.8796 20.2198 14.8796 18.2698V15.4598C14.8796 14.4898 15.6396 13.6198 16.7196 13.6198C17.6896 13.6198 18.5596 14.3798 18.5596 15.4598V18.4898"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                              <path
                                opacity="0.4"
                                d="M15.53 9.11999H14.72C14.5 9.11999 14.29 9.25 14.19 9.44L13.44 10.94C13.33 11.16 13.02 11.16 12.91 10.94L11.07 7.27002C10.96 7.06002 10.66 7.05001 10.55 7.26001L9.70996 8.80999C9.60996 8.99999 9.40997 9.11999 9.18997 9.11999H8.45996"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </div>
                          <span>32,683,935</span>
                        </div>
                      </div>
                    </td>
                    <td class="hidden md:table-cell">Hunting High and Low</td>
                    <td class="hidden sm:table-cell">
                      <div>
                        <div class="icon mr-[0.5rem] w-[1.1rem] h-[1.1rem]">
                          <svg
                            stroke="#fff"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.4796 18.4898V15.5698C5.4796 14.5998 6.2396 13.7298 7.3196 13.7298C8.2896 13.7298 9.15959 14.4898 9.15959 15.5698V18.3798C9.15959 20.3298 7.53959 21.9498 5.58959 21.9498C3.63959 21.9498 2.01958 20.3198 2.01958 18.3798V12.2198C1.90958 6.59979 6.34959 2.0498 11.9696 2.0498C17.5896 2.0498 22.0196 6.5998 22.0196 12.1098V18.2698C22.0196 20.2198 20.3996 21.8398 18.4496 21.8398C16.4996 21.8398 14.8796 20.2198 14.8796 18.2698V15.4598C14.8796 14.4898 15.6396 13.6198 16.7196 13.6198C17.6896 13.6198 18.5596 14.3798 18.5596 15.4598V18.4898"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              opacity="0.4"
                              d="M15.53 9.11999H14.72C14.5 9.11999 14.29 9.25 14.19 9.44L13.44 10.94C13.33 11.16 13.02 11.16 12.91 10.94L11.07 7.27002C10.96 7.06002 10.66 7.05001 10.55 7.26001L9.70996 8.80999C9.60996 8.99999 9.40997 9.11999 9.18997 9.11999H8.45996"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <span>32,683,935</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <div class="icon mr-[0.5rem] w-[1.1rem] h-[1.1rem]">
                          <svg
                            stroke="#fff"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              opacity="0.4"
                              d="M15.7099 15.1798L12.6099 13.3298C12.0699 13.0098 11.6299 12.2398 11.6299 11.6098V7.50977"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                        <span>4:20</span>
                      </div>
                    </td>
                    <td class="hidden sm:table-cell">
                      <div class="duration-300 hover:text-primary icon cursor-pointer">
                        <svg
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </td>
                    <td>
                      <div class="mr-[0.5rem] cursor-pointer group h-[1.5rem] w-[1.5rem] flex justify-center items-center space-x-[0.15rem]">
                        <span class="duration-300 group-hover:bg-white bg-current rounded-full w-[0.25rem] h-[0.25rem]"></span>
                        <span class="duration-300 group-hover:bg-white bg-current rounded-full w-[0.25rem] h-[0.25rem]"></span>
                        <span class="duration-300 group-hover:bg-white bg-current rounded-full w-[0.25rem] h-[0.25rem]"></span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="flexh-shrink-0 h-[8.5rem] flex items-center px-[1.25rem]">
            <a href="#" class="hidden sm:inline flex-shrink-0">
              <img
                src="https://i.imgur.com/ApxXsDK.jpeg"
                class="object-cover w-[6rem] h-[6rem] rounded-lg shadow-md"
                alt=""
              />
            </a>
            <div class="flex flex-col ml-[1.25rem] sm:ml-[3.75rem] mr-[1.25rem] flex-1 h-full py-[1.25rem] text-[11px] justify-between">
              <div class="flex justify-between text-alt">
                <div class="flex items-center space-x-[1rem]">
                  <div class="cursor-pointer duration-300 hover:text-primary icon w-[1.25rem] h-[1.25rem] sm:w-[1.5rem] sm:h-[1.5rem]">
                    <svg
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <div class="cursor-pointer duration-300 hover:text-white icon w-[1.25rem] h-[1.25rem] sm:w-[1.5rem] sm:h-[1.5rem]">
                    <svg
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.32031 11.6797L11.8803 14.2397L14.4403 11.6797"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11.8809 4V14.17"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        opacity="0.6"
                        d="M20 12.1802C20 16.6002 17 20.1802 12 20.1802C7 20.1802 4 16.6002 4 12.1802"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div class="flex items-center space-x-[0.75rem]">
                  <div class="cursor-pointer duration-300 hover:text-white icon w-[1.25rem] h-[1.25rem] sm:w-[1.5rem] w-[1.25rem] h-[1.25rem] sm:h-[1.5rem]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.7"
                        d="M20.2409 7.22005V16.7901C20.2409 18.7501 18.111 19.98 16.411 19L12.261 16.61L8.11094 14.21C6.41094 13.23 6.41094 10.78 8.11094 9.80004L12.261 7.40004L16.411 5.01006C18.111 4.03006 20.2409 5.25005 20.2409 7.22005Z"
                      />
                      <path d="M3.75977 18.9298C3.34977 18.9298 3.00977 18.5898 3.00977 18.1798V5.81982C3.00977 5.40982 3.34977 5.06982 3.75977 5.06982C4.16977 5.06982 4.50977 5.40982 4.50977 5.81982V18.1798C4.50977 18.5898 4.16977 18.9298 3.75977 18.9298Z" />
                    </svg>
                  </div>
                  <div class="cursor-pointer duration-300 hover:text-white icon w-[1.25rem] h-[1.25rem] sm:w-[1.5rem] w-[1.25rem] h-[1.25rem] sm:h-[1.5rem]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.5"
                        d="M22.0002 8.33983V15.6598C22.0002 17.1598 20.3703 18.0998 19.0703 17.3498L15.9002 15.5198L12.7303 13.6898L12.2402 13.4098V10.5898L12.7303 10.3098L15.9002 8.47984L19.0703 6.64983C20.3703 5.89983 22.0002 6.83983 22.0002 8.33983Z"
                      />
                      <path d="M12.2394 8.33983V15.6598C12.2394 17.1598 10.6095 18.0998 9.31946 17.3498L6.13947 15.5198L2.96945 13.6898C1.67945 12.9398 1.67945 11.0598 2.96945 10.3098L6.13947 8.47984L9.31946 6.64983C10.6095 5.89983 12.2394 6.83983 12.2394 8.33983Z" />
                    </svg>
                  </div>
                  <div class="duration-300 cursor-pointer w-[2.5rem] h-[2.5rem] sm:w-[3rem] sm:h-[3rem] flex items-center justify-center hover:opacity-100 opacity-90">
                    <img src="https://i.imgur.com/wDnkwVF.png" alt="" />
                  </div>
                  <div class="cursor-pointer duration-300 hover:text-white icon w-[1.25rem] h-[1.25rem] sm:w-[1.5rem] w-[1.25rem] h-[1.25rem] sm:h-[1.5rem]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.6"
                        d="M2 8.33983V15.6598C2 17.1598 3.62999 18.0998 4.92999 17.3498L8.10001 15.5198L11.27 13.6898L11.76 13.4098V10.5898L11.27 10.3098L8.10001 8.47984L4.92999 6.64983C3.62999 5.89983 2 6.83983 2 8.33983Z"
                      />
                      <path d="M11.7598 8.33983V15.6598C11.7598 17.1598 13.3897 18.0998 14.6797 17.3498L17.8597 15.5198L21.0298 13.6898C22.3198 12.9398 22.3198 11.0598 21.0298 10.3098L17.8597 8.47984L14.6797 6.64983C13.3897 5.89983 11.7598 6.83983 11.7598 8.33983Z" />
                    </svg>
                  </div>
                  <div class="cursor-pointer duration-300 hover:text-white icon w-[1.25rem] h-[1.25rem] sm:w-[1.5rem] w-[1.25rem] h-[1.25rem] sm:h-[1.5rem]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3.75977 7.22005V16.7901C3.75977 18.7501 5.88975 19.98 7.58975 19L11.7397 16.61L15.8898 14.21C17.5898 13.23 17.5898 10.78 15.8898 9.80004L11.7397 7.40004L7.58975 5.01006C5.88975 4.03006 3.75977 5.25005 3.75977 7.22005Z" />
                      <path
                        opacity="0.4"
                        d="M20.2402 18.9298C19.8302 18.9298 19.4902 18.5898 19.4902 18.1798V5.81982C19.4902 5.40982 19.8302 5.06982 20.2402 5.06982C20.6502 5.06982 20.9902 5.40982 20.9902 5.81982V18.1798C20.9902 18.5898 20.6602 18.9298 20.2402 18.9298Z"
                      />
                    </svg>
                  </div>
                </div>
                <div class="flex items-center space-x-[1rem]">
                  <div class="cursor-pointer duration-300 hover:text-white icon w-[1.25rem] h-[1.25rem] sm:w-[1.5rem] sm:h-[1.5rem]">
                    <svg
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 17.9818L5.54999 17.9919C6.45999 17.9919 7.31 17.5418 7.81 16.7918L14.2 7.21189C14.7 6.46189 15.55 6.00188 16.46 6.01188L21.01 6.0319"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        opacity="0.4"
                        d="M8.89001 8.62017L7.81 7.12017C7.3 6.41017 6.47999 5.99017 5.60999 6.00017L3 6.01018"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <g opacity="0.4">
                        <path
                          d="M19 19.9805L21 17.9805"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.9688 15.3789L14.1888 16.9489C14.6988 17.6089 15.4987 17.9989 16.3387 17.9989L21.0088 17.9789"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <path
                        d="M21 6.01953L19 4.01953"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div class="cursor-pointer duration-300 hover:text-white icon w-[1.25rem] h-[1.25rem] sm:w-[1.5rem] sm:h-[1.5rem]">
                    <svg
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.9983 3L16.4383 5.34003L8.48828 5.32001C4.91828 5.32001 1.98828 8.25003 1.98828 11.84C1.98828 13.63 2.71827 15.26 3.89827 16.44"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.9986 20.9986L7.55859 18.6586L15.5086 18.6786C19.0786 18.6786 22.0086 15.7486 22.0086 12.1586C22.0086 10.3686 21.2786 8.73859 20.0986 7.55859"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="flex items-center py-[0.25rem]">
                <span class="text-white">2:29</span>
                <div class="cursor-pointer mx-[1.25rem] bg-[#2c2c2c] duration-300 hover:bg-opacity-70 flex-1 h-[5px] rounded-full relative">
                  <span class="bg-white absolute left-0 top-0 w-2/3 h-[5px] rounded-full"></span>
                </div>
                <span class="text-alt">3:45</span>
              </div>
            </div>
          </div>
        </main>
        <aside class="hidden md:flex flex-col items-center space-y-[1.75rem] border-l border-border w-[5rem] flex-shrink-0 h-full py-[1.25rem] bg-black backdrop-blur-xl bg-opacity-50">
          <a
            href="#"
            class="duration-300 hover:opacity-70 flex flex-col items-center"
          >
            <div class="icon w-[1.75rem] h-[1.75rem]">
              <svg
                viewBox="0 0 24 24"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.7702 18.98H7.23024C6.81024 18.98 6.43024 18.71 6.29024 18.32L2.13024 6.67004C1.80024 5.74004 2.86024 4.95004 3.65024 5.52004L7.65024 8.38004C8.18024 8.76004 8.94024 8.53004 9.17024 7.92004L11.0602 2.88004C11.3802 2.01004 12.6102 2.01004 12.9302 2.88004L14.8202 7.92004C15.0502 8.54004 15.8002 8.76004 16.3402 8.38004L20.3402 5.52004C21.1402 4.95004 22.1902 5.75004 21.8602 6.67004L17.7002 18.32C17.5702 18.71 17.1902 18.98 16.7702 18.98Z" />
                <path
                  opacity="0.4"
                  d="M17 22H7C6.59 22 6.25 21.66 6.25 21.25C6.25 20.84 6.59 20.5 7 20.5H17C17.41 20.5 17.75 20.84 17.75 21.25C17.75 21.66 17.41 22 17 22Z"
                />
                <path
                  fill="#000"
                  d="M14.5 14.75H9.5C9.09 14.75 8.75 14.41 8.75 14C8.75 13.59 9.09 13.25 9.5 13.25H14.5C14.91 13.25 15.25 13.59 15.25 14C15.25 14.41 14.91 14.75 14.5 14.75Z"
                />
              </svg>
            </div>
            <div class="flex text-sm space-x-[0.25rem]">
              <span class="text-alt3 font-light">Go</span>
              <span class="text-white">Pro</span>
            </div>
          </a>
          <a href="">
            <div class="duration-300 hover:opacity-70 icon w-[1.5rem] h-[1.5rem] text-primary">
              <svg
                viewBox="0 0 24 24"
                stroke="#fff"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z"
                  stroke="transparent"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.02 2.2C13.36 2.07 12.69 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 11.32 21.93 10.65 21.8 10.01"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </a>
          <a href="">
            <div class="duration-300 hover:opacity-70 text-white icon w-[1.7rem] h-[1.7rem]">
              <svg
                viewBox="0 0 24 24"
                stroke="#fff"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.6901C2 5.6001 4.49 3.1001 7.56 3.1001C9.38 3.1001 10.99 3.9801 12 5.3401C13.01 3.9801 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.6001 22 8.6901C22 15.6901 15.52 19.8201 12.62 20.8101Z"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </a>
          <a href="" class="!mt-auto">
            <div class="duration-300 hover:opacity-70 text-white icon w-[1.5rem] h-[1.5rem]">
              <svg
                viewBox="0 0 24 24"
                stroke="#fff"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5Z"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  opacity="0.6"
                  d="M19.14 19.14L19.01 19.01M19.01 4.99L19.14 4.86L19.01 4.99ZM4.86 19.14L4.99 19.01L4.86 19.14ZM12 2.08V2V2.08ZM12 22V21.92V22ZM2.08 12H2H2.08ZM22 12H21.92H22ZM4.99 4.99L4.86 4.86L4.99 4.99Z"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </a>
          <a href="">
            <div class="duration-300 hover:opacity-70 text-white icon w-[1.5rem] h-[1.5rem]">
              <svg
                viewBox="0 0 24 24"
                stroke="#fff"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 9.10986V14.8799C3 16.9999 3 16.9999 5 18.3499L10.5 21.5299C11.33 22.0099 12.68 22.0099 13.5 21.5299L19 18.3499C21 16.9999 21 16.9999 21 14.8899V9.10986C21 6.99986 21 6.99986 19 5.64986L13.5 2.46986C12.68 1.98986 11.33 1.98986 10.5 2.46986L5 5.64986C3 6.99986 3 6.99986 3 9.10986Z"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  opacity="0.6"
                  d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </a>
          <div class="profile">
            <a href="#" class="w-full h-full rounded-full flex overflow-hidden">
              <img src="https://i.imgur.com/qNst8b7.png" alt="" />
            </a>
          </div>
        </aside>
      </body>
    </>
  );
}

export default Mainpage;