hostname=account.wps.cn,account.wps.*,book.haitunwallet.com,api.shayujizhang.com,musicpay.kuwo.cn,vip1.kuwo.cn,mapi.weibo.com, *.uve.weibo.com,*.dayuxiangqian.com,ap*.intsig.net,m.baidu.com,homepage-api.smzdm.com,haojia-api.smzdm.com,article-api.smzdm.com,haojia.m.smzdm.com,app-api.smzdm.com,s-api.smzdm.com,api1000.gdqeb.club,69shipin.vip,jk.5apk.cn,

 # 去微博应用内广告- （mapi.weibo.com, *.uve.weibo.com）
^https?://(sdk|wb)app.uve.weibo.com(/interface/sdk/sdkad.php|/wbapplua/wbpullad.lua) url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/wb_launch.js
^https?://m?api\.weibo\.c(n|om)/2/(statuses/(unread|extend|positives/get|(friends|video)(/|_)(mix)?timeline)|stories/(video_stream|home_list)|(groups|fangle)/timeline|profile/statuses|comments/build_comments|photo/recommend_list|service/picfeed|searchall|cardlist|page|!/photos/pic_recommend_status|video/tiny_stream_video_list|photo/info) url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/wb_ad.js

#百度UA设置及优化手机端网页显示-（ m.baidu.com）
^https?:\/\/m\.baidu\.com url request-header (\r\n)User-Agent:.+(\r\n) request-header $1User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/16C50 Quark/604.1 T7/10.3 SearchCraft/2.6.3 (Baidu; P1 8.0.0)$2

# 什么值得买去广告-(homepage-api.smzdm.com,haojia-api.smzdm.com,article-api.smzdm.com,haojia.m.smzdm.com,app-api.smzdm.com,s-api.smzdm.com)
# 详情页去广告
^https?:\/\/haojia\.m\.smzdm\.com\/detail_modul\/banner url reject-dict
# 首页去广告
^https?:\/\/homepage-api\.smzdm\.com\/home url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_remove_ads.js
# 好价去广告
^https?:\/\/haojia-api\.smzdm\.com\/home\/list url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_remove_ads.js
# 去浮动广告
^https?:\/\/app-api\.smzdm\.com\/util\/update url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_remove_ads.js
# 好文去广告
^https?:\/\/article-api\.smzdm\.com\/article\/index_home_page url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_remove_ads.js
# 搜索去广告
^https?:\/\/s-api\.smzdm\.com\/sou\/list url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_remove_ads.js
# 其他
^https?:\/\/api\.smzdm\.com\/v\d\/util\/(banner|loading) url reject-dict
^https?:\/\/app-api\.smzdm\.com\/util\/loading url reject-dict

# 酷我音乐SVIP (By yxiaocai)
^https?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/user\/vip|vip\/spi/mservice) url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Kuwo.js
^https?:\/\/musicpay\.kuwo\.cn\/music\.pay\?uid\=\d+ url 302 http://musicpay.kuwo.cn/music.pay?uid=1
#酷我换肤(已经有的皮肤需要先从本地皮肤删除再换)
^https?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/theme)  url script-response-body   https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/themekuwo.js

# 抖音去广告去水印
^https?:\/\/.*\.amemv\.com\/aweme\/v2\/(follow\/)?feed\/ url request-header ^GET \/aweme\/v\d\/(follow\/)?feed\/(.+\r\n) request-header GET /aweme/v1/$1feed/$2 
^https?:\/\/.*\.amemv\.com\/aweme\/v\d\/(feed|mix\/aweme|aweme\/post|(multi\/)?aweme\/detail|follow\/feed|nearby\/feed|search\/item|general\/search\/single|hot\/search\/video\/list)\/ url script-response-body https://raw.githubusercontent.com/zwf234/rules/master/js/douyin.js
# 去微信公众号广告 (By Choler)
^https?:\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/Wechat.js
# 扫描全能王 pro
^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/CamScanner.js
 
# WPS (By eHpo)
^https://account.wps.*/api/users/ url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Wps.js

 
