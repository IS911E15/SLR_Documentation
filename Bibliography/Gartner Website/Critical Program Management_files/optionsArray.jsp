




/*
     FILE ARCHIVED ON 20:18:15 mar 16, 2007 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 9:49:04 maj 13, 2015.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/










function Option(selected, value, text) {
   this.selected = selected;
   this.value = value;
   this.text = text;
}

function OptionsArray() {  
    this.optionList = new Array();
    this.writeOptionsArray = writeOptionsArray;
    this.optionList[this.optionList.length] = new Option(true, null, 'Gartner Websites');
    this.optionList[this.optionList.length] = new Option(false, '/Init', '&nbsp;&nbsp;' + 'Classic gartner.com');
    this.optionList[this.optionList.length] = new Option(false, '/web/20070316201815/http://www.gartner.co.jp', '&nbsp;&nbsp;' + 'Gartner Japan');

    this.optionList[this.optionList.length] = new Option(false, '', '');
    this.optionList[this.optionList.length] = new Option(false, '', 'Other Gartner Websites:');


    this.optionList[this.optionList.length] = new Option(false, '/5_about/news/notices/i508.jsp', '&nbsp;&nbsp;' + 'Gartner Accessibility Website');



  





  

}

function writeOptionsArray() {
  for (ndx=0; ndx < this.optionList.length; ndx++) {
    opt = this.optionList[ndx];

    str = '<option';
    document.write('<option');
    //alert('opt.selected = ' + opt.selected);
    if (opt.selected == true) {
      document.write(' selected="selected"');
      str += ' selected="selected"';
    }
    //alert('opt.value = ' + opt.value);
    if (opt.value != null && opt.value != undefined && opt.value != 'undefined') {
      document.write(' value="' + opt.value + '"');
      str += ' value="' + opt.value + '"';
    }
    document.write('>' + opt.text + '</option>\n');
    str += '>' + opt.text + '</option>\n';
    //alert(str);
  }
}

function homepageJumper(newLoc) {
	newPage=newLoc.options[newLoc.selectedIndex].value;
	if (newPage=="worldwide") {
        alert('You are currently at the Gartner Worldwide site.  If you\'d like to change your locale, please select another website from the menu.');
        return false;
	} else if (newPage!="") {
		if ((newPage.indexOf("/silentlocalechooser.jsp") == 0)
		   || (newPage.indexOf("/invest") == 0)
		   || (newPage.indexOf("?expHomePage=") != -1 )
		   || (newPage.indexOf("it/leaders") != -1 )
		   || (newPage.indexOf("it/products") != -1 )
		   || (newPage.indexOf("Init") != -1)) {
			window.open(newPage,"_self");
		} else {
			window.open(newPage);
		}
	}
	newLoc.selectedIndex=0
}
