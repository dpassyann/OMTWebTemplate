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
}

var handleThemePanelExpand2 = function() {
    $(document).on('click', '[data-click="theme-panel-expand2"]', function() {
        var targetContainer = '.theme-panel2';
        var targetClass = 'active';
        if ($(targetContainer).hasClass(targetClass)) {
            $(targetContainer).removeClass(targetClass);
        } else {
            $(targetContainer).addClass(targetClass);
        }
    });
}

function clickOperationInferieur(){
    $(document).on('click', '[data-click="operation-inferieur"]', function(event) {
        event.preventDefault();
        event.stopPropagation();
        if($('#inferieur').hasClass('button-click') ){
            $('#inferieur').removeClass('button-click');
        }else {
            $('#inferieur').addClass('button-click');
        }
    });
}

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
    $('#GClassique').DataTable({
        "language": {

                "sProcessing":     "Traitement en cours...",
                "sSearch":         "Rechercher&nbsp;:",
                "sLengthMenu":     "Afficher _MENU_ &eacute;l&eacute;ments",
                "sInfo":           "Affichage de l'&eacute;l&eacute;ment _START_ &agrave; _END_ sur _TOTAL_ &eacute;l&eacute;ments",
                "sInfoEmpty":      "Affichage de l'&eacute;l&eacute;ment 0 &agrave; 0 sur 0 &eacute;l&eacute;ment",
                "sInfoFiltered":   "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
                "sInfoPostFix":    "",
                "sLoadingRecords": "Chargement en cours...",
                "sZeroRecords":    "Aucun &eacute;l&eacute;ment &agrave; afficher",
                "sEmptyTable":     "Aucune donn&eacute;e disponible dans le tableau",
                "oPaginate": {
                "sFirst":      "Premier",
                    "sPrevious":   "Pr&eacute;c&eacute;dent",
                    "sNext":       "Suivant",
                    "sLast":       "Dernier"
            },
                "oAria": {
                "sSortAscending":  ": activer pour trier la colonne par ordre croissant",
                    "sSortDescending": ": activer pour trier la colonne par ordre d&eacute;croissant"
            }

        }
    });

    $('#TABLEHISTO').DataTable({
        "language": {

            "sProcessing":     "Traitement en cours...",
            "sSearch":         "Rechercher&nbsp;:",
            "sLengthMenu":     "Afficher _MENU_ &eacute;l&eacute;ments",
            "sInfo":           "Affichage de l'&eacute;l&eacute;ment _START_ &agrave; _END_ sur _TOTAL_ &eacute;l&eacute;ments",
            "sInfoEmpty":      "Affichage de l'&eacute;l&eacute;ment 0 &agrave; 0 sur 0 &eacute;l&eacute;ment",
            "sInfoFiltered":   "(filtr&eacute; de _MAX_ &eacute;l&eacute;ments au total)",
            "sInfoPostFix":    "",
            "sLoadingRecords": "Chargement en cours...",
            "sZeroRecords":    "Aucun &eacute;l&eacute;ment &agrave; afficher",
            "sEmptyTable":     "Aucune donn&eacute;e disponible dans le tableau",
            "oPaginate": {
                "sFirst":      "Premier",
                "sPrevious":   "Pr&eacute;c&eacute;dent",
                "sNext":       "Suivant",
                "sLast":       "Dernier"
            },
            "oAria": {
                "sSortAscending":  ": activer pour trier la colonne par ordre croissant",
                "sSortDescending": ": activer pour trier la colonne par ordre d&eacute;croissant"
            }

        }
    });
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

$(function () {
    $('#dateR').datetimepicker({
        locale: 'fr',
        format: 'DD/MM/YYYY',
        defaultDate: new Date()

    });
});

$(function () {
    $('#dateR1').datetimepicker({
        locale: 'fr',
        format: 'DD/MM/YYYY',
        defaultDate: new Date().setDate(-1)

    });
});

$(function () {
    $('#dateRattachement3').datetimepicker({
        locale: 'fr',
        format: 'DD/MM/YYYY',
        defaultDate: new Date()

    });
});