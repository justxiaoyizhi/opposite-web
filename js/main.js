/**
 * Created by Xiao on 2016/12/7.
 */

/* 左侧滑动菜单 */
$('.button-collapse').sideNav({
        menuWidth: 300, // Default is 240
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
    }
);

/* 切换正反话题时 */
var switchChanged = true;
$('#oppositeSwitch').on('change', function (data) {
    switchChanged = !switchChanged;
    // false 为反方
    if(!switchChanged) {
        Materialize.toast('反方话题', 1500)
    } else {
        Materialize.toast('正方话题', 1500)
    }
});

/* 提问按钮展开提问面板 */
$('.modal').modal();
