from rest_framework.viewsets import ReadOnlyModelViewSet
from World_Cooking_App.models import Dish, Category
from World_Cooking_App.serializers import DishesSerializer, CategoriesSerializer


class DishesViewSet(ReadOnlyModelViewSet):
    serializer_class = DishesSerializer

    def get_queryset(self):
        if self.request.query_params:
            params = self.request.query_params.dict()
            if 'country' in params:
                country = params.get('country')
                if country == 'UA':
                    return Dish.objects.filter(category__name='Ukraine')
        else:
            return Dish.objects.all()


class CategoriesViewSet(ReadOnlyModelViewSet):
    serializer_class = CategoriesSerializer
    queryset = Category.objects.all()

