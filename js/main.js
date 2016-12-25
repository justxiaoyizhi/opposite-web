/**
 * Created by Xiao on 2016/12/7.
 */
$.material.init();

/**
 * 侧边栏插件
 */
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});
