const story = document.querySelector('.story');
const buttonn = document.querySelector('.buttonn');
const textt = document.querySelector('.textt');

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
  }
  
  let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
  let insertX = ['Willy the Goblin','Big Daddy','Father Christmas'];   
  let insertY = ['the soup kitchen','Disneyland','the White House'];
  let insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];
   
  buttonn.addEventListener('click', result);
  
  function result() {
    let newStory = storyText;
  
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);
  
    newStory = newStory.replace(':insertx:',xItem);
    newStory = newStory.replace(':insertx:',xItem);
    newStory = newStory.replace(':inserty:',yItem);
    newStory = newStory.replace(':insertz:',zItem);
  
    if(textt.value !== '') {
      const name = textt.value;
      newStory = newStory.replace('Bob',name);
    }
  
    if(document.getElementById("uk").checked) {
      const weight = Math.round(300*0.0714286) + ' stone';
      const temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';
      newStory = newStory.replace('94 fahrenheit',temperature);
      newStory = newStory.replace('300 pounds',weight);
    }
  
    story.textContent = newStory;
    story.style.visibility = 'visible';
    story.style.width = '250px';
  }