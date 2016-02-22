function nothing()
{
}

function displayImage(imagePath)
{
    window.open("/DisplayImage.aspx?p=" + imagePath, "Image", "location=no,status=no");
}


function displaySubCat(catIndex, numCats, menuName)
{
    var index = 0;
    var element;
    var prefix = "";
    if (menuName == "top_menu")
    {
        prefix = "TopSubCat";
    }
    else if (menuName == "side_menu")
    {
        prefix = "SideSubCat";
    }
    else
    {
        prefix = "SubCat";
    }
    
    var currentCategory = prefix + catIndex.toString();
    if ( document.getElementById(currentCategory).style.display == "none" )
        showElement(currentCategory);
    else
        hideElement(currentCategory);
}



function hideElement(elementId)
{
    var element = document.getElementById(elementId);
    if (element)
    {
        element.style.display = "none";
    }
}
function showElement(elementId)
{
    var element = document.getElementById(elementId);
    if (element)
    {
        element.style.display = "block";
    }
}
function showHideElement(elementId)
{
    var element = document.getElementById(elementId);
    if (element.style.display == "none") 
    {
        element.style.display = "";
    }
    else 
    {
        element.style.display = "none";
    }
}


/***********************************************
* AnyLink Drop Down Menu- © Dynamic Drive (www.dynamicdrive.com)
* This notice MUST stay intact for legal use
* Visit http://www.dynamicdrive.com/ for full source code
***********************************************/

var disappeardelay = 250;  //menu disappear speed onMouseout (in miliseconds)
var hidemenu_onclick = "no"; //hide menu when user clicks within menu?
var menuwidth = "87"; //default menu width

///// No further editting needed

var IE=document.all
var FF=document.getElementById&&!document.all

if (IE||FF)
{
    document.write('<div id="dropmenudiv" class="DropDownMenu" style="visibility:hidden;width:'+menuwidth+';" onMouseover="clearhidemenu(this.id)" onMouseout="dynamichide(event)"></div>')
    document.write('<div id="dropmenudiv_2" class="DropDownMenu" style="visibility:hidden;width:'+menuwidth+';" onMouseover="clearhidemenu(\'dropmenudiv\');clearhidemenu(this.id);" onMouseout="dynamichide_2(event)"></div>')
}

function getposOffset(what, offsettype)
{
    var totaloffset=(offsettype=="left")? what.offsetLeft : what.offsetTop;
    var parentEl=what.offsetParent;
    while (parentEl!=null)
    {
        totaloffset=(offsettype=="left")? totaloffset+parentEl.offsetLeft : totaloffset+parentEl.offsetTop;
        parentEl=parentEl.offsetParent;
    }
    return totaloffset;
}


function showhide(dropmenuObj, styleObj, e, visible, hidden, menuwidth)
{
    if (IE||FF)
        dropmenuObj.style.left = dropmenuObj.style.top = -500

    if (menuwidth!="")
    {
        dropmenuObj.widthobj=dropmenuObj.style
        dropmenuObj.widthobj.width = Number(menuwidth) + 1;
        var dropMenuTable = document.getElementById("MenuTable");
        if (dropMenuTable)
        {
            dropMenuTable.width = Number(menuwidth) + 1;
        }
    }
    if (e.type=="click" && styleObj.visibility==hidden 
        || e.type=="mouseover")
        styleObj.visibility=visible
    else if (e.type=="click")
        styleObj.visibility=hidden
}

