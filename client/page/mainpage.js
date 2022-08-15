class Mainpage{

    show(){
        let nav = document.getElementById('main');
        if(nav.firstChild){
            nav.removeChild(nav.firstChild)
        }

    

        nav.innerHTML=`

        <div class="">

        <div class="inputsin">
        <button>delete</button>
        <div class="holdinputs">
          <input   class='input' max='1' type="number" name="a" id="a1">
          <input   class='input' max='1' type="number" name="b" id="b1">
          <input   class='input' max='1' type="number" name="c" id="c1">
          <input   class='input' max='1' type="number" name="d" id="d1">
          <input   class='input' max='1' type="number" name="e" id="e1">
          <input   class='input' max='1' type="number" name="f" id="f1">
        </div>

        <div class='buttons'>
        <button class='btn' id='btn' >send</button>
        </div>
        
        <div class="result" id='result'>

        </div>
      
      </div>
 
    </div>

        
        `

        let send = new Send;
        send.send()
        

    }


}