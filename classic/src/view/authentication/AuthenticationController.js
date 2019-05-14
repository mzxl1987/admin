Ext.define('Admin.view.authentication.AuthenticationController', {
    extend: 'Admin.view.base.BaseController',
    alias: 'controller.authentication',

    //TODO: implement central Facebook OATH handling here

    onFaceBookLogin : function() {
        this.redirectTo('dashboard', true);
    },

    onLoginButton: function() {
        var me = this;
        var form = me.getView();
        this.log(form);
        this.requestPOST('auth/login',
            form.getValues(),
            function(response, opts) {
                console.log(response);
                var obj = Ext.decode(response.responseText);
                
                me.log(obj);

                if(obj.success){
                    me.session.setItem('token',obj.data[0]);
                    // Admin.view.base.Base.headerImg = obj.userInfo.avatarUrl;
                }
                me.redirectTo(obj.success ? 'dashboard' : 'login');
            },
            function(response, opts) {
                me.log(response);
        });
    },

    onLoginAsButton: function() {
        this.redirectTo('login', true);
    },

    onNewAccount:  function() {
        this.redirectTo('register', true);
    },

    onSignupClick:  function() {
        this.redirectTo('dashboard', true);
    },

    onResetClick:  function() {
        this.redirectTo('dashboard', true);
    }
});