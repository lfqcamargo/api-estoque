from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from materiais.models import Grupo
from datetime import datetime, timedelta
import random

class Command(BaseCommand):
    help = "Popula o Banco de Dados na Tabela Grup(Grupo)"

    def handle(self, *args, **kwargs):
        inicio = datetime(2024, 1, 1)
        fim = datetime(2024, 4, 1)

        user_count = User.objects.count()
        if user_count > 0:
            random_index = random.randint(0, user_count - 1)
            user = User.objects.all()[random_index]
        else:
            user = None

        if user is None:
            self.stdout.write(self.style.ERROR("Nenhum usuário Cadastrado."))
            return

        grupos = [
            "Alicate", "Parafuso", "Porca", "Arruela", "Martelo", "Parafusadeira", "Lixa", "Lixadeira", "Furadeira"
        ]

        for descricao in grupos:
            dias_aleatorios = random.randint(0, (fim - inicio).days)
            data_aleatoria = inicio + timedelta(days=dias_aleatorios)

            grupo, created = Grupo.objects.get_or_create(
                grup_dsc=descricao,
                defaults={
                    'user_id': user,
                    'grup_dat_cria': data_aleatoria,
                    'grup_dat_atua': data_aleatoria
                }
            )

            if created:
                self.stdout.write(self.style.SUCCESS(f'Grupo "{descricao}" criado com sucesso.'))
            else:
                self.stdout.write(self.style.WARNING(f'Grupo "{descricao}" já existe.'))