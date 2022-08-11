$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.talk-button').click(clickedTalkButton);
    $('.moveset-button').click(clickedMovesetButton);
    $('.use-move').click(clickedUseMoveButton);
    
    


  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    // added moves to pet
    var pet_info = {name:"Eevee", weight:"10", happiness:"4", moves:["Tackle","Swift", "Return", "Surf", "Last Resort","Rest"]};
  
    function clickedTreatButton() {
      var rand = Math.round(Math.random()*2);
      let result;
      switch(rand){
        case 0:
          result = " it ate its treat with delight!";
          break;
        case 1:
          result = " "+ pet_info.name + " ate the treat.";
          break;
        case 2:
          result = " it happily munched away.";
          break;
      }

      document.getElementById('txt').innerHTML = "You fed "+ pet_info.name + "," + result;
      // Increase pet happiness
      pet_info.happiness++;
      // Increase pet weight
      pet_info.weight++;
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      // Increase pet happiness
      pet_info.happiness++;
      // Decrease pet weight
      pet_info.weight--;
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      // Decrease pet happiness
      pet_info.happiness--;
      // Decrease pet weight
      pet_info.weight++;
      checkAndUpdatePetInfoInHtml();
    }

    // New Function, on click random interaction is given and a random output of 
    // pet's response based on random result
    function clickedTalkButton(){
      var rand=Math.round(Math.random()*100);
      if (rand >= 0 && rand <= 24){
        document.getElementById('txt').innerHTML = "You called " + pet_info.name + " , it responded back.";
        pet_info.happiness+= 1;
      }else if(rand >=25 && rand<=49){
        document.getElementById('txt').innerHTML = "You told " +pet_info.name + " a joke, based on its laughter it seemed to have understood it!";
        pet_info.happiness+= 3;
      }else if(rand >=50 && rand<=74 ){
        document.getElementById('txt').innerHTML = pet_info.name+ " started to stare at you, you stared back for a while until it looked away.";
      }else if(rand >=75 && rand<=100 ){
        document.getElementById('txt').innerHTML = "You asked if " + pet_info.name + " can evolve? It looked back with a confused look";
      }
      checkAndUpdatePetInfoInHtml();
    }
    // New Function, since this is a reference to pokemon, they have movesets
    // usually of 4 moves, but for this project, I will ignore that restriction
    function clickedMovesetButton(){
      var select = document.getElementById("pokemoves");
      var options = pet_info.moves;
      // populates a drop list using the moves from pet_info.moves
      // source for this implementation https://stackoverflow.com/questions/9895082/javascript-populate-drop-down-list-with-array
      for(var i = 0; i < options.length; i++) {
          var opt = options[i];
          var element = document.createElement("option");
          element.textContent = opt;
          element.value = opt;
          select.appendChild(element);
      }
      checkAndUpdatePetInfoInHtml();
    }

    function clickedUseMoveButton(){
      var selectedValue = document.getElementById("pokemoves").value;
      console.log(selectedValue);
      switch(selectedValue){
        case pet_info.moves[0]:
          document.getElementById('txt').innerHTML = pet_info.name + " used "+selectedValue + ".";
          pet_info.happiness+= 1;
          pet_info.weight-= 1;
          break;
        case pet_info.moves[1]:
          document.getElementById('txt').innerHTML = pet_info.name + " used "+selectedValue + ". It hit its mark without missing.";
          pet_info.happiness+= 2;
          pet_info.weight-= 2;
          break;
        case pet_info.moves[2]:
          var quote=""
          if(pet_info.happiness>=14){
            quote = ". It attacked with all its might and happily returned!"
            pet_info.happiness+= 3;
            pet_info.weight-= 1;
          }else{
            quote = ". It attacked and came back."
            pet_info.happiness+= 1;
            pet_info.weight-= 2;
          }
          document.getElementById('txt').innerHTML = pet_info.name + " used "+selectedValue + quote;
            break;
        case pet_info.moves[3]:
          document.getElementById('txt').innerHTML = pet_info.name + " used "+selectedValue+" .It caught a huge wave!";
          pet_info.happiness+= 2;
          pet_info.weight-= 2;
          break;
        case pet_info.moves[4]:
          document.getElementById('txt').innerHTML = pet_info.name + " used "+selectedValue + ". It used all its strength to unleash a strong attack!";
          pet_info.happiness+= 1;
          pet_info.weight-= 5;
          break;
        case pet_info.moves[5]:
          document.getElementById('txt').innerHTML = pet_info.name + " used "+selectedValue + ". It sleeps cozily and wakes up refreshed.";
          pet_info.happiness+= 4;
          pet_info.weight-= 0;
          break;
      }
      checkAndUpdatePetInfoInHtml();  
    }


    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero, set it back to zero
      if(pet_info.weight<=0)
        pet_info.weight=0;

      if(pet_info.happiness<=0)
        pet_info.happiness=0;
    }

    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
    }
  