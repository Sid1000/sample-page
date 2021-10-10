import React, { useState } from "react";
import Faq from "./Faq";

function Support() {
  const [faqs, setfaqs] = useState([
    {
      question: "What is ReactJS?",
      answer:
        "React is an open-source JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.",
      open: true,
    },
    {
      question: "What is Redux ?",
      answer:
        "Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook's Flux architecture, it was created by Dan Abramov and Andrew Clark.",
      open: false,
    },
    {
      question: "What is Hooks?",
      answer:
        "Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don't work inside classes — they let you use React without classes. ... You can also create your own Hooks to reuse stateful behavior between different components.",
      open: false,
    },
    {
      question: "What is Components?",
      answer:
        "Components are the building blocks of any React app and a typical React app will have many of these. Simply put, a component is a JavaScript class or function that optionally accepts inputs i.e. properties(props) and returns a React element that describes how a section of the UI (User Interface) should appear.",
      open: false,
    },
    {
      question: "What is Props?",
      answer:
        "Props is a special keyword in React, which stands for properties and is being used for passing data from one component to another. Furthermore, props data is read-only, which means that data coming from the parent should not be changed by child components.",
      open: false,
    },
    {
      question: "What is State?",
      answer:
        "React components has a built-in state object. The state object is where you store property values that belongs to the component. When the state object changes, the component re-renders.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className="App">
      <header>
        <h1>Frequently Asked Questions</h1>
      </header>
      <div className="faqs">
        {faqs.map((faq, i) => (
          <Faq faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default Support;
