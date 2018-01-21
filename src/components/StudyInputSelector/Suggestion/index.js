import React from 'react';
import { MenuItem } from 'material-ui/Menu';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';

export default function Suggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion, query);
  const parts = parse(suggestion, matches);

  return (
    <MenuItem selected={isHighlighted} style={{direction: 'rtl', padding: '12px 8px 12px 8px'}} component="div">
      <div >
        {parts.map((part, index) => {
          return part.highlight ? (
            <span key={String(index)} style={{ fontWeight: 300 }}>
              {part.text}
            </span>
          ) : (
            <strong key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </strong>
          );
        })}
      </div>
    </MenuItem>
  );
}
