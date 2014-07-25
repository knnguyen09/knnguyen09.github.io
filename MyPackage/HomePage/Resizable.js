function returnToiPhone5SSize()
{
    var width=640;
	var height=1096;
	self.moveTo((screen.availwidth-width)/2,(screen.availheight-height)/2);
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