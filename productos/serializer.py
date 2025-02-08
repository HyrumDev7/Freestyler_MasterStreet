from rest_framework import serializers
from .models import  Carrusel

# serializador para el modelo Carrusel
class CarruselSerializer(serializers.ModelSerializer):
    class Meta:
        model = Carrusel
        fields = '__all__'