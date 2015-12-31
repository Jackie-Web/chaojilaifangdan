/**
 * Created by JackieWu on 12/20/15.
 */
var $ = require('./common/zepto');
var ajax = require('./lib/ajax');
var Calendar = require('./common/Calendar');
var Url = require('./lib/get-url');
var mbox = require('./lib/Mbox');
var tpl = require('./lib/tpl');
var indexHtml = require('./tpl/index-tpl.html');
var linkHtml = require('./tpl/index-link-tpl.html');
var date = new Date();
var YEAR = date.getFullYear();
var MONTH = date.getMonth() + 1;
var DAY = date.getDate();

var url = new Url();
var tplRender = tpl.render;
var query = {
    $day: $('.J_index-day'),
    $center: $('.J_center'),
    $photo: $('.J_photo'),
    $wait: $('.J_wait-box'),
    $number: $('.J_wait-number'),
    $linkBox: $('.J_link-box'),
    $search: $('.J_search'),
    $deal: $('.J_deal'),
    $photoInput: $('#photo')
};
//设置今天日期
new Calendar({
    c: 'J_calendar',
    y: YEAR,
    m: MONTH,
    a: {
        'd1': '1971-01-01',//最早时间
        'd2': '2900-01-01'//最晚时间
    },
    f: 0//显示双日历用1，单日历用0
}, $);

query.$day.html(YEAR + '年' + MONTH + '月' + DAY + '日');

//个人中心
query.$center.on('click', function () {
    location.href = 'personal.html?user_id=' + url.parameter('user_id') + '&house_id=' + url.parameter('house_id') + '&house_name=' + url.parameter('house_name')
});
//客户查询
query.$search.on('click', function () {
    location.href = 'search.html?user_id=' + url.parameter('user_id') + '&house_id=' + url.parameter('house_id') + '&house_name=' + url.parameter('house_name') + '&order_type=20'
});
//成交助手
query.$deal.on('click', function () {
    location.href = 'deal.html?user_id=' + url.parameter('user_id') + '&deal_index=6' + '&deal_page_index=0' + '&house_id=' + url.parameter('house_id') + '&house_name=' + url.parameter('house_name')
});

query.$linkBox.html(tplRender(linkHtml, {
    user_id: url.parameter('user_id'),
    house_id: url.parameter('house_id'),
    house_name: url.parameter('house_name')
}));

//同时去访问一次
ajax({
    $: $,
    url: 'get_user_info',
    data: {
        user_id: url.parameter('user_id')
    },
    success: function (msg) {
        query.$photo.attr('src', msg.data.head_pic);
        query.$photoInput.on('change', function (e) {
            var file = $(this).get(0).files[0];
            if (!/image\/\w+/.test(file.type)) {
                mbox($, {
                    tips: '请上传图片'
                });
                return false;
            }
            var reader = new FileReader();
            //将文件以Data URL形式读入页面
            reader.readAsDataURL(file);
            reader.onload = function () {
                var _this = this;
                ajax({
                    $: $,
                    url: 'update_registration',
                    data: {
                        user_mobile: msg.data.user_mobile,
                        head_pic: _this.result
                    },
                    success: function (updateMsg) {
                        query.$photo.attr('src', _this.result);
                        mbox($, {
                            tips: updateMsg.msg
                        });
                    },
                    error: function (updateMsg) {
                        mbox($, {
                            tips: updateMsg.msg
                        });
                    }

                });
            }
        });

    },
    error: function (msg) {
        mbox($, {
            tips: msg.msg
        });
    }

});
ajax({
    $: $,
    url: 'user_task_list',
    data: {
        user_id: url.parameter('user_id')
    },
    success: function (msg) {
        query.$wait.html(tplRender(indexHtml, msg.data));

    },
    error: function (msg) {
        mbox($, {
            tips: msg.msg
        });
    }
});
//待办事项总数
ajax({
    $: $,
    url: 'user_task_count',
    data: {
        user_id: url.parameter('user_id')
    },
    success: function (msg) {
        query.$number.html(msg.data);
    },
    error: function (msg) {
        mbox($, {
            tips: msg.msg
        });
    }

});
