# Betalent Frontend

Este projeto é a interface frontend do sistema Betalent, desenvolvido para gerenciar talentos e oportunidades. Ele fornece uma plataforma intuitiva e amigável para que os usuários possam navegar e interagir com as funcionalidades do sistema.

## Justificativa para uma nova feature

No campo de busca, encontrei dificuldades para filtrar pela coluna, logo adicionei ao lado esquerdo do botão de pesquisa, um select box para especificar qual coluna a busca deve filtrar. A busca ocorrerá conforme o input do usuário e com a mudança desse select box.

## Funcionalidades Principais

- **Cadastro de Talentos**: Permite o registro de novos talentos com informações detalhadas.
- **Busca e Filtro**: Ferramentas avançadas de busca e filtragem para encontrar talentos específicos.
- **Gerenciamento de Oportunidades**: Criação e acompanhamento de oportunidades de trabalho.
- **Notificações**: Sistema de notificações para manter os usuários informados sobre atualizações importantes.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **ContextAPI**: Gerenciamento de estados globais da aplicação.
- **FetchAPI**: Cliente HTTP para comunicação com a API backend.
- **Typescript**: Biblioteca para tipagem de objetos.
- **JSON-Server**: Executa um backend na máquina local utilizando um arquivo .json como base de dados

## Antes de Executar

**Definir a variável de ambiente**

1. ```VITE_API_URL```: o endereço web do seu backend

## Como Executar o Projeto

1. Clone o repositório:
  ```bash
  git clone https://github.com/seu-usuario/betalent-frontend.git
  ```
2. Navegue até o diretório do projeto:
  ```bash
  cd betalent-frontend
  ```
3. Instale as dependências:
  ```bash
  npm install
  ```
4. Inicie o servidor de desenvolvimento:
  ```bash
  npm start
  ```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.
