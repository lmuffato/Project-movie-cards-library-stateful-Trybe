import React from 'react';

class Check extends React.Component {
  render() {
    const { bookmarkedOnly, onBookmarkedChange, texto, nome } = this.props;
    return (
      <label
        data-testid="checkbox-input-label"
        htmlFor={nome}
      >
        { texto }
        <input
          type="checkbox"
          checked={bookmarkedOnly}
          onChange={onBookmarkedChange}
          data-testid="checkbox-input"
          id={nome}
          name={nome}
        />
      </label>
    );
  }
}

export default Check;
