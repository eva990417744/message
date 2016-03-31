/**
 * Created by eva99 on 2016/3/31.
 */
function error() {
    var re = new RegExp('[0-9]{5}');
    var errdata = re.exec(window.location.href);
    new Vue({
        el: '#false',
        data: {
            error: errdata
        }
    });
}