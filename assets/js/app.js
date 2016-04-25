/**
 * Created by yanndeungoue on 20/04/2016.
 */

var handleThemePanelExpand = function() {
    $(document).on('click', '[data-click="theme-panel-expand"]', function() {
        var targetContainer = '.theme-panel';
        var targetClass = 'active';
        if ($(targetContainer).hasClass(targetClass)) {
            $(targetContainer).removeClass(targetClass);
        } else {
            $(targetContainer).addClass(targetClass);
        }
    });
};

function activeTranche1(){
    if( $('#tranche1').attr('disabled') ){
        $('#tranche1').removeAttr('disabled');
    }else{
        $('#tranche1').attr({
            'disabled' : 'disabled'
        });
    }
}

function activeTranche2(){
    if( $('#tranche2').attr('disabled') ){
        $('#tranche2').removeAttr('disabled');
    }else{
        $('#tranche2').attr({
            'disabled' : 'disabled'
        });
    }
}

function activeTranche3(){
    if( $('#tranche3').attr('disabled') ){
        $('#tranche3').removeAttr('disabled');
    }else{
        $('#tranche3').attr({
            'disabled' : 'disabled'
        });
    }
}

$(document).ready(function() {
    $('#GClassique').DataTable();
} );


$(window).load(function(){
    $('#myModal').modal('show');
});

$(function () {
    $('#dateRattachement0').datetimepicker({
        locale: 'fr',
        format: 'DD/MM/YYYY',
        defaultDate: new Date()

    });
});

$(function () {
    $('#dateRattachement').datetimepicker({
        locale: 'fr',
        format: 'DD/MM/YYYY',
        defaultDate: new Date()

    });
});

$(function () {
    $('#dateRattachement2').datetimepicker({
        locale: 'fr',
        format: 'DD/MM/YYYY',
        defaultDate: new Date()

    });
});