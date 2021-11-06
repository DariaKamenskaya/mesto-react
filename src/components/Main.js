import React from 'react'; 
//
import  {apiData}  from '../utils/Api';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import {CurrentCardsContext}  from '../contexts/CurrentCardsContext'


function Main(props) {


  const [cards, setCards] = React.useState([]);
   // Подписываемся на контекст CurrentUserContext
  const userData = React.useContext(CurrentUserContext);
  // Подписываемся на контекст CurrentCardsContext
  const cardsData = React.useContext(CurrentCardsContext);



 {/* React.useEffect(() => {
    // запрос в API за пользовательскими данными
    Promise.all([ 
      apiData.getInitialCards()
    ])
    .then((res) => {
      setCards(res); //  [1]
    })
    .catch((err) => {
      console.log(err); // "Что-то пошло не так: ..."
      return [];
    })
  }, []); */} 

  function CardList(props) {
    const cards = props.cards;
    const listCards = cards.map((card,i) =>
      <Card card={card} onCardClick={props.onCardClick} key={card._id} />
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
          <img src={userData.avatar} alt={userData.name} className="profile__avatar"  />
          <button className="profile__avatar-button" onClick={props.onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <div className="profile__title-block">
            <h1 className="profile__title">{userData.name}</h1>
            <button className="profile__edit-button" type="button"  onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__text">{userData.about}</p>
        </div>
        <button className="profile__add-button" type="button"  onClick={props.onAddPlace}></button>
      </section>
     <CardList cards={cardsData} onCardClick={props.onCardClick}/>  
    </main>
  );
}


    
export default Main;

