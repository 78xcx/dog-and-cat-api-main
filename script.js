let current_dog;
let current_cat;
let selected_dog = [];
let selected_cat = [];


$(document).ready(function(){

  // 강아지 고양이 사진 저장되어 잇다면 가져와서 저장한다.
  const loadedDogImages = localStorage.getItem("dog_images");
  if(loadedDogImages !== null){
    const parseDogImages = JSON.parse(loadedDogImages)
    for(let i = 0 ; i < parseDogImages.length; i++){
      selected_dog.push(parseDogImages[i])
    }
  }
  
  const loadedCatImages = localStorage.getItem("cat_images");
  if(loadedCatImages !== null){
    const parseCatImages = JSON.parse(loadedCatImages)
    for(let i = 0 ; i < parseCatImages.length; i++){
      selected_cat.push(parseCatImages[i])
    }
  }
  
  
  $("#dog-button").click(function(){
  
    $.ajax({
      url:"https://dog.ceo/api/breeds/image/random",
      success:function(result){
        current_dog = result.message;
        $("#dog-img")[0].src = result.message
      }
      
    })
    
  })
  
  $("#dog-gola").click(function(){
    if(!selected_dog.includes(current_dog)){
      selected_dog.push(current_dog)
    }
    localStorage.setItem("dog_images", JSON.stringify(selected_dog));
  }) 

  
  $("#cat-gola").click(function(){
    if(!selected_cat.includes(current_cat)){
      selected_cat.push(current_cat)
    }
    localStorage.setItem("cat_images", JSON.stringify(selected_cat));
  })
                         
                         
  $("#cat-button").click(function(){
    
    $.ajax({
      url:"https://cat.beansdrawer.com/api/breeds/image/random",
      success:function(result){
        current_cat = result.message;
        $("#cat-img")[0].src = result.message
      }
    })
  })
  
})