cd blogfront
call npm run build
cd ..
call python manage.py collectstatic
call python manage.py runserver