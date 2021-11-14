fetch('http://api.oneequity-staking-pool.com/WebsiteInfo')
  .then(response => response.json())
  .then(characters => showCharacters(characters.results));



showCharacters = characters => {
  const charactersDiv = document.querySelector('#tombola_info');
  characters.forEach(character => {
    const characterElement = document.createElement('p');
    characterElement.innerText = 'ROA: ${character.name}';
    charactersDiv.append(characterElement);
  });
}
