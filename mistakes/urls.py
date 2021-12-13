from django.urls import path
from mistakes.views import HomeView, mistakes, solving_data_mistake_avg_time, time_mistake_kind, \
    stacked_volume

app_name = 'index'
urlpatterns = [
    path('', HomeView.as_view(), name='home'),
    path('mistakes/', mistakes, name='mistakes'),
    path('solving_data_mistake_avg_time/',
         solving_data_mistake_avg_time,
         name='solving_data_mistake_avg_time'),
    path('time_mistake_kind/', time_mistake_kind, name='time_mistake_kind'),
    path('Stackedـvolume/', stacked_volume, name='stacked'),
]
