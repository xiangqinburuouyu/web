jQuery(function($){
    $('.defForm').bootstrapValidator({
        message: '验证无法通过！',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            username: {
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
                        message: '请输入6~18位密码!'
                    }
                }
            }



        }
    });
});