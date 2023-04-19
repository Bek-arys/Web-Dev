from django.urls import path
from api import views

urlpatterns = [
    path('companies/', views.company_list),
    path('companies/<int:company_id>', views.company_detail),

    path('companies/<int:company_id>/vacancies', views.vacancy_list_from_company),

    path('vacancies/', views.VacancyListAPIView.as_view()),
    path('vacancies/<int:id>/', views.VacancyByIdAPIView.as_view()),
    path('vacancies/top_ten', views.vacancy_list_top_10),
]