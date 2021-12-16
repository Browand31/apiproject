let item = 1;

function restart (){
    if (item > 0){
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve('foo');
            }, 300);
          }); 
        }
        else{
            console.log("All good!")
        }
      if (myPromise = reject){
          window.alert("please refresh the page!")
      }
    }

    

