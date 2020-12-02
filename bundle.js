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
        window.document.getElementById('redirect').addEventListener('click', this.handleRedirectClick);
        window.document.getElementById('redirectToApp').addEventListener('click', this.handleRedirectToAppClick);
        window.document.getElementById('autoRedirect').addEventListener('click', this.handleAutoRedirectClick);
        window.document.getElementById('autoRedirectToApp').addEventListener('click', this.handleAutoRedirectToAppClick);
    }
})();