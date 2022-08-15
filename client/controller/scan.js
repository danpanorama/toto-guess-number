class Scan{
    activ(element){
        let theplace = document.getElementById(element);
        let totonum = localStorage.getItem('num')
        let counterB =JSON.parse(localStorage.getItem('counterBl')) 
        let totoparse = JSON.parse(totonum)
        

        if(counterB >= '3'){
            console.log('ppp')
            let array = []
             for(let o = 1 ; o <= 37; o++){
            for(let c =0; c< totoparse.length; c++){
                for(let y =0;y< totoparse[c].length; y++){
                    if(totoparse[c][y]!="" ){   
                        
                            if(o != totoparse[c][y]){
                             
                                console.log(o)
                           

   
                           
                        }
                    }
                    else{
                       continue
                    } }


                    // else if( theplace.value !== totoparse[c][y]){
                    //     console.log(theplace.value,totoparse[c][y])
                    //    document.getElementById(totoparse[c][y]).style.backgroundColor = 'blue'

                    // }
                    
                                                
                }
            }
            console.log(array)
        }





        for(let i =0; i< totoparse.length; i++){
            for(let k =0; k< totoparse[i].length; k++){
                        if(theplace.value == totoparse[i][k]){
                         continue
                            
                        }else{
                            counterB++
                            localStorage.setItem('counterBl', JSON.stringify(counterB));
                            if(counterB >= 3){
                             
                             console.log("yes")
                           
                            }
                            

                          console.log(localStorage.getItem('counterBl'))                      
                           return   
                        }
                        
               
                    }
                   
            }
         
        




     
    }
}