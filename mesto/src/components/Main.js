// Пути к изображениям внутри сборки
import avatarPath from '../images/Avatar.jpg'; 

function Main() {

  function handleEditAvatarClick() {
    document.querySelector('.popup-avatar').classList.add('popup_is-opened');
  };

  function handleEditProfileClick() {
    document.querySelector('.popup-user').classList.add('popup_is-opened');
  };

  function handleAddPlaceClick() {
    document.querySelector('.popup-add').classList.add('popup_is-opened');
  };

  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-conteiner">
          <div className="profile__avatar-overlay"></div>
          <img src={avatarPath} alt="Жак Ив Кусто" className="profile__avatar"/>
          <button className="profile__avatar-button" onClick={handleEditAvatarClick}></button>
        </div>
        <div className="profile__info">
          <div className="profile__title-block">
            <h1 className="profile__title">Жак-Ив Кусто</h1>
            <button className="profile__edit-button" type="button"  onClick={handleEditProfileClick}></button>
          </div>
          <p className="profile__text">Исследователь океана</p>
        </div>
        <button className="profile__add-button" type="button"  onClick={handleAddPlaceClick}></button>
      </section>
      <section className="elements">
      </section>
    </main>
  );
}


    
export default Main;