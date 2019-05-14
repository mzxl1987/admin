Ext.define('Admin.view.base.BaseQueryPanel', {
    extend: 'Ext.form.Panel',
    xtype: 'baseQueryPanel',

    requires: [
        'Ext.layout.container.Column'
    ],

    layout: 'column',

    //margin: '0 0 0 10',

    fieldDefaults: {
        labelAlign: 'left',
        labelWidth:60,
        msgTarget: 'side',
        margin:'10 5 0 5',
    },

    defaults:{
        xtype:'textfield',
    },


});
