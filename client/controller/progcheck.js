class Check{
    active(el){
        
        console.log(el)
        let counter_number_is_on = 0;
        let counter_number_is_off = 0;
        let arrnums = JSON.parse(localStorage.getItem('num'));


        for(let i = 0; i< arrnums.length; i++){
            for(let k = 0; k < arrnums[i].length; k++){
                if(el == arrnums[i][k]){
                    counter_number_is_on++
                    document.getElementById(el).style.backgroundColor = 'darkgray'
                  
                    if(counter_number_is_on >= 4){
                        let print = new Print;
                        print.active(arrnums)
                    }

                }
            }

           
        }
       


    }
}