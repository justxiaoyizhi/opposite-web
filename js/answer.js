/**
 * Created by Administrator on 2017/3/12.
 */
var editor;
$(function() {
    editor = new Simditor({
        textarea: $('#editor')
    });
});

$(".answer-box .answer-footer .action").click(function() {
    $(this).toggleClass("action");
    $(this).toggleClass("action-active");
});

$(document).on("click","#submit-answer",function() {
    alert(editor.getValue());
})