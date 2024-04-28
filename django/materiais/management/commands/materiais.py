from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from materiais.models import Material, Grupo
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

        materiais = [
            ["Alicate de Corte", "Alicate de Bico", "Alicate de Pressão", "Alicate Universal"],
            ["Parafuso 5x30", "Parafuso 6x40", "Parafuso 8x50"],
            ["Porca 5mm", "Porca 6mm", "Porca 8mm"],
            ["Arruela lisa 5mm", "Arruela lisa 6mm", "Arruela de pressão 5mm", "Arruela de pressão 6mm"],
            ["Martelo de Carpinteiro", "Martelo de Borracha", "Martelo Perfurador"],
            ["Parafusadeira à Bateria", "Parafusadeira com Fio", "Parafusadeira de Impacto"],
            ["Lixa para Madeira", "Lixa para Metal", "Lixa d'Água"],
            ["Lixadeira Orbital", "Lixadeira de Cinta", "Lixadeira Angular"],
            ["Furadeira sem Impacto", "Furadeira com Impacto", "Furadeira/Parafusadeira Combo"]
        ]


        for index, lista in enumerate(materiais):
            grupo = Grupo.objects.get(pk=index+1)
            for descricao in lista:
                material, created = Material.objects.get_or_create(
                    mate_dsc=descricao,
                    defaults={
                        'grup_id': grupo,
                        'user_id': user,
                        'mate_dat_cria': datetime.now(),
                        'mate_dat_atua': datetime.now()
                    }
                )

                if created:
                    self.stdout.write(self.style.SUCCESS(f'Grupo "{descricao}" criado com sucesso.'))
                else:
                    self.stdout.write(self.style.WARNING(f'Grupo "{descricao}" já existe.'))