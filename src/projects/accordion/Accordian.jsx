import data from "./data";
import { useState } from "react";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [multipleSelection, setMultipleSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(currentId) {
    setSelected((prev) => (prev === currentId ? null : currentId));
  }
  function handleMultipleSelection(currentId) {
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(currentId);
    if (findIndexOfCurrentId === -1) copyMultiple.push(currentId);
    else copyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(copyMultiple);
  }
  console.log(selected, multiple);
  return (
    <div className="wrapper">
      <button
        className="btn"
        onClick={() => setMultipleSelection(!multipleSelection)}
      >
        Enable Multiple Selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => {
            return (
              <div className="item" key={dataItem.id}>
                <div
                  className="question"
                  onClick={
                    multipleSelection
                      ? () => handleMultipleSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>

                {multipleSelection
                  ? multiple.includes(dataItem.id) && (
                      <div className="answer">{dataItem.answer}</div>
                    )
                  : selected === dataItem.id && (
                      <div className="answer">{dataItem.answer}</div>
                    )}

                {/* {selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? (
                  <div className="answer">
                    <p>{dataItem.answer}</p>
                  </div>
                ) : null} */}
              </div>
            );
          })
        ) : (
          <div> No data found! </div>
        )}
      </div>
    </div>
  );
}
