from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Blogs(models.Model):
    title=models.CharField(null=True,blank=True,max_length=50)
    discription=models.TextField(null=True,blank=True)
    created_at=models.DateField(auto_now=False, auto_now_add=True, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    # image = models.ImageField()
   
    

    def __str__(self):
        return self.title