function iecompattest()
{
    return (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
}

function clearbrowseredge(dropmenuObj, obj, whichedge)
{
    var edgeoffset=0
    if (whichedge=="rightedge")
    {
        var windowedge=IE && !window.opera? iecompattest().scrollLeft+iecompattest().clientWidth-15 : window.pageXOffset+window.innerWidth-15
        dropmenuObj.contentmeasure=dropmenuObj.offsetWidth
        if (windowedge-dropmenuObj.x < dropmenuObj.contentmeasure)
            edgeoffset=dropmenuObj.contentmeasure-obj.offsetWidth
    }
    else
    {
        var topedge=IE && !window.opera? iecompattest().scrollTop : window.pageYOffset
        var windowedge=IE && !window.opera? iecompattest().scrollTop+iecompattest().clientHeight-15 : window.pageYOffset+window.innerHeight-18
        dropmenuObj.contentmeasure=dropmenuObj.offsetHeight
        if (windowedge-dropmenuObj.y < dropmenuObj.contentmeasure)
        { //move up?
            edgeoffset=dropmenuObj.contentmeasure+obj.offsetHeight;
            if ((dropmenuObj.y-topedge)<dropmenuObj.contentmeasure) //up no good either?
                edgeoffset=dropmenuObj.y+obj.offsetHeight-topedge;
        }
    }
    return edgeoffset;
}

function populatemenu(dropmenuObj, menuItems)
{
    if (IE||FF)
    {
        dropmenuObj.innerHTML= "<table id=MenuTable class=DropDownMenuTable cellspacing=0 cellpadding=0 >" + menuItems.join("") + "</table>";
    }
}


function dropdownmenu(divId, obj, e, menucontents, menuItemWidth, spacerWidth, dir, topShift)
{
    if (window.event) event.cancelBubble=true
    else if (e.stopPropagation) e.stopPropagation()

    clearhidemenu(divId);
    
    var dropmenuObj=document.getElementById(divId);
    
    populatemenu(dropmenuObj, menucontents)

    if (IE||FF)
    {
        showhide(dropmenuObj, dropmenuObj.style, e, "visible", "hidden", menuItemWidth)
        dropmenuObj.x = getposOffset(obj, "left")-2;
        dropmenuObj.y = getposOffset(obj, "top");
        var leftStart = dropmenuObj.x - clearbrowseredge(dropmenuObj, obj, "rightedge") - spacerWidth;
        if (dir)
        {
            if (dir == "rtl")
            {
                leftStart -= (dropmenuObj.clientWidth-menuItemWidth);
            }
        }
        leftStart += "px";
        dropmenuObj.style.left = leftStart;
        dropmenuObj.style.top = (dropmenuObj.y - clearbrowseredge(dropmenuObj, obj, "bottomedge") + obj.offsetHeight - topShift)+"px"
    }

    return clickreturnvalue()
}

// Sub menu drop down
function dropdownmenu_2(divId, obj, e, menucontents, dir, topShift)
{
    if (window.event) event.cancelBubble=true
    else if (e.stopPropagation) e.stopPropagation()

    clearhidemenu(divId);
    
    var dropSubMenuObj=document.getElementById(divId);
    
    populatemenu(dropSubMenuObj, menucontents)

    if (IE||FF)
    {
        showhide(dropSubMenuObj, dropSubMenuObj.style, e, "visible", "hidden", "100")
        var parentMenuObj = document.getElementById("dropmenudiv");
        var leftStart = "";
        if (dir == "rtl")
        {
            dropSubMenuObj.x = getposOffset(obj, "left") - dropSubMenuObj.clientWidth;
            leftStart = dropSubMenuObj.x; // - clearbrowseredge(dropSubMenuObj, obj, "rightedge");
        }
        else
        {
            dropSubMenuObj.x = getposOffset(obj, "left");
            leftStart = getposOffset(obj, "left") + parentMenuObj.clientWidth;
        }
        leftStart += "px";
        dropSubMenuObj.style.left = leftStart;
        dropSubMenuObj.y = getposOffset(obj, "top");
        dropSubMenuObj.style.top = (dropSubMenuObj.y - clearbrowseredge(dropSubMenuObj, obj, "bottomedge") + obj.offsetHeight - topShift)+"px"
    }

    return clickreturnvalue()
}

function clickreturnvalue()
{
    if (IE||FF) return false
    else return true
}

function contains_ns6(a, b)
{
    while (b.parentNode)
        if ((b = b.parentNode) == a)
            return true;
    return false;
}

function dynamichide(e)
{
    var dropMenuObj=document.getElementById("dropmenudiv");
    var dropSubMenuObj=document.getElementById("dropmenudiv_2");

    if (IE&&!dropMenuObj.contains(e.toElement)&&!dropSubMenuObj.contains(e.toElement))
    {
        delayhidemenu()
        delayhidemenu_2()
    }
    else if (FF&&e.currentTarget!= e.relatedTarget&& !contains_ns6(e.currentTarget, e.relatedTarget))
    {
        delayhidemenu()
        delayhidemenu_2()
    }
}

function clearhidemenu(divId)
{
    if (divId == "dropmenudiv" && typeof delayhide!="undefined")
    {
        clearTimeout(delayhide)
    }
    else if (divId == "dropmenudiv_2" && typeof delayhide_2!="undefined")
    {
        clearTimeout(delayhide_2)
    }
}

function hidemenu(e)
{
    var dropmenuObj=document.getElementById("dropmenudiv");
    if (typeof dropmenuObj!="undefined")
    {
        if (IE||FF)
            dropmenuObj.style.visibility="hidden"
    }
}

function delayhidemenu()
{
    if (IE||FF)
    {
        if (typeof delayhide!="undefined")
        {
            clearTimeout(delayhide);
        }
        delayhide=setTimeout("hidemenu()",disappeardelay);
    }
}

if (hidemenu_onclick=="yes")
    document.onclick=hidemenu

// Udi Shomer - the sub menu
function dynamichide_2(e)
{
    var dropSubMenuObj=document.getElementById("dropmenudiv_2");

    if (IE&&!dropSubMenuObj.contains(e.toElement))
        delayhidemenu_2()
    else if (FF&&e.currentTarget!= e.relatedTarget&& !contains_ns6(e.currentTarget, e.relatedTarget))
        delayhidemenu_2()
}

function hidemenu_2(e)
{
    var dropmenuObj=document.getElementById("dropmenudiv_2");
    if (typeof dropmenuObj!="undefined")
    {
        if (IE||FF)
            dropmenuObj.style.visibility="hidden"
    }
}

function delayhidemenu_2()
{
    if (IE||FF)
    {
        delayhidemenu();
        
        delayhide_2=setTimeout("hidemenu_2()",disappeardelay);
    }
}

if (hidemenu_onclick=="yes")
    document.onclick=hidemenu_2
// End Udi Shomer - sub menu

/*
End Drop Down Menu
*/


// Phone number must be of form [+]###[-]#######
// ... in other words:
// * the + sign can only be at the beginning
// * the - sign can be located at positions 3 to 5
// * all other characters must be digits
function validatePhoneNumber(phoneToCheck)
{
    if (phoneToCheck == "")
    {
        return false;
    }
    else if (phoneToCheck.length < 8)
    {
        return false;
    }

    var currentChar;

    for ( var i = 0 ; i < phoneToCheck.length ; i++ )
    {
        currentChar = phoneToCheck.charAt(i);
        if ( currentChar == "-" )
        {
            if (i < 2)
            {
                return false;
            }
        }
        else if ( currentChar == "+" )
        {
            if (i > 0)
            {
                return false;
            }
        }
        else if ( currentChar < "0" || currentChar > "9" )
        {
            return false;
        }
    }

    return true;
}


// Email address must be of form a@b.cc ... in other words:
// * there must be at least one character before the @
// * there must be at least one character before the last .
// * there must be at least two character after the last .
// * only one @

function validateEmailAddress(emailToCheck)
{
    if ( isEmpty(emailToCheck) )
        return false;
   
    var currentChar;
    
    for (var i = 0; i < emailToCheck.length; i++)
    {
        currentChar = emailToCheck.charAt(i);
        if (   (currentChar < "a" || currentChar > "z")
            && (currentChar < "A" || currentChar > "Z")
            && (currentChar < "0" || currentChar > "9")
            && (currentChar != "_")
            && (currentChar != "-")
            && (currentChar != "@")
            && (currentChar != ".")
           )
            return false;
    }
    
    // look for @
    var atPosition = emailToCheck.indexOf("@");
    if ( atPosition < 1 )
        return false; 

    // look for another @
    if ( atPosition < emailToCheck.lastIndexOf("@") )
        return false; 

    // look for . after the @
    if ( atPosition > emailToCheck.lastIndexOf(".") - 2 )
        return false; 

    // there must be at least two characters after the .
    if ( emailToCheck.lastIndexOf(".") > emailToCheck.length - 3 )
        return false;

    return true;
}

function isEmpty(s)
{
    return ( (s == null) || (s.length == 0) );
}





