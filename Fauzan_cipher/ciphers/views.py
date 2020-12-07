from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    DestroyAPIView,
    UpdateAPIView
)
from .serializers import MessageSerializer
from .models import Message
from django.views.decorators.csrf import ensure_csrf_cookie
from django.db.models import Avg, Max, Min, Sum


class MessageView(RetrieveAPIView):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer
     
#class cipherView(CreateAPIView):
#    queryset = Message.objects.all()
#    serializer_class = MessageSerializer
@api_view(['POST'])
def cipherView(request):
    string=""
    ciphered= request.data['message']
   
   
    print(request.data['message'])
    serializer = MessageSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def id_provider(request):
    msg=Message.objects.all().aggregate(Max('Mid'))
    key=msg['Mid__max']
    key+=1
    return Response(key)
    


