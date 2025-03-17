import React from 'react';

// Reusable Section component for easy expansion
const Section = ({ id, title, content, children }) => {
  return (
    <section id={id} className="gradient-bg">
      <div className="container-padding">
        <h2 className="heading">{title}</h2>
        {content && <p className="paragraph">{content}</p>}
        {children}
      </div>
    </section>
  );
};

export default Section;