import CardsRow from '../components/CardsRow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSteam, faPlaystation, faXbox } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';


const api = "https://cors-anywhere.herokuapp.com/https://api.steampowered.com/ISteamApps/GetAppList/v0002/";
let options = {
    url: api,
    cacheKey: api,
    cacheTLL: 1000*60*60
};

function name_exact(name) {
  return fetch(api)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      return data.applist.apps.find(a => a.name === name);
    })
    .catch((error) => {
      console.error('There has been a problem with your fetch operation:', error);
    });
}

function SteamGames() {

  const [cards, setCards] = useState([]);


  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "http://52.14.183.91/recommendation",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "games": [
              "Call of Duty: Modern Warfare 2",
              "Prototype 2",
              "Grand Theft Auto V",
              "Killing Floor 2",
              "DOOM",
              "Assassin's Creed Syndicate",
              "NieR:Automata"
            ]
          })
        }
      )
      const responseData = await response.json(); 
      setData(responseData);
      const gameNames = responseData.related.slice(0, 10).map(game => game[0]);
      let newCards = [];
      // Fetch the 'appid' for each game
      gameNames.forEach(async (gameName) => {
        const gameData = await name_exact(gameName);
        if (gameData) {
          console.log(gameData.appid, `https://steamcdn-a.akamaihd.net/steam/apps/${gameData.appid}/header.jpg`);
          newCards = [...newCards, {id: gameData.appid, imageURL: `https://steamcdn-a.akamaihd.net/steam/apps/${gameData.appid}/header.jpg`}]
        }
        setCards(newCards)
      });
    }

    getData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className='pageContainer'>
      <div className='sideBar'>
        <Link to="/videojuegos/steam">
          <FontAwesomeIcon className='platform-icon sidebar-icon sidebar-icon-active' icon={faSteam} />
        </Link>
        <Link to="/videojuegos/playStation">
          <FontAwesomeIcon className='platform-icon sidebar-icon' icon={faPlaystation} />
        </Link>
        <Link to="/videojuegos/xbox">
          <FontAwesomeIcon className='platform-icon sidebar-icon' icon={faXbox} />
        </Link>
      </div>
      <div className='pageHeader'>
        <CardsRow title='Videojuegos Recomendados' cards={cards} />
      </div>
    </div>
  );
}

export default SteamGames;
