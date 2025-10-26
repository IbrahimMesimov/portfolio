import { portfolioData } from "../../data/PortfolioData";
import "../portfolio/Portfolio.css";
import SectionTitle from "../sectionTitle/sectionTitle";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  return (
    <section className="portfolio section" id="portfolio">
      <div className="container flex-center">
        <SectionTitle title="Portfolio" subtitle="Portfolio" />
        <div className="portfolio-wrapper">
          {portfolioData.map((item, index) => (
            <PortfolioItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
