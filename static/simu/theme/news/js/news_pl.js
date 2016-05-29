/*  news js */
$(function () {

    var this_obj = $(".pl_con") ;
    var this_text = this_obj.find("textarea") ;
    var this_defText = "请输入260字内评论" ;
    this_text.keyup(function(){

        checkTextLength(this);
    })
    .focus(function(){
        if($(this).val() == this_defText)
            $(this).val("");
    });


    function checkTextLength(obj) {  

        var maxChars = 260; //最多字数  
        if (obj.value.length > maxChars)  
            obj.value = obj.value.substring(0,maxChars);  

        var curr = maxChars - obj.value.length;  

        document.getElementById("plcount").innerHTML = curr.toString(); 

    }

});
