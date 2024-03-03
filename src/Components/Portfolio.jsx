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
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "TruTracker: Truman State Campus Navigation Partner",
    description:
      "Contributed to the development of an app that lets you find the quickest paths and select building entrances for efficient, personalized campus travel.",
    url: "https://github.com/Habibnasir23/TruTracker",
  },
  {
    title: "Real Estate Web Application for Kirksville",
    description:
      "Created a user friendly site for residents of Kirksville to list their property for sale/rent or view existing listings.",
    url: "https://github.com/Habibnasir23/ASP.NET-Core-MVC-Real-Estate-Web-Application",
  },
  {
    title: "College Dining Hall Menu Tracker and SMS Notifier. ",
    description:
      "Are you tired of figuring out which dinning hall has the best food? Worry no more cuz this program will look for the best food options daily, based on your prefernces, and send you alerts on where to eat on campus.",
    url: "https://github.com/Habibnasir23/Dining-Hall-Menu-Tracker-and-SMS-Notifier",
  },
  {
    title: "My Portfolio Site",
    description:
      "Created using React and JavaScript. Includes my experience and development skills.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
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
