# Create your views here.
#coding=utf-8
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
from models import Pictures,Accounts,Comments,DetailInfo,TestModel,TestModel2
from django.core import serializers
from django.views.decorators.csrf import csrf_protect,csrf_exempt
import functions
import aliyunSTS
import hashlib
import json
import urllib
import sys
import re
reload(sys)
sys.setdefaultencoding("utf-8")


@require_http_methods(["GET"])
def get_pic_urls(request):
    response = {}
    try:
        pictures = Pictures.objects.filter()
        response['list']  = json.loads(serializers.serialize("json", pictures))
        response['msg'] = 'success'
        response['error_num'] = 0
    except  Exception,e:
        response['msg'] = str(e)
        response['error_num'] = 1

    return JsonResponse(response)

@require_http_methods(["GET"])
def add_pic_urls(request):
    response = {}
    try:
        picture = Pictures(pic_name=request.GET.get('pic_name'),pic_url=request.GET.get('pic_url'))
        picture.save()
        response['msg'] = 'success'
        response['error_num'] = 0
    except  Exception,e:
        response['msg'] = str(e)
        response['error_num'] = 1

    return JsonResponse(response)

@csrf_protect
@csrf_exempt
@require_http_methods(["POST"])
def account_register(request):
    response = {}
    _username = request.POST['username']
    _password = request.POST['password']
    _nickname = request.POST['nickname']
    p2 = re.compile('^0\d{2,3}\d{7,8}$|^1[358]\d{9}$|^147\d{8}')
    pswd2 = re.compile('^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$')
    phonematch = p2.match(_username)    
    pswdmatch = pswd2.match(_password)
    if(not phonematch):
        response['msg'] = 'username invalid'
        response['error_num'] = 0
        return JsonResponse(response)
    if(not pswdmatch):
        response['msg'] = 'password invalid'
        response['error_num'] = 0
        return JsonResponse(response)
    if(len(_nickname) < 6):
        response['msg'] = 'nickname invalid'
        response['error_num'] = 0
        return JsonResponse(response)
    try:
        hasAccount = Accounts.objects.filter(username=_username)
        if(hasAccount):
            response['msg'] = '该用户名已被注册'
            response['error_num'] = 0
            return JsonResponse(response)
        account = Accounts(username=_username,password=_password,nickname=_nickname)
        account.save()
        response['msg'] = 'success'
        response['error_num'] = 0
    except  Exception,e:
        response['msg'] = str(e)
        response['error_num'] = 1
    return JsonResponse(response)


@csrf_protect
@csrf_exempt
@require_http_methods(["POST"])
def account_login(request):
    response = {}
    try:
        hasAccount = Accounts.objects.get(username=_username)
        if(hasAccount):
            if(hasAccount.password==hashlib.sha1(_password+_username).hexdigest()):
                response['msg'] = 'success'
                response['error_num'] = 0
                return JsonResponse(response)
            response['msg'] = 'passwordError'
            response['error_num'] = 0
            return JsonResponse(response)

    except  Exception,e:
        response['msg'] = 'notRegisterd'
        response['error_num'] = 0
        return JsonResponse(response)
    return JsonResponse(response)


@csrf_protect
@csrf_exempt
@require_http_methods(["POST"])
def set_detailInfo(request):
    response = {}
    try:
        detailInfo = DetailInfo.objects.get(username=request.POST['username'])
        detailInfo.name=functions._getDetailInfo(detailInfo.name,request.POST['name'])
        detailInfo.address=functions._getDetailInfo(detailInfo.address,request.POST['address'])
        detailInfo.gender=functions._getDetailInfo(detailInfo.gender,request.POST['gender'])
        detailInfo.school=functions._getDetailInfo(detailInfo.school,request.POST['school'])
        detailInfo.headpic_url=functions._getDetailInfo(detailInfo.headpic_url,request.POST['headpic_url'])
        detailInfo.save()
        response['msg'] = 'success'
        response['error_num'] = 0
        return JsonResponse(response)

    except  DetailInfo.DoesNotExist:
        username = request.POST['username']
        name=request.POST['name']
        address=request.POST['address']
        gender=request.POST['gender']
        school=request.POST['school']
        headpic_url=request.POST['headpic_url']
        detailInfo = DetailInfo(username=username,name=name,address=address,gender=gender,school=school,headpic_url=headpic_url)
        try:
            detailInfo.save()
            response['msg'] = 'success'
            response['error_num'] = 0
        except  Exception,e:
            response['msg'] = str(e)
            response['error_num'] = 1
    return JsonResponse(response)


@require_http_methods(["GET"])
def comment(request):
    response = {}
    try:
        comment = Comments(user=request.GET.get('user'),comment=request.GET.get('comment'))
        comment.save()
        response['msg'] = 'success'
        response['error_num'] = 0
    except  Exception,e:
        response['msg'] = str(e)
        response['error_num'] = 1

    return JsonResponse(response)


@csrf_protect
@csrf_exempt
@require_http_methods(["GET"])
def stsToken(request):
    response = {}
    try:
        session_name = request.GET.get('session_name')
        data = aliyunSTS._getSTStoken(session_name)
        response['Access-Control-Allow-Origin'] = '*'
        response['data'] = data
        response['msg'] = 'success'
        response['error_num'] = 0
    except  Exception,e:
        response['msg'] = str(e)
        response['error_num'] = 1

    return JsonResponse(response)



# Test api
@require_http_methods(["GET"])
def test_model(request):
    response = {}
    try:
        page_size = functions._getPageSize(request.GET.get('page_size'))
        page_num = functions._getPageNum(request.GET.get('page_num'))
        search_key= request.GET.get('search_key')

        if search_key:
            testmodel = TestModel.objects.filter(title__contains=search_key)
        else:
            testmodel = TestModel.objects.filter()

        tempList  = json.loads(serializers.serialize("json", testmodel))
        tempList2 = []

        # 处理返回的数据
        for i in tempList:
            tempList2.append({
                'times':i['fields']['times'],
                'user_num':i['fields']['user_num'],
                'title':i['fields']['title']
            })
        total = len(tempList2)

        data = {
            'list':tempList2,
            'total':total
        }
        response['data'] = data
        response['msg'] = 'success'
        response['success'] = True
        response['error_num'] = 0
    except  Exception,e:
        response['msg'] = str(e)
        response['error_num'] = 1

    return JsonResponse(response)



@require_http_methods(["GET"])
def test_model_fjy(request):
    response = {}
    try:
        testmodel = TestModel2.objects.filter().order_by('date')
        tempList  = json.loads(serializers.serialize("json", testmodel))
        tempList2 = []


        # 处理返回的数据
        for i in tempList:
            tempList2.append({
                'date':i['fields']['date'],
                'leijiyaoqing_yh':i['fields']['leijiyaoqing_yh'],
                'xinzengyaoqing_yh':i['fields']['xinzengyaoqing_yh'],
                'leijiduihuan_kc':i['fields']['leijiduihuan_kc'],
                'xinzengduihuan_kc':i['fields']['xinzengduihuan'],
                'leiji_kcyh':i['fields']['leiji_kcyh'],
                'xinzeng_kcyh':i['fields']['xinzeng_kcyh'],
                '__v':i['fields']['v'],
            })
        total = len(tempList2)

        data = {
            'list':tempList2,
            'total':total
        }
        response['data'] = data
        response['msg'] = 'success'
        response['success'] = True
        response['error_num'] = 0
    except  Exception,e:
        response['msg'] = str(e)
        response['error_num'] = 1

    return JsonResponse(response)
