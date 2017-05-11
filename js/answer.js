/**
 * Created by Administrator on 2017/3/12.
 */
var editor;
$(function () {
    editor = new Simditor({
        textarea: $('#editor')
    });
});

/**
 * 点亮点赞
 */
function lightAgreeAnswer(object) {
    object.prev().removeClass("action-agree");
    object.prev().addClass("action-agree-active");
    // num++
    var num = object.prev().children(".num").html();
    num++;
    object.prev().children(".num").html(num);
    object.attr("data-agree","true");

}

/**
 * 熄灭点赞
 */
function destroyAgreeAnswer(object) {
    object.prev().removeClass("action-agree-active");
    object.prev().addClass("action-agree");
    // num++
    var num = object.prev().children(".num").html();
    num--;
    object.prev().children(".num").html(num);
    object.attr("data-agree","false");
}

/**
 * 点亮不点赞的
 */
function lightDisagreeAnswer(object) {
    object.removeClass("action-disagree");
    object.addClass("action-disagree-active");
    // num++
    var num = object.children(".num").html();
    num++;
    object.children(".num").html(num);
    object.attr("data-disagree","true");
}
/**
 * 熄灭不点赞的
 */
function destroyDisagreeAnswer(object) {
    object.removeClass("action-disagree-active");
    object.addClass("action-disagree");
    // num++
    var num = object.children(".num").html();
    num--;object.children(".num").html(num);
    object.attr("data-disagree","false");
}


function agreeBox(position,object) {
    if (object.attr("data-agree") == 'false' && object.attr("data-disagree") == 'false') {
        if(position == 1) {
            lightAgreeAnswer($(object));
        } else {
            lightDisagreeAnswer($(object));
        }
    } else if (object.attr("data-agree") == 'true' && object.attr("data-disagree") == 'false') {
        if(position == 1) {
            destroyAgreeAnswer($(object));
        } else {
            lightDisagreeAnswer($(object));
            destroyAgreeAnswer($(object));
        }
    } else if (object.attr("data-agree") == 'false' && object.attr("data-disagree") == 'true') {
        if(position == 1) {
            lightAgreeAnswer($(object));
            destroyDisagreeAnswer($(object));
        } else {
            destroyDisagreeAnswer($(object));
        }
    }
}

$(document).on("click", ".answer-footer div:nth-child(1)", function () {
    agreeBox(1,$(this).next());
});
$(document).on("click", ".answer-footer div:nth-child(2)", function () {
    agreeBox(2,$(this));
});


$(document).on("click", "#submit-answer", function () {
    alert(editor.getValue());
});

$(document).on("click", ".modal-content .card-action a", function () {
    var name = $(this).parents(".card-content").children('.chip').children("i").html();
    $("#comment").html("回复 " + name + ":");
    $("#comment").focus();
});