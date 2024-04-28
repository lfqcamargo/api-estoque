from rest_framework import serializers
from .models import Material, Grupo, ControleMaterial


class GrupoSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Grupo
        fields = ['grup_id', 'grup_dsc', 'grup_dat_cria', 'user_id', 'grup_dat_atua']

class ListaMateriaisPorGrupoSerializer(serializers.ModelSerializer):
    grup_dsc = serializers.ReadOnlyField(source='grup_id.grup_dsc')

    class Meta:
        model = Material
        fields = ['mate_id', 'grup_dsc', 'mate_dsc', 'mate_dat_cria', 'user_id', 'mate_dat_atua']

class MaterialSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Material
        fields = ['mate_id', 'grup_id', 'mate_dsc', 'mate_dat_cria', 'user_id', 'mate_dat_atua']

class ControleMaterialSerializer(serializers.ModelSerializer):
    class Meta:
        model  = ControleMaterial
        fields = ['mate_id', 'cmat_ind_ativo', 'user_id', 'cmat_dat_atua']