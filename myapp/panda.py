#encoding:utf-8

from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

panda = "https://www.panda.tv/"

def getPandaRoomInfo(room_number):
    returnObj = {}
    url = panda + str(room_number)
    dcap = dict(DesiredCapabilities.PHANTOMJS)
    dcap["phantomjs.page.settings.userAgent"] = (
    "Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.6) Gecko/20091201 Firefox/3.5.6"
    )
    dcap["phantomjs.page.settings.loadImages"] = False #禁止加载图片
    driver = webdriver.PhantomJS(executable_path='../phantomjs',desired_capabilities=dcap)
    # driver.set_script_timeout(10)
    # driver.set_page_load_timeout(10)
    driver.get(url)
    html_doc = driver.page_source #这就是返回的页面内容了，与urllib2.urlopen().read()的效果是类似的，但比urllib2强在能抓取到动态渲染后的内容。
    soup = BeautifulSoup(html_doc,'lxml')

    if(soup("span","room-head-info-last-livedate")):
        print '未直播'
        # a = driver.find_element_by_class_name('room-head-info')
        # resultSet = soup("div","room-head-info-cover")
        # # print resultSet
        # imgParentDiv = resultSet[0]
        # imgdom = imgParentDiv.find("img")
        # print imgdom.get('src')
        
    else:
        # returnObj['room_thumb'] = i['pictures']['img']
        # returnObj['onlinee'] = i['userinfo']['nickName']
        # returnObj['room_name'] = i['name']
        # returnObj['online'] = i['person_num']
        # returnObj['cate_name'] = i['classification']['cname']
        owner_name = soup("span", "room-head-info-hostname")[0].get_text()
        cate_name = soup("a", "room-head-info-cate")[0].get_text()
        online = soup("span","num")[1].get_text()
        room_name = soup("h1", "room-head-info-title")
        # print owner_name
        # resultSet = soup("div","room-head-info-cover")
        # # print resultSet
        # a = driver.find_element_by_class_name('room-head-info')
        # a.screenshot('a.png')
        # imgParentDiv = resultSet[0]
        # imgdom = imgParentDiv.find("img")
        # print '在直播'
        # print imgdom.get('src')
        return room_name

    driver.quit()


print getPandaRoomInfo(575757)
