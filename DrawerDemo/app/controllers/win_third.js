var args = arguments[0] || {};
var onClose = function() {
	$.win_third.close();
};

$.win_third.addEventListener('open', function(e) {
	Alloy.Globals.changeOPenMode(false);
});
$.win_third.addEventListener('close', function(e) {
	Alloy.Globals.changeOPenMode(true);
});
