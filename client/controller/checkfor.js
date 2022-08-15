class Config{
    check(element){
        let theplace = document.getElementById(element);
        let totonum = localStorage.getItem('num')
        let counter =JSON.parse(localStorage.getItem('counterAl')) 
        let counterB =JSON.parse(localStorage.getItem('counterBl')) 
        let totoparse = JSON.parse(totonum)
        for(let i =0; i< totoparse.length; i++){
            for(let k =0; k< totoparse[i].length; k++){
                        if(theplace.value==totoparse[i][k]){
                            counter++
                            localStorage.setItem('counterAl', JSON.stringify(counter));
                            if(counter >= 4){
                                for(let c =0; c< totoparse.length; c++){
                                    for(let y =0;y< totoparse[c].length; y++){
                                        if(totoparse[c][y]==""){   
                                            continue
                                        }else{
                                            document.getElementById(totoparse[c][y]).style.backgroundColor = 'red'
                                        }                                
                                    }
                                }
                            }
                            

                          console.log(localStorage.getItem('counterAl'))                      
                            return
                            
                        }
                        
               
                    }
                   
            }
        




     

    }



     deleted(element){
       
        let num = document.getElementById(element);
        let totonum = localStorage.getItem('num')
        let counter =JSON.parse(localStorage.getItem('counterAl')) 
        let totoparse = JSON.parse(totonum)
        let isther = false
        

        for(let i =0; i< totoparse.length; i++){
            for(let k =0; k< totoparse[i].length; k++){
                        if(num.value==totoparse[i][k]){
                            isther = true;
                         
                           
                            
                        }
                        
               
                    }
                   
            }
            if(isther){
                counter = counter - 1
                localStorage.setItem('counterAl', JSON.stringify(counter));
              console.log(localStorage.getItem('counterAl'))
              if(counter < 4){
                for(let c =0; c< totoparse.length; c++){
                    for(let y =0;y< totoparse[c].length; y++){
                        if(totoparse[c][y]==""){
                            
                            continue
                        }else{
                            document.getElementById(totoparse[c][y]).style.backgroundColor = 'green'
                          
                        
                        }
                       
               
                    }
                }


            }
            }
        
         

console.log(counter)

     

    }







}