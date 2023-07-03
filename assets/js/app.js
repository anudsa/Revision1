const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const dataName = document.querySelector('name');
const dataBlog = document.querySelector('#blog');
const dataLocation = document.querySelector('.location');

async function displayUser(username) {
  dataName.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
  dataName.textContent = '${data.name}';
  dataBlog.textContent = '${data.blog}';
  dataLocation.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);