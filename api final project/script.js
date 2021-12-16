let item = 0;

function addItem(){
  function newItem(){item ++;}
item.addEventListener("click", newItem());
}
 
addItem();

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
      
    
    

    
      
