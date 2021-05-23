from django.urls import path
from rest_framework_simplejwt import views as jwt_views
from .import views

urlpatterns =[
      # path('api/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
      path('all-user/',views.getAlluser,name='getAllBlog'),
      path('login-user/',views.LoginUser,name='LoginUser'),
      path('register-user/',views.Registeruser,name='Registeruser'),
      path('user-blogs/',views.getAllBlog,name='getAllBlog'),
      path('create-blog/',views.createBlog,name='createBlog'),
      path('logged-in-blog/',views.getlogeedblog,name='getlogeedblog'),
      path('fetch-blog/<int:id>',views.fetchlogeedblog,name='fetchlogeedblog'),
      path('delete-blog/<int:id>',views.deleteblog,name='deleteblog'),
      path('edit-blog/<int:id>',views.editblog,name='editblog')
]

