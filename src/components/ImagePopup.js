import React from 'react';

class ImagePopup extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
      if (this.props.card !== null) {
        this._openedClass = 'popup_is-opened';
      }
      if (this.props.isPopupClose) {
        this._openedClass = ' ';
      }
       if (this.props.card !== null  &&  !this.props.isPopupClose) { 
        return (
          <section className={`popup popup_img  ${this._openedClass}`}>
            <div className="popup__content popup__content_img" >
              <button className="popup__close popup__close_img" type="button" onClick={this.props.onClosePopup}></button>
              <img src={this.props.card.link} alt={this.props.card.name} className="popup__image" />
              <h3 className="popup__title popup__title_img">{this.props.card.name}</h3>
            </div>
          </section>
        );
       } else {
          return (null);
      } 
  }

}
  
export default ImagePopup; 