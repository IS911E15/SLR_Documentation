




/*
     FILE ARCHIVED ON 20:19:39 mar 16, 2007 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 9:49:04 maj 13, 2015.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
function initMouseEvents() {
	document.onmousedown = mouseDown
	document.onmousemove = mouseMove
	document.onmouseup = mouseUp
	document.onselectstart = selectStart
	if (bw.ns4) document.captureEvents(Event.MOUSEDOWN | Event.MOUSEMOVE | Event.MOUSEUP)
}

function cancelMouseEvents() {
	if (bw.ns4) document.releaseEvents(Event.MOUSEDOWN | Event.MOUSEMOVE | Event.MOUSEUP)
}

function mouseDown(e) {
	if ((bw.ns4 && e.which!=1) || (bw.ie5 && event.button!=1)) return true
	var x = (bw.ns4)? e.pageX : event.x+document.body.scrollLeft
	var y = (bw.ns4)? e.pageY : event.y+document.body.scrollTop
	return objMouseDown(x,y)
}

function mouseMove(e) {
	var x = (bw.ns4)? e.pageX : event.x+document.body.scrollLeft
	var y = (bw.ns4)? e.pageY : event.y+document.body.scrollTop
	return objMouseMove(x,y)
}

function mouseUp(e) {
	var x = (bw.ns4)? e.pageX : event.x+document.body.scrollLeft
	var y = (bw.ns4)? e.pageY : event.y+document.body.scrollTop
	return objMouseUp(x,y)
}

function selectStart(e){
	objElement = window.event.srcElement
	if (objElement.name && objElement.name.indexOf("txt")!=-1)
		return true
	else
		return false
}
