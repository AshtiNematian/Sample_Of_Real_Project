import requests
from django.http import JsonResponse
from django.views.generic import TemplateView
from persian_tools import digits


class HomeView(TemplateView):
    template_name = "HTML-RTL/Horizontal-Light/index.html"


def mistakes(request):
    """

    :param request:
    :return:
    json response of 4 number those got data from server as analyzed data with pandas and numpy,and used fast api
    its sample of code with localhost,in real have to give server ip
    show data to template with ajax
    """
    number = requests.get('http:/127.0.0.1/boxes')
    number = number.json()
    number = list(number.values())
    number1 = number[0]
    print(number1)
    number1 = digits.convert_to_fa(number1)
    number2 = number[1]
    number2 = digits.convert_to_fa(number2)
    number3 = number[2]
    number3 = digits.convert_to_fa(number3)
    number4 = number[3]
    number4 = digits.convert_to_fa(number4)

    response = {
        'number1': number1,
        'number2': number2,
        'number3': number3,
        'number4': number4
    }
    print(response)
    return JsonResponse(response)


def solving_data_mistake_avg_time(request):
    """

        :param request:
        :return:
        json response ofa chart that got data from server as analyzed data with pandas and numpy,and used fast api
        its sample of code with localhost,in real have to give server ip
        show data to template with ajax
        """
    apidata = requests.get('http://127.0.0.1/chart_1')
    apidata = apidata.json()
    data_x = apidata[list(apidata.keys())[1]]
    data_x = list(data_x.values())
    data_y = apidata[list(apidata.keys())[2]]
    data_y = list(data_y.values())
    response = {
        'x_data': data_x,
        'y_data': data_y
    }
    print(response)
    return JsonResponse(response)


def time_mistake_kind(request):
    mistake_time = requests.get('http://127.0.01/chart_2')
    mistake_time = mistake_time.json()
    axis_time_x = mistake_time[list(mistake_time.keys())[1]]
    print(axis_time_x)
    axis_time_x = list(axis_time_x.values())
    print(axis_time_x)
    axis_number_y = mistake_time[list(mistake_time.keys())[2]]
    axis_number_y = list(axis_number_y.values())

    response = {
        'axis_time_x': axis_time_x,
        'axis_number_y': axis_number_y
    }
    print(response)
    return JsonResponse(response)


def stacked_volume(request):
    stacked_volume = requests.get('http://127.0.01/chart_3')
    stacked_volume = stacked_volume.json()
    data_time_x = stacked_volume[list(stacked_volume.keys())[0]]
    data_x = data_time_x[list(data_time_x.keys())[0]]
    print(data_x)
    prices_in_oscillation_domain_violation = stacked_volume[list(stacked_volume.keys())[1]]
    print(prices_in_oscillation_domain_violation)
    print(type(prices_in_oscillation_domain_violation))
    accumulated_volume_violation = stacked_volume[list(stacked_volume.keys())[2]]
    print(accumulated_volume_violation)
    print(type(accumulated_volume_violation))

    response = {
        'prices_in_oscillation_domain_violation': prices_in_oscillation_domain_violation,
        'accumulated_volume_violation': accumulated_volume_violation,
        'data_x': data_x
    }
    return JsonResponse(response)


