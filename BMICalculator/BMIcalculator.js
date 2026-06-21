let form  = document.querySelector("form");

form.addEventListener("submit", function(e){
    e.preventDefault();

    let height = parseInt(document.querySelector("#height").value);
    let weight = parseInt(document.querySelector("#weight").value);
    let results = document.querySelector("#results");

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `<span>Please give a valid input ${height}</span>`;
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `<span>Please give a valid input ${weight}<span>`;
    }else{
        let bmi = (weight / ((height*height)/1000)).toFixed(2);
        results.innerHTML=`Your BMI is ${bmi}`;
         
        let h2 = document.querySelector("#Weight-Guide")
        
        if(bmi <= 18.6){
           h2.innerHTML = "<span>Under Weight</span>"
        }else if(bmi >=18.6 && bmi <= 24.9){
            h2.innerHTML = "<span>Normal BMI</span>"
        }else{
            h2.innerHTML = "<span>Overweight</span>"
        }
    }
    
})