function returnToiPhone5sSize()
{
    var width=340;
	var height=560;
	self.moveTo(0, 0);
	self.resizeTo(width,height);
	document.getElementById(iphoneDevice).style.display = 'none';
		document.getElementById(iPadDevice).style.display = 'none';
		document.getElementById(iMacDevice).style.display = 'none';
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
	{
		document.getElementById(iphoneDevice).style.display = 'none';
		document.getElementById(iPadDevice).style.display = 'none';
		document.getElementById(iMacDevice).style.display = 'none';
	}
	return false;
}

function returnToiPadAirSize()
{
    var width=678;
	var height=500;
	self.moveTo(0, 0);
	self.resizeTo(width,height);
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
	{
		document.getElementById(iphoneDevice).style.display = 'none';
		document.getElementById(iPadDevice).style.display = 'none';
		document.getElementById(iMacDevice).style.display = 'none';
	}
	return false;
}

function returnToDesktopSize()
{
	self.moveTo(0, 0);
	self.resizeTo(screen.width, screen.height);
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
	{
		document.getElementById(iphoneDevice).style.display = 'none';
		document.getElementById(iPadDevice).style.display = 'none';
		document.getElementById(iMacDevice).style.display = 'none';
	}
	return false;
}