from rest_framework import serializers
from .models import Local, SubLocal, Corredor, Prateleira, Posicao, Enderecamento, LocalMaterial

class LocalSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Local
        fields = ['loes_id', 'loes_dsc', 'loes_dat_cria', 'user_id', 'loes_dat_atua']

class SubLocalSerializer(serializers.ModelSerializer):
    class Meta:
        model  = SubLocal
        fields = ['sles_id', 'sles_dsc', 'sles_dat_cria', 'user_id', 'sles_dat_atua']

class CorredorSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Corredor
        fields = ['coes_id', 'coes_dsc', 'coes_dat_cria', 'user_id', 'coes_dat_atua']

class PrateleiraSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Prateleira
        fields = ['pres_id', 'pres_dsc', 'pres_dat_cria', 'user_id', 'pres_dat_atua']

class PosicaoSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Posicao
        fields = ['poes_id', 'poes_dsc', 'poes_dat_cria', 'user_id', 'poes_dat_atua']

class EnderecamentoSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Enderecamento
        fields = ['loes_id', 'sles_id', 'coes_id', 'pres_id', 'poes_id', 'ense_id', 'enes_dat_cria', 'user_id', 'enes_dat_atua']

class LocalMaterialSerializer(serializers.ModelSerializer):
    class Meta:
        model  = LocalMaterial
        fields = ['ense_id', 'mate_id', 'loma_dat_cria', 'user_id', 'loma_dat_atua']


class ListaEnderecamentoLocal(serializers.ModelSerializer):
    loes_dsc = serializers.ReadOnlyField(source='loes_id.loes_dsc')
    sles_dsc = serializers.ReadOnlyField(source='sles_id.sles_dsc')
    coes_dsc = serializers.ReadOnlyField(source='coes_id.coes_dsc')
    pres_dsc = serializers.ReadOnlyField(source='pres_id.pres_dsc')
    poes_dsc = serializers.ReadOnlyField(source='poes_id.poes_dsc')

    class Meta:
        model  = Enderecamento
        fields = ['loes_dsc', 'sles_dsc', 'coes_dsc', 'pres_dsc', 'poes_dsc']

class ListaEnderecamentoSubLocal(serializers.ModelSerializer):
    loes_dsc = serializers.ReadOnlyField(source='loes_id.loes_dsc')
    sles_dsc = serializers.ReadOnlyField(source='sles_id.sles_dsc')
    coes_dsc = serializers.ReadOnlyField(source='coes_id.coes_dsc')
    pres_dsc = serializers.ReadOnlyField(source='pres_id.pres_dsc')
    poes_dsc = serializers.ReadOnlyField(source='poes_id.poes_dsc')

    class Meta:
        model  = Enderecamento
        fields = ['loes_dsc', 'sles_dsc', 'coes_dsc', 'pres_dsc', 'poes_dsc']

class ListaLocalMaterial(serializers.ModelSerializer):
    loes_dsc = serializers.ReadOnlyField(source='ense_id.loes_id.loes_dsc')
    sles_dsc = serializers.ReadOnlyField(source='ense_id.sles_id.sles_dsc')
    coes_dsc = serializers.ReadOnlyField(source='ense_id.coes_id.coes_dsc')
    pres_dsc = serializers.ReadOnlyField(source='ense_id.pres_id.pres_dsc')
    poes_dsc = serializers.ReadOnlyField(source='ense_id.poes_id.poes_dsc')
    mate_dsc = serializers.ReadOnlyField(source='mate_id.mate_dsc')

    class Meta:
        model  = LocalMaterial
        fields = ['loes_dsc', 'sles_dsc', 'coes_dsc', 'pres_dsc', 'poes_dsc', 'mate_dsc']