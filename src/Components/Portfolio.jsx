/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/desk.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "LLMs: cutting-edge technology and future applications 🎉",
    description:
      "Collaboration to create a beginner friendly article to help explain Azure Static Web Apps and tooling to get started.",
    url: "https://mp.weixin.qq.com/s?__biz=Mzg5NzczMzM3MA==&mid=2247483926&idx=1&sn=c6dcaf93ec8d7ecaa760df4682589b21",
  },
  {
    title: "How can I better ask questions of the big models?",
    description:
      "Contributed sketch note imagery to accompany each lesson. These help provide visual representation of what is being taught.",
    url: "https://sspai.com/post/82322",
  },
  {
    title: "My Resume Site",
    description: "My academe resume. Includes my experience and research abilities.",
    url: "https://onedrive.live.com/?authkey=%21AH3nunfb8BCZwCI&cid=8B5335EBA173F783&id=8B5335EBA173F783%2120583&parId=8B5335EBA173F783%21105&o=OneUp",
  },
  {
    title: "How I built my own full-linkage knowledge system in the age of information explosion",
    description: "Video interview to explain my knowledge system, and how best to use each tool.",
    url: "https://sspai.com/post/74992",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
