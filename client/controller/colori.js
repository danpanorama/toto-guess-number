class Color{
    active(){
        let numberloto = document.querySelectorAll('.input');
        let nums = document.querySelectorAll('.col');
        let arr =[];
        let yesh = [];

        nums.forEach((r)=>{
            yesh.push(r.innerText)
               });

        numberloto.forEach((e)=>{
                arr.push(e.value);
        });


        for(let i = 0; i< yesh.length; i++){
            for(let j = 0; j < arr.length; j++){
                if(yesh[i] == arr[j]){
                    document.getElementById(arr[j]).style.backgroundColor = 'black';
                    document.getElementById(arr[j]).style.color = 'white';
                }
            }
        }

       

    
    }


    deletecolor(element){
        let counter = 0;
        document.querySelectorAll('.input').forEach((e)=>{
         
                if(e.value == element.value){
                    counter++
                }
        })
       if(counter <= 1){
           console.log('npw',element.value)
           
       if(element.value){
        document.getElementById(element.value).style.backgroundColor = 'pink';
        document.getElementById(element.value).style.color = 'black';
       }

       }


    }


}