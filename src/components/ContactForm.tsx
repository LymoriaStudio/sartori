import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle } from 'lucide-react'
import { useState } from 'react'

const schema = z.object({
  nome: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  telefone: z
    .string()
    .min(10, 'Telefone inválido — mínimo 10 dígitos')
    .regex(/^[\d\s()\-+]+$/, 'Use apenas números e os caracteres ( ) - +'),
  email: z.string().email('E-mail inválido'),
  mensagem: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
})

type FormData = z.infer<typeof schema>

function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return (
    <p className="text-sartori-red-light text-[12px] font-montserrat mt-1 animate-[fadeIn_.15s_ease]">
      {message}
    </p>
  )
}

/** Allow only digits and phone formatting chars: space ( ) - + */
function onlyPhoneChars(e: React.KeyboardEvent<HTMLInputElement>) {
  const allowed = [
    'Backspace', 'Delete', 'Tab', 'Escape', 'Enter',
    'Home', 'End', 'ArrowLeft', 'ArrowRight',
  ]
  if (allowed.includes(e.key)) return
  if (e.ctrlKey || e.metaKey) return  // allow Ctrl+A/C/V/X
  if (!/[\d\s()\-+]/.test(e.key)) e.preventDefault()
}

function sanitizePhone(value: string) {
  return value.replace(/[^\d\s()\-+]/g, '')
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  })

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 800))
    console.log('Formulário enviado:', data)
    setSubmitted(true)
    reset()
    setTimeout(() => setSubmitted(false), 5000)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center h-full gap-4 py-16">
        <CheckCircle size={56} className="text-green-500" />
        <p className="font-lexend text-[22px] text-sartori-dark text-center tracking-tight">
          Mensagem enviada com sucesso!
        </p>
        <p className="font-montserrat text-[15px] text-[#7c7c7c] text-center">
          Em breve nossa equipe entrará em contato.
        </p>
      </div>
    )
  }

  // Shared input classes
  const inputCls = (hasError: boolean) =>
    `w-full bg-sartori-gray border rounded-md px-4 py-3 font-montserrat text-[14px] font-medium text-[#525252] outline-none transition-colors placeholder:text-[#a5a5a5] ${
      hasError
        ? 'border-sartori-red-light focus:border-sartori-red'
        : 'border-[#a5a5a5] focus:border-sartori-dark'
    }`

  // Email register — validate on blur + re-validate on change
  const emailReg = register('email')

  // Phone register — strip non-allowed chars on paste/input
  const phoneReg = register('telefone')

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">

      {/* Nome + Telefone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="font-lexend text-[18px] font-normal text-sartori-dark tracking-[-0.9px] block mb-1">
            Nome
          </label>
          <input
            {...register('nome')}
            type="text"
            placeholder="Digite o seu nome aqui"
            className={inputCls(!!errors.nome)}
          />
          <FieldError message={errors.nome?.message} />
        </div>

        <div>
          <label className="font-lexend text-[18px] font-normal text-sartori-dark tracking-[-0.9px] block mb-1">
            Telefone
          </label>
          <input
            {...phoneReg}
            type="tel"
            placeholder="(00) 00000-0000"
            className={inputCls(!!errors.telefone)}
            onKeyDown={onlyPhoneChars}
            onPaste={(e) => {
              e.preventDefault()
              const pasted = sanitizePhone(e.clipboardData.getData('text'))
              const input = e.currentTarget
              const start = input.selectionStart ?? input.value.length
              const end = input.selectionEnd ?? input.value.length
              const next = input.value.slice(0, start) + pasted + input.value.slice(end)
              // Manually fire onChange so RHF state updates
              const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
                window.HTMLInputElement.prototype, 'value'
              )?.set
              nativeInputValueSetter?.call(input, next)
              input.dispatchEvent(new Event('input', { bubbles: true }))
            }}
          />
          <FieldError message={errors.telefone?.message} />
        </div>
      </div>

      {/* Email — validates on blur */}
      <div>
        <label className="font-lexend text-[18px] font-normal text-sartori-dark tracking-[-0.9px] block mb-1">
          Email
        </label>
        <input
          {...emailReg}
          type="email"
          placeholder="Digite o seu Email aqui"
          className={inputCls(!!errors.email)}
          onBlur={(e) => {
            emailReg.onBlur(e)      // RHF internal blur
            trigger('email')        // validate immediately on blur
          }}
        />
        <FieldError message={errors.email?.message} />
      </div>

      {/* Mensagem */}
      <div>
        <label className="font-lexend text-[18px] font-normal text-sartori-dark tracking-[-0.9px] block mb-1">
          Mensagem
        </label>
        <textarea
          {...register('mensagem')}
          placeholder="Como podemos ajudar?"
          rows={4}
          className={inputCls(!!errors.mensagem)}
          style={{ resize: 'none' }}
        />
        <FieldError message={errors.mensagem?.message} />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-[52px] bg-sartori-red-light border border-sartori-red-light text-sartori-gray font-montserrat font-semibold text-[16px] rounded-md hover:bg-sartori-red transition-colors disabled:opacity-60 disabled:cursor-not-allowed mt-1"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
  )
}
