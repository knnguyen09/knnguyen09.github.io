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
	self.moveTo(0, 0);
	self.resizeTo(width,height);
	return false;
}

function returnToDesktopSize()
{
	self.moveTo(0, 0);
	self.resizeTo(screen.availwidth, screen.availheight);
	return false;
}