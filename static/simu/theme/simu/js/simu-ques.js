/* simu question */

require( ["jquery", "bootstrap", "bootstrap-select", "bootstrap-validator", "unslider", "alljs"],
	function() {
		
		$('.banner').unslider({
			speed: 500,
			delay: 3000, 
			complete: function() {},  
			keys: true, 
			dots: true,    
			fluid: false  
		});
		$('#defForm').bootstrapValidator({
	        message: '验证无法通过！',
	        feedbackIcons: {
	            valid: 'glyphicon glyphicon-ok',
	            invalid: 'glyphicon glyphicon-remove',
	            validating: 'glyphicon glyphicon-refresh'
	        },
	        fields: {
	        	body: {
                    validators: {
                        notEmpty: {
                            message: '我来回答不能为空！'
                        },
                        stringLength: {
                            min: 10,
                            max: 200,
                            message: '请输入10~200字的回答！'
                        }
                    }
	            },
	            ques_input: {
	                message: '问题描述无效！',
                    validators: {
                        notEmpty: {
                            message: '问题描述不能为空！'
                        },
                        stringLength: {
                            min: 5,
                            max: 100,
                            message: '问题描述5~100字！'
                        }
                    }
	            }
	            
	            
	        }
	    });
		
		$(".code_pop_wx").mouseover(function(){
			var code_wx = $(this).attr('data-code-wx');
			var html = '<div class="popover code_pop fade bottom in" role="code_pop" style="top: 20px; left: -50%; display: block;"><div class="arrow" style="left: 50%;"></div><h3 class="popover-title" >微信咨询</h3><div class="popover-content"><img src="http://open.weixin.qq.com/qr/code/?username='+ code_wx +'" width="130" alt="微信二维码" /></div></div>';
			if($(this).find('[role="code_pop"]').size()==0)
				$(this).append(html);
			$(this).find('[role="code_pop"]').css("display","block");

		}).mouseout(function(){
			$(this).find('[role="code_pop"]').css("display","none");
		});
		$(".code_pop_phone").mouseover(function(){
			var code_phone = $(this).attr('data-code-phone');
			var html = '<div class="popover code_pop fade bottom in" role="code_pop" style="top: 20px; left: -50%; display: block;"><div class="arrow" style="left: 50%;"></div><h3 class="popover-title" >电话咨询</h3><div class="popover-content"><p>请拨打电话：</p><b>'+ code_phone +'</b></div></div>';			
			if($(this).find('[role="code_pop"]').size()==0)
				$(this).append(html);
			$(this).find('[role="code_pop"]').css("display","block");

		}).mouseout(function(){
			$(this).find('[role="code_pop"]').css("display","none");
		});

		function setCookie(name,value){
			$.cookie(name,value, { expires: 100, path: '/' });
		}
		function getCookie(name){
			return $.cookie(name);
		}

		$(".code_love").on('click',function(){
			var Selector = $(this);
			var numBox = Selector.find('span');
			var uid = Selector.attr('data-uid');
			var num = Selector.attr('data-code-love');
			var love_val = getCookie('code_love' + uid);
			//setCookie('code_love' + uid,'1');
			//$.cookie('code_love2',null,{path:'/'});
			//alert(getCookie('code_love' + uid))
			
			if(love_val ==1){
				return;
			}
			$.ajax({
	             type: "GET",
	             url: 'http://www.mxsimu.com/themes/simu/banner/col2.png',
	             data: num,
	             dataType: "text",
	             success: function(data){
	             	numBox.text(data);
	             	alert("请求成功");
	             	setCookie('code_love' + uid,'1');

				},
				error:function(){   
			   	 	//alert('error:请求错误!');   
			   	 	
			     }

		 	});
		});


		$(".tab_nav a").click(function (e) {
			e.preventDefault()
			$(this).tab('show')
		});
	

	}
);
