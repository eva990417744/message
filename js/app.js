/**
 * Created by eva99 on 2016/3/8.
 */
'use strict';
var re=new RegExp('token=([0-9a-z]{8}(-[0-9a-z]{4}){3}-[0-9a-z]{12})');
var token =re.exec(window.location.href);
function User(){
    this.user={
        id:'',
        sex:'',
        nickname:'',
        avatar:''
    };
}
function Comment() {
    this.comment={
        id:'',
        parent:'',
        timestamp:'',
        text:''
    };
}
Comment.prototype=new User();
var c=new Comment();
function Create() {
    this.CreateParameters={
        text:"",
        parent:0
    };
    this.createpost=$.ajax({URL:'/comment/0',
        type:'POST',
        data:this.CreateParameters,
        beforeSend: function (request)
        {
            request.setRequestHeader('Accept:application/json','x-auth-token:'+token);
        }
    });
}//创建留言、回复。
function Fetch() {
    this.FetchParameters={
        size:20,
        page:0
    };
    this.Fetchget=$.ajax({url:'/comment/0',
        data:this.FetchParameters,
        beforeSend: function (request)
        {
            request.setRequestHeader('Accept:application/json','x-auth-token:'+token);
        }
    })
}//获取留言
function GET(id) {
    this.id=id;
    this.GETget=$.ajax({url:'/comment/{'+id+'}',
        beforeSend: function (request)
        {
            request.setRequestHeader('Accept:application/json','x-auth-token:'+token);
        }
    });
}//获取指定ID的留言信息
function UPDATE(id) {
    this.id=id;
    this.UPDATEPATCH =$.ajax({url:'/comment/{'+id+'}',
        type: 'PATCH',
        data:'',
        beforeSend: function (request)
        {
            request.setRequestHeader('Accept:application/json','x-auth-token:'+token);
        }
    });
}//编辑指定ID的留言内容
function DELETE(id) {
    this.id=id;
    this.DELETEget=$.ajax({url:'/comment/{'+id+'}',type:'DELETE',
        beforeSend: function (request)
        {
            request.setRequestHeader('Accept:application/json','x-auth-token:'+token);
        }
    });
}//删除指定ID的留言