# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Accounts',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('username', models.CharField(max_length=11)),
                ('password', models.CharField(max_length=256)),
                ('nickname', models.CharField(max_length=16)),
                ('register_time', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Comments',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('user', models.CharField(max_length=16)),
                ('comment', models.CharField(max_length=255)),
                ('comment_time', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='DetailInfo',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('username', models.CharField(max_length=16)),
                ('name', models.CharField(max_length=255, blank=True)),
                ('address', models.CharField(max_length=255, blank=True)),
                ('gender', models.CharField(max_length=10, blank=True)),
                ('school', models.CharField(max_length=255, blank=True)),
                ('headpic_url', models.URLField(blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='Pictures',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('pic_name', models.CharField(max_length=64)),
                ('pic_url', models.URLField()),
                ('add_time', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='TestModel',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=64)),
                ('user_num', models.CharField(max_length=64)),
                ('times', models.CharField(max_length=64)),
            ],
        ),
        migrations.CreateModel(
            name='TestModel2',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('date', models.DateField()),
                ('leijiyaoqing_yh', models.CharField(max_length=64)),
                ('xinzengyaoqing_yh', models.CharField(max_length=64)),
                ('leijiduihuan_kc', models.CharField(max_length=64)),
                ('xinzengduihuan', models.CharField(max_length=64)),
                ('leiji_kcyh', models.CharField(max_length=64)),
                ('xinzeng_kcyh', models.CharField(max_length=64)),
                ('v', models.CharField(max_length=64)),
            ],
        ),
    ]
