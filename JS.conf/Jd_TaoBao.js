hostname = api.m.jd.com, trade-acs.m.taobao.com

# 如果京东入会开卡打开无网络，是因为比价主机名导致，可以关闭本条重写规则解决
# 其他问题：暂时没有

# 京东比价
# 比价信息显示在商品下方
^https?://api\.m\.jd\.com/client\.action\?functionId=(wareBusiness|serverConfig|basicConfig) url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/jd_price.js

# 淘宝比价
# 历史价格在“保障”中显示，需要点击“保障”才能看到，和京东不一样
# “保障”显示在商品下方
# 如果还是不显示，那就把app卸载重新安装
^http:\/\/.+\/amdc\/mobileDispatch url script-request-body https://raw.githubusercontent.com/zwf234/rules/master/js/tb_price.js
^https?:\/\/trade-acs\.m\.taobao\.com\/gw\/mtop\.taobao\.detail\.getdetail url script-response-body https://raw.githubusercontent.com/zwf234/rules/master/js/tb_price.js
