from rest_framework import routers
from World_Cooking_App.views import DishesViewSet, CategoriesViewSet
from django.urls import path, include
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
   openapi.Info(
      title='Dishes API',
      default_version='v1',
      description='API documentation for Dishes App',
      terms_of_service='https://www.google.com/policies/terms/',
      contact=openapi.Contact(email="test@test.local"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)

router = routers.DefaultRouter()
router.register('v1/dishes', DishesViewSet, basename='dish')
router.register('v1/categories', CategoriesViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('swagger.json/', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
]