var response2;
indexDB.set('recentStories', recentStories);
indexDB.set('userDashboard', userDashboard);
console.log(userDashboard)
StorageHelper.set('userDashboard', userDashboard);
var userDashboardFromStorage = StorageHelper.get('userDashboard');
console.log(userDashboardFromStorage)

var actionSpaceElementInstanceIndom = document.getElementById('actionSpaceContainer');
var actionSpaceInstance = new Entity(userDashboard, actionSpaceElementInstanceIndom);
console.log(actionSpaceInstance.entity);