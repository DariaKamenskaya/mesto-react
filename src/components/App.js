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
  {/* const [isPopupClose, handlePopupClose] = React.useState(false); */}
  const [selectedCard, setSelectedCard] = React.useState(null);



  function handleEditAvatarClick() {
    {/* handlePopupClose(false); */}
    handleEditAvatarPopupOpen(true);
  };

  function handleEditProfileClick() {
    {/* handlePopupClose(false); */}
    handleEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick() {
    {/* handlePopupClose(false); */}
    handleAddPlacePopupOpen(true);
  };

  function handleCardClick(card) {
    {/* handlePopupClose(false); */}
    setSelectedCard(card);
  };


  function closeAllPopups() {
     {/* handlePopupClose(true);  */}
    handleEditAvatarPopupOpen(false);
    handleEditProfilePopupOpen(false);
    handleAddPlacePopupOpen(false);
    setSelectedCard(null);
  };



  return (
    <div className="body">
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
      <Footer />
      <PopupWithForm name="user" title="Редактировать профиль" isOpen={isEditProfilePopupOpen}  onClosePopup={closeAllPopups}>
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
      <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen}  onClosePopup={closeAllPopups}>
        <label className="popup__form-field">
          <input type="url" id="url-input_avatar" placeholder="Ссылка на картинку" className="popup__input popup__input_type_avatar-img" name='link' required />
          <span id="url-input_avatar-error" className="popup__input-error"></span>
        </label>
        <button className="popup__submit-btn popup__submit-btn_avatar"  type="submit"> 
          Сохранить
        </button>
      </PopupWithForm>
      <PopupWithForm name="add" title="Новое место" isOpen={isAddPlacePopupOpen}  onClosePopup={closeAllPopups}>
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
      <ImagePopup  card={selectedCard}  onClosePopup={closeAllPopups}/>
      <PopupWithForm name="delete" title="Вы уверены?"  onClosePopup={closeAllPopups}>
        <button className="popup__submit-btn popup__submit-btn_delete"  type="submit">
          Да
        </button> 
      </PopupWithForm>
    </div>
  </div>
  );
}

export default App;
