from django.contrib import admin
from .models import Local, SubLocal, Corredor, Prateleira, Posicao, Enderecamento, LocalMaterial

class LocalAdmin(admin.ModelAdmin):
    list_display = ['loes_id', 'loes_dsc', 'loes_dat_cria', 'user_id', 'loes_dat_atua']
    list_display_links = ('loes_id', 'loes_dsc')
    search_fields = ('loes_dsc',)
    list_per_page = 15
    ordering = ('loes_dsc',)

class SubLocalAdmin(admin.ModelAdmin):
    list_display = [ 'sles_id', 'sles_dsc', 'sles_dat_cria', 'user_id', 'sles_dat_atua']
    list_display_links = ( 'sles_id', 'sles_dsc')
    search_fields = ('sles_id', 'sles_dsc')
    list_per_page = 15
    ordering = ('sles_dsc',)

class CorredorAdmin(admin.ModelAdmin):
    list_display = ['coes_id', 'coes_dsc', 'coes_dat_cria', 'user_id', 'coes_dat_atua']
    list_display_links = ('coes_id', 'coes_dsc')
    search_fields = ('coes_id', 'coes_dsc')
    list_per_page = 15
    ordering = ('coes_dsc',)

class PrateleiraAdmin(admin.ModelAdmin):
    list_display = ['pres_id', 'pres_dsc', 'pres_dat_cria', 'user_id', 'pres_dat_atua']
    list_display_links = ('pres_id', 'pres_dsc')
    search_fields = ('pres_id', 'pres_dsc')
    list_per_page = 15
    ordering = ('pres_dsc',)

class PosicaoAdmin(admin.ModelAdmin):
    list_display = ['poes_id', 'poes_dsc', 'poes_dat_cria', 'user_id', 'poes_dat_atua']
    list_display_links = ('poes_id', 'poes_dsc')
    search_fields = ('poes_id', 'poes_dsc')
    list_per_page = 15
    ordering = ('poes_dsc',)

class EnderecamentoAdmin(admin.ModelAdmin):
    list_display = ['loes_id', 'sles_id', 'coes_id', 'pres_id', 'poes_id', 'ense_id', 'enes_dat_cria', 'user_id', 'enes_dat_atua']
    list_display_links = ('loes_id', 'sles_id', 'coes_id', 'pres_id', 'poes_id', 'ense_id')
    search_fields = ('ense_id',)
    list_per_page = 15
    ordering = ('ense_id',)

class LocalMaterialAdmin(admin.ModelAdmin):
    list_display = ['loma_id', 'ense_id', 'mate_id', 'loma_dat_cria', 'user_id', 'loma_dat_atua']  
    list_display_links = None
    search_fields = ['loma_id', 'ense_id', 'mate_id']  
    list_per_page = 15
    ordering = ['loma_id']  

    def has_add_permission(self, request, obj=None):
        return False

    def has_change_permission(self, request, obj=None):
        return False

    def has_delete_permission(self, request, obj=None):
        return False

admin.site.register(Local, LocalAdmin)
admin.site.register(SubLocal, SubLocalAdmin)
admin.site.register(Corredor, CorredorAdmin)
admin.site.register(Prateleira, PrateleiraAdmin)
admin.site.register(Posicao, PosicaoAdmin)
admin.site.register(Enderecamento, EnderecamentoAdmin)
admin.site.register(LocalMaterial, LocalMaterialAdmin)