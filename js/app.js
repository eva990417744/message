/**
 * Created by eva99 on 2016/3/8.
 */
'use strict';
var re=new RegExp('token=([0-9a-z]{8}(-[0-9a-z]{4}){3}-[0-9a-z]{12})');
var token =re.exec(window.location.href);
function Create() {
    var CreateParameters={
        text:"",
        parent:0
    };
    var createpost=$.ajax({URL:'/comment/0',
        type:'POST',
        data:CreateParameters,
        beforeSend: function (request)
        {
            request.setRequestHeader('Accept:application/json','x-auth-token:'+token);
        },
        success:function (data) {
            domUtil.injectAll(data.comments);
        }
    });
}//创建留言、回复。
function Fetch() {
    var FetchParameters={
        size:20,
        page:0
    };
    var Fetchget=$.ajax({url:'/comment/0',
        data:this.FetchParameters,
        beforeSend: function (request)
        {
            request.setRequestHeader('Accept:application/json','x-auth-token:'+token);
        },
        success:function (data) {

        }
    });
    Fetchget.page+=1;
}//获取留言
function GET(id) {
    this.id=id;
    var GETget=$.ajax({url:'/comment/{'+id+'}',
        beforeSend: function (request)
        {
            request.setRequestHeader('Accept:application/json','x-auth-token:'+token);
        },
        success:function (data) {

        }
    });
}//获取指定ID的留言信息
function UPDATE(id) {
    this.id=id;
    var UPDATEPATCH =$.ajax({url:'/comment/{'+id+'}',
        type: 'PATCH',
        data:'',
        beforeSend: function (request)
        {
            request.setRequestHeader('Accept:application/json','x-auth-token:'+token);
        },
        success:function (data) {

        }
    });
}//编辑指定ID的留言内容
function DELETE(id) {
    this.id=id;
    var DELETEget=$.ajax({url:'/comment/{'+id+'}',type:'DELETE',
        beforeSend: function (request)
        {
            request.setRequestHeader('Accept:application/json','x-auth-token:'+token);
        },
        success:function (data) {

        }
    });
}//删除指定ID的留言