/* all js */

$(function () {
	$('.selectpicker').selectpicker();	
	$('[data-toggle="dropdown"]').dropdown();
	$(".tab_nav a").click(function (e) {
		e.preventDefault();
		$(this).tab('show');
	}); 
	$($(".nav_listm")[0]).fadeIn();
	$($(".nav_listms")[0]).fadeIn();
	$(".nav_list li").hover(function(){
			$(".nav_listms").fadeIn();
			var index=$(this).index(".nav_list li");
			//if (!($(this).hasClass("hover")||$(this).hasClass("curr"))) {
				//$($(".yBannerList")[index]).css("display","block").siblings().css("display","none");
				//$($(".yBannerList")[index]).removeClass("ybannerExposure");
				//setTimeout(function(){
				//$($(".yBannerList")[index]).addClass("ybannerExposure");
				//},60)
			//}else{	
			//}
			$(this).addClass("hover").siblings().removeClass("hover");
			$(this).addClass("curr").siblings().removeClass("curr");			
			$($(".nav_listm")[index]).fadeIn().siblings().fadeOut();
			
		},function(){
			
		})
		$(".nav_lists").mouseleave(function(){
			$(".nav_listms").fadeOut();
			$(".nav_listm").fadeOut();
			$(".nav_list li").removeClass("hover");

	});

	$('.searForm').bootstrapValidator({
        message: '验证无法通过！',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
        	sear_word: {
                message: '关键词无效！',
                validators: {
                    notEmpty: {
                        message: '关键词不能为空！'
                    },
                    stringLength: {
                        min: 2,
                        max: 20,
                        message: '请输入2~20字的关键词！'
                    },
                    
                    regexp: {
                        regexp: /^[_a-zA-Z0-9\u4E00-\u9FA5]+$/,
                        message: '请输入由中文、字母、数字、_(下划线) 组成的关键词！'
                    }
                }
            }
            
            
        }
    });

    var mySubmit =$('#myModal :input:submit');
	function setagreCookie(){
		if($('#myModal :input:checked').length == 0){

			$.cookie('moda_agre_cookie','0', { expires: 100, path: '/' }) ;
		}else{
			$.cookie('moda_agre_cookie','1', { expires: 100, path: '/' })
		}
		
		
		$('#myModal').modal('hide');
	}
	if($.cookie('moda_agre_cookie') == undefined || $.cookie('moda_agre_cookie') =='0'){
		$('#myModal').modal({keyboard: true});
		
		mySubmit.click(function(){
			
			setagreCookie();
		});
		
	}

    $('a[data-toggle=modal]').click(function(){	
		var pid = $(this).attr("data-pid");
		var pname = $(this).attr("data-pname");
		var valpid = $('input[name="pid"]').val();
		var valpname = $('input[name="pname"]').val();
		$('input[name="pid"]').val(pid);
		$('input[name="pname"]').val(pname);
	});

	$('#modalForm').bootstrapValidator({
        message: '验证无法通过！',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
        	username: {
                message: '姓名无效！',
                validators: {
                    notEmpty: {
                        message: '姓名不能为空！'
                    },
                    stringLength: {
                        min: 2,
                        max: 5,
                        message: '请输入2~5个字的中文姓名！'
                    },
                    
                    regexp: {
                        regexp: /^[\u4E00-\u9FA5]+$/,
                        message: '请输入中文姓名！'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: '手机号码不能为空，请重新输入！'
                    },
                    phone: {
                        message: '手机号码错误，请重新输入！',
                        country: 'CN'
                    }
                }
            },
            
            verCode: {
                validators: {
                    notEmpty: {
                        message: '验证码不能为空，请重新输入！'
                    }
                }
            }

            
            
            
        }
    });

	$(".foot_icode").hover(function(){
		$(this).find('.popover').show();
	},function(){
		$(this).find('.popover').hide();
	})
	


	
	
});
