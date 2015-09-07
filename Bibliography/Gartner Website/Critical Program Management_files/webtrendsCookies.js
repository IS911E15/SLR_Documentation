




/*
     FILE ARCHIVED ON 20:18:07 mar 16, 2007 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 9:49:04 maj 13, 2015.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
<!-- START OF SDC Cookie Code -->
<!-- Copyright (c) 1996-2005 WebTrends Inc.  All rights reserved. -->
<!-- $DateTime: 2006/03/08 11:31:03 $ -->

var logServer="";
if ((window.location.hostname == "vaqa.gartner.com") ||
	(window.location.hostname == "pvs.gartner.com") ||
	(window.location.hostname == "wwwdva.gartner.com") ||
	(window.location.hostname == "wwwdvc.gartner.com") ||
	(window.location.hostname == "wwwdr.gartner.com")) {
	logServer="wtssdc-qa.gartner.com";
} else {
	logServer="wtssdc.gartner.com";
}
 
var gDomain=logServer;
var gDcsId="dcs2kf7dq10000sddxi7bvt9i_6o7e";
var gFpc="WT_FPC";
var gConvert=true;
if ((typeof(gConvert)!="undefined")&&gConvert&&(document.cookie.indexOf(gFpc+"=")==-1)&&(document.cookie.indexOf("WTLOPTOUT=")==-1)){
	document.write("<SCR"+"IPT TYPE='text/javascript' SRC='"+"http"+(window.location.protocol.indexOf('https:')==0?'s':'')+"://"+gDomain+"/"+gDcsId+"/wtid.js"+"'><\/SCR"+"IPT>");
}