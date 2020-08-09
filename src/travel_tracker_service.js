async function isValidTraveler(usernameInput) {
  const userId = usernameInput.slice(8);
  const url = 'https://fe-apps.herokuapp.com/api/v1/travel-tracker/data/travelers/travelers';
  let response = await fetch(url);
  let awaitRes = await response.json();
  let travelers = awaitRes.travelers;
  let idToNum = Number(userId);
  let idsArray = [];
  let valid = false;
  travelers.forEach(traveler => {
    idsArray.push(traveler.id);
  });

  idsArray.forEach(id => {
    if (idToNum === id) {
      valid = true;
    }
  });
  return valid;
}

export { isValidTraveler }