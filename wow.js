
  
const dogs = JSON.parse(localStorage.getItem("dog_images"))
const cats = JSON.parse(localStorage.getItem("cat_images"))

function deleteDog(event, main, sub, name){
  const src = event.target.src
  var delIdx = undefined;
  for(let i = 0 ; i < main.length; i++){
    if(main[i] == src){
      delIdx = i;
    }
  }
  main.splice(delIdx, 1);
  if(name == "dogs") localStorage.setItem("dog_images", JSON.stringify(main));
  else localStorage.setItem("cat_images", JSON.stringify(main));

  event.target.parentNode.innerHTML = "";

  if(dogs != null){
    for(let i = 0; i < dogs.length; i++){
      const img = document.createElement("img");
      img.src = dogs[i];
      img.addEventListener('click', function(e){ deleteDog(e, dogs, cats, "dogs") } );
      document.querySelector("#gola__img").appendChild(img)
    }
  }
  if(cats != null){
    for(let i = 0; i < cats.length; i++){
      const img = document.createElement("img");
      img.src = cats[i];
      img.addEventListener('click', function(e){ deleteDog(e, cats, dogs, "cats") } );
      document.querySelector("#gola__img").appendChild(img)
    }
  }

}

$(document).ready(function(){
  console.log(dogs, cats)

  if(dogs != null){
    for(let i = 0; i < dogs.length; i++){
      const img = document.createElement("img");
      img.src = dogs[i];
      img.addEventListener('click', function(e){ deleteDog(e, dogs, cats, "dogs") } );
      document.querySelector("#gola__img").appendChild(img)
    }
  }
  if(cats != null){
    for(let i = 0; i < cats.length; i++){
      const img = document.createElement("img");
      img.src = cats[i];
      img.addEventListener('click', function(e){ deleteDog(e, cats, dogs, "cats") } );
      document.querySelector("#gola__img").appendChild(img)
    }
  }

  
})