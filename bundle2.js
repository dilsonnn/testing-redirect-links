let _INSTANCE_ = null;
(function () {
    return new function () {
        window._INSTANCE_ = this;
        this.handleRedirectClick = function () {
            window.location.assign('https://run.mocky.io/v3/78dd56db-f328-468d-a514-d57aa44bcbea');
        }
        this.handleRedirectToAppClick = function () {
            window.location.assign('market://details?id=com.whatsapp');
        }
        this.handleAutoRedirectClick = function () {
           setTimeout(function(){
            this.handleRedirectClick();
           }.bind(this), 1000);
        }.bind(this);
        this.handleAutoRedirectToAppClick = function () {
            setTimeout(function(){
             this.handleRedirectToAppClick();
            }.bind(this), 1000);
         }.bind(this);
        function attach(id) {
            var node = window.document.getElementById(id);
            return node && node.addEventListener || function (){};
        } 
        attach('redirect')('click', this.handleRedirectClick);
        attach('redirectToApp')('click', this.handleRedirectToAppClick);
        attach('autoRedirect')('click', this.handleAutoRedirectClick);
        attach('autoRedirectToApp')('click', this.handleAutoRedirectToAppClick);
    }
})();