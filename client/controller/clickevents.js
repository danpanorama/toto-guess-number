class Click{




   async start(element){
    try{
        let counter = [];
        let inputs = await document.querySelectorAll('.input').forEach((e,i)=>{ 
            counter[i] = {val:e.value,id:e.id}
        })
    
            let point = new Point;
            let a = point.point(element,counter)

            return

    }catch(e){
        console.log(e)
    }
    }


    delete(){
        let nums = document.querySelectorAll('.input').forEach((e)=>{
            console.log('gg')
                         e.addEventListener('click',(element)=>{
                             
                let cheacingfor = new Config;
                cheacingfor.deleted(element.target.id)

        let coliri = new Color;
            coliri.deletecolor(e)
        let arr =  localStorage.getItem('num');
        let arrp = JSON.parse(arr);
 

                
        


  if(element.target.value){
    let sigh = new Sigh;
    sigh.find(arrp,element.target.value)
  }     

                e.value = '' 
                return
            })
          
            
   

        })
      
    }
}