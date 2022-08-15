class Num{
    active(){
        let count = 1
         let num = document.querySelectorAll('.col').forEach((e)=>{
             let p = document.createElement('p');
             p.innerText = e.id
             p.classList.add('pnum')
             p.id = count++
             e.appendChild(p)
             e.style.backgroundColor = 'pink'
             function clicker(e){
                

                    let chacke = new Click;
                    chacke.start(e.target.id)
                    
                
             }

             
             e.addEventListener('click',clicker)

             
         
                

        })
    }
}