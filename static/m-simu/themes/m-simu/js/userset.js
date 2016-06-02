
jQuery(function($) {

    $('.defForm').bootstrapValidator({
        message: '验证无法通过！',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            name: {
                message: '姓名无效！',
                validators: {
                    notEmpty: {
                        message: '姓名不能为空！'
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
            }


        }
    });
    
});