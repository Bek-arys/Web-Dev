import json
from rest_framework.response import Response
from api.serializers import *
from rest_framework import status
from rest_framework.views import APIView

class VacancyListAPIView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancyModelSerializer(vacancies,many=True)
        return Response(serializer.data)
    def post(self, request):
        data = json.loads(request.body)
        vacancy_name = data.get('name', '')
        vacancy_company = Company.objects.get(id=data.get('company',''))
        vacancy = Vacancy.objects.create(name=vacancy_name,company=vacancy_company)
        return Response(vacancy.to_json())

class VacancyByIdAPIView(APIView):
    def get_object(self, id):
        try:
            return Vacancy.objects.get(id=id)
        except Vacancy.DoesNotExist as e:
            return Response({'error': e}, status=status.HTTP_400_BAD_REQUEST)
    def get(self, request, id):
        try:
            instance = self.get_object(id)
        except Vacancy.DoesNotExist as e:
            return Response({'error': e}, status=status.HTTP_400_BAD_REQUEST)
        serializer = VacancyModelSerializer(instance)
        return Response(serializer.data)
    def put(self, request, id):
        instance = self.get_object(id)
        serializer = VacancyModelSerializer(instance=instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def delete(self,request,id):
        instance = self.get_object(id)
        instance.delete()
        return Response({'deleted': True})