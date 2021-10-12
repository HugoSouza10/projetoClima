document.body.addEventListener('keyup',(event)=>{
      playSong(event.code.toLocaleLowerCase());
     
});

document.querySelector('.composer button').addEventListener('click',()=>{
    let input =  document.querySelector('#input').value;
    if(input!==''){
        composition(input);
    }
});




function playSong(song){
   let audioElement = document.querySelector(`#s_${song}`);
   let keyElement = document.querySelector(`div[data-key=${song}]`);


   if(audioElement){
       audioElement.currentTime = 0;
       audioElement.play();
   }

   if(keyElement){
        keyElement.classList.add('active');
        setTimeout(()=>{
            keyElement.classList.remove('active');
        },300);
   }
  
}


function composition(input){
   let inputArray = input.split('');

    let timer = 0;
    inputArray.map(songArray => {
        setTimeout(()=>{
            playSong(`key${songArray}`);
        },timer);

        timer +=250;
    });
     
}


//KeyCOde pega o número do código da letra