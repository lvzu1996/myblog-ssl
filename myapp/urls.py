# -*- coding: utf-8 -*-
from django.conf.urls import url, include
import views

urlpatterns = [
url(r'get_pic_urls$', views.get_pic_urls),
url(r'add_pic_urls$', views.add_pic_urls),
url(r'account_register$', views.account_register),
url(r'account_login$', views.account_login),
url(r'comment$', views.comment),
url(r'set_detailInfo$', views.set_detailInfo),
url(r'getSTStoken$', views.stsToken),

#测试api
url(r'test_model$', views.test_model),
url(r'test_model_fjy$', views.test_model_fjy),

#livecener
url(r'livecenter_register$', views.livecenter_register),
url(r'livecenter_login$', views.livecenter_login),
url(r'livecenter_subscribe$', views.livecenter_subscribe),
url(r'livecenter_getSubscribeList$', views.livecenter_getSubscribeList),

url(r'get_douyu$', views.get_douyu),


]

