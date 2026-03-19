import { useState } from 'react';
import { Lock } from 'lucide-react';

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const applyPhoneMask = (val) => {
    // Remove all non-digits
    val = val.replace(/\D/g, '');
    
    // Limit to 11 digits
    if (val.length > 11) val = val.slice(0, 11);

    // Apply mask (99) 9999-9999 or (99) 99999-9999
    if (val.length <= 10) {
      val = val.replace(/^(\d{2})(\d)/g, '($1) $2');
      val = val.replace(/(\d{4})(\d)/, '$1-$2');
    } else {
      val = val.replace(/^(\d{2})(\d)/g, '($1) $2');
      val = val.replace(/(\d{5})(\d)/, '$1-$2');
    }
    return val;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    let processedValue = value;
    if (name === 'phone') {
      processedValue = applyPhoneMask(value);
    }

    setFormData({
      ...formData,
      [name]: processedValue,
    });
    
    // Clear error on change
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
    if (submitError) {
      setSubmitError(null);
    }
  };

  const validate = () => {
    let newErrors = {};
    
    if (formData.name.trim().length < 3) {
      newErrors.name = 'Por favor, insira pelo menos 3 caracteres.';
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Por favor, insira um e-mail válido.';
    }
    
    const rawPhone = formData.phone.replace(/\D/g, '');
    if (rawPhone.length < 10) {
      newErrors.phone = 'Por favor, insira um telefone válido com código de área.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    // Fallback URLs based on your .env file
    const actionUrl = import.meta.env.VITE_MAILERLITE_ACTION_URL || 'https://assets.mailerlite.com/jsonp/2197258/forms/182372481121650401/subscribe';
    const redirectUrl = import.meta.env.VITE_HOTMART_URL || 'https://pay.hotmart.com/U104935706N?bid=1773692838865';

    if (!actionUrl || !redirectUrl) {
      setSubmitError('Configuração inválida. Contate o suporte.');
      setIsSubmitting(false);
      return;
    }

    fetch(actionUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        'fields[name]': formData.name.trim(),
        'fields[email]': formData.email.trim(),
        'fields[phone]': formData.phone,
        'ml-submit': '1',
        'anticsrf': 'true',
        'double_optin': '0'
      })
    })
    .then(() => {
      // Com no-cors não conseguimos ler a resposta,
      // então aguardamos 1s e redirecionamos presumindo sucesso
      setTimeout(() => {
        window.location.href = redirectUrl;
      }, 1000);
    })
    .catch(() => {
      setSubmitError('Ocorreu um erro ao enviar. Tente novamente.');
      setIsSubmitting(false);
    });
  };

  return (
    <div className="w-full">
        <div className="mb-8 text-center">
          <h3 className="text-3xl font-serif text-vinho mb-3">Digite seus Dados e Crie seu Acesso:</h3>
          <p className="text-softblack/80 font-sans text-sm">
            Preencha seus dados abaixo para acessar o checkout oficial e garantir sua vaga.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-softblack mb-1.5 ml-1">
              Nome Completo *
            </label>
            <input
              aria-required="true"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Digite seu nome completo"
              disabled={isSubmitting}
              className={`w-full rounded-xl px-4 py-3.5 border bg-white focus:outline-none focus:ring-2 transition-all ${
                errors.name 
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                  : 'border-vinho/20 focus:border-vinho focus:ring-vinho/20 shadow-[0_0_15px_rgba(102,0,0,0.05)] focus:shadow-[0_0_20px_rgba(102,0,0,0.15)]'
              }`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-softblack mb-1.5 ml-1">
              Melhor E-mail *
            </label>
            <input
              aria-required="true"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="exemplo@email.com"
              disabled={isSubmitting}
              className={`w-full rounded-xl px-4 py-3.5 border bg-white focus:outline-none focus:ring-2 transition-all ${
                errors.email 
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                  : 'border-vinho/20 focus:border-vinho focus:ring-vinho/20 shadow-[0_0_15px_rgba(102,0,0,0.05)] focus:shadow-[0_0_20px_rgba(102,0,0,0.15)]'
              }`}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-softblack mb-1.5 ml-1">
              WhatsApp *
            </label>
            <input
              aria-required="true"
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(00) 00000-0000"
              disabled={isSubmitting}
              className={`w-full rounded-xl px-4 py-3.5 border bg-white focus:outline-none focus:ring-2 transition-all ${
                errors.phone 
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                  : 'border-vinho/20 focus:border-vinho focus:ring-vinho/20 shadow-[0_0_15px_rgba(102,0,0,0.05)] focus:shadow-[0_0_20px_rgba(102,0,0,0.15)]'
              }`}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1.5 ml-1">{errors.phone}</p>}
          </div>

          {submitError && (
            <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm text-center">
              {submitError}
            </div>
          )}

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-vinho to-[#8a0000] text-white font-bold text-[15px] uppercase tracking-wider transition-all duration-300 hover:brightness-110 hover:shadow-[0_8px_25px_-5px_rgba(102,0,0,0.4)] disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </span>
              ) : (
                'CONTINUAR MINHA INSCRIÇÃO ->'
              )}
            </button>
          </div>
          
          <div className="flex items-center justify-center gap-1.5 mt-4 text-softblack/50">
            <Lock size={14} className="opacity-70" />
            <span className="text-xs font-medium">Seus dados estão protegidos</span>
          </div>
        </form>
    </div>
  );
};

export default LeadForm;
