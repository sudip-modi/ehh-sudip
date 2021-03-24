const APP = {
  init() {
    //when the page loads
    //check the state or hash value or both
    APP.checkState(); //when the page loads
    //add listeners for nav bar
    //add listeners for popstate OR hashchange
    APP.addListeners();

    //APP.updateLayout('earth');
  },
  addListeners() {
    document.querySelector('nav').addEventListener('click', APP.nav);

    window.addEventListener('popstate', APP.checkState);
    //when the user clicks back or forward
    //window.addEventListener('hashchange', APP.tempHC);
  },
  // tempPop(ev) {
  //   console.log('popstate');
  //   console.log(history.state);
  // },
  // tempHC(ev) {
  //   console.log('hashchange');
  //   console.log(history.state);
  // },
  checkState() {
    //do we want to drive our app by state or fragment-identifier(hash) or query?
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
      APP.updateLayout('earth');
    } else {
      let hash = location.hash.replace('#', '');
      APP.updateLayout(hash);
      document.title = hash; //first letter to uppercase needed
    }
  },
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
    APP.updateLayout(home.toLowerCase());
  },
  updateLayout(place) {
    //accept a className and update the interface based on that
    let main = document.querySelector('main');
    main.className = place;
  },
};

document.addEventListener('DOMContentLoaded', APP.init);
