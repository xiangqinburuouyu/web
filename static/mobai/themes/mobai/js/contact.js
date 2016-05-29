$(function(){
	$(".tab_nav a").mouseover(function (e) {
		e.preventDefault();
		$(this).tab('show');
	}); 
	
	$('.defForm').bootstrapValidator({
        message: '验证无法通过！',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            niName: {
                validators: {
                    notEmpty: {
                        message: '昵称不能为空，请重新输入！'
                    },
                    stringLength: {
                        min: 3,
                        max: 6,
                        message: '请输入3~6个字的中文昵称！'
                    },
                    regexp: {
                        regexp: /^[\u4E00-\u9FA5]+$/,
                        message: '请输入中文昵称！'
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
            email: {
                validators: {
                    notEmpty: {
                        message: '邮箱不能为空，请重新输入！'
                    },
                    
                    emailAddress: {
                        message: '邮箱错误，请重新输入！'
                    }
                }
            },
            content: {
                validators: {
                    notEmpty: {
                        message: '内容不能为空，请重新输入！'
                    },
                    stringLength: {
                        min: 10,
                        max: 120,
                        message: '请输入10~120个字的内容！'
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
});