from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from locais.models import Enderecamento, Local, SubLocal, Corredor, Prateleira, Posicao
from datetime import datetime

class Command(BaseCommand):
    help = "Popula o Banco de Dados na Tabela ENES(Endereçamento)"

    def handle(self, *args, **kwargs):
        if not User.objects.exists():
            self.stdout.write(self.style.ERROR("Nenhum usuário cadastrado."))
            return
        user = User.objects.first()

        locais = Local.objects.all()
        sublocais = SubLocal.objects.all()
        corredores = Corredor.objects.all()
        prateleiras = Prateleira.objects.all()
        posicoes = Posicao.objects.all()

        for local in locais:
            for sublocal in sublocais:
                for corredor in corredores:
                    for prateleira in prateleiras:
                        for posicao in posicoes:
                            endereco, created = Enderecamento.objects.get_or_create(
                                loes_id=local,
                                sles_id=sublocal,
                                coes_id=corredor,
                                pres_id=prateleira,
                                poes_id=posicao,
                                defaults={
                                    'user_id': user,
                                    'enes_dat_cria': datetime.now(),
                                    'enes_dat_atua': datetime.now()
                                }
                            )

                            if created:
                                self.stdout.write(self.style.SUCCESS(f"Endereço criado: {local.loes_dsc}, {sublocal.sles_dsc}, {corredor.coes_dsc}, {prateleira.pres_dsc}, {posicao.poes_dsc}."))
                            else:
                                self.stdout.write(self.style.WARNING(f"Endereço já existente: {local.loes_dsc}, {sublocal.sles_dsc}, {corredor.coes_dsc}, {prateleira.pres_dsc}, {posicao.poes_dsc}."))

