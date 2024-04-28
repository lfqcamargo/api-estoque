from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from locais.models import Local
from datetime import datetime
import random

class Command(BaseCommand):
    help = "Popula o Banco de Dados na Tabela LOES(Local)"

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

        locais_nomes = ["São Manuel", "Lençóis", "Bauru", "Jaú", "Barra Bonita", "Botucatu"]

        for nome in locais_nomes:
            local, created = Local.objects.get_or_create(
                loes_dsc=nome,
                defaults={
                    'user_id': user,
                    'loes_dat_cria': datetime.now(),
                    'loes_dat_atua': datetime.now()
                }
            )

            if created:
                self.stdout.write(self.style.SUCCESS(f"Local '{nome}' criado com sucesso."))
            else:
                self.stdout.write(self.style.WARNING(f"Local '{nome}' já existe."))

