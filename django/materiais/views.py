from rest_framework import viewsets, generics, filters
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.authentication import BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from .models import Material, Grupo, ControleMaterial
from .serializer import MaterialSerializer, GrupoSerializer, ControleMaterialSerializer, ListaMateriaisPorGrupoSerializer

class GruposViewSet(viewsets.ModelViewSet):
    """EXIBINDO TODOS GRUPOS"""
    authentication_classes = [BasicAuthentication]
    permission_classes     = [IsAuthenticated]
    filter_backends        = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    search_fields          = ['grup_dsc']
    ordering_fields        = ['grup_dsc']

    queryset         = Grupo.objects.all()
    serializer_class = GrupoSerializer


class ListaMateriaisPorGrupo(generics.ListAPIView):
    """LISTANDO TODOS MATERIAIS POR GRUPO"""
    authentication_classes = [BasicAuthentication]
    permission_classes     = [IsAuthenticated]
    filter_backends        = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    search_fields          = ['mate_dsc']
    ordering_fields        = ['mate_dsc']

    def get_queryset(self):
        queryset = Material.objects.filter(grup_id=self.kwargs['pk'])
        return queryset
    serializer_class = ListaMateriaisPorGrupoSerializer


class MateriaisViewSet(viewsets.ModelViewSet):
    """EXIBINDO TODOS MATERIAIS"""
    authentication_classes = [BasicAuthentication]
    permission_classes     = [IsAuthenticated]
    filter_backends        = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    search_fields          = ['mate_dsc']
    ordering_fields        = ['mate_dsc']

    queryset = Material.objects.all()
    serializer_class = MaterialSerializer

    
class ControleMateriaisViewSet(viewsets.ModelViewSet):
    """EXIBINDO TODOS GRUPOS"""
    authentication_classes = [BasicAuthentication]
    permission_classes     = [IsAuthenticated]
    filter_backends        = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    search_fields          = ['mate_id']
    ordering_fields        = ['mate_id']

    queryset         = ControleMaterial.objects.all()
    serializer_class = ControleMaterialSerializer


    