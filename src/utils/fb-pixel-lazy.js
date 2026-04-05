/**
 * Pixel do Facebook — Carregamento Lazy
 * 
 * Estratégia: adiar o carregamento do fbevents.js até DEPOIS do LCP.
 * Remove ~94 KiB do caminho crítico de renderização.
 */

const FB_PIXEL_ID = '1445174513077111'; // ID real extraído do index.html

/**
 * Inicializa o Pixel do Facebook de forma lazy.
 * 
 * Espera pelo evento 'load' da janela + 3s de delay para garantir
 * que o LCP já ocorreu antes de carregar o fbevents.js.
 * 
 * Em dispositivos lentos, usa IntersectionObserver como gatilho
 * alternativo (carrega quando o usuário começa a rolar).
 */
export function initFbPixel() {
  // Não rodar no servidor (SSR)
  if (typeof window === 'undefined') return;
  
  // Opcional: ignorar no ambiente de desenvolvimento
  if (import.meta.env && import.meta.env.DEV) {
    console.log('[FbPixel] Ambiente dev — pixel não carregado.');
    return;
  }

  // Estratégia 1: aguarda window.load + 3 segundos
  window.addEventListener('load', () => {
    setTimeout(() => {
      _loadPixel();
    }, 3000);
  });

  // Estratégia 2 (fallback): se o usuário interagir antes dos 3s, carrega imediatamente
  const earlyEvents = ['mousedown', 'touchstart', 'keydown', 'scroll'];
  
  function onEarlyInteraction() {
    _loadPixel();
    earlyEvents.forEach(e => window.removeEventListener(e, onEarlyInteraction));
  }
  
  earlyEvents.forEach(e => 
    window.addEventListener(e, onEarlyInteraction, { once: true, passive: true })
  );
}

// Controle interno para evitar duplo carregamento
let _pixelLoaded = false;

function _loadPixel() {
  if (_pixelLoaded) return;
  _pixelLoaded = true;

  // Stub do fbq — coleta eventos disparados ANTES do script carregar
  if (!window.fbq) {
    const fbq = function() {
      fbq.callMethod
        ? fbq.callMethod.apply(fbq, arguments)
        : fbq.queue.push(arguments);
    };
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = '2.0';
    fbq.queue = [];
    window.fbq = fbq;
    window._fbq = fbq;
  }

  // Injeta o script do Facebook no DOM
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://connect.facebook.net/en_US/fbevents.js';
  
  script.onload = () => {
    // Agora que o script carregou, dispara os eventos padrão
    window.fbq('init', FB_PIXEL_ID);
    window.fbq('track', 'PageView');
    console.log('[FbPixel] Carregado com sucesso (lazy).');
  };

  script.onerror = () => {
    console.warn('[FbPixel] Falha ao carregar fbevents.js.');
  };

  document.head.appendChild(script);

  // Noscript fallback (acessibilidade e rastreamento sem JS)
  const noscript = document.createElement('noscript');
  noscript.innerHTML = `<img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1"/>`;
  document.body.appendChild(noscript);
}

/**
 * Rastreia eventos de conversão manualmente.
 */
export function trackFbEvent(eventName, params = {}) {
  if (typeof window === 'undefined' || !window.fbq) return;
  window.fbq('track', eventName, params);
}
