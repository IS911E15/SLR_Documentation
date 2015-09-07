




/*
     FILE ARCHIVED ON 0:24:16 mar 11, 2007 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 9:49:04 maj 13, 2015.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
//pops open the outsourcing book form
function openOutSourcingBookForm(siteid, source){
	
	//default values for the minisites
	siteid = (siteid) ? siteid : "";
	source = (source) ? source : "";
	
	var url = "/web/20070311002416/http://sourcing.gartner.com/docs/jspdocs/outsourcing/OutSourcingBookLeadForm.jsp?siteid=" + siteid + "&source=" + source;
	var width=633;
	var height=500;
	var features='resizable=yes,scrollbars=yes,toolbar=no';
	
	if(screen.width && screen.height){
		if(screen.height > 768 ){
			height=800;
			features='resizable=yes,scrollbars=yes,toolbar=no';			
		}
	}
	var newWin=null;
	
	target = "_blank";
	
	//calculate the x, and y position of the popup to center it
	var left = (screen.width - width)/2;
	var top = (screen.height - height)/2;
	
	var settings = 'width=' + width + ',height=' + height + ',top=' + top + ',left=' + left + ', ' + features;
	
	newWin = window.open(url, target, settings);
	newWin.focus();			
}
