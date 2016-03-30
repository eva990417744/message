/**
 * Created by Sola on 2016/3/29.
 */
(function ($) {
    $.fn.cloneWithProperties = function (properties) {
        return this.clone().prop(properties);
    };
})(window.jQuery);

var domUtil = {

    /**
     * 添加一个元素
     * @param newId 指定要添加元素的ID
     */
    add: function (newId) {
        if ($('#comment' + newId).length == 0) {
            $('#gen').cloneWithProperties({
                id: 'comment' + newId,
                style: ''
            }).appendTo('body');
        }
    },

    /**
     * 删除一个元素
     * @param domId 指定要删除元素的ID
     */
    remove: function (domId) {
        var target = $('#comment' + domId);
        if (target.length != 0) {
            target.remove();
        }
    },

    /**
     * 清空
     */
    clear: function () {
        $("[id^='comment']").remove();
    },

    /**
     * 自动注入
     * 自动添加元素、自动注入文本
     * @param jsonData JSON对象(服务器返回)
     */
    inject: function (jsonData) {
        if (jsonData.parent) {
            return;
        }
        jsonData = jQuery.extend(true, {}, jsonData);        //deep copy
        domUtil.add(jsonData.id);
        jsonData.timestamp = new Date(jsonData.timestamp).toLocaleString();
        new Vue({
            el: '#comment' + jsonData.id,
            data: jsonData
        });
    },

    /**
     * 批量自动注入
     * @param jsonArray 对象数组
     */
    injectAll: function (jsonArray) {
        for (var jsonData in jsonArray) {
            domUtil.inject(jsonArray[jsonData]);
        }
    }

};
