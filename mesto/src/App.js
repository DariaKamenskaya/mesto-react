// Пути к изображениям внутри сборки
import logoPath from './images/logo.svg'; 
import avatarPath from './images/Avatar.jpg'; 


function App() {
  return (
    <div className="body">
    <div className="page">
      <header className="header">
        <a href="#" className="header__link"><img src={logoPath} alt="Логотип" className="header__logo"/></a>
      </header>
      <main>
        <section className="profile">
          <div className="profile__avatar-conteiner">
            <div className="profile__avatar-overlay"></div>
            <img src={avatarPath} alt="Жак Ив Кусто" className="profile__avatar"/>
            <button className="profile__avatar-button"></button>
          </div>
          <div className="profile__info">
            <div className="profile__title-block">
              <h1 className="profile__title">Жак-Ив Кусто</h1>
              <button className="profile__edit-button" type="button"></button>
            </div>
            <p className="profile__text">Исследователь океана</p>
          </div>
          <button className="profile__add-button" type="button"></button>
        </section>
        <section className="elements">
        </section>
      </main>
      <footer className="footer">
        <p className="footer__text">&copy; 2021 Daria Kamenskaya</p>
      </footer>
      <section className="popup popup-user">
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
      </section>
      <section className="popup popup-avatar">
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
      </section>
      <section className="popup popup-add">
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
      </section>
      <section className="popup popup_img">
        <div className="popup__content popup__content_img" >
          <button className="popup__close popup__close_img" type="button"></button>
          <img src="<%=require('./images/element_Karachaevsk.jpg')%>" alt="Карачаево-Черкессия" className="popup__image" />
          <h3 className="popup__title popup__title_img">Новое место</h3>
        </div>
      </section>
      <section className="popup popup_delete">
        <div className="popup__content popup__content_delete" >
          <button className="popup__close popup__close_delete" type="button"></button>
          <h3 className="popup__title popup__title_delete">Вы уверены?</h3>
          <button className="popup__submit-btn popup__submit-btn_delete"  type="submit">
            Да
          </button> 
        </div>
      </section>
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
