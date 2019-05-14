Ext.define('Admin.view.base.BaseGridPanel', {
    extend: 'Ext.grid.Panel',
    xtype: 'baseGridPanel',

    //cls: 'email-inbox-panel shadow',

    requires:[
        'Ext.toolbar.Paging',
        'Ext.grid.filters.Filters',
    ],

    bind: {
        store: '{iStore}'
    },

    flex: 1,

    viewConfig: {
        preserveScrollOnRefresh: true,
        preserveScrollOnReload: true
    },

    isGridPanel: true,

    selModel: {
        selType: 'checkboxmodel',
        checkOnly: true,
        showHeaderCheckbox: true
    },

    params: null,

    reload: function(params){

        var vm = this.getViewModel();
        var s = vm.getStore("iStore");

        Ext.apply(s.proxy.extraParams,params);

        s.loadPage(1);
    },

    rowLines: true,
    columnLines: true,

    tbar: [
        {
            iconCls:'x-fa fa-plus',
            text: '添加',
            handler: 'onBtnAddClick',
        },
        {
            iconCls: 'x-fa fa-edit',
            text: '编辑',
            handler: 'onBtnEditClick',
            bind:{
                disabled:"{disabledEdit}",
            }
        },
        {
            iconCls: 'x-fa fa-trash',
            text: '删除',
            handler: 'onBtnDeleteClick',
            bind:{
                disabled:"{disabledDelete}",
            }
        },
    ],

    dockedItems: [
        {
            xtype: 'pagingtoolbar',
            dock: 'bottom',
            itemId: 'pagingToolbar',
            prependButtons: true,
            bind: '{iStore}',

            displayInfo: true,
            displayMsg: '显示 {0} - {1} / 共 {2}',
            emptyMsg: "暂无数据显示",

        }
    ],

});
