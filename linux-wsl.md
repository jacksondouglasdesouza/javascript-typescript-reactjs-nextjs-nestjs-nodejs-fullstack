# Guia Definitivo de Comandos Linux no WSL para Desenvolvedores

## 1. Navegação & Visualização de Arquivos

* `ls` - Lista arquivos e diretórios na pasta atual.
* `ls -a` - Lista todos os arquivos, incluindo os ocultos (que começam com `.` ).
* `ls -l` - Lista detalhada (permissões, dono, tamanho, data).
* `ls -lh` - A mesma lista detalhada, mas com tamanhos de arquivo em formato legível para humanos (ex: 1.2M, 50K).
* `cd <pasta>` - Entra em um diretório. Use `cd ..` para voltar e `cd ~` para ir para sua pasta inicial.
* `pwd` - Exibe o caminho completo da pasta atual.
* `tree` - (Pode precisar instalar com `sudo apt install tree`) Exibe a estrutura de pastas e arquivos em formato de árvore.
* `cat <arquivo>` - Exibe o conteúdo completo de um arquivo.
* `less <arquivo>` - Exibe o conteúdo de um arquivo grande, permitindo navegação e busca. Pressione `q` para sair.
* `head <arquivo>` / `tail <arquivo>` - Exibe as primeiras/últimas 10 linhas de um arquivo

## 2. Manipulação de Arquivos & Diretórios

* `touch <arquivo>` - Cria um arquivo vazio.
* `mkdir <pasta>` - Cria um novo diretório.
* `rm <arquivo>` - Remove um arquivo.
* `rm -r <pasta>` - Remove um diretório e seu conteúdo (cuidado!).
* `cp <origem> <destino>` - Copia um arquivo. Para diretórios, use `cp -r`.
* `mv <origem> <destino>` - Move um arquivo ou diretório. Também serve para renomear.
* `echo "conteúdo" > <arquivo>` - Cria ou substitui o conteúdo de um arquivo.
* `echo "conteúdo" >> <arquivo>` - Adiciona texto ao final de um arquivo.
* `find <caminho> -name "<nome>"` - Procura por arquivos com um nome específico.

## 3. Gerenciamento de Pacotes & Ferramentas

* `sudo apt update` - Atualiza a lista de pacotes disponíveis. **Sempre faça isso antes de instalar algo novo.**
* `sudo apt upgrade` - Atualiza todos os pacotes instalados.
* `sudo apt install <pacote>` - Instala um novo pacote (ex: `sudo apt install git`).
* `sudo apt remove <pacote>` - Remove um pacote.

## 4. Permissões & Privilégios

* `sudo <comando>` - Executa um comando como superusuário (administrador).
* `chmod <opções> <arquivo>` - Altera permissões de um arquivo ou diretório.
* `chmod +x <arquivo>` - Torna um arquivo executável.
* `chmod 755 <arquivo>` - Define permissões (7=dono, 5=grupo, 5=outros).
* `chown <dono>:<grupo> <arquivo>` - Altera o dono e o grupo de um arquivo.

## 5. Gerenciamento de Processos

* `ps` - Exibe os processos em execução.
* `top` - Exibe os processos em tempo real. Pressione `q` para sair.
* `kill <PID>` - Encerra um processo usando seu ID (PID).
* `killall <nome_do_processo>` - Encerra todos os processos com um nome específico.

## 6. A Integração Windows & WSL

* `cd /mnt/<letra_da_unidade>` - Acessa a unidade Windows (ex: `cd /mnt/c`).
* `code .` - Abre a pasta atual no VS Code, mantendo a conexão com o WSL.
* `wsl --shutdown` (no terminal do Windows) - Desliga o ambiente WSL para que as mudanças de sistema tenham efeito.
* `explorer.exe .` - Abre o diretório atual no Explorador de Arquivos do Windows.

### Comandos de Renomear, Mover e Copiar (Para Adicionar na Sua Lista)

Você pode inserir estes comandos na seção **"2. Manipulação de Arquivos & Diretórios"** da sua lista, junto com `rm` e `mkdir`.

* **`mv <origem> <destino>`** - Move um arquivo ou diretório de um lugar para outro. Se o destino tiver um nome diferente, o comando renomeia o arquivo.
* Exemplo para renomear um arquivo: `mv meu_arquivo.txt novo_nome.txt`
* Exemplo para renomear uma pasta: `mv pasta_antiga/ pasta_nova/`
* Exemplo para mover um arquivo para outra pasta: `mv meu_arquivo.txt pasta_nova/`
* **`cp <origem> <destino>`** - Copia um arquivo. Para copiar diretórios inteiros, é preciso adicionar a opção `-r` (recursivo).
* Exemplo para copiar um arquivo: `cp app.js app_copia.js`
* Exemplo para copiar uma pasta: `cp -r classes/ classes_copia/
  