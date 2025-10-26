import { FaXmark } from "react-icons/fa6";

const PortfolioModal = ({ item, isModalOpen, closeModal }) => {
  return (
    <div className={`portfolio-model ${isModalOpen ? "active" : ""}`}>
      <div className="portfolio-model-body">
        <FaXmark className="portfolio-close-btn" onClick={closeModal} />
        {/* <i className="fa-solid fa-xmark portfolio-close-btn"></i> */}
        <h3>{item.title}</h3>
        <img src={item.imgSrc} alt="portfolio" />
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default PortfolioModal;
