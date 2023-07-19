import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section class="text-gray-600 body-font bg-[#00aeef]">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 class="sm:text-3xl text-4xl text-white-900 font-bold title-font mb-2 text-[#ffffff]">
            Self Service Portal
          </h1>
          <p class="lg:w-1/2 w-full text-xl font-semibold leading-relaxed text-[#ffffff]">
            One stop destination for any server related queries
          </p>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="xl:w-1/4 md:w-1/3 p-4">
            <div class="border border-gray-200 p-6 rounded-lg">
              <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                  />
                </svg>
              </div>
              <h2 class="text-4xl text-white-900 font-bold title-font mb-2 text-[#ffffff]">
                Server 1
              </h2>
              <p class="leading-relaxed text-base text-[#ffffff]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate hic assumenda quod, illo ea veritatis consectetur esse amet delectus, ullam voluptas aperiam, facilis eum qui neque vero suscipit modi recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odio tempore eaque temporibus enim veritatis impedit hic id aperiam, reprehenderit accusantium sequi saepe dolorum explicabo quo, ducimus dolore assumenda debitis.
          &nbsp; 
              </p>
              <Link href="/server">
                <p className="text-white font-bold text-xl hover:text-gray-300">Learn more</p>
              </Link>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/3 p-4">
            <div class="border border-gray-200 p-6 rounded-lg">
              <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                  />
                </svg>
              </div>
              <h2 class="text-4xl text-white font-bold title-font mb-2">
                Server 2
              </h2>
              <p class="leading-relaxed text-base text-[#ffffff]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate hic assumenda quod, illo ea veritatis consectetur esse amet delectus, ullam voluptas aperiam, facilis eum qui neque vero suscipit modi recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odio tempore eaque temporibus enim veritatis impedit hic id aperiam, reprehenderit accusantium sequi saepe dolorum explicabo quo, ducimus dolore assumenda debitis.
       
              </p>
              <Link href="/server">
                <p className="text-white font-bold text-xl hover:text-gray-300">Learn more</p>
              </Link>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/3 p-4">
            <div class="border border-gray-200 p-6 rounded-lg">
              <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                  />
                </svg>
              </div>
              <h2 class="text-4xl text-white font-bold title-font mb-2">
                Server 3
              </h2>
              <p class="leading-relaxed text-base text-[#ffffff]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate hic assumenda quod, illo ea veritatis consectetur esse amet delectus, ullam voluptas aperiam, facilis eum qui neque vero suscipit modi recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odio tempore eaque temporibus enim veritatis impedit hic id aperiam, reprehenderit accusantium sequi saepe dolorum explicabo quo, ducimus dolore assumenda debitis.
       
              </p>
              <Link href="/server">
                <p className="text-white font-bold text-xl hover:text-gray-300">Learn more</p>
              </Link>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/3 p-4">
            <div class="border border-gray-200 p-6 rounded-lg">
              <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                  />
                </svg>
              </div>
              <h2 class="text-4xl text-white font-bold title-font mb-2">
                Server 4
              </h2>
              <p class="leading-relaxed text-base text-[#ffffff]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate hic assumenda quod, illo ea veritatis consectetur esse amet delectus, ullam voluptas aperiam, facilis eum qui neque vero suscipit modi recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odio tempore eaque temporibus enim veritatis impedit hic id aperiam, reprehenderit accusantium sequi saepe dolorum explicabo quo, ducimus dolore assumenda debitis.
       
              </p>
              <Link href="/server">
                <p className="text-white font-bold text-xl hover:text-gray-300">Learn more</p>
              </Link>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/3 p-4">
            <div class="border border-gray-200 p-6 rounded-lg">
              <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                  />
                </svg>
              </div>
              <h2 class="text-4xl text-white font-bold title-font mb-2">
                Server 5
              </h2>
              <p class="leading-relaxed text-base text-[#ffffff]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate hic assumenda quod, illo ea veritatis consectetur esse amet delectus, ullam voluptas aperiam, facilis eum qui neque vero suscipit modi recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odio tempore eaque temporibus enim veritatis impedit hic id aperiam, reprehenderit accusantium sequi saepe dolorum explicabo quo, ducimus dolore assumenda debitis.
       
              </p>
              <Link href="/server">
                <p className="text-white font-bold text-xl hover:text-gray-300">Learn more</p>
              </Link>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/3 p-4">
            <div class="border border-gray-200 p-6 rounded-lg">
              <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                  />
                </svg>
              </div>
              <h2 class="text-4xl text-white font-bold title-font mb-2">
                Server 6
              </h2>
              <p class="leading-relaxed text-base text-[#ffffff]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate hic assumenda quod, illo ea veritatis consectetur esse amet delectus, ullam voluptas aperiam, facilis eum qui neque vero suscipit modi recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odio tempore eaque temporibus enim veritatis impedit hic id aperiam, reprehenderit accusantium sequi saepe dolorum explicabo quo, ducimus dolore assumenda debitis.
       
              </p>
              <Link href="/server">
                <p className="text-white font-bold text-xl hover:text-gray-300">Learn more</p>
              </Link>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/3 p-4">
            <div class="border border-gray-200 p-6 rounded-lg">
              <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                  />
                </svg>
              </div>
              <h2 class="text-4xl text-white font-bold title-font mb-2">
               Server 7
              </h2>
              <p class="leading-relaxed text-base text-[#ffffff]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate hic assumenda quod, illo ea veritatis consectetur esse amet delectus, ullam voluptas aperiam, facilis eum qui neque vero suscipit modi recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odio tempore eaque temporibus enim veritatis impedit hic id aperiam, reprehenderit accusantium sequi saepe dolorum explicabo quo, ducimus dolore assumenda debitis.
       
              </p>
              <Link href="/server">
                <p className="text-white font-bold text-xl hover:text-gray-300">Learn more</p>
              </Link>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/3 p-4">
            <div class="border border-gray-200 p-6 rounded-lg">
              <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                  />
                </svg>
              </div>
              <h2 class="text-4xl text-white font-bold title-font mb-2">
               Server 8
              </h2>
              <p class="leading-relaxed text-base text-[#ffffff]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate hic assumenda quod, illo ea veritatis consectetur esse amet delectus, ullam voluptas aperiam, facilis eum qui neque vero suscipit modi recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odio tempore eaque temporibus enim veritatis impedit hic id aperiam, reprehenderit accusantium sequi saepe dolorum explicabo quo, ducimus dolore assumenda debitis.
       
              </p>
              <Link href="/server">
                <p className="text-white font-bold text-xl hover:text-gray-300">Learn more</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  
  );
};

export default Hero;
