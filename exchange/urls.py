from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

import exchange

urlpatterns = [
                  path('admin/', admin.site.urls),
                  path('', include('mistakes.urls'))
              ] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)