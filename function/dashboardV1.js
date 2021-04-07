var response2;
indexDB.set('recentStories', recentStories);
indexDB.set('userDashboard', userDashboard);
// var viewModel = indexDB.get('userDashboard');
// response2 = viewModel.then((viewModelFromIndexDb) => {
//     //  console.log("here", viewModelFromIndexDb);
//     // expected output: "Success!"
//     var response = viewModelFromIndexDb;
//     console.log(response);


//     //    test(response)
//     return response;
// });
// console.log(response2)
var actionSpaceElementInstanceIndom = document.getElementById('actionSpaceContainer');
var actionSpaceInstance = new Entity(userDashboard, actionSpaceElementInstanceIndom);
console.log(actionSpaceInstance.entity);