import React from 'react';
import PopupWithForm from '../components/PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function EditAvatarPopup(props) {

  // Стейт, в котором содержится значение инпута
  const [avatar, setAvatar] = React.useState(null);
  // Подписка на контекст
  const currentUser = React.useContext(CurrentUserContext);




  return(
    <PopupWithForm name="avatar" title="Обновить аватар" isOpen={props.isOpen}  onClosePopup={props.onClose}>
    <label className="popup__form-field">
      <input type="url" id="url-input_avatar" placeholder="Ссылка на картинку" className="popup__input popup__input_type_avatar-img" name='link' required />
      <span id="url-input_avatar-error" className="popup__input-error"></span>
    </label>
    <button className="popup__submit-btn popup__submit-btn_avatar"  type="submit"> 
      Сохранить
    </button>
  </PopupWithForm>
  );

}



  
export default EditAvatarPopup; 