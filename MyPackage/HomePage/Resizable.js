function returnToiPhone5sSize()
{
    var width=340;
	var height=560;
	self.moveTo(0, 0);
	self.resizeTo(width,height);
	return false;
}

function returnToiPadAirSize()
{
    var width=678;
	var height=500;
	self.moveTo((screen.availwidth-width)/2,(screen.availheight-height)/2);
	self.resizeTo(width,height);
	return false;
}

function returnToDesktopSize()
{
    var width=678;
	var height=500;
	self.moveTo((screen.availwidth-width)/2,(screen.availheight-height)/2);
	self.resizeTo(width,height);
	return false;
}