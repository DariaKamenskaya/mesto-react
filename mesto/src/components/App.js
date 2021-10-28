import React from 'react';
// Импорт модулей
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import PopupWithForm from '../components/PopupWithForm'
import ImagePopup from '../components/ImagePopup'


function App() {

  const [isEditProfilePopupOpen, handleEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, handleAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, handleEditAvatarPopupOpen] = React.useState(false);
  const [isPopupClose, handlePopupClose] = React.useState(false);


  function handleEditAvatarClick() {
    handlePopupClose(false);
    handleEditAvatarPopupOpen(true);
    {/* document.querySelector('.popup-avatar').classList.add('popup_is-opened'); */}
  };

  function handleEditProfileClick() {
    handlePopupClose(false);
    handleEditProfilePopupOpen(true);
    {/* document.querySelector('.popup-user').classList.add('popup_is-opened'); */}
  };

  function handleAddPlaceClick() {
    handlePopupClose(false);
    handleAddPlacePopupOpen(true);
    {/* document.querySelector('.popup-add').classList.add('popup_is-opened');  */}
  };

  function closeAllPopups() {
    handlePopupClose(true);
    {/* document.querySelector('.popup-add').classList.add('popup_is-opened');  */}
  };

  return (
    <div className="body">
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}/>
      <Footer />
      <PopupWithForm name="user" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={isPopupClose} onClosePopup={closeAllPopups}>
        <label className="popup__form-field">
          <input type="text" id="name-input" className="popup__input popup__input_type_name"  placeholder="Имя" name="name" required minlength="2" maxlength="40"/>
          <span id="name-input-error" className="popup__input-error"></span>
        </label>
        <label className="popup__form-field">
          <input type="text" id="work-input"  placeholder="О себе" className="popup__input popup__input_type_work" name='about' required minlength='2'  maxlength='200'/>
          <span id="work-input-error" className="popup__input-error"></span>
        </label>
        <button className="popup__submit-btn popup__submit-btn_edit"  type="submit">
          Сохранить
        </button>
      </PopupWithForm>
      {/* <section className="popup popup-user">
        <div className="popup__content" >
          <button className="popup__close popup__close-user"  type="button"></button>
          <h3 className="popup__title">Редактировать профиль</h3>
          <form className="popup__form popup__form_users" name="submit-user">
            <label className="popup__form-field">
              <input type="text" id="name-input" className="popup__input popup__input_type_name"  placeholder="Имя" name="name" required minlength="2" maxlength="40"/>
              <span id="name-input-error" className="popup__input-error"></span>
            </label>
            <label className="popup__form-field">
              <input type="text" id="work-input"  placeholder="О себе" className="popup__input popup__input_type_work" name='about' required minlength='2'  maxlength='200'/>
              <span id="work-input-error" className="popup__input-error"></span>
            </label>
            <button className="popup__submit-btn popup__submit-btn_edit"  type="submit">
              Сохранить
            </button>
          </form>
        </div>
      </section> */}
      <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={isPopupClose} onClosePopup={closeAllPopups}>
        <label className="popup__form-field">
          <input type="url" id="url-input_avatar" placeholder="Ссылка на картинку" className="popup__input popup__input_type_avatar-img" name='link' required />
          <span id="url-input_avatar-error" className="popup__input-error"></span>
        </label>
        <button className="popup__submit-btn popup__submit-btn_avatar"  type="submit"> 
          Сохранить
        </button>
      </PopupWithForm>
      {/* <section className="popup popup-avatar">
        <div className="popup__content popup__content_avatar" >
          <button className="popup__close popup__close-avatar"  type="button"></button>
          <h3 className="popup__title">Обновить аватар</h3>
          <form className="popup__form popup__input-avatar" name="submit-element">
            <label className="popup__form-field">
              <input type="url" id="url-input_avatar" placeholder="Ссылка на картинку" className="popup__input popup__input_type_avatar-img" name='link' required />
              <span id="url-input_avatar-error" className="popup__input-error"></span>
            </label>
            <button className="popup__submit-btn popup__submit-btn_avatar"  type="submit"> 
              Сохранить
            </button>
          </form>
        </div>
      </section> */}
      <PopupWithForm name="add" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={isPopupClose} onClosePopup={closeAllPopups}>
        <label className="popup__form-field">
          <input type="text" id="place-input"  placeholder="Название" className="popup__input popup__input_type_place-name" name='name' required minlength="2" maxlength="30" />
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
      {/* <section className="popup popup-add">
        <div className="popup__content" >
          <button className="popup__close popup__close-add"  type="button"></button>
          <h3 className="popup__title">Новое место</h3>
          <form className="popup__form popup__input-add" name="submit-element">
            <label className="popup__form-field">
              <input type="text" id="place-input"  placeholder="Название" className="popup__input popup__input_type_place-name" name='name' required minlength="2" maxlength="30" />
              <span id="place-input-error" className="popup__input-error"></span>
            </label>
            <label className="popup__form-field">
              <input type="url" id="url-input" placeholder="Ссылка на картинку" className="popup__input popup__input_type_place-img" name='link' required />
              <span id="url-input-error" className="popup__input-error"></span>
            </label>
            <button className="popup__submit-btn popup__submit-btn_add"  type="submit"> 
              Создать
            </button>
          </form>
        </div>
    </section> */}
      {/* <section className="popup popup_img">
        <div className="popup__content popup__content_img" >
          <button className="popup__close popup__close_img" type="button"></button>
          <img src="<%=require('./images/element_Karachaevsk.jpg')%>" alt="Карачаево-Черкессия" className="popup__image" />
          <h3 className="popup__title popup__title_img">Новое место</h3>
        </div>
  </section> */}

      <ImagePopup />
      <PopupWithForm name="delete" title="Вы уверены?" onClose={isPopupClose} onClosePopup={closeAllPopups}>
        <button className="popup__submit-btn popup__submit-btn_delete"  type="submit">
          Да
        </button> 
      </PopupWithForm>
      {/* <section className="popup popup_delete">
        <div className="popup__content popup__content_delete" >
          <button className="popup__close popup__close_delete" type="button"></button>
          <h3 className="popup__title popup__title_delete">Вы уверены?</h3>
          <button className="popup__submit-btn popup__submit-btn_delete"  type="submit">
            Да
          </button> 
        </div>
      </section> */}
    </div>
    <template id="element-template">
      <article className="element">
        <img src="<%=require('./images/element_Karachaevsk.jpg')%>" alt="Карачаево-Черкессия" className="element__image" />
        <button className="element__remove-button"  type="button" ></button>
        <div className="element__title-block">
          <p className="element__title">Карачаево-Черкессия</p>
          <div className="element__likes">
            <button className="element__heart-button"  type="button"></button>
            <p className="element__likes-number">0</p>
          </div>
        </div>
      </article>
    </template>
  </div>
  );
}

export default App;
