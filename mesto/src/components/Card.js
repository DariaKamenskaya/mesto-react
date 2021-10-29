import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    this.props.onCardClick(this.props.card);
  }  


  render() {
      return(
          this.handleClick()
      )
  }



}
  
export default Card; 