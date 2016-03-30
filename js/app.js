/**
 * Created by eva99 on 2016/3/8.
 */
'use strict';
var re=new RegExp('token=([0-9a-z]{8}(-[0-9a-z]{4}){3}-[0-9a-z]{12})');
var token =re.exec(window.location.href);
var c=new Comment();
function Create(inputtext,id) {
    var CreateParameters={
        text:inputtext,
        parent:id
    };
    var createpost=$.ajax({URL:'/comment/0',
        type:'POST',
        data:CreateParameters,
        beforeSend: function (request)
        {
            request.setRequestHeader('Accept:application/json','x-auth-token:'+token);
        },
        success:function (data) {
            domUtil.inject(data);
        },
        error: function (error) {
            alert(error);
        }
    });
}//创建留言、回复。
function Fetch() {
    var FetchParameters={
        size:20,
        page:0
    };
    var Fetchget=$.ajax({url:'/comment/0',
        data:FetchParameters,
        beforeSend: function (request)
        {
            request.setRequestHeader('Accept:application/json','x-auth-token:'+token);
        },
        success:function (data) {
            domUtil.injectAll(data.comments);
        },
        error: function (error) {
            console.log(error);
        }
    })
}//获取留言
function GET(id) {
    this.id=id;
    var GETget=$.ajax({url:'/comment/{'+id+'}',
        beforeSend: function (request)
        {
            request.setRequestHeader('Accept:application/json','x-auth-token:'+token);
        },
        success:function (data) {
            domUtil.inject(data);
        },
        error: function (error) {
            console.log(error);
        }
    });
}//获取指定ID的留言信息
function UPDATE(text,id) {
    this.id=id;
    var UPDATEPATCH =$.ajax({url:'/comment/{'+id+'}',
        type: 'PATCH',
        data:text,
        beforeSend: function (request)
        {
            request.setRequestHeader('Accept:application/json','x-auth-token:'+token);
        },
        success:function (data) {
            domUtil.inject(data);
        },
        error: function (error) {
            console.log(error);
        }
    });
}//编辑指定ID的留言内容
function DELETE(id) {
    this.id=id;
    var DELETEget=$.ajax({url:'/comment/{'+id+'}',
        type:'DELETE',
        beforeSend: function (request)
        {
            request.setRequestHeader('Accept:application/json','x-auth-token:'+token);
        },
        error:function () {

        }
    });
}//删除指定ID的留言
$(document).ready(function(){
    $('#Createbutton').click(function () {
        var text=$('#Createtext').text();
        Create(text,0);
        location.reload(true);
    });
});//Createbuttonclick
$(document).ready(function(){
    $('#reCreatebutton').click(function () {
        var text=$('#reCreatext').text();
        Create(text,id);
        location.reload(true);
    })
});//reCreatebuttonclick