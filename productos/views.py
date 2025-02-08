from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Carrusel
from .serializer import CarruselSerializer

class McFreesView(APIView):
    def get(self, request):
        try:
            carrusel_items = Carrusel.objects.all()
            serializer = CarruselSerializer(carrusel_items, many=True)
            return Response(serializer.data)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)