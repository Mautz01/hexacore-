# HexaCore — Sistema de Autenticação Unificado

## O que foi feito

Todos os 4 arquivos foram modificados **cirurgicamente** — sem alterar HTML, CSS, layout ou funcionalidades. Apenas os trechos de JavaScript de autenticação foram adaptados para compartilhar as mesmas chaves do `localStorage`.

---

## Chaves globais adicionadas (em TODAS as páginas)

| Chave               | Valor                        | Descrição                         |
|---------------------|------------------------------|-----------------------------------|
| `usuarioLogado`     | `"true"` / ausente           | Indica se há sessão ativa         |
| `nomeUsuario`       | `"João Silva"`               | Nome completo do usuário logado   |
| `emailUsuario`      | `"joao@email.com"`           | E-mail do usuário logado          |
| `hx_usuarioLogado`  | objeto JSON completo         | Sessão principal unificada        |
| `hx_usuarios`       | array JSON de usuários       | Base de usuários compartilhada    |

---

## Mudanças por arquivo

### `index.html`
- **`HX.getUsuarioLogado()`** — antes lia apenas um ID numérico; agora lê o **objeto completo** do usuário direto da chave `hx_usuarioLogado`.
- **`HX.login()`** — agora grava o objeto completo (não só o ID) e também escreve `usuarioLogado`, `nomeUsuario` e `emailUsuario`.
- **`HX.logout()`** — agora remove `usuarioLogado`, `nomeUsuario` e `emailUsuario` além da sessão.
- **`HX.atualizarDados()`** — ao editar os dados pessoais, sincroniza o objeto de sessão e as chaves globais.
- **`atualizarHeaderConta()`** — agora exibe `"Olá, [nome]"` quando logado.
- **`logout()`** — função global adicionada (chama `HX.logout()` + fecha painel).

### `Pc_gamer.html`
- **`DB` (objeto completo)** — migrado de chave `hxc_*` para:
  - Usuários: `hx_usuarios`
  - Sessão: `hx_usuarioLogado` (objeto completo)
  - Carrinho: `hx_carrinho_{uid}`
  - Pedidos: `hx_pedidos_{uid}`
- **`DB.setSessao()`** — agora escreve `usuarioLogado`, `nomeUsuario` e `emailUsuario` automaticamente (e os remove ao passar `null`).
- **`fazerLogin()`** — comparação de e-mail agora é case-insensitive.
- **`fazerCadastro()`** — comparação de e-mail agora é case-insensitive.
- **`atualizarHeaderSessao()`** — agora exibe `"Olá, [nome]"` quando logado.
- **`logout()`** — já existia; agora limpa as chaves globais via `DB.setSessao(null)`.

> **Nota:** Produtos permanecem na chave `hxc_produtos` (local da página) para não conflitar com outros arquivos.

### `ofertas.html`
- **`DB.salvarUsuarioLogado()`** — agora escreve `usuarioLogado`, `nomeUsuario` e `emailUsuario`.
- **`DB.removerUsuarioLogado()`** — agora remove as chaves globais também.
- **`atualizarHeaderLogin()`** — agora exibe `"👤 Olá, [nome]"` quando logado.
- **`logout()`** — função global adicionada (chama `realizarLogout()`).

> Esta página já era a mais compatível — já usava `hx_usuarioLogado` e `hx_usuarios`.

### `perifericos.html`
- **`DB` (objeto completo)** — migrado de chave `hexacore_*` para:
  - Usuários: `hx_usuarios`
  - Sessão: `hx_usuarioLogado`
  - Carrinho: `hx_carrinho_{uid}`
  - Favoritos: `hx_favoritos_{uid}`
  - Pedidos: `hx_pedidos_{uid}`
  - Endereços: `hx_enderecos_{uid}`
- **`DB.setUsuarioLogado()`** — agora escreve as chaves globais.
- **`DB.logoutUsuario()`** — agora remove as chaves globais.
- **`atualizarHeaderAuth()`** — agora exibe `"👤 Olá, [nome]"` quando logado.
- **`logout()`** — função global adicionada (chama `fazerLogout()`).

---

## Fluxo de login único

```
Usuário faz login em qualquer página
  → dados gravados em hx_usuarioLogado (objeto completo)
  → usuarioLogado = "true"
  → nomeUsuario = "João"
  → emailUsuario = "joao@email.com"

Usuário navega para outra página
  → init() lê hx_usuarioLogado
  → encontra sessão ativa
  → atualiza header automaticamente ("Olá, João")
  → modal de login NÃO é exibido

Usuário clica em logout() (em qualquer página)
  → remove hx_usuarioLogado
  → remove usuarioLogado, nomeUsuario, emailUsuario
  → header volta para "Minha Conta"
```

---

## Atenção ao testar pela primeira vez

Se houver contas criadas antes desta atualização (com chaves antigas como `hxc_sessao` ou `hexacore_usuarioLogado`), o usuário precisará se cadastrar novamente — pois as chaves antigas foram unificadas. Carrinhos, favoritos e pedidos antigos também serão perdidos, pois o prefixo das chaves mudou.

Para preservar dados de produção, seria necessário um script de migração — mas como se trata de um projeto de desenvolvimento, o cadastro novo é suficiente.
