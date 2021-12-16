let item = 0;

function addItem(){
item ++;
}
 
function onClick(){
  addEventListener("click", addItem())
}

onClick();

function restart (){
    if (item > 0){
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(window.alert("you have items waiting in the cart!"));
            }, 300);

            
          }); 

      
    }
      }

restart();
      
    
    

    
      
