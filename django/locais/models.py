from django.db import models
from django.conf import settings

from materiais.models import Material

class Local(models.Model):
    loes_id       = models.AutoField(primary_key=True, db_column='LOES_ID', verbose_name='Local')
    loes_dsc      = models.CharField(max_length=100, null=False, blank=False, unique=True, db_column='LOES_DSC', verbose_name='Descrição')
    loes_dat_cria = models.DateTimeField(auto_now_add=True, null=False, blank=False, db_column='LOES_DAT_CRIA', verbose_name='Data da Criação')
    user_id       = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, on_delete=models.SET_NULL, db_column='USER_ID', verbose_name='Usuário')
    loes_dat_atua = models.DateTimeField(auto_now=True, null=False, blank=False, db_column='LOES_DAT_ATUA', verbose_name='Ultima Atualização')

    def __str__(self):
        return self.loes_dsc
    
    class Meta():
        db_table = 'LOES'
        verbose_name = 'Local'
        verbose_name_plural = 'Locais'

class SubLocal(models.Model):
    sles_id       = models.AutoField(primary_key=True, db_column='SLES_ID', verbose_name='Sub-Local')
    sles_dsc      = models.CharField(max_length=100, null=False, blank=False, db_column='SLES_DSC', verbose_name='Descrição')
    sles_dat_cria = models.DateTimeField(auto_now_add=True, null=False, blank=False, db_column='SLES_DAT_CRIA', verbose_name='Data da Criação')
    user_id       = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, on_delete=models.SET_NULL, db_column='USER_ID', verbose_name='Usuário')
    sles_dat_atua = models.DateTimeField(auto_now=True, null=False, blank=False, db_column='SLES_DAT_ATUA', verbose_name='Ultima Atualização')

    def __str__(self):
        return self.sles_dsc
    
    class Meta():
        db_table = 'SLES'
        verbose_name = 'Sub-Local'
        verbose_name_plural = 'Subs-Locais'

class Corredor(models.Model):
    coes_id       = models.AutoField(primary_key=True, db_column='COES_ID', verbose_name='Corredor')
    coes_dsc      = models.CharField(max_length=100, null=False, blank=False, unique=True, db_column='COES_DSC', verbose_name='Descrição')
    coes_dat_cria = models.DateTimeField(auto_now_add=True, null=False, blank=False, db_column='COES_DAT_CRIA', verbose_name='Data da Criação')
    user_id       = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, on_delete=models.SET_NULL, db_column='USER_ID', verbose_name='Usuário')
    coes_dat_atua = models.DateTimeField(auto_now=True, null=False, blank=False, db_column='COES_DAT_ATUA', verbose_name='Ultima Atualização')

    def __str__(self):
        return self.coes_dsc
    
    class Meta():
        db_table = 'COES'
        verbose_name = 'Corredor'
        verbose_name_plural = 'Corredores'

class Prateleira(models.Model):
    pres_id       = models.AutoField(primary_key=True, db_column='PRES_ID', verbose_name='Prateleira')
    pres_dsc      = models.CharField(max_length=100, null=False, blank=False, unique=True, db_column='PRES_DSC', verbose_name='Descrição')
    pres_dat_cria = models.DateTimeField(auto_now_add=True, null=False, blank=False, db_column='PRES_DAT_CRIA', verbose_name='Data da Criação')
    user_id       = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, on_delete=models.SET_NULL, db_column='USER_ID', verbose_name='Usuário')
    pres_dat_atua = models.DateTimeField(auto_now=True, null=False, blank=False, db_column='PRES_DAT_ATUA', verbose_name='Ultima Atualização')

    def __str__(self):
        return self.pres_dsc
    
    class Meta():
        db_table = 'PRES'
        verbose_name = 'Prateleira'
        verbose_name_plural = 'Prateleiras'

class Posicao(models.Model):
    poes_id       = models.AutoField(primary_key=True, db_column='POES_ID', verbose_name='Posição')
    poes_dsc      = models.CharField(max_length=100, null=False, blank=False, unique=True, db_column='POES_DSC', verbose_name='Descrição')
    poes_dat_cria = models.DateTimeField(auto_now_add=True, null=False, blank=False, db_column='POES_DAT_CRIA', verbose_name='Data da Criação')
    user_id       = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, on_delete=models.SET_NULL, db_column='USER_ID', verbose_name='Usuário')
    poes_dat_atua = models.DateTimeField(auto_now=True, null=False, blank=False, db_column='POES_DAT_ATUA', verbose_name='Ultima Atualização')

    def __str__(self):
        return self.poes_dsc
    
    class Meta():
        db_table = 'POES'
        verbose_name = 'Posição'
        verbose_name_plural = 'Posições'

class Enderecamento(models.Model):
    loes_id       = models.ForeignKey(Local, on_delete=models.CASCADE, db_column='LOES_ID', verbose_name='Local de Estoque')
    sles_id       = models.ForeignKey(SubLocal, on_delete=models.CASCADE, db_column='SLES_ID', verbose_name='Sub Local de Estoque')
    coes_id       = models.ForeignKey(Corredor, on_delete=models.CASCADE, db_column='COES_ID', verbose_name='Corredor')
    pres_id       = models.ForeignKey(Prateleira, on_delete=models.CASCADE, db_column='PRES_ID', verbose_name='Prateleira')
    poes_id       = models.ForeignKey(Posicao, on_delete=models.CASCADE, db_column='POES_ID', verbose_name='Posição')
    ense_id       = models.AutoField(primary_key=True, db_column='ENSE_ID', verbose_name='Endereçamento')
    enes_dat_cria = models.DateTimeField(auto_now_add=True, null=False, blank=False, db_column='ENES_DAT_CRIA', verbose_name='Data da Criação')
    user_id       = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, on_delete=models.SET_NULL, db_column='USER_ID', verbose_name='Usuário')
    enes_dat_atua = models.DateTimeField(auto_now=True, null=False, blank=False, db_column='ENES_DAT_ATUA', verbose_name='Ultima Atualização')
    
    class Meta():
        db_table = 'ENES'
        verbose_name = 'Endereçamento'
        verbose_name_plural = 'Endereçamentos'
        unique_together = ('loes_id', 'sles_id', 'coes_id', 'pres_id', 'poes_id')

class LocalMaterial(models.Model):
    loma_id       = models.AutoField(primary_key=True, db_column='LOMA_ID', verbose_name='Local do Material')
    ense_id       = models.ForeignKey(Enderecamento, on_delete=models.CASCADE, db_column='ENSE_ID', verbose_name='Endereçamento')
    mate_id       = models.ForeignKey(Material, on_delete=models.CASCADE, db_column='MATE_ID', verbose_name='Material')
    loma_qtd      = models.FloatField(null=False, db_column='LOMA_QTD', verbose_name='Quantidade de Material')
    loma_dat_cria = models.DateTimeField(auto_now_add=True, null=False, blank=False, db_column='LOMA_DAT_CRIA', verbose_name='Data da Criação')
    user_id       = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, on_delete=models.SET_NULL, db_column='USER_ID', verbose_name='Usuário')
    loma_dat_atua = models.DateTimeField(auto_now=True, null=False, blank=False, db_column='LOMA_DAT_ATUA', verbose_name='Ultima Atualização')

    class Meta():
        db_table = 'LOMA'
        verbose_name = 'Local Mateiral'
        verbose_name_plural = 'Locais Materiais'
        unique_together = ('ense_id', 'mate_id')