from api.models import Product, Category
from django.http.response import JsonResponse

def get_products(request):
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)

def get_product(request, product_id):
    product = Product.objects.get(id=product_id)
    return JsonResponse(product.to_json())

def get_categories(request):
    categories = Category.objects.all()
    categories_json = [c.to_json() for c in categories]
    return JsonResponse(categories_json, safe=False)

def get_category(request, category_id):
    category = Category.objects.get(id=category_id)
    return JsonResponse(category.to_json())

def get_category_products(request, category_id):
    products = Product.objects.filter(category_id = category_id)
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)
