require( ["jquery", "bootstrap", "bootstrap-select","bootstrap-validator", "alljs"],
	function() {

		$('.defForm').bootstrapValidator({
	        message: '验证无法通过！',
	        feedbackIcons: {
	            valid: 'glyphicon glyphicon-ok',
	            invalid: 'glyphicon glyphicon-remove',
	            validating: 'glyphicon glyphicon-refresh'
	        },
	        fields: {
	            userinfo: {
	            	message: '个人介绍无效！',
	                validators: {
	                    notEmpty: {
	                        message: '个人介绍不能为空，请重新输入！'
	                    },
	                    stringLength: {
	                        min: 10,
	                        max: 300,
	                        message: '请输入10~300个字的个人介绍！'
	                    }
	                }
	            },
	            addExperName: {
	                validators: {
	                    notEmpty: {
	                        message: '经验名称不能为空，请重新输入！'
	                    },
	                    stringLength: {
	                        min: 2,
	                        max: 20,
	                        message: '请输入2~20个字的经验名称！'
	                    }
	                }
	            },
	            addExperContent: {
	                validators: {
	                    notEmpty: {
	                        message: '经验详情不能为空，请重新输入！'
	                    },
	                    stringLength: {
	                        min: 10,
	                        max: 300,
	                        message: '请输入10~300个字的经验详情！'
	                    }
	                }
	            },
	            userSerDoc: {
	                validators: {
	                    notEmpty: {
	                        message: '业务服务不能为空，请重新输入！'
	                    },
	                    stringLength: {
	                        min: 10,
	                        max: 100,
	                        message: '请输入10~100个字的业务服务！'
	                    }
	                }
	            },
	            oldPassword: {
	                validators: {
	                    notEmpty: {
	                        message: '原密码不能为空，请重新输入！'
	                    },
	                    stringLength: {
	                        min: 6,
	                        max: 18,
	                        message: '请输入6-18位长度密码!'
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
	            qq: {
	                validators: {
	                    notEmpty: {
	                        message: 'QQ号码不能为空，请重新输入！'
	                    },
	                    stringLength: {
	                        min: 8,
	                        max: 12,
	                        message: '请输入8~12位QQ号码！'
	                    }
	                }
	            },
	            weixinID: {
	                validators: {
	                    notEmpty: {
	                        message: '微信号不能为空，请重新输入！'
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

	    $(".u_show .btn").click(function(){
			$(".u_show").addClass("hide");
			$(".u_hide").removeClass("hide");
		});
		$(".u_close").click(function(){
			
			$(".u_hide").addClass("hide");
			$(".u_show").removeClass("hide");
		});
		
		
		

		

	}
);

	