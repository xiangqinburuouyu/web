require( ["jquery", "bootstrap", "bootstrap-select","bootstrap-validator","bootstrap-datetimepicker","bootstrap-datetimepicker-zh-CN","cropper","cropper-main","bootstrap-file","bootstrap-fileinput_locale_zh", "alljs"],
	function() {

		$('.defForm').bootstrapValidator({
	        message: '验证无法通过！',
	        feedbackIcons: {
	            valid: 'glyphicon glyphicon-ok',
	            invalid: 'glyphicon glyphicon-remove',
	            validating: 'glyphicon glyphicon-refresh'
	        },
	        fields: {
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
	            },
	            realName: {
	                validators: {
	                    notEmpty: {
	                        message: '真实姓名不能为空，请重新输入！'
	                    },
	                    stringLength: {
	                        min: 2,
	                        max: 4,
	                        message: '请输入真实中文姓名！'
	                    },
	                    regexp: {
                            regexp: /^[\u4E00-\u9FA5]+$/,
                            message: '请输入真实中文姓名！'
                        }
	                }
	            },
	            IDCard: {
	                validators: {
	                    notEmpty: {
	                        message: '身份证号码不能为空，请重新输入！'
	                    },
	                    regexp: {
                            regexp: /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/,
                            message: '请输入真实的身份证号码！'
                        }
	                }
	            },
	            IDCardImg: {
	                validators: {
	                	notEmpty: {
	                        message: '身份证照片正面不能为空，请重新输入！'
	                    },
	                    file: {
	                        extension: 'png,jpg,jpeg,gif',
	                        type: 'image/png,image/jpeg,image/gif',
	                        maxSize: 2*1024*1024,
	                        message: '请选择.png,.jpg,.jpeg,.gif格式的图片，大小不大于2M！'
	                    }
	                }
	            }
	            
	            
	            
	            
	        }
	    });

		$("#IDCardImg").fileinput({
	        uploadUrl: '#', // you must set a valid URL here else you will get an error
	        allowedFileExtensions : ['jpg','jpeg', 'png','gif'],
	        overwriteInitial: false,
	        maxFileSize: 1000,
	        maxFilesNum: 1,
	        //allowedFileTypes: ['image', 'video', 'flash'],
	        slugCallback: function(filename) {
	            return filename.replace('(', '_').replace(']', '_');
	        }
		});
		
	
		
		$('.form_datetime').datetimepicker({
	        language:  'zh-CN',
	        weekStart: 1,
	        todayBtn:  1,
			autoclose: 1,
			todayHighlight: 1,
			startView: 2,
			forceParse: 0,
	        showMeridian: 1
	    });


		

	}
);