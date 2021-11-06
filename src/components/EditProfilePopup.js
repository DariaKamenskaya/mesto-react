import React from 'react';
import PopupWithForm from '../components/PopupWithForm';


function EditProfilePopup(props) {



  return(
    <PopupWithForm name="user" title="Редактировать профиль" isOpen={props.isOpen}  onClosePopup={props.onClose}>
    <label className="popup__form-field">
      <input type="text" id="name-input" className="popup__input popup__input_type_name"  placeholder="Имя" name="name" required minLength="2" maxLength="40"/>
      <span id="name-input-error" className="popup__input-error"></span>
    </label>
    <label className="popup__form-field">
      <input type="text" id="work-input"  placeholder="О себе" className="popup__input popup__input_type_work" name='about' required minLength='2'  maxLength='200'/>
      <span id="work-input-error" className="popup__input-error"></span>
    </label>
    <button className="popup__submit-btn popup__submit-btn_edit"  type="submit">
      Сохранить
    </button>
  </PopupWithForm>
  );

}



  
export default EditProfilePopup; 