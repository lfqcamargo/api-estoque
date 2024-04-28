from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from locais.models import SubLocal
from datetime import datetime
import random

class Command(BaseCommand):
    help = "Popula o Banco de Dados na Tabela SLES(SubLocal)"

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

        sublocais_nomes = ["Armazém 1", "Armazém 2", "Armazém 3", "Armazém 4"]

        for nome in sublocais_nomes:
            sublocal, created = SubLocal.objects.get_or_create(
                sles_dsc=nome,
                defaults={
                    'user_id': user,
                    'sles_dat_cria': datetime.now(),
                    'sles_dat_atua': datetime.now()
                }
            )

            if created:
                self.stdout.write(self.style.SUCCESS(f"SubLocal '{nome}'."))
            else:
                self.stdout.write(self.style.WARNING(f"SubLocal '{nome}' já existe."))

