import React from 'react';

function Card(props) {

  handleClick = handleClick.bind(this);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = props.card.owner._id === props.currentUser._id;

  // Создаём переменную, которую после зададим в `className` для кнопки удаления
  const cardDeleteButtonClassName = (
  ` ${isOwn ? 'element__remove-button' : 'element__remove-button_hidden'}`
  ); 

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = props.card.likes.some(i => i._id === props.currentUser._id);

  // Создаём переменную, которую после зададим в `className` для кнопки лайка
  const cardLikeButtonClassName = (
    `element__heart-button  ${isLiked ? 'element__heart-button-active' : ' '}`
  );

  function  handleClick()  {
    props.onCardClick(props.card);
  } 



  return(
    <article className="element">
      <img src={props.card.link} alt={props.card.name} className="element__image"  onClick={handleClick} />
      <button className={cardDeleteButtonClassName}  type="button" ></button>
      <div className="element__title-block">
        <p className="element__title">{props.card.name}</p>
        <div className="element__likes">
          <button className={cardLikeButtonClassName}  type="button"></button>
          <p className="element__likes-number">{props.card.likes.length}</p>
        </div>
      </div>
    </article>
  );

}



  
export default Card; 