var response2;
indexDB.set('recentStories', recentStories);
indexDB.set('userDashboard', userDashboard);
StorageHelper.set('userDashboard', userDashboard);
StorageHelper.get('userDashboard');

var actionSpaceElementInstanceIndom = document.getElementById('actionSpaceContainer');
var actionSpaceInstance = new Entity(userDashboard, actionSpaceElementInstanceIndom);
console.log(actionSpaceInstance.entity);