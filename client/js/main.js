class Main{

    start(){
        localStorage.setItem('counterAl', '0')
        localStorage.setItem('counterBl', '0')
        let nav = new Nav;
        nav.show()
        let main = new Mainpage;
        main.show()
        let fet = new Fatch;
        fet.activ()
        let chacke = new Click;
        chacke.delete()


 
        
    }
}