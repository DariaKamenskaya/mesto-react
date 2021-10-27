import React from 'react';

class PopupWithForm extends React.Component {
  constructor(props) {
    super(props);
    this.title = props.title;
    this.name = props.name;
    this.children = props.children;
  }

  handleSubmit = () => {
    this.setState({ submitted: true });
  };

  render() {
    console.log(this.props.isOpen);
    if (this.props.isOpen) {
        this._openedClass = 'popup_is-opened';
        console.log(this.props.name);
    }
    return (
      <section className={`popup popup-${this.props.name} ${this._openedClass}`} >
        <div className="popup__content" >
          <button className={`popup__close popup__close-${this.props.name}`}  type="button"></button>
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