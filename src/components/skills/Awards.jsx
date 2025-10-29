import { awards } from "../../data/Awards";

const Awards = () => {
  return (
    <div className="education">
      <h4 className="label">Hobbies</h4>
      <ul className="education-list">
        {awards.map((item, index) => (
          <li className="item" key={index}>
            <span className="year">{item.year}</span>
            <p>
              <span>{item.title}</span> - {item.institution}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Awards;
