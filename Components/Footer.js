import Image from "next/image";
import Link from "next/link";
import { BsTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <div className="bg-slate-800">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <Image
              src="/logo/footer-logo.png"
              alt="Picture of the author"
              width={250}
              height={250}
            />
            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm text-gray-100">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
              <p className="mt-4 text-sm text-gray-100">
                Eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.
              </p>
            </div>
            <div className="flex items-center gap-3 mt-5">
              <p className="bg-red-500 p-3 w-10 rounded-lg">
                <BsTelephoneFill />
              </p>
              <div>
                <p>1-206-156 7849</p>
                <p>Email: info@love&care.org</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            <div>
              <ul className="mt-2 space-y-5">
                <li>
                  <div>
                    <p className="text-white text-2xl font-semibold">
                      Category
                    </p>
                    <div className="h-[2px] w-10 bg-red-500"></div>
                  </div>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-100 transition-colors duration-300 "
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-100 transition-colors duration-300 "
                  >
                    Upcoming Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-100 transition-colors duration-300 "
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-100 transition-colors duration-300"
                  >
                    Faq
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="mt-2 space-y-5">
                <li>
                  <div>
                    <p className="text-white text-2xl font-semibold">
                      About Us
                    </p>
                    <div className="h-[2px] w-10 bg-red-500"></div>
                  </div>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-100 transition-colors duration-300"
                  >
                    info
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-100 transition-colors duration-300"
                  >
                    Healthy Food
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-100 transition-colors duration-300"
                  >
                    Birmingham children’s
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="mt-2 space-y-5">
                <li>
                  <div>
                    <p className="text-white text-2xl font-semibold">
                      Campaigns
                    </p>
                    <div className="h-[2px] w-10 bg-red-500"></div>
                  </div>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-100 transition-colors duration-300"
                  >
                    differently abled
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-100 transition-colors duration-300"
                  >
                    child cancer
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-gray-100 transition-colors duration-300 "
                  >
                    nigerian girls
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="mt-2 space-y-5">
                <li>
                  <div>
                    <p className="text-white text-2xl font-semibold">
                      Subscribe
                    </p>
                    <div className="h-[2px] w-10 bg-red-500"></div>
                  </div>
                </li>
                <li>
                  <p>Be the first one to receive latest updates.</p>
                </li>
                <li>
                  <div>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Enter you email"
                        className="input input-bordered w-full bg-white"
                      />
                      <button className="btn  bg-red-600 hover:bg-red-500 absolute text-white text-2xl right-0 border-none">
                        <MdOutlineEmail />
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" pt-5 pb-10 border-t sm:flex-row">
          <p className="text-sm text-gray-600 text-center">
            © Copyright 2022 Love&Care. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
