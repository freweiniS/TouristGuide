
window.onload=function(){
  const submitform = document.getElementById('submitform')
  submitform.addEventListener('click', function () {
    console.log("yes");
    sendMessage();

  });
}
async function sendMessage() {
  const submitArray = document.querySelectorAll('.submitField');
  const submitObject = {}
  for (const submitElem of submitArray) {
  submitObject[submitElem.id] = submitElem.value;
}

const response = await fetch('/api', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(submitObject),
  });
  if (response.ok) {
  // when all questions are answered it display end message.
    window.location = ('blog1.html');
  } else {
    console.log('failed to send message');
  }
}
