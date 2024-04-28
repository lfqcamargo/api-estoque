# Generated by Django 5.0.3 on 2024-03-09 22:56

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('materiais', '0005_controlematerial_grupo_material_grup_id'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='controlematerial',
            options={'verbose_name': 'Controle Material', 'verbose_name_plural': 'Controle Materiais'},
        ),
        migrations.RemoveField(
            model_name='grupo',
            name='grup_user',
        ),
        migrations.RemoveField(
            model_name='material',
            name='mate_user',
        ),
        migrations.AddField(
            model_name='controlematerial',
            name='cmat_dat_atua',
            field=models.DateTimeField(auto_now=True, db_column='CMAT_DAT_ATUA', verbose_name='Ultima Atualização'),
        ),
        migrations.AddField(
            model_name='controlematerial',
            name='cmat_ind_ativo',
            field=models.BooleanField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='controlematerial',
            name='user_dsc',
            field=models.ForeignKey(db_column='USER_DSC', null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL, verbose_name='Usuário'),
        ),
        migrations.AddField(
            model_name='grupo',
            name='user_dsc',
            field=models.ForeignKey(db_column='USER_DSC', null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL, verbose_name='Usuário'),
        ),
        migrations.AddField(
            model_name='material',
            name='user_dsc',
            field=models.ForeignKey(db_column='USER_DSC', null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL, verbose_name='Usuário'),
        ),
        migrations.AlterModelTable(
            name='controlematerial',
            table='CMAT',
        ),
    ]
