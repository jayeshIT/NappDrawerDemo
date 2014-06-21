exports.createNavigationWindow = function(args) {
	var navWin = OS_IOS ? Ti.UI.iOS.createNavigationWindow(args) : new NavigationWindow(args);
	if (args && args.id) {
		Alloy.Globals[args.id] = navWin;
	}
	return navWin;
};

exports.createWindow = function(args) {
	if (OS_IOS) {
		return Ti.UI.createWindow(args);
	} else {
		return Ti.UI.createView(args);
	}
};
