class Fatch{

    activ(){

        fetch('http://localhost:3000/toto')
        .then(response => response.json())
        .then(data => doit(data));


      async  function doit(msg){
            
                    try{

                        await  fetch('http://localhost:3000/toto/lolo')
                        .then(response => response.json())
                        .then(data => console.log(data));



             await  fetch('http://localhost:3000/toto/toto')
            .then(response => response.json())
            .then(data => set(data));
          
          function set(data){
              console.log(data.data)
                let arr = [[],[],[],[]];
                let counter = 0;
                for(let i = 0; i< 4; i++){
                   for(let k = 0; k< 7; k++){
                       arr[i][k] = data.data[counter]
                       counter++
                       arr[i][0] = ''
                   }
               
                }
          
          
                localStorage.setItem('num', JSON.stringify(arr))
                console.log(arr)
    
                let sigh = new Sigh;
                sigh.active(arr)
          
            }

                        
                    }catch(e){
                        console.log(e)
                    }
          
          
            
        }



    
    }
}