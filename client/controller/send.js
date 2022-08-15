class Send{
    send(){
        let result = document.getElementById('result');
        var counter = 0;
        document.getElementById('btn').addEventListener('click',(e)=>{
            let div = document.createElement('div')
            div.classList.add('flexrow')
            div.setAttribute('id',JSON.stringify(counter))
            
            document.querySelectorAll('.input').forEach((e)=>{
                if(e.value != ''){
                    let p = document.createElement('p');
                    p.innerText = e.value;
                    div.appendChild(p)    
                }
            })
            console.log(counter)
        

            document.querySelectorAll('.input').forEach((e)=>{
             e.value=''
            })
           
            result.appendChild(div)
        })


     
 
    }
}