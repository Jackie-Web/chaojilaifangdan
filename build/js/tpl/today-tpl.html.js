module.exports='<?js if(it.data.length > 0){ ?><div class="wait today-box"><?js it.data.forEach(function(item,k){ ?><div class="box"><?js item.list.forEach(function(listItem, i){ ?><?js var order_type = \'\',next_order_type = \'\',day=\'\'; ?><?js var href = \'javascript:;\'; ?><?js if(listItem.order_type == 1){ ?><?js     order_type= \'邀约来访\'; ?><?js     next_order_type= \'再次来访\'; ?><?js  }else if(listItem.order_type == 2){ ?><?js     order_type= \'再次来访\'; ?><?js     next_order_type= \'付意向金\'; ?><?js  }else if(listItem.order_type == 3){ ?><?js     order_type= \'付意向金\';?><?js     next_order_type= \'付定金\'; ?><?js  }else if(listItem.order_type == 4){ ?><?js      order_type= \'付定金\'; ?><?js     next_order_type= \'签约\'; ?><?js  }else if(listItem.order_type == 5){ ?><?js      order_type= \'签约\'; ?><?js     next_order_type= \'待付款\'; ?><?js  }else if(listItem.order_type == 6){ ?><?js      order_type= \'待付款\'; ?><?js     next_order_type= \'确认付款\'; ?><?js  }else if(listItem.order_type == 7){ ?><?js      order_type= \'确认付款\'; ?><?js     next_order_type= \'完成\'; ?><?js  } ?><?js if((JSON.parse(listItem.order_type) + 1) != 1 && (listItem.order_type < 8)){ ?><?js     href= \'./search.html?user_id=\'+ it.user_id +\'&house_name=\'+ it.house_name +\'&house_id=\'+ it.house_id +\'&deal=\'+ listItem.customer_name +\'&order_type=\'+ (JSON.parse(listItem.order_type) + 1) +\'\'; ?><?js } else { ?><?js href = \'javascript:;\'; ?><?js } ?><?js if(!!~listItem.diff_days.toString().indexOf(\'-\')){ ?><?js     day = \'过期\'+listItem.diff_days.toString().split(\'-\')[1]+\'天\' ?><?js  }else if(listItem.diff_days === 0){ ?><?js     day = \'今日\' ?><?js  }else { ?><?js     day = \'还剩\'+listItem.diff_days+\'天\' ?><?js  } ?><div class="wait-list J_wait-list"><div class="list-box"><div class="list-left"><i class="list-icon-01"></i><span>客户姓名</span></div><div class="list-right"><span>@{listItem.customer_name}</span></div></div><div class="list-box"><div class="list-left"><i class="list-icon-02"></i><span>当前级别</span></div><div class="list-right"><span>@{listItem.level}级客户</span></div></div><div class="list-box"><div class="list-left"><i class="list-icon-03"></i><span>最新接触</span></div><div class="list-right"><span>@{listItem.lasttime},@{order_type}</span></div></div><div class="list-box"><div class="list-left"><i class="list-icon-04"></i><span>邀约来访</span></div><div class="list-right J_customer-mobile"><a><i class="right-icon-1"></i></a><a><i class="right-icon-2"></i></a></div></div><div class="list-box"><div class="list-left"><i class="list-icon-05"></i><span>下一步行动</span></div><div class="list-right"><a href="@{href}" class="link-a">@{next_order_type}</a></div></div><div class="list-box"><div class="list-left"><i class="list-icon-06"></i><span>倒计时</span></div><div class="list-right J_customer-date-input"><span>@{day}</span><label for="input-@{k}-@{i}"><input type="date" id="input-@{k}-@{i}"/><i class="right-icon-3"></i></label></div></div></div><?js }); ?></div><?js }); ?></div><?js } ?>';