var args = arguments[0] || {};
Ti.API.info('Index Win :' + args.winIndex);
$.drawer.open();
function toggle(e) {
	var fn = 'toggle' + e.source.title + 'Window';
	$.drawer[fn]();
}

var openFirst = function() {
	Ti.API.info('win_first :');
	var win_first = Alloy.createController('win_first').getView();
	Ti.API.info('win_first :' + JSON.stringify(win_first));
	$.drawer.setCenterWindow(win_first);
	$.drawer.toggleLeftWindow();
	if (OS_IOS) {
		if (Alloy.Globals.navDrawer) {
			Alloy.Globals.navDrawer.close();
			Alloy.Globals.navDrawer = null;
		}
		Alloy.Globals.navDrawer = win_first;
	}
};
var openSecond = function() {
	Ti.API.info('opensecond :');
	var win_second = Alloy.createController('win_second').getView();
	Ti.API.info('win_second :' + JSON.stringify(win_second));
	$.drawer.setCenterWindow(win_second);
	$.drawer.toggleLeftWindow();
	if (OS_IOS) {
		if (Alloy.Globals.navDrawer) {
			Alloy.Globals.navDrawer.close();
			Alloy.Globals.navDrawer = null;
		}
		Alloy.Globals.navDrawer = win_second;
	}
};
var closeDrawer = function() {

	$.drawer.instance.close();
	$.drawer.instance = null;
	$.drawer = null;
	$.destroy();

};
var openFromCenter = function() {
	var third_win = Alloy.createController('win_third').getView();
	if (OS_IOS) {
		$.NavigationWindow.openWindow(third_win, {
			animated : true
		});
	} else {
		third_win.open();
	}
};
switch(args.winIndex) {
	case 0:
		// openFirst();
		Ti.API.info('Set Drawer Center window as First');
		break;
	case 1:
		// openSecond();
		Ti.API.info('Set Drawer Center window as Second');
		break;
	case 2:
		closeDrawer();
		Ti.API.info('Close Drawer');
		break;
}

$.drawer.addEventListener('windowDidOpen', function(e) {
	Ti.API.info("windowDidOpen");
});
$.drawer.addEventListener('windowDidClose', function(e) {
	Ti.API.info("windowDidClose");
});

$.drawer.setShouldStretchDrawer(false);
$.drawer.setAnimationMode($.drawer.module.ANIMATION_SLIDE_SCALE);
Alloy.Globals.changeOPenMode = function(isAll) {
	if (isAll) {
		$.drawer.setOpenDrawerGestureMode($.drawer.module.OPEN_MODE_ALL);
	} else {
		$.drawer.setOpenDrawerGestureMode($.drawer.module.OPEN_MODE_NONE);
	}
};
Alloy.Globals.navDrawer = $.NavigationWindow;
