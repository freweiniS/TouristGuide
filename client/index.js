



  async function getData(){
  const res = await fetch('/api');
  const data =await res.json();
  for(item of data) {
  const answer = document.createElement('div');
  answer.className = 'ans';
  const answers = document.querySelector('#plancreated');
  const ul = document.createElement('ul');

  const name = document.createElement('li');
  const SelectedDate = document.createElement('li');
  const SelectedTime = document.createElement('li');

  name.textContent = 'Place-Name:' + item.placename;
SelectedDate.textContent = 'Date:' + item.plandate;
  SelectedTime.textContent = 'Time:' + item.plantime;

  ul.appendChild(name);
  ul.appendChild(question);
  ul.appendChild(favouriteColour);
  answer.appendChild(ul);
  answers.append(answer);
  }
  }

getData();




   function onSignIn(googleUser) {
var  profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    const signin = document.querySelector('.g-signin2');
    signin.style.display = 'none';
    const data = document.querySelector('.data')
    data.style.display = 'block';
  }
exports.getData = getData;
