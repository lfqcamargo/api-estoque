# Generated by Django 5.0.3 on 2024-03-09 20:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('materiais', '0002_rename_mate_usr_material_mate_user'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='material',
            options={'verbose_name': 'Material', 'verbose_name_plural': 'Materiais'},
        ),
        migrations.AlterField(
            model_name='material',
            name='mate_id',
            field=models.AutoField(db_column='MATE_ID', primary_key=True, serialize=False),
        ),
    ]
