import React from 'react';

class ImagePopup extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <section className="popup popup_img">
        <div className="popup__content popup__content_img" >
          <button className="popup__close popup__close_img" type="button"></button>
          <img src="<%=require('./images/element_Karachaevsk.jpg')%>" alt="Карачаево-Черкессия" className="popup__image" />
          <h3 className="popup__title popup__title_img">Новое место</h3>
        </div>
      </section>
    );
}

}
  
export default ImagePopup; 