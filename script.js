function calculateDogAge() {

    let sizE= document.getElementById("breed").value;
    let age= document.getElementById("years").value;

   
 if  ( age >= 1 && age <99  && sizE == "Labrador Mortus")
    dogAge = "Immortal"
    else if (age == 1 && sizE == "Labrador"){
    dogAge = 15
   } 
   else if (age<16 && sizE == "Labrador" && age > 1){
    dogAge = 24 + 4*(age-2) 
}

    
  
   
    document.getElementById('result').innerHTML= dogAge + ' years old.';
   
    
  }







  