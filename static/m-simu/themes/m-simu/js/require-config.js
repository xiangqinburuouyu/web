require.config({
    baseUrl: "themes/m-simu/",
    urlArgs: "bust=" +  (new Date()).getTime(),
    paths: {
        "jquery": "js/jquery.min",
        "bootstrap": "bootstrap-3.3.5-dist/js/bootstrap.min",
        "touche": "js/touche.min",
        "highstock": "Highstock/highstock",
        "exporting": "Highstock/modules/exporting",
        "unslider":"js/unslider.min",
        "jquery.event.swipe":"js/jquery.event.swipe",
        "jquery.event.move":"js/jquery.event.move",
        "rating": "js/rating",
        "Chart": "js/Chart.min"
    },
    waitSeconds: 0
  });