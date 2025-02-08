from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission
from django.utils import timezone

class User(AbstractUser):
    # Campos adicionales para el usuario
    address = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=20)

    groups = models.ManyToManyField(
        Group,
        related_name='custom_user_groups',
        blank=True
    )

    user_permissions = models.ManyToManyField(
        Permission,
        related_name='custom_user_permissions',
        blank=True
    )

class Category(models.Model):
    name = models.CharField(max_length=100)

class Product(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='products/')
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    AVAILABILITY_CHOICES = [
        ('available', 'Disponible'),
        ('unavailable', 'No Disponible'),
        ('discontinued', 'Descontinuado'),
    ]

    availability = models.CharField(max_length=12, choices=AVAILABILITY_CHOICES, default='available')
    
    
class Carrusel(models.Model):
    title = models.CharField(max_length=100, verbose_name="Título")
    image = models.ImageField(upload_to='carrusel/', verbose_name="Imagen")
    description = models.TextField(blank=True, null=True, verbose_name="Descripción")
    price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Precio", null=True, blank=True)
    discount_price = models.DecimalField(max_digits=10, decimal_places=2, verbose_name="Precio con descuento", null=True, blank=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Carrusel"
        verbose_name_plural = "Carruseles"