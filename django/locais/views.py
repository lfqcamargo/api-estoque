from rest_framework import viewsets, generics, filters
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.authentication import BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from .models import Local, SubLocal, Corredor, Prateleira, Posicao, Enderecamento, LocalMaterial
from .serializer import LocalSerializer, SubLocalSerializer, CorredorSerializer, PrateleiraSerializer, PosicaoSerializer, EnderecamentoSerializer, ListaEnderecamentoLocal, ListaEnderecamentoSubLocal, LocalMaterialSerializer

class LocalViewSet(viewsets.ModelViewSet):
    """EXIBINDO TODOS LOCAIS"""
    authentication_classes = [BasicAuthentication]
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    search_fields = ['loes_dsc']
    ordering_fields = ['loes_dsc']

    queryset = Local.objects.all()
    serializer_class = LocalSerializer

class SubLocalViewSet(viewsets.ModelViewSet):
    """EXIBINDO TODOS SUBLOCAIS"""
    authentication_classes = [BasicAuthentication]
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    search_fields = ['sles_dsc']
    ordering_fields = ['sles_dsc']

    queryset = SubLocal.objects.all()
    serializer_class = SubLocalSerializer

class CorredorViewSet(viewsets.ModelViewSet):
    """EXIBINDO TODOS CORREDORES"""
    authentication_classes = [BasicAuthentication]
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    search_fields = ['coes_dsc']
    ordering_fields = ['coes_dsc']

    queryset = Corredor.objects.all()
    serializer_class = CorredorSerializer

class PrateleiraViewSet(viewsets.ModelViewSet):
    """EXIBINDO TODAS PRATELEIRAS"""
    authentication_classes = [BasicAuthentication]
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    search_fields = ['pres_dsc']
    ordering_fields = ['pres_dsc']

    queryset = Prateleira.objects.all()
    serializer_class = PrateleiraSerializer

class PosicaoViewSet(viewsets.ModelViewSet):
    """EXIBINDO TODAS POSIÇÕES"""
    authentication_classes = [BasicAuthentication]
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    search_fields = ['poes_dsc']
    ordering_fields = ['poes_dsc']

    queryset = Posicao.objects.all()
    serializer_class = PosicaoSerializer

class EnderecamentoViewSet(viewsets.ModelViewSet):
    """EXIBINDO TODAS ENDEREÇAMENTOS"""
    authentication_classes = [BasicAuthentication]
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    search_fields = ['enes_id']
    ordering_fields = ['enes_id']

    queryset = Enderecamento.objects.all()
    serializer_class = EnderecamentoSerializer

class LocalMaterialViewSet(viewsets.ReadOnlyModelViewSet):
    """EXIBINDO TODOS SUBLOCAIS"""
    authentication_classes = [BasicAuthentication]
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    search_fields = ['loma_id']
    ordering_fields = ['loma_id']

    queryset = LocalMaterial.objects.all()
    serializer_class = LocalMaterialSerializer

class ListaEnderecamentosLocais(generics.ListAPIView):
    """LISTANDO TODOS ENDEREÇAMENTOS POR LOCAL"""
    authentication_classes = [BasicAuthentication]
    permission_classes     = [IsAuthenticated]
    filter_backends        = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    search_fields          = ['loes_dsc', 'sles_dsc', 'coes_dsc', 'pres_dsc', 'poes_dsc']
    ordering_fields        = ['loes_dsc', 'sles_dsc', 'coes_dsc', 'pres_dsc', 'poes_dsc']

    def get_queryset(self):
        queryset = Enderecamento.objects.filter(loes_id=self.kwargs['pk'])
        return queryset
    serializer_class = ListaEnderecamentoLocal

class ListaEnderecamentosSubLocal(generics.ListAPIView):
    """LISTANDO TODOS ENDEREÇAMENTOS POR SUB-LOCAL"""
    authentication_classes = [BasicAuthentication]
    permission_classes     = [IsAuthenticated]
    filter_backends        = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    search_fields          = ['loes_dsc', 'sles_dsc', 'coes_dsc', 'pres_dsc', 'poes_dsc']
    ordering_fields        = ['loes_dsc', 'sles_dsc', 'coes_dsc', 'pres_dsc', 'poes_dsc']

    def get_queryset(self):
        queryset = Enderecamento.objects.filter(sles_id=self.kwargs['pk'])
        return queryset
    serializer_class = ListaEnderecamentoSubLocal

class ListaLocaisMateriais(generics.ListAPIView):
    """LISTANDO TODOS ENDEREÇAMENTOS X MATERIAL"""
    authentication_classes = [BasicAuthentication]
    permission_classes     = [IsAuthenticated]
    filter_backends        = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    search_fields          = ['loes_dsc', 'sles_dsc', 'coes_dsc', 'pres_dsc', 'poes_dsc', 'mate_dsc']
    ordering_fields        = ['loes_dsc', 'sles_dsc', 'coes_dsc', 'pres_dsc', 'poes_dsc', 'mate_dsc']

    def get_queryset(self):
        queryset = LocalMaterial.objects.filter(loma_id=self.kwargs['pk'])
        return queryset
    serializer_class = LocalMaterial