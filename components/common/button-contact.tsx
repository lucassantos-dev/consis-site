'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from 'lucide-react'

export default function  ContactModal() {
  const [isOpen, setIsOpen] = useState(false)
 // Estados para os campos
 const [formData, setFormData] = useState({
  name: '',
  email: '',
  telefone: '',
  message: '',
});

const [isSubmitting, setIsSubmitting] = useState(false);
const [successMessage, setSuccessMessage] = useState('');
const [errorMessage, setErrorMessage] = useState('');

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { id, value } = e.target;
  setFormData((prev) => ({ ...prev, [id]: value }));
};

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Aqui você adicionaria a lógica para enviar o formulário
    event.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');
    const phoneRegex = /^\d{2}\d{4,5}\d{4}$/;

    if (!phoneRegex.test(formData.telefone)) {
      setErrorMessage('Por favor, insira um telefone válido no formato "99 99999-9999".');
      setIsSubmitting(false);
      return;
    }
  
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Erro ao enviar o formulário.');
      }
  
      setSuccessMessage('Mensagem enviada com sucesso!');
      setFormData({ name: '', email: '', telefone: '', message: '' });
      setIsOpen(false);
    } catch (error) {
      setErrorMessage('Erro ao enviar a mensagem. Tente novamente mais tarde.');
      console.log(error)
    } finally {
      setIsSubmitting(false);
    }
    // console.log('Formulário enviado')
    // setIsOpen(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
    <DialogTrigger className="bg-[#405546] text-white hover:bg-[#324334]" asChild>
      <Button>Contato</Button>
    </DialogTrigger>
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Entre em Contato</DialogTitle>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Phone className="h-4 w-4" />
          <span className="col-span-3">+55 (88) 9 9408-7030</span>
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Mail className="h-4 w-4" />
          <span className="col-span-3">contato@consisconsultoria.com.br</span>
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <MapPin className="h-4 w-4" />
          <span className="col-span-3">Juazeiro do Norte, CE</span>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="name">Nome</Label>
          <Input
            type="text"
            id="name"
            placeholder="Seu nome"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="seu@email.com"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="telefone">Telefone</Label>
          <Input
            type="tel"
            id="telefone"
            placeholder="99 99999-9999"
            value={formData.telefone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="message">Mensagem</Label>
          <Textarea
            id="message"
            placeholder="Sua mensagem"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>
        <Button type="submit" className="w-full bg-[#405546]" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
        </Button>
      </form>
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </DialogContent>
  </Dialog>
  )
}