"""Fauzan_cipher URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, re_path
from django.views.generic import TemplateView
from ciphers import views
from django.conf.urls import url
from django.conf.urls import include
from ciphers.views import (
    MessageView,
    cipherView,
    decipherView,
    id_provider,
)

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('api/<pk>/', MessageView.as_view()),
    path('ciphering/',cipherView,name="ciphering" ),
     path('deciphering/',decipherView,name="deciphering" ),
    path('id_provider/',id_provider,name="id_provider" ),
    path('', TemplateView.as_view(template_name='index.html')),

	#path('', views.re_message),
   # re_path(r'^api/cipher/([0-9])$', views.students_detail),
]
