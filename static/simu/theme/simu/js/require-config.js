require.config({
    baseUrl: "theme/simu/",
    urlArgs: "version=" +  (new Date()).getTime(),
    paths: {
        "jquery": "js/jquery.min",
        "bootstrap": "bootstrap-3.3.5-dist/js/bootstrap.min",
        "bootstrap-select": "bootstrap-select-dist/js/bootstrap-select.min",
        "bootstrap-validator": "bootstrap-validator-dist/js/bootstrapValidator.min",
        "bootstrap-datetimepicker":"bootstrap-datetimepicker/js/bootstrap-datetimepicker.min",
        "bootstrap-datetimepicker-zh-CN":"bootstrap-datetimepicker/js/locales/bootstrap-datetimepicker.zh-CN",
        "bootstrap-file": "bootstrap-file/js/fileinput.min",
        "bootstrap-fileinput_locale_zh": "bootstrap-file/js/fileinput_locale_zh",
        "angular":"angular/angular.min",
        "angular-strap":"angular/angular-strap.min",
        "area-app":"area/app",
        "area-controllers":"area/controllers",
        "highstock": "Highstock/highstock",
        "highcharts-zh_CN": "Highstock/highcharts-zh_CN",
        "exporting": "Highstock/modules/exporting",
        "jquery.cookie":"js/jquery.cookie",
        "jquery.bxslider": "js/jquery.bxslider.min",
        "unslider":"js/unslider.min",
        "jquery.fullpage":"js/jquery.fullpage.min",
        "rating": "js/rating",
        "MetroJs": "js/MetroJs.lt",
        "Chart": "js/Chart.min",
        "cropper":"cropper/js/cropper.min",
        "cropper-main":"cropper/js/main",
        "alljs": "js/all"
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            
            exports: 'Bootstrap'
        },
        'bootstrap-select': {
            deps: ['jquery','bootstrap'],
            
            exports: 'Bootstrap-Select'
        },
        'highstock': {
            deps: ['jquery'],
            
            exports: 'Highstock'
        },
        'highcharts-zh_CN': {
            deps: ['jquery','highstock'],
            
            exports: 'Highstock'
        },
        'exporting': {
            deps: ['jquery','highstock'],
            
            exports: 'Exporting'
        },
        'angular-strap': {
            deps: ['angular'],
            
            exports: 'Angular-Strap'
        },
        'area-app': {
            deps: ['angular','angular-strap'],
            
            exports: 'Area-app'
        },
        'area-controllers': {
            deps: ['angular','angular-strap'],
            
            exports: 'Area-Controllers'
        },
        'bootstrap-validator': {
            deps: ['jquery','bootstrap'],
            
            exports: 'Bootstrap-Validator'
        },
        'bootstrap-datetimepicker': {
            deps: ['jquery'],
            
            exports: 'Bootstrap-Datetimepicker'
        },
        'bootstrap-datetimepicker-zh-CN': {
            deps: ['bootstrap-datetimepicker'],
            
            exports: 'Bootstrap-Datetimepicker-zh-CN'
        },
        'bootstrap-file': {
            deps: ['jquery','bootstrap'],
            
            exports: 'Bootstrap-File'
        },
        'bootstrap-fileinput_locale_zh': {
            deps: ['bootstrap-file'],
            
            exports: 'Bootstrap-Fileinput_Locale_zh'
        },
        'cropper': {
            deps: ['jquery'],
            
            exports: 'Cropper'
        },
        'cropper-main': {
            deps: ['cropper'],
            
            exports: 'Cropper-Main'
        },
        'unslider': {
            deps: ['jquery'],
            
            exports: 'Unslider'
        },
        'jquery.bxslider': {
            deps: ['jquery'],
            
            exports: '_'
        },
        'jquery.fullpage': {
            deps: ['jquery'],
            
            exports: 'Jquery.Fullpage'
        },
        'rating': {
            deps: ['jquery'],
            
            exports: 'Rating'
        },
        'MetroJs': {
            deps: ['jquery'],
            
            exports: 'MetroJs'
        },
        'Chart': {
            
            
            exports: 'Chart'
        },
        'alljs': {
            deps: ['jquery','jquery.cookie','bootstrap','bootstrap-select','bootstrap-validator'],
            
            exports: 'Alljs'
        }
    },
    waitSeconds: 0
  });