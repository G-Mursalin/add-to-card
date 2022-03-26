import React from "react";

const QuestionAnswer = () => {
  return (
    <section>
      <div style={{ width: "600px" }}>
        <h2>How React Works?</h2>
        <p>
          React doesn't manipulate the browser's DOM directly. React create a
          VIRTUAL DOM in memory. Then it does all the necessary things there.
          Then react compare its VIRTUAL DOM with browser real DOM and change
          browser DOM only where it needs to be changed.
        </p>
      </div>
      <div style={{ width: "600px" }}>
        <h2>Difference between props and state?</h2>
        <p>
          Props and state are the two main things in react. Props are used to
          pass data from one component to another and the state is a local data
          storage that is local to a particular component only and cannot be
          passed to other components. Props cannot be modified. So, props are
          read-only. On the other hand, the state can be modified.
        </p>
      </div>
    </section>
  );
};

export default QuestionAnswer;
