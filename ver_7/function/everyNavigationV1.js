class EveryNavigation{
    constructor() {
        window.addEventListener("hashchange", this.onRouteChange);
        this.view = document.querySelector('#actionSpaceContainer');
        
    }
    onRouteChange(e) {
        const hashLocation = window.location.hash.substring(1);
        console.log(hashLocation);
        this.loadContent(hashLocation);


       
    }
    loadContent(uri) {
        const URIJSON = [uri];
        this.updateView(URIJSON);
        
    }
    updateView(content, parent) {
      
        
    }
    init() {
        //when the page loads
        //check the state or hash value or both
        this.checkState(); //when the page loads
        //add listeners for nav bar
        //add listeners for popstate OR hashchange
        this.addListeners();
    console.log("navigation Initiated")
        //this.updateLayout('earth');
    }
    addListeners() {
      //  document.querySelector('nav').addEventListener('click', this.nav);

        window.addEventListener('popstate', this.checkState);
        //when the user clicks back or forward
        //window.addEventListener('hashchange', this.tempHC);
    }
    checkState() {
        //do we want to drive our this by state or fragment-identifier(hash) or query?
        //called when page loads AND after a popstate event
        console.log(location);
        console.log(history);
        if (!location.hash) {
            //default first load
            history.replaceState(
                { home: 'Earth', name: 'James Holden' },
                '',
                '#earth'
            );
            document.title = 'Earth';
            this.updateLayout('earth');
        } else {
            let hash = location.hash.replace('#', '');
            this.updateLayout(hash);
            document.title = hash; //first letter to uppercase needed
        }
    }
    nav(ev) {
        ev.preventDefault();
        let anchor = ev.target;
        let home = anchor.getAttribute('data-home');
        let name = anchor.getAttribute('data-name');
        let state = {
            home,
            name,
        };
        let hash = `#${home.toLowerCase()}`;
        history.pushState(state, '', hash);
        document.title = home;
        this.updateLayout(home.toLowerCase());
    }
    updateLayout(place) {
        //accept a className and update the interface based on that
        let main = document.querySelector('body');
        main.className = place;
    }

}
var actionSpaceNavigator = new EveryNavigation();
//document.addEventListener('DOMContentLoaded', everyNavigation.init);
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    
   // actionSpaceNavigator.init();
});