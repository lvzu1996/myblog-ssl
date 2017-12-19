# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-12-18 05:10
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='LiveCenterAccounts',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=11)),
                ('password', models.CharField(max_length=256)),
                ('nickname', models.CharField(max_length=16)),
                ('register_time', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Subscribe',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('userid', models.IntegerField()),
                ('tvname', models.CharField(max_length=256)),
                ('roomnumber', models.CharField(max_length=16)),
            ],
        ),
    ]