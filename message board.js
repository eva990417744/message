/**
 * Created by eva99 on 2016/3/8.
 */
'use strict';
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
    this.createpost=$.ajax('URL: /comment/0',{
        METHOD: 'POST',
        data:this.CreateParameters
    });
}
function Fetch() {
    this.FetchParameters={
        size:0,
        page:0
    };
    this.Fetchget=$.ajax({url:'/comment/0',
        data:this.FetchParameters
    })
}
function GET(id) {
    this.id=id;
    this.GETget=$.ajax({url:'/comment/{'+id+'}'});
}
function UPDATE(id) {
    this.id=id;
    this.UPDATEPATCH =$.ajax({url:'/comment/{'+id+'}', method: 'PATCH'});
}
function DELETE(id) {
    this.id=id;
    this.DELETEget=$.ajax({url:'/comment/{'+id+'}',method:'DELETE'});
}