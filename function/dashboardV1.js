var response2;
indexDB.set('recentStories', recentStories);
indexDB.set('userDashboard', userDashboard);
var actionSpaceElementInstanceIndom = document.getElementById('actionSpaceContainer');
var actionSpaceInstance = new Entity(userDashboard, actionSpaceElementInstanceIndom);
console.log(actionSpaceInstance.entity);