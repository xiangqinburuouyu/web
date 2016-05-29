require( ["jquery", "bootstrap", "bootstrap-select","bootstrap-validator","cropper","cropper-main","angular","angular-strap","area-app","area-controllers", "alljs"],
	function() {

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
	                        message: '姓名不能为空，请重新输入！'
	                    },
	                    stringLength: {
	                        min: 2,
	                        max: 6,
	                        message: '请输入2~6个字的中文姓名！'
	                    },
	                    regexp: {
                            regexp: /^[\u4E00-\u9FA5]+$/,
                            message: '请输入中文姓名！'
                        }
	                }
	            },
	            avatar_file: {
	                validators: {
	                	notEmpty: {
	                        message: '头像不能为空，请重新输入！'
	                    },
	                    file: {
	                        extension: 'png,jpg,jpeg,gif',
	                        type: 'image/png,image/jpeg,image/gif',
	                        maxSize: 300*1024,
	                        message: '请选择.png,.jpg,.jpeg,.gif格式的图片，大小不大于300KB！'
	                    }
	                }
	            }

	            
	            
	            
	            
	        }
	    });


		
		
		

		

	}
);

	