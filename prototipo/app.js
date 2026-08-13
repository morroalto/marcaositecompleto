/* ============================================================
   PROTÓTIPO — comportamento
   Vanilla, sem dependência. Na versão Next isso vira Server Component
   + uma ilha de cliente só no triângulo e no formulário.
   ============================================================ */
(function () {
  'use strict';

  var reduzMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- COUNTDOWN — 4 de outubro de 2026 ---------- */
  (function () {
    var alvo = new Date('2026-10-04T08:00:00-03:00');
    var el = document.getElementById('dias');
    if (!el) return;
    var dias = Math.max(0, Math.ceil((alvo - new Date()) / 86400000));
    el.textContent = dias;
  })();

  /* ---------- MOVIMENTO 3: um reveal, só na virada de assunto ---------- */
  (function () {
    var alvos = document.querySelectorAll('.mv-rev');
    if (reduzMovimento || !('IntersectionObserver' in window)) {
      alvos.forEach(function (n) { n.classList.add('visivel'); });
      return;
    }
    var io = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visivel'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -12% 0px' });
    alvos.forEach(function (n) { io.observe(n); });
  })();

  /* ============================================================
     TRIÂNGULO DA ESCUTA
     Estado vazio é o estado REAL: não há registro confirmado.
     O botão de demonstração existe só no protótipo.
     ============================================================ */

  var CIDADES = {
    itapemirim: { nome: 'Itapemirim',         setor: 'Pesca' },
    marataizes: { nome: 'Marataízes',         setor: 'Agricultura' },
    kennedy:    { nome: 'Presidente Kennedy', setor: 'Petróleo' }
  };

  /* DADOS DE EXEMPLO — texto propositalmente marcado como exemplo,
     para nunca ser confundido com registro real. */
  var EXEMPLO = {
    itapemirim: [
      { local: 'EXEMPLO — Itaipava', data: '2026-07-12', ouvimos: 'EXEMPLO de demanda registrada na escuta.' },
      { local: 'EXEMPLO — Itaóca',   data: '2026-07-29', ouvimos: 'EXEMPLO de demanda registrada na escuta.' }
    ],
    marataizes: [
      { local: 'EXEMPLO — Centro',   data: '2026-08-03', ouvimos: 'EXEMPLO de demanda registrada na escuta.' }
    ],
    kennedy: []
  };

  var modoExemplo = false;
  var selecionada = null;

  var lobos   = document.querySelectorAll('.mv-lobo');
  var botoes  = document.querySelectorAll('.mv-lobo-btn');
  var lista   = document.getElementById('lista-escuta');
  var btnDemo = document.getElementById('btn-demo');

  function registros(slug) {
    return modoExemplo ? (EXEMPLO[slug] || []) : [];
  }

  function dataBR(iso) {
    var p = iso.split('-');
    return p[2] + '/' + p[1] + '/' + p[0];
  }

  function pintar() {
    lobos.forEach(function (g) {
      var slug = g.dataset.cidade;
      var tem = registros(slug).length > 0;
      g.dataset.estado = tem ? 'cheio' : 'vazio';
      g.dataset.ativo = (selecionada === slug) ? 'true' : 'false';
    });

    botoes.forEach(function (b) {
      var slug = b.dataset.alvo;
      var tem = registros(slug).length > 0;
      var c = CIDADES[slug];
      b.dataset.estado = tem ? 'cheio' : 'vazio';
      b.setAttribute('aria-pressed', selecionada === slug ? 'true' : 'false');
      b.setAttribute('aria-label',
        c.nome + ' — ' + (tem
          ? registros(slug).length + ' registro(s) de escuta, o mais recente em ' + dataBR(registros(slug)[registros(slug).length - 1].data)
          : 'ainda não temos registro de escuta publicado aqui'));
    });

    /* fallback em lista: sempre no DOM, sempre com a mesma informação */
    lista.querySelectorAll('li').forEach(function (li) {
      var slug = li.dataset.cidade;
      var regs = registros(slug);
      var alvo = li.querySelector('.registros');
      li.dataset.selecionada = (selecionada === slug) ? 'true' : 'false';

      if (!regs.length) {
        alvo.className = 'registros';
        alvo.textContent = 'Ainda não temos registro de escuta publicado aqui.';
        return;
      }
      alvo.className = 'registros';
      alvo.innerHTML = regs.map(function (r) {
        return '<span class="mv-data">' + dataBR(r.data) + '</span> · <strong>' +
               esc(r.local) + '</strong><br>' + esc(r.ouvimos);
      }).join('<br><br>');
    });
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c];
    });
  }

  botoes.forEach(function (b) {
    b.addEventListener('click', function () {
      var slug = b.dataset.alvo;
      selecionada = (selecionada === slug) ? null : slug;
      pintar();
      if (selecionada) {
        var li = lista.querySelector('li[data-cidade="' + selecionada + '"]');
        if (li) li.scrollIntoView({ behavior: reduzMovimento ? 'auto' : 'smooth', block: 'nearest' });
      }
    });
  });

  if (btnDemo) {
    btnDemo.addEventListener('click', function () {
      modoExemplo = !modoExemplo;
      btnDemo.textContent = modoExemplo ? 'Voltar ao estado real (vazio)' : 'Ver com dados de exemplo';
      pintar();
    });
  }

  pintar();

  /* ============================================================
     FORMULÁRIO — useState-like, validação simples, honeypot.
     Sem react-hook-form, sem zod (erro 2 da vault).
     ============================================================ */
  (function () {
    var form = document.getElementById('form-apoiador');
    if (!form) return;
    var erro = document.getElementById('form-erro');
    var ok = document.getElementById('form-ok');
    var btn = document.getElementById('btn-enviar');

    function falhar(msg, campo) {
      erro.textContent = msg;
      erro.hidden = false;
      if (campo) {
        campo.closest('.mv-campo').dataset.erro = 'true';
        campo.focus();
      }
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      erro.hidden = true;
      ok.hidden = true;
      form.querySelectorAll('.mv-campo').forEach(function (f) { f.dataset.erro = 'false'; });

      var d = new FormData(form);

      if (d.get('site')) return;                       /* honeypot: bot, silêncio */

      var nome = (d.get('nome') || '').trim();
      if (nome.split(/\s+/).filter(Boolean).length < 2)
        return falhar('Escreva seu nome e sobrenome.', form.nome);

      var zap = (d.get('zap') || '').replace(/\D/g, '');
      if (zap.length < 10)
        return falhar('O WhatsApp precisa ter DDD e número — ex.: (28) 90000-0000.', form.zap);

      if (!d.get('cidade'))
        return falhar('Escolha sua cidade.', form.cidade);

      if (!d.get('lgpd'))
        return falhar('Marque a autorização de contato para a gente poder falar com você.',
                      form.querySelector('[name=lgpd]'));

      /* estado CARREGANDO — largura travada para não gerar CLS */
      btn.disabled = true;
      var largura = btn.offsetWidth;
      btn.style.width = largura + 'px';
      btn.textContent = 'Enviando…';

      setTimeout(function () {
        btn.disabled = false;
        btn.textContent = 'Enviar meu cadastro';
        btn.style.width = '';
        ok.hidden = false;
        form.reset();
        ok.focus && ok.focus();
      }, 900);
    });
  })();

})();
