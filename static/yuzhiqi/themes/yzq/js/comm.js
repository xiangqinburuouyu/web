/* comm */
jQuery(function($) { 
	$(document).ready( function() {  
		$('.navbar-wrapper').stickUp(); 
	}); 
});

$(".navs li").hover(function () {
  $(this).find("div").stop(true, true).slideDown(300);
  $(this).addClass("current");
}, function () {
  $(this).find("div").stop(true, true).slideUp(300);
  $(this).removeClass("current");
});

function SetHome(obj,url){
  try{
    obj.style.behavior='url(#default#homepage)';
    obj.setHomePage(url);
  }catch(e){
    if(window.netscape){
     try{
       netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
     }catch(e){
        alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
     }
    }else{
    alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【"+url+"】设置为首页。");
    }
 }
}
  
function AddFavorite(title, url) {
 try {
   window.external.addFavorite(url, title);
 }
catch (e) {
   try {
    window.sidebar.addPanel(title, url, "");
  }
   catch (e) {
     alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请进入新网站后使用Ctrl+D进行添加");
   }
 }
}