class Nav{

    show(){
        let nav = document.getElementById('numbers');
        if(nav.firstChild){
            nav.removeChild(nav.firstChild)
        }

        nav.innerHTML=`

        <div class="table">
        <div class="grid">
           
        <div class="col" id="1"></div>
        <div class="col" id="2" ></div>
        <div class="col" id="3"></div>
        <div class="col" id="4"></div>
        <div class="col" id="5"></div>
        <div class="col" id="6"></div>
        <div class="col" id="7"></div>
        <div class="col" id="8"></div>
        <div class="col" id="9"></div>
        <div class="col" id="10"></div>
        <div class="col" id="11"></div>
        <div class="col" id="12"></div>
        <div class="col" id="13"></div>
        <div class="col" id="14"></div>
        <div class="col" id="15"></div>
        <div class="col" id="16"></div>
        <div class="col" id="17"></div>
        <div class="col" id="18"></div>
        <div class="col" id="19"></div>
        <div class="col" id="20"></div>
        <div class="col" id="21"></div>
        <div class="col" id="22"></div>
        <div class="col" id="23"></div>
        <div class="col" id="24"></div>
        <div class="col" id="25"></div>
        <div class="col" id="26"></div>
        <div class="col" id="27"></div>
        <div class="col" id="28"></div>
        <div class="col" id="29"></div>
        <div class="col" id="30"></div>
        <div class="col" id="31"></div>
        <div class="col" id="32"></div>
        <div class="col" id="33"></div>
        <div class="col" id="34"></div>
        <div class="col" id="35"></div>
        <div class="col" id="36"></div>
        <div class="col" id="37"></div>


        </div>
    </div>

        
        `
let num = new Num;
num.active()
    }


}