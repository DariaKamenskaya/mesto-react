import React from 'react';
import PopupWithForm from '../components/PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function AddPlacePopup(props) {

  // Подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);
  // avatar должна быть объявлена здесь, чтобы реф мог иметь к ней доступ
  const avatarLink = React.useRef('');


  
  function handleSubmit(e) {
    e.preventDefault();
    avatarLink.current.focus(); 
    currentUser.avatar = avatarLink.current.value;
    props.onUpdateAvatar(currentUser);
  } 


  return(
    <PopupWithForm name="add" title="Новое место"  isOpen={props.isOpen}  onClosePopup={props.onClose} >
      <label className="popup__form-field">
        <input type="text" id="place-input"  placeholder="Название" className="popup__input popup__input_type_place-name" name='name' required minLength="2" maxLength="30" />
        <span id="place-input-error" className="popup__input-error"></span>
      </label>
      <label className="popup__form-field">
        <input type="url" id="url-input" placeholder="Ссылка на картинку" className="popup__input popup__input_type_place-img" name='link' required />
        <span id="url-input-error" className="popup__input-error"></span>
      </label>
      <button className="popup__submit-btn popup__submit-btn_add"  type="submit"> 
        Создать
      </button>
    </PopupWithForm>
  );

}



  
export default AddPlacePopup; 