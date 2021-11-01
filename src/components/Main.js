import React from 'react'; 
//
import API, { apiData } from '../utils/Api';
import Card from './Card';


function Main(props) {

  const [userName, handleGetUserName] = React.useState(null);
  const [userDescription, handleGetUserDescription] = React.useState(null);
  const [userAvatar, handleGetUserAvatar] = React.useState(null);
  const [cards, setCards] = React.useState([]);



  React.useEffect(() => {
    // запрос в API за пользовательскими данными
    apiData.getUserData()
    .then(res => {
      handleGetUserName(res.name);
      handleGetUserDescription(res.about); 
      handleGetUserAvatar(res.avatar);
    })
    .catch((err) => {
      console.log(err); // "Что-то пошло не так: ..."
      return [];
    })
  });

  React.useEffect(() => {
    // запрос в API за карточками мест
    apiData.getInitialCards()
    .then(items => {
      setCards(items);
    })
    .catch((err) => {
      console.log(err); // "Что-то пошло не так: ..."
      return [];
    })
  }, []);

  function CardList(props) {
    const cards = props.cards;
    const listCards = cards.map((card) =>
      <Card card={card} onCardClick={props.onCardClick} />
    );
    return (
      <section className="elements">
        {listCards}
      </section>
    );
  }

  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-conteiner">
          <div className="profile__avatar-overlay"></div>
          <img src={userAvatar} alt={userName} className="profile__avatar"  />
          <button className="profile__avatar-button" onClick={props.onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <div className="profile__title-block">
            <h1 className="profile__title">{userName}</h1>
            <button className="profile__edit-button" type="button"  onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__text">{userDescription}</p>
        </div>
        <button className="profile__add-button" type="button"  onClick={props.onAddPlace}></button>
      </section>
      <CardList cards={cards} onCardClick={props.onCardClick}/>
    </main>
  );
}


    
export default Main;

