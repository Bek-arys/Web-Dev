import json
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
from api.models import Company, Vacancy

@csrf_exempt
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        companies_json = [c.to_json() for c in companies]
        return JsonResponse(companies_json, safe=False)
    if request.method == 'POST':
        data = json.loads(request.body)
        company_name = data.get('name', '')
        company_description = data.get('description', '')
        company = Company.objects.create(name=company_name, description=company_description)
        return JsonResponse(company.to_json())
    
def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    if request.method == 'GET':
        return JsonResponse(company.to_json())
    elif request.method == 'PUT':
        data = json.loads(request.body)

        new_company_name = data.get('name', company.name)
        new_company_city = data.get('city', company.city)
        new_company_description = data.get('description', company.description)
        new_company_address = data.get('address', company.address)

        company.name = new_company_name
        company.city = new_company_city
        company.address = new_company_address
        company.description = new_company_description

        company.save()
        return JsonResponse(company.to_json())
    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({'deleted': True})

@csrf_exempt
def vacancy_list(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        vacancies_json = [c.to_json() for c in vacancies]
        return JsonResponse(vacancies_json, safe=False)
    if request.method == 'POST':
        data = json.loads(request.body)
        vacancy_name = data.get('name', '')
        vacancy_description = data.get('description', '')
        vacancy_salary = data.get('salary', '')
        vacancy_company_id = data.get('company', '')
        vacancy = Vacancy.objects.create(name=vacancy_name, description=vacancy_description, salary=vacancy_salary, company=vacancy_company_id)
        return JsonResponse(vacancy.to_json())


@csrf_exempt
def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    if request.method == 'GET':
        return JsonResponse(vacancy.to_json())
    elif request.method == 'PUT':
        data = json.loads(request.body)
        new_category_name = data.get('name', vacancy.name)
        vacancy.name = new_category_name
        vacancy.save()
        return JsonResponse(vacancy.to_json())
    elif request.method == 'DELETE':
        vacancy.delete()
        return JsonResponse({'deleted': True})


def vacancy_list_from_company(request, company_id):
    vacancies = Vacancy.objects.filter(company=company_id)
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False)

def vacancy_list_top_10(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False)