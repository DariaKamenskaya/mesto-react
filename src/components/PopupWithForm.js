import React from 'react';

class PopupWithForm extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = () => {
    this.setState({ submitted: true });
  };

  render() {
    return (
      <section className={`popup popup-${this.props.name} ${this.props.isOpen ? 'popup_is-opened' : ''}`} >
        <div className="popup__content" >
          <button className={`popup__close popup__close-${this.props.name}`}  type="button" onClick={this.props.onClosePopup}></button>
          <h3 className="popup__title">{this.props.title}</h3>
          <form className={`popup__form popup__form_${this.props.name}`} name="submit-user">
            {this.props.children} 
          </form>
        </div>
      </section>
    );
}

}
  
export default PopupWithForm; 