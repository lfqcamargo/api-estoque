from django.contrib import admin
from .models import Material, Grupo, ControleMaterial

class Grupos(admin.ModelAdmin):
    list_display = ['grup_id', 'grup_dsc', 'grup_dat_cria', 'user_id', 'grup_dat_atua']
    list_display_links = ('grup_id', 'grup_dsc')
    search_fields = ('grup_id', 'grup_dsc')
    list_per_page = 15
    ordering = ('grup_dsc',)

class Materiais(admin.ModelAdmin):
    list_display = ['mate_id', 'mate_dsc', 'grup_id','mate_dat_cria', 'user_id', 'mate_dat_atua']
    list_display_links = ('mate_id', 'mate_dsc')
    search_fields = ('mate_id', 'mate_dsc')
    list_per_page = 15
    ordering = ('mate_dsc',)

class ControleMateriais(admin.ModelAdmin):
    list_display = ['mate_id', 'cmat_ind_ativo', 'user_id', 'cmat_dat_atua']
    list_display_links = ('mate_id',)
    search_fields = ('mate_id',)
    list_per_page = 15
    ordering = ('mate_id',)

admin.site.register(Grupo, Grupos)
admin.site.register(Material, Materiais)
admin.site.register(ControleMaterial, ControleMateriais)