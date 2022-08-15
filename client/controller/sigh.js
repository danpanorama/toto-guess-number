class Sigh{
    active(arr){
        let arr1 = arr.filter((e,i)=>{
            return (! e == "")

        })

        for(let i = 0; i< arr1.length; i++){
            for(let j = 0; j < arr1[i].length; j++){
                for(let k = 0; k <= 37; k++){
                    if(arr1[i][j] == ""){
                        continue
                    }
                    else if(arr1[i][j] == k){
                        let nuum = JSON.stringify(k)
                        document.getElementById(nuum).style.backgroundColor = 'green';
                    }
                }
            }
        }

    }


    find(arr,num){
        console.log(arr)
        let arr1 = arr.filter((e,i)=>{
            return (! e == "")

        })

        for(let i = 0; i< arr1.length; i++){
            for(let j = 0; j < arr1[i].length; j++){
                if(arr1[i][j] == num){    
              document.getElementById(num).style.backgroundColor = 'green';
                    return
                }
              
            }
        }

    }
}
