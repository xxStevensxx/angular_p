exports.rainstars = function(){

    let space_home = document.getElementById("space_home");

  let amount = 100;
  let i = 0;

      while(i < amount){

          let drop = document.createElement('i');
          drop.classList.add("stars");

          let size = Math.random() * 5;
          let posX = Math.floor(Math.random() * window.innerWidth);
          let delay = Math.random() * -20;
          let duration = Math.random() * 2;

          drop.style.width = size + 'px';
          drop.style.left = posX + 'px';
          drop.style.animationDelay = delay + 's';
          drop.style.animationDuration = 1 + duration + 's';

          space_home.appendChild(drop);
          i++;

      }
      console.log(space_home);
}
