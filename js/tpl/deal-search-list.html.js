module.exports='<?js it.msg.forEach(function(item,i){ ?><div class="deal-box"><div class="search-result-list"><div class="search-list"><i class="s-icon-1"></i><div class="s-title">客户姓名</div><div class="s-cont">@{item.customer_name}</div></div><div class="search-list"><i class="s-icon-2"></i><div class="s-title">当前级别</div><div class="s-cont"><div class="border"><i></i>@{item.customer_level}级客户</div></div></div><div class="search-list"><i class="s-icon-3"></i><div class="s-title">最新接触</div><div class="s-cont">@{item.lasttime}</div></div><div class="search-list"><i class="s-icon-4"></i><div class="s-title">快速联系</div><div class="s-cont"><a href="sms:@{item.customer_mobile}" class="s-icon-5"></a><a href="tel:@{item.customer_mobile}" class="s-icon-6"></a></div></div></div><div class="deal-state"><div class="search-list"><i class="s-i-icon-5"></i><div class="s-title">下一步行动</div><a href="" class="s-cont font-color">付意向金</a></div><div class="search-list"><i class="s-i-icon-6"></i><div class="s-title">计划时间</div><div class="s-cont"><span>3</span></div><label for="date-@{i}" class="time-icon"><input type="date" id="date-@{i}" class="hide"/></label></div></div></div><?js }); ?>';