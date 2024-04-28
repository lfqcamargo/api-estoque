from django.db import models
from django.conf import settings

class Grupo(models.Model):
    grup_id       = models.AutoField(primary_key=True, db_column='GRUP_ID', verbose_name='ID')
    grup_dsc      = models.CharField(max_length=100, null=False, blank=False, unique=True, db_column='GRUP_DSC', verbose_name='Descrição')
    grup_dat_cria = models.DateTimeField(auto_now_add=True, null=False, blank=False, db_column='GRUP_DAT_CRIA', verbose_name='Data da Criação')
    user_id       = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, on_delete=models.SET_NULL, db_column='USER_ID', verbose_name='Usuário')
    grup_dat_atua = models.DateTimeField(auto_now=True, null=False, blank=False, db_column='GRUP_DAT_ATUA', verbose_name='Ultima Atualização')

    def __str__(self):
        return self.grup_dsc
    
    class Meta():
        db_table = 'GRUP'
        verbose_name = 'Grupo'
        verbose_name_plural = 'Grupos'

class Material(models.Model):
    mate_id       = models.AutoField(primary_key=True, db_column='MATE_ID', verbose_name='ID')
    grup_id       = models.ForeignKey(Grupo, null=False, blank=False, on_delete=models.DO_NOTHING, db_column='GRUP_ID', verbose_name='ID Grupo')
    mate_dsc      = models.CharField(max_length=100, null=False, blank=False, unique=True, db_column='MATE_DSC', verbose_name='Descrição')    
    mate_dat_cria = models.DateTimeField(auto_now_add=True, null=False, blank=False, db_column='MATE_DAT_CRIA', verbose_name='Data da Criação')
    user_id       = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, on_delete=models.SET_NULL, db_column='USER_ID', verbose_name='Usuário')
    mate_dat_atua = models.DateTimeField(auto_now=True, null=False, blank=False, db_column='MATE_DAT_ATUA', verbose_name='Ultima Atualização')

    def __str__(self):
        return self.mate_dsc
    
    class Meta():
        db_table = 'MATE'
        verbose_name = 'Material'
        verbose_name_plural = 'Materiais'

class ControleMaterial(models.Model):
    mate_id        = models.OneToOneField(Material, primary_key=True, on_delete=models.CASCADE, db_column='MATE_ID', verbose_name='ID Material')
    cmat_ind_ativo = models.BooleanField(db_column='CMAT_IND_ATIVO', verbose_name='Ativo')
    user_id        = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, on_delete=models.SET_NULL, db_column='USER_ID', verbose_name='Usuário')
    cmat_dat_atua  = models.DateTimeField(auto_now=True, null=False, blank=False, db_column='CMAT_DAT_ATUA', verbose_name='Ultima Atualização')
    
    class Meta():
        db_table = 'CMAT'
        verbose_name = 'Controle Material'
        verbose_name_plural = 'Controle Materiais'