/* login */
require( ["jquery", "bootstrap", "bootstrap-validator","alljs"],
			function() {
				
				$('.defForm').bootstrapValidator({
			        message: '验证无法通过！',
			        feedbackIcons: {
			            valid: 'glyphicon glyphicon-ok',
			            invalid: 'glyphicon glyphicon-remove',
			            validating: 'glyphicon glyphicon-refresh'
			        },
			        fields: {

			            fundName: {
			                validators: {
			                    notEmpty: {
			                        message: '基金名称不能为空！'
			                    },
			                    stringLength: {
			                        min: 4,
			                        max: 20,
			                        message: '请输入4~20个字的基金名称！'
			                    },
			                    regexp: {
			                        regexp: /^[_a-zA-Z0-9\u4E00-\u9FA5]+$/,
			                        message: '请输入由中文、字母、数字、_(下划线) 组成的基金名称！'
			                    }
			                }
			            },
			            fundComp: {
			                validators: {
			                    notEmpty: {
			                        message: '基金公司不能为空！'
			                    },
			                    stringLength: {
			                        min: 6,
			                        max: 20,
			                        message: '请输入6~20个字的基金公司！'
			                    },
			                    regexp: {
			                        regexp: /^[a-zA-Z\u4E00-\u9FA5]+$/,
			                        message: '请输入由中文、字母 组成的基金公司！'
			                    }
			                }
			            },
			            fundManage: {
			                validators: {
			                    notEmpty: {
			                        message: '基金经理不能为空！'
			                    },
			                    stringLength: {
			                        min: 2,
			                        max: 4,
			                        message: '请输入2~4个字的基金经理！'
			                    },
			                    regexp: {
			                        regexp: /^[\u4E00-\u9FA5]+$/,
			                        message: '请输入由中文组成的基金经理！'
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



			        }
			    });


				
			
				


				

	}
);