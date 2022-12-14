import React from "react";
import BlogAside from "../Components/BlogAside/BlogAside";
import CommonBanner from "../Components/CommonBanner/CommonBanner";
import Header from "../Components/Header/Header";
import SingleBlog from "../Components/SingleBlog/SingleBlog";
import BlogImg1 from "../public/BlogImg/blog-img-1.jpg";
import BlogImg2 from "../public/BlogImg/blog-img-2.jpg";
import BlogImg3 from "../public/BlogImg/blog-img-3.jpg";
import BlogImg4 from "../public/BlogImg/blog-img-4.png";
import BlogImg5 from "../public/BlogImg/blog-img-5.jpg";

const blog = () => {
  const blogs = [
    {
      img: BlogImg1,
      category: "Charity",
      title: "Directly support individuals Charity",
      date: "June 18, 2021",
      description:
        "Nostrud tem exrcitation duis laboris nisi ut aliquip sed duis aute cupidata con proident sunt culpa.",
    },
    {
      img: BlogImg2,
      category: "Coaching",
      title: "Directly support Coaching fundraisers",
      date: "June 18, 2021",
      description:
        "Nostrud tem exrcitation duis laboris nisi ut aliquip sed duis aute cupidata con proident sunt culpa.",
    },
    {
      img: BlogImg3,
      category: "EDUCATION",
      title: "Start a fundraiser for yourself in World",
      date: "June 18, 2021",
      description:
        "Nostrud tem exrcitation duis laboris nisi ut aliquip sed duis aute cupidata con proident sunt culpa.",
    },
    {
      img: BlogImg4,
      category: "Covid-19",
      title: "Trial of Covid-19 vaccine in World",
      date: "June 18, 2021",
      description:
        "Nostrud tem exrcitation duis laboris nisi ut aliquip sed duis aute cupidata con proident sunt culpa.",
    },
    {
      img: BlogImg5,
      category: "Uncategorized",
      title: "Heart gives happy Rise Of Global Charity",
      date: "June 18, 2021",
      description:
        "Nostrud tem exrcitation duis laboris nisi ut aliquip sed duis aute cupidata con proident sunt culpa.",
    },
  ];

  return (
    <div>
      <Header />
      <CommonBanner title={"Blog Page"} />
      <div className="w-11/12 max-w-[1140px] mx-auto lg:flex">
        <div className="lg:w-2/3 lg:pr-10 mt-28">
          {blogs.map((blog) => (
            <SingleBlog blog={blog}></SingleBlog>
          ))}
        </div>
        <div className="lg:w-1/3 bg-[#eef1f7] text-black py-1 lg:py-0">
          <BlogAside />
        </div>
      </div>
    </div>
  );
};

export default blog;
