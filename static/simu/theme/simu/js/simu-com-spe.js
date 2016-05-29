/* simu not js */

require( ["jquery", "bootstrap", "bootstrap-select", "bootstrap-validator", "alljs"],
	function() {
		

		$(".zxt_off").click(function(){
			$(".zxt_off").addClass("hide");
			$(".before_click").addClass("hide");
			$(".zxt_on").removeClass("hide");
			$(".after_click").removeClass("hide");

		});
		$(".zxt_on").click(function(){
			$(".zxt_on").addClass("hide");
			$(".after_click").addClass("hide");
			$(".zxt_off").removeClass("hide");
			$(".before_click").removeClass("hide");
		});

		$('.defForm').bootstrapValidator({
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
	            }

	            
	            
	            
	        }
	    });



	}
);

