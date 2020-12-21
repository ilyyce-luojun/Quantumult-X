hostname=app.bilibili.com,api.bilibili.com,,api.live.bilibili.com,api.vc.bilibili.com,account.wps.*,book.haitunwallet.com,app.xunjiepdf.com,*.my10api.com,api.shayujizhang.com,musicpay.kuwo.cn,vip1.kuwo.cn,mapi.weibo.com, *.uve.weibo.com,

# WPS (By eHpo)
^https://account.wps.*/api/users/ url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Wps.js

# 哔哩哔哩番剧开启1080P+
^https:\/\/ap(p|i)\.bilibili\.com\/((pgc\/player\/api\/playurl)|(x\/v2\/account\/myinfo\?)|(x\/v2\/account/mine\?)) url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/bilifj.js

#bilibi去广告
# 去除动态中的话题
^https?:\/\/api\.vc\.bilibili\.com\/topic_svr\/v1\/topic_svr url reject-dict
# 去除动态中的最常访问
^https?:\/\/api\.vc\.bilibili\.com\/dynamic_svr\/v1\/dynamic_svr\/mix_uplist url reject-dict
# 推荐去广告
^https?:\/\/app\.bilibili\.com\/x\/v2\/feed\/index url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js
# 追番去广告
^https?:\/\/api\.bilibili\.com\/pgc\/page\/bangumi url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js
# 直播去广告
^https?:\/\/api\.live\.bilibili\.com\/xlive\/app-room\/v1\/index\/getInfoByRoom url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js
# 开屏去广告
^https?:\/\/app\.bilibili\.com\/x\/v2\/splash\/list url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js
# 标签页处理
^https?:\/\/app\.bilibili\.com\/x\/resource\/show\/tab url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js
# 我的页面处理
^https?:\/\/app\.bilibili\.com\/x\/v2\/account\/mine url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js
# 其他去广告
^https?:\/\/manga\.bilibili\.com\/twirp\/comic\.v\d\.Comic\/Flash url reject-dict
^https?:\/\/ap(i|p)\.bilibili\.com\/((x\/v2|pgc)\/(search\/defaultword|season\/rank\/cn)|(pgc/season/rank/cn|x/v2/(search/(defaultword|hot|recommend|resource)))) url reject-dict
^https?:\/\/api\.bilibili\.com\/x\/v2\/dm\/ad url reject-dict
^https?:\/\/manga\.bilibili\.com\/twirp\/comic\.v\d\.comic\/flash url reject-dict

# 扫描全能王 pro
^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/CamScanner.js

#海豚记账 (by @superuv)
https:\/\/book\.haitunwallet\.com\/app\/vip\/status url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/HTJZ.js

#智能证件照相机 (by @superuv)
^https:\/\/app\.xunjiepdf\.com\/api\/v4\/virtualactregister url script-response-body https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/znzj.js

# 91短视频解锁VIP和金币
^https?:\/\/.+\.(my10api|(.*91.*))\.(com|tips|app|xyz)(:\d{2,5})?\/api.php$ url script-response-body https://raw.githubusercontent.com/JungegeCN/JGG/master/91.js

#鲨鱼记账 需要登录 解锁会员记账权限
https://api.shayujizhang.com/account/detail/info/ url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/syjz.js

# 去微博应用内广告
^https?://(sdk|wb)app.uve.weibo.com(/interface/sdk/sdkad.php|/wbapplua/wbpullad.lua) url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/wb_launch.js
^https?://m?api\.weibo\.c(n|om)/2/(statuses/(unread|extend|positives/get|(friends|video)(/|_)(mix)?timeline)|stories/(video_stream|home_list)|(groups|fangle)/timeline|profile/statuses|comments/build_comments|photo/recommend_list|service/picfeed|searchall|cardlist|page|!/photos/pic_recommend_status|video/tiny_stream_video_list|photo/info) url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/wb_ad.js
