from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from locais.models import Prateleira
from datetime import datetime
import random

class Command(BaseCommand):
    help = "Popula o Banco de Dados na Tabela PRES(Prateleira)"

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

        for i in range(1, 11):
            descricao = f"Prateleira {i}"
            prateleira, created = Prateleira.objects.get_or_create(
                pres_dsc=descricao,
                defaults={
                    'user_id': user,
                    'pres_dat_cria': datetime.now(),
                    'pres_dat_atua': datetime.now()
                }
            )

            if created:
                self.stdout.write(self.style.SUCCESS(f"'{descricao}' criada com sucesso."))
            else:
                self.stdout.write(self.style.WARNING(f"'{descricao}' já existe."))

