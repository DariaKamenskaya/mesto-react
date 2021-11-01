import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
    {/* this.card = this.props.card; */}
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick()  {
    this.props.onCardClick(this.props.card);
  }  


  render() {
    return(
      <article className="element">
        <img src={this.props.card.link} alt={this.props.card.name} className="element__image"  onClick={() => this.handleClick()} />
        <button className="element__remove-button"  type="button" ></button>
        <div className="element__title-block">
          <p className="element__title">{this.props.card.name}</p>
          <div className="element__likes">
            <button className="element__heart-button"  type="button"></button>
            <p className="element__likes-number">{this.props.card.likes.length}</p>
          </div>
        </div>
      </article>
    );
  }



}
  
export default Card; 