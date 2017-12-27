#coding=utf-8
import json
import urllib
import urllib2

douyu = "http://open.douyucdn.cn/api/RoomApi/room/"
panda = "https://route.showapi.com/1369-1?showapi_appid=52218&showapi_sign=61a557c732a244c0ba0659d313a68f0c&page="
def getDouyuRoomInfo(room_number):
    returnObj = {}
    url = douyu + str(room_number)
    req = urllib2.Request(url)
    req.add_header("User-Agent","Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36") 
    res_data = urllib2.urlopen(req)
    res = res_data.read()
    data = json.loads(res)
    if(data['error'] == 0):
        room_status = data['data']['room_status']
        if(int(room_status) == 1):
            returnObj['room_thumb'] = data['data']['room_thumb']
            returnObj['owner_name'] = data['data']['owner_name']
            returnObj['room_name'] = data['data']['room_name']
            returnObj['online'] = data['data']['online']
            returnObj['cate_name'] = data['data']['cate_name']
            returnObj['link'] = 'https://www.douyu.com/' + data['data']['room_id']
            returnObj['platform'] = 'douyu'
            return returnObj
        else:
            return -1
    else:
        return -1
    
def getPandaRoomInfo(room_number):
    returnObj = {}
    flag = False
    tempData = {}
    for i in range(0,5):
        if(flag):
            break
        url = panda + str(i)
        req = urllib2.Request(url)
        req.add_header("User-Agent", "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36")
        res_data = urllib2.urlopen(req)
        res = res_data.read()
        data = json.loads(res)
        infoArr = data['showapi_res_body']['data']
        for i in infoArr:
            if(str(i['id']) == str(room_number)):
                flag = True
                tempData = i
                break

    if(tempData != {}):
        returnObj['room_thumb'] = tempData['pictures']['img']
        returnObj['owner_name'] = tempData['userinfo']['nickName']
        returnObj['room_name'] = tempData['name']
        returnObj['online'] = tempData['person_num']
        returnObj['cate_name'] = tempData['classification']['cname']
        returnObj['link'] = 'https://www.panda.tv/'+tempData['id']
        returnObj['platform'] = 'panda'
        return returnObj
    else:
        return -1
                
# print getPandaRoomInfo(181861)
# print getDouyuRoomInfo(123456)

def getAllRoomInfo(roomArr):
    returnArr = []
    for i in roomArr:
        print '******************'
        print i
        tvname = i['fields']['tvname']
        roomnumber = i['fields']['roomnumber']
        if(str(tvname) == 'panda'):
            try:
                tempRoomInfo = getPandaRoomInfo(roomnumber)
                returnArr.append(tempRoomInfo)
            except Exception,e:
                print e
        if(str(tvname) == 'douyu'):
            try:
                tempRoomInfo = getDouyuRoomInfo(roomnumber)
                returnArr.append(tempRoomInfo)
            except Exception,e:
                print e
    return returnArr

    
