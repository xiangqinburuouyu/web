require( ["jquery", "bootstrap", "bootstrap-select","bootstrap-validator","bootstrap-datetimepicker","bootstrap-datetimepicker-zh-CN","cropper","cropper-main", "alljs"],
	function() {

		$('#defForm').bootstrapValidator({
	        message: '验证无法通过！',
	        feedbackIcons: {
	            valid: 'glyphicon glyphicon-ok',
	            invalid: 'glyphicon glyphicon-remove',
	            validating: 'glyphicon glyphicon-refresh'
	        },
	        fields: {
	        	financSer: {
	                message: '金融业务无效！',
                    validators: {
                        notEmpty: {
                            message: '金融业务不能为空！'
                        }
                    }
	            },
	            businDepar: {
	                validators: {
	                    notEmpty: {
	                        message: '所属营业部不能为空，请重新输入！'
	                    },
	                    regexp: {
                            regexp: /^[\u4E00-\u9FA5]+$/,
                            message: '请输入所属营业部的中文名称！'
                        }
	                }
	            },
	            position: {
	                validators: {
	                    notEmpty: {
	                        message: '职位不能为空，请重新输入！'
	                    },
	                    regexp: {
                            regexp: /^[\u4E00-\u9FA5]+$/,
                            message: '请输入职位的中文名称！'
                        }
	                }
	            },
	            pracDate: {
	                validators: {
	                    notEmpty: {
	                        message: '从业时间不能为空，请重新输入！'
	                    }
	                }
	            }

	            
	            
	            
	            
	            
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

	