# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

import hashlib
# Create your models here.
#

class Pictures(models.Model):
    pic_name = models.CharField(max_length=64)
    pic_url = models.URLField()
    add_time = models.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return self.pic_name

class Accounts(models.Model):
    username = models.CharField(max_length=11)
    password = models.CharField(max_length=256)
    nickname = models.CharField(max_length=16)
    register_time = models.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return self.username
    def save(self,*args,**kwargs):
        self.password = hashlib.sha1(self.password+self.username).hexdigest()
        super(Accounts,self).save(*args,**kwargs)

class Comments(models.Model):
    user = models.CharField(max_length=16)
    comment = models.CharField(max_length=255)
    comment_time = models.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return self.user

class DetailInfo(models.Model):
    username = models.CharField(max_length=16)
    name = models.CharField(max_length=255,blank=True)
    address = models.CharField(max_length=255,blank=True)
    gender = models.CharField(max_length=10,blank=True)
    school = models.CharField(max_length=255,blank=True)
    headpic_url = models.URLField(blank=True)

    def __unicode__(self):
        return self.username

class TestModel(models.Model):
    title = models.CharField(max_length=64)
    user_num = models.CharField(max_length=64)
    times = models.CharField(max_length=64)

    def __unicode__(self):
        return self.title


class TestModel2(models.Model):
    date = models.DateField()
    leijiyaoqing_yh = models.CharField(max_length=64)
    xinzengyaoqing_yh = models.CharField(max_length=64)
    leijiduihuan_kc = models.CharField(max_length=64)
    xinzengduihuan = models.CharField(max_length=64)
    leiji_kcyh = models.CharField(max_length=64)
    xinzeng_kcyh = models.CharField(max_length=64)
    v = models.CharField(max_length=64)

    def __unicode__(self):
        return '测试数据'

class LiveCenterAccounts(models.Model):
    username = models.CharField(max_length=16)
    password = models.CharField(max_length=256)
    register_time = models.DateTimeField(auto_now_add=True)

    def __unicode__(self):
        return self.username
    def save(self,*args,**kwargs):
        self.password = hashlib.sha1(self.password+self.username).hexdigest()
        super(LiveCenterAccounts,self).save(*args,**kwargs)


class Subscribe(models.Model):
    userid = models.IntegerField()
    tvname = models.CharField(max_length=256)
    roomnumber = models.CharField(max_length=16)

    def __unicode__(self):
        return self.userid


class LiveCenterSession(models.Model):
    userid = models.IntegerField()
    session_key = models.CharField(max_length=256)
    session_value = models.CharField(max_length=256)
    expire = models.IntegerField()

    def __unicode__(self):
        return self.userid

    def isExpired(self,date):
        return date > self.expire
    

