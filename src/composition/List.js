import React from 'react'
import './List.css';
import Card from './Card.js';

function List(props) {
  return (
      <section className="List">
        <header className="List-header">
          <h2>{props.header}</h2>
        </header>
        <div className="List-cards">
          {props.cards}
        </div>
      </section>
  );
}

export default List;
