# Generated by Django 5.0.3 on 2024-03-09 20:20

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('materiais', '0003_alter_material_options_alter_material_mate_id'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AlterField(
            model_name='material',
            name='mate_dat_atua',
            field=models.DateTimeField(auto_now=True, db_column='MATE_DAT_ATUA', verbose_name='Ultima Atualização'),
        ),
        migrations.AlterField(
            model_name='material',
            name='mate_dat_cria',
            field=models.DateTimeField(auto_now_add=True, db_column='MATE_DAT_CRIA', verbose_name='Data da Criação'),
        ),
        migrations.AlterField(
            model_name='material',
            name='mate_dsc',
            field=models.CharField(db_column='MATE_DSC', max_length=100, verbose_name='Descrição'),
        ),
        migrations.AlterField(
            model_name='material',
            name='mate_id',
            field=models.AutoField(db_column='MATE_ID', primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='material',
            name='mate_user',
            field=models.ForeignKey(db_column='MATE_USR', null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL, verbose_name='Usuário'),
        ),
    ]
