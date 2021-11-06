import React from 'react';
// Импорт модулей
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import PopupWithForm from '../components/PopupWithForm';
import ImagePopup from '../components/ImagePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import  {apiData}  from '../utils/Api';
import {CurrentCardsContext}  from '../contexts/CurrentCardsContext'



function App() {

  const [isEditProfilePopupOpen, handleEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, handleAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, handleEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [currentCards, setCurrentCards] = React.useState([]);



  function handleEditAvatarClick() {
    handleEditAvatarPopupOpen(true);
  };

  function handleEditProfileClick() {
    handleEditProfilePopupOpen(true);
  };

  function handleAddPlaceClick() {
    handleAddPlacePopupOpen(true);
  };

  function handleCardClick(card) {
    setSelectedCard(card);
  };


  function closeAllPopups() {
    handleEditAvatarPopupOpen(false);
    handleEditProfilePopupOpen(false);
    handleAddPlacePopupOpen(false);
    setSelectedCard(null);
  };

  React.useEffect(() => {
    // запрос в API за пользовательскими данными
    Promise.all([ 
    apiData.getUserData(),
    apiData.getInitialCards()
    ])
    .then((res) => {
      setCurrentUser(res[0]);
      setCurrentCards(res[1])
    })
    .catch((err) => {
      console.log(err); // "Что-то пошло не так: ..."
      return [];
    })
  }, []);



  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <CurrentCardsContext.Provider value={currentCards}>
          <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} setCards={setCurrentCards}/>
        </CurrentCardsContext.Provider>
        <Footer />
        <PopupWithForm name="user" title="Редактировать профиль" isOpen={isEditProfilePopupOpen}  onClosePopup={closeAllPopups}>
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
        <ImagePopup  card={selectedCard}  onClosePopup={closeAllPopups}/>
        <PopupWithForm name="delete" title="Вы уверены?"  onClosePopup={closeAllPopups}>
          <button className="popup__submit-btn popup__submit-btn_delete"  type="submit">
            Да
          </button> 
        </PopupWithForm>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

