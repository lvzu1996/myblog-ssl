# this is my first full-stack program

>@author:lvzu  
>@Updated date:2017/09/19  
>@say something : hope to become a full-stack programer!  

## Technology Stack

vue.js python2 django mysql

## Program Tree
front:  
├── build --编译配置  
├── config  
├── dist  --编译后引用目录  
├── index.html  --本地测试页面  
├── node_modules  --依赖包  
├── package.json  --依赖项  
├── README.md  
├── src  --源码  
└── static  --本地测试静态资源  
back:  
configure  
├── __init__.py  
├── settings.py  --django项目配置文件  
├── urls.py  --django项目路由配置  
├── wsgi.py  
apps  
├── admin.py  
├── apps.py  
├── __init__.py  
├── migrations  
├── models.py  --model文件，用于自动生成mysql表  
├── tests.py  
├── urls.py  
├── views.py  --app页面，本例中展示了两个接口  


## Build Setup

``` bash


<VirtualHost *:80>
        DocumentRoot /var/www/myblog/myproject
        ServerName 127.0.0.1

        Alias /static/ /var/www/myblog/static/

<Directory /var/www/myblog/static/>
        Require all granted
</Directory>

        WSGIScriptAlias / /var/www/myblog/myproject/wsgi.py

</VirtualHost>
                    

# git clone
git clone https://github.com/lvzu1996/myblog.git

# mysql installation
sudo apt-get install mysql-server
apt-get isntall mysql-client
sudo apt-get install libmysqlclient-dev

# django relience

pip install aliyun-python-sdk-sts
pip install django-cors-headers
pip install mysqlclient
pip install MySQL-python

# install dependencies
cd blogfront
npm install

# build for production with minification
cd blogfront
npm run build
python manage.py collectstatic

# mysql configure
myproject/settings.py

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'myblog',
        'USER': 'root',//your database username
        'PASSWORD': '',//your password
        'HOST': '127.0.0.1',
    }
}

#deployment
./deployment

# django's auto build mysql table
python manage.py makemigrations myapp
python manage.py migrate

#run this programe
cd myproject
python manage.py runserver
```

For detailed explanation on how things work
contact with lvzu
>wechat:lvzu_lvzu
qq:385162733
