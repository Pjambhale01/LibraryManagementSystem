from django.contrib.auth import models
from django.db.models import fields
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator
from .models import Blogs
class UserSerializers(serializers.ModelSerializer):
    username = serializers.CharField(required=True,validators=[UniqueValidator(queryset=User.objects.all())])
    email = serializers.EmailField(required=True,validators=[UniqueValidator(queryset=User.objects.all())])
    password = serializers.CharField(required=True, write_only=True)

    class Meta:
        model = User
        fields = ['id','username','email','password']
   

    # def get_first_name(self,obj):
    #     return obj.username.capitalize()

class BlogSerializers(serializers.ModelSerializer):

    class Meta:
        model = Blogs
        fields = ["id","title","discription","created_at","user"]
