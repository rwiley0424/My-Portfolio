import "./portfolio.css";

import IMG1 from "../../assets/GroundUp-Timely-Menu.png";
import IMG2 from "../../assets/Sortable Movies.png";
import IMG3 from "../../assets/Chinese Zodiac Animals.png";
import IMG4 from "../../assets/Product Selector.png";
import IMG5 from "../../assets/Space Mission.png";
import IMG6 from "../../assets/Marvel.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "GroundUp Timely Menu",
      img: IMG1,
      description:
        "A website for a neighborhood coffee shop in Williamsburg, Brooklyn",
      technologies: "HTML | CSS | JavaScript",
      link: "https://ground-up-timely-menu.onrender.com",
    },
    {
      id: 2,
      title: "Sortable Movies",
      img: IMG2,
      description:
        "A website that will allow you to sort movies by name,year,duration,oscars,and tomatometer",
      technologies: "HTML | CSS | JavaScript",
      link: "https://sortable-movies.onrender.com/",
    },
    {
      id: 3,
      title: "Chinese Zodiac Animals",
      img: IMG3,
      description:
        "This website allow you to see Chinese Zodiac Animals associated with year. It  will pronounce the type of animal in Chinese or English and has a spinning wheel with an option to adjust the speed of the wheel.",
      technologies: "HTML | CSS | JavaScript",
      link: "https://chinese-zodiac-animals.onrender.com",
    },
    {
      id: 4,
      title: "Product Selector",
      img: IMG4,
      description:
        "This is a website that can display product for purchase",
      technologies: "HTML | CSS | JavaScript",
      link: "https://product-selector.onrender.com",
    },
    {
      id: 5,
      title: "Space Mission",
      img: IMG5,
      description:
        "This website uses an API that contains data about space mission",
      technologies: "React | API | JavaScript | CSS",
      link: "https://space-mission-9ycs.onrender.com",
    },
    {
      id: 6,
      title: "Marvel Movie Data",
      img: IMG6,
      description:
        "This website allows you to create, read, update, and delete marvel movies based on name,debut film and debut year.",
      technologies: "React | JavaScript | CSS | Express | MongoDB | Morgan | Dotenv",
      link: "https://mcu-frontend-9hz5.onrender.com",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                live site
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
