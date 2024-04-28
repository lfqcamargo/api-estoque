from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from locais.models import Corredor
from datetime import datetime
import random

class Command(BaseCommand):
    help = "Popula o Banco de Dados na Tabela COES(Corredor)"

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

        corredores_nomes = [
            "Corredor 1",
            "Corredor 2",
            "Corredor 3",
            "Corredor 4",
            "Corredor 5"
        ]

        for nome in corredores_nomes:
            corredor, created = Corredor.objects.get_or_create(
                coes_dsc=nome,
                defaults={
                    'user_id': user,
                    'coes_dat_cria': datetime.now(),
                    'coes_dat_atua': datetime.now()
                }
            )

            if created:
                self.stdout.write(self.style.SUCCESS(f"Corredor '{nome}' criado com sucesso."))
            else:
                self.stdout.write(self.style.WARNING(f"Corredor '{nome}' já existe."))

