from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from materiais.models import Material, ControleMaterial
from datetime import datetime, timedelta
import random

class Command(BaseCommand):
    help = "Popula o Banco de Dados na Tabela Mate(Material)"

    def handle(self, *args, **kwargs):
        user_count = User.objects.count()
        if user_count > 0:
            random_index = random.randint(0, user_count - 1)
            user = User.objects.all()[random_index]
        else:
            user = None

        if user is None:
            self.stdout.write(self.style.ERROR("Nenhum usuário Cadastrado."))
            return

        materiais = Material.objects.all()

        for material in materiais:
            controle_material, created = ControleMaterial.objects.get_or_create(
                mate_id=material,
                defaults={
                    'mate_id': material,
                    'user_id': user,
                    'cmat_ind_ativo': 1,
                    'cmat_dat_atua': datetime.now()
                }
            )

            if created:
                self.stdout.write(self.style.SUCCESS(f'Grupo "{material}" criado com sucesso.'))
            else:
                self.stdout.write(self.style.WARNING(f'Grupo "{material}" já existe.'))