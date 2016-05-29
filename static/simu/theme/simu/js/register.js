/* register */
require( ["jquery", "bootstrap", "bootstrap-validator"],
	function() {
		$('#defForm').bootstrapValidator({
	        message: '验证无法通过！',
	        feedbackIcons: {
	            valid: 'glyphicon glyphicon-ok',
	            invalid: 'glyphicon glyphicon-remove',
	            validating: 'glyphicon glyphicon-refresh'
	        },
	        fields: {
	        	username: {
	                message: '用户名无效！',
                    validators: {
                        notEmpty: {
                            message: '用户名不能为空！'
                        },
                        stringLength: {
                            min: 2,
                            max: 20,
                            message: '请输入2~20个由中文、字母、数字、_(下划线) 组成的名称！'
                        },
                        remote: {
                            type: 'POST',
                            delay: 2000,
                            url: '/remote',
                            message: '用户名不可用,请重新输入!'
                        },
                        regexp: {
                            regexp: /^[_a-zA-Z0-9\u4E00-\u9FA5]+$/,
                            message: '请输入由中文、字母、数字、_(下划线) 组成的名称！'
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
	            password: {
	                validators: {
	                    notEmpty: {
	                        message: '密码不能为空，请重新输入！'
	                    },
	                    stringLength: {
	                        min: 6,
	                        max: 18,
	                        message: '请输入6-18位长度密码!'
	                    },
	                    identical: {
	                        field: 'confirmPassword',
	                        message: '两次密码输入不一致！请重新输入！'
	                    }
	                }
	            },
	            confirmPassword: {
	                validators: {
	                    notEmpty: {
	                        message: '确认密码不能为空，请重新输入！'
	                    },
	                    identical: {
	                        field: 'password',
	                        message: '两次密码输入不一致！请重新输入！'
	                    }
	                }
	            },
	            verCode: {
	                validators: {
	                    notEmpty: {
	                        message: '验证码不能为空，请重新输入！'
	                    }
	                }
	            },
	            checkbox: {
	                validators: {
	                    notEmpty: {
	                        message: '您必须同意这些条款和政策，才能注册！'
	                    }
	                }
	            },
	            phoneVerCode: {
	                validators: {
	                    notEmpty: {
	                        message: '手机验证码不能为空，请重新输入！'
	                    },
	                    stringLength: {
	                        min: 4,
	                        max: 6,
	                        message: '请输入4~6位手机验证码!'
	                    }
	                }        
	            }
	            
	            
	        }
	    });

	

	}
);

function changSrc(obj,url){
	$(obj).attr('src',url);
}