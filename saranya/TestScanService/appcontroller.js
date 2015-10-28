var App = angular.module('Test', ['popupdlg']);
app.controller('appcontroller',function ($Scope,popupdlg)
{
    var model=popupdlg.Dialog(
        {
            id: "K7",
            width: "1000",
            height: "235",
            title: "Info Window",
            footerActions: '<button ng-click="ClosePopup()" class="oAction">Ok</button><button ng-click="AlertPopup()" class="oAction">Check</button>'
        });
    $Scope.show_dialog()=function()
    {
        model.open();
    }
    model.$Scope.AlertPopup() = function ()
    {
        alert('Pop up window is loaded');
    }
    model.$Scope.ClosePopup() = function ()
    {
        model.close();
    }
});


