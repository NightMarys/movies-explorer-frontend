import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about" id="about-project">
      <SectionTitle>О проекте</SectionTitle>
      <ul className="about__list">
        <li className="about__item">
          <h3 className="about__subtitle">Дипломный проект включал 5 этапов</h3>
          <p className="about__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="about__item">
          <h3 className="about__subtitle">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className="about__timeline">
        <div className="about__timeline-duration">1 неделя</div>
        <div className="about__timeline-duration">4 недели</div>
        <p className="about__timeline-name">Back-end</p>
        <p className="about__timeline-name">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
