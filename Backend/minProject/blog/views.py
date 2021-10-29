# from Backend.minProject import blog
from rest_framework import serializers
from .models import Blogs
from django.shortcuts import render
from django.contrib.auth.hashers import make_password
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from django.contrib.auth.models import User
from .serializers import UserSerializers,BlogSerializers
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from rest_framework_simplejwt.tokens import RefreshToken

@api_view(['GET'])
# @permission_classes([IsAdminUser])
def getAlluser(request):
    user = User.objects.all()
    serializers = UserSerializers(user,many=True)
    return Response(data=serializers.data,status=200)

@api_view(['POST'])
# @authentication_classes([TokenAuthentication])

def LoginUser(request):
    try:
        data = request.data
        password = data['password']
        username = data['username']
        userData = User.objects.get(username=username)
        if userData.check_password(password):
            # token,_ = Token.objects.get_or_create(user_id=userData.id)
            token=RefreshToken.for_user(userData)
            user = UserSerializers(userData)
            return Response(data={"token":str(token.access_token),"user":user.data},status = 200)
        else:
            message = {'detail': "User with this password doesn't exist"}
            return Response(message, status=401)

    except:
        message = {'detail': "User with this Username doesn't exist"}
        return Response(message, status=401)

@api_view(['POST'])
def Registeruser(request):
    password = request.data["password"]
    serializer = UserSerializers(data={**request.data, "password":make_password(password)})
    if serializer.is_valid():
        serializer.save()
        user = User.objects.last()
        token=RefreshToken.for_user(user)
        serializers2 = UserSerializers(user)
        return Response(data={"token": str(token.access_token), "user": serializers2.data}, status=201)
    else:
        return Response(data=serializer.errors, status=400)
      


@api_view(["GET"])
# @authentication_classes([IsAuthenticated])
def getAllBlog(request):
    blogs = Blogs.objects.all()
    serializer = BlogSerializers(blogs,many=True)
    return Response(data=serializer.data)


@api_view(['POST'])
def createBlog(request):
    serializer = BlogSerializers(data=request.data)
    if serializer.is_valid():
        serializer.save()
    else:
         return Response(serializer.errors,status=400)
    return Response(serializer.data, status=201)

    
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getlogeedblog(request):
    blogs = Blogs.objects.filter(user=request.user.id)
    print(request.user.id)
    serializer = BlogSerializers(blogs,many=True)
    return Response(data=serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def fetchlogeedblog(request,id):
    blogs = Blogs.objects.get(id=id)
    serializer = BlogSerializers(blogs)
    return Response(data=serializer.data)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def deleteblog(request,id):
    blogs = Blogs.objects.get(id=id)
    blogs.delete()
    return Response(data=None,status=204)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def editblog(request,id):
    blogs = Blogs.objects.get(id=id)
    serializer = BlogSerializers(data=request.data,instance=blogs)
    if serializer.is_valid():
        serializer.save()
    else:
        return Response(serializer.errors,status=400)
    return Response(serializer.data ,status=200)    

