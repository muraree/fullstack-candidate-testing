import React from 'react';

export default function JobFilter(props) {
  return (
    <div>
      {Object.keys(props.filters).map((heading,i) =>
        <div key={i}>
          <h3>{heading}</h3>
          {props.filters[heading].map((filter, idx) => <div>{filter.key} ({filter.doc_count})</div>)}
      </div>)}
    </div>
  );
}