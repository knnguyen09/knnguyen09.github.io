function checkMobileDevice()
{
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
	{
		document.getElementById('iphoneDevice').style.display = 'none';
		document.getElementById('iPadDevice').style.display = 'none';
		document.getElementById('iMacDevice').style.display = 'none';
	}
}

function returnToiPhone5sSize()
{
    var width=350;
	var height=600;
	self.moveTo(0, 0);
	self.resizeTo(width,height);
	return false;
}

function returnToiPadAirSize()
{
    var width=1000;
	var height=1500;
	self.moveTo(0, 0);
	self.resizeTo(width,height);
	return false;
}

function returnToDesktopSize()
{
	self.moveTo(0, 0);
	self.resizeTo(screen.width, screen.height);
	return false;
}