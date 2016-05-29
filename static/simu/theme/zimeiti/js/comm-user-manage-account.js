/*  comm user manage js */
$(".scanCardImg").fileinput({
    uploadUrl: '#', // you must set a valid URL here else you will get an error
    allowedFileExtensions : ['jpg','jpeg', 'png','gif'],
    overwriteInitial: false,
    maxFileSize: 2000,
    maxFilesNum: 1,
    //allowedFileTypes: ['image', 'video', 'flash'],
    slugCallback: function(filename) {
        return filename.replace('(', '_').replace(']', '_');
    }
});
$(function () {

	$('.verMaterial').find('input[type="text"]').blur(function(){
		var weixin = $('input[name="weixin"]').val();
		var blogAddre = $('input[name="blogAddre"]').val();
		var columAddre = $('input[name="columAddre"]').val();
		var reporterCard = $('input[name="reporterCard"]').val();
		if( weixin=='' && blogAddre=='' && columAddre=='' && reporterCard==''){
			
			$('.verMaterialtxt').css({'color':'#c40000','font-weight':'bolder'});
			$('[type="submit"]').attr('disabled','disabled');
		}else{
			$('.verMaterialtxt').css({'color':'#737373','font-weight':'normal'});
		}
	});
	
	$('.defForm').bootstrapValidator({
        message: '验证无法通过！',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            alliaName: {
            	message: '联盟号名称无效！',
                validators: {
                    notEmpty: {
                        message: '联盟号名称不能为空，请重新输入！'
                    },
                    stringLength: {
                        min: 2,
                        max: 10,
                        message: '请输入2~10个字的联盟号名称！'
                    },
                    regexp: {
                        regexp: /^[_a-zA-Z0-9\u4E00-\u9FA5]+$/,
                        message: '联盟号名称不能使用包含特殊符号！'
                    }
                }
            },
            alliaSigna: {

                validators: {
                    notEmpty: {
                        message: '联盟号签名不能为空，请重新输入！'
                    },
                    stringLength: {
                        min: 2,
                        max: 20,
                        message: '请输入2~20个字的联盟号签名！'
                    },
                    regexp: {
                        regexp: /^[_a-zA-Z0-9\u4E00-\u9FA5]+$/,
                        message: '联盟号签名不能使用包含特殊符号！'
                    }
                }
            },
            alliaBrief: {

                validators: {
                    notEmpty: {
                        message: '联盟号简介不能为空，请重新输入！'
                    },
                    stringLength: {
                        min: 10,
                        max: 100,
                        message: '请输入10~100个字的联盟号简介！'
                    },
                    regexp: {
                        regexp: /^[_a-zA-Z0-9\u4E00-\u9FA5]+$/,
                        message: '联盟号简介不能使用包含特殊符号！'
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
            },
            alliaDomain: {

                validators: {
                    notEmpty: {
                        message: '领域不能为空，请重新选择！'
                    }
                    
                }
            },
            mechaName: {

                validators: {
                    notEmpty: {
                        message: '机构名称不能为空，请重新输入！'
                    },
                    stringLength: {
                        min: 2,
                        max: 30,
                        message: '请输入2~30个字的机构名称！'
                    },
                    regexp: {
                        regexp: /^[\u4E00-\u9FA5]+$/,
                        message: '机构名称必须为中文名称！'
                    }
                }
            },
            webAddre: {
                validators: {
                    stringLength: {
                        min: 2,
                        max: 80,
                        message: '请输入2~80个字的网址地址！'
                    },
                    uri: {
                        allowLocal: true,
                        message: '您输入的不是URL地址！如：http://mxsimu.com/'
                    }
                }
            },
            mechaAddre: {

                validators: {
                    notEmpty: {
                        message: '机构地址不能为空，请重新输入！'
                    },
                    stringLength: {
                        min: 5,
                        max: 60,
                        message: '请输入5~60个字的机构地址！'
                    }
                }
            },
            appliName: {

                validators: {
                    notEmpty: {
                        message: '申请者姓名不能为空，请重新输入！'
                    },
                    stringLength: {
                        min: 2,
                        max: 6,
                        message: '请输入2~6个字的中文姓名！'
                    },
                    regexp: {
                        regexp: /^[\u4E00-\u9FA5]+$/,
                        message: '申请者姓名必须与身份证姓名一致！'
                    }
                }
            },
            appliIDCard: {
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
            },
            weixin: {
                validators: {
                    stringLength: {
                        min: 5,
                        max: 50,
                        message: '请输入5~50个字的微信公众号！'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_]+$/,
                        message: '微信公众号格式不正确！'
                    }
                }
            },
            blogAddre: {
                validators: {
                    stringLength: {
                        min: 10,
                        max: 50,
                        message: '请输入10~50个字的博客地址！'
                    },
                    uri: {
                        allowLocal: true,
                        message: '您输入的不是URL地址！如：http://mxsimu.com/'
                    }
                }
            },
            columAddre: {
                validators: {
                    stringLength: {
                        min: 10,
                        max: 50,
                        message: '请输入10~50个字的专栏地址！'
                    },
                    uri: {
                        allowLocal: true,
                        message: '您输入的不是URL地址！如：http://mxsimu.com/'
                    }
                }
            },
            reporterCard: {
                validators: {
                    stringLength: {
                        min: 10,
                        max: 50,
                        message: '请输入10~50个字的记者证号！'
                    },
                    regexp: {
                        regexp: /^[_a-zA-Z0-9\u4E00-\u9FA5]+$/,
                        message: '记者证号不能使用包含特殊符号！'
                    }
                }
            },
            appliPhone: {
                validators: {
                    notEmpty: {
                        message: '作者电话不能为空，请重新输入！'
                    },
                    phone: {
                        message: '作者电话错误，请重新输入！',
                        country: 'CN'
                    }
                }
            },
            phoneVerCode: {
                validators: {
                    notEmpty: {
                        message: '验证码不能为空，请重新输入！'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: '邮箱不能为空，请重新输入！'
                    },
                    emailAddress: {
                        message: '输入的邮箱不正确，请重新输入！'
                    }
                }
            },

            alliaAgreem: {
                validators: {
                    notEmpty: {
                        message: '您必须同意明星联盟号媒体平台用户协议，才能入驻！'
                    }
                }
            }

            
            
        }
    });


});
